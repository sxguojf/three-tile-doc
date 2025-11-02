import{p as l,C as p,c as r,o as h,j as i,a4 as k,G as n,a2 as o,a as d,a5 as E,k as a,w as c}from"./chunks/framework.xbTv8SNN.js";import{R as g,k as y}from"./chunks/index.T3-yMMRo.js";const m=`<!DOCTYPE html>\r
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
`,D=JSON.parse('{"title":"3. 调整地图位置和缩放","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/03.setMapZoom/index.md","filePath":"3.exampls/03.setMapZoom/index.md","lastUpdated":1761902788000}'),b={name:"3.exampls/03.setMapZoom/index.md"},v=Object.assign(b,{setup(u){const t=l(!0);return(F,s)=>{const e=p("ClientOnly");return h(),r("div",null,[s[1]||(s[1]=i("h1",{id:"_3-调整地图位置和缩放",tabindex:"-1"},[d("3. 调整地图位置和缩放 "),i("a",{class:"header-anchor",href:"#_3-调整地图位置和缩放","aria-label":'Permalink to "3. 调整地图位置和缩放"'},"​")],-1)),s[2]||(s[2]=i("p",null,"地图创建部分已讲过，地图的中心位置和缩放需要通过调整摄像机位置和姿态来实现。",-1)),k(n(a(g),null,null,512),[[E,t.value]]),n(e,null,{default:c(()=>[n(a(y),{title:"Example",description:"点击地图右上角地名调整地图位置和缩放",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{t.value=!1}),htmlCode:a(m)},null,8,["htmlCode"])]),_:1}),s[3]||(s[3]=o("",13))])}}});export{D as __pageData,v as default};
