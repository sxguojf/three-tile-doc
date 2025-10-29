import{p as t,C as l,c as p,o,j as a,a4 as h,G as s,a2 as k,a as d,a5 as c,k as i,w as E}from"./chunks/framework.CJqd0DOR.js";import{R as m,k as g}from"./chunks/index.Ga076E9x.js";const u=`<!DOCTYPE html>\r
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
        #local-info {\r
            position: absolute;\r
            bottom: 10px;\r
            left: 20px;\r
        }\r
        #loading {\r
            position: absolute;\r
            bottom: 10px;\r
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
        <div id="local-info">-</div>\r
        <div id="loading">-</div>\r
\r
        <script type="module">\r
            import * as THREE from "three";\r
            import * as tt from "three-tile";\r
            import * as plugin from "three-tile/plugin";\r
\r
            console.log(\`three-tile v\${tt.version} start!\`);\r
\r
            const citySource = new plugin.GeoJSONSource({\r
                url: "../map/cityBounds.geojson",\r
                dataType: "geojson",\r
                style: {\r
                    stroke: true,\r
                    color: "green",\r
                    weight: 1,\r
                    shadowColor: "black",\r
                    shadowBlur: 3,\r
                    shadowOffset: [2, 2],\r
                },\r
            });\r
\r
            const cityMaskSource = new plugin.GeoJSONSource({\r
                url: "../map/cityBoundsMask.geojson",\r
                dataType: "geojson",\r
                style: {\r
                    stroke: false,\r
                    fill: true,\r
                    fillColor: "black",\r
                    fillOpacity: 0.8,\r
                },\r
            });\r
\r
            tt.registerImgLoader(new plugin.GeoJSONLoader());\r
\r
            // 创建地图\r
            const map = tt.TileMap.create({\r
                // 影像数据源\r
                imgSource: [new plugin.BingSource(), cityMaskSource, citySource],\r
                // 地形数据源\r
                demSource: new plugin.ArcGisDemSource(),\r
                // 中央经线\r
                lon0: 90,\r
                // 最小缩放级别\r
                minLevel: 6,\r
                // 地图显示范围\r
                bounds: [107.6, 37.5, 110.6, 35.3],\r
            });\r
            // 地图旋转到xz平面\r
            map.rotateX(-Math.PI / 2);\r
\r
            // 初始化场景\r
            const viewer = new plugin.GLViewer("#map");\r
            viewer.scene.background = new THREE.Color(0x112233);\r
            viewer.scene.fog.color.set(viewer.scene.background);\r
\r
            // 地图添加到场景\r
            viewer.scene.add(map);\r
\r
            //==============================================================\r
            // 地图中心经纬度高度（m）转为世界坐标\r
            const centerPostion = map.geo2world(new THREE.Vector3(109.2, 36.2, 0));\r
            // 摄像机经纬度高度（m）转为世界坐标\r
            const cameraPosition = map.geo2world(new THREE.Vector3(109.2, 35.8, 250000));\r
\r
            viewer.camera.position.copy(cameraPosition);\r
            viewer.controls.target.copy(centerPostion);\r
\r
            //==============================================================\r
            // 显示鼠标位置经纬度高度\r
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
            // ==============================================================\r
            // 限制地图缩小（设置摄像机到地图的最大距离）\r
            viewer.controls.maxDistance = 500000;\r
            // ==============================================================\r
            // 限制地图移动范围\r
\r
            const minPan = map.geo2world(new THREE.Vector3(107.6, 37.5)); // 西南角经纬度\r
            const maxPan = map.geo2world(new THREE.Vector3(110.6, 35.3)); // 东北角经纬度\r
\r
            // 加一个范围边框\r
            const box = new THREE.Box3(minPan, new THREE.Vector3(maxPan.x, 3000, maxPan.z));\r
            const boxHelper = new THREE.Box3Helper(box);\r
            viewer.scene.add(boxHelper);\r
\r
            const vec = new THREE.Vector3();\r
            viewer.controls.addEventListener("change", function () {\r
                vec.copy(viewer.controls.target);\r
                viewer.controls.target.clamp(minPan, maxPan);\r
                vec.sub(viewer.controls.target);\r
                viewer.camera.position.sub(vec);\r
            });\r
        <\/script>\r
    </body>\r
</html>\r
`,C=JSON.parse('{"title":"限制地图移动和缩小","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/31.limitPan.md","filePath":"3.exampls/31.limitPan.md","lastUpdated":1761368239000}'),y={name:"3.exampls/31.limitPan.md"},x=Object.assign(y,{setup(v){const e=t(!0);return(w,n)=>{const r=l("ClientOnly");return o(),p("div",null,[n[1]||(n[1]=a("h1",{id:"限制地图移动和缩小",tabindex:"-1"},[d("限制地图移动和缩小 "),a("a",{class:"header-anchor",href:"#限制地图移动和缩小","aria-label":'Permalink to "限制地图移动和缩小"'},"​")],-1)),h(s(i(m),null,null,512),[[c,e.value]]),s(r,null,{default:E(()=>[s(i(g),{title:"Example",description:"地图只能在设定范围移动",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:n[0]||(n[0]=()=>{e.value=!1}),htmlCode:i(u)},null,8,["htmlCode"])]),_:1}),n[2]||(n[2]=k("",4))])}}});export{C as __pageData,x as default};
