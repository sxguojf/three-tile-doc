import{p as s,C as l,c as o,o as p,j as i,a4 as d,G as e,a2 as c,a as m,a5 as h,k as r,w as u}from"./chunks/framework.xbTv8SNN.js";import{R as g,k as v}from"./chunks/index.T3-yMMRo.js";const b=`<!DOCTYPE html>\r
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
\r
        #compass-container {\r
            position: absolute;\r
            height: 75px;\r
            width: 75px;\r
            left: 30px;\r
            bottom: 50px;\r
        }\r
\r
        #loading {\r
            position: absolute;\r
            bottom: 0px;\r
            left: 20px;\r
        }\r
\r
        .tools {\r
            position: absolute;\r
            top: 20px;\r
            right: 20px;\r
            background-color: #3335;\r
            padding: 10px 10px;\r
            border-radius: 5px;\r
            width: 320px;\r
        }\r
    </style>\r
    <body>\r
        <div id="map"></div>\r
        <!-- 罗盘 -->\r
        <div id="compass-container"></div>\r
        <div id="loading">-</div>\r
        <div class="tools">\r
            <label for="terrainScale">地形夸张倍数：</label>\r
            <input\r
                type="range"\r
                id="terrainScale"\r
                min="1"\r
                max="5"\r
                step="0.1"\r
                value="1"\r
                oninput="terrainScaleOutput.value = this.value; setTerrainScale(this.value)" />\r
            <output id="terrainScaleOutput" name="result">1</output>\r
        </div>\r
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
            //==============================================================\r
            // 显示地图加载进度\r
            utils.showLoading(map, "#loading");\r
\r
            // 添加罗盘\r
            utils.addCompass(viewer, "#compass-container");\r
\r
            //==============================================================\r
            function fly() {\r
                // 地图中心经纬度高度（m）转为世界坐标\r
                const centerPostion = map.geo2world(new THREE.Vector3(86.95, 27.98, 1));\r
                // 摄像机经纬度高度（m）转为世界坐标\r
                const cameraPosition = map.geo2world(new THREE.Vector3(86.95, 28.5, 10));\r
                // 摄像机飞到指定位置\r
                viewer.flyTo(centerPostion, cameraPosition, false);\r
            }\r
            fly();\r
\r
            //==============================================================\r
            //地形夸张\r
            window.setTerrainScale = (scale) => {\r
                map.scale.z = scale;\r
            };\r
        <\/script>\r
    </body>\r
</html>\r
`,y=JSON.parse('{"title":"10. 地形夸张","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/10.terrainScale/index.md","filePath":"3.exampls/10.terrainScale/index.md","lastUpdated":1761902788000}'),x={name:"3.exampls/10.terrainScale/index.md"},S=Object.assign(x,{setup(w){const t=s(!0);return(k,n)=>{const a=l("ClientOnly");return p(),o("div",null,[n[1]||(n[1]=i("h1",{id:"_10-地形夸张",tabindex:"-1"},[m("10. 地形夸张 "),i("a",{class:"header-anchor",href:"#_10-地形夸张","aria-label":'Permalink to "10. 地形夸张"'},"​")],-1)),d(e(r(g),null,null,512),[[h,t.value]]),e(a,null,{default:u(()=>[e(r(v),{title:"example",description:"拖动右上角滑块夸张地形",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:n[0]||(n[0]=()=>{t.value=!1}),htmlCode:r(b)},null,8,["htmlCode"])]),_:1}),n[2]||(n[2]=c("",2))])}}});export{y as __pageData,S as default};
