const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/FlyControls.DNoHV4sQ.js","assets/chunks/index.xb0hfx6i.js","assets/chunks/useState.EiXjSKHF.js","assets/chunks/framework.xbTv8SNN.js","assets/chunks/GLTFLoader.D-rR401k.js","assets/chunks/useSky.Cg87coJi.js","assets/chunks/tween.module.BLfFZSQj.js"])))=>i.map(i=>d[i]);
import{p as h,D as k,v as o,V as d,C as c,c as E,o as y,j as t,a4 as g,G as i,a2 as F,a as u,a5 as b,k as n,w as r,a6 as m}from"./chunks/framework.xbTv8SNN.js";import{R as v,k as A}from"./chunks/index.T3-yMMRo.js";const f=`<script setup lang="ts">\r
    import { Group, Vector3 } from "three";\r
    import { onMounted, onUnmounted, ref, watch } from "vue";\r
\r
    import { useStats } from "../hooks";\r
    import { init, initFly } from "./init";\r
\r
    // 游戏地点的经纬度\r
    const locations = {\r
        喜马拉雅: new Vector3(86, 28, 1e4),\r
        北京: new Vector3(116.4, 39.45, 2e3),\r
        上海: new Vector3(121.47, 31, 2e3),\r
        重庆: new Vector3(106.54, 29, 3e3),\r
        广州: new Vector3(113.27, 23, 2e3),\r
        西安: new Vector3(108.95, 34, 2e3),\r
        香港: new Vector3(114.07, 22.3, 2e3),\r
        富士山: new Vector3(138.73, 35, 4e3),\r
    };\r
\r
    // 场景容器\r
    const viewerRef = ref<HTMLDivElement>();\r
\r
    // 飞行高度\r
    const flyHeight = ref<number>(0);\r
\r
    // 初始化场景、地图\r
    const { viewer, map, goto, startGeo } = init(locations["喜马拉雅"]);\r
\r
    // 添加性能指示器\r
    const statsRef = ref<HTMLElement>();\r
    const stats = useStats(statsRef);\r
    const onViewerUpdate = () => stats.update();\r
\r
    // 自动前进\r
    const autoForward = ref<boolean>(viewer.controls.autoForward);\r
    watch(autoForward, (val) => (viewer.controls.autoForward = val));\r
\r
    // 鼠标控制\r
    const dragToLook = ref<boolean>(!viewer.controls.dragToLook);\r
    watch(dragToLook, (val) => (viewer.controls.dragToLook = !val));\r
\r
    // 加载音效\r
    const audio = new Audio("../../sounds/plane.mp3");\r
    audio.loop = true;\r
    // 音效控制\r
    const sound = ref(false);\r
    watch(sound, (val) => {\r
        val ? audio.play() : audio.pause();\r
    });\r
\r
    // 撞地效果\r
    const hitGround = (model: Group) => {\r
        model.rotateOnAxis(new Vector3(0, 1, 0), 0.2);\r
        viewer.dirLight.intensity = Math.random() * 4;\r
        viewer.controls.enabled = false;\r
        setTimeout(() => {\r
            if (!viewer.controls.enabled) {\r
                viewer.controls.enabled = true;\r
                viewer.dirLight.intensity = 1;\r
                goto(startGeo);\r
            }\r
        }, 1000);\r
    };\r
\r
    onMounted(async () => {\r
        if (!viewerRef.value) return;\r
\r
        // 场景添加进容器\r
        viewer.addTo(viewerRef.value);\r
\r
        // 初始化飞行模型\r
        const model = await initFly(viewer, map, (height) => {\r
            // 飞行高度\r
            flyHeight.value = height;\r
            // 撞地\r
            if (height < -50) {\r
                hitGround(model);\r
            }\r
        });\r
\r
        viewer.scene.add(model);\r
\r
        // 更新性能指示器\r
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
    <div class="map-container">\r
        <div ref="viewerRef" class="map"></div>\r
        <div id="help"><b>按任意键开始</b>，<b>WASD</b> 移动，<b>R|F</b> 升降，<b>Q|E</b> 翻滚，<b>方向键</b> 转向</div>\r
        <div class="options" tabindex="-1">\r
            <button class="button" tabindex="-1" v-for="(loc, name) in locations" :key="name" @click="goto(loc)">\r
                {{ name }}\r
            </button>\r
\r
            <br />\r
            <label for="autoForward"\r
                >自动前进<input\r
                    type="checkbox"\r
                    id="autoForward"\r
                    @change="autoForward = !autoForward"\r
                    :checked="autoForward"\r
            /></label>\r
            <label for="dragToLook"\r
                >鼠标跟随<input\r
                    type="checkbox"\r
                    id="dragToLook"\r
                    @change="dragToLook = !dragToLook"\r
                    :checked="dragToLook"\r
            /></label>\r
            <label class="sound" for="sound"\r
                >飞机音效<input type="checkbox" id="sound" @change="sound = !sound" :checked="sound"\r
            /></label>\r
        </div>\r
        <div class="mapState">\r
            <div>飞行高度: {{ flyHeight.toFixed(0) }} m</div>\r
        </div>\r
        <div class="stats" ref="statsRef"></div>\r
    </div>\r
</template>\r
\r
<style scoped>\r
    .map-container {\r
        position: relative;\r
        width: 100%;\r
        height: 100%;\r
        display: flex;\r
        align-items: center;\r
        color: #ffffff;\r
        height: 600px;\r
        text-shadow: 0 0 2px black;\r
    }\r
    .map {\r
        width: 100%;\r
        height: 100%;\r
    }\r
\r
    .mapState {\r
        position: absolute;\r
        right: 20px;\r
        top: 20px;\r
    }\r
    #help {\r
        position: absolute;\r
        left: 30px;\r
        top: 20px;\r
    }\r
    .stats {\r
        position: absolute;\r
        bottom: 20px;\r
        left: 20px;\r
    }\r
    .options {\r
        position: absolute;\r
        right: 20px;\r
        bottom: 20px;\r
        display: flex;\r
        flex-direction: column;\r
    }\r
\r
    .button {\r
        background-color: #333;\r
        border: 1px solid gray;\r
        border-radius: 5px;\r
        padding: 0 5px;\r
        box-shadow: 0 0 5px black;\r
        margin-bottom: 5px;\r
    }\r
\r
    .button:hover {\r
        background-color: #222;\r
    }\r
\r
    .button:active {\r
        color: #888;\r
    }\r
</style>\r
`,B=JSON.parse('{"title":"2. 第三人称飞行","description":"","frontmatter":{},"headers":[],"relativePath":"4.application/02.flyControls/index.md","filePath":"4.application/02.flyControls/index.md","lastUpdated":1761902788000}'),D={name:"4.application/02.flyControls/index.md"},_=Object.assign(D,{setup(C){const e=h(!0),a=k();return o(async()=>{a.value=(await d(async()=>{const{default:l}=await import("./chunks/FlyControls.DNoHV4sQ.js");return{default:l}},__vite__mapDeps([0,1,2,3,4,5,6]))).default}),(l,s)=>{const p=c("ClientOnly");return y(),E("div",null,[s[1]||(s[1]=t("h1",{id:"_2-第三人称飞行",tabindex:"-1"},[u("2. 第三人称飞行 "),t("a",{class:"header-anchor",href:"#_2-第三人称飞行","aria-label":'Permalink to "2. 第三人称飞行"'},"​")],-1)),g(i(n(v),null,null,512),[[b,e.value]]),i(p,null,{default:r(()=>[i(n(A),{title:"vue演示",description:"按任意键开始，WASD 键控制水平移动，RF 键控制升降，上下左右键控制转向，或用鼠标引导飞行方向",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{e.value=!1}),vueCode:n(f)},m({_:2},[a.value?{name:"vue",fn:r(()=>[i(n(a))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[2]||(s[2]=F("",7))])}}});export{B as __pageData,_ as default};
