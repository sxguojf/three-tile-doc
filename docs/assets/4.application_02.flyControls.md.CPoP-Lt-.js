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
`,_=JSON.parse('{"title":"第三人称飞行","description":"","frontmatter":{},"headers":[],"relativePath":"4.application/02.flyControls.md","filePath":"4.application/02.flyControls.md","lastUpdated":1761368239000}'),f={name:"4.application/02.flyControls.md"},x=Object.assign(f,{setup(v){const l=r(!0),n=k();return d(async()=>{n.value=(await o(async()=>{const{default:e}=await import("./chunks/02.axFhEehq.js");return{default:e}},__vite__mapDeps([0,1,2,3,4]))).default}),(e,s)=>{const h=E("ClientOnly");return g(),y("div",null,[s[1]||(s[1]=t("h1",{id:"第三人称飞行",tabindex:"-1"},[u("第三人称飞行 "),t("a",{class:"header-anchor",href:"#第三人称飞行","aria-label":'Permalink to "第三人称飞行"'},"​")],-1)),c(i(a(A),null,null,512),[[m,l.value]]),i(h,null,{default:p(()=>[i(a(D),{title:"vue演示",description:"鼠标单击开始向前飞行，用键盘或鼠标引导飞行方向",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{l.value=!1}),vueCode:a(C)},b({_:2},[n.value?{name:"vue",fn:p(()=>[i(a(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[2]||(s[2]=F(`<p><code>threejs</code> 提供了 FlyControls 控制器，但官方示例 ( <a href="https://threejs.org/examples/?q=fly#misc_controls_fly" target="_blank" rel="noreferrer">https://threejs.org/examples/?q=fly#misc_controls_fly</a> )写的太烂了， 完全看不懂他在干啥，感觉地球完全失控了。</p><p>其实 <code>FlyControls</code> 是一个非常好的控制器，能够真实模拟飞行场景，用鼠标引导飞行，像飞机一样翻滚，只是作者没有写出好的示例，未能体现出它的价值。</p><h2 id="_1-更换控制器" tabindex="-1">1. 更换控制器 <a class="header-anchor" href="#_1-更换控制器" aria-label="Permalink to &quot;1. 更换控制器&quot;">​</a></h2><p>第三人称飞行游戏，以第三人称视角渲染地图。</p><p>three-tile 的地图模型不依赖 camera、controls，所以可以任意更换控制器，跟上个示例第一人称射击一样，将控制器更换为 <code>FlyControls</code> ( <a href="https://threejs.org/docs/?q=fly#examples/zh/controls/FlyControls" target="_blank" rel="noreferrer">https://threejs.org/docs/?q=fly#examples/zh/controls/FlyControls</a>)</p><p>与&quot;第一人称射击&quot;类似，three-tile 对第三人称飞行场景进行了封装：<code>FLViewer</code>，使用<code>FLViewer</code>初始化场景即可。使用<code>FLViewer</code>场景，仅需数十行代码即可完成一个简单的第三人称飞行游戏。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>计划下个版本增加使用 FlyControls 控制器的 GLViewer （V0.11.4 已内置）。</p></div><h2 id="_2-飞行" tabindex="-1">2. 飞行 <a class="header-anchor" href="#_2-飞行" aria-label="Permalink to &quot;2. 飞行&quot;">​</a></h2><p>加载一个模型，如小鸟、飞机，动画循环中根据相机的位置和朝向，控制模型的位置和朝向。</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 初始化飞行模型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> viewer</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 场景查看器</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> map</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 地图</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> onFly</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 飞行回调</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> onCrash</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 碰撞回调</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 飞行模型</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> initFly</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">viewer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FLViewer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">map</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TileMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onFly</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">height</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onCrash</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">height</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> loader</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLTFLoader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> gltf</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> loader.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">loadAsync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../model/acrobaticPlane_variants.glb&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gltf.scene;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mixer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AnimationMixer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(model);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  mixer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clipAction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(gltf.animations[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">play</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  viewer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;update&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">evt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    viewer.camera.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">updateMatrixWorld</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 模型固定在摄像机前面</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    model.position.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    model.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">applyMatrix4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(viewer.camera.matrixWorld);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 地面高度</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> groundHeight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLocalInfoFromWorld</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(model.position)?.point.y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 飞行高度</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> flyHeight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> model.position.y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> groundHeight;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 飞行高度&lt;0m撞死，否则动画飞行</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (flyHeight </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      viewer.controls.movementSpeed </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      onCrash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(flyHeight);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> target</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Vector3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">applyMatrix4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(viewer.camera.matrixWorld);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      model.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lookAt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(target);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      viewer.controls.movementSpeed </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      mixer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(evt.delta);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      onFly</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(flyHeight);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> model;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div>`,10))])}}});export{_ as __pageData,x as default};
