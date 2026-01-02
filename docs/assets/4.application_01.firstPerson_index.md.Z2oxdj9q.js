const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/FirstPerson.BaeHvJJm.js","assets/chunks/index.CqI7X3xo.js","assets/chunks/tween.module.BLfFZSQj.js","assets/chunks/useState.EiXjSKHF.js","assets/chunks/framework.xbTv8SNN.js","assets/chunks/useSky.hmx3ZDdW.js"])))=>i.map(i=>d[i]);
import{p as h,D as k,v as d,V as E,C as o,c,o as g,j as p,a4 as y,G as i,a2 as F,a as u,a5 as b,k as a,w as t,a6 as m}from"./chunks/framework.xbTv8SNN.js";import{R as C,k as A}from"./chunks/index.T3-yMMRo.js";const D=`<script setup lang="ts">\r
    import { Vector2, Vector3 } from "three";\r
    import { onMounted, onUnmounted, reactive, ref, watch } from "vue";\r
    import { fireInit, init } from "./init";\r
    import { useCloudSky, useStats } from "../hooks";\r
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
    const audio = new Audio("../../sounds/boom.mp3");\r
    const sound = ref(true);\r
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
        <img class="focus" src="/images/focus.png" alt="" width="48px" height="48px" />\r
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
`,x=JSON.parse('{"title":"1. 第一人称射击","description":"","frontmatter":{},"headers":[],"relativePath":"4.application/01.firstPerson/index.md","filePath":"4.application/01.firstPerson/index.md","lastUpdated":1762073091000}'),f={name:"4.application/01.firstPerson/index.md"},_=Object.assign(f,{setup(v){const l=h(!0),n=k();return d(async()=>{n.value=(await E(async()=>{const{default:e}=await import("./chunks/FirstPerson.BaeHvJJm.js");return{default:e}},__vite__mapDeps([0,1,2,3,4,5]))).default}),(e,s)=>{const r=o("ClientOnly");return g(),c("div",null,[s[1]||(s[1]=p("h1",{id:"_1-第一人称射击",tabindex:"-1"},[u("1. 第一人称射击 "),p("a",{class:"header-anchor",href:"#_1-第一人称射击","aria-label":'Permalink to "1. 第一人称射击"'},"​")],-1)),y(i(a(C),null,null,512),[[b,l.value]]),i(r,null,{default:t(()=>[i(a(A),{title:"vue演示",description:"点击地图开始射击",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{l.value=!1}),vueCode:a(D)},m({_:2},[n.value?{name:"vue",fn:t(()=>[i(a(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[2]||(s[2]=F(`<p>游戏开发对地图框架的性能是一种考验，也是最好的测试。游戏具有极高的实时性，任何卡顿在游戏中将会暴露无遗。</p><ul><li><p><code>three-tile</code> 的地图支持全球海量地形，所以它不能像常规游戏那样在启动时进行数据预加载和预处理，所有地图数据都是实时加载的。在鼠标的移动中，地图视角会以极快速度切换，大量地图瓦片实时下载、解析、渲染，十分考验框架性能，如果游戏能流畅地在地图中运行，那框架性能就足以应付绝大多数应用了。</p></li><li><p>编写 <code>three-tile</code> 最初的目标其实是开发游戏，地图只能算是 <code>three-tile</code> 的一个扩展，但目前地图的应用场景远多于游戏，所以现在框架的重点已经偏向于地图开发了。</p></li></ul><h2 id="_1-更换控制器" tabindex="-1">1. 更换控制器 <a class="header-anchor" href="#_1-更换控制器" aria-label="Permalink to &quot;1. 更换控制器&quot;">​</a></h2><p>第一人称 FPS 游戏以玩家视角渲染地图，模拟玩家看到的真实世界，与常规地图相比，仅是使用的控制器即不同。</p><p>为了方便用户使用，three-tile 对第一人称场景进行了封装：<code>PLViewer</code>，使用<code>PLViewer</code>初始化场景即可。</p><p><code>three-tile</code> 的地图不依赖 <code>camera</code>、<code>controls</code>，所以可以任意更换控制器，第一人称视角，只需要将控制器更换为 <code>threejs</code> 的 <code>PointerLockControls</code>：</p><p><a href="https://threejs.org/docs/?q=controls#examples/zh/controls/PointerLockControls" target="_blank" rel="noreferrer">https://threejs.org/docs/?q=controls#examples/zh/controls/PointerLockControls</a></p><p>修改 GLViewer 将控制器换成 PointerLockControls，可参考：</p><p><a href="https://threejs.org/examples/?q=controls#misc_controls_pointerlock" target="_blank" rel="noreferrer">https://threejs.org/examples/?q=controls#misc_controls_pointerlock</a></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>计划下个版本增加使用 PointerLockControls 控制器的 Viewer （V0.11.4 已内置）。</p></div><h2 id="_2-射击" tabindex="-1">2. 射击 <a class="header-anchor" href="#_2-射击" aria-label="Permalink to &quot;2. 射击&quot;">​</a></h2><p>使用 <code>PointerLockControls</code> 控制器，就能有一个第一人称视角的三维地图，只需要在鼠标单击时创建一个球飞出去就行了，不到 100 行代码。</p><p>监听地图容器的 click 事件，当鼠标单击地图时：</p><pre><code>1. 创建一个球体作为炮弹加入地图
2. 球的起点为摄像机坐标
3. 球的终点为屏幕中点（准星处）的地面坐标
4. 调用 Tween 动画，将球从起点动画移动到终点
</code></pre><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 第一人称射击初始化</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> viewer</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> map</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> onfire</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 点击开火回调</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fireInit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">viewer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PLViewer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">map</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TileMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onfire</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">camera</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">controls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">renderer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> viewer;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> bombGroup</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bombGroup);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 创建一个球</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ball</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Mesh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SphereGeometry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MeshPhongMaterial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            map: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TextureLoader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./test.jpg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            shininess: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            transparent: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    );</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 监听click</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    renderer.domElement.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;click&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">evt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">controls.isLocked) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            controls.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (evt.button </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            controls.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unlock</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        onfire</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // clone一个球</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> aBall</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ball.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        bombGroup.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(aBall);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 球起点坐标：从摄像机位置开始</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> startPosition</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">worldToLocal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(camera.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getWorldPosition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Vector3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        aBall.position.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">copy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(startPosition);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 取得视线与地面交点</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> crossPoint</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLocalInfoFromScreen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(camera, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Vector2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 球终点坐标：视线与地面有交点则取交点，无交点则取摄像机前方100km</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> endPostion</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> crossPoint</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            ?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">worldToLocal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(crossPoint.point)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            :</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">worldToLocal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(camera.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">localToWorld</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Vector3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 球飞行时间</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> delay</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 800</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 球直线飞行动画</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Tween</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(aBall.position).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">to</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(endPostion, delay).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">easing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Easing.Quadratic.Out).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 球减速下落动画(模拟重力作用)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Tween</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(aBall.position)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">to</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ z: endPostion.z }, delay)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">easing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(crossPoint </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Easing.Quadratic.In </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Easing.Quartic.Out)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onComplete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                // 动画完成延迟销毁球</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dispose</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    aBall.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeFromParent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    aBall.geometry.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dispose</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                    aBall.material.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dispose</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                };</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (crossPoint) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                    setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dispose, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> delay);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                    dispose</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br></div></div>`,15))])}}});export{x as __pageData,_ as default};
