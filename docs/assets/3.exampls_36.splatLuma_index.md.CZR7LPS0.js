import{p as t,C as l,c as p,o,j as i,a4 as h,G as e,a2 as d,a as c,a5 as m,k as s,w as k}from"./chunks/framework.xbTv8SNN.js";import{R as u,k as g}from"./chunks/index.T3-yMMRo.js";const E=`<!DOCTYPE html>\r
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
            right: 20px;\r
        }\r
\r
        #local-info {\r
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
        .tools {\r
            position: absolute;\r
            top: 20px;\r
            right: 20px;\r
        }\r
    </style>\r
    <body>\r
        <div id="map"></div>\r
        <div id="loading">-</div>\r
        <div id="local-info">-</div>\r
        <div id="compass-container"></div>\r
        <div class="tools">\r
            <label for="show">\r
                <input type="checkbox" id="show" checked onchange="show(event)" />\r
                splat显示\r
            </label>\r
            <label for="mask">\r
                <input type="checkbox" id="mask" checked onchange="mask(event)" />\r
                splat背景\r
            </label>\r
        </div>\r
        <script type="importmap">\r
            {\r
                "imports": {\r
                    "three": "https://unpkg.com/three@0.171.0/build/three.module.js",\r
                    "three-tile": "https://unpkg.com/three-tile@0.11.10/dist",\r
                    "three-tile/plugin": "https://unpkg.com/three-tile@0.11.10/dist/plugin",\r
                    "@lumaai/luma-web": "https://unpkg.com/@lumaai/luma-web@0.2.2/dist/library/luma-web.module.js"\r
                }\r
            }\r
        <\/script>\r
\r
        <script type="module">\r
            import * as THREE from "three";\r
            import * as tt from "three-tile";\r
            import * as plugin from "three-tile/plugin";\r
            import { LumaSplatsThree, LumaSplatsSemantics } from "@lumaai/luma-web";\r
\r
            console.log(\`three-tile v\${tt.version} start!\`);\r
\r
            // 创建地图\r
            const map = tt.TileMap.create({\r
                // 影像数据源\r
                imgSource: [new plugin.BingSource()],\r
                // 地形数据源\r
                demSource: new plugin.ArcGisDemSource(),\r
                lon0: 90,\r
                minLevel: 2,\r
            });\r
            // 地图旋转到xz平面\r
            map.rotateX(-Math.PI / 2);\r
\r
            // 初始化场景\r
            const viewer = new plugin.GLViewer("#map", { logarithmicDepthBuffer: false });\r
            // viewer.scene.background = new THREE.Color(0x112233);\r
            // viewer.scene.fog.color = viewer.scene.background;\r
            // viewer.controls.zoomToCursor = true;\r
\r
            // 地图添加到场景\r
            viewer.scene.add(map);\r
\r
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
            //==============================================================\r
            function showLocation(viewer, map, id) {\r
                const pointer = new THREE.Vector2();\r
                viewer.container.addEventListener("pointermove", (evt) => {\r
                    const lonlat = plugin.getLocalFromMouse(evt, map, viewer.camera);\r
                    if (lonlat) {\r
                        const el = document.querySelector(id);\r
                        el.innerHTML = \`经度:\${lonlat.x.toFixed(6)}° 纬度:\${lonlat.y.toFixed(\r
                            6\r
                        )}° 海拔:\${lonlat.z.toFixed(1)}m\`;\r
                    }\r
                });\r
            }\r
            showLocation(viewer, map, "#local-info");\r
\r
            //==============================================================\r
            // 防止摄像机进入地下\r
            setTimeout(() => {\r
                viewer.addEventListener("update", () => {\r
                    plugin.limitCameraHeight(map, viewer.camera);\r
                });\r
            }, 5000);\r
\r
            //==============================================================\r
            //添加蓝天白云\r
            const skybox = new THREE.CubeTextureLoader()\r
                .setPath("../../skybox/")\r
                .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);\r
            viewer.scene.background = skybox;\r
\r
            //==============================================================\r
            // flyto 目标位置\r
            const centerPosition = map.geo2world(new THREE.Vector3(6.2035, 45.8641, 500));\r
            const cameraPosition = map.geo2world(new THREE.Vector3(6.2022, 45.8616, 664));\r
            viewer.flyTo(centerPosition, cameraPosition, false);\r
            viewer.fogFactor = 0.3;\r
\r
            //==============================================================\r
            const splat = new LumaSplatsThree({\r
                source: "https://lumalabs.ai/capture/da82625c-9c8d-4d05-a9f7-3367ecab438c",\r
            });\r
            splat.scale.setScalar(110);\r
            splat.position.copy(centerPosition.clone().add(new THREE.Vector3(0, 145, 0)));\r
            splat.rotateY(-Math.PI / 1.75);\r
            splat.renderOrder = 10;\r
            viewer.scene.add(splat);\r
\r
            window.show = (evt) => {\r
                splat.visible = evt.target.checked;\r
            };\r
            window.mask = (evt) => {\r
                splat.semanticsMask = evt.target.checked ? 255 : LumaSplatsSemantics.FOREGROUND;\r
            };\r
        <\/script>\r
    </body>\r
</html>\r
`,x=JSON.parse('{"title":"36. 使用 LumaSplatsThree 加载 splat 模型","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/36.splatLuma/index.md","filePath":"3.exampls/36.splatLuma/index.md","lastUpdated":1762435537000}'),b={name:"3.exampls/36.splatLuma/index.md"},F=Object.assign(b,{setup(v){const a=t(!0);return(y,n)=>{const r=l("ClientOnly");return o(),p("div",null,[n[1]||(n[1]=i("h1",{id:"_36-使用-lumasplatsthree-加载-splat-模型",tabindex:"-1"},[c("36. 使用 LumaSplatsThree 加载 splat 模型 "),i("a",{class:"header-anchor",href:"#_36-使用-lumasplatsthree-加载-splat-模型","aria-label":'Permalink to "36. 使用 LumaSplatsThree 加载 splat 模型"'},"​")],-1)),h(e(s(u),null,null,512),[[m,a.value]]),e(r,null,{default:k(()=>[e(s(g),{title:"example",description:"来自：https://github.com/lumalabs/luma-web-example",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:n[0]||(n[0]=()=>{a.value=!1}),htmlCode:s(E)},null,8,["htmlCode"])]),_:1}),n[2]||(n[2]=d(`<p>使用 <a href="https://github.com/lumalabs/luma-web-examples" target="_blank" rel="noreferrer">LumaSplatsThree</a> 加载 splat 模型：</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> splat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LumaSplatsThree</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    source: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://lumalabs.ai/capture/da82625c-9c8d-4d05-a9f7-3367ecab438c&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">splat.scale.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setScalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">splat.position.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">copy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(centerPosition.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Vector3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">splat.renderOrder </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">viewer.scene.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(splat);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>需要关闭 <code>Renderer</code> 的 <code>logarithmicDepthBuffer</code> 属性，否则 <code>splat</code> 模型会被地图遮挡。</p></div>`,3))])}}});export{x as __pageData,F as default};
