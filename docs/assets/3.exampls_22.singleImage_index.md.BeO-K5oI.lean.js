import{p as r,C as l,c as p,o as h,j as e,a4 as k,G as n,a2 as d,a as o,a5 as c,k as i,w as g}from"./chunks/framework.xbTv8SNN.js";import{R as E,k as m}from"./chunks/index.T3-yMMRo.js";const u=`<!DOCTYPE html>\r
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
            color: white;\r
            position: absolute;\r
            bottom: 0px;\r
            left: 20px;\r
            user-select: none;\r
        }\r
\r
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
                    "three-tile/plugin": "https://unpkg.com/three-tile@0.11.10/dist/plugin",\r
                    "utils": "../utils/index.js"\r
                }\r
            }\r
        <\/script>\r
\r
        <script type="module">\r
            import * as THREE from "three";\r
            import * as tt from "three-tile";\r
            import * as plugin from "three-tile/plugin";\r
            import * as utils from "utils";\r
\r
            console.log(\`three-tile v\${tt.version} start!\`);\r
\r
            // 注册单影像加载器\r
            tt.registerImgLoader(new plugin.SingleImageLoader());\r
\r
            // 贴地图片数据源\r
            export const singleImage = new tt.TileSource({\r
                dataType: "single-image",\r
                url: "../../images/test.jpg",\r
                bounds: [108.68808746337891, 33.92199531197548, 108.88240814208984, 34.05727051198483],\r
            });\r
\r
            // 创建地图\r
            const map = tt.TileMap.create({\r
                // 影像数据源\r
                imgSource: [new plugin.ArcGisSource(), singleImage],\r
                // 地形数据源\r
                demSource: new plugin.ArcGisDemSource(),\r
                lon0: 90,\r
                minLevel: 2,\r
            });\r
            // 地图旋转到xz平面\r
            map.rotateX(-Math.PI / 2);\r
            // 地形夸张2倍\r
            // map.scale.setZ(2.5);\r
\r
            // 初始化场景\r
            const viewer = new plugin.GLViewer("#map");\r
            viewer.scene.background = 0;\r
\r
            // 地图添加到场景\r
            viewer.scene.add(map);\r
\r
            //==============================================================\r
            // 显示地图加载进度\r
            utils.showLoading(map, "#loading");\r
            // 添加罗盘\r
            utils.addCompass(viewer, "#compass-container");\r
            // 添加蓝天白云\r
            utils.addSkyBox(viewer);\r
            //==============================================================\r
            // flyto 目标位置\r
            const bounds = singleImage.bounds;\r
            const sw = map.geo2world(new THREE.Vector3(bounds[0], bounds[1]));\r
            const ne = map.geo2world(new THREE.Vector3(bounds[2], bounds[3]));\r
            const center = new THREE.Vector3((ne.x + sw.x) / 2, 0, (ne.z + sw.z) / 2);\r
            viewer.flyTo(center, new THREE.Vector3(center.x, 20000, center.z - 20000));\r
        <\/script>\r
    </body>\r
</html>\r
`,v=JSON.parse('{"title":"22. 贴地图片","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/22.singleImage/index.md","filePath":"3.exampls/22.singleImage/index.md","lastUpdated":1761902788000}'),y={name:"3.exampls/22.singleImage/index.md"},x=Object.assign(y,{setup(b){const a=r(!0);return(w,s)=>{const t=l("ClientOnly");return h(),p("div",null,[s[1]||(s[1]=e("h1",{id:"_22-贴地图片",tabindex:"-1"},[o("22. 贴地图片 "),e("a",{class:"header-anchor",href:"#_22-贴地图片","aria-label":'Permalink to "22. 贴地图片"'},"​")],-1)),k(n(i(E),null,null,512),[[c,a.value]]),n(t,null,{default:g(()=>[n(i(m),{title:"example",description:"单张图片贴地",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{a.value=!1}),htmlCode:i(u)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=d("",2))])}}});export{v as __pageData,x as default};
