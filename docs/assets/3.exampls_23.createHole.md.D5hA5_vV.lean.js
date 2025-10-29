import{p as t,C as l,c as h,o as p,j as e,a4 as k,G as i,a2 as E,a as d,a5 as o,k as n,w as c}from"./chunks/framework.CJqd0DOR.js";import{R as g,k as y}from"./chunks/index.Ga076E9x.js";const m=`<!DOCTYPE html>\r
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
        .controls {\r
            position: absolute;\r
            top: 20px;\r
            right: 20px;\r
        }\r
    </style>\r
    <body>\r
        <div id="map"></div>\r
        <div id="loading">-</div>\r
        <!-- 罗盘 -->\r
        <div id="compass-container"></div>\r
        <div class="controls">\r
            <label> <input type="radio" name="controls" checked onclick="hole()" />挖洞 </label>\r
            <label> <input type="radio" name="controls" onclick="clip()" />剪裁 </label>\r
        </div>\r
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
            // 创建地图\r
            const map = tt.TileMap.create({\r
                // 影像数据源\r
                imgSource: [new plugin.ArcGisSource()],\r
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
            viewer.scene.background = new THREE.Color(0x112233);\r
            viewer.scene.fog.color = viewer.scene.background;\r
            viewer.renderer.shadowMap.enabled = true;\r
            map.receiveShadow = true;\r
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
            // 添加罗盘\r
            const compass = plugin.createCompass(viewer.controls);\r
            const compassContainer = document.querySelector("#compass-container");\r
            compassContainer && compassContainer.appendChild(compass.dom);\r
\r
            //==============================================================\r
            // 挖洞\r
            viewer.renderer.localClippingEnabled = true;\r
            const bounds = [108.6880874, 33.921995, 108.882408, 34.057271];\r
            const sw = map.geo2world(new THREE.Vector3(bounds[0], bounds[1]));\r
            const ne = map.geo2world(new THREE.Vector3(bounds[2], bounds[3]));\r
\r
            let clipPlanes = [\r
                new THREE.Plane(new THREE.Vector3(-1, 0, 0), sw.x),\r
                new THREE.Plane(new THREE.Vector3(1, 0, 0), -ne.x),\r
                new THREE.Plane(new THREE.Vector3(0, 0, 1), -sw.z),\r
                new THREE.Plane(new THREE.Vector3(0, 0, -1), ne.z),\r
            ];\r
\r
            let clipIntersection = true;\r
\r
            map.addEventListener("tile-loaded", (evt) => {\r
                const materails = evt.tile.model?.material;\r
                materails?.forEach((m) => {\r
                    m.clipIntersection = clipIntersection;\r
                    m.clippingPlanes = clipPlanes;\r
                    // m.clipShadows = true;\r
                });\r
            });\r
\r
            const box = new THREE.Mesh(\r
                new THREE.BoxGeometry(ne.x - sw.x, 10000, ne.z - sw.z),\r
                new THREE.MeshStandardMaterial({\r
                    color: 0x888888,\r
                    transparent: true,\r
                    opacity: 0.6,\r
                    // clipShadows: true,\r
                })\r
            );\r
            box.renderOrder = 999;\r
            box.position.copy(sw);\r
            box.position.x += (ne.x - sw.x) / 2;\r
            box.position.z += (ne.z - sw.z) / 2;\r
            box.position.y = 2000;\r
            box.castShadow = true;\r
            // box.receiveShadow = true;\r
            // viewer.scene.add(box);\r
\r
            const ball = new THREE.Mesh(\r
                new THREE.TorusKnotGeometry(4000, 1200),\r
                new THREE.MeshStandardMaterial({ color: 0x049ef4, metalness: 0.8, roughness: 0.2 })\r
            );\r
            ball.renderOrder = 1000;\r
\r
            ball.position.set((sw.x + ne.x) / 2, -500, (sw.z + ne.z) / 2);\r
            ball.castShadow = true;\r
            // ball.receiveShadow = true;\r
            viewer.scene.add(ball);\r
\r
            const boxHelper = new THREE.BoxHelper(box);\r
            viewer.scene.add(boxHelper);\r
\r
            viewer.addEventListener("update", (evt) => {\r
                ball.rotation.y += evt.delta;\r
            });\r
\r
            window.hole = () => {\r
                clipPlanes = [\r
                    new THREE.Plane(new THREE.Vector3(-1, 0, 0), sw.x),\r
                    new THREE.Plane(new THREE.Vector3(1, 0, 0), -ne.x),\r
                    new THREE.Plane(new THREE.Vector3(0, 0, 1), -sw.z),\r
                    new THREE.Plane(new THREE.Vector3(0, 0, -1), ne.z),\r
                ];\r
                clipIntersection = true;\r
                map.rootTile.traverse((tile) => {\r
                    const materails = tile.model?.material;\r
                    materails?.forEach((m) => {\r
                        m.clipIntersection = clipIntersection;\r
                        m.clippingPlanes = clipPlanes;\r
                        m.clipShadows = true;\r
                    });\r
                });\r
            };\r
\r
            window.clip = () => {\r
                clipPlanes = [\r
                    new THREE.Plane(new THREE.Vector3(1, 0, 0), -sw.x),\r
                    new THREE.Plane(new THREE.Vector3(-1, 0, 0), ne.x),\r
                    new THREE.Plane(new THREE.Vector3(0, 0, -1), sw.z),\r
                    new THREE.Plane(new THREE.Vector3(0, 0, 1), -ne.z),\r
                ];\r
                clipIntersection = false;\r
                map.rootTile.traverse((tile) => {\r
                    const materails = tile.model?.material;\r
                    materails?.forEach((m) => {\r
                        m.clipIntersection = clipIntersection;\r
                        m.clippingPlanes = clipPlanes;\r
                        m.clipShadows = true;\r
                    });\r
                });\r
            };\r
\r
            //==============================================================\r
            // flyto 目标位置\r
            const center = new THREE.Vector3((ne.x + sw.x) / 2, 0, (ne.z + sw.z) / 2);\r
            viewer.flyTo(center, new THREE.Vector3(center.x - 8000, 20000, center.z - 20000));\r
\r
            //==============================================================\r
            // / 添加一个聚光灯\r
            const shadowLight = new THREE.SpotLight(0xffffff, 10, 4e4, Math.PI / 6, 0.2, 0);\r
            shadowLight.position.set(center.x - 10000, 30000, center.z + 10000);\r
            shadowLight.target = ball;\r
            shadowLight.castShadow = true;\r
            shadowLight.shadow.mapSize.set(1024, 1024);\r
            viewer.scene.add(shadowLight);\r
\r
            // 设置灯光摄像机参数\r
            shadowLight.shadow.camera.far = 1e9;\r
            shadowLight.shadow.camera.near = 100;\r
\r
            // 添加一个聚光灯辅助模型\r
            const lightHelper = new THREE.SpotLightHelper(shadowLight);\r
            viewer.scene.add(lightHelper);\r
            lightHelper.updateMatrixWorld();\r
        <\/script>\r
    </body>\r
</html>\r
`,T=JSON.parse('{"title":"挖洞和剪裁","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/23.createHole.md","filePath":"3.exampls/23.createHole.md","lastUpdated":1761368239000}'),w={name:"3.exampls/23.createHole.md"},v=Object.assign(w,{setup(F){const a=t(!0);return(u,s)=>{const r=l("ClientOnly");return p(),h("div",null,[s[1]||(s[1]=e("h1",{id:"挖洞和剪裁",tabindex:"-1"},[d("挖洞和剪裁 "),e("a",{class:"header-anchor",href:"#挖洞和剪裁","aria-label":'Permalink to "挖洞和剪裁"'},"​")],-1)),k(i(n(g),null,null,512),[[o,a.value]]),i(r,null,{default:c(()=>[i(n(y),{title:"example",description:"地面挖一个方形洞，或抠出一块地图",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{a.value=!1}),htmlCode:n(m)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=E("",2))])}}});export{T as __pageData,v as default};
