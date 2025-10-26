const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/01.DVFjsdHy.js","assets/chunks/index.DTcE6LeP.js","assets/chunks/useState.D--43xZA.js","assets/chunks/framework.BZ48x_LH.js","assets/chunks/useSky.BJdHTgn1.js"])))=>i.map(i=>d[i]);
import{p as h,D as k,v as d,V as E,C as o,c,o as g,j as p,a4 as y,G as i,a2 as F,a as u,a5 as b,k as a,w as t,a6 as m}from"./chunks/framework.BZ48x_LH.js";import{R as C,k as D}from"./chunks/index.DCj37L2o.js";const A=`<script setup lang="ts">\r
    import { Vector2, Vector3 } from "three";\r
    import { onMounted, onUnmounted, reactive, ref, watch } from "vue";\r
    import { fireInit, init } from "./01";\r
    import { useCloudSky } from "../hooks/useSky";\r
    import { useStats } from "../hooks/useState";\r
\r
    // 状态\r
    const state = reactive({\r
        fireCount: 0,\r
        location: new Vector3(),\r
        loading: 0,\r
    });\r
\r
    // 场景容器\r
    const viewerRef = ref<HTMLDivElement>();\r
\r
    // 初始化场景和地图\r
    const { viewer, map } = init(new Vector3(86, 28, 8e3));\r
\r
    //添加蓝天白云\r
    useCloudSky(viewer.scene);\r
\r
    // 性能监视器\r
    const statsRef = ref<HTMLElement>();\r
    const stats = useStats(statsRef);\r
\r
    // 自动前进\r
    const autoForward = ref<boolean>(false);\r
    watch(autoForward, (v) => (viewer.autoForward = v));\r
\r
    // 射击音效\r
    const audio = new Audio("../sounds/boom.mp3");\r
    const sound = ref(false);\r
\r
    // 更新位置等状态信息\r
    const onViewerUpdate = () => {\r
        const focus = map.getLocalInfoFromScreen(viewer.camera, new Vector2());\r
        if (focus) {\r
            state.location.copy(map.world2geo(focus.point));\r
        }\r
        state.loading = map.downloading;\r
        stats.update();\r
    };\r
\r
    onMounted(() => {\r
        if (!viewerRef.value) {\r
            console.error("map container not fonund");\r
            return;\r
        }\r
\r
        // 添加场景\r
        viewer.addTo(viewerRef.value);\r
\r
        // 初始化射击场景\r
        fireInit(viewer, map, () => {\r
            if (sound.value) {\r
                audio.currentTime = 0;\r
                audio.play();\r
            }\r
            state.fireCount++;\r
        });\r
\r
        // 地图更新\r
        viewer.addEventListener("update", onViewerUpdate);\r
    });\r
\r
    onUnmounted(() => {\r
        viewer.removeEventListener("update", onViewerUpdate);\r
        viewer.controls.disconnect();\r
        viewer.controls.dispose();\r
        map.dispose();\r
        audio.pause();\r
        audio.src = "";\r
    });\r
<\/script>\r
\r
<template>\r
    <div class="map-container" oncontextmenu="return false;">\r
        <div ref="viewerRef" class="map"></div>\r
        <img class="focus" src="./focus.png" alt="" width="48px" height="48px" />\r
\r
        <div class="options">\r
            <label class="forward" for="autoForward"\r
                >自动前进<input\r
                    type="checkbox"\r
                    id="autoForward"\r
                    @change="autoForward = !autoForward"\r
                    :checked="autoForward"\r
            /></label>\r
            <label class="sound" for="sound"\r
                >射击音效<input type="checkbox" id="sound" @change="sound = !sound" :checked="sound"\r
            /></label>\r
        </div>\r
        <div id="help"><b>WASD|Arrow</b>: 移动 | <b>Space</b>: 跳跃 | <b>Mouse</b>: 开火 | <b>Esc</b>: 退出</div>\r
        <div class="mapState">\r
            <div>Loading: {{ state.loading }}</div>\r
            <div>FireCount: {{ state.fireCount }}</div>\r
            <div>经度: {{ state.location.x.toFixed(3) }}°</div>\r
            <div>纬度: {{ state.location.y.toFixed(3) }}°</div>\r
            <div>高度: {{ state.location.z.toFixed(0) }} m</div>\r
        </div>\r
        <div class="stats" ref="statsRef"></div>\r
    </div>\r
</template>\r
\r
<style scoped>\r
    .map-container {\r
        width: 100%;\r
        height: 100%;\r
        display: flex;\r
        align-items: center;\r
        color: #ffffff;\r
        height: 600px;\r
        text-shadow: 0 0 1px black;\r
    }\r
    .map {\r
        width: 100%;\r
        height: 100%;\r
    }\r
\r
    .focus {\r
        position: absolute;\r
        left: 50%;\r
        transform: translate(-50%, 0%);\r
        filter: drop-shadow(0 0 3px #ffffff);\r
        pointer-events: none;\r
    }\r
    .mapState {\r
        position: absolute;\r
        right: 30px;\r
        top: 80px;\r
        background-color: #0005;\r
        padding: 5px 10px;\r
        border-radius: 5px;\r
        box-shadow: 0 0 5px #000;\r
        width: 120px;\r
    }\r
    #help {\r
        position: absolute;\r
        left: 30px;\r
        top: 80px;\r
    }\r
    .stats {\r
        position: absolute;\r
        top: 610px;\r
        left: 30px;\r
        z-index: 1000;\r
    }\r
    .options {\r
        position: absolute;\r
        right: 30px;\r
        top: 600px;\r
        z-index: 1000;\r
        display: flex;\r
        flex-direction: column;\r
    }\r
</style>\r
`,x=JSON.parse('{"title":"第一人称射击","description":"","frontmatter":{},"headers":[],"relativePath":"4.application/01.firstPerson.md","filePath":"4.application/01.firstPerson.md","lastUpdated":1761471651000}'),f={name:"4.application/01.firstPerson.md"},_=Object.assign(f,{setup(v){const l=h(!0),n=k();return d(async()=>{n.value=(await E(async()=>{const{default:e}=await import("./chunks/01.DVFjsdHy.js");return{default:e}},__vite__mapDeps([0,1,2,3,4]))).default}),(e,s)=>{const r=o("ClientOnly");return g(),c("div",null,[s[1]||(s[1]=p("h1",{id:"第一人称射击",tabindex:"-1"},[u("第一人称射击 "),p("a",{class:"header-anchor",href:"#第一人称射击","aria-label":'Permalink to "第一人称射击"'},"​")],-1)),y(i(a(C),null,null,512),[[b,l.value]]),i(r,null,{default:t(()=>[i(a(D),{title:"vue演示",description:"点击地图开始射击",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{l.value=!1}),vueCode:a(A)},m({_:2},[n.value?{name:"vue",fn:t(()=>[i(a(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[2]||(s[2]=F("",15))])}}});export{x as __pageData,_ as default};
