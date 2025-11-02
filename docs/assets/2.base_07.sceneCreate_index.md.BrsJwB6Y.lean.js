import{p as r,C as l,c as h,o as p,a2 as a,a4 as d,G as i,a5 as k,k as e,w as c}from"./chunks/framework.xbTv8SNN.js";import{R as o,k as g}from"./chunks/index.T3-yMMRo.js";const E=`<!DOCTYPE html>\r
<html lang="zh-cn">\r
    <head>\r
        <meta charset="utf-8" />\r
        <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />\r
        <title>three-tile最小化应用</title>\r
    </head>\r
    <style>\r
        html,\r
        body {\r
            background-color: #333;\r
            height: 400px;\r
            width: 100%;\r
            padding: 0;\r
            margin: 0;\r
            display: flex;\r
            overflow: hidden;\r
        }\r
        #map {\r
            height: 100%;\r
            width: 100%;\r
        }\r
    </style>\r
\r
    <script type="importmap">\r
        {\r
            "imports": {\r
                "three": "https://unpkg.com/three@0.171.0/build/three.module.js",\r
                "three/addons/": "https://unpkg.com/three@0.171.0/examples/jsm/",\r
                "three-tile": "https://unpkg.com/three-tile@0.11.10/dist",\r
                "three-tile/plugin": "https://unpkg.com/three-tile@0.11.10/dist/plugin"\r
            }\r
        }\r
    <\/script>\r
\r
    <body>\r
        <div id="map"></div>\r
        <script type="module" lang="ts">\r
            import * as THREE from "three";\r
            import * as tt from "three-tile";\r
            import * as plugin from "three-tile/plugin";\r
            import { MapControls } from "three/addons/controls/MapControls.js";\r
\r
            console.log(\`three-tile v\${tt.version} start!\`);\r
\r
            // 创建场景\r
            const createViewer = (container) => {\r
                const width = container.clientWidth;\r
                const height = container.clientHeight;\r
\r
                // scene\r
                const scene = new THREE.Scene();\r
\r
                // renderer\r
                const renderer = new THREE.WebGLRenderer({\r
                    logarithmicDepthBuffer: true,\r
                });\r
                renderer.setSize(width, height);\r
\r
                // camera\r
                const camera = new THREE.PerspectiveCamera(60, width / height, 10, 4e7);\r
                camera.position.set(0, camera.far / 2, 0);\r
\r
                // ambient light\r
                const ambLight = new THREE.AmbientLight(0xffffff);\r
                scene.add(ambLight);\r
\r
                // directional light\r
                const dirLight = new THREE.DirectionalLight(0xffffff);\r
                dirLight.position.set(0, 5e6, 1e5);\r
                dirLight.target.position.set(0, 0, -5e6);\r
                scene.add(dirLight);\r
\r
                // controls\r
                const controls = new MapControls(camera, renderer.domElement);\r
                controls.maxDistance = 2e7;\r
                controls.minDistance = 10;\r
                controls.enableDamping = true;\r
                controls.zoomToCursor = true;\r
\r
                // add renderer to container\r
                container.appendChild(renderer.domElement);\r
\r
                return {\r
                    scene,\r
                    camera,\r
                    renderer,\r
                    controls,\r
                    ambLight,\r
                    dirLight,\r
                };\r
            };\r
\r
            // 创建地图\r
            const map = tt.TileMap.create({\r
                // 影像数据源\r
                imgSource: new plugin.ArcGisSource(),\r
                // 地形数据源\r
                demSource: new plugin.ArcGisDemSource(),\r
                lon0: 90,\r
            });\r
            // 地图旋转到xz平面\r
            map.rotateX(-Math.PI / 2);\r
\r
            // 初始化场景\r
            const viewer = createViewer(document.querySelector("#map"));\r
\r
            // 地图添加到场景\r
            viewer.scene.add(map);\r
\r
            // 动画循环\r
            viewer.renderer.setAnimationLoop(() => {\r
                viewer.controls.update();\r
                viewer.renderer.render(viewer.scene, viewer.camera);\r
            });\r
        <\/script>\r
    </body>\r
</html>\r
`,C=JSON.parse('{"title":"7. 三维场景","description":"","frontmatter":{},"headers":[],"relativePath":"2.base/07.sceneCreate/index.md","filePath":"2.base/07.sceneCreate/index.md","lastUpdated":1761902788000}'),y={name:"2.base/07.sceneCreate/index.md"},D=Object.assign(y,{setup(m){const n=r(!0);return(b,s)=>{const t=l("ClientOnly");return p(),h("div",null,[s[1]||(s[1]=a("",10)),d(i(e(o),null,null,512),[[k,n.value]]),i(t,null,{default:c(()=>[i(e(g),{title:"最小化演示",description:"自定义场景",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{n.value=!1}),htmlCode:e(E)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=a("",19))])}}});export{C as __pageData,D as default};
