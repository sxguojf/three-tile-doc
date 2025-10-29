const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/Walk.CLsQsJYk.js","assets/chunks/index.D-Y8yZZR.js","assets/chunks/style.RbGHg-Vc.js","assets/chunks/framework.CJqd0DOR.js","assets/chunks/useSky.D-YiwE1J.js","assets/chunks/useState.BDVbIXbi.js","assets/chunks/GLTFLoader.CkiCWgjt.js"])))=>i.map(i=>d[i]);
import{p as d,D as c,v as p,V as m,C as u,c as v,o as f,j as o,a4 as h,G as n,a as w,a5 as _,k as r,w as i,a6 as y}from"./chunks/framework.CJqd0DOR.js";import{R as k,k as x}from"./chunks/index.Ga076E9x.js";const T=`<template>\r
    <div class="demo-container">\r
        <div ref="viewerRef" class="viewer"></div>\r
        <div id="help"><b>光标键 | WASD</b> 移动，按下shift快速移动</div>\r
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
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
    import { Mesh, Object3D } from "three";\r
    import { onMounted, onUnmounted, ref } from "vue";\r
    import { useCompass } from "../hooks/useCompass";\r
    import { useLoading } from "../hooks/useLoading";\r
    import { useLocation } from "../hooks/useLocation";\r
    import { useShaderSky } from "../hooks/useSky";\r
    import { useStats } from "../hooks/useState";\r
    import "../style.css";\r
    import { init } from "./loadModel";\r
    import { useThreeTile } from "./useThreeTile";\r
\r
    const viewerRef = ref<HTMLElement | undefined>(undefined);\r
\r
    const { viewer, map } = useThreeTile(viewerRef);\r
\r
    // 位置信息\r
    const location = useLocation(map, viewer);\r
    // 加载状态\r
    const loading = useLoading(map);\r
\r
    // 指南针\r
    const compassRef = ref<HTMLDivElement>();\r
    useCompass(viewer.controls, compassRef);\r
\r
    // 添加性能指示器\r
    const statsRef = ref<HTMLElement>();\r
    const stats = useStats(statsRef);\r
    const onViewerUpdate = () => {\r
        stats.update();\r
    };\r
\r
    // useCloudSky(viewer.scene);\r
    useShaderSky(viewer.scene);\r
\r
    let model: Object3D;\r
\r
    onMounted(async () => {\r
        viewer.addEventListener("update", onViewerUpdate);\r
        model = await init("../../model/Soldier.glb", viewer, map);\r
        model.position.copy(viewer.controls.target);\r
        // viewer.addEventListener("update", () => {\r
        //     // 保持模型位置在地图中心\r
        //     model.position.copy(viewer.controls.target);\r
        // });\r
    });\r
\r
    onUnmounted(() => {\r
        model.traverse((child) => {\r
            if (child instanceof Mesh) {\r
                child.geometry.dispose();\r
                child.material.dispose();\r
            }\r
        });\r
        viewer.scene.remove(model);\r
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
        bottom: 50px;\r
        right: 20px;\r
    }\r
</style>\r
`,D=JSON.parse('{"title":"第三人称地面行走","description":"","frontmatter":{},"headers":[],"relativePath":"4.application/03.walk/index.md","filePath":"4.application/03.walk/index.md","lastUpdated":1761583418000}'),b={name:"4.application/03.walk/index.md"},R=Object.assign(b,{setup(g){const s=d(!0),t=c();return p(async()=>{t.value=(await m(async()=>{const{default:a}=await import("./chunks/Walk.CLsQsJYk.js");return{default:a}},__vite__mapDeps([0,1,2,3,4,5,6]))).default}),(a,e)=>{const l=u("ClientOnly");return f(),v("div",null,[e[1]||(e[1]=o("h1",{id:"第三人称地面行走",tabindex:"-1"},[w("第三人称地面行走 "),o("a",{class:"header-anchor",href:"#第三人称地面行走","aria-label":'Permalink to "第三人称地面行走"'},"​")],-1)),h(n(r(k),null,null,512),[[_,s.value]]),n(l,null,{default:i(()=>[n(r(x),{title:"vue演示",description:"移植 threejs示例：https://threejs.org/examples/?q=wal#webgl_animation_walk， 添加地图",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[0]||(e[0]=()=>{s.value=!1}),vueCode:r(T)},y({_:2},[t.value?{name:"vue",fn:i(()=>[n(r(t))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{D as __pageData,R as default};
