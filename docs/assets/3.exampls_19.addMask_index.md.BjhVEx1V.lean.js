import{p as r,C as t,c as p,o as h,j as e,a4 as k,G as n,a2 as o,a as E,a5 as c,k as i,w as d}from"./chunks/framework.xbTv8SNN.js";import{R as g,k as u}from"./chunks/index.T3-yMMRo.js";const m=`<!DOCTYPE html>\r
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
        <div id="local-info">-</div>\r
\r
        <script type="module">\r
            import * as THREE from "three";\r
            import * as tt from "three-tile";\r
            import * as plugin from "three-tile/plugin";\r
\r
            console.log(\`three-tile v\${tt.version} start!\`);\r
\r
            const citySource = new plugin.GeoJSONSource({\r
                url: "../../map/cityBounds.geojson",\r
                dataType: "geojson",\r
                style: {\r
                    stroke: true,\r
                    color: "red",\r
                    weight: 2,\r
                },\r
            });\r
\r
            const cityMaskSource = new plugin.GeoJSONSource({\r
                url: "../../map/cityBoundsMask.geojson",\r
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
                imgSource: [new plugin.ArcGisSource(), cityMaskSource, citySource],\r
                // 地形数据源\r
                demSource: new plugin.ArcGisDemSource(),\r
                // 中央经线\r
                lon0: 90,\r
                // 最小缩放级别\r
                minLevel: 6,\r
            });\r
            // 地图旋转到xz平面\r
            map.rotateX(-Math.PI / 2);\r
\r
            // 初始化场景\r
            const viewer = new plugin.GLViewer("#map");\r
            viewer.controls.maxDistance = 700000;\r
\r
            // 地图添加到场景\r
            viewer.scene.add(map);\r
\r
            //==============================================================\r
            // 地图中心经纬度高度（m）转为世界坐标\r
            const centerPostion = map.geo2world(new THREE.Vector3(109.4, 36.2, 0));\r
            // 摄像机经纬度高度（m）转为世界坐标\r
            const cameraPosition = map.geo2world(new THREE.Vector3(109.4, 35.5, 200000));\r
\r
            viewer.camera.position.copy(cameraPosition);\r
            viewer.controls.target.copy(centerPostion);\r
\r
            //==============================================================\r
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
        <\/script>\r
    </body>\r
</html>\r
`,v=JSON.parse('{"title":"19. 显示行政区域地图","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/19.addMask/index.md","filePath":"3.exampls/19.addMask/index.md","lastUpdated":1761902788000}'),y={name:"3.exampls/19.addMask/index.md"},S=Object.assign(y,{setup(b){const a=r(!0);return(F,s)=>{const l=t("ClientOnly");return h(),p("div",null,[s[1]||(s[1]=e("h1",{id:"_19-显示行政区域地图",tabindex:"-1"},[E("19. 显示行政区域地图 "),e("a",{class:"header-anchor",href:"#_19-显示行政区域地图","aria-label":'Permalink to "19. 显示行政区域地图"'},"​")],-1)),k(n(i(g),null,null,512),[[c,a.value]]),n(l,null,{default:d(()=>[n(i(u),{title:"example",description:"添加行政区域GeoJSON遮罩",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{a.value=!1}),htmlCode:i(m)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=o("",6))])}}});export{v as __pageData,S as default};
