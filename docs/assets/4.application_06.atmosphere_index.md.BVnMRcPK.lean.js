const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/Atmosphere.BW8EdUKC.js","assets/chunks/framework.xbTv8SNN.js","assets/chunks/index.xb0hfx6i.js","assets/chunks/style.n9PNkupe.js","assets/chunks/useState.EiXjSKHF.js","assets/chunks/useFog.D4XtqScj.js"])))=>i.map(i=>d[i]);
import{p as d,D as p,v as u,V as m,C as c,c as f,o as v,j as s,a4 as g,G as r,a as h,a5 as S,k as n,w as i,a6 as y}from"./chunks/framework.xbTv8SNN.js";import{R as C,k as w}from"./chunks/index.T3-yMMRo.js";const k=`<template>\r
    <div class="demo-container">\r
        <div ref="viewerRef" class="map-container"></div>\r
        <div class="tools">\r
            <label for="fogFactor"\r
                >雾浓度 <input type="range" id="fogFactor" min="0" max="2" step="0.1" v-model="fogFactor" />{{\r
                    fogFactor\r
                }}</label\r
            >\r
            <label for="fogColor">雾颜色 <input type="color" id="fogColor" v-model="fogColor" /></label>\r
        </div>\r
        <div class="compass" ref="compassRef"></div>\r
        <div class="state">\r
            <div class="location">\r
                <span>经度：{{ location.x.toFixed(6) }}° </span>\r
                <span>纬度：{{ location.y.toFixed(6) }}° </span>\r
                <span>海拔：{{ location.z.toFixed(1) }}m </span>\r
            </div>\r
            <div class="loading">{{ loading }}</div>\r
        </div>\r
        <div class="stats" ref="statsRef"></div>\r
        <div class="gui" ref="guiRef"></div>\r
    </div>\r
</template>\r
\r
<style scoped>\r
    .map-container {\r
        width: 100%;\r
        display: flex;\r
        align-items: center;\r
        color: #ffffff;\r
        height: 650px;\r
        text-shadow: 0 0 2px black;\r
    }\r
    .map {\r
        width: 100%;\r
        height: 100%;\r
    }\r
\r
    .tools {\r
        position: absolute;\r
        bottom: 0px;\r
        left: 10px;\r
        width: 180px;\r
        display: flex;\r
        flex-direction: column;\r
        gap: 5px;\r
        background-color: #222b;\r
        border-radius: 5px;\r
        box-shadow: 0 0 2px black;\r
        padding: 15px;\r
    }\r
\r
    .tools > label > input {\r
        vertical-align: middle;\r
    }\r
\r
    .tools > label > input {\r
        width: 65px;\r
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
        bottom: 100px;\r
        left: 20px;\r
    }\r
\r
    .gui {\r
        position: absolute;\r
        top: 0px;\r
        right: 0px;\r
        height: 100%;\r
    }\r
</style>\r
\r
<script setup lang="ts">\r
    import { ACESFilmicToneMapping, MathUtils, Vector3 } from "three";\r
    import * as tt from "three-tile";\r
    import * as plugin from "three-tile/plugin";\r
    import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";\r
    import { onMounted, onUnmounted, ref } from "vue";\r
    import { useCompass, useFog, useLoading, useLocation, useStats } from "../hooks";\r
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
    // 创建视图\r
    const viewer = new plugin.GLViewer();\r
    viewer.renderer.toneMapping = ACESFilmicToneMapping;\r
\r
    // 添加天空\r
    const sky = new Sky();\r
    viewer.scene.add(sky);\r
\r
    // 位置信息\r
    const location = useLocation(map, viewer);\r
\r
    // 加载状态\r
    const loading = useLoading(map);\r
\r
    // 雾浓度\r
    const { fogFactor, fogColor } = useFog(viewer);\r
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
        goto(viewer, map, new Vector3(109, 34, 500), new Vector3(109.2, 34.1, 3000));\r
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
    const initGUI = () => {\r
        // 参数列表\r
        const parameters = {\r
            // 云\r
            uTime: 0.0,\r
            scale: 3e7, //6371.393,\r
            mult: 0.2, // 位置变换系数，控制局部变化翻滚\r
            weaken: 0.15, // 采样衰减因子\r
            THICKNESS: 6, // 云厚度\r
            ABSORPTION: 1, // 云的光线吸收率\r
            N_MARCH_STEPS: 3, // 云采样迭代次数\r
            N_LIGHT_STEPS: 3, // 光照计算迭代次数\r
            coverage: 0.5, // 覆盖率\r
            sunSize: 1.0, // 太阳角半径\r
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
            rayleigh: 0.4,\r
            mieCoefficient: 0.005,\r
            mieDirectionalG: 1.0,\r
            elevation: 12,\r
            azimuth: 180,\r
            exposure: viewer.renderer.toneMappingExposure,\r
        };\r
\r
        const sun = new Vector3(); //太阳位置\r
        const skyUniforms = sky.material.uniforms;\r
\r
        function updateSun() {\r
            const phi = MathUtils.degToRad(90 - parameters.elevation);\r
            const theta = MathUtils.degToRad(parameters.azimuth);\r
\r
            sun.setFromSphericalCoords(1, phi, theta);\r
\r
            skyUniforms["sunPosition"].value.copy(sun);\r
            skyUniforms["turbidity"].value = parameters.turbidity;\r
            skyUniforms["rayleigh"].value = parameters.rayleigh;\r
            skyUniforms["mieCoefficient"].value = parameters.mieCoefficient;\r
            skyUniforms["mieDirectionalG"].value = parameters.mieDirectionalG;\r
            skyUniforms["sunAngularDiameter"].value = parameters.sunSize * 0.505;\r
            skyUniforms["mult"].value = parameters.mult;\r
            skyUniforms["THICKNESS"].value = parameters.THICKNESS / parameters.scale;\r
            skyUniforms["ABSORPTION"].value = parameters.ABSORPTION;\r
            skyUniforms["N_MARCH_STEPS"].value = parameters.N_MARCH_STEPS;\r
            skyUniforms["N_LIGHT_STEPS"].value = parameters.N_LIGHT_STEPS;\r
            skyUniforms["weaken"].value = parameters.weaken;\r
            skyUniforms["coverage"].value = parameters.coverage;\r
            skyUniforms["speed"].value = parameters.speed / 10.0;\r
            skyUniforms["wind"].value = new Vector3(parameters.xfactor, parameters.yfactor, parameters.zfactor);\r
            skyUniforms["skylineF"].value = parameters.skylineF;\r
            skyUniforms["curve"].value = 1 - parameters.curve;\r
\r
            sky.scale.setScalar(parameters.scale);\r
        }\r
\r
        updateSun();\r
\r
        // GUI\r
        const gui = new GUI({ title: "控件", autoPlace: false, container: guiRef.value });\r
\r
        const folderSky = gui.addFolder("天空");\r
        // folderSky.add(parameters, "scale", 0, 5e7, 1).onChange(updateSun).name("缩放");\r
        folderSky.add(parameters, "turbidity", 0, 20, 1).onChange(updateSun).name("浊度");\r
        folderSky.add(parameters, "rayleigh", 0.0, 4, 0.001).onChange(updateSun).name("瑞利系数");\r
        folderSky.add(parameters, "mieCoefficient", 0.0, 0.1, 0.001).onChange(updateSun).name("米氏系数");\r
        folderSky\r
            .add(parameters, "mieDirectionalG", 0.0, 0.99999999999, 0.001)\r
            .onChange(updateSun)\r
            .name("米氏方向因子");\r
\r
        const folderSun = gui.addFolder("太阳");\r
        folderSun.add(parameters, "elevation", 0, 90, 0.1).onChange(updateSun).name("太阳高度");\r
        folderSun.add(parameters, "azimuth", -180, 180, 0.1).onChange(updateSun).name("方位角");\r
        folderSun.add(parameters, "sunSize", 0, 10, 1).onChange(updateSun).name("大小");\r
\r
        const folderCloud = gui.addFolder("云");\r
        folderCloud.add(parameters, "mult", 0, 5, 0.01).onChange(updateSun).name("局部翻滚");\r
        folderCloud.add(parameters, "weaken", 0, 1, 0.01).onChange(updateSun).name("云量");\r
        folderCloud.add(parameters, "THICKNESS", 0, 200, 0.001).onChange(updateSun).name("厚度");\r
        folderCloud.add(parameters, "ABSORPTION", 0, 1, 0.01).onChange(updateSun).name("吸光率");\r
        folderCloud.add(parameters, "N_MARCH_STEPS", 0, 30, 1).onChange(updateSun).name("采样次数");\r
        folderCloud.add(parameters, "N_LIGHT_STEPS", 0, 10, 1).onChange(updateSun).name("阴影");\r
        folderCloud.add(parameters, "coverage", 0, 1.0, 0.01).onChange(updateSun).name("覆盖率");\r
        folderCloud.add(parameters, "speed", 0, 10, 0.1).onChange(updateSun).name("风速");\r
        folderCloud.add(parameters, "xfactor", -1, 1, 0.01).onChange(updateSun).name("风向X");\r
        folderCloud.add(parameters, "yfactor", -1, 1, 0.01).onChange(updateSun).name("风向Y");\r
        folderCloud.add(parameters, "zfactor", -1, 1, 0.01).onChange(updateSun).name("风向Z");\r
        folderCloud.add(parameters, "skylineF", 0, 1, 0.01).onChange(updateSun).name("天际线");\r
        folderCloud.add(parameters, "curve", 0.1, 0.6, 0.01).onChange(updateSun).name("高度");\r
    };\r
<\/script>\r
`,G=JSON.parse('{"title":"6. 大气环境","description":"","frontmatter":{},"headers":[],"relativePath":"4.application/06.atmosphere/index.md","filePath":"4.application/06.atmosphere/index.md","lastUpdated":1766035100000}'),_={name:"4.application/06.atmosphere/index.md"},R=Object.assign(_,{setup(x){const t=d(!0),a=p();return u(async()=>{a.value=(await m(async()=>{const{default:o}=await import("./chunks/Atmosphere.BW8EdUKC.js");return{default:o}},__vite__mapDeps([0,1,2,3,4,5]))).default}),(o,e)=>{const l=c("ClientOnly");return v(),f("div",null,[e[1]||(e[1]=s("h1",{id:"_6-大气环境",tabindex:"-1"},[h("6. 大气环境 "),s("a",{class:"header-anchor",href:"#_6-大气环境","aria-label":'Permalink to "6. 大气环境"'},"​")],-1)),g(r(n(C),null,null,512),[[S,t.value]]),r(l,null,{default:i(()=>[r(n(w),{title:"vue演示",description:"综合环境，包括天空、云层、太阳、雾等",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),vueCode:n(k)},y({_:2},[a.value?{name:"vue",fn:i(()=>[r(n(a))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{G as __pageData,R as default};
