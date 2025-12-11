import{p as o,C as a,c as d,o as h,j as r,a4 as c,G as s,a2 as k,a as t,a5 as m,k as i,w as u}from"./chunks/framework.xbTv8SNN.js";import{R as E,k as g}from"./chunks/index.T3-yMMRo.js";const b=`<!DOCTYPE html>\r
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
\r
        #map {\r
            height: 100%;\r
            width: 100%;\r
        }\r
        #local-info {\r
            position: absolute;\r
            bottom: 0px;\r
            left: 20px;\r
        }\r
        #loading {\r
            color: white;\r
            position: absolute;\r
            bottom: 0px;\r
            right: 20px;\r
            user-select: none;\r
        }\r
    </style>\r
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
    <body>\r
        <div id="map"></div>\r
        <div id="local-info">-</div>\r
        <div id="loading"></div>\r
\r
        <script type="module">\r
            import * as THREE from "three";\r
            import * as tt from "three-tile";\r
            import * as plugin from "three-tile/plugin";\r
            import * as utils from "utils";\r
\r
            console.log(\`three-tile v\${tt.version} start!\`);\r
\r
            // 创建地图\r
            const map = tt.TileMap.create({\r
                // 影像数据源\r
                imgSource: [new plugin.ArcGisSource(), new plugin.GDSource({ style: "8" })],\r
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
\r
            // 地图添加到场景\r
            viewer.scene.add(map);\r
\r
            //==============================================================\r
            // 地图中心经纬度高度（m）转为世界坐标\r
            const centerPostion = map.geo2world(new THREE.Vector3(108, 36, 0));\r
            // 摄像机经纬度高度（m）转为世界坐标\r
            const cameraPosition = map.geo2world(new THREE.Vector3(108, 20, 8000000));\r
            viewer.flyTo(centerPostion, cameraPosition, false);\r
            viewer.controls.maxDistance = 10000000;\r
\r
            //==============================================================\r
            // 显示地图加载进度\r
            utils.showLoading(map, "#loading");\r
            // 显示鼠标位置经纬度和海拔\r
            utils.showLocation(viewer, map, "#local-info");\r
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
        <\/script>\r
    </body>\r
</html>\r
`,y={id:"_28-设置地图经纬度范围",tabindex:"-1"},C=JSON.parse('{"title":"28. 设置地图经纬度范围","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/28.setMapBounds/index.md","filePath":"3.exampls/28.setMapBounds/index.md","lastUpdated":1764927117000}'),w={name:"3.exampls/28.setMapBounds/index.md"},D=Object.assign(w,{setup(v){const e=o(!0);return(x,n)=>{const l=a("Badge"),p=a("ClientOnly");return h(),d("div",null,[r("h1",y,[n[1]||(n[1]=t("28. 设置地图经纬度范围")),s(l,{type:"tip",text:"≥0.11.5"}),n[2]||(n[2]=t()),n[3]||(n[3]=r("a",{class:"header-anchor",href:"#_28-设置地图经纬度范围","aria-label":'Permalink to "28. 设置地图经纬度范围<Badge type="tip" text="≥0.11.5" />"'},"​",-1))]),c(s(i(E),null,null,512),[[m,e.value]]),s(p,null,{default:u(()=>[s(i(g),{title:"example",description:"设置地图经纬度范围：bounds: [60, 0, 145, 60]",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:n[0]||(n[0]=()=>{e.value=!1}),htmlCode:i(b)},null,8,["htmlCode"])]),_:1}),n[4]||(n[4]=k("",5))])}}});export{C as __pageData,D as default};
