import{p as l,C as i,c as s,o as d,j as a,a4 as p,G as t,a as c,a5 as m,k as e,w as h}from"./chunks/framework.xbTv8SNN.js";import{R as u,k as v}from"./chunks/index.T3-yMMRo.js";const w=`<!DOCTYPE html>\r
<html lang="zh-cn">\r
    <head>\r
        <meta charset="utf-8" />\r
        <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />\r
        <title>three-tile最小化应用</title>\r
    </head>\r
    <style>\r
        html,\r
        body {\r
            color: #eee;\r
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
            position: absolute;\r
            bottom: 0px;\r
            right: 20px;\r
        }\r
\r
        #local-info {\r
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
       \r
    </style>\r
    <body>\r
        <div id="map"></div>\r
        <div id="loading">-</div>\r
        <div id="local-info">-</div>\r
        <div id="compass-container"></div>\r
        <div class="tools-container">\r
            <div class="visible-container">\r
                <label for="autoRotate">\r
                    <input type="checkbox" id="autoRotate" onchange="autoRotate(event)" />\r
                    自动旋转\r
                </label>\r
            </div>\r
           \r
\r
        <script type="importmap">\r
            {\r
                "imports": {\r
                    "three": "https://unpkg.com/three@0.171.0/build/three.module.js",\r
                    "three/addons/": "https://unpkg.com/three@0.171.0/examples/jsm/",\r
                    "three-tile": "https://unpkg.com/three-tile@0.11.10/dist",\r
                    "three-tile/plugin": "https://unpkg.com/three-tile@0.11.10/dist/plugin",\r
                    "splat": "https://unpkg.com/@pmndrs/vanilla@1.25.0/core/Splat.js",\r
                    "utils": "../utils/index.js"\r
                }\r
            }\r
        <\/script>\r
\r
        <script type="module">\r
            import * as THREE from "three";\r
            import * as tt from "three-tile";\r
            import * as plugin from "three-tile/plugin";\r
            import { TransformControls } from "three/addons/controls/TransformControls.js";\r
            import { GUI } from "three/addons/libs/lil-gui.module.min.js";\r
            import * as utils from "utils";\r
            import { Splat, SplatLoader } from "splat";\r
\r
            console.log(\`three-tile v\${tt.version} start!\`);\r
\r
            // 创建地图\r
            const map = tt.TileMap.create({\r
                // 影像数据源\r
                imgSource: [new plugin.BingSource()],\r
                // 地形数据源\r
                demSource: new plugin.ArcGisDemSource(),\r
                lon0: 90,\r
                minLevel: 2,\r
            });\r
            // 地图旋转到xz平面\r
            map.rotateX(-Math.PI / 2);\r
\r
            // 初始化场景\r
            const viewer = new plugin.GLViewer("#map", { logarithmicDepthBuffer: false });\r
            viewer.controlsMode = "orbit";\r
\r
            // 地图添加到场景\r
            viewer.scene.add(map);\r
\r
            //==============================================================\r
            // 显示地图加载进度\r
            utils.showLoading(map);\r
            utils.showLocation(viewer, map, "#local-info");\r
            utils.addCompass(viewer, "#compass-container");\r
            utils.addSkyBox(viewer);\r
\r
            //==============================================================\r
            // 防止摄像机进入地下\r
            setTimeout(\r
                () => viewer.addEventListener("update", () => plugin.limitCameraHeight(map, viewer.camera)),\r
                5000\r
            );\r
\r
            //==============================================================\r
            // flyto 目标位置\r
            const centerPosition = map.geo2world(new THREE.Vector3(6.20354, 45.864067, 600));\r
            const cameraPosition = map.geo2world(new THREE.Vector3(6.20354, 45.865, 600));\r
            viewer.flyTo(centerPosition, cameraPosition, false);\r
            viewer.scene.fog = null;\r
\r
            //==============================================================\r
            const loader = new SplatLoader(viewer.renderer, 1000);\r
\r
            const loadState = await loader.loadAsync(\`../../model/Halo_Believe.splat\`);\r
            // const loadState = await loader.loadAsync(\`../../model/train.splat\`);\r
            // const loadState = await loader.loadAsync(\`../../model/cat.splat\`);\r
            const splat = new Splat(loadState, viewer.camera);\r
            viewer.scene.add(splat);\r
            splat.scale.setScalar(20);\r
            splat.position.copy(centerPosition).add(new THREE.Vector3(0, 20, 0));\r
            splat.renderOrder = 100;\r
\r
            //==============================================================\r
            const folder = new GUI();\r
\r
            folder.add(viewer.controls, "autoRotate").name("自动旋转");\r
\r
            const positionFolder = folder.addFolder("位置");\r
            positionFolder.labelWidth = 100;\r
            positionFolder.add(splat.position, "x", splat.position.x - 1000, splat.position.x + 1000,0.1).name("X");\r
            positionFolder.add(splat.position, "y", splat.position.y - 100, splat.position.y + 100,0.1).name("Y");\r
            positionFolder.add(splat.position, "z", splat.position.z - 1000, splat.position.z + 1000,0.1).name("Z");\r
\r
            const rotationFolder = folder.addFolder("旋转");\r
            rotationFolder.add(splat.rotation, "x", splat.rotation.x - Math.PI, splat.rotation.x + Math.PI).name("X");\r
            rotationFolder.add(splat.rotation, "y", splat.rotation.y - Math.PI, splat.rotation.y + Math.PI).name("Y");\r
            rotationFolder.add(splat.rotation, "z", splat.rotation.z - Math.PI, splat.rotation.z + Math.PI).name("Z");\r
\r
            const scaleFolder = folder.addFolder("缩放");\r
            scaleFolder.add(splat.scale, "x", splat.scale.x - 10, splat.scale.x + 10).name("X");\r
            scaleFolder.add(splat.scale, "y", splat.scale.y - 10, splat.scale.y + 10).name("Y");\r
            scaleFolder.add(splat.scale, "z", splat.scale.z - 10, splat.scale.z + 10).name("Z");\r
\r
           \r
\r
        <\/script>\r
    </body>\r
</html>\r
`,_=JSON.parse('{"title":"37. 加载本地 splat 模型","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/37.splatDrei/index.md","filePath":"3.exampls/37.splatDrei/index.md","lastUpdated":1765466799000}'),f={name:"3.exampls/37.splatDrei/index.md"},S=Object.assign(f,{setup(g){const n=l(!0);return(x,r)=>{const o=i("ClientOnly");return d(),s("div",null,[r[1]||(r[1]=a("h1",{id:"_37-加载本地-splat-模型",tabindex:"-1"},[c("37. 加载本地 splat 模型 "),a("a",{class:"header-anchor",href:"#_37-加载本地-splat-模型","aria-label":'Permalink to "37. 加载本地 splat 模型"'},"​")],-1)),p(t(e(u),null,null,512),[[m,n.value]]),t(o,null,{default:h(()=>[t(e(v),{title:"example",description:"参考：https://drei.docs.pmnd.rs/abstractions/splat#splat",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:r[0]||(r[0]=()=>{n.value=!1}),htmlCode:e(w)},null,8,["htmlCode"])]),_:1})])}}});export{_ as __pageData,S as default};
