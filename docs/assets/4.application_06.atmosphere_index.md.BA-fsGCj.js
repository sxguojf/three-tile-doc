const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/Atmosphere.BF1ujrqk.js","assets/chunks/index.B-YquQ_z.js","assets/chunks/style.CCtHUzaI.js","assets/chunks/framework.xbTv8SNN.js","assets/chunks/useState.EiXjSKHF.js"])))=>i.map(i=>d[i]);
import{p,D as l,v as d,V as c,C as u,c as f,o as g,j as o,a4 as v,G as n,a as h,a5 as y,k as e,w as i,a6 as C}from"./chunks/framework.xbTv8SNN.js";import{R as S,k as w}from"./chunks/index.T3-yMMRo.js";const b=`<template>\r
    <div class="demo-container">\r
        <div ref="viewerRef" class="map-container"></div>\r
        <div class="compass" ref="compassRef"></div>\r
        <div class="state">\r
            <div class="location">\r
                <span>经度：{{ location.x.toFixed(6) }}° </span>\r
                <span>纬度：{{ location.y.toFixed(6) }}° </span>\r
                <span>海拔：{{ location.z.toFixed(1) }}m </span>\r
            </div>\r
            <div class="loading">{{ loading }}</div>\r
        </div>\r
        <div class="weather" tabindex="-1">\r
            <button class="button" @click="cloudy()">多云</button>\r
            <button class="button" @click="sunny()">晴天</button>\r
            <button class="button" @click="overcast()">阴天</button>\r
            <button class="button" @click="fog()">雾霾</button>\r
            <button class="button" @click="morning1()">日出</button>\r
            <button class="button" @click="morning2()">早晨</button>\r
            <button class="button" @click="evening()">傍晚</button>\r
            <button class="button" @click="night1()">夜空</button>\r
            <button class="button" @click="night2()">夜晚</button>\r
        </div>\r
        <div class="stats" ref="statsRef"></div>\r
        <div class="gui" ref="guiRef"></div>\r
    </div>\r
</template>\r
\r
<style scoped>\r
    .map-container {\r
        width: 100%;\r
        height: 600px;\r
        display: flex;\r
        align-items: center;\r
        color: #ffffff;\r
        text-shadow: 0 0 2px black;\r
    }\r
    .map {\r
        width: 100%;\r
        height: 100%;\r
    }\r
    .weather {\r
        position: absolute;\r
        top: 20px;\r
        left: 150px;\r
    }\r
\r
    .compass {\r
        position: absolute;\r
        top: 20px;\r
        left: 20px;\r
        background-size: cover;\r
        pointer-events: auto;\r
        filter: drop-shadow(0 0 2px black);\r
    }\r
\r
    .stats {\r
        position: absolute;\r
        bottom: 30px;\r
        left: 10px;\r
    }\r
\r
    .gui {\r
        position: absolute;\r
        top: 0px;\r
        right: 0px;\r
        max-height: 95%;\r
        overflow-y: auto;\r
    }\r
</style>\r
\r
<script setup lang="ts">\r
    import {\r
        ACESFilmicToneMapping,\r
        AgXToneMapping,\r
        CineonToneMapping,\r
        Color,\r
        CustomToneMapping,\r
        LinearToneMapping,\r
        MathUtils,\r
        NeutralToneMapping,\r
        NoToneMapping,\r
        ReinhardToneMapping,\r
        Vector3,\r
    } from "three";\r
    import * as tt from "three-tile";\r
    import * as plugin from "three-tile/plugin";\r
    import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";\r
    import { onMounted, onUnmounted, ref } from "vue";\r
    import { useCompass, useLoading, useLocation, useStats } from "../hooks";\r
    import "../style.css";\r
    import { Sky } from "./sky/Sky";\r
\r
    //=================================================================================\r
\r
    // 创建地图\r
    const createMap = () => {\r
        const map = tt.TileMap.create({\r
            imgSource: [\r
                new plugin.ArcGisSource(), // ArcGis卫星影像数据源\r
            ],\r
            demSource: new plugin.ArcGisDemSource(), // ArcGis地形数据源\r
            lon0: 90,\r
            // bounds: [60, 0, 145, 60],\r
        });\r
        map.rotateX(-Math.PI / 2);\r
        return map;\r
    };\r
\r
    // 跳转\r
    const goto = (viewer: plugin.GLViewer, map: tt.TileMap, centerGeo: Vector3, cameraGeo: Vector3) => {\r
        viewer.controls.target.copy(map.geo2world(centerGeo));\r
        viewer.camera.position.copy(map.geo2world(cameraGeo));\r
        return { centerPos: viewer.controls.target, camerePos: viewer.camera.position };\r
    };\r
\r
    //=================================================================================\r
    // 地图容器\r
    const viewerRef = ref(null);\r
    // 指南针容器\r
    const compassRef = ref<HTMLDivElement>();\r
\r
    const guiRef = ref<HTMLDivElement>();\r
\r
    // 创建地图\r
    const map = createMap();\r
    // map.visible = false;\r
\r
    // 创建视图\r
    const viewer = new plugin.GLViewer();\r
    viewer.renderer.toneMapping = ACESFilmicToneMapping;\r
\r
    // 添加天空\r
    const sky = new Sky();\r
    sky.scale.setScalar(2e7);\r
    viewer.scene.add(sky);\r
\r
    // 位置信息\r
    const location = useLocation(map, viewer);\r
\r
    // 加载状态\r
    const loading = useLoading(map);\r
\r
    // 指南针\r
    useCompass(viewer.controls, compassRef);\r
\r
    // 性能监视器\r
    const statsRef = ref<HTMLElement>();\r
    const stats = useStats(statsRef);\r
\r
    viewer.addEventListener("update", () => {\r
        stats.update();\r
    });\r
\r
    //=================================================================================\r
    onMounted(() => {\r
        if (!viewerRef.value) {\r
            console.error("map or cssrenderer or compass container is null");\r
            return;\r
        }\r
\r
        // 添加视图\r
        viewer.addTo(viewerRef.value);\r
\r
        // 添加地图\r
        viewer.scene.add(map);\r
\r
        // 跳转\r
        goto(viewer, map, new Vector3(109, 34, 0), new Vector3(109.1, 34.1, 3000));\r
\r
        // 防止摄像机穿过地面\r
        map.addEventListener("update", () => {\r
            plugin.limitCameraHeight(map, viewer.camera);\r
        });\r
\r
        if (guiRef.value) {\r
            initGUI();\r
        }\r
    });\r
\r
    onUnmounted(() => {\r
        map.dispose();\r
    });\r
\r
    //=================================================================================\r
\r
    // 参数列表\r
    const defaultParams = {\r
        // 云\r
        uTime: 0.0,\r
        mult: 0.2, // 位置变换系数，控制局部变化翻滚\r
        weaken: 0.15, // 采样衰减因子，控制云量\r
        THICKNESS: 80, // 云厚度\r
        ABSORPTION: 0.2, // 云的光线吸收率\r
        N_MARCH_STEPS: 3, // 云采样迭代次数\r
        N_LIGHT_STEPS: 3, // 光照计算迭代次数，控制阴影\r
        coverage: 0.6, // 覆盖率\r
        skylineF: 0.2, // 云天际线因子\r
        curve: 0.3, // 坐标曲率\r
\r
        speed: 2, // 风速\r
        xfactor: 0.3, // x方向系数\r
        yfactor: 0.3, // y方向系数\r
        zfactor: 0.1, // z方向系数\r
\r
        // 天空\r
        turbidity: 10.0,\r
        rayleigh: 0.3,\r
        mieCoefficient: 0.002,\r
        mieDirectionalG: 1.0,\r
\r
        // 太阳\r
        elevation: 15,\r
        azimuth: 180,\r
        sunSize: 1.0, // 太阳角半径\r
\r
        fogColor: viewer.scene.fog?.color || new Color(0),\r
        fogFactor: 0.5,\r
\r
        ambLight: 1,\r
        dirLight: 1,\r
    };\r
\r
    const params = { ...defaultParams };\r
\r
    const sun = new Vector3(); //太阳位置\r
\r
    const resetParams = () => {\r
        Object.assign(params, defaultParams);\r
        viewer.ambLight.intensity = params.ambLight;\r
        viewer.dirLight.intensity = params.dirLight;\r
        viewer.scene.fog && viewer.scene.fog.color.set(0xb4deff).convertLinearToSRGB();\r
    };\r
\r
    const update = () => {\r
        const phi = MathUtils.degToRad(90 - params.elevation);\r
        const theta = MathUtils.degToRad(params.azimuth);\r
\r
        sun.setFromSphericalCoords(1, phi, theta);\r
\r
        const skyUniforms = sky.material.uniforms;\r
        skyUniforms["sunPosition"].value.copy(sun);\r
        skyUniforms["turbidity"].value = params.turbidity;\r
        skyUniforms["rayleigh"].value = params.rayleigh;\r
        skyUniforms["mieCoefficient"].value = params.mieCoefficient;\r
        skyUniforms["mieDirectionalG"].value = params.mieDirectionalG;\r
        skyUniforms["sunAngularDiameter"].value = params.sunSize * 0.505;\r
        skyUniforms["mult"].value = params.mult;\r
        skyUniforms["THICKNESS"].value = params.THICKNESS / 3e4; //3e7; //parameters.scale;\r
        skyUniforms["ABSORPTION"].value = params.ABSORPTION;\r
        skyUniforms["N_MARCH_STEPS"].value = params.N_MARCH_STEPS;\r
        skyUniforms["N_LIGHT_STEPS"].value = params.N_LIGHT_STEPS;\r
        skyUniforms["weaken"].value = params.weaken;\r
        skyUniforms["coverage"].value = params.coverage;\r
        skyUniforms["speed"].value = params.speed / 10.0;\r
        skyUniforms["wind"].value = new Vector3(params.xfactor, params.yfactor, params.zfactor);\r
        skyUniforms["skylineF"].value = params.skylineF;\r
        skyUniforms["curve"].value = 1 - params.curve;\r
\r
        viewer.fogFactor = params.fogFactor;\r
        viewer.scene.fog && viewer.scene.fog.color.set(params.fogColor);\r
        viewer.ambLight.intensity = params.ambLight;\r
        viewer.dirLight.intensity = params.dirLight;\r
        // skyUniforms["fogColor"].value.set(params.fogColor);\r
        // skyUniforms["fogDensity"].value = 0.5; //params.fogFactor;\r
    };\r
\r
    const initGUI = () => {\r
        update();\r
\r
        // GUI\r
        const gui = new GUI({ title: "选项", autoPlace: false, container: guiRef.value });\r
\r
        const folderScene = gui.addFolder("场景");\r
\r
        folderScene.add(viewer.controls, "autoRotate").name("自动旋转").listen();\r
        folderScene\r
            .add(viewer.camera, "fov", 10, 120, 0.1)\r
            .onChange(() => {\r
                viewer.camera.updateProjectionMatrix();\r
            })\r
            .name("视场角FOV")\r
            .listen();\r
        folderScene.add(viewer.ambLight, "intensity", 0, 5, 0.01).name("环境光强度").listen();\r
        folderScene.add(viewer.dirLight, "intensity", 0, 5, 0.01).name("平行光强度").listen();\r
        folderScene.addColor(params, "fogColor").onChange(update).name("雾颜色").listen();\r
        folderScene.add(params, "fogFactor", 0, 5, 0.01).name("雾浓度").onChange(update).listen();\r
        folderScene\r
            .add(viewer.renderer, "toneMapping", {\r
                NoToneMapping,\r
                LinearToneMapping,\r
                ReinhardToneMapping,\r
                CineonToneMapping,\r
                ACESFilmicToneMapping,\r
                CustomToneMapping,\r
                AgXToneMapping,\r
                NeutralToneMapping,\r
            })\r
            .name("色调映射模式")\r
            .listen();\r
        folderScene.add(viewer.renderer, "toneMappingExposure", 0, 2, 0.01).name("色调映射曝光度").listen();\r
        folderScene.add(map, "LODThreshold", 0.5, 5, 0.1).name("LOD阈值").listen();\r
\r
        const folderSky = gui.addFolder("天空");\r
        // folderSky.add(parameters, "scale", 0, 5e7, 1).onChange(updateSun).name("缩放");\r
        folderSky.add(params, "turbidity", 0, 20, 1).onChange(update).name("浊度").listen();\r
        folderSky.add(params, "rayleigh", 0.0, 4, 0.001).onChange(update).name("瑞利系数").listen();\r
        folderSky.add(params, "mieCoefficient", 0.0, 0.1, 0.001).onChange(update).name("米氏系数").listen();\r
        folderSky\r
            .add(params, "mieDirectionalG", 0.0, 0.99999999999, 0.001)\r
            .onChange(update)\r
            .name("米氏方向因子")\r
            .listen();\r
\r
        const folderSun = gui.addFolder("太阳");\r
        folderSun.add(params, "elevation", 0, 90, 0.1).onChange(update).name("太阳高度").listen();\r
        folderSun.add(params, "azimuth", -180, 180, 0.1).onChange(update).name("方位角").listen();\r
        folderSun.add(params, "sunSize", 0, 10, 1).onChange(update).name("大小").listen();\r
\r
        const folderCloud = gui.addFolder("云");\r
        folderCloud.add(params, "mult", 0, 5, 0.01).onChange(update).name("局部翻滚").listen();\r
        folderCloud.add(params, "weaken", 0, 1, 0.01).onChange(update).name("云量").listen();\r
        folderCloud.add(params, "THICKNESS", 0, 100, 0.001).onChange(update).name("厚度").listen();\r
        folderCloud.add(params, "ABSORPTION", 0, 1, 0.01).onChange(update).name("吸光率").listen();\r
        folderCloud.add(params, "N_MARCH_STEPS", 0, 30, 1).onChange(update).name("采样次数").listen();\r
        folderCloud.add(params, "N_LIGHT_STEPS", 0, 10, 1).onChange(update).name("阴影").listen();\r
        folderCloud.add(params, "coverage", 0, 1.0, 0.01).onChange(update).name("覆盖率").listen();\r
        folderCloud.add(params, "speed", 0, 10, 0.1).onChange(update).name("风速").listen();\r
        folderCloud.add(params, "xfactor", -1, 1, 0.01).onChange(update).name("风向X").listen();\r
        folderCloud.add(params, "yfactor", -1, 1, 0.01).onChange(update).name("风向Y").listen();\r
        folderCloud.add(params, "zfactor", -1, 1, 0.01).onChange(update).name("风向Z").listen();\r
        folderCloud.add(params, "skylineF", 0, 1, 0.01).onChange(update).name("天际线").listen();\r
        folderCloud.add(params, "curve", 0.1, 0.6, 0.01).onChange(update).name("高度").listen();\r
    };\r
\r
    // 晴天\r
    const sunny = () => {\r
        resetParams();\r
        params.turbidity = 15;\r
        params.rayleigh = 0.2;\r
        params.mieCoefficient = 0.001;\r
        params.weaken = 0.0;\r
        params.elevation = 45;\r
        params.dirLight = 2;\r
        update();\r
    };\r
\r
    // 多云\r
    const cloudy = () => {\r
        resetParams();\r
        update();\r
    };\r
\r
    // 阴天\r
    const overcast = () => {\r
        resetParams();\r
        params.fogColor.set(0x5a7081);\r
        params.fogFactor = 1;\r
        params.elevation = 19;\r
        params.turbidity = 20;\r
        params.rayleigh = 3;\r
        params.mieCoefficient = 0.06;\r
        params.mieDirectionalG = 0.9999;\r
        params.weaken = 0.2;\r
        params.THICKNESS = 40;\r
        params.coverage = 1;\r
        params.curve = 0.5;\r
        params.ambLight = 1;\r
        params.dirLight = 0.5;\r
        update();\r
    };\r
\r
    // 雾霾\r
    const fog = () => {\r
        resetParams();\r
        params.fogFactor = 3;\r
        params.weaken = 1;\r
        params.fogColor.set(0xe8eeff);\r
        params.elevation = 50;\r
        params.ambLight = 0.5;\r
        params.dirLight = 0.5;\r
        update();\r
    };\r
\r
    // 日出\r
    const morning1 = () => {\r
        resetParams();\r
        params.elevation = 0;\r
        params.sunSize = 3;\r
        params.turbidity = 10;\r
        params.rayleigh = 2;\r
        params.mieCoefficient = 0.0001;\r
        params.mieDirectionalG = 0.996;\r
        params.THICKNESS = 60;\r
        params.weaken = 0.1;\r
        params.coverage = 0.4;\r
        params.skylineF = 0.6;\r
        params.sunSize = 5;\r
        params.curve = 0.1;\r
        params.fogFactor = 0.3;\r
        params.fogColor.set(0xd74333);\r
        params.ambLight = 0.5;\r
        update();\r
    };\r
\r
    // 早晨\r
    const morning2 = () => {\r
        resetParams();\r
        params.elevation = 19;\r
        params.turbidity = 1;\r
        params.rayleigh = 0.05;\r
        params.mieCoefficient = 0.001;\r
        // params.mieDirectionalG = 0.15;\r
        params.weaken = 0.5;\r
        params.THICKNESS = 40;\r
        params.coverage = 1;\r
        params.curve = 0.1;\r
        params.fogFactor = 0.3;\r
        params.ambLight = 1;\r
        params.dirLight = 1;\r
        update();\r
    };\r
\r
    // 傍晚\r
    const evening = () => {\r
        resetParams();\r
        params.elevation = 0;\r
        params.sunSize = 2;\r
        params.turbidity = 6;\r
        params.rayleigh = 1.8;\r
        params.mieCoefficient = 0.005;\r
        params.mieDirectionalG = 0.998;\r
        params.THICKNESS = 60;\r
        params.weaken = 0.25;\r
        params.coverage = 0.3;\r
        params.skylineF = 0.6;\r
        params.curve = 0.1;\r
        params.fogFactor = 0.3;\r
        params.fogColor.set(0xea891a);\r
        params.ambLight = 0.8;\r
        params.dirLight = 0.8;\r
        update();\r
    };\r
\r
    // 夜空\r
    const night1 = () => {\r
        resetParams();\r
        params.elevation = 8;\r
        params.sunSize = 3;\r
        params.turbidity = 10;\r
        params.rayleigh = 0;\r
        params.mieCoefficient = 0.2;\r
        params.mieDirectionalG = 0.999999;\r
        params.THICKNESS = 60;\r
        params.ABSORPTION = 0.5;\r
        params.weaken = 0.2;\r
        params.coverage = 0.4;\r
        params.skylineF = 1;\r
        // params.curve = 1;\r
        params.fogFactor = 0;\r
        params.ambLight = 0.5;\r
        params.dirLight = 0.5;\r
        update();\r
    };\r
\r
    // 夜晚\r
    const night2 = () => {\r
        resetParams();\r
        params.elevation = 19;\r
        params.turbidity = 1;\r
        params.rayleigh = 0;\r
        params.mieCoefficient = 0.03;\r
        params.mieDirectionalG = 0.998;\r
        params.weaken = 0.01;\r
        params.THICKNESS = 60;\r
        params.coverage = 1;\r
        // params.curve = 1;\r
        params.fogFactor = 0;\r
        params.ambLight = 0.5;\r
        params.dirLight = 0.3;\r
        update();\r
    };\r
<\/script>\r
`,x=JSON.parse('{"title":"6. 大气环境模拟","description":"","frontmatter":{},"headers":[],"relativePath":"4.application/06.atmosphere/index.md","filePath":"4.application/06.atmosphere/index.md","lastUpdated":1766327261000}'),k={name:"4.application/06.atmosphere/index.md"},M=Object.assign(k,{setup(T){const t=p(!0),a=l();return d(async()=>{a.value=(await c(async()=>{const{default:s}=await import("./chunks/Atmosphere.BF1ujrqk.js");return{default:s}},__vite__mapDeps([0,1,2,3,4]))).default}),(s,r)=>{const m=u("ClientOnly");return g(),f("div",null,[r[1]||(r[1]=o("h1",{id:"_6-大气环境模拟",tabindex:"-1"},[h("6. 大气环境模拟 "),o("a",{class:"header-anchor",href:"#_6-大气环境模拟","aria-label":'Permalink to "6. 大气环境模拟"'},"​")],-1)),v(n(e(S),null,null,512),[[y,t.value]]),n(m,null,{default:i(()=>[n(e(w),{title:"vue演示",description:"综合环境，包括天空、云层、太阳、雾等",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:r[0]||(r[0]=()=>{t.value=!1}),vueCode:e(b)},C({_:2},[a.value?{name:"vue",fn:i(()=>[n(e(a))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{x as __pageData,M as default};
