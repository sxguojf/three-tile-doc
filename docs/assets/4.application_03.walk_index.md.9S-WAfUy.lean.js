const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/Walk.t59lH1H7.js","assets/chunks/framework.BQo5SrHh.js","assets/chunks/index.B0Mz6VAy.js","assets/chunks/style.B3RjSc2H.js","assets/chunks/useState.BEDzeVK5.js","assets/chunks/useSky.ByY0yeG8.js","assets/chunks/useFog.nsXJc4ko.js","assets/chunks/GLTFLoader.dE1qf7EY.js"])))=>i.map(i=>d[i]);
import{p as d,D as c,v as p,V as m,C as u,c as v,o as f,j as s,a4 as w,G as r,a as x,a5 as h,k as n,w as i,a6 as g}from"./chunks/framework.BQo5SrHh.js";import{R as b,k as _}from"./chunks/index.UKPBqX0I.js";const y=`<template>\r
    <div class="demo-container">\r
        <div ref="viewerRef" class="viewer"></div>\r
        <div id="help"><b>方向键|WASD 移动, shift加速</b></div>\r
        <div class="compass" ref="compassRef"></div>\r
        <div class="state">\r
            <div class="location">\r
                <span>经度：{{ location.x.toFixed(6) }}° </span>\r
                <span>纬度：{{ location.y.toFixed(6) }}° </span>\r
                <span>海拔：{{ location.z.toFixed(1) }}m </span>\r
            </div>\r
            <div class="loading">{{ loading }}</div>\r
        </div>\r
        <div class="model-state">\r
            <span>经度:{{ modelState.x.toFixed(6) }}°</span>\r
            <span>纬度:{{ modelState.y.toFixed(6) }}°</span>\r
            <span>高度:{{ modelState.z.toFixed(1) }}m</span>\r
        </div>\r
        <div class="options">\r
            <label for="fogFactor"\r
                >雾浓度: {{ fogFactor }}\r
                <input type="range" id="fogFactor" min="0" max="2" step="0.01" v-model="fogFactor"\r
            /></label>\r
            <div style="display: flex; align-items: center">\r
                <label for="fogColor">雾颜色: </label>\r
                <input type="color" id="fogColor" v-model="fogColor" />\r
            </div>\r
        </div>\r
        <div class="stats" ref="statsRef"></div>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
    import { Object3D, Vector2, Vector3 } from "three";\r
    import { onMounted, onUnmounted, ref } from "vue";\r
    import { useCompass, useLoading, useLocation, useShaderSky, useStats } from "../hooks";\r
    import { useFog } from "../hooks/useFog";\r
    import "../style.css";\r
    import { disposeModel, init } from "./loadModel";\r
    import { useThreeTile } from "./useThreeTile";\r
\r
    // 场景容器\r
    const viewerRef = ref<HTMLElement | undefined>(undefined);\r
\r
    // 初始化场景和地图\r
    const { viewer, map } = useThreeTile(viewerRef);\r
\r
    // 鼠标位置信息\r
    const location = useLocation(map, viewer);\r
\r
    // 地图加载状态\r
    const loading = useLoading(map);\r
\r
    // 模型位置\r
    const modelState = ref(new Vector3());\r
\r
    // 添加天空\r
    // useCloudSky(viewer.scene);\r
    useShaderSky(viewer.scene);\r
\r
    // 添加雾\r
    const { fogFactor, fogColor } = useFog(viewer);\r
\r
    // 指南针\r
    const compassRef = ref<HTMLDivElement>();\r
    useCompass(viewer.controls, compassRef);\r
\r
    // 添加性能指示器\r
    const statsRef = ref<HTMLElement>();\r
    const stats = useStats(statsRef);\r
\r
    // 每帧回调\r
    const onViewerUpdate = () => {\r
        stats.update();\r
        const loc = map.getLocalInfoFromScreen(viewer.camera, new Vector2());\r
        if (loc) {\r
            modelState.value.copy(loc.location);\r
        }\r
    };\r
\r
    const goto = (centerGeo: Vector3, cameraGeo: Vector3) => {\r
        viewer.controls.target.copy(map.geo2world(centerGeo));\r
        viewer.camera.position.copy(map.geo2world(cameraGeo));\r
    };\r
\r
    let model: Object3D;\r
\r
    onMounted(async () => {\r
        viewer.addEventListener("update", onViewerUpdate);\r
        model = await init("../../model/Soldier.glb", viewer, map);\r
\r
        const centerGeo = new Vector3(94.39977, 36.0022, 4085.5);\r
        const cameraGeo = new Vector3(94.4003, 35.9989, 4185);\r
        goto(centerGeo, cameraGeo);\r
\r
        model.position.copy(viewer.controls.target);\r
    });\r
\r
    onUnmounted(() => {\r
        disposeModel(model, viewer.renderer.domElement);\r
    });\r
<\/script>\r
\r
<style scoped>\r
    .viewer {\r
        height: 100%;\r
    }\r
    #help {\r
        position: absolute;\r
        left: 30px;\r
        top: 20px;\r
    }\r
    .stats {\r
        position: absolute;\r
        bottom: 40px;\r
        right: 200px;\r
    }\r
    .model-state {\r
        position: absolute;\r
        right: 20px;\r
        top: 30px;\r
        display: flex;\r
        flex-direction: column;\r
        width: 140px;\r
        background-color: #0005;\r
        padding: 5px 10px;\r
        border-radius: 5px;\r
        box-shadow: 0 0 5px #000;\r
    }\r
    .options {\r
        position: absolute;\r
        right: 20px;\r
        bottom: 40px;\r
        display: flex;\r
        flex-direction: column;\r
        width: 150px;\r
        background-color: #0005;\r
        padding: 5px 10px;\r
        border-radius: 5px;\r
        box-shadow: 0 0 5px #000;\r
    }\r
</style>\r
`,T=JSON.parse('{"title":"3. 第三人称地面行走","description":"","frontmatter":{},"headers":[],"relativePath":"4.application/03.walk/index.md","filePath":"4.application/03.walk/index.md","lastUpdated":1761902788000}'),k={name:"4.application/03.walk/index.md"},V=Object.assign(k,{setup(F){const t=d(!0),o=c();return p(async()=>{o.value=(await m(async()=>{const{default:a}=await import("./chunks/Walk.t59lH1H7.js");return{default:a}},__vite__mapDeps([0,1,2,3,4,5,6,7]))).default}),(a,e)=>{const l=u("ClientOnly");return f(),v("div",null,[e[1]||(e[1]=s("h1",{id:"_3-第三人称地面行走",tabindex:"-1"},[x("3. 第三人称地面行走 "),s("a",{class:"header-anchor",href:"#_3-第三人称地面行走","aria-label":'Permalink to "3. 第三人称地面行走"'},"​")],-1)),w(r(n(b),null,null,512),[[h,t.value]]),r(l,null,{default:i(()=>[r(n(_),{title:"vue演示",description:"移植 threejs示例：https://threejs.org/examples/?q=wal#webgl_animation_walk， 添加地图",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),vueCode:n(y)},g({_:2},[o.value?{name:"vue",fn:i(()=>[r(n(o))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{T as __pageData,V as default};
