const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/Cloud.jaZOtxPL.js","assets/chunks/framework.xbTv8SNN.js","assets/chunks/index.D1y5qgwe.js","assets/chunks/style.pzVcPuTj.js"])))=>i.map(i=>d[i]);
import{p as c,D as d,v as p,V as m,C as u,c as v,o as w,j as t,a4 as f,G as n,a as h,a5 as g,k as o,w as l,a6 as x}from"./chunks/framework.xbTv8SNN.js";/* empty css                     */import{VitepressDemoPlaceholder as b,VitepressDemoBox as M}from"vitepress-demo-plugin";const _=`<template>
    <div class="demo-container">
        <!-- 地图 -->
        <div ref="viewerRef" class="map-container"></div>
        <!-- 工具栏 -->
        <div class="tools">
            <label v-for="item in [1, 2, 3, 4, 5]" :key="item">
                调色板 {{ item }} <input type="radio" :value="item" v-model="pal" />
            </label>
            <label for="wireframe">
                显示线框
                <input type="checkbox" name="wireframe" id="wireframe" v-model="wireframe" />
            </label>

            <div class="scale">
                <label for="scale">夸张</label>
                <input
                    type="range"
                    id="scale"
                    min="0.1"
                    max="2"
                    step="0.1"
                    v-model.number="cloudMesh.displacementScale"
                />
            </div>
            <div class="scale">
                <label for="bias">抬升</label>
                <input
                    type="range"
                    id="bias"
                    min="0"
                    max="2"
                    step="0.1"
                    v-model.number="cloudMesh.displacementBias"
                />
            </div>
        </div>
        <!-- 指南针 -->
        <div class="compass" ref="compassRef"></div>
        <!-- 状态栏 -->
        <div class="state">
            <div class="location">
                <span>经度：{{ location.x.toFixed(6) }}° </span>
                <span>纬度：{{ location.y.toFixed(6) }}° </span>
                <span>海拔：{{ location.z.toFixed(1) }}m </span>
            </div>
            <div class="loading">{{ loading }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ACESFilmicToneMapping, BoxHelper, Color, Vector3 } from "three";
    import * as tt from "three-tile";
    import * as plugin from "three-tile/plugin";
    import { onMounted, onUnmounted, ref, watch } from "vue";
    import { useLoading, useLocation, useCompass } from "../hooks";
    import { CloudMesh } from "./CloudMesh";

    import "../style.css";

    //=======================================================================

    // 创建地图
    const createMap = () => {
        const map = tt.TileMap.create({
            imgSource: [
                new plugin.GDSource({ style: "6" }), // 高德卫星影像
                new plugin.GDSource({ style: "8" }), // 高德路网
            ],
            lon0: 90,
            bounds: [60, 0, 145, 60],
        });
        map.rotateX(-Math.PI / 2);

        // 降低地图亮度
        map.addEventListener("tile-loaded", (e) => {
            e.tile.model?.material.forEach((mat) => {
                "color" in mat && (mat.color as Color).set(0xaaaaaa);
            });
        });
        return map;
    };

    // 初始化场景
    const createViewer = () => {
        const viewer = new plugin.GLViewer();
        viewer.scene.background = new Color(0x333333);
        viewer.scene.fog = null;
        viewer.dirLight.intensity = 2.0;
        viewer.renderer.toneMapping = ACESFilmicToneMapping;
        viewer.controls.zoomToCursor = true;
        return viewer;
    };

    // 限制地图缩放和移动范围
    const limitMapBounds = (map: tt.TileMap, viewer: plugin.GLViewer) => {
        viewer.controls.maxDistance = 5e6;
        const minPan = map.geo2world(new Vector3(map.bounds[0], map.bounds[3]));
        const maxPan = map.geo2world(new Vector3(map.bounds[2], map.bounds[1]));
        const vec = new Vector3();
        viewer.controls.addEventListener("change", function () {
            vec.copy(viewer.controls.target);
            viewer.controls.target.clamp(minPan, maxPan);
            vec.sub(viewer.controls.target);
            viewer.camera.position.sub(vec);
        });
    };

    // 跳转
    const goto = (viewer: plugin.GLViewer, map: tt.TileMap, centerGeo: Vector3, cameraGeo: Vector3) => {
        viewer.controls.target.copy(map.geo2world(centerGeo));
        viewer.camera.position.copy(map.geo2world(cameraGeo));
    };

    // 创建卫星云图模型
    const createCloudMesh = () => {
        const cloudMesh = new CloudMesh(1058 / 2, 840 / 2);
        cloudMesh.scale.set(8e6, 7e6, 2e5);
        cloudMesh.position.set(1.5e6, 4e6, 1000);
        cloudMesh.renderOrder = 999;
        return cloudMesh;
    };

    //=======================================================================

    // 创建地图
    const map = createMap();
    // 初始化场景
    const viewer = createViewer();
    // 创建卫星云图模型
    const cloudMesh = createCloudMesh();

    // 地图容器
    const viewerRef = ref<HTMLElement>();
    // 指南针容器
    const compassRef = ref<HTMLElement>();
    // 添加指南针
    useCompass(viewer.controls, compassRef);

    // 位置信息
    const location = useLocation(map, viewer);
    // 加载状态
    const loading = useLoading(map);

    // 调色板
    const pal = ref(1);
    watch(pal, (newVal) => {
        cloudMesh.setPalette(newVal);
    });

    // 线框
    const wireframe = ref(false);
    watch(wireframe, (newVal) => {
        cloudMesh.material.wireframe = newVal;
    });

    //=======================================================================

    onMounted(() => {
        if (!viewerRef.value) {
            console.error("Viewer container is null");
            return;
        }

        // 添加视图
        viewer.addTo(viewerRef.value);

        // 添加地图
        viewer.scene.add(map);

        // 添加卫星云图
        map.add(cloudMesh);

        // 添加辅助线框
        map.add(new BoxHelper(cloudMesh, 0xff0000));

        // 限制地图缩放和移动范围
        limitMapBounds(map, viewer);

        // 跳转
        goto(viewer, map, new Vector3(105, 35, 0), new Vector3(105, 25, 3e6));

        // 加载云图
        cloudMesh.load("../../cloud/SATE_L1_F2G_VISSR_MWB_NOM_FDI-202107241900.HDF.png");
    });

    onUnmounted(() => {
        viewer.dispose();
        cloudMesh.dispose();
        map.dispose();
    });
<\/script>

<style scoped>
    .map-container {
        width: 100%;
        height: 600px;
        display: flex;
        align-items: center;
        color: #ffffff;
        text-shadow: 0 0 2px black;
    }
    .tools {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 120px;
        display: flex;
        flex-direction: column;
        text-shadow: 0 0 2px black;
        background-color: #222b;
        border-radius: 5px;
        box-shadow: 0 0 2px black;
        gap: 10px;
        padding: 10px;
        align-items: center;
    }
    .scale {
        text-align: center;
        width: 90px;
    }
    .tools input[type="range"] {
        width: 90px;
    }
</style>
`,T=JSON.parse('{"title":"4. 伪三维卫星云图","description":"","frontmatter":{},"headers":[],"relativePath":"4.application/04.cloud/index.md","filePath":"4.application/04.cloud/index.md","lastUpdated":1765361805000}'),y={name:"4.application/04.cloud/index.md"},D=Object.assign(y,{setup(V){const i=c(!0),a=d();return p(async()=>{a.value=(await m(async()=>{const{default:r}=await import("./chunks/Cloud.jaZOtxPL.js");return{default:r}},__vite__mapDeps([0,1,2,3]))).default}),(r,e)=>{const s=u("ClientOnly");return w(),v("div",null,[e[1]||(e[1]=t("h1",{id:"_4-伪三维卫星云图",tabindex:"-1"},[h("4. 伪三维卫星云图 "),t("a",{class:"header-anchor",href:"#_4-伪三维卫星云图","aria-label":'Permalink to "4. 伪三维卫星云图"'},"​")],-1)),f(n(o(b),null,null,512),[[g,i.value]]),n(s,null,{default:l(()=>[n(o(M),{title:"vue演示",description:"伪三维卫星云图",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{i.value=!1}),vueCode:o(_)},x({_:2},[a.value?{name:"vue",fn:l(()=>[n(o(a))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[2]||(e[2]=t("p",null,"常用的卫星云是红外云图，它是一张二维灰度图片，像素值代表云顶亮温，亮温又与云顶高度相关，有了每个点的高度就可以模拟云的三维效果。",-1))])}}});export{T as __pageData,D as default};
