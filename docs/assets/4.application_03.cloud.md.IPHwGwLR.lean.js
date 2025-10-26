const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/03.C9S1jTBc.js","assets/chunks/framework.BZ48x_LH.js","assets/chunks/index.DTcE6LeP.js","assets/chunks/style.UNYlb_e_.js"])))=>i.map(i=>d[i]);
import{p as o,D as h,v as c,V as d,C as k,c as m,o as u,j as l,a4 as E,G as n,a2 as g,a as b,a5 as v,k as a,w as t,a6 as y}from"./chunks/framework.BZ48x_LH.js";import{R as w,k as F}from"./chunks/index.DCj37L2o.js";const f=`<template>\r
    <div class="demo-container">\r
        <!-- 地图 -->\r
        <div ref="viewerRef" class="map-container"></div>\r
        <!-- 工具栏 -->\r
        <div class="tools">\r
            <button type="button" class="button" v-for="item in [1, 2, 3, 4, 5]" :key="item" @click="pal = item">\r
                调色板{{ \`\${item}\` }}\r
            </button>\r
            <label for="wireframe"\r
                ><input type="checkbox" name="wireframe" id="wireframe" v-model="wireframe" />线框</label\r
            >\r
        </div>\r
        <!-- 指南针 -->\r
        <div class="compass" ref="compassRef"></div>\r
        <!-- 状态栏 -->\r
        <div class="state">\r
            <div class="location">\r
                <span>经度：{{ location.x.toFixed(6) }}° </span>\r
                <span>纬度：{{ location.y.toFixed(6) }}° </span>\r
                <span>海拔：{{ location.z.toFixed(1) }}m </span>\r
            </div>\r
            <div class="loading">{{ loading }}</div>\r
        </div>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
    import { ACESFilmicToneMapping, Color, Vector3 } from "three";\r
    import * as tt from "three-tile";\r
    import * as plugin from "three-tile/plugin";\r
    import { onMounted, onUnmounted, ref, watch } from "vue";\r
    import { CloudMesh } from "./cloudMesh";\r
    import { useLoading } from "../hooks/useLoading";\r
    import { useLocation } from "../hooks/useLocation";\r
\r
    import { useCompass } from "../hooks/useCompass";\r
    import "../style.css";\r
\r
    //=======================================================================\r
\r
    // 创建地图\r
    const createMap = () => {\r
        const map = tt.TileMap.create({\r
            imgSource: [\r
                new plugin.GDSource({ style: "6" }), // 高德卫星影像\r
                new plugin.GDSource({ style: "8" }), // 高德路网\r
            ],\r
            lon0: 90,\r
            bounds: [60, 0, 145, 60],\r
        });\r
        map.rotateX(-Math.PI / 2);\r
\r
        // 降低地图亮度\r
        map.addEventListener("tile-loaded", (e) => {\r
            e.tile.model!.material.forEach((mat) => {\r
                "color" in mat && (mat.color as Color).set(0xaaaaaa);\r
            });\r
        });\r
        return map;\r
    };\r
\r
    // 初始化场景\r
    const createViewer = () => {\r
        const viewer = new plugin.GLViewer();\r
        viewer.scene.background = new Color(0);\r
        viewer.scene.fog = null;\r
        viewer.dirLight.intensity = 2.0;\r
        viewer.controls.zoomToCursor = true;\r
        return viewer;\r
    };\r
\r
    // 限制地图缩放和移动范围\r
    const limitMapBounds = (map: tt.TileMap, viewer: plugin.GLViewer) => {\r
        viewer.controls.maxDistance = 5e6;\r
        const minPan = map.geo2world(new Vector3(map.bounds[0], map.bounds[3]));\r
        const maxPan = map.geo2world(new Vector3(map.bounds[2], map.bounds[1]));\r
        const vec = new Vector3();\r
        viewer.controls.addEventListener("change", function () {\r
            vec.copy(viewer.controls.target);\r
            viewer.controls.target.clamp(minPan, maxPan);\r
            vec.sub(viewer.controls.target);\r
            viewer.camera.position.sub(vec);\r
        });\r
    };\r
\r
    // 跳转\r
    const goto = (viewer: plugin.GLViewer, map: tt.TileMap, centerGeo: Vector3, cameraGeo: Vector3) => {\r
        viewer.controls.target.copy(map.geo2world(centerGeo));\r
        viewer.camera.position.copy(map.geo2world(cameraGeo));\r
    };\r
\r
    // 创建卫星云图模型\r
    const crateCloudMesh = () => {\r
        const cloudMesh = new CloudMesh(1058 / 2, 840 / 2);\r
        cloudMesh.scale.set(8e6, 7e6, 2e5);\r
        cloudMesh.position.set(1.5e6, 4e6, 1000);\r
        cloudMesh.renderOrder = 999;\r
        return cloudMesh;\r
    };\r
\r
    //=======================================================================\r
\r
    // 创建地图\r
    const map = createMap();\r
    // 初始化场景\r
    const viewer = createViewer();\r
    // 创建卫星云图模型\r
    const cloudMesh = crateCloudMesh();\r
\r
    // 地图容器\r
    const viewerRef = ref(null);\r
    // 指南针容器\r
    const compassRef = ref<HTMLElement>();\r
    // 添加指南针\r
    useCompass(viewer.controls, compassRef);\r
\r
    // 位置信息\r
    const location = useLocation(map, viewer);\r
    // 加载状态\r
    const loading = useLoading(map);\r
\r
    // 云图文件\r
    const cloudFile = ref("");\r
    watch(cloudFile, async (newVal) => {\r
        await cloudMesh.load(newVal);\r
    });\r
\r
    // 调色板\r
    const pal = ref(1);\r
    watch(pal, (newVal) => {\r
        cloudMesh.setPalttle(newVal);\r
    });\r
\r
    // 线框\r
    const wireframe = ref(false);\r
    watch(wireframe, (newVal) => {\r
        cloudMesh.material.wireframe = newVal;\r
    });\r
\r
    //=======================================================================\r
\r
    onMounted(() => {\r
        if (!viewerRef.value) {\r
            console.error("map or compass container is null");\r
            return;\r
        }\r
\r
        // 添加视图\r
        viewer.addTo(viewerRef.value);\r
\r
        // 添加地图\r
        viewer.scene.add(map);\r
\r
        // 添加卫星云图\r
        map.add(cloudMesh);\r
\r
        // 限制地图缩放和移动范围\r
        limitMapBounds(map, viewer);\r
\r
        // 跳转\r
        goto(viewer, map, new Vector3(105, 35, 0), new Vector3(105, 25, 3e6));\r
\r
        // 加载云图\r
        cloudFile.value = "../cloud/SATE_L1_F2G_VISSR_MWB_NOM_FDI-202107241900.HDF.png";\r
    });\r
\r
    onUnmounted(() => {\r
        cloudMesh.dispose();\r
        map.dispose();\r
    });\r
<\/script>\r
\r
<style scoped>\r
    .tools {\r
        position: absolute;\r
        top: 20px;\r
        right: 20px;\r
        display: flex;\r
        flex-direction: column;\r
        text-shadow: 0 0 1px black;\r
        background-color: #222b;\r
        border-radius: 5px;\r
        box-shadow: 0 0 2px black;\r
        gap: 10px;\r
        padding: 10px 0 10px 10px;\r
    }\r
</style>\r
`,D=JSON.parse('{"title":"伪三维卫星云图","description":"","frontmatter":{},"headers":[],"relativePath":"4.application/03.cloud.md","filePath":"4.application/03.cloud.md","lastUpdated":1761471651000}'),M={name:"4.application/03.cloud.md"},B=Object.assign(M,{setup(_){const i=o(!0),e=h();return c(async()=>{e.value=(await d(async()=>{const{default:r}=await import("./chunks/03.C9S1jTBc.js");return{default:r}},__vite__mapDeps([0,1,2,3]))).default}),(r,s)=>{const p=k("ClientOnly");return u(),m("div",null,[s[1]||(s[1]=l("h1",{id:"伪三维卫星云图",tabindex:"-1"},[b("伪三维卫星云图 "),l("a",{class:"header-anchor",href:"#伪三维卫星云图","aria-label":'Permalink to "伪三维卫星云图"'},"​")],-1)),E(n(a(w),null,null,512),[[v,i.value]]),n(p,null,{default:t(()=>[n(a(F),{title:"vue演示",description:"伪三维卫星云图",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{i.value=!1}),vueCode:a(f)},y({_:2},[e.value?{name:"vue",fn:t(()=>[n(a(e))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[2]||(s[2]=g("",3))])}}});export{D as __pageData,B as default};
