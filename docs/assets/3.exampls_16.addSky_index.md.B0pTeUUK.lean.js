import{p as l,C as r,c as h,o as p,j as e,a4 as k,G as i,a2 as E,a as d,a5 as o,k as n,w as g}from"./chunks/framework.BQo5SrHh.js";import{R as y,k as c}from"./chunks/index.UKPBqX0I.js";const u=`<!DOCTYPE html>\r
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
                minLevel: 10,\r
            });\r
            // 地图旋转到xz平面\r
            map.rotateX(-Math.PI / 2);\r
\r
            // 初始化场景\r
            const viewer = new plugin.GLViewer("#map");\r
            // 调整雾颜色与sky颜色适应\r
            viewer.scene.fog.color.set(0x928b8c);\r
            viewer.renderer.toneMapping = THREE.ACESFilmicToneMapping;\r
            viewer.renderer.toneMappingExposure = 1.2;\r
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
                const centerPostion = map.geo2world(new THREE.Vector3(115, 40, 0));\r
                // 摄像机世界坐标\r
                const cameraPosition = new THREE.Vector3(\r
                    centerPostion.x,\r
                    centerPostion.y + 3000,\r
                    centerPostion.z + 10000\r
                );\r
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
            //添加Sky\r
            const sky = new Sky();\r
            sky.scale.setScalar(450000 * 1000);\r
            viewer.scene.add(sky);\r
\r
            const sun = new THREE.Vector3();\r
            /// GUI\r
            const effectController = {\r
                turbidity: 3.5,\r
                rayleigh: 3.5,\r
                mieCoefficient: 0.005,\r
                mieDirectionalG: 0.7,\r
                elevation: 2,\r
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
                viewer.renderer.toneMappingExposure = effectController.exposure;\r
                // viewer.renderer.render(viewer.scene, viewer.camera);\r
            }\r
\r
            const gui = new GUI();\r
            gui.add(viewer, "fogFactor", 0, 5, 0.001).listen().name("fog");\r
            gui.add(effectController, "turbidity", 0.0, 20.0, 0.1).onChange(guiChanged);\r
            gui.add(effectController, "rayleigh", 0.0, 4, 0.001).onChange(guiChanged);\r
            gui.add(effectController, "mieCoefficient", 0.0, 0.1, 0.001).onChange(guiChanged);\r
            gui.add(effectController, "mieDirectionalG", 0.0, 1, 0.001).onChange(guiChanged);\r
            gui.add(effectController, "elevation", 0, 90, 0.1).onChange(guiChanged);\r
            gui.add(effectController, "azimuth", -180, 180, 0.1).onChange(guiChanged);\r
            gui.add(effectController, "exposure", 0, 1, 0.0001).onChange(guiChanged);\r
\r
            guiChanged();\r
        <\/script>\r
    </body>\r
</html>\r
`,B=JSON.parse('{"title":"16. 添加 SKY","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/16.addSky/index.md","filePath":"3.exampls/16.addSky/index.md","lastUpdated":1761902788000}'),C={name:"3.exampls/16.addSky/index.md"},v=Object.assign(C,{setup(m){const a=l(!0);return(F,s)=>{const t=r("ClientOnly");return p(),h("div",null,[s[1]||(s[1]=e("h1",{id:"_16-添加-sky",tabindex:"-1"},[d("16. 添加 SKY "),e("a",{class:"header-anchor",href:"#_16-添加-sky","aria-label":'Permalink to "16. 添加 SKY"'},"​")],-1)),k(i(n(y),null,null,512),[[o,a.value]]),i(t,null,{default:g(()=>[i(n(c),{title:"example",description:"添加天空，使用threejs内置的Sky",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{a.value=!1}),htmlCode:n(u)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=E("",3))])}}});export{B as __pageData,v as default};
