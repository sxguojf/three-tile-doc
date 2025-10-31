import{p as o,C as a,c as h,o as d,j as r,a4 as k,G as s,a2 as c,a as t,a5 as m,k as i,w as g}from"./chunks/framework.BQo5SrHh.js";import{R as u,k as E}from"./chunks/index.UKPBqX0I.js";const b=`<!DOCTYPE html>\r
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
    </style>\r
    <body>\r
        <div id="map"></div>\r
        <div id="loading">-</div>\r
        <!-- 罗盘 -->\r
        <div id="compass-container"></div>\r
\r
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
            import { GUI } from "three/addons/libs/lil-gui.module.min.js";\r
\r
            console.log(\`three-tile v\${tt.version} start!\`);\r
\r
            // 注册背景加载器\r
            tt.registerImgLoader(new plugin.BackgroundLoader());\r
            // 背景数据源\r
            const background = tt.TileSource.create({ dataType: "background", color: 0x1123456 });\r
\r
            // 创建地图\r
            const map = tt.TileMap.create({\r
                // 影像数据源\r
                imgSource: [background, new plugin.GDSource({ style: 8 })],\r
                lon0: 90,\r
                minLevel: 4,\r
                // backgroundColor: 0x003366,\r
            });\r
            // 地图旋转到xz平面\r
            map.rotateX(-Math.PI / 2);\r
\r
            // 初始化场景\r
            const viewer = new plugin.GLViewer("#map");\r
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
\r
            //==============================================================\r
            // 添加罗盘\r
            const compass = plugin.createCompass(viewer.controls);\r
            const compassContainer = document.querySelector("#compass-container");\r
            compassContainer && compassContainer.appendChild(compass.dom);\r
\r
            //==============================================================\r
            // flyto 目标位置\r
            const center = map.geo2world(new THREE.Vector3(108.89, 34.2));\r
            viewer.flyTo(center, new THREE.Vector3(center.x, 80000, center.z + 1000));\r
        <\/script>\r
    </body>\r
</html>\r
`,y={id:"_24-地图背景",tabindex:"-1"},F=JSON.parse('{"title":"24. 地图背景","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/24.background/index.md","filePath":"3.exampls/24.background/index.md","lastUpdated":1761902788000}'),v={name:"3.exampls/24.background/index.md"},D=Object.assign(v,{setup(C){const e=o(!0);return(x,n)=>{const l=a("Badge"),p=a("ClientOnly");return d(),h("div",null,[r("h1",y,[n[1]||(n[1]=t("24. 地图背景")),s(l,{type:"tip",text:"≥0.11.9"}),n[2]||(n[2]=t()),n[3]||(n[3]=r("a",{class:"header-anchor",href:"#_24-地图背景","aria-label":'Permalink to "24. 地图背景<Badge type="tip" text="≥0.11.9" />"'},"​",-1))]),k(s(i(u),null,null,512),[[m,e.value]]),s(p,null,{default:g(()=>[s(i(E),{title:"example",description:"简单地图，右上角调整地图背景色",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:n[0]||(n[0]=()=>{e.value=!1}),htmlCode:i(b)},null,8,["htmlCode"])]),_:1}),n[4]||(n[4]=c(`<p>有的时候，我们仅需要显示不含卫星影像，仅包含境界、地名的简单地图，甚至不需要地形的二维地图， 但由于境界、地名瓦片背景透明，地图无背景色时会穿透到地下。</p><p>V0.11.4 TileMap 增加了背景色属性：backgroundColor，但它不够灵活，已废弃。</p><p>V0.11.9 增加了背景加载器，通过数据源方式加载背景色，仅是对去掉了 backgroundColor 属性的临时替代方案。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>添加地图背景功能比较鸡肋，一般应用并不需要显示透明背景的底图。如果确有需求，建议使用 <code>26. 自定义瓦片着色器</code> 实现，它的效果更好一些。</p></div><h2 id="背景加载器使用" tabindex="-1">背景加载器使用 <a class="header-anchor" href="#背景加载器使用" aria-label="Permalink to &quot;背景加载器使用&quot;">​</a></h2><ol><li>注册背景加载器</li><li>声明背景数据源</li><li>添加背景</li></ol><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1. 注册背景加载器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">registerImgLoader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> plugin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">BackgroundLoader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2. 背景数据源</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> background</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tt.TileSource.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ dataType: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;background&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, color: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x1123456</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3.创建地图，使用背景数据源+高德境界数据源</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> map</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tt.TileMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 影像数据源</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    imgSource: [background, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> plugin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GDSource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ style: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    lon0: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">90</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    minLevel: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // backgroundColor: 0x003366,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 废弃</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,7))])}}});export{F as __pageData,D as default};
