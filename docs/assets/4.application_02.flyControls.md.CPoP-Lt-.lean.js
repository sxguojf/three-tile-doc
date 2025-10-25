const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/02.axFhEehq.js","assets/chunks/index.BXUrQien.js","assets/chunks/useState.D--43xZA.js","assets/chunks/framework.BZ48x_LH.js","assets/chunks/useSky.CSQ3i_TO.js"])))=>i.map(i=>d[i]);
import{p as r,D as k,v as d,V as o,C as E,c as y,o as g,j as t,a4 as c,G as i,a2 as F,a as u,a5 as m,k as a,w as p,a6 as b}from"./chunks/framework.BZ48x_LH.js";import{R as A,k as D}from"./chunks/index.DCj37L2o.js";const C=`<script setup lang="ts">\r
    import { Vector3 } from "three";\r
    import { onMounted, onUnmounted, ref, watch } from "vue";\r
\r
    import { init, initFly } from "./02";\r
    import { useShaderSky } from "./hooks/useSky";\r
    import { useStats } from "./hooks/useState";\r
\r
    const viewerRef = ref<HTMLDivElement>();\r
\r
    const flyHeight = ref<number>(0);\r
\r
    const { viewer, map } = init(new Vector3(86, 28, 1e4));\r
\r
    const statsRef = ref<HTMLElement>();\r
    const stats = useStats(statsRef);\r
    const onViewerUpdate = () => stats.update();\r
\r
    const autoForward = ref<boolean>(false);\r
    watch(autoForward, (val) => (viewer.autoForward = val));\r
\r
    //添加蓝天白云\r
    // useCloudSky(viewer.scene);\r
    //添加着色器Sky\r
    useShaderSky(viewer);\r
\r
    onMounted(async () => {\r
        if (!viewerRef.value) return;\r
        viewer.addTo(viewerRef.value);\r
\r
        // 初始化飞行模型\r
        const model = await initFly(\r
            viewer,\r
            map,\r
            (height) => (flyHeight.value = height),\r
            (height) => {\r
                flyHeight.value = height;\r
                autoForward.value = false;\r
            }\r
        );\r
        model.scale.setScalar(1000);\r
        viewer.scene.add(model);\r
\r
        viewer.addEventListener("update", onViewerUpdate);\r
    });\r
\r
    onUnmounted(() => {\r
        viewer.removeEventListener("update", onViewerUpdate);\r
        map.dispose();\r
    });\r
<\/script>\r
\r
<template>\r
    <div class="map-container">\r
        <div ref="viewerRef" class="map"></div>\r
        <div id="help">\r
            <b>WASD</b> move, <b>R|F</b> up | down, <b>Q|E</b> roll, <b>up|down</b> pitch, <b>left|right</b> yaw\r
        </div>\r
        <label class="forward" for="autoForward"\r
            >自动前进<input\r
                type="checkbox"\r
                id="autoForward"\r
                @change="autoForward = !autoForward"\r
                :checked="autoForward"\r
        /></label>\r
        <div class="mapState">\r
            <div>飞行高度: {{ flyHeight.toFixed(0) }} m</div>\r
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
        text-shadow: 1px 1px 1px black;\r
    }\r
    #help {\r
        position: absolute;\r
        left: 30px;\r
        top: 80px;\r
        text-shadow: 1px 1px 1px black;\r
    }\r
    .stats {\r
        position: absolute;\r
        top: 610px;\r
        left: 30px;\r
        z-index: 1000;\r
    }\r
    .forward {\r
        position: absolute;\r
        right: 30px;\r
        top: 630px;\r
        z-index: 1000;\r
    }\r
</style>\r
`,_=JSON.parse('{"title":"第三人称飞行","description":"","frontmatter":{},"headers":[],"relativePath":"4.application/02.flyControls.md","filePath":"4.application/02.flyControls.md","lastUpdated":1761368239000}'),f={name:"4.application/02.flyControls.md"},x=Object.assign(f,{setup(v){const l=r(!0),n=k();return d(async()=>{n.value=(await o(async()=>{const{default:e}=await import("./chunks/02.axFhEehq.js");return{default:e}},__vite__mapDeps([0,1,2,3,4]))).default}),(e,s)=>{const h=E("ClientOnly");return g(),y("div",null,[s[1]||(s[1]=t("h1",{id:"第三人称飞行",tabindex:"-1"},[u("第三人称飞行 "),t("a",{class:"header-anchor",href:"#第三人称飞行","aria-label":'Permalink to "第三人称飞行"'},"​")],-1)),c(i(a(A),null,null,512),[[m,l.value]]),i(h,null,{default:p(()=>[i(a(D),{title:"vue演示",description:"鼠标单击开始向前飞行，用键盘或鼠标引导飞行方向",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{l.value=!1}),vueCode:a(C)},b({_:2},[n.value?{name:"vue",fn:p(()=>[i(a(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[2]||(s[2]=F("",10))])}}});export{_ as __pageData,x as default};
