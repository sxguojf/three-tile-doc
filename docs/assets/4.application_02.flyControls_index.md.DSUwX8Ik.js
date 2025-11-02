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
`,B=JSON.parse('{"title":"2. 第三人称飞行","description":"","frontmatter":{},"headers":[],"relativePath":"4.application/02.flyControls/index.md","filePath":"4.application/02.flyControls/index.md","lastUpdated":1761902788000}'),D={name:"4.application/02.flyControls/index.md"},_=Object.assign(D,{setup(C){const e=h(!0),a=k();return o(async()=>{a.value=(await d(async()=>{const{default:l}=await import("./chunks/FlyControls.DNoHV4sQ.js");return{default:l}},__vite__mapDeps([0,1,2,3,4,5,6]))).default}),(l,s)=>{const p=c("ClientOnly");return y(),E("div",null,[s[1]||(s[1]=t("h1",{id:"_2-第三人称飞行",tabindex:"-1"},[u("2. 第三人称飞行 "),t("a",{class:"header-anchor",href:"#_2-第三人称飞行","aria-label":'Permalink to "2. 第三人称飞行"'},"​")],-1)),g(i(n(v),null,null,512),[[b,e.value]]),i(p,null,{default:r(()=>[i(n(A),{title:"vue演示",description:"按任意键开始，WASD 键控制水平移动，RF 键控制升降，上下左右键控制转向，或用鼠标引导飞行方向",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{e.value=!1}),vueCode:n(f)},m({_:2},[a.value?{name:"vue",fn:r(()=>[i(n(a))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[2]||(s[2]=F(`<p><code>threejs</code> 提供了 <code>FlyControls</code> 控制器，能够真实模拟飞行场景，但官方示例 ( <a href="https://threejs.org/examples/?q=fly#misc_controls_fly" target="_blank" rel="noreferrer">https://threejs.org/examples/?q=fly#misc_controls_fly</a> ) 根本看不懂控制器在干啥，感觉完全失控了。其实 <code>FlyControls</code> 是一个非常好的控制器，可用于飞行游戏，用键盘或鼠标控制飞机，像飞机一样翻滚，只是作者没有写出好的示例，未能体现出它的价值。</p><p>将场景控制器更换为 <code>FlyControls</code>，添加一个飞机模型，仅需数十行代码即可完成一个第三人称飞行游戏。</p><h2 id="_1-更换控制器" tabindex="-1">1. 更换控制器 <a class="header-anchor" href="#_1-更换控制器" aria-label="Permalink to &quot;1. 更换控制器&quot;">​</a></h2><p><code>three-tile</code> 的地图模型不依赖特定 <code>controls</code>，所以可以更换任意控制器，跟上个示例第一人称射击一样，将控制器更换为 <code>FlyControls</code> ( <a href="https://threejs.org/docs/?q=fly#examples/zh/controls/FlyControls" target="_blank" rel="noreferrer">https://threejs.org/docs/?q=fly#examples/zh/controls/FlyControls</a>)</p><h2 id="_2-飞行" tabindex="-1">2. 飞行 <a class="header-anchor" href="#_2-飞行" aria-label="Permalink to &quot;2. 飞行&quot;">​</a></h2><p>加载一个模型，如小鸟、飞机，固定在摄像机前面，<code>FlyControls</code> 会自动完成飞行控制功能。</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 初始化飞行模型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> viewer</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 场景查看器</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> map</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 地图</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> onfly</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 飞行回调</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 飞行模型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> initFly</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">viewer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FLViewer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">map</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TileMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onfly</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">height</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">evt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> loader</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLTFLoader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> gltf</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> loader.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">loadAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../model/acrobaticPlane_variants.glb&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gltf.scene;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    model.scale.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setScalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mixer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AnimationMixer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(model);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mixer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clipAction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(gltf.animations[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">play</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    viewer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;update&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">evt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 模型固定在摄像机前面</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        model.position.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        viewer.camera.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">updateMatrixWorld</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        model.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">applyMatrix4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(viewer.camera.matrixWorld);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 地面高度</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> groundHeight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLocalInfoFromWorld</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(model.position)?.point.y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 飞行高度</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> flyHeight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> model.position.y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> groundHeight;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (flyHeight </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // 调整机头方向</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> target</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Vector3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">applyMatrix4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(viewer.camera.matrixWorld);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            model.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lookAt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(target);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            mixer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(evt.delta);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 飞行回调</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        onfly </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onfly</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(flyHeight, evt);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> model;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div>`,7))])}}});export{B as __pageData,_ as default};
