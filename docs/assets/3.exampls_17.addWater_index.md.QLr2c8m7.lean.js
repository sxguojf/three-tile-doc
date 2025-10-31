import{p as t,C as l,c as p,o as h,j as e,a4 as k,G as i,a2 as E,a as d,a5 as o,k as n,w as g}from"./chunks/framework.BQo5SrHh.js";import{R as c,k as y}from"./chunks/index.UKPBqX0I.js";const m=`<!DOCTYPE html>\r
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
                    "three/addons/": "https://unpkg.com/three@0.171.0/examples/jsm/"\r
                }\r
            }\r
        <\/script>\r
\r
        <script type="module">\r
            import * as THREE from "three";\r
            import * as tt from "three-tile";\r
            import * as plugin from "three-tile/plugin";\r
            import { Water } from "three/addons/objects/Water.js";\r
            import { GUI } from "three/addons/libs/lil-gui.module.min.js";\r
            import { Sky } from "three/addons/objects/Sky.js";\r
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
                minLevel: 8,\r
            });\r
            // 地图旋转到xz平面\r
            map.rotateX(-Math.PI / 2);\r
\r
            // 初始化场景\r
            const viewer = new plugin.GLViewer("#map", { antialias: true });\r
            // viewer.renderer.toneMapping = THREE.ACESFilmicToneMapping;\r
            // viewer.renderer.toneMappingExposure = 1.2;\r
            // 调整雾颜色与sky颜色适应\r
            viewer.scene.fog.color.set(0x928b8c);\r
\r
            // 地图添加到场景\r
            viewer.scene.add(map);\r
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
            function fly() {\r
                // 地图中心经纬度高度（m）转为世界坐标\r
                const centerPostion = map.geo2world(new THREE.Vector3(109.4, 31));\r
                // 摄像机经纬度高度（m）转为世界坐标\r
                const cameraPosition = map.geo2world(new THREE.Vector3(109.38, 30.96, 2500));\r
                // 摄像机飞到指定位置\r
                viewer.flyTo(centerPostion, cameraPosition, false);\r
            }\r
            fly();\r
\r
            //==============================================================\r
            // 添加罗盘\r
            const compass = plugin.createCompass(viewer.controls);\r
            const compassContainer = document.querySelector("#compass-container");\r
            compassContainer && compassContainer.appendChild(compass.dom);\r
\r
            //==============================================================\r
            const sun = new THREE.Vector3();\r
            function initWater() {\r
                const center = map.geo2map(new THREE.Vector3(109.4, 31, 300));\r
                const waterGeometry = new THREE.PlaneGeometry(300 * 1000, 300 * 1000);\r
\r
                const water = new Water(waterGeometry, {\r
                    textureWidth: 512,\r
                    textureHeight: 512,\r
                    waterNormals: new THREE.TextureLoader().load("../../images/waternormals.jpg", function (texture) {\r
                        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;\r
                    }),\r
                    sunDirection: sun,\r
                    sunColor: 0xff8888,\r
                    waterColor: 0x001e0f,\r
                    distortionScale: 1,\r
                    alpha: 1,\r
                });\r
                water.material.transparent = true;\r
                water.material.uniforms["size"].value = 0.1;\r
                water.position.copy(center);\r
\r
                // water模型内部渲染前会修改camer位置做离屛渲染，这会触发地图的LOD造成地图抖动，需要在water渲染前禁止地图更新，渲染后再放开.\r
                const before = water.onBeforeRender;\r
                const after = water.onAfterRender;\r
                water.onBeforeRender = (renderer, scene, camera, geometry, material, group) => {\r
                    map.autoUpdate = false;\r
                    before.call(water, renderer, scene, camera, geometry, material, group);\r
                };\r
                water.onAfterRender = (renderer, scene, camera, geometry, material, group) => {\r
                    map.autoUpdate = true;\r
                    after.call(water, renderer, scene, camera, geometry, material, group);\r
                };\r
                map.add(water);\r
\r
                viewer.addEventListener("update", () => {\r
                    water.material.uniforms["time"].value += 1.0 / 60.0;\r
                });\r
\r
                return water;\r
            }\r
            //-----------------------------------------------------------------------------------------\r
\r
            function initSky() {\r
                // Add Sky\r
                const sky = new Sky();\r
                sky.scale.setScalar(450000 * 1000);\r
                viewer.scene.add(sky);\r
                return sky;\r
            }\r
            //-----------------------------------------------------------------------------------------\r
\r
            function gui() {\r
                /// GUI\r
                const effectController = {\r
                    turbidity: 10,\r
                    rayleigh: 3,\r
                    mieCoefficient: 0.005,\r
                    mieDirectionalG: 0.7,\r
                    elevation: 0.5,\r
                    azimuth: 180,\r
                    exposure: viewer.renderer.toneMappingExposure,\r
                };\r
                function guiChanged() {\r
                    const uniforms = sky.material.uniforms;\r
                    uniforms["turbidity"].value = effectController.turbidity;\r
                    uniforms["rayleigh"].value = effectController.rayleigh;\r
                    uniforms["mieCoefficient"].value = effectController.mieCoefficient;\r
                    uniforms["mieDirectionalG"].value = effectController.mieDirectionalG;\r
                    const phi = THREE.MathUtils.degToRad(90 - effectController.elevation);\r
                    const theta = THREE.MathUtils.degToRad(effectController.azimuth);\r
                    sun.setFromSphericalCoords(1, phi, theta);\r
                    uniforms["sunPosition"].value.copy(sun);\r
\r
                    viewer.dirLight.position.copy(sun);\r
                    water.material.uniforms["sunDirection"].value.copy(sun).normalize();\r
\r
                    viewer.renderer.toneMappingExposure = effectController.exposure;\r
                    viewer.renderer.render(viewer.scene, viewer.camera);\r
                }\r
\r
                const gui = new GUI();\r
\r
                const guiSky = gui.addFolder("天空");\r
                guiSky.add(sky, "visible");\r
                guiSky.add(effectController, "turbidity", 0.0, 20.0, 0.1).onChange(guiChanged);\r
                guiSky.add(effectController, "rayleigh", 0.0, 4, 0.001).onChange(guiChanged);\r
                guiSky.add(effectController, "mieCoefficient", 0.0, 0.1, 0.001).onChange(guiChanged);\r
                guiSky.add(effectController, "mieDirectionalG", 0.0, 1, 0.001).onChange(guiChanged);\r
                guiSky.add(effectController, "elevation", 0, 90, 0.1).onChange(guiChanged);\r
                guiSky.add(effectController, "azimuth", -180, 180, 0.1).onChange(guiChanged);\r
                guiSky.add(effectController, "exposure", 0, 1, 0.0001).onChange(guiChanged);\r
\r
                const guiWater = gui.addFolder("水体");\r
                guiWater.add(water, "visible");\r
                guiWater.add(water.position, "z", -100, 3000, 1).name("水面高度");\r
                guiWater.add(water.scale, "x", 0.1, 10).name("东西宽度");\r
                guiWater.add(water.scale, "y", 0.1, 10).name("南北宽度");\r
                guiWater.add(water.material.uniforms.size, "value", 0.01, 2, 0.01).name("size");\r
                guiWater.add(water.material.uniforms.alpha, "value", 0.1, 1, 0.1).name("alpha");\r
\r
                guiChanged();\r
            }\r
\r
            const sky = initSky();\r
            const water = initWater();\r
            gui();\r
        <\/script>\r
    </body>\r
</html>\r
`,w=JSON.parse('{"title":"17. 添加水体","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/17.addWater/index.md","filePath":"3.exampls/17.addWater/index.md","lastUpdated":1761902788000}'),u={name:"3.exampls/17.addWater/index.md"},v=Object.assign(u,{setup(F){const a=t(!0);return(C,s)=>{const r=l("ClientOnly");return h(),p("div",null,[s[1]||(s[1]=e("h1",{id:"_17-添加水体",tabindex:"-1"},[d("17. 添加水体 "),e("a",{class:"header-anchor",href:"#_17-添加水体","aria-label":'Permalink to "17. 添加水体"'},"​")],-1)),k(i(n(c),null,null,512),[[o,a.value]]),i(r,null,{default:g(()=>[i(n(y),{title:"example",description:"添加水体，使用threejs内置的Water",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{a.value=!1}),htmlCode:n(m)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=E("",4))])}}});export{w as __pageData,v as default};
