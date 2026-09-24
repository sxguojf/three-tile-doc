const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/Contour.Cfq9WWli.js","assets/chunks/framework.xbTv8SNN.js","assets/chunks/index.D1y5qgwe.js","assets/chunks/style.pzVcPuTj.js","assets/chunks/useSky.CzLXMfkB.js","assets/chunks/useFog.I61zHw26.js"])))=>i.map(i=>d[i]);
import{p as d,D as p,v as u,V as m,C as v,c as w,o as f,j as n,a4 as g,G as o,a as t,a5 as b,k as r,w as s,a6 as h}from"./chunks/framework.xbTv8SNN.js";import{I as x,$ as L}from"./chunks/index.Dw17pxVn.js";const C=`<template>
    <div class="demo-container">
        <div ref="viewerRef" class="map-container"></div>
        <div ref="cssrendererRef" class="cssrenderer"></div>
        <div class="tools">
            <label>等高线颜色 <input type="color" v-model="contourColor" /></label>
            <label
                >等高线间隔 <input type="range" min="100" max="500" step="100" v-model="contourInterval" />
                {{ contourInterval }}米
            </label>
            <label>
                等高线宽度 <input type="range" min="0" max="5" step="1" v-model="contourWidth" />
                {{ contourWidth }}px
            </label>
            <label for="fogFactor">
                场景雾浓度 <input type="range" id="fogFactor" min="0" max="5" step="0.1" v-model="fogFactor" />
                {{ fogFactor }}
            </label>
        </div>
        <div class="compass" ref="compassRef"></div>
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
        bottom: 40px;
        right: 10px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        background-color: #222b;
        border-radius: 5px;
        box-shadow: 0 0 2px black;
        padding: 15px;
        width: 220px;
    }

    .tools > label > input {
        vertical-align: middle;
        width: 65px;
    }

    .cssrenderer {
        position: absolute;
        top: 0;
        pointer-events: none;
        overflow: hidden;
    }
</style>
<style>
    .a4-billboard {
        width: 40px;
        height: 100px;
        background-image: url("/images/border.png");
        background-size: cover;
        pointer-events: auto;
        filter: drop-shadow(0 0 2px black);
    }
    .a4-billboard:hover {
        cursor: pointer;
        filter: hue-rotate(180deg);
    }
    .a4-height {
        font-size: 12px;
        text-shadow: 0 0 5px black;
        transform: translateY(-20px);
        text-align: center;
        white-space: nowrap;
    }
</style>

<script setup lang="ts">
    import { ACESFilmicToneMapping, Vector2, Vector3 } from "three";
    import * as tt from "three-tile";
    import * as plugin from "three-tile/plugin";
    import { CSS2DObject, CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
    import { onMounted, onUnmounted, ref, watch } from "vue";
    import { ContourLoader } from "./ContourLoader";
    import { useLoading, useLocation, useCompass, useCloudSky } from "../hooks";
    import "../style.css";
    import { useFog } from "../hooks/useFog";

    //=================================================================================
    // 注册地形等高线加载器
    const contourLoader = new ContourLoader(0, 100, 1);
    tt.registerImgLoader(contourLoader);

    // 创建地图
    const createMap = () => {
        const map = tt.TileMap.create({
            imgSource: [
                new plugin.ArcGisSource(), // ArcGis卫星影像数据源
                tt.TileSource.create({ dataType: "contour", minLevel: 10 }), // 等高线数据源
            ],
            demSource: new plugin.ArcGisDemSource(), // ArcGis地形数据源
            lon0: 90,
            bounds: [60, 0, 145, 60],
        });
        map.rotateX(-Math.PI / 2);
        return map;
    };

    // 添加CSS2D图标
    const addIcon = (map: tt.TileMap, lonlat: Vector3) => {
        const position = map.geo2map(lonlat);
        const label = document.createElement("div");
        label.className = "a4-billboard";
        label.title = \`经纬度: \${lonlat.x.toFixed(2)}, \${lonlat.y.toFixed(2)}\`;

        const heightLabel = document.createElement("div");
        heightLabel.className = "a4-height";
        heightLabel.textContent = \`\${lonlat.z.toFixed(1)}米\`;
        label.appendChild(heightLabel);

        const labelObject = new CSS2DObject(label);
        labelObject.center.set(0.5, 1);
        labelObject.position.copy(position);
        map.add(labelObject);

        label.addEventListener("pointerup", () => {
            labelObject.removeFromParent();
        });
        return labelObject;
    };

    // 初始化CSS2D渲染器
    const initCSSRenderer = (viewer: plugin.GLViewer, map: tt.TileMap, element: HTMLElement) => {
        const css2dRenderer = new CSS2DRenderer({ element });
        const container = viewer.renderer.domElement;
        viewer.addEventListener("update", () => {
            css2dRenderer.render(viewer.scene, viewer.camera);
        });
        viewer.addEventListener("resize", () => {
            css2dRenderer.setSize(container.clientWidth, container.clientHeight);
        });
        const currentPoint = new Vector2();
        container.addEventListener("pointerdown", (evt) => {
            const lonlat = plugin.getLocalFromMouse(evt, map, viewer.camera);
            if (lonlat) {
                currentPoint.set(evt.x, evt.y);
            }
        });
        container.addEventListener("pointerup", (evt) => {
            const lonlat = plugin.getLocalFromMouse(evt, map, viewer.camera);
            if (lonlat && new Vector2(evt.x, evt.y).distanceTo(currentPoint) < 5) {
                addIcon(map, lonlat);
            }
        });
        return css2dRenderer;
    };

    // 跳转
    const goto = (viewer: plugin.GLViewer, map: tt.TileMap, centerGeo: Vector3, cameraGeo: Vector3) => {
        viewer.controls.target.copy(map.geo2world(centerGeo));
        viewer.camera.position.copy(map.geo2world(cameraGeo));
        return { centerPos: viewer.controls.target, cameraPos: viewer.camera.position };
    };

    //=================================================================================
    // 地图容器
    const viewerRef = ref(null);
    // CSS2D渲染器容器
    const cssrendererRef = ref(null);
    // 指南针容器
    const compassRef = ref<HTMLDivElement>();

    // 创建地图
    const map = createMap();
    // 创建视图
    const viewer = new plugin.GLViewer();
    viewer.renderer.toneMapping = ACESFilmicToneMapping;

    // 位置信息
    const location = useLocation(map, viewer);

    // 加载状态
    const loading = useLoading(map);

    // 等高线颜色
    const contourColor = ref("#000000");
    watch(contourColor, (newVal) => {
        contourLoader.color = newVal;
    });

    // 等高线间隔
    const contourInterval = ref(100);
    watch(contourInterval, (newVal) => {
        contourLoader.interval = Number(newVal);
    });

    // 等高线宽度
    const contourWidth = ref(1);
    watch(contourWidth, (newVal) => {
        contourLoader.width = Number(newVal);
    });

    // 雾浓度
    const { fogFactor } = useFog(viewer);

    // 指南针
    useCompass(viewer.controls, compassRef);

    //=================================================================================
    onMounted(() => {
        if (!viewerRef.value || !cssrendererRef.value) {
            console.error("map or cssrenderer container is null");
            return;
        }

        // 添加视图
        viewer.addTo(viewerRef.value);

        // 添加地图
        viewer.scene.add(map);

        // 初始化CSS2D渲染器
        initCSSRenderer(viewer, map, cssrendererRef.value);

        //添加蓝天白云
        useCloudSky(viewer.scene);

        // 跳转
        goto(viewer, map, new Vector3(87, 28, 5000), new Vector3(87.03, 28.03, 8000));

        // 防止摄像机穿过地面
        map.addEventListener("update", () => {
            plugin.limitCameraHeight(map, viewer.camera);
        });
    });

    onUnmounted(() => {
        viewer.dispose();
        map.dispose();
    });
<\/script>
`,V=JSON.parse('{"title":"5. 等高线","description":"","frontmatter":{},"headers":[],"relativePath":"4.application/05.contour/index.md","filePath":"4.application/05.contour/index.md","lastUpdated":1790253897000}'),S={name:"4.application/05.contour/index.md"},F=Object.assign(S,{setup(y){const l=d(!0),a=p();return u(async()=>{a.value=(await m(async()=>{const{default:i}=await import("./chunks/Contour.Cfq9WWli.js");return{default:i}},__vite__mapDeps([0,1,2,3,4,5]))).default}),(i,e)=>{const c=v("ClientOnly");return f(),w("div",null,[e[1]||(e[1]=n("h1",{id:"_5-等高线",tabindex:"-1"},[t("5. 等高线 "),n("a",{class:"header-anchor",href:"#_5-等高线","aria-label":'Permalink to "5. 等高线"'},"​")],-1)),g(o(r(x),null,null,512),[[b,l.value]]),o(c,null,{default:s(()=>[o(r(L),{title:"vue演示",description:"地形等高线，地面单击标高，标牌单击删除",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:r(C)},h({_:2},[a.value?{name:"vue",fn:s(()=>[o(r(a))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[2]||(e[2]=n("p",null,[t("等高线通过自定义着色器叠加在地形上：顶点着色器取局部高程（"),n("code",null,"position.z"),t("），片元着色器对等高线间隔取模得到等高线位置，利用 "),n("code",null,"fwidth"),t(" 在屏幕空间计算线宽并抗锯齿。")],-1)),e[3]||(e[3]=n("p",null,[t("影像加载器 "),n("code",null,"ContourLoader"),t(" 暴露了颜色、间隔、宽度三个属性，修改后即时作用于所有瓦片材质。")],-1)),e[4]||(e[4]=n("ul",null,[n("li",null,"单击地面：在点击处添加标高标牌"),n("li",null,"单击标牌：删除该标牌")],-1))])}}});export{V as __pageData,F as default};
