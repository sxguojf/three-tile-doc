import{p,C as t,c as r,o as h,j as l,a4 as k,G as i,a2 as d,a as E,a5 as o,k as n,w as c}from"./chunks/framework.CJqd0DOR.js";import{R as g,k as y}from"./chunks/index.Ga076E9x.js";const b=`<!DOCTYPE html>\r
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
        button {\r
            margin: 0 10px;\r
        }\r
        button:hover {\r
            background-color: darkcyan;\r
        }\r
    </style>\r
    <body>\r
        <div id="map"></div>\r
        <div id="loading">-</div>\r
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
            //==============================================================\r
            // 加载矢量瓦片\r
\r
            // 1. 注册矢量瓦片MVT加载器\r
            tt.registerImgLoader(new plugin.MVTLoader());\r
\r
            // 2. 声明矢量瓦片数据源\r
            export const mvtTest = new plugin.MVTSource({\r
                // maxLevel: 14,\r
                url: "https://api.maptiler.com/tiles/v3-openmaptiles/{z}/{x}/{y}.pbf?key=4SbPVVkPORGgXetw2vsf",\r
                style: {\r
                    layer: {\r
                        boundary: {\r
                            color: "blue",\r
                            weight: 1,\r
                            shadowBlur: 3,\r
                            shadowColor: "black",\r
                            // fill: true,\r
                            // dashArray: [3, 3],\r
                        },\r
                        transportation: {\r
                            // visible: false,\r
                            color: "yellow",\r
                            weight: 1,\r
                            shadowBlur: 2,\r
                            shadowColor: "black",\r
                        },\r
                        water: {\r
                            fill: true,\r
                            color: "red",\r
                            weight: 0,\r
                            fillColor: "skyblue",\r
                            fillOpacity: 0.3,\r
                        },\r
                        // place: {\r
                        //     minLevel: 6,\r
                        //     fill: true,\r
                        //     fillColor: "white",\r
                        //     fillOpacity: 1,\r
                        //     shadowBlur: 2,\r
                        //     shadowColor: "black",\r
                        // },\r
                    },\r
                },\r
            });\r
\r
            // 创建地图\r
            const map = tt.TileMap.create({\r
                // 影像数据源\r
                imgSource: [new plugin.ArcGisSource(), mvtTest],\r
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
            const centerPostion = map.geo2world(new THREE.Vector3(109, 35, 0));\r
            // 摄像机经纬度高度（m）转为世界坐标\r
            const cameraPosition = map.geo2world(new THREE.Vector3(109, 34, 5e5));\r
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
        <\/script>\r
    </body>\r
</html>\r
`,C=JSON.parse('{"title":"添加矢量瓦片","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/14.addMVT.md","filePath":"3.exampls/14.addMVT.md","lastUpdated":1761471651000}'),u={name:"3.exampls/14.addMVT.md"},B=Object.assign(u,{setup(m){const a=p(!0);return(F,s)=>{const e=t("ClientOnly");return h(),r("div",null,[s[1]||(s[1]=l("h1",{id:"添加矢量瓦片",tabindex:"-1"},[E("添加矢量瓦片 "),l("a",{class:"header-anchor",href:"#添加矢量瓦片","aria-label":'Permalink to "添加矢量瓦片"'},"​")],-1)),k(i(n(g),null,null,512),[[o,a.value]]),i(e,null,{default:c(()=>[i(n(y),{title:"example",description:"加载矢量数据，数据来自： https://api.maptiler.com/tiles",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{a.value=!1}),htmlCode:n(b)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=d("",10))])}}});export{C as __pageData,B as default};
