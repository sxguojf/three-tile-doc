const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/GeoJSON3D.CWxnJI18.js","assets/chunks/index.CqI7X3xo.js","assets/chunks/lil-gui.module.min.Vka56b52.js","assets/chunks/style.Ddmk4huO.js","assets/chunks/framework.xbTv8SNN.js","assets/chunks/useState.EiXjSKHF.js","assets/chunks/useSky.hmx3ZDdW.js","assets/chunks/BufferGeometryUtils.CkhbY6lp.js"])))=>i.map(i=>d[i]);
import{p as d,D as c,v as m,V as u,C as p,c as g,o as b,j as a,a4 as v,G as n,a as f,a5 as h,k as r,w as s,a6 as x}from"./chunks/framework.xbTv8SNN.js";import{R as w,k as y}from"./chunks/index.T3-yMMRo.js";const M=`<template>\r
    <div class="demo-container">\r
        <div ref="viewerRef" class="map-container"></div>\r
        <div class="compass" ref="compassRef"></div>\r
        <div class="state">\r
            <div class="location">\r
                <span>经度：{{ location.x.toFixed(6) }}° </span>\r
                <span>纬度：{{ location.y.toFixed(6) }}° </span>\r
                <span>海拔：{{ location.z.toFixed(1) }}m </span>\r
            </div>\r
            <div class="loading">{{ loading }}</div>\r
        </div>\r
        <div class="stats" ref="statsRef"></div>\r
        <div class="gui" ref="guiRef"></div>\r
        <div id="model-loading" v-if="loadingText">\r
            {{ loadingText }}\r
        </div>\r
    </div>\r
</template>\r
\r
<style scoped>\r
    .map-container {\r
        width: 100%;\r
        height: 600px;\r
        display: flex;\r
        align-items: center;\r
        color: #ffffff;\r
        text-shadow: 0 0 2px black;\r
    }\r
    .map {\r
        width: 100%;\r
        height: 100%;\r
    }\r
    .weather {\r
        position: absolute;\r
        top: 20px;\r
        left: 150px;\r
    }\r
\r
    .compass {\r
        position: absolute;\r
        top: 20px;\r
        left: 20px;\r
        background-size: cover;\r
        pointer-events: auto;\r
        filter: drop-shadow(0 0 2px black);\r
    }\r
\r
    .stats {\r
        position: absolute;\r
        bottom: 30px;\r
        left: 10px;\r
    }\r
\r
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
        text-align: center;\r
    }\r
\r
    .gui {\r
        position: absolute;\r
        top: 0px;\r
        right: 0px;\r
        max-height: 95%;\r
        overflow-y: auto;\r
    }\r
</style>\r
\r
<script setup lang="ts">\r
    import { ACESFilmicToneMapping, DirectionalLightHelper, Fog, Mesh, MeshStandardMaterial, Vector3 } from "three";\r
    import * as tt from "three-tile";\r
    import * as plugin from "three-tile/plugin";\r
    import { GLTFExporter } from "three/examples/jsm/Addons.js";\r
    import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";\r
    import { onMounted, onUnmounted, ref } from "vue";\r
    import { useCloudSky, useCompass, useLoading, useLocation, useStats } from "../hooks";\r
    import "../style.css";\r
    import { BuildingGeometryLoader } from "./BuildingGeometryLoader";\r
\r
    //=================================================================================\r
\r
    // 创建地图\r
    const createMap = () => {\r
        const map = tt.TileMap.create({\r
            imgSource: [\r
                new plugin.ArcGisSource(), // ArcGis卫星影像数据源\r
            ],\r
            // demSource: new plugin.ArcGisDemSource(), // ArcGis地形数据源\r
            lon0: 90,\r
            bounds: [60, 0, 145, 60],\r
        });\r
        map.rotateX(-Math.PI / 2);\r
        return map;\r
    };\r
\r
    // 跳转\r
    const goto = (viewer: plugin.GLViewer, map: tt.TileMap, centerGeo: Vector3, cameraGeo: Vector3) => {\r
        viewer.controls.target.copy(map.geo2world(centerGeo));\r
        viewer.camera.position.copy(map.geo2world(cameraGeo));\r
\r
        viewer.dirLight.target.position.copy(viewer.controls.target);\r
        viewer.dirLight.position.copy(viewer.controls.target);\r
        viewer.dirLight.position.add(new Vector3(0, 6e3, -1e4));\r
        const lightHelper = new DirectionalLightHelper(viewer.dirLight, 1e3);\r
\r
        viewer.scene.add(lightHelper);\r
    };\r
\r
    //=================================================================================\r
    // 地图容器\r
    const viewerRef = ref(null);\r
    // 指南针容器\r
    const compassRef = ref<HTMLDivElement>();\r
\r
    const guiRef = ref<HTMLDivElement>();\r
\r
    // 创建地图\r
    const map = createMap();\r
\r
    // 创建视图\r
    const viewer = new plugin.GLViewer(undefined, { antialias: true });\r
    viewer.renderer.toneMapping = ACESFilmicToneMapping;\r
    viewer.dirLight.intensity = 3;\r
\r
    //添加蓝天白云\r
    useCloudSky(viewer.scene);\r
\r
    // 位置信息\r
    const location = useLocation(map, viewer);\r
\r
    // 地图加载状态\r
    const loading = useLoading(map);\r
\r
    // 模型加载状态\r
    const loadingText = ref("");\r
\r
    // 指南针\r
    useCompass(viewer.controls, compassRef);\r
\r
    // 性能监视器\r
    const statsRef = ref<HTMLElement>();\r
    const stats = useStats(statsRef);\r
\r
    viewer.addEventListener("update", () => {\r
        stats.update();\r
    });\r
\r
    const bbox = [108.92, 34.2524, 108.9675, 34.2783] as [number, number, number, number];\r
\r
    //=================================================================================\r
    onMounted(() => {\r
        if (!viewerRef.value) {\r
            console.error("map or cssrenderer or compass container is null");\r
            return;\r
        }\r
\r
        // 添加视图\r
        viewer.addTo(viewerRef.value);\r
\r
        // 添加地图\r
        viewer.scene.add(map);\r
\r
        // 跳转\r
        const center = new Vector3((bbox[0] + bbox[2]) / 2, (bbox[1] + bbox[3]) / 2, 0);\r
        goto(viewer, map, center, new Vector3(center.x, center.y, 1e5));\r
\r
        // 防止摄像机穿过地面\r
        map.addEventListener("update", () => {\r
            plugin.limitCameraHeight(map, viewer.camera);\r
        });\r
\r
        // addFence(bbox);\r
        loadBuilding(bbox);\r
    });\r
\r
    onUnmounted(() => {\r
        map.dispose();\r
    });\r
\r
    const loadBuilding = async (_bbox: [number, number, number, number]) => {\r
        loadingText.value = "Loading...";\r
        const buildingGeometryLoader = new BuildingGeometryLoader(map);\r
        const url = "../../map/building-4236.geojson";\r
\r
        const buildingGeometry = await buildingGeometryLoader\r
            .load(url, (event) => {\r
                // modelLoadingProgress.value = event.loaded;\r
                loadingText.value = \`加载中: \${event.loaded.toLocaleString("en-US")} Bytes \`;\r
            })\r
            .catch((error) => {\r
                console.error("加载建筑模型失败:", error);\r
                loadingText.value = "模型加载失败";\r
                return null;\r
            });\r
\r
        console.log("数据加载完成");\r
\r
        if (buildingGeometry) {\r
            loadingText.value = "";\r
\r
            const buildingMaterial = new MeshStandardMaterial({\r
                color: 0x008800,\r
                metalness: 0.6,\r
                roughness: 0.6,\r
                emissiveIntensity: 0.5,\r
            });\r
            const buildingMesh = new Mesh(buildingGeometry, buildingMaterial);\r
            buildingMesh.name = "building";\r
            buildingMesh.scale.setZ(3);\r
            map.add(buildingMesh);\r
            viewer.flyToObject(buildingMesh);\r
\r
            if (guiRef.value) {\r
                initGUI(buildingMesh);\r
            }\r
        }\r
    };\r
\r
    // const addFence = (bbox: [number, number, number, number]) => {\r
    //     const sw = map.geo2map(new Vector3(bbox[0], bbox[1], -10));\r
    //     const ne = map.geo2map(new Vector3(bbox[2], bbox[3], 100));\r
    //     const box = new Box3(sw, ne);\r
    //     const fence = new Mesh(\r
    //         new BoxGeometry(box.max.x - box.min.x, box.max.y - box.min.y, box.max.z - box.min.z),\r
    //         new MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.5, wireframe: true })\r
    //     );\r
    //     box.getCenter(fence.position);\r
    //     map.add(fence);\r
    // };\r
\r
    const vm = {\r
        exportBuilding: () => {\r
            const buildingMesh = map.getObjectByName("building") as Mesh;\r
            if (buildingMesh) {\r
                // 导出glb\r
                const gltfExporter = new GLTFExporter();\r
                gltfExporter.parse(\r
                    buildingMesh,\r
                    (gltf: any) => {\r
                        const blob = new Blob([gltf], { type: "model/gltf-binary" });\r
                        const link = document.createElement("a");\r
                        link.href = URL.createObjectURL(blob);\r
                        link.download = "building.glb";\r
                        link.click();\r
                    },\r
                    (error) => {\r
                        console.error("导出GLTF模型失败:", error);\r
                    },\r
                    { binary: true, onlyVisible: true }\r
                );\r
            }\r
        },\r
    };\r
\r
    const initGUI = (mesh: Mesh) => {\r
        const gui = new GUI({ container: guiRef.value, autoPlace: false });\r
        gui.addColor(viewer.scene.fog as Fog, "color").name("雾颜色");\r
        gui.add(viewer, "fogFactor", 0, 5, 0.01).name("雾浓度");\r
        gui.add(viewer.ambLight, "intensity", 0, 10, 0.01).name("环境光强度");\r
        gui.add(viewer.dirLight, "intensity", 0, 10, 0.01).name("直射光强度");\r
\r
        const material = mesh.material as MeshStandardMaterial;\r
        gui.add(mesh, "visible").name("建筑物显示/隐藏");\r
        gui.add(material, "wireframe").name("线框");\r
        gui.addColor(material, "color").name("建筑颜色");\r
        gui.add(material, "metalness", 0, 1, 0.01).name("金属度");\r
        gui.add(material, "roughness", 0, 1, 0.01).name("粗糙度");\r
        gui.addColor(material, "emissive").name("自发光");\r
        gui.add(material, "emissiveIntensity", 0, 1, 0.01).name("自发光强度");\r
        gui.add(mesh.scale, "z", 1, 10).name("建筑物拉伸");\r
\r
        gui.add(vm, "exportBuilding").name("导出建筑模型");\r
    };\r
<\/script>\r
`,k=JSON.parse('{"title":"7. 三维建筑物","description":"","frontmatter":{},"headers":[],"relativePath":"4.application/07.GeoJSON3D/index.md","filePath":"4.application/07.GeoJSON3D/index.md","lastUpdated":1767330093000}'),L={name:"4.application/07.GeoJSON3D/index.md"},S=Object.assign(L,{setup(G){const o=d(!0),t=c();return m(async()=>{t.value=(await u(async()=>{const{default:i}=await import("./chunks/GeoJSON3D.CWxnJI18.js");return{default:i}},__vite__mapDeps([0,1,2,3,4,5,6,7]))).default}),(i,e)=>{const l=p("ClientOnly");return b(),g("div",null,[e[1]||(e[1]=a("h1",{id:"_7-三维建筑物",tabindex:"-1"},[f("7. 三维建筑物 "),a("a",{class:"header-anchor",href:"#_7-三维建筑物","aria-label":'Permalink to "7. 三维建筑物"'},"​")],-1)),v(n(r(w),null,null,512),[[h,o.value]]),n(l,null,{default:s(()=>[n(r(y),{title:"vue演示",description:"从（https://tubvsig-so2sat-vm1.srv.mwn.de/） 提供的WFS服务，加载指定经纬度范围的GeoJSON数据，生成建筑物模型",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[0]||(e[0]=()=>{o.value=!1}),vueCode:r(M)},x({_:2},[t.value?{name:"vue",fn:s(()=>[n(r(t))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{k as __pageData,S as default};
