var U=Object.defineProperty;var $=(f,c,s)=>c in f?U(f,c,{enumerable:!0,configurable:!0,writable:!0,value:s}):f[c]=s;var P=(f,c,s)=>$(f,typeof c!="symbol"?c+"":c,s);import{C as v,e as m,ad as j,ae as X,af as Z,T as q,R as M,y as Y,aN as J,al as Q,as as L,aC as nn,aR as en,aS as rn,aT as on,aU as tn,aV as an,aW as sn,aX as ln,ai as cn,aj as un,ak as dn,K as I}from"./index.CqI7X3xo.js";import{g as fn}from"./lil-gui.module.min.Vka56b52.js";import{a as vn,b as mn,u as pn}from"./style.Ddmk4huO.js";import{u as gn}from"./useState.EiXjSKHF.js";import{d as hn,p as y,v as yn,x as Cn,c as Sn,o as Tn,j as a,t as C,k as S,_ as _n}from"./framework.xbTv8SNN.js";const xn=`// precision highp float;\r
// precision highp int;\r
// precision highp sampler2D;\r
\r
// 太阳\r
// uniform vec3 sun_color;// 太阳颜色\r
uniform float sunAngularDiameter;// 太阳角直径,默认为0.505度\r
uniform float mieDirectionalG;// 米式散射因子-方向光高光\r
uniform float Exposure;// 色调映射曝光\r
\r
// 天空\r
// uniform float skyscale;\r
uniform float turbidity;// 浑浊度\r
uniform float skylineF;// 天际线\r
// uniform float rayleigh;// 瑞利散射\r
uniform float mieCoefficient;// 米氏因子（白）\r
uniform vec3 skyGlowColor;// 天空霞光颜色\r
uniform vec3 sunGlowColor;// 太阳霞光颜色\r
// uniform vec3 backSkyColor;// 背面天空颜色\r
uniform vec3 up;// 相机上方\r
\r
// 云朵\r
uniform sampler2D map;// 云噪声图\r
uniform float uTime;// 时间\r
uniform float weaken;// 采样衰减因子\r
uniform float THICKNESS;// 云厚度\r
uniform int N_LIGHT_STEPS;// 光照计算迭代次数\r
uniform float curve;// 坐标高度曲率\r
uniform float speed;// 风速\r
uniform vec3 wind;// 风向\r
uniform float coverage;// 覆盖率\r
uniform float ABSORPTION;// 云的光线吸收率\r
uniform float mult;//位置变换系数，控制局部变化翻滚\r
uniform int N_MARCH_STEPS;// 云厚度迭代次数\r
\r
// 雾\r
uniform float fogDensity;// 雾密度\r
uniform vec3 fogColor;// 雾颜色\r
\r
varying vec3 vWorldPosition;// 当前片元的坐标（已转换）\r
varying vec3 vSunDirection;// 太阳方向\r
varying float vSunfade;// 边缘褪色-影响阳光范围\r
varying vec3 vBetaR;// 瑞利散射\r
varying float vSunE;// 光强\r
\r
// 云--------------------------------------------------------------------------\r
const vec3 cameraPos = vec3(0.0, 0.0, 0.0);// 相机位置\r
const float pi = 3.141592653589793238462643383279502884197169;\r
const float TWO_PI = 6.28318530717958648;\r
\r
// 采集噪声值\r
float noise(vec3 p) {\r
    return texture(map, p.xz).x;\r
}\r
\r
 // 简单的伪随机函数\r
float random(vec2 st) {\r
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);\r
}\r
\r
float simpleNoise3D(vec3 p) {\r
    return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453123);\r
}\r
// 3D噪声函数（简化版）\r
float noise3D(vec3 p) {\r
    vec3 i = floor(p);\r
    vec3 f = fract(p);\r
\r
    // 三线性插值\r
    float a = random(i.xy + i.z * 0.1);\r
    float b = random((i + vec3(1.0, 0.0, 0.0)).xy + i.z * 0.1);\r
    float c = random((i + vec3(0.0, 1.0, 0.0)).xy + i.z * 0.1);\r
    float d = random((i + vec3(1.0, 1.0, 0.0)).xy + i.z * 0.1);\r
\r
    float e = random((i + vec3(0.0, 0.0, 1.0)).xy + (i.z + 1.0) * 0.1);\r
    float f2 = random((i + vec3(1.0, 0.0, 1.0)).xy + (i.z + 1.0) * 0.1);\r
    float g = random((i + vec3(0.0, 1.0, 1.0)).xy + (i.z + 1.0) * 0.1);\r
    float h = random((i + vec3(1.0, 1.0, 1.0)).xy + (i.z + 1.0) * 0.1);\r
\r
    vec3 u = f * f * (3.0 - 2.0 * f);\r
\r
    float x1 = mix(mix(a, b, u.x), mix(c, d, u.x), u.y);\r
    float x2 = mix(mix(e, f2, u.x), mix(g, h, u.x), u.y);\r
\r
    return mix(x1, x2, u.z);\r
\r
}\r
\r
// 3*3采样位置变换矩阵\r
const mat3 m = mat3(0.00, 0.80, 0.60, -0.80, 0.36, -0.48, -0.60, -0.48, 0.64);\r
\r
// 计算叠加噪声值（模拟分形布朗克运动）\r
float fbm(vec3 p) {\r
\r
    // float t = 0.;\r
    // float a = pow(weaken, 0.01);// 初始系数\r
\r
    // for(int i = 0; i < 6; i++) {\r
    //     t += a * noise3D(p);\r
    //     p = m * p * mult;\r
    //     a *= weaken;\r
    // }\r
\r
    // return t;\r
\r
    float value = 0.0;\r
    float amplitude = weaken;//0.5; //云量\r
    float frequency = mult;//1.0;// 振幅（控制颗粒度大小）\r
\r
    for(int i = 0; i < 5; i++) {\r
        value += amplitude * noise3D(p);\r
        amplitude *= 0.6;\r
        p = m * p * mult;\r
    }\r
\r
    return value;\r
}\r
\r
// 分形布朗运动实现\r
float fbm1(vec3 p) {\r
    float t;\r
    float mult = 2.76434;  // 频率倍增因子\r
\r
    // 叠加不同频率和振幅的噪声\r
    t = 0.51749673 * noise3D(p);\r
    p = m * p * mult;\r
    t += 0.25584929 * noise3D(p);\r
    p = m * p * mult;\r
    t += 0.12527603 * noise3D(p);\r
    p = m * p * mult;\r
    t += 0.06255931 * noise3D(p);\r
\r
    return t;\r
}\r
\r
// 云密度（返回 pos 位置的云密度值）cov为密度阈值参数\r
float cloud_density(vec3 pos, float cov) {\r
    float dens = fbm(pos);// 修改\r
    return smoothstep(cov, 1., dens);// 阈值缩放\r
}\r
\r
// 云亮度计算\r
float cloud_light(vec3 pos, vec3 sundir_step, float cov) {\r
    float T = 1.0;// 透明度，transmitance\r
    float dens;// 密度\r
    float T_i;// 透射率\r
\r
    for(int i = 0; i < N_LIGHT_STEPS; i++) {\r
        dens = cloud_density(pos, cov);\r
        T_i = exp(-ABSORPTION * dens);\r
        T *= T_i;\r
        pos += sundir_step;\r
    }\r
    T = clamp(T, 0., 1.);\r
    return T;\r
}\r
\r
// 云渲染（根据天空（云）坐标和视角方向计算当前方向的云颜色值和透明度）\r
vec4 render_clouds(vec3 rayOrigin, vec3 rayDirection) {\r
    float march_step = (THICKNESS + .0002) / float(N_MARCH_STEPS);// 云迭代步长\r
    vec3 pos = rayOrigin + speed * vec3(uTime * wind.x, uTime * wind.y, uTime * wind.z);// 云初始位置\r
    vec3 dir_step = rayDirection * march_step;// 计算云迭代方向步长\r
\r
    vec3 light_step = normalize(vSunDirection - cameraPos) * march_step;// 光线迭代步长\r
\r
    float T = 1.0;// 云初始透明度\r
    vec3 C = vec3(0.0);// 云初始颜色\r
    float alpha = 0.0;// 初始不透明度\r
    float dens;// 密度\r
    float T_i;// 透射率\r
    float cloudLight;// 云透光率\r
\r
    for(int i = 0; i < N_MARCH_STEPS; i++) {\r
        dens = cloud_density(pos, 1. - coverage);// 密度\r
\r
        T_i = exp(-ABSORPTION * dens * march_step);// 累积系数\r
        T *= T_i;// 累积透明度\r
        cloudLight = cloud_light(pos, light_step, 1. - coverage);// 云透光率（实现太阳照到云的高亮）\r
        C += T * cloudLight * dens * march_step;//累加片元颜色\r
        C = mix(C * 0.9, C, clamp(cloudLight, 0.0, 1.0));//颜色混合（阴影）\r
        alpha += (1.0 - T_i) * (1.0 - alpha);// 片元颜色透明度\r
\r
        if(alpha > .99)\r
            break;// 透明度接近1，提前退出循环节省性能开销\r
        pos += dir_step;\r
    }\r
\r
    return vec4(C, alpha);\r
}\r
\r
// 天空----------------------------------------------------------------------------------------\r
const float rayleighZenithLength = 8.4E3;// 瑞利光程\r
const float mieZenithLength = 1.25E3;// 米氏光程\r
const float THREE_OVER_SIXTEENPI = 0.05968310365946075;// 3.0 / ( 16.0 * pi )\r
const float ONE_OVER_FOURPI = 0.07957747154594767;// 1.0 / ( 4.0 * pi )\r
const vec3 MieConst = vec3(1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14);// RGB米氏散射值\r
\r
// 瑞利散射相位因子\r
float rayleighPhase(float cosTheta) {\r
    return THREE_OVER_SIXTEENPI * (1.0 + pow(cosTheta, 2.0));\r
}\r
\r
// 米氏散射相位因子\r
float hgPhase(float cosTheta, float g) {\r
    float g2 = pow(g, 2.0);\r
    float inverse = 1.0 / pow(1.0 - 2.0 * g * cosTheta + g2, 1.5);\r
    return ONE_OVER_FOURPI * ((1.0 - g2) * inverse);\r
}\r
\r
// 米氏散射计算\r
vec3 totalMie(float T) {\r
    float c = (0.2 * T) * 10E-18;\r
    return 0.434 * c * MieConst;\r
}\r
\r
// 色彩逆映射\r
vec3 ReRRTAndODTFit(vec3 color) {\r
    vec3 ret;\r
    ret = -(sqrt(10.0) * sqrt((-187345541948750.0 * pow(color, vec3(2.0))) + 232671271403227.0 * color + 241563894490.0) + 21647550.0 * color - 1228930.0) / (98372900.0 * color - 100000000.0);\r
    return ret;\r
}\r
\r
// 色调逆映射\r
vec3 ReACESToneMapping(vec3 color) {\r
    mat3 InputM_I = mat3(1.76474, -0.14703, -0.03634, -0.67578, 1.16025, -0.16244, -0.08896, -0.01322, 1.19877);\r
    mat3 Output_I = mat3(0.64304, 0.05927, 0.005962, 0.31119, 0.93144, 0.06393, 0.04578, 0.00929, 0.93012);\r
\r
    vec3 ret;\r
    ret = InputM_I * ReRRTAndODTFit(Output_I * color) * 0.6 / Exposure;\r
    return ret;\r
}\r
\r
void main() {\r
\r
    // 归一化坐标\r
    vec3 pos = normalize(vWorldPosition);\r
\r
    // 丢弃地平线以下的片元\r
    if(pos.y < -0.2) {\r
        discard;\r
        return;\r
    }\r
\r
    // 云初始颜色\r
    vec4 cld = vec4(1., 1., 1., 1.);    \r
    // 只渲染地平线以上的云\r
    if(pos.y > 0.) {\r
        float df = 1. / (curve * pos.y + .1);// 坐标距离因子,近小远大\r
        vec3 posS = .4 * df * pos;// 云(天空)坐标\r
        vec3 raydir = normalize(posS - cameraPos);// 云(天空)方向\r
        cld = render_clouds(posS, raydir);\r
    }\r
\r
    // 天空\r
    vec3 direction = normalize(vWorldPosition - cameraPos);\r
    float view = smoothstep(0.0, 1.0, dot(up, direction));// 0~1\r
    float zenithAngle = acos(max(0.0, dot(up, direction)));\r
    float inverse = 1.0 / (cos(zenithAngle) + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / pi), -1.253));\r
    float sR = rayleighZenithLength * inverse;// 瑞利天顶长度\r
    float sM = mieZenithLength * inverse;// 米式天顶长度\r
    float sun_up = smoothstep(0., 1., dot(up, vSunDirection));\r
\r
    // 米氏系数mie coefficients		\r
    vec3 vBetaM = totalMie(turbidity) * mieCoefficient;// 天空米式系数\r
\r
    // 联合消光（散射）因子combined extinction factor\r
    vec3 Fex = exp(-(vBetaR * sR + vBetaM * sM));// 天空\r
    vec3 Fex_c = exp(-(vBetaR * sR + vBetaM * sM * (10000. * cld.a + 1.)) / 2.);// 云\r
\r
    float cosTheta = dot(direction, vSunDirection);//片元方向和太阳方向的夹角余弦\r
\r
    // 太阳\r
    float sunAngularDiameterCos = cos(sunAngularDiameter * pi / 180.);// 太阳角直径余弦\r
    float sundisk = smoothstep(sunAngularDiameterCos, 1., cosTheta);// 太阳圆盘\r
    vec3 suncolor = vSunE * 19000. * Fex * sundisk;// 圆盘颜色\r
    suncolor *= 1. - smoothstep(0., 1., cld.a * 2000.);// 云遮挡\r
\r
    // 瑞利散射\r
    float rPhase = rayleighPhase(cosTheta * 0.5 + 0.5);//瑞利相位,取值:0.736~1.178\r
    vec3 betaRTheta = vBetaR * rPhase;// 天空的瑞利散射\r
    vec3 cloudBetaR = vBetaR * rPhase;// 云的瑞利散射\r
\r
    // 米氏散射\r
    float a = 1. - smoothstep(0., 1., cld.a * 2000.);// 单散射的反射率\r
    float mPhase = a * hgPhase(cosTheta, mieDirectionalG);\r
    vec3 betaMTheta = vBetaM * mPhase;\r
\r
    // 天空颜色\r
    vec3 Lin = pow(vSunE * ((betaRTheta + betaMTheta) / (vBetaR + vBetaM)) * (1.0 - Fex), vec3(3.5));//天空颜色蓝度1.5\r
    Lin *= mix(vec3(1.0), pow(vSunE * ((betaRTheta + betaMTheta) / (vBetaR + vBetaM)) * Fex, vec3(1.0 / 2.0)), clamp(pow(1.0 - dot(up, vSunDirection), 5.), 0.0, 1.0));\r
\r
    vec3 L0 = vec3(0.1) * Fex;// 天空底色（夜空）\r
\r
    // 云颜色\r
    vec3 cloud = pow(vSunE * ((cloudBetaR + betaMTheta) / (vBetaR + vBetaM)) * (1.0 - Fex_c), vec3(1.5));//天空颜色蓝度1.5\r
    cloud *= mix(vec3(1.0), pow(vSunE * ((cloudBetaR + betaMTheta) / (vBetaR + vBetaM)) * Fex_c, vec3(1.0 / 2.0)), clamp(pow(1.0 - dot(up, vSunDirection), 5.), 0.0, 1.0));\r
    cloud *= 1. + cld.rgb * 2000.;// 云阴影\r
\r
    // 早晚霞\r
    // vec3 delta2 = pow(pos.xyz - vSunDirection.xyz, vec3(2.));\r
    // vec2 glowRange = vec2(4., 0.5);\r
    // vec2 R = vec2(delta2.x + delta2.z, delta2.y) / glowRange;\r
    // float deltaR = R.x + R.y;// 晚霞范围（椭圆）\r
    // float f = 1. - smoothstep(0., 0.26, sun_up);\r
    // vec3 cloudGlow = ReACESToneMapping(skyGlowColor);\r
    // cloud = mix(cloud, cloudGlow, f);// 基础红霞\r
    // if(pos.y > 0. && deltaR < 1.) {\r
    //     vec3 sunFixColor = ReACESToneMapping(sunGlowColor);\r
    //     cloud = mix(cloud, sunFixColor, f * (1. - deltaR));\r
    // }\r
\r
    vec3 bluecolor = vec3(0.0002, 0.00045, 0.0008);// 蓝天修正偏移色\r
\r
    vec3 texColor = (Lin + L0) * 0.04 + bluecolor;// Lin为蓝色天空，L0为夜空底色；\r
    vec3 retColor = pow(texColor, vec3(1.0 / (1.2 + (1.2 * vSunfade))));\r
\r
    float d_factor = 1. - smoothstep(0., skylineF, pos.y);// 天际线距离因子,近小远大\r
    cloud = mix(cloud, retColor, clamp(d_factor, 0., 1.));//云天际线颜色\r
    retColor = mix(retColor + suncolor, cloud, clamp((cld.a) * 2000., 0., 1.));// 混合云和天空颜色\r
\r
    // vec3 backcolor = ReACESToneMapping(backSkyColor);// 背景色色调映射\r
    // vec3 backcolor = ReACESToneMapping(sRGBToLinear(vec4(backSkyColor,1.0)).rgb);// 背景色色调映射\r
\r
    // backcolor = sRGBToLinear(vec4(backcolor,1.0)).rgb;// 转换为线性空间\r
    // if(pos.y < 0.) {\r
    //     retColor = mix(backcolor, retColor, pow(1. + pos.y, 30.));\r
    // }// 地面阴影\r
    vec3 fog_Color = ReACESToneMapping(fogColor);\r
    retColor = mix(retColor, fog_Color, fogDensity);// 雾效果\r
    retColor = clamp(retColor, 0., 14.);// 颜色范围\r
\r
    gl_FragColor = vec4(retColor, 1.0);// 输出片元颜色\r
\r
	#include <tonemapping_fragment>\r
	#include <colorspace_fragment>\r
}`,Rn=`// 太阳\r
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
}`,R={uniforms:{sun_color:{value:new v(1,0,0)},sunAngularDiameter:{value:.505},Intensity:{value:1},sunPosition:{value:new m},mieDirectionalG:{value:1},Exposure:{value:1},turbidity:{value:10},skylineF:{value:.2},rayleigh:{value:.4},mieCoefficient:{value:.005},skyGlowColor:{value:new v(1,.5,.5)},sunGlowColor:{value:new v(.9216,.2431,.1059)},backSkyColor:{value:new v(.1,.1,.1)},up:{value:new m(0,1,0)},map:{value:null},uTime:{value:1},weaken:{value:.5},THICKNESS:{value:.001},N_LIGHT_STEPS:{value:3},curve:{value:.3},speed:{value:.5},wind:{value:new m(.3,.1,.3)},coverage:{value:.5},ABSORPTION:{value:.45},mult:{value:1},N_MARCH_STEPS:{value:3},fogColor:{value:new v(.7,.7,.7)},fogDensity:{value:1e-4}},vertexShader:Rn,fragmentShader:xn};class wn extends j{constructor(c){super({uniforms:Z.clone(R.uniforms),fragmentShader:R.fragmentShader,vertexShader:R.vertexShader,side:X,depthWrite:!1});const s=new q().load(c);s.wrapS=M,s.wrapT=M,s.generateMipmaps=!1,this.uniforms.map.value=s}}class bn extends Y{constructor(s={url:""}){const p=s.url||"../../images/perlin256.png",g=new wn(p);super(new J,g);P(this,"isSky",!0);this.onBeforeRender=()=>{g.uniforms.uTime.value=performance.now()*.001}}}const kn={class:"demo-container"},En={class:"state"},Pn={class:"location"},Mn={class:"loading"},Ln={class:"weather",tabindex:"-1"},In=hn({__name:"Atmosphere",setup(f){var E;const c=()=>{const i=cn.create({imgSource:[new dn],demSource:new un,lon0:90});return i.rotateX(-Math.PI/2),i},s=(i,o,e,h)=>(i.controls.target.copy(o.geo2world(e)),i.camera.position.copy(o.geo2world(h)),{centerPos:i.controls.target,camerePos:i.camera.position}),p=y(null),g=y(),T=y(),u=c(),t=new Q;t.renderer.toneMapping=L;const _=new bn;_.scale.setScalar(2e7),u.add(_);const x=vn(u,t),D=mn(u);pn(t.controls,g);const w=y(),F=gn(w);t.addEventListener("update",()=>{F.update()}),yn(()=>{if(!p.value){console.error("map or cssrenderer or compass container is null");return}t.addTo(p.value),t.scene.add(u),s(t,u,new m(109,34,500),new m(109.1,34.1,3e3)),u.addEventListener("update",()=>{nn(u,t.camera)}),T.value&&N()}),Cn(()=>{u.dispose()});const b={uTime:0,mult:2,weaken:.5,THICKNESS:80,ABSORPTION:.2,N_MARCH_STEPS:3,N_LIGHT_STEPS:3,coverage:.6,skylineF:.2,curve:.3,speed:2,xfactor:.3,yfactor:.3,zfactor:.1,turbidity:10,rayleigh:.3,mieCoefficient:.002,mieDirectionalG:1,skyIntensity:.8,elevation:15,azimuth:180,sunSize:1,fogColor:((E=t.scene.fog)==null?void 0:E.color)||new v(0),fogFactor:.5,ambLight:1,dirLight:1},n={...b},k=t.dirLight.position,d=()=>{Object.assign(n,b),t.ambLight.intensity=n.ambLight,t.dirLight.intensity=n.dirLight,t.scene.fog&&t.scene.fog.color.set(11853567).convertLinearToSRGB()},r=()=>{const i=I.degToRad(90-n.elevation),o=I.degToRad(n.azimuth);k.setFromSphericalCoords(1,i,o);const e=_.material.uniforms;e.sunPosition.value.copy(k),e.turbidity.value=n.turbidity,e.rayleigh.value=n.rayleigh,e.mieCoefficient.value=n.mieCoefficient,e.mieDirectionalG.value=n.mieDirectionalG,e.sunAngularDiameter.value=n.sunSize*.505,e.mult.value=n.mult,e.THICKNESS.value=n.THICKNESS/3e4,e.ABSORPTION.value=n.ABSORPTION,e.N_MARCH_STEPS.value=n.N_MARCH_STEPS,e.N_LIGHT_STEPS.value=n.N_LIGHT_STEPS,e.weaken.value=n.weaken,e.coverage.value=n.coverage,e.speed.value=n.speed/10,e.wind.value=new m(n.xfactor,n.yfactor,n.zfactor),e.skylineF.value=n.skylineF,e.curve.value=1-n.curve,e.Intensity.value=n.skyIntensity,t.fogFactor=n.fogFactor,t.scene.fog&&t.scene.fog.color.set(n.fogColor),t.ambLight.intensity=n.ambLight,t.dirLight.intensity=n.dirLight},N=()=>{r();const i=new fn({title:"选项",autoPlace:!1,container:T.value}),o=i.addFolder("场景");o.add(t.controls,"autoRotate").name("自动旋转").listen(),o.add(t.camera,"fov",10,120,.1).onChange(()=>{t.camera.updateProjectionMatrix()}).name("视场角FOV").listen(),o.add(t.ambLight,"intensity",0,5,.01).name("环境光强度").listen(),o.add(t.dirLight,"intensity",0,5,.01).name("平行光强度").listen(),o.addColor(n,"fogColor").onChange(r).name("雾颜色").listen(),o.add(n,"fogFactor",0,5,.01).name("雾浓度").onChange(r).listen(),o.add(t.renderer,"toneMapping",{NoToneMapping:ln,LinearToneMapping:sn,ReinhardToneMapping:an,CineonToneMapping:tn,ACESFilmicToneMapping:L,CustomToneMapping:on,AgXToneMapping:rn,NeutralToneMapping:en}).name("色调映射模式").listen(),o.add(t.renderer,"toneMappingExposure",0,2,.01).name("色调映射曝光度").listen(),o.add(u,"LODThreshold",.5,5,.1).name("LOD阈值").listen();const e=i.addFolder("天空");e.add(n,"turbidity",0,20,1).onChange(r).name("浊度").listen(),e.add(n,"rayleigh",0,4,.001).onChange(r).name("瑞利系数").listen(),e.add(n,"mieCoefficient",0,.1,.001).onChange(r).name("米氏系数").listen(),e.add(n,"mieDirectionalG",0,.99999999999,.001).onChange(r).name("米氏方向因子").listen(),e.add(n,"skyIntensity",0,1,.01).onChange(r).name("天空亮度").listen();const h=i.addFolder("太阳");h.add(n,"elevation",0,90,.1).onChange(r).name("太阳高度").listen(),h.add(n,"azimuth",-180,180,.1).onChange(r).name("方位角").listen(),h.add(n,"sunSize",0,10,1).onChange(r).name("大小").listen();const l=i.addFolder("云");l.add(n,"mult",0,3,.01).onChange(r).name("频率").listen(),l.add(n,"weaken",0,1,.01).onChange(r).name("云量").listen(),l.add(n,"THICKNESS",0,100,.001).onChange(r).name("厚度").listen(),l.add(n,"ABSORPTION",0,1,.01).onChange(r).name("吸光率").listen(),l.add(n,"N_MARCH_STEPS",0,5,1).onChange(r).name("采样次数").listen(),l.add(n,"N_LIGHT_STEPS",0,10,1).onChange(r).name("阴影").listen(),l.add(n,"coverage",0,1,.01).onChange(r).name("覆盖率").listen(),l.add(n,"speed",0,10,.1).onChange(r).name("风速").listen(),l.add(n,"xfactor",-1,1,.01).onChange(r).name("风向X").listen(),l.add(n,"yfactor",-1,1,.01).onChange(r).name("风向Y").listen(),l.add(n,"zfactor",-1,1,.01).onChange(r).name("风向Z").listen(),l.add(n,"skylineF",0,1,.01).onChange(r).name("天际线").listen(),l.add(n,"curve",.1,.6,.01).onChange(r).name("高度").listen()},z=()=>{d(),n.turbidity=15,n.rayleigh=.2,n.mieCoefficient=.001,n.weaken=.3,n.elevation=15,n.dirLight=2,r()},A=()=>{d(),r()},B=()=>{d(),n.fogColor.set(0),n.fogFactor=.5,n.elevation=50,n.turbidity=20,n.rayleigh=.3,n.mieCoefficient=.06,n.mieDirectionalG=.998,n.mult=1.6,n.weaken=.6,n.THICKNESS=40,n.coverage=1,n.curve=.5,n.ambLight=1,n.dirLight=.5,r()},O=()=>{d(),n.fogFactor=4,n.turbidity=20,n.rayleigh=2.5,n.weaken=.8,n.fogColor.set(13421772),n.elevation=50,n.ambLight=.5,n.dirLight=.5,r()},G=()=>{d(),n.elevation=0,n.sunSize=3,n.turbidity=10,n.rayleigh=2,n.mieCoefficient=1e-4,n.mieDirectionalG=.996,n.THICKNESS=60,n.weaken=.1,n.coverage=.4,n.skylineF=.6,n.sunSize=4,n.curve=.1,n.fogFactor=.3,n.fogColor.set(0),n.ambLight=.5,r()},H=()=>{d(),n.elevation=19,n.turbidity=1,n.rayleigh=.05,n.mieCoefficient=.001,n.weaken=.5,n.THICKNESS=40,n.coverage=1,n.curve=.1,n.fogFactor=.3,n.ambLight=1,n.dirLight=1,r()},K=()=>{d(),n.elevation=0,n.sunSize=2,n.turbidity=6,n.rayleigh=1.8,n.mieCoefficient=.005,n.mieDirectionalG=.998,n.THICKNESS=60,n.weaken=.5,n.coverage=.3,n.skylineF=.6,n.curve=.1,n.fogFactor=.3,n.fogColor.set(15370522),n.ambLight=.8,n.dirLight=.8,r()},V=()=>{d(),n.elevation=10,n.sunSize=2,n.turbidity=10,n.rayleigh=.6,n.mieCoefficient=.09,n.mieDirectionalG=.999999,n.THICKNESS=30,n.ABSORPTION=.8,n.weaken=.5,n.coverage=.4,n.skylineF=.2,n.fogFactor=2,n.fogColor.set(0),n.ambLight=.5,n.dirLight=.5,r()},W=()=>{d(),n.elevation=22,n.mieCoefficient=.1,n.mieDirectionalG=.999,n.skyIntensity=0,n.fogFactor=2,n.fogColor.set(1118481),n.ambLight=.5,n.dirLight=0,r()};return(i,o)=>(Tn(),Sn("div",kn,[a("div",{ref_key:"viewerRef",ref:p,class:"map-container"},null,512),a("div",{class:"compass",ref_key:"compassRef",ref:g},null,512),a("div",En,[a("div",Pn,[a("span",null,"经度："+C(S(x).x.toFixed(6))+"° ",1),a("span",null,"纬度："+C(S(x).y.toFixed(6))+"° ",1),a("span",null,"海拔："+C(S(x).z.toFixed(1))+"m ",1)]),a("div",Mn,C(S(D)),1)]),a("div",Ln,[a("button",{class:"button",onClick:o[0]||(o[0]=e=>A())},"多云"),a("button",{class:"button",onClick:o[1]||(o[1]=e=>z())},"晴天"),a("button",{class:"button",onClick:o[2]||(o[2]=e=>B())},"阴天"),a("button",{class:"button",onClick:o[3]||(o[3]=e=>O())},"雾霾"),a("button",{class:"button",onClick:o[4]||(o[4]=e=>G())},"日出"),a("button",{class:"button",onClick:o[5]||(o[5]=e=>H())},"早晨"),a("button",{class:"button",onClick:o[6]||(o[6]=e=>K())},"傍晚"),a("button",{class:"button",onClick:o[7]||(o[7]=e=>V())},"夜空"),a("button",{class:"button",onClick:o[8]||(o[8]=e=>W())},"夜晚")]),a("div",{class:"stats",ref_key:"statsRef",ref:w},null,512),a("div",{class:"gui",ref_key:"guiRef",ref:T},null,512)]))}}),On=_n(In,[["__scopeId","data-v-38f1b2b2"]]);export{On as default};
