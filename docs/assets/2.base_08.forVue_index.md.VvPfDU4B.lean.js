const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index1.CQh6i5yE.js","assets/chunks/index.xb0hfx6i.js","assets/chunks/framework.xbTv8SNN.js","assets/chunks/index.CJn3IYMv.js"])))=>i.map(i=>d[i]);
import{D as p,v as d,V as m,p as x,C as g,c as _,o as b,j as n,a4 as v,G as r,a as u,a5 as f,k as t,w as l,a6 as h}from"./chunks/framework.xbTv8SNN.js";import{R as w,k as y}from"./chunks/index.T3-yMMRo.js";const V=`<template>\r
    <div class="container">\r
        <div ref="mapRef" class="map-container"></div>\r
        <div class="location-info" v-if="location">\r
            <span class="location-info-text">经度: {{ location.x.toFixed(6) }}°</span>\r
            <span class="location-info-text">纬度: {{ location.y.toFixed(6) }}°</span>\r
            <span class="location-info-text">海拔: {{ location.z.toFixed(6) }}m</span>\r
            <span class="location-info-text">FPS: {{ fps }}</span>\r
        </div>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
    import { ref, onMounted, onUnmounted } from "vue";\r
    import * as THREE from "three";\r
    import * as tt from "three-tile";\r
    import * as plugin from "three-tile/plugin";\r
\r
    const mapRef = ref(null);\r
    const location = ref({ x: 0, y: 0, z: 0 });\r
    const fps = ref(0);\r
\r
    onMounted(() => {\r
        if (!mapRef.value) {\r
            return;\r
        }\r
        // 创建地图\r
        const map = tt.TileMap.create({\r
            // 影像数据源\r
            imgSource: new plugin.ArcGisSource(),\r
            // 地形数据源\r
            demSource: new plugin.ArcGisDemSource(),\r
            lon0: 90,\r
            debug: 1,\r
        });\r
        // 地图旋转到xz平面\r
        map.rotateX(-Math.PI / 2);\r
        // 初始化场景\r
        const viewer = new plugin.GLViewer(mapRef.value);\r
        // 地图添加到场景\r
        viewer.scene.add(map);\r
\r
        // 地图中心经纬度高度（m）转为世界坐标\r
        const centerPostion = map.geo2world(new THREE.Vector3(116.39180280130437, 39.915285657622775, 0));\r
        // 摄像机世界坐标\r
        const cameraPosition = new THREE.Vector3(centerPostion.x, 5000, centerPostion.z + 5000);\r
        viewer.flyTo(centerPostion, cameraPosition);\r
\r
        viewer.addEventListener("update", (evt) => {\r
            if (Math.random() > 0.9) {\r
                fps.value = Math.round(1 / evt.delta);\r
            }\r
        });\r
\r
        showLocation(viewer, map);\r
\r
        onUnmounted(() => {\r
            map.dispose();\r
        });\r
    });\r
\r
    const showLocation = (viewer: plugin.GLViewer, map: tt.TileMap) => {\r
        if (viewer.container) {\r
            viewer.container.addEventListener("pointermove", (evt) => {\r
                // 取得鼠标所指位置经纬度海拔高度信息\r
                location.value = plugin.getLocalFromMouse(evt, map, viewer.camera) || { x: 0, y: 0, z: 0 };\r
            });\r
        }\r
    };\r
<\/script>\r
\r
<style scoped>\r
    .container {\r
        width: 100%;\r
        height: 600px;\r
        position: relative;\r
        color: #eee;\r
        text-shadow: 0 0 2px black;\r
    }\r
    .map-container {\r
        width: 100%;\r
        height: 100%;\r
        border: 1px solid #000;\r
    }\r
    .location-info {\r
        position: relative;\r
        bottom: 35px;\r
        height: 35px;\r
        line-height: 35px;\r
        display: flex;\r
        flex-direction: row;\r
        justify-content: space-around;\r
        background-color: #3338;\r
        color: white;\r
    }\r
    .location-info-text {\r
        width: 200px;\r
        text-align: center;\r
    }\r
</style>\r
`,D=`<template>\r
    <div ref="mapRef" class="map-container"></div>\r
</template>\r
\r
<script setup lang="ts">\r
    import { ref, onMounted, onUnmounted } from "vue";\r
    import * as tt from "three-tile";\r
    import * as plugin from "three-tile/plugin";\r
\r
    const mapRef = ref(null);\r
\r
    onMounted(() => {\r
        if (!mapRef.value) {\r
            return;\r
        }\r
        // 创建地图\r
        const map = tt.TileMap.create({\r
            // 影像数据源\r
            imgSource: new plugin.ArcGisSource(),\r
            // 地形数据源\r
            demSource: new plugin.ArcGisDemSource(),\r
        });\r
        // 地图旋转到xz平面\r
        map.rotateX(-Math.PI / 2);\r
        // 初始化场景\r
        const viewer = new plugin.GLViewer(mapRef.value);\r
        // 地图添加到场景\r
        viewer.scene.add(map);\r
\r
        onUnmounted(() => {\r
            map.dispose();\r
        });\r
    });\r
<\/script>\r
\r
<style scoped>\r
    .map-container {\r
        width: 100%;\r
        height: 600px;\r
    }\r
</style>\r
`,k=JSON.parse('{"title":"8. vue 中使用","description":"","frontmatter":{},"headers":[],"relativePath":"2.base/08.forVue/index.md","filePath":"2.base/08.forVue/index.md","lastUpdated":1761902788000}'),M={name:"2.base/08.forVue/index.md"},A=Object.assign(M,{setup(L){const i=p();d(async()=>{i.value=(await m(async()=>{const{default:o}=await import("./chunks/index1.CQh6i5yE.js");return{default:o}},__vite__mapDeps([0,1,2]))).default});const a=x(!0),s=p();return d(async()=>{s.value=(await m(async()=>{const{default:o}=await import("./chunks/index.CJn3IYMv.js");return{default:o}},__vite__mapDeps([3,1,2]))).default}),(o,e)=>{const c=g("ClientOnly");return b(),_("div",null,[e[2]||(e[2]=n("h1",{id:"_8-vue-中使用",tabindex:"-1"},[u("8. vue 中使用 "),n("a",{class:"header-anchor",href:"#_8-vue-中使用","aria-label":'Permalink to "8. vue 中使用"'},"​")],-1)),e[3]||(e[3]=n("hr",null,null,-1)),e[4]||(e[4]=n("p",null,"使用 ref 取得 dom 作为地图容器，其它代码不变",-1)),e[5]||(e[5]=n("h3",{id:"_1-基础用法",tabindex:"-1"},[u("1. 基础用法 "),n("a",{class:"header-anchor",href:"#_1-基础用法","aria-label":'Permalink to "1. 基础用法"'},"​")],-1)),v(r(t(w),null,null,512),[[f,a.value]]),r(c,null,{default:l(()=>[r(t(y),{title:"vue演示",description:"鼠标左键拖动地图，右键旋转地图，滚轮缩放",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[0]||(e[0]=()=>{a.value=!1}),vueCode:t(D)},h({_:2},[s.value?{name:"vue",fn:l(()=>[r(t(s))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[6]||(e[6]=n("h3",{id:"_2-绑定事件",tabindex:"-1"},[u("2. 绑定事件 "),n("a",{class:"header-anchor",href:"#_2-绑定事件","aria-label":'Permalink to "2. 绑定事件"'},"​")],-1)),v(r(t(w),null,null,512),[[f,a.value]]),r(c,null,{default:l(()=>[r(t(y),{title:"vue演示",description:"鼠标左键拖动地图，右键旋转地图，滚轮缩放",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[1]||(e[1]=()=>{a.value=!1}),vueCode:t(V)},h({_:2},[i.value?{name:"vue",fn:l(()=>[r(t(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[7]||(e[7]=n("div",{class:"warning custom-block"},[n("p",{class:"custom-block-title"},"WARNING"),n("p",null,"三维场景下，地图、摄像机、控制器等对象的很多属性是在每帧更新的，将其封装为 vue 的响应式变量可能会严重影响程序性能，需尽量避免这种操作。")],-1))])}}});export{k as __pageData,A as default};
