const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/04.CSy5Kv6j.js","assets/chunks/index.BXUrQien.js","assets/chunks/style.NnfX0RUE.js","assets/chunks/framework.BZ48x_LH.js","assets/chunks/useSky.CSQ3i_TO.js"])))=>i.map(i=>d[i]);
import{p as c,D as d,v as u,V as p,C as m,c as v,o as b,j as i,a4 as f,G as r,a as w,a5 as h,k as e,w as l,a6 as x}from"./chunks/framework.BZ48x_LH.js";import{R as g,k as L}from"./chunks/index.DCj37L2o.js";const k=`<template>\r
    <div class="demo-container">\r
        <div ref="viewerRef" class="map-container"></div>\r
        <div ref="cssrendererRef" class="cssrenderer"></div>\r
        <div class="tools">\r
            <div>\r
                等高线颜色：\r
                <button class="button" @click="contourLoader.color = 0xff0000">红色</button>\r
                <button class="button" @click="contourLoader.color = 0xff00ff">品红色</button>\r
                <button class="button" @click="contourLoader.color = 0x00ff00">绿色</button>\r
                <button class="button" @click="contourLoader.color = 0x0000ff">蓝色</button>\r
                <button class="button" @click="contourLoader.color = 0xffff00">黄色</button>\r
            </div>\r
\r
            <div>\r
                等高线间隔：\r
                <button class="button" @click="contourLoader.interval = 10">10m</button>\r
                <button class="button" @click="contourLoader.interval = 50">50m</button>\r
                <button class="button" @click="contourLoader.interval = 100">100m</button>\r
                <button class="button" @click="contourLoader.interval = 300">300m</button>\r
                <button class="button" @click="contourLoader.interval = 500">500m</button>\r
            </div>\r
\r
            <div>\r
                等高线宽度：\r
                <button class="button" @click="contourLoader.width = 1">1px</button>\r
                <button class="button" @click="contourLoader.width = 2">2px</button>\r
                <button class="button" @click="contourLoader.width = 3">3px</button>\r
                <button class="button" @click="contourLoader.width = 5">5px</button>\r
                <button class="button" @click="contourLoader.width = 0">0px</button>\r
            </div>\r
        </div>\r
        <div class="compass" ref="compassRef"></div>\r
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
    import { Vector2, Vector3 } from "three";\r
    import * as tt from "three-tile";\r
    import * as plugin from "three-tile/plugin";\r
    import { CSS2DObject, CSS2DRenderer } from "three/examples/jsm/Addons.js";\r
    import { onMounted, onUnmounted, ref } from "vue";\r
    import { ContourLoader } from "./ContourLoader";\r
    import { useCompass } from "./hooks/useCompass";\r
    import { useLoading } from "./hooks/useLoading";\r
    import { useLocation } from "./hooks/useLocation";\r
    import { useCloudSky } from "./hooks/useSky";\r
    import "./style.css";\r
\r
    //=================================================================================\r
    // 注册地形等高线加载器\r
    const contourLoader = new ContourLoader(0xff0000, 100, 1);\r
    tt.registerImgLoader(contourLoader);\r
\r
    // 创建地图\r
    const createMap = () => {\r
        const map = tt.TileMap.create({\r
            imgSource: [\r
                new plugin.ArcGisSource(), // ArcGis卫星影像数据源\r
                tt.TileSource.create({ dataType: "contour", minLevel: 10 }), // 等高线数据源\r
            ],\r
            demSource: new plugin.ArcGisDemSource(), // ArcGis地形数据源\r
            lon0: 90,\r
            bounds: [60, 0, 145, 60],\r
        });\r
        map.rotateX(-Math.PI / 2);\r
        return map;\r
    };\r
\r
    // 添加CSS2D图标\r
    const addIcon = (map: tt.TileMap, lonlat: Vector3) => {\r
        const position = map.geo2map(lonlat);\r
        const label = document.createElement("div");\r
        label.className = "a4-billboard";\r
        label.title = \`经纬度: \${lonlat.x.toFixed(2)}, \${lonlat.y.toFixed(2)}\`;\r
\r
        const heightLabel = document.createElement("div");\r
        heightLabel.className = "a4-height";\r
        heightLabel.textContent = \`\${lonlat.z.toFixed(1)}米\`;\r
        label.appendChild(heightLabel);\r
\r
        const labelObject = new CSS2DObject(label);\r
        labelObject.center.set(0.5, 1);\r
        labelObject.position.copy(position);\r
        map.add(labelObject);\r
\r
        label.addEventListener("pointerup", () => {\r
            labelObject.removeFromParent();\r
        });\r
    };\r
\r
    // 初始化CSS2D渲染器\r
    const initCSSRenderer = (viewer: plugin.GLViewer, map: tt.TileMap, element: HTMLElement) => {\r
        const css2dRenderer = new CSS2DRenderer({ element });\r
        const container = viewer.renderer.domElement;\r
        viewer.addEventListener("update", () => {\r
            css2dRenderer.render(viewer.scene, viewer.camera);\r
        });\r
        viewer.addEventListener("resize", () => {\r
            css2dRenderer.setSize(container.clientWidth, container.clientHeight);\r
        });\r
        const currentPoint = new Vector2();\r
        container.addEventListener("pointerdown", (evt) => {\r
            const lonlat = plugin.getLocalFromMouse(evt, map, viewer.camera);\r
            if (lonlat) {\r
                currentPoint.set(evt.x, evt.y);\r
            }\r
        });\r
        container.addEventListener("pointerup", (evt) => {\r
            const lonlat = plugin.getLocalFromMouse(evt, map, viewer.camera);\r
            if (lonlat && new Vector2(evt.x, evt.y).distanceTo(currentPoint) < 5) {\r
                addIcon(map, lonlat);\r
            }\r
        });\r
    };\r
\r
    // 跳转\r
    const goto = (viewer: plugin.GLViewer, map: tt.TileMap, centerGeo: Vector3, cameraGeo: Vector3) => {\r
        viewer.controls.target.copy(map.geo2world(centerGeo));\r
        viewer.camera.position.copy(map.geo2world(cameraGeo));\r
    };\r
\r
    //=================================================================================\r
    // 地图容器\r
    const viewerRef = ref(null);\r
    // CSS2D渲染器容器\r
    const cssrendererRef = ref(null);\r
    // 指南针容器\r
    const compassRef = ref<HTMLDivElement>();\r
\r
    // 创建地图\r
    const map = createMap();\r
    // 创建视图\r
    const viewer = new plugin.GLViewer();\r
\r
    // 位置信息\r
    const location = useLocation(map, viewer);\r
    // 加载状态\r
    const loading = useLoading(map);\r
\r
    // 指南针\r
    useCompass(viewer.controls, compassRef);\r
\r
    //=================================================================================\r
    onMounted(() => {\r
        if (!viewerRef.value || !cssrendererRef.value) {\r
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
        // 初始化CSS2D渲染器\r
        initCSSRenderer(viewer, map, cssrendererRef.value);\r
\r
        //添加蓝天白云\r
        useCloudSky(viewer.scene);\r
\r
        // 跳转\r
        goto(viewer, map, new Vector3(87, 28, 5000), new Vector3(87.03, 28.03, 8000));\r
\r
        // 防止摄像机穿过地面\r
        map.addEventListener("update", () => {\r
            plugin.limitCameraHeight(map, viewer.camera);\r
        });\r
    });\r
\r
    onUnmounted(() => {\r
        map.dispose();\r
    });\r
<\/script>\r
\r
<style scoped>\r
    .tools {\r
        position: absolute;\r
        bottom: 40px;\r
        right: 10px;\r
        display: flex;\r
        flex-direction: column;\r
        text-shadow: 0 0 5px black;\r
        background-color: #222b;\r
        border-radius: 5px;\r
        box-shadow: 0 0 2px black;\r
        gap: 10px;\r
        padding: 10px 0 10px 10px;\r
    }\r
    .cssrenderer {\r
        position: absolute;\r
        top: 0;\r
        pointer-events: none;\r
        overflow: hidden;\r
    }\r
</style>\r
<style>\r
    .a4-billboard {\r
        width: 40px;\r
        height: 100px;\r
        background-image: url("../border.png");\r
        background-size: cover;\r
        pointer-events: auto;\r
        filter: drop-shadow(0 0 2px black);\r
    }\r
    .a4-billboard:hover {\r
        cursor: pointer;\r
        filter: hue-rotate(180deg);\r
    }\r
    .a4-height {\r
        font-size: 12px;\r
        /* color: #fff; */\r
        text-shadow: 0 0 2px black;\r
        transform: translateY(-20px);\r
        text-align: center;\r
        white-space: nowrap;\r
    }\r
</style>\r
`,R=JSON.parse('{"title":"等高线","description":"","frontmatter":{},"headers":[],"relativePath":"4.application/04.contour.md","filePath":"4.application/04.contour.md","lastUpdated":1761368239000}'),S={name:"4.application/04.contour.md"},D=Object.assign(S,{setup(C){const o=c(!0),t=d();return u(async()=>{t.value=(await p(async()=>{const{default:a}=await import("./chunks/04.CSy5Kv6j.js");return{default:a}},__vite__mapDeps([0,1,2,3,4]))).default}),(a,n)=>{const s=m("ClientOnly");return b(),v("div",null,[n[1]||(n[1]=i("h1",{id:"等高线",tabindex:"-1"},[w("等高线 "),i("a",{class:"header-anchor",href:"#等高线","aria-label":'Permalink to "等高线"'},"​")],-1)),f(r(e(g),null,null,512),[[h,o.value]]),r(s,null,{default:l(()=>[r(e(L),{title:"vue演示",description:"地形等高线，地面单击标高，标牌单击删除",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:n[0]||(n[0]=()=>{o.value=!1}),vueCode:e(k)},x({_:2},[t.value?{name:"vue",fn:l(()=>[r(e(t))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1})])}}});export{R as __pageData,D as default};
