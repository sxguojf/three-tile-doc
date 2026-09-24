const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/Walk.SmIvZD6h.js","assets/chunks/framework.xbTv8SNN.js","assets/chunks/index.D1y5qgwe.js","assets/chunks/style.pzVcPuTj.js","assets/chunks/useState.EiXjSKHF.js","assets/chunks/useSky.CzLXMfkB.js","assets/chunks/useFog.I61zHw26.js","assets/chunks/GLTFLoader.DVBwtb6Q.js","assets/chunks/BufferGeometryUtils.DcNFALRP.js"])))=>i.map(i=>d[i]);
import{p as d,D as c,v as p,V as m,C as u,c as v,o as f,j as i,a4 as w,G as n,a as h,a5 as x,k as o,w as l,a6 as g}from"./chunks/framework.xbTv8SNN.js";/* empty css                     */import{VitepressDemoPlaceholder as b,VitepressDemoBox as _}from"vitepress-demo-plugin";const y=`<template>
    <div class="demo-container">
        <div ref="viewerRef" class="viewer"></div>
        <div id="help"><b>鼠标左键|方向键|WASD移动, shift加速, 鼠标右键旋转地图</b></div>
        <div class="compass" ref="compassRef"></div>
        <div class="state">
            <div class="location">
                <span>经度：{{ location.x.toFixed(6) }}° </span>
                <span>纬度：{{ location.y.toFixed(6) }}° </span>
                <span>海拔：{{ location.z.toFixed(1) }}m </span>
            </div>
            <div class="loading">{{ loading }}</div>
        </div>
        <div class="model-state">
            <span>经度:{{ modelState.x.toFixed(6) }}°</span>
            <span>纬度:{{ modelState.y.toFixed(6) }}°</span>
            <span>高度:{{ modelState.z.toFixed(1) }}m</span>
        </div>
        <div class="options">
            <label for="fogFactor"
                >雾浓度 <input type="range" id="fogFactor" min="0" max="2" step="0.1" v-model="fogFactor" />{{
                    fogFactor
                }}</label
            >
            <label for="fogColor">雾颜色 <input type="color" id="fogColor" v-model="fogColor" /></label>
        </div>
        <div class="stats" ref="statsRef"></div>
    </div>
</template>

<style scoped>
    .viewer {
        height: 100%;
    }
    #help {
        position: absolute;
        left: 30px;
        top: 20px;
    }
    .stats {
        position: absolute;
        bottom: 140px;
        left: 30px;
    }
    .model-state {
        position: absolute;
        right: 20px;
        top: 30px;
        display: flex;
        flex-direction: column;
        width: 140px;
        background-color: #0005;
        padding: 5px 10px;
        border-radius: 5px;
        box-shadow: 0 0 5px #000;
    }
    .options {
        position: absolute;
        right: 20px;
        bottom: 40px;
        width: 160px;
        display: flex;
        flex-direction: column;
        background-color: #0005;
        padding: 5px 10px;
        border-radius: 5px;
        box-shadow: 0 0 5px #000;
    }
    .options > label > input {
        vertical-align: middle;
        width: 65px;
    }
</style>

<script setup lang="ts">
    import { Vector2, Vector3 } from "three";
    import { onMounted, onUnmounted, ref } from "vue";
    import { useCompass, useLoading, useLocation, useShaderSky, useStats } from "../hooks";
    import { useFog } from "../hooks/useFog";
    import "../style.css";
    import { init, type WalkInitResult } from "./loadModel";
    import { useThreeTile } from "./useThreeTile";

    // 场景容器
    const viewerRef = ref<HTMLElement | undefined>(undefined);

    // 初始化场景和地图
    const { viewer, map } = useThreeTile(viewerRef);

    // 鼠标位置信息
    const location = useLocation(map, viewer);

    // 地图加载状态
    const loading = useLoading(map);

    // 模型位置
    const modelState = ref(new Vector3());

    // 屏幕中心点（查询地图信息用，避免每帧分配新对象）
    const screenCenter = new Vector2();

    // 添加天空
    useShaderSky(viewer.scene);

    // 添加雾
    const { fogFactor, fogColor } = useFog(viewer);

    // 指南针
    const compassRef = ref<HTMLDivElement>();
    useCompass(viewer.controls, compassRef);

    // 添加性能指示器
    const statsRef = ref<HTMLElement>();
    const stats = useStats(statsRef);

    // 每帧回调
    const onViewerUpdate = () => {
        stats.update();
        const loc = map.getLocalInfoFromScreen(viewer.camera, screenCenter);
        if (loc) {
            modelState.value.copy(loc.location);
        }
    };

    const goto = (centerGeo: Vector3, cameraGeo: Vector3) => {
        viewer.controls.target.copy(map.geo2world(centerGeo));
        viewer.camera.position.copy(map.geo2world(cameraGeo));
    };

    let handle: WalkInitResult | undefined;

    onMounted(async () => {
        const centerGeo = new Vector3(94.39977, 36.0022, 4085.5);
        const cameraGeo = new Vector3(94.4003, 36.0043, 4185);
        goto(centerGeo, cameraGeo);

        viewer.addEventListener("update", onViewerUpdate);

        handle = await init("../../model/Soldier.glb", viewer, map);
        handle.model.position.copy(viewer.controls.target);
    });

    onUnmounted(() => {
        viewer.removeEventListener("update", onViewerUpdate);
        handle?.dispose();
        viewer.dispose();
    });
<\/script>
`,C=JSON.parse('{"title":"3. 第三人称地面行走","description":"","frontmatter":{},"headers":[],"relativePath":"4.application/03.walk/index.md","filePath":"4.application/03.walk/index.md","lastUpdated":1762073091000}'),k={name:"4.application/03.walk/index.md"},T=Object.assign(k,{setup(F){const a=d(!0),t=c();return p(async()=>{t.value=(await m(async()=>{const{default:s}=await import("./chunks/Walk.SmIvZD6h.js");return{default:s}},__vite__mapDeps([0,1,2,3,4,5,6,7,8]))).default}),(s,e)=>{const r=u("ClientOnly");return f(),v("div",null,[e[1]||(e[1]=i("h1",{id:"_3-第三人称地面行走",tabindex:"-1"},[h("3. 第三人称地面行走 "),i("a",{class:"header-anchor",href:"#_3-第三人称地面行走","aria-label":'Permalink to "3. 第三人称地面行走"'},"​")],-1)),w(n(o(b),null,null,512),[[x,a.value]]),n(r,null,{default:l(()=>[n(o(_),{title:"vue演示",description:"移植 threejs示例：https://threejs.org/examples/?q=wal#webgl_animation_walk， 添加地图",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{a.value=!1}),vueCode:o(y)},g({_:2},[t.value?{name:"vue",fn:l(()=>[n(o(t))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{C as __pageData,T as default};
