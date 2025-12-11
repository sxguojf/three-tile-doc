import{p as t,C as l,c as p,o as h,j as a,a4 as o,G as n,a2 as d,a as k,a5 as c,k as i,w as E}from"./chunks/framework.xbTv8SNN.js";import{R as m,k as u}from"./chunks/index.T3-yMMRo.js";const g=`<!DOCTYPE html>\r
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
    </style>\r
    <body>\r
        <div id="map"></div>\r
        <div id="loading">-</div>\r
        <div id="local-info">-</div>\r
        <!-- 罗盘 -->\r
        <div id="compass-container"></div>\r
\r
        <script type="importmap">\r
            {\r
                "imports": {\r
                    "three": "https://unpkg.com/three@0.171.0/build/three.module.js",\r
                    "three-tile": "https://unpkg.com/three-tile@0.11.10/dist",\r
                    "three-tile/plugin": "https://unpkg.com/three-tile@0.11.10/dist/plugin",\r
                    "utils": "../utils/index.js"\r
                }\r
            }\r
        <\/script>\r
\r
        <script type="module">\r
            import * as THREE from "three";\r
            import * as tt from "three-tile";\r
            import * as plugin from "three-tile/plugin";\r
            import * as utils from "utils";\r
\r
            console.log(\`three-tile v\${tt.version} start!\`);\r
\r
            // 注册单影像TIF-DEM加载器\r
            tt.registerDEMLoader(new plugin.SingleTifDEMLoader());\r
\r
            // tif地形数据源\r
            const tifDemSource = new tt.TileSource({\r
                dataType: "single-tif",\r
                url: "../../map/dem1.tif",\r
                // maxLevel: 20,\r
                skirtHeight: 100,\r
                bounds: [111.16267204284668, 21.59287851485902, 111.23897552490234, 21.64825416643841],\r
            });\r
\r
            // 创建地图\r
            const map = tt.TileMap.create({\r
                // 影像数据源\r
                imgSource: new plugin.ArcGisSource(),\r
                // 地形数据源\r
                demSource: tifDemSource,\r
                lon0: 90,\r
                minLevel: 2,\r
            });\r
            // 地图旋转到xz平面\r
            map.rotateX(-Math.PI / 2);\r
            // 地形夸张2倍\r
            map.scale.setZ(2.5);\r
\r
            // 初始化场景\r
            const viewer = new plugin.GLViewer("#map");\r
            viewer.renderer.toneMapping = THREE.ACESFilmicToneMapping;\r
            // viewer.renderer.toneMappingExposure = 1.5;\r
\r
            // 地图添加到场景\r
            viewer.scene.add(map);\r
\r
            //==============================================================\r
            // 显示地图加载进度\r
            utils.showLoading(map, "#loading");\r
            // 显示地图当前位置\r
            utils.showLocation(viewer, map, "#local-info");\r
\r
            // 添加罗盘\r
            utils.addCompass(viewer, "#compass-container");\r
            // 添加蓝天白云\r
            utils.addSkyBox(viewer);\r
\r
            //==============================================================\r
            //地形添加一个box\r
            const bounds = tifDemSource.bounds;\r
            const sw = map.geo2world(new THREE.Vector3(bounds[0], bounds[1]));\r
            const ne = map.geo2world(new THREE.Vector3(bounds[2], bounds[3]));\r
            const center = new THREE.Vector3((ne.x + sw.x) / 2, 0, (ne.z + sw.z) / 2);\r
            const scale = new THREE.Vector3(ne.x - sw.x, 1000, ne.z - sw.z);\r
            const mat = new THREE.Matrix4();\r
            mat.setPosition(center);\r
            mat.scale(scale);\r
            const box = new THREE.Mesh(\r
                new THREE.BoxGeometry(),\r
                new THREE.MeshLambertMaterial({\r
                    color: 0x00ff00,\r
                    transparent: true,\r
                    opacity: 0.3,\r
                    side: THREE.BackSide,\r
                })\r
            );\r
            box.applyMatrix4(mat);\r
            box.renderOrder = 1000;\r
            const boxHelper = new THREE.BoxHelper(box, 0xffff00);\r
            viewer.scene.add(boxHelper);\r
            viewer.scene.add(box);\r
\r
            // flyto 目标位置\r
            viewer.flyTo(center, new THREE.Vector3(center.x, 3000, center.z + 6000));\r
        <\/script>\r
    </body>\r
</html>\r
`,F=JSON.parse('{"title":"21. 单 TIFF 文件地形","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/21.singleDem/index.md","filePath":"3.exampls/21.singleDem/index.md","lastUpdated":1761902788000}'),b={name:"3.exampls/21.singleDem/index.md"},v=Object.assign(b,{setup(y){const e=t(!0);return(f,s)=>{const r=l("ClientOnly");return h(),p("div",null,[s[1]||(s[1]=a("h1",{id:"_21-单-tiff-文件地形",tabindex:"-1"},[k("21. 单 TIFF 文件地形 "),a("a",{class:"header-anchor",href:"#_21-单-tiff-文件地形","aria-label":'Permalink to "21. 单 TIFF 文件地形"'},"​")],-1)),o(n(i(m),null,null,512),[[c,e.value]]),n(r,null,{default:E(()=>[n(i(u),{title:"example",description:"使用tiff文件作为地形",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{e.value=!1}),htmlCode:i(g)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=d(`<p>很多时候，我们只想关注一个小区域，并不需要全球地形。 three-tile 提供<code>single-tif</code>插件， 支持使用单个 tiff 文件作为地形，插件由网友<code>chaoxl</code>开发。</p><p>在定义数据源时，数据源的 dataType 为<code>single-tif</code>，表示数据的下载、解析、模型创建等操作由该插件完成。</p><p>单 TIFF 地形制作步骤：</p><ol><li>制作一张你需要显示的经纬度范围的 tiff 高程文件，需要使用 EPSG:3857 地图投影。</li><li>注册 <code>single-tif</code> 加载器</li><li>声明一个数据源，dataType 属性为 &quot;single-tif&quot;\`。</li><li>设置地图的 <code>demSource</code> 为你声明的数据源。</li></ol><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 注册单TIF地形加载器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">registerDEMLoader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> plugin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SingleTifDEMLoader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// TIF地形数据源</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tifDemSource</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TileSource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    dataType: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;single-tif&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../map/dem1.tif&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    bounds: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">111.16267204284668</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">21.59287851485902</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">111.23897552490234</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">21.64825416643841</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建地图</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> map</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tt.TileMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 影像数据源</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    imgSource: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> plugin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ArcGisSource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 地形数据源</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    demSource: tifDemSource,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    lon0: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">90</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    minLevel: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,5))])}}});export{F as __pageData,v as default};
