import{p as a,C as l,c as s,o as c,j as o,a4 as d,G as r,a2 as p,a as m,a5 as u,k as n,w as h}from"./chunks/framework.BZ48x_LH.js";import{R as w,k as v}from"./chunks/index.DCj37L2o.js";const b=`<!DOCTYPE html>\r
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
            text-shadow: 0 0 1px black;\r
        }\r
\r
        #map {\r
            height: 100%;\r
            width: 100%;\r
        }\r
        #map2 {\r
            border: 5px double #555;\r
            width: 100%;\r
            height: 100%;\r
        }\r
        .map2-box {\r
            padding: 15px;\r
            height: 300px;\r
            width: 300px;\r
            position: absolute;\r
            bottom: 0px;\r
            right: 0px;\r
            background-color: #ffe;\r
            box-shadow: 0 0 10px #000;\r
        }\r
        #local-info {\r
            position: absolute;\r
            bottom: 0px;\r
            left: 20px;\r
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
        <div class="map2-box">\r
            <div id="map2">\r
                <svg style="position: absolute" width="300" height="300" viewBox="0 0 300 300">\r
                    <!-- 横线 -->\r
                    <line x1="0" y1="131" x2="262" y2="130" stroke="black" stroke-width="0.5" />\r
                    <!-- 竖线 -->\r
                    <line x1="131" y1="0" x2="131" y2="262" stroke="black" stroke-width="0.5" />\r
                </svg>\r
            </div>\r
        </div>\r
        <div id="local-info">-</div>\r
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
                imgSource: [\r
                    new plugin.ArcGisSource(),\r
                    new plugin.ArcGisSource({ style: "Reference/World_Boundaries_and_Places" }),\r
                ],\r
                // 地形数据源\r
                demSource: new plugin.ArcGisDemSource(),\r
                // 中央子午线经度\r
                lon0: 90,\r
                // 地图经纬度范围\r
                bounds: [60, 0, 145, 60],\r
            });\r
            // 地图旋转到xz平面\r
            map.rotateX(-Math.PI / 2);\r
\r
            // 初始化场景\r
            const viewer = new plugin.GLViewer("#map");\r
            viewer.scene.background = new THREE.Color(0x112233);\r
            viewer.scene.fog = null;\r
\r
            // 地图添加到场景\r
            viewer.scene.add(map);\r
\r
            //==============================================================\r
            // 地图中心经纬度高度（m）转为世界坐标\r
            const centerPostion = map.geo2world(new THREE.Vector3(108, 36, 0));\r
            // 摄像机经纬度高度（m）转为世界坐标\r
            const cameraPosition = map.geo2world(new THREE.Vector3(108, 32, 1000000));\r
            viewer.flyTo(centerPostion, cameraPosition, false);\r
            viewer.controls.maxDistance = 10000000;\r
\r
            //==============================================================\r
            function showLocation(viewer, map, id) {\r
                const pointer = new THREE.Vector2();\r
                viewer.container.addEventListener("pointermove", (evt) => {\r
                    const lonlat = plugin.getLocalFromMouse(evt, map, viewer.camera);\r
                    if (lonlat) {\r
                        const el = document.querySelector(id);\r
                        el.innerHTML = \`经度:\${lonlat.x.toFixed(6)}° ,  纬度:\${lonlat.y.toFixed(6)}°\`;\r
                    }\r
                });\r
            }\r
            showLocation(viewer, map, "#local-info");\r
\r
            //==============================================================\r
            function addBounds(map) {\r
                const bounds = map.bounds;\r
                if (bounds) {\r
                    const projBounds = map.projection.getProjBoundsFromLonLat(bounds);\r
                    const box = new THREE.Box3(\r
                        new THREE.Vector3(projBounds[0], projBounds[1], 0),\r
                        new THREE.Vector3(projBounds[2], projBounds[3], 5000)\r
                    );\r
                    const boxHelper = new THREE.Box3Helper(box);\r
                    map.add(boxHelper);\r
                }\r
            }\r
            addBounds(map);\r
\r
            //==============================================================\r
            const map2 = tt.TileMap.create({\r
                // 影像数据源\r
                imgSource: [new plugin.GDSource({ style: "7", subdomains: "1" })],\r
                // 中央子午线经度\r
                lon0: 90,\r
                // 地图经纬度范围\r
                bounds: [60, 0, 145, 60],\r
            });\r
            map2.LODThreshold = 0.5;\r
            map2.rotateX(-Math.PI / 2);\r
\r
            const viewer2 = new plugin.GLViewer("#map2");\r
            viewer2.scene.background = new THREE.Color(0x112233);\r
            viewer2.controls.enableRotate = false;\r
            viewer2.controls.zoomToCursor = true;\r
            viewer2.ambLight.intensity = 3.0;\r
\r
            viewer2.scene.add(map2);\r
\r
            viewer.controls.addEventListener("change", (evt) => {\r
                const center = viewer.controls.target;\r
                viewer2.controls.target.copy(center);\r
                // viewer2.camera.position.set(center.x, 600000, center.z);\r
                viewer2.camera.position.set(center.x, viewer.camera.position.y, center.z);\r
            });\r
            viewer.controls.dispatchEvent({ type: "change" });\r
        <\/script>\r
    </body>\r
</html>\r
`,_=JSON.parse('{"title":"二维缩略地图","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/33.2DMap.md","filePath":"3.exampls/33.2DMap.md","lastUpdated":1761368239000}'),g={name:"3.exampls/33.2DMap.md"},E=Object.assign(g,{setup(x){const t=a(!0);return(f,e)=>{const i=l("ClientOnly");return c(),s("div",null,[e[1]||(e[1]=o("h1",{id:"二维缩略地图",tabindex:"-1"},[m("二维缩略地图 "),o("a",{class:"header-anchor",href:"#二维缩略地图","aria-label":'Permalink to "二维缩略地图"'},"​")],-1)),d(r(n(w),null,null,512),[[u,t.value]]),r(i,null,{default:h(()=>[r(n(v),{title:"Example",description:"右下角显示二维缩略图",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),htmlCode:n(b)},null,8,["htmlCode"])]),_:1}),e[2]||(e[2]=p("",3))])}}});export{_ as __pageData,E as default};
