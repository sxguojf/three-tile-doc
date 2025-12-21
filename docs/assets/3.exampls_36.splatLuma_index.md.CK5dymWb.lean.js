import{p as i,C as l,c as o,o as p,j as s,a4 as d,G as n,a2 as c,a as h,a5 as m,k as t,w as u}from"./chunks/framework.xbTv8SNN.js";import{R as k,k as g}from"./chunks/index.T3-yMMRo.js";const b="/three-tile-doc/assets/image.Ch_E9yfE.png",f="/three-tile-doc/assets/image-1.p54xJ2iU.png",E="/three-tile-doc/assets/image-3.yADh3x2n.png",y="/three-tile-doc/assets/image-4.DWd2XDBo.png",v="/three-tile-doc/assets/image-5.BQT0cJK8.png",w="/three-tile-doc/assets/image-6.Dl6fhXy4.png",x="/three-tile-doc/assets/image-7.CGXq209p.png",C="/three-tile-doc/assets/image-8.BQyYbTr1.png",_=`<!DOCTYPE html>\r
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
        .tools-container {\r
            position: absolute;\r
            top: 20px;\r
            right: 20px;\r
            width: 350px;\r
            background-color: #0005;\r
            box-shadow: 0 0 5px #000;\r
            padding: 10px;\r
            border-radius: 10px;\r
            display: flex;\r
            flex-direction: column;\r
            gap: 20px;\r
            text-align: left;\r
        }\r
        .visible-container {\r
            display: flex;\r
            justify-content: space-between;\r
        }\r
        .edit-container {\r
            display: flex;\r
            justify-content: space-between;\r
        }\r
        #model-info {\r
            text-align: left;\r
        }\r
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
                <label for="show">\r
                    <input type="checkbox" id="show" checked onchange="show(event)" />\r
                    splat显示\r
                </label>\r
                <label for="mask">\r
                    <input type="checkbox" id="mask" checked onchange="mask(event)" />\r
                    splat背景\r
                </label>\r
            </div>\r
            <div class="edit-container">\r
                <label for="edit" class="edit">\r
                    <input type="checkbox" id="edit" onchange="editEnable(event)" />\r
                    模型编辑\r
                </label>\r
                <div id="edit-mode">\r
                    <label for="translate">\r
                        <input\r
                            type="radio"\r
                            id="translate"\r
                            name="editmode"\r
                            value="translate"\r
                            checked\r
                            onchange="setEditMode(event)" />\r
                        平移\r
                    </label>\r
\r
                    <label for="rotate">\r
                        <input type="radio" id="rotate" name="editmode" value="rotate" onchange="setEditMode(event)" />\r
                        旋转\r
                    </label>\r
                    <label for="scale">\r
                        <input type="radio" id="scale" name="editmode" value="scale" onchange="setEditMode(event)" />\r
                        缩放\r
                    </label>\r
                </div>\r
            </div>\r
            <div id="model-info">-</div>\r
        </div>\r
\r
        <script type="importmap">\r
            {\r
                "imports": {\r
                    "three": "https://unpkg.com/three@0.171.0/build/three.module.js",\r
                    "three/addons/": "https://unpkg.com/three@0.171.0/examples/jsm/",\r
                    "three-tile": "https://unpkg.com/three-tile@0.11.10/dist",\r
                    "three-tile/plugin": "https://unpkg.com/three-tile@0.11.10/dist/plugin",\r
                    "@lumaai/luma-web": "https://unpkg.com/@lumaai/luma-web@0.2.2/dist/library/luma-web.module.js",\r
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
            import { LumaSplatsThree, LumaSplatsSemantics } from "@lumaai/luma-web";\r
            import * as utils from "utils";\r
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
            const centerPosition = map.geo2world(new THREE.Vector3(6.20354, 45.864067, 500));\r
            const cameraPosition = map.geo2world(new THREE.Vector3(6.2023, 45.8616, 664));\r
            // const centerPosition = map.geo2world(new THREE.Vector3(120.655656, 31.355535, 37));\r
            // const cameraPosition = map.geo2world(new THREE.Vector3(120.656, 31.3556, 1000));\r
            viewer.flyTo(centerPosition, cameraPosition, false);\r
            viewer.scene.fog = null;\r
\r
            //==============================================================\r
            const splat = new LumaSplatsThree({\r
                source: "https://lumalabs.ai/capture/da82625c-9c8d-4d05-a9f7-3367ecab438c",\r
                // source: "https://lumalabs.ai/capture/4f362242-ad43-4851-9b04-88adf71f24f5",\r
                // source: "https://lumalabs.ai/capture/23fc3f65-c2ec-45f0-bf43-70b484c919e4",\r
                // source: "https://lumalabs.ai/capture/3028ec67-08cf-4795-9048-758e71d7328c",\r
                // source: "https://lumalabs.ai/capture/14e491bd-4cce-4564-92ff-bb797ffa31ea",\r
                // source: "https://lumalabs.ai/capture/14e3a9f3-21f7-433a-bc3c-f5e275aafe50",\r
                // source: "https://lumalabs.ai/capture/6e02c0a0-e182-431b-88aa-110b2eeff8f1",\r
                // source: "https://lumalabs.ai/capture/0b2b3881-af79-44fc-9eb3-abb87aab8c8b",\r
                // source: "https://lumalabs.ai/capture/6af6e301-1267-4c53-89e1-241a4cfd1b80",\r
                // source: "https://lumalabs.ai/capture/9ec5306a-4bd3-46fe-9522-1f8a1281f6b3",\r
                // source: "https://lumalabs.ai/capture/80406aa2-1bbf-48d6-9f65-5adeb48f5692",\r
                // source: "https://lumalabs.ai/capture/2fe14849-ffc9-4a9f-a205-340ceb032a80",\r
                // source: "https://lumalabs.ai/capture/1493ac21-8dfc-4f9d-a186-3c4117f37231",\r
            });\r
            splat.scale.set(110, 75, 110);\r
            // splat.scale.set(50, 50, 50);\r
            splat.position.copy(centerPosition).add(new THREE.Vector3(0, 123, 0));\r
            splat.rotateY(-Math.PI / 1.7);\r
            // splat.rotation.set(3.14, -1, 3.14);\r
            splat.renderOrder = 10;\r
            viewer.scene.add(splat);\r
\r
            //==============================================================\r
            const transformControls = new TransformControls(viewer.camera, viewer.container);\r
            transformControls.setSpace("world");\r
            transformControls.attach(splat);\r
            const gizmo = transformControls.getHelper();\r
            viewer.scene.add(gizmo);\r
\r
            const showModelInfo = () => {\r
                const position = map.world2geo(splat.position);\r
                const rotation = splat.rotation;\r
                const scale = splat.scale;\r
                const info = \`位置:  \${position.x.toFixed(6)}°， \${position.y.toFixed(6)}°， \${position.z.toFixed(\r
                    1\r
                )}m </br> 旋转:  \${rotation.x.toFixed(6)}°， \${rotation.y.toFixed(6)}°， \${rotation.z.toFixed(\r
                    6\r
                )}<br/> 缩放:  \${scale.x.toFixed(3)}， \${scale.y.toFixed(3)}， \${scale.z.toFixed(3)}\`;\r
                document.querySelector("#model-info").innerHTML = info;\r
            };\r
\r
            transformControls.addEventListener("dragging-changed", function (event) {\r
                viewer.controls.enabled = !event.value;\r
            });\r
\r
            transformControls.addEventListener("change", showModelInfo);\r
\r
            window.autoRotate = (evt) => {\r
                if (evt.target.checked) {\r
                    viewer.controls.target.copy(centerPosition);\r
                }\r
                viewer.controls.autoRotate = evt.target.checked;\r
            };\r
\r
            window.show = (evt) => {\r
                splat.visible = evt.target.checked;\r
            };\r
            window.mask = (evt) => {\r
                splat.semanticsMask = evt.target.checked ? 255 : LumaSplatsSemantics.FOREGROUND;\r
            };\r
\r
            window.editEnable = (evt) => {\r
                const checked = evt.target.checked;\r
                const editMode = document.querySelector("#edit-mode");\r
                editMode.style.display = checked ? "block" : "none";\r
                transformControls.enabled = checked;\r
                gizmo.visible = checked;\r
            };\r
\r
            window.setEditMode = (evt) => {\r
                transformControls.setMode(evt.target.value);\r
            };\r
\r
            editEnable({ target: { checked: false } });\r
        <\/script>\r
    </body>\r
</html>\r
`,L=JSON.parse('{"title":"36. 使用 LumaSplatsThree 加载 splat 模型","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/36.splatLuma/index.md","filePath":"3.exampls/36.splatLuma/index.md","lastUpdated":1766327261000}'),F={name:"3.exampls/36.splatLuma/index.md"},z=Object.assign(F,{setup(T){const a=i(!0);return(B,e)=>{const r=l("ClientOnly");return p(),o("div",null,[e[1]||(e[1]=s("h1",{id:"_36-使用-lumasplatsthree-加载-splat-模型",tabindex:"-1"},[h("36. 使用 LumaSplatsThree 加载 splat 模型 "),s("a",{class:"header-anchor",href:"#_36-使用-lumasplatsthree-加载-splat-模型","aria-label":'Permalink to "36. 使用 LumaSplatsThree 加载 splat 模型"'},"​")],-1)),d(n(t(k),null,null,512),[[m,a.value]]),n(r,null,{default:u(()=>[n(t(g),{title:"example",description:"参考：https://github.com/lumalabs/luma-web-examples",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[0]||(e[0]=()=>{a.value=!1}),htmlCode:t(_)},null,8,["htmlCode"])]),_:1}),e[2]||(e[2]=c("",3))])}}});export{L as __pageData,z as default};
