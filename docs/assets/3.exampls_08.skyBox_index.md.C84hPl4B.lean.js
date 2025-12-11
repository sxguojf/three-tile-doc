import{p as a,C as l,c as p,o,j as t,a4 as h,G as n,a2 as d,a as k,a5 as c,k as e,w as m}from"./chunks/framework.xbTv8SNN.js";import{R as u,k as g}from"./chunks/index.T3-yMMRo.js";const E=`<!DOCTYPE html>\r
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
            // 创建地图\r
            const map = tt.TileMap.create({\r
                // 影像数据源\r
                imgSource: new plugin.ArcGisSource(),\r
                // 地形数据源\r
                demSource: new plugin.ArcGisDemSource(),\r
                lon0: 90,\r
                minLevel: 5,\r
            });\r
            // 地图旋转到xz平面\r
            map.rotateX(-Math.PI / 2);\r
\r
            // 初始化场景\r
            const viewer = new plugin.GLViewer("#map");\r
            viewer.renderer.toneMapping = THREE.ACESFilmicToneMapping;\r
            // viewer.renderer.toneMappingExposure = 1.2;\r
            // viewer.scene.fog?.color.set(0x928b8c);\r
            viewer.scene.background = 0;\r
\r
            // 地图添加到场景\r
            viewer.scene.add(map);\r
\r
            //==============================================================\r
            // 显示地图加载进度\r
            utils.showLoading(map, "#loading");\r
            utils.addCompass(viewer, "#compass-container");\r
\r
            //==============================================================\r
            function fly() {\r
                const centerGeo = new THREE.Vector3(94, 36, 4000);\r
                const cameraGeo = new THREE.Vector3(94.03, 36.02, 4100);\r
                // 地图中心经纬度高度（m）转为世界坐标\r
                const centerPostion = map.geo2world(centerGeo);\r
                // 摄像机经纬度高度（m）转为世界坐标\r
                const cameraPosition = map.geo2world(cameraGeo);\r
                // 摄像机飞到指定位置\r
                viewer.flyTo(centerPostion, cameraPosition, false);\r
            }\r
            fly();\r
\r
            //==============================================================\r
            //添加蓝天白云\r
            const skybox = new THREE.CubeTextureLoader()\r
                .setPath("../../skybox/")\r
                .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);\r
            viewer.scene.background = skybox;\r
        <\/script>\r
    </body>\r
</html>\r
`,F=JSON.parse('{"title":"8. 添加蓝天白云","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/08.skyBox/index.md","filePath":"3.exampls/08.skyBox/index.md","lastUpdated":1762073091000}'),y={name:"3.exampls/08.skyBox/index.md"},C=Object.assign(y,{setup(b){const i=a(!0);return(x,s)=>{const r=l("ClientOnly");return o(),p("div",null,[s[1]||(s[1]=t("h1",{id:"_8-添加蓝天白云",tabindex:"-1"},[k("8. 添加蓝天白云 "),t("a",{class:"header-anchor",href:"#_8-添加蓝天白云","aria-label":'Permalink to "8. 添加蓝天白云"'},"​")],-1)),h(n(e(u),null,null,512),[[c,i.value]]),n(r,null,{default:m(()=>[n(e(g),{title:"example",description:"添加蓝天白云",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{i.value=!1}),htmlCode:e(E)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=d("",4))])}}});export{F as __pageData,C as default};
