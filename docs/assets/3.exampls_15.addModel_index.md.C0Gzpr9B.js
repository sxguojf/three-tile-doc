import{p as t,C as l,c as p,o as h,j as e,a4 as o,G as n,a2 as d,a as k,a5 as c,k as i,w as E}from"./chunks/framework.BQo5SrHh.js";import{R as g,k as m}from"./chunks/index.UKPBqX0I.js";const y=`<!DOCTYPE html>\r
<html lang="zh-cn">\r
    <head>\r
        <meta charset="utf-8" />\r
        <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />\r
        <title>three-tile最小化应用</title>\r
    </head>\r
    <style>\r
        html,\r
        body {\r
            color: white;\r
            background-color: #333;\r
            height: 100%;\r
            min-height: 600px;\r
            width: 100%;\r
            padding: 0;\r
            margin: 0;\r
            display: flex;\r
            overflow: hidden;\r
            flex-direction: column;\r
            text-align: center;\r
        }\r
        #map {\r
            height: 100%;\r
            width: 100%;\r
        }\r
\r
        #loading {\r
            position: absolute;\r
            bottom: 0px;\r
            left: 20px;\r
        }\r
\r
        #compass-container {\r
            position: absolute;\r
            height: 75px;\r
            width: 75px;\r
            left: 30px;\r
            bottom: 50px;\r
        }\r
        .autoRotate {\r
            position: absolute;\r
            right: 30px;\r
            top: 30px;\r
            z-index: 1000;\r
        }\r
    </style>\r
\r
    <body>\r
        <script type="importmap">\r
            {\r
                "imports": {\r
                    "three": "https://unpkg.com/three@0.171.0/build/three.module.js",\r
                    "three-tile": "https://unpkg.com/three-tile@0.11.10/dist",\r
                    "three-tile/plugin": "https://unpkg.com/three-tile@0.11.10/dist/plugin",\r
                    "three/addons/": "https://unpkg.com/three@0.171.0/examples/jsm/"\r
                }\r
            }\r
        <\/script>\r
\r
        <script type="module">\r
            import * as THREE from "three";\r
            import * as tt from "three-tile";\r
            import * as plugin from "three-tile/plugin";\r
            import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";\r
            import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";\r
\r
            console.log(\`three-tile v\${tt.version} start!\`);\r
\r
            // 创建地图\r
            const map = tt.TileMap.create({\r
                // 影像数据源\r
                imgSource: new plugin.ArcGisSource(),\r
                // 地形数据源\r
                demSource: new plugin.ArcGisDemSource(),\r
                lon0: 90,\r
                minLevel: 8,\r
            });\r
            // 地图旋转到xz平面\r
            map.rotateX(-Math.PI / 2);\r
\r
            // 初始化场景\r
            const viewer = new plugin.GLViewer("#map");\r
            viewer.scene.background = 0;\r
\r
            // 地图添加到场景\r
            viewer.scene.add(map);\r
\r
            // viewer.controls.mouseButtons = {\r
            //     LEFT: THREE.MOUSE.ROTATE,\r
            //     MIDDLE: THREE.MOUSE.DOLLY,\r
            //     RIGHT: THREE.MOUSE.PAN,\r
            // };\r
            // viewer.controls.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN };\r
            viewer.controlsMode = "ORBIT";\r
            //==============================================================\r
            // 显示地图加载进度\r
            function showLoading(map, id) {\r
                const el = document.querySelector("#loading");\r
                if (el) {\r
                    map.addEventListener("loading-start", (evt) => {\r
                        el.innerHTML = "Started: " + evt.itemsLoaded + " of " + evt.itemsTotal + " files.";\r
                    });\r
                    map.addEventListener("loading-progress", (evt) => {\r
                        el.innerHTML = "Loading: " + evt.itemsLoaded + " of " + evt.itemsTotal + " files.";\r
                    });\r
                    map.addEventListener("loading-complete", () => {\r
                        el.innerHTML = "Loading complete!";\r
                    });\r
                    map.addEventListener("loading-error", (url) => {\r
                        el.innerHTML = "There was an error loading " + url;\r
                    });\r
                }\r
            }\r
            showLoading(map);\r
\r
            //==============================================================\r
            // 地图中心经纬度高度\r
            const centerGeo = new THREE.Vector3(108.9507, 34.1915, 444);\r
            // 摄像机经纬度高度\r
            const cameraGeo = new THREE.Vector3(centerGeo.x - 0.006, centerGeo.y - 0.006, 800);\r
            // 地图中心经纬度高度（m）转为世界坐标\r
            const centerPosition = map.geo2world(centerGeo);\r
            // 摄像机经纬度高度（m）转为世界坐标\r
            const cameraPosition = map.geo2world(cameraGeo);\r
            // 摄像机飞到指定位置\r
            viewer.flyTo(centerPosition, cameraPosition, false);\r
\r
            //==============================================================\r
            // 添加罗盘\r
            const compass = plugin.createCompass(viewer.controls);\r
            const compassContainer = document.querySelector("#compass-container");\r
            compassContainer && compassContainer.appendChild(compass.dom);\r
\r
            //==============================================================\r
            //添加蓝天白云\r
            const skybox = new THREE.CubeTextureLoader()\r
                .setPath("../../skybox/")\r
                .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);\r
            viewer.scene.background = skybox;\r
            //==============================================================\r
\r
            // 模型底边高度\r
            let modelMiny = 0;\r
\r
            function AddGltf(viewer, map) {\r
                // 开启阴影\r
                viewer.renderer.shadowMap.enabled = true;\r
                // 地面接受阴影\r
                map.receiveShadow = true;\r
\r
                // 配置模型加载器\r
                const dracoLoader = new DRACOLoader();\r
                dracoLoader.setDecoderPath("../../lib/draco/gltf/");\r
                const loader = new GLTFLoader();\r
                loader.setDRACOLoader(dracoLoader);\r
                let model;\r
\r
                // 加载模型\r
                loader.load("../../model/LittlestTokyo.glb", function (gltf) {\r
                    console.log(gltf);\r
\r
                    model = gltf.scene;\r
                    // 开启模型阴影\r
                    model.traverse((child) => {\r
                        child.castShadow = true;\r
                        child.receiveShadow = true;\r
                    });\r
                    // 计算模型位置\r
                    modelMiny = new THREE.Box3().setFromObject(model).min.y;\r
                    model.position.set(centerPosition.x, centerPosition.y - modelMiny, centerPosition.z);\r
\r
                    // 模型动画\r
                    const mixer = new THREE.AnimationMixer(model);\r
                    mixer.clipAction(gltf.animations[0]).play();\r
                    map.addEventListener("update", (evt) => mixer.update(evt.delta));\r
                    viewer.scene.add(model);\r
\r
                    // 添加一个聚光灯\r
                    const shadowLight = new THREE.SpotLight(0xffffff, 3, 4e3, Math.PI / 6, 0.2, 0);\r
                    shadowLight.position.set(centerPosition.x, 2e3, centerPosition.z + 1000);\r
                    shadowLight.target = model;\r
                    shadowLight.castShadow = true;\r
                    shadowLight.shadow.camera.near = 1e3;\r
                    shadowLight.shadow.camera.far = 6e3;\r
                    viewer.scene.add(shadowLight);\r
\r
                    // 添加一个聚光灯相机辅助模型\r
                    const cameraHelper = new THREE.CameraHelper(shadowLight.shadow.camera);\r
                    viewer.scene.add(cameraHelper);\r
\r
                    // // 添加一个聚光灯辅助模型\r
                    const lightHelper = new THREE.SpotLightHelper(shadowLight);\r
                    viewer.scene.add(lightHelper);\r
                    lightHelper.updateMatrixWorld();\r
\r
                    // 瓦片下载完成后更新模型位置\r
                    map.addEventListener("loading-complete", () => {\r
                        const info = map.getLocalInfoFromGeo(centerGeo);\r
                        if (info) {\r
                            // 调整模型位置\r
                            model.position.setY(info.point.y - modelMiny);\r
                        }\r
                    });\r
                });\r
            }\r
            AddGltf(viewer, map);\r
\r
            window.rotate = (evt) => {\r
                viewer.controls.autoRotate = evt.checked;\r
            };\r
        <\/script>\r
\r
        <div id="map"></div>\r
        <div id="loading">-</div>\r
        <!-- 罗盘 -->\r
        <div id="compass-container"></div>\r
        <div id="loading">-</div>\r
        <label class="autoRotate" for="autoRotate"\r
            >自动旋转<input type="checkbox" id="autoRotate" onchange="rotate(this)"\r
        /></label>\r
    </body>\r
</html>\r
`,v=JSON.parse('{"title":"15. 添加 GLTF 模型","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/15.addModel/index.md","filePath":"3.exampls/15.addModel/index.md","lastUpdated":1761902788000}'),u={name:"3.exampls/15.addModel/index.md"},f=Object.assign(u,{setup(F){const a=t(!0);return(b,s)=>{const r=l("ClientOnly");return h(),p("div",null,[s[1]||(s[1]=e("h1",{id:"_15-添加-gltf-模型",tabindex:"-1"},[k("15. 添加 GLTF 模型 "),e("a",{class:"header-anchor",href:"#_15-添加-gltf-模型","aria-label":'Permalink to "15. 添加 GLTF 模型"'},"​")],-1)),o(n(i(g),null,null,512),[[c,a.value]]),n(r,null,{default:E(()=>[n(i(m),{title:"example",description:"添加GLTF模型，并添加灯光和阴影",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{a.value=!1}),htmlCode:i(y)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=d(`<p>本节与 <code>9. 添加简单模型</code> 方法完全一样，只不过模型换成了 GLTF 模型。</p><h2 id="_1-加载-gltf-模型" tabindex="-1">1. 加载 gltf 模型 <a class="header-anchor" href="#_1-加载-gltf-模型" aria-label="Permalink to &quot;1. 加载 gltf 模型&quot;">​</a></h2><p>使用 GLTFLoader 加载模型，模型加载后，将模型放置在指定经纬度高度，与 <code>threejs</code> 加载模型方法无异。</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 地图中心经纬度高度</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> centerGeo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Vector3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">108.9507</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">34.1915</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 地图中心经纬度高度（m）转为世界坐标</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> centerPosition</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">geo2world</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(centerGeo);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 模型底面高度</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> modelMiny </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 配置模型加载器</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dracoLoader</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DRACOLoader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dracoLoader.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setDecoderPath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../lib/draco/gltf/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> loader</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GLTFLoader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">loader.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setDRACOLoader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dracoLoader);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> model;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 加载模型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">loader.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../model/LittlestTokyo.glb&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">gltf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    model </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gltf.scene;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 模型动画</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mixer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AnimationMixer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(model);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mixer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clipAction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(gltf.animations[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">play</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;update&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">evt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mixer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(evt.delta));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 计算模型位置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    modelMiny </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Box3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setFromObject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(model).min.y;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    model.position.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(centerPosition.x, centerPosition.y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> modelMiny, centerPosition.z);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    viewer.scene.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(model);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="_2-添加灯光" tabindex="-1">2. 添加灯光 <a class="header-anchor" href="#_2-添加灯光" aria-label="Permalink to &quot;2. 添加灯光&quot;">​</a></h2><p>正常情况，gltf 模型已经可以显示在地图上了，但为了取得更好效果，最好是添加灯光和阴影</p><p>添加灯光和阴影，见第 11 节。</p><h2 id="_3-将模型贴地" tabindex="-1">3. 将模型贴地 <a class="header-anchor" href="#_3-将模型贴地" aria-label="Permalink to &quot;3. 将模型贴地&quot;">​</a></h2><p>由于地图不同缩放级别时地形几何误差不同，地面的高度不同，所以在瓦片加载完成后，需要重新计算模型高度。</p><p>见第 9 节</p>`,10))])}}});export{v as __pageData,f as default};
