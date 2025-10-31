import{p as r,C as l,c as h,o as p,a2 as a,a4 as d,G as i,a5 as k,k as e,w as c}from"./chunks/framework.BQo5SrHh.js";import{R as o,k as g}from"./chunks/index.UKPBqX0I.js";const E=`<!DOCTYPE html>\r
<html lang="zh-cn">\r
    <head>\r
        <meta charset="utf-8" />\r
        <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />\r
        <title>three-tile最小化应用</title>\r
    </head>\r
    <style>\r
        html,\r
        body {\r
            background-color: #333;\r
            height: 400px;\r
            width: 100%;\r
            padding: 0;\r
            margin: 0;\r
            display: flex;\r
            overflow: hidden;\r
        }\r
        #map {\r
            height: 100%;\r
            width: 100%;\r
        }\r
    </style>\r
\r
    <script type="importmap">\r
        {\r
            "imports": {\r
                "three": "https://unpkg.com/three@0.171.0/build/three.module.js",\r
                "three/addons/": "https://unpkg.com/three@0.171.0/examples/jsm/",\r
                "three-tile": "https://unpkg.com/three-tile@0.11.10/dist",\r
                "three-tile/plugin": "https://unpkg.com/three-tile@0.11.10/dist/plugin"\r
            }\r
        }\r
    <\/script>\r
\r
    <body>\r
        <div id="map"></div>\r
        <script type="module" lang="ts">\r
            import * as THREE from "three";\r
            import * as tt from "three-tile";\r
            import * as plugin from "three-tile/plugin";\r
            import { MapControls } from "three/addons/controls/MapControls.js";\r
\r
            console.log(\`three-tile v\${tt.version} start!\`);\r
\r
            // 创建场景\r
            const createViewer = (container) => {\r
                const width = container.clientWidth;\r
                const height = container.clientHeight;\r
\r
                // scene\r
                const scene = new THREE.Scene();\r
\r
                // renderer\r
                const renderer = new THREE.WebGLRenderer({\r
                    logarithmicDepthBuffer: true,\r
                });\r
                renderer.setSize(width, height);\r
\r
                // camera\r
                const camera = new THREE.PerspectiveCamera(60, width / height, 10, 4e7);\r
                camera.position.set(0, camera.far / 2, 0);\r
\r
                // ambient light\r
                const ambLight = new THREE.AmbientLight(0xffffff);\r
                scene.add(ambLight);\r
\r
                // directional light\r
                const dirLight = new THREE.DirectionalLight(0xffffff);\r
                dirLight.position.set(0, 5e6, 1e5);\r
                dirLight.target.position.set(0, 0, -5e6);\r
                scene.add(dirLight);\r
\r
                // controls\r
                const controls = new MapControls(camera, renderer.domElement);\r
                controls.maxDistance = 2e7;\r
                controls.minDistance = 10;\r
                controls.enableDamping = true;\r
                controls.zoomToCursor = true;\r
\r
                // add renderer to container\r
                container.appendChild(renderer.domElement);\r
\r
                return {\r
                    scene,\r
                    camera,\r
                    renderer,\r
                    controls,\r
                    ambLight,\r
                    dirLight,\r
                };\r
            };\r
\r
            // 创建地图\r
            const map = tt.TileMap.create({\r
                // 影像数据源\r
                imgSource: new plugin.ArcGisSource(),\r
                // 地形数据源\r
                demSource: new plugin.ArcGisDemSource(),\r
                lon0: 90,\r
            });\r
            // 地图旋转到xz平面\r
            map.rotateX(-Math.PI / 2);\r
\r
            // 初始化场景\r
            const viewer = createViewer(document.querySelector("#map"));\r
\r
            // 地图添加到场景\r
            viewer.scene.add(map);\r
\r
            // 动画循环\r
            viewer.renderer.setAnimationLoop(() => {\r
                viewer.controls.update();\r
                viewer.renderer.render(viewer.scene, viewer.camera);\r
            });\r
        <\/script>\r
    </body>\r
</html>\r
`,C=JSON.parse('{"title":"7. 三维场景","description":"","frontmatter":{},"headers":[],"relativePath":"2.base/07.sceneCreate/index.md","filePath":"2.base/07.sceneCreate/index.md","lastUpdated":1761902788000}'),y={name:"2.base/07.sceneCreate/index.md"},D=Object.assign(y,{setup(m){const n=r(!0);return(b,s)=>{const t=l("ClientOnly");return p(),h("div",null,[s[1]||(s[1]=a(`<h1 id="_7-三维场景" tabindex="-1">7. 三维场景 <a class="header-anchor" href="#_7-三维场景" aria-label="Permalink to &quot;7. 三维场景&quot;">​</a></h1><p>three-tile 基于 threejs 开发，但只提供了地图模型，并未接管 threejs 的三维场景创建，如 scene、renderer、camera、controls 等，三维场景需要用户自己创建，这样做最大程度保持了框架的灵活性，但也增加了应用开发复杂度。为了方便初学者使用，three-tile 的插件中提供了一个<code>GLVierwer</code>类用于快速创建三维场景。</p><h2 id="_1-内置三维场景类-glviewer" tabindex="-1">1. 内置三维场景类 GLViewer <a class="header-anchor" href="#_1-内置三维场景类-glviewer" aria-label="Permalink to &quot;1. 内置三维场景类 GLViewer&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:center;">属性/方法/事件</th><th style="text-align:center;">类型</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;"><code>scene</code></td><td style="text-align:center;"><code>Scene</code></td><td style="text-align:center;">threejs 场景对象</td></tr><tr><td style="text-align:center;"><code>renderer</code></td><td style="text-align:center;"><code>WebGLRenderer</code></td><td style="text-align:center;">threejs 渲染器对象</td></tr><tr><td style="text-align:center;"><code>camera</code></td><td style="text-align:center;"><code>PerspectiveCamera</code></td><td style="text-align:center;">threejs 相机对象</td></tr><tr><td style="text-align:center;"><code>controls</code></td><td style="text-align:center;"><code>MapControls</code></td><td style="text-align:center;">threejs 控制器对象</td></tr><tr><td style="text-align:center;"><code>ambLight</code></td><td style="text-align:center;"><code>AmbientLight</code></td><td style="text-align:center;">threejs 环境光对象</td></tr><tr><td style="text-align:center;"><code>dirLight</code></td><td style="text-align:center;"><code>DirectionalLight</code></td><td style="text-align:center;">threejs 直射光对象</td></tr><tr><td style="text-align:center;"><code>container</code></td><td style="text-align:center;"><code>HTMLElement</code></td><td style="text-align:center;">场景容器 ID 或 DOM 元素</td></tr><tr><td style="text-align:center;"><code>fogFactor</code> (get/set)</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">雾浓度因子</td></tr><tr><td style="text-align:center;"><code>width</code> (get)</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">场景 DOM 容器的宽度</td></tr><tr><td style="text-align:center;"><code>height</code> (get)</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">场景 DOM 的高度</td></tr><tr><td style="text-align:center;"><code>controlsMode</code></td><td style="text-align:center;"><code>&#39;MAP&#39; 或 &#39;ORBIT&#39;</code></td><td style="text-align:center;">控制器模式，默认 <code>MAP</code></td></tr><tr><td style="text-align:center;"><code>resize()</code></td><td style="text-align:center;"><code>public method</code></td><td style="text-align:center;">调整大小</td></tr><tr><td style="text-align:center;"><code>update</code></td><td style="text-align:center;"><code>event</code></td><td style="text-align:center;">场景更新事件，附带 <code>delta</code> 属性表示两帧时间间隔</td></tr></tbody></table><p>该类封装了 threejs 的常规初始化过程，提供 <code>Scene</code> 、<code>WebGLRenderer</code> 渲染器、<code>PerspectiveCamera</code> 相机和 <code>MapControls</code> 控制器、环境光、直射光等对象。</p><p>简单应用，可以直接使用<code>GLVierwer</code>类创建三维场景。<a href="https://github.com/sxguojf/three-tile/blob/master/packages/plugin/src/GLViewer/GLViewer.ts" target="_blank" rel="noreferrer">https://github.com/sxguojf/three-tile/blob/master/packages/plugin/src/GLViewer/GLViewer.ts</a></p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 初始化场景</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> viewer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> plugin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GLViewer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#map&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 地图添加到场景</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">viewer.scene.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(map);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_2-自定义三维场景" tabindex="-1">2. 自定义三维场景 <a class="header-anchor" href="#_2-自定义三维场景" aria-label="Permalink to &quot;2. 自定义三维场景&quot;">​</a></h2><p>内置<code>GLVierwer</code>类适合大多数应用场景，但如果你的应用较为复杂，最好是参考下面代码自己完成场景初始化，以便更灵活地控制，与普通 threejs 场景初始化基本一样：</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建场景</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createViewer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> width</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> container.clientWidth;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> height</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> container.clientHeight;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // scene</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> scene</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Scene</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // renderer</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> renderer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WebGLRenderer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        logarithmicDepthBuffer: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    renderer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setSize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(width, height);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // camera</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> camera</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PerspectiveCamera</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">60</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, width </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> height, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4e7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    camera.position.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, camera.far </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ambient light</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ambLight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AmbientLight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0xffffff</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    scene.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ambLight);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // directional light</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dirLight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DirectionalLight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0xffffff</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    dirLight.position.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5e6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1e5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    dirLight.target.position.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5e6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    scene.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dirLight);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // controls</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> controls</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MapControls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(camera, renderer.domElement);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    controls.maxDistance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2e7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    controls.minDistance </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    controls.enableDamping </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    controls.zoomToCursor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // add renderer to container</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    container.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(renderer.domElement);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        scene,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        camera,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        renderer,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        controls,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ambLight,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        dirLight,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div>`,10)),d(i(e(o),null,null,512),[[k,n.value]]),i(t,null,{default:c(()=>[i(e(g),{title:"最小化演示",description:"自定义场景",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{n.value=!1}),htmlCode:e(E)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=a('<h2 id="_3-自定义场景说明" tabindex="-1">3. 自定义场景说明： <a class="header-anchor" href="#_3-自定义场景说明" aria-label="Permalink to &quot;3. 自定义场景说明：&quot;">​</a></h2><p>上面自定义场景仅实现了最基本的功能，要取得更好的效果，需注意下面几个问题：</p><h3 id="_1-z-fighting-问题" tabindex="-1">1. z-fighting 问题 <a class="header-anchor" href="#_1-z-fighting-问题" aria-label="Permalink to &quot;1. z-fighting 问题&quot;">​</a></h3><p>由于地图的空间尺度极大，很容易出现 <code>z-fighting</code> 问题，即着色器已经无法分辨模型的深度值，导致地图上叠加的模型出现闪烁。造成 <code>z-fighting</code> 问题的原因主要是 <code>camera</code> 的 <code>near</code> 和 far 范围太大，超出了着色器的精度范围，所以要尽量将 <code>near</code> 和 <code>far</code> 范围设置在一个合理的范围内，特别是 <code>near</code> 不要设置太小。</p><blockquote><p>一般情况，使用对数深度 <code>logarithmicDepthBuffer</code> 可以解决 <code>z-fighting</code> 问题，但对于地球尺度场景来说，它也无法完全消除。对此，在<code>cesium</code> 中，采用多段渲染方式解决 <code>z-fighting</code> 问题，即将视锥体按深度分为多段，使每段的 <code>near</code> 和 <code>far</code> 在着色器能表示的精度范围内，然后进行多次渲染。</p></blockquote><blockquote><p><code>three-tile</code> 的 <code>GLViewer</code> ，使用了动态调整方法解决，即根据摄像机离地图距离以及俯仰角，动态调整<code>near</code> 和 <code>far</code> 范围，尽量减少 <code>near</code> 和 <code>far</code> 差值。动态调整范围不仅能解决 <code>z-fighting</code> 问题，还能减少视锥体内瓦片数量，提高渲染和下载效率。</p></blockquote><h3 id="_2-雾效果" tabindex="-1">2. 雾效果 <a class="header-anchor" href="#_2-雾效果" aria-label="Permalink to &quot;2. 雾效果&quot;">​</a></h3><p>三维场景中，模型深度超出 <code>camera.far</code>的部分会被剪裁，由于 <code>three-tile</code> 的地图并不是一个球，地图剪裁面没有过渡，造成天际线有些突兀，可通过添加雾来缓解。</p><p>threejs 内置的雾（线性雾、指数雾）浓度仅通过片元离摄像机距离来计算，而现实中雾的浓度不仅与距离有关，还与高度有关。</p><blockquote><p><code>three-tile</code> 的 <code>GLViewer</code> 中，根据摄像机俯仰角动态调整雾浓度，它的实现简单高效，但比起 <code>cesium</code> 中的大气效果还是差了一些。</p></blockquote><h3 id="_3-灯光" tabindex="-1">3. 灯光 <a class="header-anchor" href="#_3-灯光" aria-label="Permalink to &quot;3. 灯光&quot;">​</a></h3><p>地图的材质默认使用 <code>MeshStandardMaterial</code>，必须要添加灯光才能看得见，如果不添加灯光，地图会全黑。</p><p>建议添加一个环境光和一个直射光，环境光控制场景的整体亮度，直射光模拟太阳光，根据地形法向量调整亮度，增加地形的凹凸感。</p><p>如果要启用地图阴影，建议再增加一个灯光，并让它聚焦到需要产生阴影的模型上空，专门用来产生阴影。模拟太阳光的直射光离地球太远，阴影效果不明显，并且大范围阴影会影响性能。</p><blockquote><p>地图的亮度可以通过调整灯光强度来控制。</p></blockquote><h3 id="_4-控制器" tabindex="-1">4. 控制器 <a class="header-anchor" href="#_4-控制器" aria-label="Permalink to &quot;4. 控制器&quot;">​</a></h3><p>场景控制器默认使用 threejs 内置的 <code>MapControls</code>，它很适合地图应用场景，用户可以通过鼠标拖拽、滚轮缩放、双指缩放等操作来改变地图的姿态。</p><p>你可以通过修改 <code>MapControls</code> 的属性控制地图的操作，比如 <code>maxDistance</code>、<code>minDistance</code>、<code>enableDamping</code>、<code>zoomToCursor</code>、<code>zoomSpeed</code>、<code>panSpeed</code> 等，用于限制地图缩放旋转范围、是否启用阻尼效果、是否根据鼠标位置缩放、缩放平移速度等。</p><p>除了 <code>MapControls</code>，还可以使用 <code>OrbitControls</code>、<code>PointerLockControls</code>、<code>PointerLockControls</code>、<code>FlyControls</code>、<code>CameraControls</code> 等控制器，它们的使用方法与 <code>MapControls</code> 类似。</p>',19))])}}});export{C as __pageData,D as default};
