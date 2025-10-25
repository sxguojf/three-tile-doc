import{p as d,C as o,c as p,o as c,j as i,a4 as m,G as r,a2 as h,a as s,a5 as u,k as n,w as g}from"./chunks/framework.BZ48x_LH.js";import{R as v,k}from"./chunks/index.DCj37L2o.js";const b=`<!DOCTYPE html>\r
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
        .controls {\r
            position: absolute;\r
            top: 20px;\r
            right: 20px;\r
        }\r
    </style>\r
\r
    <script type="importmap">\r
        {\r
            "imports": {\r
                "three": "https://unpkg.com/three@0.171.0/build/three.module.js",\r
                "three-tile": "https://unpkg.com/three-tile@0.11.10/dist",\r
                "three-tile/plugin": "https://unpkg.com/three-tile@0.11.10/dist/plugin"\r
            }\r
        }\r
    <\/script>\r
\r
    <body>\r
        <div id="map"></div>\r
        <div id="loading">-</div>\r
        <div class="controls">\r
            <label>\r
                <input type="radio" name="controls" value="map" checked onclick="changeControls('MAP')" />地图控制器\r
            </label>\r
            <label>\r
                <input type="radio" name="controls" value="orbit" onclick="changeControls('ORBIT')" />轨道控制器\r
            </label>\r
        </div>\r
\r
        <script type="module">\r
            import * as THREE from "three";\r
            import * as tt from "three-tile";\r
            import * as plugin from "three-tile/plugin";\r
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
            // 地图中心经纬度高度（m）转为世界坐标\r
            const centerPostion = map.geo2world(new THREE.Vector3(116.39180280130437, 39.915285657622775, 0));\r
            // 摄像机经纬度高度（m）转为世界坐标\r
            const cameraPosition = map.geo2world(new THREE.Vector3(116.39199596764485, 39.91047669278009, 900));\r
            viewer.flyTo(centerPostion, cameraPosition);\r
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
            window.changeControls = function (controlName) {\r
                viewer.controlsMode = controlName;\r
                console.log("Controls changed to: ", viewer.controlsMode);\r
            };\r
        <\/script>\r
    </body>\r
</html>\r
`,w={id:"控制器切换",tabindex:"-1"},x=JSON.parse('{"title":"控制器切换","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/25.changeControls.md","filePath":"3.exampls/25.changeControls.md","lastUpdated":1761368239000}'),f={name:"3.exampls/25.changeControls.md"},E=Object.assign(f,{setup(y){const t=d(!0);return(T,e)=>{const l=o("Badge"),a=o("ClientOnly");return c(),p("div",null,[i("h1",w,[e[1]||(e[1]=s("控制器切换")),r(l,{type:"tip",text:"≥0.11.4"}),e[2]||(e[2]=s()),e[3]||(e[3]=i("a",{class:"header-anchor",href:"#控制器切换","aria-label":'Permalink to "控制器切换<Badge type="tip" text="≥0.11.4" />"'},"​",-1))]),m(r(n(v),null,null,512),[[u,t.value]]),r(a,null,{default:g(()=>[r(n(k),{title:"example",description:"切换地图控制器和轨道控制器",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),htmlCode:n(b)},null,8,["htmlCode"])]),_:1}),e[4]||(e[4]=h('<p>V0.11.4 版本 <code>GLViewer</code> 增加 <code>controlsMode</code> 属性，用于切换 MAP 控制器和 ORBIT 控制器。</p><p>这没啥说的，修改 GLViewer.controlsMode 属性即可完成切换。</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GLViewer.controlsMode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;MAP&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;ORBIT&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>修改 Viewer.controls.zoomToCursor 属性， 能在地图在缩放时，选择以地图中心点为中心缩放，还是以鼠标位置为中心缩放。</p><p><a href="https://threejs.org/docs/#examples/zh/controls/OrbitControls.zoomToCursor" target="_blank" rel="noreferrer">https://threejs.org/docs/#examples/zh/controls/OrbitControls.zoomToCursor</a></p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>V0.11.4 还增加了使用<code>PointerLockControls</code>控制器的 <code>PLViewer</code> 和 <code>FlyControls</code> 控制器 <code>FLViewer</code>。</p></div>',5))])}}});export{x as __pageData,E as default};
