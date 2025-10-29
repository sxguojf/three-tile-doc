import{p as i,C as s,c as l,o as d,j as o,a4 as c,G as r,a2 as h,a as p,a5 as m,k as n,w}from"./chunks/framework.CJqd0DOR.js";import{R as u,k as g}from"./chunks/index.Ga076E9x.js";const v=`<!DOCTYPE html>\r
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
            right: 30px;\r
            bottom: 30px;\r
        }\r
\r
        #loading {\r
            position: absolute;\r
            bottom: 0px;\r
            left: 20px;\r
        }\r
\r
        button {\r
            margin: 0 10px;\r
        }\r
        button:hover {\r
            background-color: darkcyan;\r
        }\r
        .shadow {\r
            position: absolute;\r
            top: 20px;\r
            right: 20px;\r
            color: white;\r
            font-size: 14px;\r
            user-select: none;\r
        }\r
    </style>\r
    <body>\r
        <div id="map"></div>\r
        <!-- 罗盘 -->\r
        <div id="compass-container"></div>\r
\r
        <div id="loading">-</div>\r
        <div class="shadow">\r
            <input type="checkbox" name="shadow" id="shadow-checkbox" checked onchange="changeShadow(this)" />\r
            <label for="shadow-checkbox">阴影</label>\r
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
            //添加蓝天白云\r
            const skybox = new THREE.CubeTextureLoader()\r
                .setPath("../skybox/")\r
                .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);\r
            viewer.scene.background = skybox;\r
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
                const centerPostion = map.geo2world(new THREE.Vector3(110, 35, 0));\r
                // 摄像机经纬度高度（m）转为世界坐标\r
                const cameraPosition = map.geo2world(new THREE.Vector3(110.1, 34.5, 30000));\r
                // 摄像机飞到指定位置\r
                viewer.flyTo(centerPostion, cameraPosition);\r
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
            // 地图阴影\r
            function shadowTest(viewerr, map) {\r
                // 开启阴影\r
                viewer.renderer.shadowMap.enabled = true;\r
                // 地面接受阴影\r
                map.receiveShadow = true;\r
                // 添加一个球，半径5000米\r
                const sphereGeometry = new THREE.SphereGeometry(5000, 32, 32);\r
                const sphereTexture = new THREE.TextureLoader().load("../images/test.jpg");\r
                sphereTexture.colorSpace = "srgb";\r
                const sphereMaterial = new THREE.MeshStandardMaterial({\r
                    // color: 0x049ef4,\r
                    map: sphereTexture,\r
                    roughness: 0.2,\r
                    metalness: 0.5,\r
                    flatShading: true,\r
                });\r
                const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);\r
                const centerGeo = new THREE.Vector3(110, 35, 0);\r
                const centerPosition = map.geo2world(centerGeo);\r
                sphere.position.set(centerPosition.x, 5000, centerPosition.z);\r
\r
                // 球开启阴影\r
                sphere.castShadow = true;\r
                sphere.receiveShadow = true;\r
                viewer.scene.add(sphere);\r
\r
                // 添加一个聚光灯\r
                const shadowLight = new THREE.SpotLight(0xffffff, 10, 4e6, Math.PI / 6, 0.2, 0);\r
                shadowLight.name = "shadowLight";\r
                shadowLight.position.set(centerPosition.x, 1e5, centerPosition.z + 100 * 1000);\r
                shadowLight.target = sphere;\r
                shadowLight.castShadow = true;\r
                viewer.scene.add(shadowLight);\r
\r
                // 设置灯光摄像机参数\r
                shadowLight.shadow.camera.far = 1e9;\r
                shadowLight.shadow.camera.near = 100;\r
                // 添加一个聚光灯相机辅助模型\r
                const cameraHelper = new THREE.CameraHelper(shadowLight.shadow.camera);\r
                viewer.scene.add(cameraHelper);\r
\r
                // 添加一个聚光灯辅助模型\r
                const lightHelper = new THREE.SpotLightHelper(shadowLight);\r
                viewer.scene.add(lightHelper);\r
                lightHelper.updateMatrixWorld();\r
            }\r
            shadowTest(viewer, map);\r
\r
            // 开关阴影\r
            window.changeShadow = function (checkbox) {\r
                map.receiveShadow = checkbox.checked;\r
            };\r
        <\/script>\r
    </body>\r
</html>\r
`,E=JSON.parse('{"title":"添加阴影","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/11.addShadow.md","filePath":"3.exampls/11.addShadow.md","lastUpdated":1761471651000}'),x={name:"3.exampls/11.addShadow.md"},L=Object.assign(x,{setup(f){const t=i(!0);return(b,e)=>{const a=s("ClientOnly");return d(),l("div",null,[e[1]||(e[1]=o("h1",{id:"添加阴影",tabindex:"-1"},[p("添加阴影 "),o("a",{class:"header-anchor",href:"#添加阴影","aria-label":'Permalink to "添加阴影"'},"​")],-1)),c(r(n(u),null,null,512),[[m,t.value]]),r(a,null,{default:w(()=>[r(n(g),{title:"example",description:"添加一个球，开启灯光和阴影",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),htmlCode:n(v)},null,8,["htmlCode"])]),_:1}),e[2]||(e[2]=h('<p>阴影是提高场景真实感的重要因素之一，你的模型为什么看着有些假？很可能是没有阴影。</p><p>three-tile 使用阴影和 threejs 一致：</p><ol><li>开启渲染器阴影功能：<code>renderer.shadowMap.enabled = true;</code></li><li>开启灯光投射阴影：<code>light.castShadow = true;</code></li><li>开启模型投射阴影：<code>mesh.castShadow = true;</code></li><li>开启地面接受阴影：<code>map.receiveShadow = true;</code></li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>地图虽然是有若干块瓦片模型组成，但并不需要遍历瓦片开启阴影，three-tile 已经在内部进行处理。</p></div><h2 id="使用阴影需要注意" tabindex="-1">使用阴影需要注意： <a class="header-anchor" href="#使用阴影需要注意" aria-label="Permalink to &quot;使用阴影需要注意：&quot;">​</a></h2><ol><li>阴影比较耗费资源，建议单独添加一个产生阴影的灯光，不要使用全局的直射光阴影。</li><li>可添加灯光、灯光摄像机等 helper 以方便调试。</li><li>为节省资源，尽量缩小阴影投射范围。</li><li>为了方便使用，TileMap 的 castShadow 和 receiveShadow 属性会自动应用全部子瓦片，不需要手动遍历开启。</li><li>开启地形自身阴影（用于产生山体阴影）作用不明显，因为卫星影像拍摄时已包含阴影，所以一般不开启。</li></ol>',6))])}}});export{E as __pageData,L as default};
