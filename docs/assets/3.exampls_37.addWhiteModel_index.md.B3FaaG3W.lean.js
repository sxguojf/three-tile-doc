import{p as i,C as l,c as s,o as d,j as o,a4 as c,G as r,a as m,a5 as h,k as n,w as p}from"./chunks/framework.xbTv8SNN.js";import{R as g,k as u}from"./chunks/index.T3-yMMRo.js";const w=`<!DOCTYPE html>\r
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
                    "three/addons/": "https://unpkg.com/three@0.171.0/examples/jsm/"\r
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
\r
            console.log(\`three-tile v\${tt.version} start!\`);\r
\r
            //==============================================================\r
            // 定义着色器\r
            class Filter extends THREE.MeshBasicMaterial {\r
                constructor(params) {\r
                    super(params);\r
                    this.onBeforeCompile = (shader) => {\r
                        // 修改片段着色器\r
                        shader.fragmentShader = shader.fragmentShader.replace(\r
                            "#include <dithering_fragment>",\r
                            \`\r
                            \r
                            vec4 texel = texture2D(map, vMapUv);                \r
                            vec3 inverted = 1.0 - texel.rgb; \r
                            float luminance = dot(inverted, vec3(0.299, 0.587, 0.114));\r
                            vec3 grayscale = vec3(luminance);                            \r
                            vec3 finalColor = mix(grayscale, inverted, 0.6) * diffuse * 2.0;\r
                            gl_FragColor =  vec4( finalColor, opacity * texel.a );\r
                            #include <dithering_fragment>\r
                            \`\r
                        );\r
                    };\r
                }\r
            }\r
            // 修改影像加载器的材质为Filter\r
            tt.getImgLoader("image").material = new Filter({ color: 0xaaccff });\r
\r
            //==============================================================\r
\r
            // 创建地图\r
            const createMap = () => {\r
                const map = tt.TileMap.create({\r
                    // 影像数据源\r
                    imgSource: new plugin.GDSource({ style: 7 }),\r
                    // 地形数据源\r
                    // demSource: new plugin.ArcGisDemSource(),\r
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
                viewer.scene.background = new THREE.Color(0x112233);\r
                viewer.scene.fog = null;\r
                viewer.renderer.shadowMap.enabled = true; // 开启阴影\r
                return viewer;\r
            };\r
\r
            //==============================================================\r
\r
            //==============================================================\r
\r
            const map = createMap();\r
            const viewer = createViewer();\r
            viewer.scene.add(map);\r
            //==============================================================\r
            // 显示地图加载进度\r
            const showLoading = (map, id) => {\r
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
            };\r
\r
            showLoading(map);\r
            // 添加罗盘\r
            const compass = plugin.createCompass(viewer.controls);\r
            const compassContainer = document.querySelector("#compass-container");\r
            compassContainer && compassContainer.appendChild(compass.dom);\r
            //==============================================================\r
            // 地图中心经纬度高度\r
            // const centerGeo = new THREE.Vector3(108.9397, 34.26624, 0);\r
            const centerGeo = new THREE.Vector3(108.94432, 34.26465, 0);\r
            // 摄像机经纬度高度\r
            const cameraGeo = new THREE.Vector3(centerGeo.x, centerGeo.y - 0.007, 2000);\r
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
                light.target.position.set(centerPosition.x, centerPosition.y, centerPosition.z);\r
                const shadowCamera = light.shadow.camera;\r
                shadowCamera.far = 10000;\r
                shadowCamera.near = 100;\r
                shadowCamera.left = -8000;\r
                shadowCamera.right = 8000;\r
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
                // 开启模型阴影\r
                model.traverse((child) => {\r
                    if (child.isMesh) {\r
                        child.castShadow = true;\r
                        child.receiveShadow = true;\r
                        child.material.color.set(0xddffff);\r
                        child.material.roughness = 0.8;\r
                        child.material.metalness = 0.5;\r
                        child.material.transparent = true;\r
                        child.material.opacity = 0.9;\r
                        // child.material.wireframe = true;\r
                    }\r
                    console.log(child.name);\r
                });\r
                model.castShadow = true;\r
\r
                model.position.set(centerPosition.x, centerPosition.y - 420 * 3, centerPosition.z);\r
                model.scale.set(1, 3, 1);\r
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
`,y=JSON.parse('{"title":"36. 建筑物白模","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/37.addWhiteModel/index.md","filePath":"3.exampls/37.addWhiteModel/index.md","lastUpdated":1762435537000}'),v={name:"3.exampls/37.addWhiteModel/index.md"},C=Object.assign(v,{setup(f){const t=i(!0);return(x,e)=>{const a=l("ClientOnly");return d(),s("div",null,[e[1]||(e[1]=o("h1",{id:"_36-建筑物白模",tabindex:"-1"},[m("36. 建筑物白模 "),o("a",{class:"header-anchor",href:"#_36-建筑物白模","aria-label":'Permalink to "36. 建筑物白模"'},"​")],-1)),c(r(n(g),null,null,512),[[h,t.value]]),r(a,null,{default:p(()=>[r(n(u),{title:"example",description:"添加建筑物白模",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),htmlCode:n(w)},null,8,["htmlCode"])]),_:1})])}}});export{y as __pageData,C as default};
