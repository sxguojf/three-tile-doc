import{p as l,C as s,c as o,o as p,j as i,a4 as d,G as n,a2 as h,a as m,a5 as c,k as r,w as u}from"./chunks/framework.BZ48x_LH.js";import{R as g,k}from"./chunks/index.DCj37L2o.js";const v="/three-tile-doc/assets/image-1.q_U1_vxc.png",b=`<!DOCTYPE html>\r
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
        #loading {\r
            position: absolute;\r
            bottom: 0px;\r
            left: 20px;\r
        }\r
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
                    "three-tile/plugin": "https://unpkg.com/three-tile@0.11.10/dist/plugin"\r
                }\r
            }\r
        <\/script>\r
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
                minLevel: 2,\r
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
            function fly() {\r
                // 地图中心经纬度高度（m）转为世界坐标\r
                const centerPostion = map.geo2world(new THREE.Vector3(86.95, 27.98, 0));\r
                // 摄像机经纬度高度（m）转为世界坐标\r
                const cameraPosition = map.geo2world(new THREE.Vector3(86.95, 28.1, 10000));\r
                // 摄像机飞到指定位置\r
                viewer.flyTo(centerPostion, cameraPosition, false);\r
            }\r
            fly();\r
\r
            //==============================================================\r
            // 添加罗盘\r
            const compass = plugin.createCompass(viewer.controls);\r
            const compassContainer = document.querySelector("#compass-container");\r
            compassContainer && compassContainer.appendChild(compass.dom);\r
\r
            //==============================================================\r
\r
            // 防止摄像机进入地下\r
            viewer.addEventListener("update", () => {\r
                plugin.limitCameraHeight(map, viewer.camera);\r
            });\r
        <\/script>\r
    </body>\r
</html>\r
`,x=JSON.parse('{"title":"防止摄像机碰撞地面","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/07.limitCameraHeight.md","filePath":"3.exampls/07.limitCameraHeight.md","lastUpdated":1761368239000}'),E={name:"3.exampls/07.limitCameraHeight.md"},C=Object.assign(E,{setup(f){const t=l(!0);return(w,e)=>{const a=s("ClientOnly");return p(),o("div",null,[e[1]||(e[1]=i("h1",{id:"防止摄像机碰撞地面",tabindex:"-1"},[m("防止摄像机碰撞地面 "),i("a",{class:"header-anchor",href:"#防止摄像机碰撞地面","aria-label":'Permalink to "防止摄像机碰撞地面"'},"​")],-1)),d(n(r(g),null,null,512),[[c,t.value]]),n(a,null,{default:u(()=>[n(r(k),{title:"example",description:"防止摄像机进入地下，接近地面会反弹",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),htmlCode:r(b)},null,8,["htmlCode"])]),_:1}),e[2]||(e[2]=h(`<div class="tip custom-block"><p class="custom-block-title">此功能已提供内置插件，直接调用即可。</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 防止摄像机进入地下</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">viewer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;update&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">limitCameraHeight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(map, viewer.camera);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div><hr><p>摄像机碰撞或穿过地面，是三维开发常见的一个问题，游戏中俗称“穿模”。three-tile 中出现这个问题的原因是地面出现在视椎体的近截面（下图黄色矩形）中被剪裁。</p><p><img src="`+v+'" alt="alt text" loading="lazy"></p><p>地图可以在一定范围内沿 x 轴旋转，当摄像机离地面较近且地图旋转角度较大时，地形会被视椎体的近截面剪裁造成地图残缺。一般可以采用限制摄像机与地面距离，或限制地图旋转角度范围来解决，但用户通常希望地图旋转角度范围越大越好，最好是能像真实场景站在地面上，沿水平方向前看，所以 three-tile 的目标就是，根据地形动态调整俯仰角限制范围，尽可能让用户贴在地面上，沿水平方向前看（实际不可能），地图还保持完整。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>为什么游戏能做到以模拟人类视角而不会出现地形被剪裁情况？游戏场景俯仰角的旋转是以摄像机（人眼）为中心的，它怎么旋转也不会被剪裁，而地图旋转是以地图中心为旋转中心的，俯仰角太大就会出现地形被剪裁。如果你把 three-tile 的 controls 换成第一人称控制器，那就不用担心这个问题了，它永远都不会出现。</p></div><h3 id="由于地面碰撞检测需要在每帧渲染时进行-需要找到一种高效的算法" tabindex="-1">由于地面碰撞检测需要在每帧渲染时进行，需要找到一种高效的算法： <a class="header-anchor" href="#由于地面碰撞检测需要在每帧渲染时进行-需要找到一种高效的算法" aria-label="Permalink to &quot;由于地面碰撞检测需要在每帧渲染时进行，需要找到一种高效的算法：&quot;">​</a></h3><h2 id="_1-根据摄像机局地高度判断" tabindex="-1">1 根据摄像机局地高度判断 <a class="header-anchor" href="#_1-根据摄像机局地高度判断" aria-label="Permalink to &quot;1 根据摄像机局地高度判断&quot;">​</a></h2><ul><li>思路：直接判断摄像机距地面高度，小于阈值即发生碰撞。</li><li>问题：摄像机位置在视椎体之外，它的正下方地图瓦片并不会加载，所以无法取得它下方地面的高度。</li></ul><h2 id="_2-检测视线与摄像机碰撞" tabindex="-1">2.检测视线与摄像机碰撞 <a class="header-anchor" href="#_2-检测视线与摄像机碰撞" aria-label="Permalink to &quot;2.检测视线与摄像机碰撞&quot;">​</a></h2><ul><li>思路：以摄像机位置为起点，沿视线方向发出射线（上图白色线），取得射线与地图模型的交点，计算起点到交点的距离，小于阈值即发生碰撞。</li><li>问题：在地形复杂的山区，虽然视线与地面交点的距离大于阈值，但一些近处的高地可能已经进入近截面被剪裁了。</li></ul><h2 id="_3-检测场景近截面与地图模型碰撞" tabindex="-1">3. 检测场景近截面与地图模型碰撞 <a class="header-anchor" href="#_3-检测场景近截面与地图模型碰撞" aria-label="Permalink to &quot;3. 检测场景近截面与地图模型碰撞&quot;">​</a></h2><ul><li>思路：取场景近截面矩形（上图黄色矩形），分别从四个顶点沿边的方向发出射线，检测射线与地图模型的交点，如果交点落在边上内则出现了碰撞。想象一下：在近截面焊了一圈钢筋，让地图模型不能进入这个框框。</li><li>问题：需要进行四次射线法检测，速度较慢。是否能仅判断近截面下沿与地图模型的碰撞？经试验也不行，因为一旦地形已经穿过近截面下沿，底边就不会和模型碰撞了。</li></ul><h2 id="_4-根据视线与近截面交点距地高度判断" tabindex="-1">4. 根据视线与近截面交点距地高度判断 <a class="header-anchor" href="#_4-根据视线与近截面交点距地高度判断" aria-label="Permalink to &quot;4. 根据视线与近截面交点距地高度判断&quot;">​</a></h2><ul><li>思路：先计算视线与近截面的交点（上图白色线起点），再计算该点的距地高度，如果小于阈值则发生碰撞。</li><li>问题：如果进入一个山谷中，两边山峰很高，视线与近截面的交点距地高度虽然比较大，但两边的山体可能已经进入近截面被剪裁了。</li></ul><h2 id="测试结果-除-1-外-2、3、4-三种方法都基本可用-但也都有一些问题。经测试" tabindex="-1">测试结果：除 1 外，2、3、4 三种方法都基本可用，但也都有一些问题。经测试： <a class="header-anchor" href="#测试结果-除-1-外-2、3、4-三种方法都基本可用-但也都有一些问题。经测试" aria-label="Permalink to &quot;测试结果：除 1 外，2、3、4 三种方法都基本可用，但也都有一些问题。经测试：&quot;">​</a></h2><ul><li>第 1 种方法，无法实现。</li><li>第 2 种方法，需要取较大的阈值，即摄像机不能贴地面很近，否则很有可能被剪裁。</li><li>第 3 种方法，可以准确判断，但需要四次射线检测，效率较低。</li><li>第 4 种方法，不能完全解决问题，但只需一次射线检测，并可以贴近地面，经测试除了地形复杂地区（青藏高原），其它地区可准确判断。</li></ul><p>经比较，采用第 4 种方法。</p>',18))])}}});export{x as __pageData,C as default};
