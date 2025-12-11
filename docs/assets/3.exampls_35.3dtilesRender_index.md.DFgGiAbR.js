import{p as t,C as l,c as p,o as h,j as r,a4 as d,G as e,a2 as o,a as k,a5 as E,k as i,w as c}from"./chunks/framework.xbTv8SNN.js";import{R as g,k as m}from"./chunks/index.T3-yMMRo.js";const u=`<!DOCTYPE html>\r
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
        #compass-container {\r
            position: absolute;\r
            height: 75px;\r
            width: 75px;\r
            left: 30px;\r
            bottom: 50px;\r
        }\r
        .controls {\r
            position: absolute;\r
            top: 20px;\r
            right: 20px;\r
        }\r
    </style>\r
    <body>\r
        <div id="map"></div>\r
        <div id="loading">-</div>\r
        <div id="compass-container"></div>\r
        <script type="importmap">\r
            {\r
                "imports": {\r
                    "three": "https://unpkg.com/three@0.171.0/build/three.module.js",\r
                    "three-tile": "https://unpkg.com/three-tile@0.11.10/dist",\r
                    "three-tile/plugin": "https://unpkg.com/three-tile@0.11.10/dist/plugin",\r
                    "3DTilesRenderer": "https://fastly.jsdelivr.net/npm/3d-tiles-renderer@0.4.18/+esm",\r
                    "utils": "../utils/index.js"\r
                }\r
            }\r
        <\/script>\r
\r
        <script type="module">\r
            import * as THREE from "three";\r
            import * as tt from "three-tile";\r
            import * as plugin from "three-tile/plugin";\r
            import { TilesRenderer } from "3DTilesRenderer";\r
            import * as utils from "utils";\r
\r
            console.log(\`three-tile v\${tt.version} start!\`);\r
\r
            // 创建地图\r
            const map = tt.TileMap.create({\r
                // 影像数据源\r
                imgSource: [new plugin.ArcGisSource()],\r
                // 地形数据源\r
                demSource: new plugin.ArcGisDemSource(),\r
                lon0: 90,\r
                minLevel: 10,\r
            });\r
            // 地图旋转到xz平面\r
            map.rotateX(-Math.PI / 2);\r
\r
            // 初始化场景\r
            const viewer = new plugin.GLViewer("#map", { antialias: true, logarithmicDepthBuffer: false });\r
            viewer.scene.background = new THREE.Color(0x112233);\r
            viewer.scene.fog.color = viewer.scene.background;\r
            viewer.renderer.shadowMap.enabled = true;\r
            map.receiveShadow = true;\r
\r
            // 地图添加到场景\r
            viewer.scene.add(map);\r
\r
            //==============================================================\r
            // 显示地图加载进度\r
            utils.showLoading(map);\r
\r
            //==============================================================\r
            viewer.addEventListener("update", () => {\r
                plugin.limitCameraHeight(map, viewer.camera);\r
            });\r
\r
            //==============================================================\r
            // flyto 目标位置\r
            const center = map.geo2world(new THREE.Vector3(108, 34.3, 500));\r
            viewer.flyTo(center, new THREE.Vector3(center.x, 10000, center.z - 20000), false);\r
            //==============================================================\r
\r
            // 3dtiles 辅助框\r
            const helper = new THREE.Mesh(\r
                new THREE.BoxGeometry(),\r
                new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })\r
            );\r
\r
            helper.position.copy(map.geo2world(new THREE.Vector3(108, 34.3, 575)));\r
            helper.scale.setScalar(100);\r
            viewer.scene.add(helper);\r
\r
            // 加载3dtiles\r
            const load3dtiles = async (url) => {\r
                const tilesRenderer = new TilesRenderer(url);\r
                tilesRenderer.setCamera(viewer.camera);\r
                tilesRenderer.setResolutionFromRenderer(viewer.camera, viewer.renderer);\r
                tilesRenderer.addEventListener("load-tile-set", () => {\r
                    const sphere = new THREE.Sphere();\r
                    tilesRenderer.getBoundingSphere(sphere);\r
                    console.log(sphere);\r
                    tilesRenderer.group.position.copy(sphere.center).negate();\r
\r
                    const bounds = new THREE.Box3();\r
                    tilesRenderer.getBoundingBox(bounds);\r
                    console.log(bounds.getSize(new THREE.Vector3()));\r
\r
                    // const position = sphere.center.clone();\r
                    // const rotationToNorthPole = new THREE.Quaternion().setFromUnitVectors(\r
                    //     position.normalize(),\r
                    //     tilesRenderer.group.up\r
                    // );\r
                    // helper.rotation.setFromQuaternion(rotationToNorthPole);\r
                });\r
                return tilesRenderer;\r
            };\r
\r
            const tilesRenderer = await load3dtiles(\r
                "https://nasa-ammos.github.io/3DTilesRendererJS/example/data/tileset.json"\r
                // "https://sugaramapp.oss-cn-hangzhou.aliyuncs.com/tileset/3DTiles_JZ_0526/tileset.json"\r
            );\r
            helper.add(tilesRenderer.group);\r
            viewer.addEventListener("update", (evt) => {\r
                tilesRenderer.update();\r
            });\r
        <\/script>\r
    </body>\r
</html>\r
`,v=JSON.parse('{"title":"35. 使用 3DTilesRendererJS 加载 3DTiles","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/35.3dtilesRender/index.md","filePath":"3.exampls/35.3dtilesRender/index.md","lastUpdated":1762101030000}'),y={name:"3.exampls/35.3dtilesRender/index.md"},T=Object.assign(y,{setup(b){const n=t(!0);return(F,s)=>{const a=l("ClientOnly");return h(),p("div",null,[s[1]||(s[1]=r("h1",{id:"_35-使用-3dtilesrendererjs-加载-3dtiles",tabindex:"-1"},[k("35. 使用 3DTilesRendererJS 加载 3DTiles "),r("a",{class:"header-anchor",href:"#_35-使用-3dtilesrendererjs-加载-3dtiles","aria-label":'Permalink to "35. 使用 3DTilesRendererJS 加载 3DTiles"'},"​")],-1)),d(e(i(g),null,null,512),[[E,n.value]]),e(a,null,{default:c(()=>[e(i(m),{title:"example",description:"加载 3DTiles",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{n.value=!1}),htmlCode:i(u)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=o(`<p>使用 <code>3DTilesRendererJS</code>(<a href="https://github.com/NASA-AMMOS/3DTilesRendererJS" target="_blank" rel="noreferrer">https://github.com/NASA-AMMOS/3DTilesRendererJS</a>) 加载 3dtiles 模型。</p><p>把 <code>3DTilesRendererJS</code> 的 <code>Basic TilesRenderer</code> 示例复制过来：</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 加载3dtiles</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> load3dtiles</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tilesRenderer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TilesRenderer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(url);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tilesRenderer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setCamera</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(viewer.camera);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tilesRenderer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setResolutionFromRenderer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(viewer.camera, viewer.renderer);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tilesRenderer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;load-tile-set&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sphere</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Sphere</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        tilesRenderer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getBoundingSphere</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sphere);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        tilesRenderer.group.position.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">copy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(sphere.center).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">multiplyScalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tilesRenderer;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tilesRenderer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> load3dtiles</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://nasa-ammos.github.io/3DTilesRendererJS/example/data/tileset.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">helper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tilesRenderer.group);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">viewer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;update&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">evt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tilesRenderer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>由于 three-tile 使用 EPSG:3857 投影，而常见的 3dtiles 使用 EPSG:4326 投影，叠加时 3dtiles 很难和地图套准，只能手工调整 3dtiles 的位置和缩放尽量减小误差。</p></div>`,4))])}}});export{v as __pageData,T as default};
