import{p as r,C as l,c as p,o as h,j as a,a4 as k,G as i,a2 as d,a as o,a5 as c,k as n,w as E}from"./chunks/framework.BQo5SrHh.js";import{R as g,k as m}from"./chunks/index.UKPBqX0I.js";const y=`<!DOCTYPE html>\r
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
        #cssrenderer {\r
            position: absolute;\r
            top: 0;\r
            pointer-events: none;\r
            overflow: hidden;\r
        }\r
        .billboard {\r
            width: 40px;\r
            height: 100px;\r
            background-image: url("../../images/border.png");\r
            background-size: cover;\r
            pointer-events: auto;\r
            filter: drop-shadow(0 0 2px black);\r
        }\r
        .billboard:hover {\r
            cursor: pointer;\r
            filter: hue-rotate(180deg);\r
        }\r
    </style>\r
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
    <body>\r
        <div id="map"></div>\r
        <div id="cssrenderer"></div>\r
\r
        <script type="module">\r
            import * as THREE from "three";\r
            import * as tt from "three-tile";\r
            import * as plugin from "three-tile/plugin";\r
            import { CSS2DRenderer, CSS2DObject } from "three/addons/renderers/CSS2DRenderer.js";\r
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
                minLevel: 5,\r
            });\r
            // 地图旋转到xz平面\r
            map.rotateX(-Math.PI / 2);\r
            // 初始化场景\r
            const viewer = new plugin.GLViewer("#map");\r
            viewer.renderer.toneMapping = THREE.ACESFilmicToneMapping;\r
            // viewer.renderer.toneMappingExposure = 1.5;\r
\r
            // 地图添加到场景\r
            viewer.scene.add(map);\r
\r
            //==============================================================\r
            //添加蓝天白云\r
            const skybox = new THREE.CubeTextureLoader()\r
                .setPath("../../skybox/")\r
                .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);\r
            viewer.scene.background = skybox;\r
\r
            //==============================================================\r
            // 地图中心经纬度高度（m）转为世界坐标\r
            const centerPostion = map.geo2world(new THREE.Vector3(109, 35));\r
            // 摄像机经纬度高度（m）转为世界坐标\r
            const cameraPosition = map.geo2world(new THREE.Vector3(109, 34.98, 2000));\r
            // 摄像机飞到指定位置\r
            viewer.flyTo(centerPostion, cameraPosition);\r
\r
            //==============================================================\r
            // 添加CSS2D渲染器\r
            const cssRendererDiv = document.getElementById("cssrenderer");\r
            const css2dRenderer = new CSS2DRenderer({ element: cssRendererDiv });\r
\r
            // 添加CSS2D图标\r
            function addIcon(map, lonlat) {\r
                const position = map.geo2map(lonlat);\r
                const label = document.createElement("div");\r
                label.className = "billboard";\r
                label.title = \`经纬度: \${lonlat.x.toFixed(2)}, \${lonlat.y.toFixed(2)}\`;\r
                const labelObject = new CSS2DObject(label);\r
                labelObject.center.set(0.5, 1);\r
                labelObject.position.copy(position);\r
                map.add(labelObject);\r
            }\r
\r
            viewer.addEventListener("update", () => {\r
                css2dRenderer.render(viewer.scene, viewer.camera);\r
            });\r
            viewer.addEventListener("resize", () => {\r
                css2dRenderer.setSize(viewer.container.clientWidth, viewer.container.clientHeight);\r
            });\r
\r
            const currentPoint = new THREE.Vector2();\r
            viewer.container.addEventListener("pointerdown", (evt) => {\r
                const lonlat = plugin.getLocalFromMouse(evt, map, viewer.camera);\r
                if (lonlat) {\r
                    currentPoint.set(evt.x, evt.y);\r
                }\r
            });\r
            viewer.container.addEventListener("pointerup", (evt) => {\r
                const lonlat = plugin.getLocalFromMouse(evt, map, viewer.camera);\r
                if (lonlat && new THREE.Vector2(evt.x, evt.y).distanceTo(currentPoint) < 5) {\r
                    addIcon(map, lonlat);\r
                }\r
            });\r
        <\/script>\r
    </body>\r
</html>\r
`,D=JSON.parse('{"title":"29. 添加 CSS2D 广告牌","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/29.addCss2d/index.md","filePath":"3.exampls/29.addCss2d/index.md","lastUpdated":1761902788000}'),F={name:"3.exampls/29.addCss2d/index.md"},w=Object.assign(F,{setup(u){const e=r(!0);return(b,s)=>{const t=l("ClientOnly");return h(),p("div",null,[s[1]||(s[1]=a("h1",{id:"_29-添加-css2d-广告牌",tabindex:"-1"},[o("29. 添加 CSS2D 广告牌 "),a("a",{class:"header-anchor",href:"#_29-添加-css2d-广告牌","aria-label":'Permalink to "29. 添加 CSS2D 广告牌"'},"​")],-1)),k(i(n(g),null,null,512),[[c,e.value]]),i(t,null,{default:E(()=>[i(n(m),{title:"Example",description:"点击地图添加一个广告牌",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{e.value=!1}),htmlCode:n(y)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=d(`<p>添加 CSS2D 元素，与示例：<code>20.添加sprite广告牌</code>类似，只不过将精灵换成了 CSS2DObject</p><p>关于添加 CSS2D 对象，见：<a href="https://threejs.org/docs/?q=css#examples/zh/renderers/CSS2DRenderer" target="_blank" rel="noreferrer">https://threejs.org/docs/?q=css#examples/zh/renderers/CSS2DRenderer</a></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>相比添加精灵，CSS2D 通过 HTML 标签方式增加地图元素，显示文字、图片等更简单，并且可以直接在 DOM 元素上添加事件监听，拾取、悬停等操作，但缺点是速度较慢，且始 DOM 元素终位于地图顶层，无法被地形遮挡。</p></div><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 添加CSS2D渲染器</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cssRendererDiv</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cssrenderer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> css2dRenderer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CSS2DRenderer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ element: cssRendererDiv });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">viewer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;update&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    css2dRenderer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(viewer.scene, viewer.camera);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 添加CSS2D图标</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> addIcon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">lonlat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> position</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">geo2map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(lonlat);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;div&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    label.className </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;billboard&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    label.title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`经纬度: \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lonlat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toFixed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}, \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lonlat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toFixed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> labelObject</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CSS2DObject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(label);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    labelObject.center.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    labelObject.position.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">copy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(position);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(labelObject);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,4))])}}});export{D as __pageData,w as default};
