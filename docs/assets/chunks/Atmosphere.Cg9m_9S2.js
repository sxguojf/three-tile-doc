var G=Object.defineProperty;var H=(f,c,s)=>c in f?G(f,c,{enumerable:!0,configurable:!0,writable:!0,value:s}):f[c]=s;var I=(f,c,s)=>H(f,typeof c!="symbol"?c+"":c,s);import{f as p,V as g,S as K,d as U,U as V,q as $,R as D,M as W,aO as j,al as Z,as as F,aC as X,aZ as q,a_ as Q,a$ as Y,b0 as J,b1 as nn,b2 as en,b3 as on,ai as tn,aj as an,ak as rn,g as R}from"./index.D1y5qgwe.js";import{g as ln}from"./lil-gui.module.min.Vka56b52.js";import{a as sn,b as cn,u as un}from"./style.pzVcPuTj.js";import{u as dn}from"./useState.EiXjSKHF.js";import{d as fn,p as S,v as vn,x as mn,c as pn,o as gn,j as l,t as T,k as _,_ as hn}from"./framework.xbTv8SNN.js";const yn=`// precision highp float;
// precision highp int;
// precision highp sampler2D;

// 太阳
// uniform vec3 sun_color;// 太阳颜色
uniform float sunAngularDiameter;// 太阳角直径,默认为0.505度
uniform float mieDirectionalG;// 米式散射因子-方向光高光
uniform float Exposure;// 色调映射曝光

// 天空
// uniform float skyscale;
uniform float turbidity;// 浑浊度
uniform float skylineF;// 天际线
// uniform float rayleigh;// 瑞利散射
uniform float mieCoefficient;// 米氏因子（白）
uniform vec3 skyGlowColor;// 天空霞光颜色
uniform vec3 sunGlowColor;// 太阳霞光颜色
// uniform vec3 backSkyColor;// 背面天空颜色
uniform vec3 up;// 相机上方

// 云朵
uniform sampler2D map;// 云噪声图
uniform float uTime;// 时间
uniform float weaken;// 采样衰减因子
uniform float THICKNESS;// 云厚度
uniform int N_LIGHT_STEPS;// 光照计算迭代次数
uniform float curve;// 坐标高度曲率
uniform float speed;// 风速
uniform vec3 wind;// 风向
uniform float coverage;// 覆盖率
uniform float ABSORPTION;// 云的光线吸收率
uniform float mult;//位置变换系数，控制局部变化翻滚
uniform int N_MARCH_STEPS;// 云厚度迭代次数

// 雾
uniform float fogDensity;// 雾密度
uniform vec3 fogColor;// 雾颜色

varying vec3 vWorldPosition;// 当前片元的坐标（已转换）
varying vec3 vSunDirection;// 太阳方向
varying float vSunfade;// 边缘褪色-影响阳光范围
varying vec3 vBetaR;// 瑞利散射
varying float vSunE;// 光强

// 云--------------------------------------------------------------------------
const vec3 cameraPos = vec3(0.0, 0.0, 0.0);// 相机位置
const float pi = 3.141592653589793238462643383279502884197169;
const float TWO_PI = 6.28318530717958648;

// 采集噪声值
float noise(vec3 p) {
    return texture(map, p.xz).x;
}

 // 简单的伪随机函数
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float simpleNoise3D(vec3 p) {
    return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453123);
}
// 3D噪声函数（简化版）
float noise3D(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);

    // 三线性插值
    float a = random(i.xy + i.z * 0.1);
    float b = random((i + vec3(1.0, 0.0, 0.0)).xy + i.z * 0.1);
    float c = random((i + vec3(0.0, 1.0, 0.0)).xy + i.z * 0.1);
    float d = random((i + vec3(1.0, 1.0, 0.0)).xy + i.z * 0.1);

    float e = random((i + vec3(0.0, 0.0, 1.0)).xy + (i.z + 1.0) * 0.1);
    float f2 = random((i + vec3(1.0, 0.0, 1.0)).xy + (i.z + 1.0) * 0.1);
    float g = random((i + vec3(0.0, 1.0, 1.0)).xy + (i.z + 1.0) * 0.1);
    float h = random((i + vec3(1.0, 1.0, 1.0)).xy + (i.z + 1.0) * 0.1);

    vec3 u = f * f * (3.0 - 2.0 * f);

    float x1 = mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
    float x2 = mix(mix(e, f2, u.x), mix(g, h, u.x), u.y);

    return mix(x1, x2, u.z);

}

// 3*3采样位置变换矩阵
const mat3 m = mat3(0.00, 0.80, 0.60, -0.80, 0.36, -0.48, -0.60, -0.48, 0.64);

// 计算叠加噪声值（模拟分形布朗克运动）
float fbm(vec3 p) {

    // float t = 0.;
    // float a = pow(weaken, 0.01);// 初始系数

    // for(int i = 0; i < 6; i++) {
    //     t += a * noise3D(p);
    //     p = m * p * mult;
    //     a *= weaken;
    // }

    // return t;

    float value = 0.0;
    float amplitude = weaken;//0.5; //云量
    float frequency = mult;//1.0;// 振幅（控制颗粒度大小）

    for(int i = 0; i < 5; i++) {
        value += amplitude * noise3D(p);
        amplitude *= 0.6;
        p = m * p * mult;
    }

    return value;
}

// 分形布朗运动实现
float fbm1(vec3 p) {
    float t;
    float mult = 2.76434;  // 频率倍增因子

    // 叠加不同频率和振幅的噪声
    t = 0.51749673 * noise3D(p);
    p = m * p * mult;
    t += 0.25584929 * noise3D(p);
    p = m * p * mult;
    t += 0.12527603 * noise3D(p);
    p = m * p * mult;
    t += 0.06255931 * noise3D(p);

    return t;
}

// 云密度（返回 pos 位置的云密度值）cov为密度阈值参数
float cloud_density(vec3 pos, float cov) {
    float dens = fbm(pos);// 修改
    return smoothstep(cov, 1., dens);// 阈值缩放
}

// 云亮度计算
float cloud_light(vec3 pos, vec3 sundir_step, float cov) {
    float T = 1.0;// 透明度，transmitance
    float dens;// 密度
    float T_i;// 透射率

    for(int i = 0; i < N_LIGHT_STEPS; i++) {
        dens = cloud_density(pos, cov);
        T_i = exp(-ABSORPTION * dens);
        T *= T_i;
        pos += sundir_step;
    }
    T = clamp(T, 0., 1.);
    return T;
}

// 云渲染（根据天空（云）坐标和视角方向计算当前方向的云颜色值和透明度）
vec4 render_clouds(vec3 rayOrigin, vec3 rayDirection) {
    float march_step = (THICKNESS + .0002) / float(N_MARCH_STEPS);// 云迭代步长
    vec3 pos = rayOrigin + speed * vec3(uTime * wind.x, uTime * wind.y, uTime * wind.z);// 云初始位置
    vec3 dir_step = rayDirection * march_step;// 计算云迭代方向步长

    vec3 light_step = normalize(vSunDirection - cameraPos) * march_step;// 光线迭代步长

    float T = 1.0;// 云初始透明度
    vec3 C = vec3(0.0);// 云初始颜色
    float alpha = 0.0;// 初始不透明度
    float dens;// 密度
    float T_i;// 透射率
    float cloudLight;// 云透光率

    for(int i = 0; i < N_MARCH_STEPS; i++) {
        dens = cloud_density(pos, 1. - coverage);// 密度

        T_i = exp(-ABSORPTION * dens * march_step);// 累积系数
        T *= T_i;// 累积透明度
        cloudLight = cloud_light(pos, light_step, 1. - coverage);// 云透光率（实现太阳照到云的高亮）
        C += T * cloudLight * dens * march_step;//累加片元颜色
        C = mix(C * 0.9, C, clamp(cloudLight, 0.0, 1.0));//颜色混合（阴影）
        alpha += (1.0 - T_i) * (1.0 - alpha);// 片元颜色透明度

        if(alpha > .99)
            break;// 透明度接近1，提前退出循环节省性能开销
        pos += dir_step;
    }

    return vec4(C, alpha);
}

// 天空----------------------------------------------------------------------------------------
const float rayleighZenithLength = 8.4E3;// 瑞利光程
const float mieZenithLength = 1.25E3;// 米氏光程
const float THREE_OVER_SIXTEENPI = 0.05968310365946075;// 3.0 / ( 16.0 * pi )
const float ONE_OVER_FOURPI = 0.07957747154594767;// 1.0 / ( 4.0 * pi )
const vec3 MieConst = vec3(1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14);// RGB米氏散射值

// 瑞利散射相位因子
float rayleighPhase(float cosTheta) {
    return THREE_OVER_SIXTEENPI * (1.0 + pow(cosTheta, 2.0));
}

// 米氏散射相位因子
float hgPhase(float cosTheta, float g) {
    float g2 = pow(g, 2.0);
    float inverse = 1.0 / pow(1.0 - 2.0 * g * cosTheta + g2, 1.5);
    return ONE_OVER_FOURPI * ((1.0 - g2) * inverse);
}

// 米氏散射计算
vec3 totalMie(float T) {
    float c = (0.2 * T) * 10E-18;
    return 0.434 * c * MieConst;
}

// 色彩逆映射
vec3 ReRRTAndODTFit(vec3 color) {
    vec3 ret;
    ret = -(sqrt(10.0) * sqrt((-187345541948750.0 * pow(color, vec3(2.0))) + 232671271403227.0 * color + 241563894490.0) + 21647550.0 * color - 1228930.0) / (98372900.0 * color - 100000000.0);
    return ret;
}

// 色调逆映射
vec3 ReACESToneMapping(vec3 color) {
    mat3 InputM_I = mat3(1.76474, -0.14703, -0.03634, -0.67578, 1.16025, -0.16244, -0.08896, -0.01322, 1.19877);
    mat3 Output_I = mat3(0.64304, 0.05927, 0.005962, 0.31119, 0.93144, 0.06393, 0.04578, 0.00929, 0.93012);

    vec3 ret;
    ret = InputM_I * ReRRTAndODTFit(Output_I * color) * 0.6 / Exposure;
    return ret;
}

void main() {

    // 归一化坐标
    vec3 pos = normalize(vWorldPosition);

    // 丢弃地平线以下的片元
    if(pos.y < -0.2) {
        discard;
        return;
    }

    // 云初始颜色
    vec4 cld = vec4(1., 1., 1., 1.);    
    // 只渲染地平线以上的云
    if(pos.y > 0.) {
        float df = 1. / (curve * pos.y + .1);// 坐标距离因子,近小远大
        vec3 posS = .4 * df * pos;// 云(天空)坐标
        vec3 raydir = normalize(posS - cameraPos);// 云(天空)方向
        cld = render_clouds(posS, raydir);
    }

    // 天空
    vec3 direction = normalize(vWorldPosition - cameraPos);
    float view = smoothstep(0.0, 1.0, dot(up, direction));// 0~1
    float zenithAngle = acos(max(0.0, dot(up, direction)));
    float inverse = 1.0 / (cos(zenithAngle) + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / pi), -1.253));
    float sR = rayleighZenithLength * inverse;// 瑞利天顶长度
    float sM = mieZenithLength * inverse;// 米式天顶长度
    float sun_up = smoothstep(0., 1., dot(up, vSunDirection));

    // 米氏系数mie coefficients		
    vec3 vBetaM = totalMie(turbidity) * mieCoefficient;// 天空米式系数

    // 联合消光（散射）因子combined extinction factor
    vec3 Fex = exp(-(vBetaR * sR + vBetaM * sM));// 天空
    vec3 Fex_c = exp(-(vBetaR * sR + vBetaM * sM * (10000. * cld.a + 1.)) / 2.);// 云

    float cosTheta = dot(direction, vSunDirection);//片元方向和太阳方向的夹角余弦

    // 太阳
    float sunAngularDiameterCos = cos(sunAngularDiameter * pi / 180.);// 太阳角直径余弦
    float sundisk = smoothstep(sunAngularDiameterCos, 1., cosTheta);// 太阳圆盘
    vec3 suncolor = vSunE * 19000. * Fex * sundisk;// 圆盘颜色
    suncolor *= 1. - smoothstep(0., 1., cld.a * 2000.);// 云遮挡

    // 瑞利散射
    float rPhase = rayleighPhase(cosTheta * 0.5 + 0.5);//瑞利相位,取值:0.736~1.178
    vec3 betaRTheta = vBetaR * rPhase;// 天空的瑞利散射
    vec3 cloudBetaR = vBetaR * rPhase;// 云的瑞利散射

    // 米氏散射
    float a = 1. - smoothstep(0., 1., cld.a * 2000.);// 单散射的反射率
    float mPhase = a * hgPhase(cosTheta, mieDirectionalG);
    vec3 betaMTheta = vBetaM * mPhase;

    // 天空颜色
    vec3 Lin = pow(vSunE * ((betaRTheta + betaMTheta) / (vBetaR + vBetaM)) * (1.0 - Fex), vec3(3.5));//天空颜色蓝度1.5
    Lin *= mix(vec3(1.0), pow(vSunE * ((betaRTheta + betaMTheta) / (vBetaR + vBetaM)) * Fex, vec3(1.0 / 2.0)), clamp(pow(1.0 - dot(up, vSunDirection), 5.), 0.0, 1.0));

    vec3 L0 = vec3(0.1) * Fex;// 天空底色（夜空）

    // 云颜色
    vec3 cloud = pow(vSunE * ((cloudBetaR + betaMTheta) / (vBetaR + vBetaM)) * (1.0 - Fex_c), vec3(1.5));//天空颜色蓝度1.5
    cloud *= mix(vec3(1.0), pow(vSunE * ((cloudBetaR + betaMTheta) / (vBetaR + vBetaM)) * Fex_c, vec3(1.0 / 2.0)), clamp(pow(1.0 - dot(up, vSunDirection), 5.), 0.0, 1.0));
    cloud *= 1. + cld.rgb * 2000.;// 云阴影

    // 早晚霞
    // vec3 delta2 = pow(pos.xyz - vSunDirection.xyz, vec3(2.));
    // vec2 glowRange = vec2(4., 0.5);
    // vec2 R = vec2(delta2.x + delta2.z, delta2.y) / glowRange;
    // float deltaR = R.x + R.y;// 晚霞范围（椭圆）
    // float f = 1. - smoothstep(0., 0.26, sun_up);
    // vec3 cloudGlow = ReACESToneMapping(skyGlowColor);
    // cloud = mix(cloud, cloudGlow, f);// 基础红霞
    // if(pos.y > 0. && deltaR < 1.) {
    //     vec3 sunFixColor = ReACESToneMapping(sunGlowColor);
    //     cloud = mix(cloud, sunFixColor, f * (1. - deltaR));
    // }

    vec3 bluecolor = vec3(0.0002, 0.00045, 0.0008);// 蓝天修正偏移色

    vec3 texColor = (Lin + L0) * 0.04 + bluecolor;// Lin为蓝色天空，L0为夜空底色；
    vec3 retColor = pow(texColor, vec3(1.0 / (1.2 + (1.2 * vSunfade))));

    float d_factor = 1. - smoothstep(0., skylineF, pos.y);// 天际线距离因子,近小远大
    cloud = mix(cloud, retColor, clamp(d_factor, 0., 1.));//云天际线颜色
    retColor = mix(retColor + suncolor, cloud, clamp((cld.a) * 2000., 0., 1.));// 混合云和天空颜色

    // vec3 backcolor = ReACESToneMapping(backSkyColor);// 背景色色调映射
    // vec3 backcolor = ReACESToneMapping(sRGBToLinear(vec4(backSkyColor,1.0)).rgb);// 背景色色调映射

    // backcolor = sRGBToLinear(vec4(backcolor,1.0)).rgb;// 转换为线性空间
    // if(pos.y < 0.) {
    //     retColor = mix(backcolor, retColor, pow(1. + pos.y, 30.));
    // }// 地面阴影
    vec3 fog_Color = ReACESToneMapping(fogColor);
    retColor = mix(retColor, fog_Color, fogDensity);// 雾效果
    retColor = clamp(retColor, 0., 14.);// 颜色范围

    gl_FragColor = vec4(retColor, 1.0);// 输出片元颜色

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}`,Cn=`// 太阳\r
uniform float Intensity;// 亮度\r
uniform vec3 sunPosition;// 太阳位置\r
\r
// 天空\r
// uniform float skyscale;\r
uniform float rayleigh;// 瑞利散射\r
uniform vec3 up;// 相机上方\r
\r
varying vec3 vWorldPosition;// 世界坐标\r
varying vec3 vSunDirection;// 阳光方向\r
varying float vSunfade;// 太阳照射范围\r
varying vec3 vBetaR;// 瑞利系数\r
varying float vSunE;// 阳光强度\r
\r
// 相关常数\r
const float e = 2.71828182845904523536028747135266249775724709369995957;// 大气散射常数\r
const float pi = 3.141592653589793238462643383279502884197169; \r
const vec3 totalRayleigh = vec3(5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5);// RGB瑞利散射： (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))\r
const float cutoffAngle = 1.6110731556870734; //  pi / 1.95 \r
const float steepness = 1.5;\r
const float EE = 1000.0;\r
\r
float sunIntensity(float zenithAngleCos) {\r
    zenithAngleCos = clamp(zenithAngleCos, -1.0, 1.0);\r
    return Intensity * EE * max(0.0, 1.0 - pow(e, -((cutoffAngle - acos(zenithAngleCos)) / steepness)));\r
}\r
\r
void main() {\r
    // vec4 worldPosition = skyscale*modelMatrix * vec4( position, 1.0 );\r
    // vWorldPosition = skyscale*worldPosition.xyz;    \r
    // gl_Position = skyscale * projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
\r
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);\r
    vWorldPosition = worldPosition.xyz;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
\r
    gl_Position.z = gl_Position.w; // set z to camera.far\r
\r
    vSunDirection = normalize(sunPosition);// 归一化\r
    float sun_up = dot(vSunDirection, up);\r
\r
    vSunE = sunIntensity(sun_up);\r
    vSunfade = 1.0 - clamp(1.0 - exp((sun_up)), 0.0, 1.0);// 太阳照射范围\r
\r
    float rayleighCoefficient = rayleigh - (1.0 * (1.0 - vSunfade));\r
    vBetaR = totalRayleigh * rayleighCoefficient;// 瑞利系数\r
}`,b={uniforms:{sun_color:{value:new p(1,0,0)},sunAngularDiameter:{value:.505},Intensity:{value:1},sunPosition:{value:new g},mieDirectionalG:{value:1},Exposure:{value:1},turbidity:{value:10},skylineF:{value:.2},rayleigh:{value:.4},mieCoefficient:{value:.005},skyGlowColor:{value:new p(1,.5,.5)},sunGlowColor:{value:new p(.9216,.2431,.1059)},backSkyColor:{value:new p(.1,.1,.1)},up:{value:new g(0,1,0)},map:{value:null},uTime:{value:1},weaken:{value:.5},THICKNESS:{value:.001},N_LIGHT_STEPS:{value:3},curve:{value:.3},speed:{value:.5},wind:{value:new g(.3,.1,.3)},coverage:{value:.5},ABSORPTION:{value:.45},mult:{value:1},N_MARCH_STEPS:{value:3},fogColor:{value:new p(.7,.7,.7)},fogDensity:{value:1e-4}},vertexShader:Cn,fragmentShader:yn};class Sn extends K{constructor(c){super({uniforms:V.clone(b.uniforms),fragmentShader:b.fragmentShader,vertexShader:b.vertexShader,side:U,depthWrite:!1});const s=new $().load(c);s.wrapS=D,s.wrapT=D,s.generateMipmaps=!1,this.uniforms.map.value=s}}class Tn extends W{constructor(s={url:""}){const h=s.url||"../../images/perlin256.png",y=new Sn(h);super(new j,y);I(this,"isSky",!0);this.onBeforeRender=()=>{y.uniforms.uTime.value=performance.now()*.001}}}const _n={class:"demo-container"},wn={class:"state"},xn={class:"location"},Rn={class:"loading"},bn={class:"weather",tabindex:"-1"},kn=fn({__name:"Atmosphere",setup(f){var L;const c=()=>{const t=tn.create({imgSource:[new rn],demSource:new an,lon0:90});return t.rotateX(-Math.PI/2),t},s=(t,o,e,r)=>{t.controls.target.copy(o.geo2world(e)),t.camera.position.copy(o.geo2world(r))},h=S(null),y=S(),w=S(),u=c(),a=new Z;a.renderer.toneMapping=F;const m=new Tn;m.scale.setScalar(2e7),u.add(m);const x=sn(u,a),N=cn(u);un(a.controls,y);const k=S(),A=dn(k),E=()=>{A.update()};a.addEventListener("update",E),vn(()=>{if(!h.value){console.error("map or cssrenderer or compass container is null");return}a.addTo(h.value),a.scene.add(u),s(a,u,new g(109,34,500),new g(109.1,34.1,3e3)),u.addEventListener("update",P),w.value&&B()});const P=()=>{X(u,a.camera)};let v;mn(()=>{var t;a.removeEventListener("update",E),u.removeEventListener("update",P),v==null||v.destroy(),m.geometry.dispose(),(t=m.material.uniforms.map.value)==null||t.dispose(),m.material.dispose(),u.dispose()});const C={mult:2,weaken:.5,THICKNESS:80,ABSORPTION:.2,N_MARCH_STEPS:3,N_LIGHT_STEPS:3,coverage:.6,skylineF:.2,curve:.3,speed:2,xfactor:.3,yfactor:.3,zfactor:.1,turbidity:10,rayleigh:.3,mieCoefficient:.002,mieDirectionalG:1,skyIntensity:.8,elevation:15,azimuth:180,sunSize:1,fogColor:((L=a.scene.fog)==null?void 0:L.color.clone())??new p(0),fogFactor:.5,ambLight:1,dirLight:1},n={...C,fogColor:C.fogColor.clone()},M=a.dirLight.position,z=()=>{var t;Object.assign(n,C),n.fogColor=C.fogColor.clone(),a.ambLight.intensity=n.ambLight,a.dirLight.intensity=n.dirLight,(t=a.scene.fog)==null||t.color.set(11853567).convertLinearToSRGB()},i=()=>{var r;const t=R.degToRad(90-n.elevation),o=R.degToRad(n.azimuth);M.setFromSphericalCoords(1,t,o);const e=m.material.uniforms;e.sunPosition.value.copy(M),e.turbidity.value=n.turbidity,e.rayleigh.value=n.rayleigh,e.mieCoefficient.value=n.mieCoefficient,e.mieDirectionalG.value=n.mieDirectionalG,e.sunAngularDiameter.value=n.sunSize*.505,e.mult.value=n.mult,e.THICKNESS.value=n.THICKNESS/3e4,e.ABSORPTION.value=n.ABSORPTION,e.N_MARCH_STEPS.value=n.N_MARCH_STEPS,e.N_LIGHT_STEPS.value=n.N_LIGHT_STEPS,e.weaken.value=n.weaken,e.coverage.value=n.coverage,e.speed.value=n.speed/10,e.wind.value=new g(n.xfactor,n.yfactor,n.zfactor),e.skylineF.value=n.skylineF,e.curve.value=1-n.curve,e.Intensity.value=n.skyIntensity,a.fogFactor=n.fogFactor,(r=a.scene.fog)==null||r.color.set(n.fogColor),a.ambLight.intensity=n.ambLight,a.dirLight.intensity=n.dirLight,e.fogColor.value.set(n.fogColor),e.fogDensity.value=R.clamp(n.fogFactor,0,1)},B=()=>{i(),v=new ln({title:"选项",autoPlace:!1,container:w.value});const t=v.addFolder("场景");t.add(a.controls,"autoRotate").name("自动旋转").listen(),t.add(a.camera,"fov",10,120,.1).onChange(()=>{a.camera.updateProjectionMatrix()}).name("视场角FOV").listen(),t.add(a.ambLight,"intensity",0,5,.01).name("环境光强度").listen(),t.add(a.dirLight,"intensity",0,5,.01).name("平行光强度").listen(),t.addColor(n,"fogColor").onChange(i).name("雾颜色").listen(),t.add(n,"fogFactor",0,5,.01).name("雾浓度").onChange(i).listen(),t.add(a.renderer,"toneMapping",{NoToneMapping:on,LinearToneMapping:en,ReinhardToneMapping:nn,CineonToneMapping:J,ACESFilmicToneMapping:F,CustomToneMapping:Y,AgXToneMapping:Q,NeutralToneMapping:q}).name("色调映射模式").listen(),t.add(a.renderer,"toneMappingExposure",0,2,.01).name("色调映射曝光度").listen(),t.add(u,"LODThreshold",.5,5,.1).name("LOD阈值").listen();const o=v.addFolder("天空");o.add(n,"turbidity",0,20,1).onChange(i).name("浊度").listen(),o.add(n,"rayleigh",0,4,.001).onChange(i).name("瑞利系数").listen(),o.add(n,"mieCoefficient",0,.1,.001).onChange(i).name("米氏系数").listen(),o.add(n,"mieDirectionalG",0,.99999999999,.001).onChange(i).name("米氏方向因子").listen(),o.add(n,"skyIntensity",0,1,.01).onChange(i).name("天空亮度").listen();const e=v.addFolder("太阳");e.add(n,"elevation",0,90,.1).onChange(i).name("太阳高度").listen(),e.add(n,"azimuth",-180,180,.1).onChange(i).name("方位角").listen(),e.add(n,"sunSize",0,10,1).onChange(i).name("大小").listen();const r=v.addFolder("云");r.add(n,"mult",0,3,.01).onChange(i).name("频率").listen(),r.add(n,"weaken",0,1,.01).onChange(i).name("云量").listen(),r.add(n,"THICKNESS",0,100,.001).onChange(i).name("厚度").listen(),r.add(n,"ABSORPTION",0,1,.01).onChange(i).name("吸光率").listen(),r.add(n,"N_MARCH_STEPS",0,5,1).onChange(i).name("采样次数").listen(),r.add(n,"N_LIGHT_STEPS",0,10,1).onChange(i).name("阴影").listen(),r.add(n,"coverage",0,1,.01).onChange(i).name("覆盖率").listen(),r.add(n,"speed",0,10,.1).onChange(i).name("风速").listen(),r.add(n,"xfactor",-1,1,.01).onChange(i).name("风向X").listen(),r.add(n,"yfactor",-1,1,.01).onChange(i).name("风向Y").listen(),r.add(n,"zfactor",-1,1,.01).onChange(i).name("风向Z").listen(),r.add(n,"skylineF",0,1,.01).onChange(i).name("天际线").listen(),r.add(n,"curve",.1,.6,.01).onChange(i).name("高度").listen()},O={cloudy:{},sunny:{turbidity:15,rayleigh:.2,mieCoefficient:.001,weaken:.3,elevation:15,dirLight:2},overcast:{fogColor:0,fogFactor:.5,elevation:50,turbidity:20,rayleigh:.3,mieCoefficient:.06,mieDirectionalG:.998,mult:1.6,weaken:.6,THICKNESS:40,coverage:1,curve:.5,ambLight:1,dirLight:.5},foggy:{fogFactor:4,turbidity:20,rayleigh:2.5,weaken:.8,fogColor:13421772,elevation:50,ambLight:.5,dirLight:.5},sunrise:{elevation:0,sunSize:4,turbidity:10,rayleigh:2,mieCoefficient:1e-4,mieDirectionalG:.996,THICKNESS:60,weaken:.1,coverage:.4,skylineF:.6,curve:.1,fogFactor:.3,fogColor:0,ambLight:.5},morning:{elevation:19,turbidity:1,rayleigh:.05,mieCoefficient:.001,weaken:.5,THICKNESS:40,coverage:1,curve:.1,fogFactor:.3,ambLight:1,dirLight:1},evening:{elevation:0,sunSize:2,turbidity:6,rayleigh:1.8,mieCoefficient:.005,mieDirectionalG:.998,THICKNESS:60,weaken:.5,coverage:.3,skylineF:.6,curve:.1,fogFactor:.3,fogColor:15370522,ambLight:.8,dirLight:.8},nightGlow:{elevation:10,sunSize:2,turbidity:10,rayleigh:.6,mieCoefficient:.09,mieDirectionalG:.999999,THICKNESS:30,ABSORPTION:.8,weaken:.5,coverage:.4,skylineF:.2,fogFactor:2,fogColor:0,ambLight:.5,dirLight:.5},night:{elevation:15,turbidity:10,rayleigh:.5,mieCoefficient:.07,mieDirectionalG:.999,weaken:.65,skyIntensity:.06,fogFactor:2,fogColor:1118481,ambLight:.5,dirLight:0}},d=t=>{z();const o=O[t];if(!o){console.error(`未知的天气预设: ${t}`);return}const{fogColor:e,...r}=o;Object.assign(n,r),e!==void 0&&n.fogColor.set(e),i()};return(t,o)=>(gn(),pn("div",_n,[l("div",{ref_key:"viewerRef",ref:h,class:"map-container"},null,512),l("div",{class:"compass",ref_key:"compassRef",ref:y},null,512),l("div",wn,[l("div",xn,[l("span",null,"经度："+T(_(x).x.toFixed(6))+"° ",1),l("span",null,"纬度："+T(_(x).y.toFixed(6))+"° ",1),l("span",null,"海拔："+T(_(x).z.toFixed(1))+"m ",1)]),l("div",Rn,T(_(N)),1)]),l("div",bn,[l("button",{class:"button",onClick:o[0]||(o[0]=e=>d("cloudy"))},"多云"),l("button",{class:"button",onClick:o[1]||(o[1]=e=>d("sunny"))},"晴天"),l("button",{class:"button",onClick:o[2]||(o[2]=e=>d("overcast"))},"阴天"),l("button",{class:"button",onClick:o[3]||(o[3]=e=>d("foggy"))},"雾霾"),l("button",{class:"button",onClick:o[4]||(o[4]=e=>d("sunrise"))},"日出"),l("button",{class:"button",onClick:o[5]||(o[5]=e=>d("morning"))},"早晨"),l("button",{class:"button",onClick:o[6]||(o[6]=e=>d("evening"))},"傍晚"),l("button",{class:"button",onClick:o[7]||(o[7]=e=>d("nightGlow"))},"夜空"),l("button",{class:"button",onClick:o[8]||(o[8]=e=>d("night"))},"夜晚")]),l("div",{class:"stats",ref_key:"statsRef",ref:k},null,512),l("div",{class:"gui",ref_key:"guiRef",ref:w},null,512)]))}}),Fn=hn(kn,[["__scopeId","data-v-77be4dce"]]);export{Fn as default};
