const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/index1.fzJFygee.js","assets/chunks/index.D1y5qgwe.js","assets/chunks/framework.xbTv8SNN.js","assets/chunks/index.VIxDFVpD.js"])))=>i.map(i=>d[i]);
import{D as d,v as p,V as m,p as y,C as g,c as _,o as b,j as n,a4 as v,G as t,a as u,a5 as f,k as a,w as i,a6 as h}from"./chunks/framework.xbTv8SNN.js";/* empty css                     */import{VitepressDemoPlaceholder as w,VitepressDemoBox as x}from"vitepress-demo-plugin";const V=`<template>
    <div class="container">
        <div ref="mapRef" class="map-container"></div>
        <div class="location-info" v-if="location">
            <span class="location-info-text">经度: {{ location.x.toFixed(6) }}°</span>
            <span class="location-info-text">纬度: {{ location.y.toFixed(6) }}°</span>
            <span class="location-info-text">海拔: {{ location.z.toFixed(6) }}m</span>
            <span class="location-info-text">FPS: {{ fps }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted, onUnmounted } from "vue";
    import * as THREE from "three";
    import * as tt from "three-tile";
    import * as plugin from "three-tile/plugin";

    const mapRef = ref(null);
    const location = ref({ x: 0, y: 0, z: 0 });
    const fps = ref(0);

    onMounted(() => {
        if (!mapRef.value) {
            return;
        }
        // 创建地图
        const map = tt.TileMap.create({
            // 影像数据源
            imgSource: new plugin.ArcGisSource(),
            // 地形数据源
            demSource: new plugin.ArcGisDemSource(),
            lon0: 90,
            debug: 1,
        });
        // 地图旋转到xz平面
        map.rotateX(-Math.PI / 2);
        // 初始化场景
        const viewer = new plugin.GLViewer(mapRef.value);
        // 地图添加到场景
        viewer.scene.add(map);

        setTimeout(() => {
            // 地图中心经纬度高度（m）转为世界坐标
            const centerPostion = map.geo2world(new THREE.Vector3(116.39180280130437, 39.915285657622775, 0));
            // 摄像机世界坐标
            const cameraPosition = new THREE.Vector3(centerPostion.x, 5000, centerPostion.z + 5000);
            viewer.flyTo(centerPostion, cameraPosition);
        }, 1000);

        viewer.addEventListener("update", (evt) => {
            if (Math.random() > 0.9) {
                fps.value = Math.round(1 / evt.delta);
            }
        });

        showLocation(viewer, map);

        onUnmounted(() => {
            map.dispose();
        });
    });

    const showLocation = (viewer: plugin.GLViewer, map: tt.TileMap) => {
        if (viewer.container) {
            viewer.container.addEventListener("pointermove", (evt) => {
                // 取得鼠标所指位置经纬度海拔高度信息
                location.value = plugin.getLocalFromMouse(evt, map, viewer.camera) || { x: 0, y: 0, z: 0 };
            });
        }
    };
<\/script>

<style scoped>
    .container {
        width: 100%;
        height: 600px;
        position: relative;
        color: #eee;
        text-shadow: 0 0 2px black;
    }
    .map-container {
        width: 100%;
        height: 100%;
        border: 1px solid #000;
    }
    .location-info {
        position: relative;
        bottom: 35px;
        height: 35px;
        line-height: 35px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background-color: #3338;
        color: white;
    }
    .location-info-text {
        width: 200px;
        text-align: center;
    }
</style>
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
`,R=JSON.parse('{"title":"8. vue 中使用","description":"","frontmatter":{},"headers":[],"relativePath":"2.base/08.forVue/index.md","filePath":"2.base/08.forVue/index.md","lastUpdated":1773756739000}'),M={name:"2.base/08.forVue/index.md"},B=Object.assign(M,{setup(L){const l=d();p(async()=>{l.value=(await m(async()=>{const{default:r}=await import("./chunks/index1.fzJFygee.js");return{default:r}},__vite__mapDeps([0,1,2]))).default});const o=y(!0),s=d();return p(async()=>{s.value=(await m(async()=>{const{default:r}=await import("./chunks/index.VIxDFVpD.js");return{default:r}},__vite__mapDeps([3,1,2]))).default}),(r,e)=>{const c=g("ClientOnly");return b(),_("div",null,[e[2]||(e[2]=n("h1",{id:"_8-vue-中使用",tabindex:"-1"},[u("8. vue 中使用 "),n("a",{class:"header-anchor",href:"#_8-vue-中使用","aria-label":'Permalink to "8. vue 中使用"'},"​")],-1)),e[3]||(e[3]=n("hr",null,null,-1)),e[4]||(e[4]=n("p",null,"使用 ref 取得 dom 作为地图容器，其它代码不变",-1)),e[5]||(e[5]=n("h3",{id:"_1-基础用法",tabindex:"-1"},[u("1. 基础用法 "),n("a",{class:"header-anchor",href:"#_1-基础用法","aria-label":'Permalink to "1. 基础用法"'},"​")],-1)),v(t(a(w),null,null,512),[[f,o.value]]),t(c,null,{default:i(()=>[t(a(x),{title:"vue演示",description:"鼠标左键拖动地图，右键旋转地图，滚轮缩放",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{o.value=!1}),vueCode:a(D)},h({_:2},[s.value?{name:"vue",fn:i(()=>[t(a(s))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[6]||(e[6]=n("h3",{id:"_2-绑定事件",tabindex:"-1"},[u("2. 绑定事件 "),n("a",{class:"header-anchor",href:"#_2-绑定事件","aria-label":'Permalink to "2. 绑定事件"'},"​")],-1)),v(t(a(w),null,null,512),[[f,o.value]]),t(c,null,{default:i(()=>[t(a(x),{title:"vue演示",description:"鼠标左键拖动地图，右键旋转地图，滚轮缩放",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[1]||(e[1]=()=>{o.value=!1}),vueCode:a(V)},h({_:2},[l.value?{name:"vue",fn:i(()=>[t(a(l))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[7]||(e[7]=n("div",{class:"warning custom-block"},[n("p",{class:"custom-block-title"},"WARNING"),n("p",null,"三维场景下，地图、摄像机、控制器等对象的很多属性是在每帧更新的，将其封装为 vue 的响应式变量可能会严重影响程序性能，需尽量避免这种操作。")],-1))])}}});export{R as __pageData,B as default};
