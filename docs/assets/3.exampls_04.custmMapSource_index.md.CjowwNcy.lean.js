import{p,C as t,c as r,o as h,j as l,a4 as k,G as i,a2 as d,a as o,a5 as c,k as a,w as g}from"./chunks/framework.BQo5SrHh.js";import{R as E,k as u}from"./chunks/index.UKPBqX0I.js";const y="/three-tile-doc/assets/image.DPtNRNOY.png",m=`<!DOCTYPE html>\r
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
            text-shadow: 0 0 2px black;\r
        }\r
        #map {\r
            height: 100%;\r
            width: 100%;\r
        }\r
        .statubar {\r
            display: flex;\r
            flex-direction: row;\r
            justify-content: center;\r
        }\r
        .tools {\r
            position: absolute;\r
            top: 20px;\r
            right: 20px;\r
        }\r
        button {\r
            padding: 0 10px;\r
            border: 1px solid darkcyan;\r
            border-radius: 5px;\r
\r
            background-color: #0003;\r
        }\r
        button:hover {\r
            background-color: darkcyan;\r
        }\r
        #loading {\r
            position: absolute;\r
            bottom: 0px;\r
            left: 20px;\r
        }\r
    </style>\r
    <body>\r
        <div id="map"></div>\r
        <div class="statubar">\r
            <div id="loading">-</div>\r
        </div>\r
        <div class="tools">\r
            <button onclick="bing()">Bing</button>\r
            <button onclick="gaode()">ArcGis影像+高德地名</button>\r
            <button onclick="arcgis()">ArcGIS</button>\r
            <button onclick="google()">google</button>\r
        </div>\r
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
            //=====================================================================================\r
            // 地图中心经纬度高度（m）转为世界坐标\r
            const centerPostion = map.geo2world(new THREE.Vector3(100, 35, 0));\r
            // 摄像机经纬度高度（m）转为世界坐标\r
            const cameraPosition = map.geo2world(new THREE.Vector3(100, 10, 5000 * 1000));\r
            // 摄像机飞到指定位置\r
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
            // 切换数据源\r
            window.bing = function () {\r
                console.log("bing");\r
                // 用内置的bing数据源\r
                map.imgSource = new plugin.BingSource();\r
                // map.reload();\r
            };\r
\r
            window.arcgis = function () {\r
                console.log("arcgis");\r
                // 用Source的create方法创建自定义数据源\r
                const imgSource = tt.TileSource.create({\r
                    // 瓦片url模板\r
                    url: "https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",\r
                });\r
                map.imgSource = imgSource;\r
                // map.reload();\r
            };\r
\r
            window.gaode = function () {\r
                console.log("gaode");\r
                // 用内置的bing数据源\r
                map.imgSource = [new plugin.ArcGisSource(), new plugin.GDSource()];\r
                // map.reload();\r
            };\r
\r
            window.google = function () {\r
                console.log("opentopomap");\r
                map.imgSource = new plugin.GoogleSource();\r
            };\r
        <\/script>\r
    </body>\r
</html>\r
`,B=JSON.parse('{"title":"4. 自定义地图数据源","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/04.custmMapSource/index.md","filePath":"3.exampls/04.custmMapSource/index.md","lastUpdated":1761902788000}'),b={name:"3.exampls/04.custmMapSource/index.md"},x=Object.assign(b,{setup(F){const n=p(!0);return(A,s)=>{const e=t("ClientOnly");return h(),r("div",null,[s[1]||(s[1]=l("h1",{id:"_4-自定义地图数据源",tabindex:"-1"},[o("4. 自定义地图数据源 "),l("a",{class:"header-anchor",href:"#_4-自定义地图数据源","aria-label":'Permalink to "4. 自定义地图数据源"'},"​")],-1)),k(i(a(E),null,null,512),[[c,n.value]]),i(e,null,{default:g(()=>[i(a(u),{title:"Example",description:"点击地图右上角厂商名称切换地图数据",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{n.value=!1}),htmlCode:a(m)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=d("",36))])}}});export{B as __pageData,x as default};
