const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/Atmosphere.Cg9m_9S2.js","assets/chunks/index.D1y5qgwe.js","assets/chunks/lil-gui.module.min.Vka56b52.js","assets/chunks/style.pzVcPuTj.js","assets/chunks/framework.xbTv8SNN.js","assets/chunks/useState.EiXjSKHF.js"])))=>i.map(i=>d[i]);
import{p as d,D as m,v as p,V as c,C as u,c as f,o as g,j as r,a4 as v,G as e,a2 as y,a as h,a5 as C,k as a,w as s,a6 as S}from"./chunks/framework.xbTv8SNN.js";import{I as w,$ as k}from"./chunks/index.Dw17pxVn.js";const b=`<template>
    <div class="demo-container">
        <div ref="viewerRef" class="map-container"></div>
        <div class="compass" ref="compassRef"></div>
        <div class="state">
            <div class="location">
                <span>经度：{{ location.x.toFixed(6) }}° </span>
                <span>纬度：{{ location.y.toFixed(6) }}° </span>
                <span>海拔：{{ location.z.toFixed(1) }}m </span>
            </div>
            <div class="loading">{{ loading }}</div>
        </div>
        <div class="weather" tabindex="-1">
            <button class="button" @click="applyPreset('cloudy')">多云</button>
            <button class="button" @click="applyPreset('sunny')">晴天</button>
            <button class="button" @click="applyPreset('overcast')">阴天</button>
            <button class="button" @click="applyPreset('foggy')">雾霾</button>
            <button class="button" @click="applyPreset('sunrise')">日出</button>
            <button class="button" @click="applyPreset('morning')">早晨</button>
            <button class="button" @click="applyPreset('evening')">傍晚</button>
            <button class="button" @click="applyPreset('nightGlow')">夜空</button>
            <button class="button" @click="applyPreset('night')">夜晚</button>
        </div>
        <div class="stats" ref="statsRef"></div>
        <div class="gui" ref="guiRef"></div>
    </div>
</template>

<style scoped>
    .map-container {
        width: 100%;
        height: 600px;
        display: flex;
        align-items: center;
        color: #ffffff;
        text-shadow: 0 0 2px black;
    }
    .map {
        width: 100%;
        height: 100%;
    }
    .weather {
        position: absolute;
        top: 20px;
        left: 150px;
    }

    .compass {
        position: absolute;
        top: 20px;
        left: 20px;
        background-size: cover;
        pointer-events: auto;
        filter: drop-shadow(0 0 2px black);
    }

    .stats {
        position: absolute;
        bottom: 30px;
        left: 10px;
    }

    .gui {
        position: absolute;
        top: 0px;
        right: 0px;
        max-height: 95%;
        overflow-y: auto;
    }
</style>

<script setup lang="ts">
    import {
        ACESFilmicToneMapping,
        AgXToneMapping,
        CineonToneMapping,
        Color,
        CustomToneMapping,
        LinearToneMapping,
        MathUtils,
        NeutralToneMapping,
        NoToneMapping,
        ReinhardToneMapping,
        Vector3,
    } from "three";
    import * as tt from "three-tile";
    import * as plugin from "three-tile/plugin";
    import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
    import { onMounted, onUnmounted, ref } from "vue";
    import { useCompass, useLoading, useLocation, useStats } from "../hooks";
    import "../style.css";
    import { Sky } from "./sky";

    //=================================================================================

    // 创建地图
    const createMap = () => {
        const map = tt.TileMap.create({
            imgSource: [
                new plugin.ArcGisSource(), // ArcGis卫星影像数据源
            ],
            demSource: new plugin.ArcGisDemSource(), // ArcGis地形数据源
            lon0: 90,
            // bounds: [60, 0, 145, 60],
        });
        map.rotateX(-Math.PI / 2);
        return map;
    };

    // 将视角跳转到指定经纬度位置
    const flyTo = (viewer: plugin.GLViewer, map: tt.TileMap, centerGeo: Vector3, cameraGeo: Vector3) => {
        viewer.controls.target.copy(map.geo2world(centerGeo));
        viewer.camera.position.copy(map.geo2world(cameraGeo));
    };

    //=================================================================================
    // 地图容器
    const viewerRef = ref(null);
    // 指南针容器
    const compassRef = ref<HTMLDivElement>();

    const guiRef = ref<HTMLDivElement>();

    // 创建地图
    const map = createMap();
    // map.visible = false;

    // 创建视图
    const viewer = new plugin.GLViewer();
    viewer.renderer.toneMapping = ACESFilmicToneMapping;

    // 添加天空
    const sky = new Sky();
    sky.scale.setScalar(2e7);
    // viewer.scene.add(sky);
    map.add(sky);

    // 位置信息
    const location = useLocation(map, viewer);

    // 加载状态
    const loading = useLoading(map);

    // 指南针
    useCompass(viewer.controls, compassRef);

    // 性能监视器
    const statsRef = ref<HTMLElement>();
    const stats = useStats(statsRef);

    // 视图更新监听（每帧刷新性能监视器）
    const handleViewerUpdate = () => {
        stats.update();
    };
    viewer.addEventListener("update", handleViewerUpdate);

    //=================================================================================
    onMounted(() => {
        if (!viewerRef.value) {
            console.error("map or cssrenderer or compass container is null");
            return;
        }

        // 添加视图
        viewer.addTo(viewerRef.value);

        // 添加地图
        viewer.scene.add(map);

        // 跳转
        flyTo(viewer, map, new Vector3(109, 34, 500), new Vector3(109.1, 34.1, 3000));

        // 防止摄像机穿过地面
        map.addEventListener("update", limitCameraHeight);

        if (guiRef.value) {
            initGUI();
        }
    });

    // 防止摄像机穿过地面
    const limitCameraHeight = () => {
        plugin.limitCameraHeight(map, viewer.camera);
    };

    // GUI 实例
    let gui: GUI | undefined;

    onUnmounted(() => {
        viewer.removeEventListener("update", handleViewerUpdate);
        map.removeEventListener("update", limitCameraHeight);
        gui?.destroy();
        sky.geometry.dispose();
        sky.material.uniforms["map"].value?.dispose();
        sky.material.dispose();
        map.dispose();
    });

    //=================================================================================

    // 参数列表
    const defaultParams = {
        // 云
        mult: 2.0, // 频率，控制云的局部变化
        weaken: 0.5, // 采样衰减因子，控制云量
        THICKNESS: 80, // 云厚度
        ABSORPTION: 0.2, // 云的光线吸收率
        N_MARCH_STEPS: 3, // 云采样迭代次数
        N_LIGHT_STEPS: 3, // 光照计算迭代次数，控制阴影
        coverage: 0.6, // 覆盖率
        skylineF: 0.2, // 云天际线因子
        curve: 0.3, // 坐标曲率

        speed: 2, // 风速
        xfactor: 0.3, // x方向系数
        yfactor: 0.3, // y方向系数
        zfactor: 0.1, // z方向系数

        // 天空
        turbidity: 10.0,
        rayleigh: 0.3,
        mieCoefficient: 0.002,
        mieDirectionalG: 1.0,
        skyIntensity: 0.8,

        // 太阳
        elevation: 15,
        azimuth: 180,
        sunSize: 1.0, // 太阳角半径

        fogColor: viewer.scene.fog?.color.clone() ?? new Color(0),
        fogFactor: 0.5,

        ambLight: 1,
        dirLight: 1,
    };

    // 当前参数（雾色使用独立副本，避免与默认值共享引用）
    const params = { ...defaultParams, fogColor: defaultParams.fogColor.clone() };

    const sun = viewer.dirLight.position; // new Vector3(); //太阳位置

    // 恢复默认参数
    const resetParams = () => {
        Object.assign(params, defaultParams);
        // 雾色恢复为默认值的副本，防止预设修改污染默认值
        params.fogColor = defaultParams.fogColor.clone();
        viewer.ambLight.intensity = params.ambLight;
        viewer.dirLight.intensity = params.dirLight;
        viewer.scene.fog?.color.set(0xb4deff).convertLinearToSRGB();
    };

    const update = () => {
        const phi = MathUtils.degToRad(90 - params.elevation);
        const theta = MathUtils.degToRad(params.azimuth);

        sun.setFromSphericalCoords(1, phi, theta);

        const skyUniforms = sky.material.uniforms;
        skyUniforms["sunPosition"].value.copy(sun);
        skyUniforms["turbidity"].value = params.turbidity;
        skyUniforms["rayleigh"].value = params.rayleigh;
        skyUniforms["mieCoefficient"].value = params.mieCoefficient;
        skyUniforms["mieDirectionalG"].value = params.mieDirectionalG;
        skyUniforms["sunAngularDiameter"].value = params.sunSize * 0.505;
        skyUniforms["mult"].value = params.mult;
        skyUniforms["THICKNESS"].value = params.THICKNESS / 3e4; //3e7; //parameters.scale;
        skyUniforms["ABSORPTION"].value = params.ABSORPTION;
        skyUniforms["N_MARCH_STEPS"].value = params.N_MARCH_STEPS;
        skyUniforms["N_LIGHT_STEPS"].value = params.N_LIGHT_STEPS;
        skyUniforms["weaken"].value = params.weaken;
        skyUniforms["coverage"].value = params.coverage;
        skyUniforms["speed"].value = params.speed / 10.0;
        skyUniforms["wind"].value = new Vector3(params.xfactor, params.yfactor, params.zfactor);
        skyUniforms["skylineF"].value = params.skylineF;
        skyUniforms["curve"].value = 1 - params.curve;
        skyUniforms["Intensity"].value = params.skyIntensity;

        viewer.fogFactor = params.fogFactor;
        viewer.scene.fog?.color.set(params.fogColor);
        viewer.ambLight.intensity = params.ambLight;
        viewer.dirLight.intensity = params.dirLight;
        // 同步天空着色器雾参数（fogDensity 作为片元混合系数，限制在 0~1）
        skyUniforms["fogColor"].value.set(params.fogColor);
        skyUniforms["fogDensity"].value = MathUtils.clamp(params.fogFactor, 0, 1);
    };

    const initGUI = () => {
        update();

        // GUI
        gui = new GUI({ title: "选项", autoPlace: false, container: guiRef.value });

        const folderScene = gui.addFolder("场景");

        folderScene.add(viewer.controls, "autoRotate").name("自动旋转").listen();
        folderScene
            .add(viewer.camera, "fov", 10, 120, 0.1)
            .onChange(() => {
                viewer.camera.updateProjectionMatrix();
            })
            .name("视场角FOV")
            .listen();
        folderScene.add(viewer.ambLight, "intensity", 0, 5, 0.01).name("环境光强度").listen();
        folderScene.add(viewer.dirLight, "intensity", 0, 5, 0.01).name("平行光强度").listen();
        folderScene.addColor(params, "fogColor").onChange(update).name("雾颜色").listen();
        folderScene.add(params, "fogFactor", 0, 5, 0.01).name("雾浓度").onChange(update).listen();
        folderScene
            .add(viewer.renderer, "toneMapping", {
                NoToneMapping,
                LinearToneMapping,
                ReinhardToneMapping,
                CineonToneMapping,
                ACESFilmicToneMapping,
                CustomToneMapping,
                AgXToneMapping,
                NeutralToneMapping,
            })
            .name("色调映射模式")
            .listen();
        folderScene.add(viewer.renderer, "toneMappingExposure", 0, 2, 0.01).name("色调映射曝光度").listen();
        folderScene.add(map, "LODThreshold", 0.5, 5, 0.1).name("LOD阈值").listen();

        const folderSky = gui.addFolder("天空");
        // folderSky.add(parameters, "scale", 0, 5e7, 1).onChange(updateSun).name("缩放");
        folderSky.add(params, "turbidity", 0, 20, 1).onChange(update).name("浊度").listen();
        folderSky.add(params, "rayleigh", 0.0, 4, 0.001).onChange(update).name("瑞利系数").listen();
        folderSky.add(params, "mieCoefficient", 0.0, 0.1, 0.001).onChange(update).name("米氏系数").listen();
        folderSky
            .add(params, "mieDirectionalG", 0.0, 0.99999999999, 0.001)
            .onChange(update)
            .name("米氏方向因子")
            .listen();

        folderSky.add(params, "skyIntensity", 0, 1, 0.01).onChange(update).name("天空亮度").listen();

        const folderSun = gui.addFolder("太阳");
        folderSun.add(params, "elevation", 0, 90, 0.1).onChange(update).name("太阳高度").listen();
        folderSun.add(params, "azimuth", -180, 180, 0.1).onChange(update).name("方位角").listen();
        folderSun.add(params, "sunSize", 0, 10, 1).onChange(update).name("大小").listen();

        const folderCloud = gui.addFolder("云");
        folderCloud.add(params, "mult", 0, 3, 0.01).onChange(update).name("频率").listen();
        folderCloud.add(params, "weaken", 0, 1, 0.01).onChange(update).name("云量").listen();
        folderCloud.add(params, "THICKNESS", 0, 100, 0.001).onChange(update).name("厚度").listen();
        folderCloud.add(params, "ABSORPTION", 0, 1, 0.01).onChange(update).name("吸光率").listen();
        folderCloud.add(params, "N_MARCH_STEPS", 0, 5, 1).onChange(update).name("采样次数").listen();
        folderCloud.add(params, "N_LIGHT_STEPS", 0, 10, 1).onChange(update).name("阴影").listen();
        folderCloud.add(params, "coverage", 0, 1.0, 0.01).onChange(update).name("覆盖率").listen();
        folderCloud.add(params, "speed", 0, 10, 0.1).onChange(update).name("风速").listen();
        folderCloud.add(params, "xfactor", -1, 1, 0.01).onChange(update).name("风向X").listen();
        folderCloud.add(params, "yfactor", -1, 1, 0.01).onChange(update).name("风向Y").listen();
        folderCloud.add(params, "zfactor", -1, 1, 0.01).onChange(update).name("风向Z").listen();
        folderCloud.add(params, "skylineF", 0, 1, 0.01).onChange(update).name("天际线").listen();
        folderCloud.add(params, "curve", 0.1, 0.6, 0.01).onChange(update).name("高度").listen();
    };

    // 天气预设（在默认参数基础上覆盖，fogColor 为十六进制颜色值）
    type WeatherPreset = Partial<Omit<typeof defaultParams, "fogColor">> & { fogColor?: number };

    const weatherPresets: Record<string, WeatherPreset> = {
        // 多云（默认参数）
        cloudy: {},
        // 晴天
        sunny: {
            turbidity: 15,
            rayleigh: 0.2,
            mieCoefficient: 0.001,
            weaken: 0.3,
            elevation: 15,
            dirLight: 2,
        },
        // 阴天
        overcast: {
            fogColor: 0x000000,
            fogFactor: 0.5,
            elevation: 50,
            turbidity: 20,
            rayleigh: 0.3,
            mieCoefficient: 0.06,
            mieDirectionalG: 0.998,
            mult: 1.6,
            weaken: 0.6,
            THICKNESS: 40,
            coverage: 1,
            curve: 0.5,
            ambLight: 1,
            dirLight: 0.5,
        },
        // 雾霾
        foggy: {
            fogFactor: 4,
            turbidity: 20,
            rayleigh: 2.5,
            weaken: 0.8,
            fogColor: 0xcccccc,
            elevation: 50,
            ambLight: 0.5,
            dirLight: 0.5,
        },
        // 日出
        sunrise: {
            elevation: 0,
            sunSize: 4,
            turbidity: 10,
            rayleigh: 2,
            mieCoefficient: 0.0001,
            mieDirectionalG: 0.996,
            THICKNESS: 60,
            weaken: 0.1,
            coverage: 0.4,
            skylineF: 0.6,
            curve: 0.1,
            fogFactor: 0.3,
            fogColor: 0x000000,
            ambLight: 0.5,
        },
        // 早晨
        morning: {
            elevation: 19,
            turbidity: 1,
            rayleigh: 0.05,
            mieCoefficient: 0.001,
            weaken: 0.5,
            THICKNESS: 40,
            coverage: 1,
            curve: 0.1,
            fogFactor: 0.3,
            ambLight: 1,
            dirLight: 1,
        },
        // 傍晚
        evening: {
            elevation: 0,
            sunSize: 2,
            turbidity: 6,
            rayleigh: 1.8,
            mieCoefficient: 0.005,
            mieDirectionalG: 0.998,
            THICKNESS: 60,
            weaken: 0.5,
            coverage: 0.3,
            skylineF: 0.6,
            curve: 0.1,
            fogFactor: 0.3,
            fogColor: 0xea891a,
            ambLight: 0.8,
            dirLight: 0.8,
        },
        // 夜空
        nightGlow: {
            elevation: 10,
            sunSize: 2,
            turbidity: 10,
            rayleigh: 0.6,
            mieCoefficient: 0.09,
            mieDirectionalG: 0.999999,
            THICKNESS: 30,
            ABSORPTION: 0.8,
            weaken: 0.5,
            coverage: 0.4,
            skylineF: 0.2,
            fogFactor: 2,
            fogColor: 0x000000,
            ambLight: 0.5,
            dirLight: 0.5,
        },
        // 夜晚
        night: {
            elevation: 15,
            turbidity: 10,
            rayleigh: 0.5,
            mieCoefficient: 0.07,
            mieDirectionalG: 0.999,
            weaken: 0.65,
            skyIntensity: 0.06,
            fogFactor: 2,
            fogColor: 0x111111,
            ambLight: 0.5,
            dirLight: 0.0,
        },
    };

    /**
     * 应用天气预设
     * @param name 预设名称
     */
    const applyPreset = (name: string) => {
        resetParams();
        const preset = weatherPresets[name];
        if (!preset) {
            console.error(\`未知的天气预设: \${name}\`);
            return;
        }
        const { fogColor, ...rest } = preset;
        Object.assign(params, rest);
        if (fogColor !== undefined) {
            params.fogColor.set(fogColor);
        }
        update();
    };
<\/script>
`,x=JSON.parse('{"title":"6. 大气环境模拟","description":"","frontmatter":{},"headers":[],"relativePath":"4.application/06.atmosphere/index.md","filePath":"4.application/06.atmosphere/index.md","lastUpdated":1790254986000}'),T={name:"4.application/06.atmosphere/index.md"},M=Object.assign(T,{setup(L){const o=d(!0),t=m();return p(async()=>{t.value=(await c(async()=>{const{default:i}=await import("./chunks/Atmosphere.Cg9m_9S2.js");return{default:i}},__vite__mapDeps([0,1,2,3,4,5]))).default}),(i,n)=>{const l=u("ClientOnly");return g(),f("div",null,[n[1]||(n[1]=r("h1",{id:"_6-大气环境模拟",tabindex:"-1"},[h("6. 大气环境模拟 "),r("a",{class:"header-anchor",href:"#_6-大气环境模拟","aria-label":'Permalink to "6. 大气环境模拟"'},"​")],-1)),v(e(a(w),null,null,512),[[C,o.value]]),e(l,null,{default:s(()=>[e(a(k),{title:"vue演示",description:"综合环境，包括天空、云层、太阳、雾等",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:n[0]||(n[0]=()=>{o.value=!1}),vueCode:a(b)},S({_:2},[t.value?{name:"vue",fn:s(()=>[e(a(t))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),n[2]||(n[2]=y("<p>大气环境通过自定义天空着色器叠加在地图上：顶点着色器计算太阳方向与瑞利系数，片元着色器联合瑞利/米氏散射计算天空颜色，并用分形噪声（FBM）采样渲染体积云，最后混合雾色完成大气效果。天空球以反面球体（<code>sky/Sky.ts</code>）挂载到地图坐标系中，时间由 <code>Sky.onBeforeRender</code> 每帧写入 <code>uTime</code> uniform，驱动云层飘动。</p><ul><li>云噪声纹理默认使用 <code>../../images/perlin256.png</code>，可通过 <code>new Sky({ url: &quot;...&quot; })</code> 替换</li><li>单击天气按钮：切换 多云、晴天、阴天、雾霾、日出、早晨、傍晚、夜空、夜晚 九种天气预设</li><li>右侧面板：调整场景（雾、光照、色调映射、LOD）、天空（浊度、瑞利、米氏系数）、太阳（高度角、方位角、大小）与云层（覆盖率、风速、厚度等）参数</li><li>左下角显示帧率，底部显示相机所在经纬度与海拔</li></ul>",2))])}}});export{x as __pageData,M as default};
