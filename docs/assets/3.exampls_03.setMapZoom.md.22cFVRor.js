import{p as l,C as p,c as r,o as h,j as i,a4 as k,G as n,a2 as o,a as d,a5 as E,k as a,w as c}from"./chunks/framework.CJqd0DOR.js";import{R as g,k as y}from"./chunks/index.Ga076E9x.js";const m=`<!DOCTYPE html>\r
<html lang="zh-cn">\r
    <head>\r
        <meta charset="utf-8" />\r
        <meta name="viewport" content="width=device-width" />\r
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
            text-shadow: 0 0 2px black;\r
        }\r
        #map {\r
            height: 100%;\r
            width: 100%;\r
        }\r
\r
        .tools {\r
            position: absolute;\r
            top: 20px;\r
            right: 20px;\r
        }\r
        button {\r
            padding: 0 10px;\r
            border: 1px solid darkcyan;\r
            border-radius: 5px;\r
            background-color: #0003;\r
        }\r
        button:hover {\r
            background-color: darkcyan;\r
        }\r
\r
        #local-info {\r
            position: absolute;\r
            top: 10px;\r
            left: 20px;\r
        }\r
        #map-info {\r
            position: absolute;\r
            bottom: 0px;\r
            width: 100%;\r
        }\r
        #loading {\r
            position: absolute;\r
            bottom: 0px;\r
            left: 20px;\r
        }\r
    </style>\r
    <body>\r
        <div id="map"></div>\r
        <div id="loading">-</div>\r
        <div class="tools">\r
            <button onclick="goto(116.39, 39.91, 0)">北京</button>\r
            <button onclick="goto(86.95, 27.98, 3)">珠穆朗玛峰</button>\r
        </div>\r
        <div id="local-info">-</div>\r
        <div id="map-info">-</div>\r
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
            // 初始化场景\r
            const viewer = new plugin.GLViewer("#map");\r
            // 地图添加到场景\r
            viewer.scene.add(map);\r
\r
            //==============================================================\r
            // 地图中心经纬度高度（m）转为世界坐标\r
            const centerPostion = map.geo2world(new THREE.Vector3(110, 30, 0));\r
            // 摄像机经纬度高度（m）转为世界坐标\r
            const cameraPosition = map.geo2world(new THREE.Vector3(110, 10, 3000 * 1000));\r
            // 漫游到指定位置\r
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
\r
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
            //==============================================================\r
\r
            viewer.controls.addEventListener("change", () => {\r
                const el = document.querySelector("#map-info");\r
                let cp = viewer.controls.target;\r
                let mapCenter = \` 地图中心世界坐标：(\${cp.x}, \${cp.y.toFixed(1)}, \${cp.z}) <br>\`;\r
                cp = map.world2geo(cp);\r
                mapCenter += \`地图中心经纬度：(\${cp.x}, \${cp.y}, \${cp.z.toFixed(1)})\`;\r
\r
                cp = viewer.camera.position;\r
                let cameraPosition = \`摄像机世界坐标: (\${cp.x}, \${cp.y.toFixed(1)}, \${cp.z}) <br>\`;\r
                cp = map.world2geo(cp);\r
                cameraPosition += \`摄像机经纬度: (\${cp.x}, \${cp.y}, \${cp.z.toFixed(1)})\`;\r
                el.innerHTML = mapCenter + "<br>" + cameraPosition;\r
                cp = viewer.camera.rotation;\r
                el.innerHTML += \`<br>摄像机姿态: (\${cp.x.toFixed(2)}, \${cp.y.toFixed(2)}, \${cp.z.toFixed(2)})\`;\r
            });\r
\r
            window.goto = function (lon, lat, alt) {\r
                const lonlat = new THREE.Vector3(lon, lat, alt);\r
                // 地图中心经纬度高度（m）转为世界坐标\r
                const centerPostion = map.geo2world(lonlat);\r
                // 摄像机经纬度高度（m）转为世界坐标\r
                const cameraPosition = map.geo2world(new THREE.Vector3(lonlat.x, lonlat.y - 0.1, lonlat.z + 10000));\r
                // 漫游到指定位置\r
                viewer.flyTo(centerPostion, cameraPosition);\r
            };\r
        <\/script>\r
    </body>\r
</html>\r
`,D=JSON.parse('{"title":"调整地图位置和缩放","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/03.setMapZoom.md","filePath":"3.exampls/03.setMapZoom.md","lastUpdated":1761368239000}'),b={name:"3.exampls/03.setMapZoom.md"},v=Object.assign(b,{setup(u){const t=l(!0);return(F,s)=>{const e=p("ClientOnly");return h(),r("div",null,[s[1]||(s[1]=i("h1",{id:"调整地图位置和缩放",tabindex:"-1"},[d("调整地图位置和缩放 "),i("a",{class:"header-anchor",href:"#调整地图位置和缩放","aria-label":'Permalink to "调整地图位置和缩放"'},"​")],-1)),s[2]||(s[2]=i("p",null,"地图创建部分已讲过，地图的中心位置和缩放需要通过调整摄像机位置和姿态来实现。",-1)),k(n(a(g),null,null,512),[[E,t.value]]),n(e,null,{default:c(()=>[n(a(y),{title:"Example",description:"点击地图右上角地名调整地图位置和缩放",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{t.value=!1}),htmlCode:a(m)},null,8,["htmlCode"])]),_:1}),s[3]||(s[3]=o(`<p>三维场景下，地图的位置和缩放，是通过调整摄像机的位置的姿态来实现的。设置 camera 的 position 设置观察者的坐标、设置 controls.target.position 设置地图中心坐标。</p><p>这两个坐标可以根据经纬度和海拔高度计算得到。可以在地图和场景创建完成后立即设置地图初始位置，也可以在运行时调整，还可以利用 tween 进行动画调整。</p><h2 id="_1-设置地图初始位置" tabindex="-1">1. 设置地图初始位置 <a class="header-anchor" href="#_1-设置地图初始位置" aria-label="Permalink to &quot;1. 设置地图初始位置&quot;">​</a></h2><p>直接设置地图中心和摄像机位置</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 地图中心经纬度高度（m）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> lonlat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Vector3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">116.39</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">39.91</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 地图中心经纬度高度（m）转为世界坐标</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> centerPostion</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">geo2world</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(lonlat);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 摄像机经纬度高度（m）转为世界坐标</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cameraPosition</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">geo2world</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Vector3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(lonlat.x, lonlat.y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, lonlat.z </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置地图中心</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">viewer.controls.target.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">copy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(centerPostion);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置摄像机位置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">viewer.camera.position.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">copy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cameraPosition);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="_2-跳转到地图指定位置" tabindex="-1">2. 跳转到地图指定位置： <a class="header-anchor" href="#_2-跳转到地图指定位置" aria-label="Permalink to &quot;2. 跳转到地图指定位置：&quot;">​</a></h2><p>GLViewer 提供 flyTo 方法，可以跳转到指定位置。</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 跳转到指定经纬度</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 经度</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 纬度</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> z</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 高度（m）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">goto</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">z</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> lonlat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Vector3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, y, z);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;goto&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, lonlat);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 地图中心经纬度高度（m）转为世界坐标</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> centerPostion</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">geo2world</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(lonlat);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 摄像机经纬度高度（m）转为世界坐标</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cameraPosition</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">geo2world</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Vector3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(lonlat.x, lonlat.y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, lonlat.z </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 飞行漫游到指定位置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  viewer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">flyTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(centerPostion, cameraPosition);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>viewer.flyTo 是 GLViewer 的一个方法，animate 参数为 true 时使用 Tween 动画平滑漫游，函数很简单，如果动画效果不符合你的需求，可以参照下面代码自己写一个。</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * Fly to a position</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> centerPostion</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> Map center target position</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cameraPostion</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> Camera target position</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> animate</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> animate or not</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	public </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">flyTo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(centerPostion: Vector3, cameraPostion: Vector3, animate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">		this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.controls.target.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">copy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(centerPostion);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (animate) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">			const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> start</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.camera.position;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">			new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Tween</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(start)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">				// fly to 10000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">to</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ y: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10000</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, z: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">				// to target</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chain</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Tween</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(start).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">to</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cameraPostion, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">easing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TWEEN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.Easing.Quintic.Out))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">				.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">			this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.camera.position.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">copy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cameraPostion);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="_3-取得和恢复地图位置状态" tabindex="-1">3. 取得和恢复地图位置状态 <a class="header-anchor" href="#_3-取得和恢复地图位置状态" aria-label="Permalink to &quot;3. 取得和恢复地图位置状态&quot;">​</a></h2><p>threejs 的控制器 OrbitControls 和 MapControls 提供了 saveState 和 reset 方法（ <a href="https://threejs.org/docs/index.html?q=orb#examples/zh/controls/OrbitControls.reset" target="_blank" rel="noreferrer">https://threejs.org/docs/index.html?q=orb#examples/zh/controls/OrbitControls.reset</a> ），可以用来保存地图当前状态和恢复之前的状态，即保存和恢复地图姿态视角。</p><div class="tip custom-block"><p class="custom-block-title">技巧</p><p>地图的位置手工很难估算准确。上面示例显示了地图和摄像机当前的位置，可以先用鼠标调整好你想要的地图，然后复制地图中心坐标和摄像机坐标，再用 viewwer.flyTo 方法跳转。</p></div>`,13))])}}});export{D as __pageData,v as default};
