import{p as i,C as l,c as s,o as d,j as o,a4 as c,G as r,a as h,a5 as m,k as n,w as p}from"./chunks/framework.xbTv8SNN.js";import{R as u,k as w}from"./chunks/index.T3-yMMRo.js";const g=`<!DOCTYPE html>\r
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
            position: absolute;\r
            bottom: 0px;\r
            right: 20px;\r
        }\r
\r
        #compass-container {\r
            position: absolute;\r
            height: 75px;\r
            width: 75px;\r
            left: 30px;\r
            bottom: 50px;\r
        }\r
        .autoRotate {\r
            position: absolute;\r
            right: 30px;\r
            top: 30px;\r
            z-index: 1000;\r
        }\r
        .shadow {\r
            position: absolute;\r
            top: 60px;\r
            right: 30px;\r
            color: white;\r
            font-size: 14px;\r
            user-select: none;\r
        }\r
        #local-info {\r
            position: absolute;\r
            bottom: 0px;\r
            left: 20px;\r
        }\r
        #model-loading {\r
            position: absolute;\r
            width: 300px;\r
            height: 30px;\r
            line-height: 30px;\r
            top: 50%;\r
            left: 50%;\r
            background-color: #eee;\r
            color: black;\r
            transform: translate(-50%, -50%);\r
        }\r
    </style>\r
\r
    <body>\r
        <script type="importmap">\r
            {\r
                "imports": {\r
                    "three": "https://unpkg.com/three@0.171.0/build/three.module.js",\r
                    "three-tile": "https://unpkg.com/three-tile@0.11.10/dist",\r
                    "three-tile/plugin": "https://unpkg.com/three-tile@0.11.10/dist/plugin",\r
                    "three/addons/": "https://unpkg.com/three@0.171.0/examples/jsm/",\r
                    "utils": "../utils/index.js"\r
                }\r
            }\r
        <\/script>\r
\r
        <script type="module">\r
            import * as THREE from "three";\r
            import * as tt from "three-tile";\r
            import * as plugin from "three-tile/plugin";\r
            import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";\r
            import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";\r
            import * as utils from "utils";\r
            import { GUI } from "three/addons/libs/lil-gui.module.min.js";\r
\r
            console.log(\`three-tile v\${tt.version} start!\`);\r
\r
            const loader = tt.getImgLoader("image");\r
            console.log(loader);\r
            loader.material.color.set(0xcccccc);\r
\r
            //==============================================================\r
            // 创建地图\r
            const createMap = () => {\r
                const map = tt.TileMap.create({\r
                    // 影像数据源\r
                    // imgSource: new plugin.GDSource({ style: 7 }),\r
                    imgSource: [new plugin.GDSource({ style: 6 })],\r
                    // 地形数据源\r
                    demSource: new plugin.ArcGisDemSource(),\r
                    lon0: 90,\r
                    minLevel: 8,\r
                });\r
                // 地图旋转到xz平面\r
                map.rotateX(-Math.PI / 2);\r
                // 地面接受阴影\r
                map.receiveShadow = true;\r
                return map;\r
            };\r
\r
            //==============================================================\r
\r
            // 初始化场景\r
            const createViewer = () => {\r
                const viewer = new plugin.GLViewer("#map", { antialias: true });\r
                viewer.dirLight.intensity = 0;\r
                viewer.ambLight.intensity = 1;\r
                viewer.renderer.shadowMap.enabled = true; // 开启阴影\r
                return viewer;\r
            };\r
\r
            //==============================================================\r
\r
            const map = createMap();\r
            const viewer = createViewer();\r
            viewer.scene.add(map);\r
\r
            //==============================================================\r
            // 显示地图加载进度\r
            utils.showLoading(map);\r
            utils.showLocation(viewer, map, "#local-info");\r
            utils.addCompass(viewer, "#compass-container");\r
            utils.addSkyBox(viewer);\r
            //==============================================================\r
            // 地图中心经纬度高度\r
            const centerGeo = new THREE.Vector3(108.94432, 34.26465, 0);\r
            // 摄像机经纬度高度\r
            const cameraGeo = new THREE.Vector3(centerGeo.x, centerGeo.y + 0.007, 2000);\r
            // 地图中心经纬度高度（m）转为世界坐标\r
            const centerPosition = map.geo2world(centerGeo);\r
            // 摄像机经纬度高度（m）转为世界坐标\r
            const cameraPosition = map.geo2world(cameraGeo);\r
            // 摄像机飞到指定位置\r
            viewer.flyTo(centerPosition, cameraPosition, false);\r
\r
            //==============================================================\r
\r
            const createLight = () => {\r
                const light = new THREE.DirectionalLight(0xffffff, 3);\r
                light.castShadow = true;\r
                light.position.set(centerPosition.x, centerPosition.y + 5000, centerPosition.z + 3000);\r
                light.shadow.camera.visible = true;\r
                light.shadow.mapSize.set(2048, 2048);\r
                light.target.position.set(centerPosition.x, centerPosition.y, centerPosition.z);\r
                const shadowCamera = light.shadow.camera;\r
                shadowCamera.far = 50000;\r
                shadowCamera.near = 1000;\r
                shadowCamera.left = -6000;\r
                shadowCamera.right = 6000;\r
                shadowCamera.top = 6000;\r
                shadowCamera.bottom = -6000;\r
                return light;\r
            };\r
            const light = createLight();\r
            viewer.scene.add(light);\r
            viewer.scene.add(new THREE.DirectionalLightHelper(light));\r
            viewer.scene.add(new THREE.CameraHelper(light.shadow.camera));\r
\r
            //==============================================================\r
\r
            const addGltf = async (viewer, map) => {\r
                // 配置模型加载器\r
                const dracoLoader = new DRACOLoader();\r
                dracoLoader.setDecoderPath("../../lib/draco/gltf/");\r
                const loader = new GLTFLoader();\r
                loader.setDRACOLoader(dracoLoader);\r
\r
                // 加载模型\r
                const gltf = await loader.loadAsync("../../model/xian1.glb");\r
\r
                console.log(gltf);\r
\r
                const model = gltf.scene;\r
                // 设置模型材质\r
                model.traverse((child) => {\r
                    if (child.isMesh) {\r
                        child.castShadow = true;\r
                        child.receiveShadow = true;\r
                        child.material.roughness = 0.8;\r
                        child.material.metalness = 0.5;\r
                        child.material.transparent = true;\r
                        child.material.opacity = 0.9;\r
                        // child.material.color.set(0x88cc88);\r
                        // child.material.wireframe = true;\r
                    }\r
                    // console.log(child.name);\r
                });\r
\r
                model.scale.set(1, 2, 1);\r
                model.position.set(centerPosition.x, centerPosition.y - 430, centerPosition.z);\r
\r
                viewer.scene.add(model);\r
            };\r
\r
            await addGltf(viewer, map);\r
            const loadingElement = document.querySelector("#model-loading");\r
            loadingElement.style.display = "none";\r
\r
            window.rotate = (evt) => {\r
                viewer.controls.autoRotate = evt.checked;\r
            };\r
            // 开关阴影\r
            window.changeShadow = function (checkbox) {\r
                map.receiveShadow = checkbox.checked;\r
            };\r
        <\/script>\r
\r
        <div id="map"></div>\r
        <div id="loading">-</div>\r
        <div id="local-info">-</div>\r
        <!-- 罗盘 -->\r
        <div id="compass-container"></div>\r
        <div id="loading">-</div>\r
        <label class="autoRotate" for="autoRotate"\r
            >自动旋转<input type="checkbox" id="autoRotate" onchange="rotate(this)"\r
        /></label>\r
        <div class="shadow">\r
            <label for="shadow-checkbox">阴影</label>\r
            <input type="checkbox" name="shadow" id="shadow-checkbox" checked onchange="changeShadow(this)" />\r
        </div>\r
        <div id="model-loading">model loading...</div>\r
    </body>\r
</html>\r
`,k=JSON.parse('{"title":"38. 建筑物白模","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/38.addWhiteModel/index.md","filePath":"3.exampls/38.addWhiteModel/index.md","lastUpdated":1765721496000}'),v={name:"3.exampls/38.addWhiteModel/index.md"},L=Object.assign(v,{setup(f){const t=i(!0);return(x,e)=>{const a=l("ClientOnly");return d(),s("div",null,[e[1]||(e[1]=o("h1",{id:"_38-建筑物白模",tabindex:"-1"},[h("38. 建筑物白模 "),o("a",{class:"header-anchor",href:"#_38-建筑物白模","aria-label":'Permalink to "38. 建筑物白模"'},"​")],-1)),c(r(n(u),null,null,512),[[m,t.value]]),r(a,null,{default:p(()=>[r(n(w),{title:"example",description:"添加建筑物白模",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),htmlCode:n(g)},null,8,["htmlCode"])]),_:1})])}}});export{k as __pageData,L as default};
