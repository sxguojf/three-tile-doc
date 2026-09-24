const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/FlyControls.CRYQNtAJ.js","assets/chunks/framework.xbTv8SNN.js","assets/chunks/index.D1y5qgwe.js","assets/chunks/useState.EiXjSKHF.js","assets/chunks/GLTFLoader.DVBwtb6Q.js","assets/chunks/BufferGeometryUtils.DcNFALRP.js","assets/chunks/useSky.CzLXMfkB.js","assets/chunks/tween.module.BLfFZSQj.js"])))=>i.map(i=>d[i]);
import{p as k,D as r,v as d,V as o,C as E,c as y,o as c,j as t,a4 as g,G as i,a2 as F,a as u,a5 as b,k as a,w as p,a6 as m}from"./chunks/framework.xbTv8SNN.js";import{I as A,$ as D}from"./chunks/index.Dw17pxVn.js";const C=`<script setup lang="ts">
    import { Group, Vector3 } from "three";
    import { onMounted, onUnmounted, ref, watch } from "vue";

    import { useStats } from "../hooks";
    import { init, initFly } from "./init";

    // 游戏地点的经纬度
    const locations = {
        喜马拉雅: new Vector3(86, 28, 1e4),
        北京: new Vector3(116.4, 39.45, 2e3),
        上海: new Vector3(121.47, 31, 2e3),
        重庆: new Vector3(106.54, 29, 3e3),
        广州: new Vector3(113.27, 23, 2e3),
        西安: new Vector3(108.95, 34, 2e3),
        香港: new Vector3(114.07, 22.3, 2e3),
        富士山: new Vector3(138.73, 35, 4e3),
    };

    // 场景容器
    const viewerRef = ref<HTMLDivElement>();

    // 飞行高度
    const flyHeight = ref<number>(0);

    // 初始化场景、地图
    const { viewer, map, goto, startGeo } = init(locations["喜马拉雅"]);

    // 添加性能指示器
    const statsRef = ref<HTMLElement>();
    const stats = useStats(statsRef);
    const onViewerUpdate = () => stats.update();

    // 自动前进
    const autoForward = ref<boolean>(viewer.controls.autoForward);
    watch(autoForward, (val) => (viewer.controls.autoForward = val));

    // 鼠标控制
    const dragToLook = ref<boolean>(!viewer.controls.dragToLook);
    watch(dragToLook, (val) => (viewer.controls.dragToLook = !val));

    // 加载音效
    const audio = new Audio("../../sounds/plane.mp3");
    audio.loop = true;
    // 音效控制
    const sound = ref(false);
    watch(sound, (val) => {
        val ? audio.play() : audio.pause();
    });

    // 撞地恢复定时器（防止每帧重复创建）
    let crashTimer: ReturnType<typeof setTimeout> | undefined;
    // 飞行模型清理方法
    let disposeFly: (() => void) | undefined;

    // 撞地效果
    const hitGround = (model: Group) => {
        model.rotateOnAxis(new Vector3(0, 1, 0), 0.2);
        viewer.dirLight.intensity = Math.random() * 4;
        if (crashTimer !== undefined) return;
        viewer.controls.enabled = false;
        crashTimer = setTimeout(() => {
            crashTimer = undefined;
            viewer.controls.enabled = true;
            viewer.dirLight.intensity = 1;
            goto(startGeo);
        }, 1000);
    };

    onMounted(async () => {
        if (!viewerRef.value) {
            console.error("map container not found");
            return;
        }

        // 场景添加进容器
        viewer.addTo(viewerRef.value);

        // 初始化飞行模型
        try {
            const handle = await initFly(viewer, map, (height) => {
                // 飞行高度
                flyHeight.value = height;
                // 撞地
                if (height < -50) {
                    hitGround(handle.model);
                }
            });
            disposeFly = handle.dispose;
        } catch (e) {
            console.error("加载飞行模型失败:", e);
        }

        // 更新性能指示器
        viewer.addEventListener("update", onViewerUpdate);
    });

    onUnmounted(() => {
        viewer.removeEventListener("update", onViewerUpdate);
        disposeFly?.();
        if (crashTimer !== undefined) {
            clearTimeout(crashTimer);
            crashTimer = undefined;
        }
        viewer.dispose();
        map.dispose();
        audio.pause();
        audio.src = "";
    });
<\/script>

<template>
    <div class="map-container">
        <div ref="viewerRef" class="map"></div>
        <div id="help"><b>按任意键开始</b>，<b>WASD</b> 移动，<b>R|F</b> 升降，<b>Q|E</b> 翻滚，<b>方向键</b> 转向</div>
        <div class="options" tabindex="-1">
            <button class="button" tabindex="-1" v-for="(loc, name) in locations" :key="name" @click="goto(loc)">
                {{ name }}
            </button>

            <br />
            <label for="autoForward"
                >自动前进<input type="checkbox" id="autoForward" v-model="autoForward" /></label>
            <label for="dragToLook"
                >鼠标跟随<input type="checkbox" id="dragToLook" v-model="dragToLook" /></label>
            <label class="sound" for="sound"
                >飞机音效<input type="checkbox" id="sound" v-model="sound" /></label>
        </div>
        <div class="mapState">
            <div>飞行高度: {{ flyHeight.toFixed(0) }} m</div>
        </div>
        <div class="stats" ref="statsRef"></div>
    </div>
</template>

<style scoped>
    .map-container {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        color: #ffffff;
        height: 600px;
        text-shadow: 0 0 2px black;
    }
    .map {
        width: 100%;
        height: 100%;
    }

    .mapState {
        position: absolute;
        right: 20px;
        top: 20px;
    }
    #help {
        position: absolute;
        left: 30px;
        top: 20px;
    }
    .stats {
        position: absolute;
        bottom: 20px;
        left: 20px;
    }
    .options {
        position: absolute;
        right: 20px;
        bottom: 20px;
        display: flex;
        flex-direction: column;
    }

    .button {
        background-color: #333;
        border: 1px solid gray;
        border-radius: 5px;
        padding: 0 5px;
        box-shadow: 0 0 5px black;
        margin-bottom: 5px;
    }

    .button:hover {
        background-color: #222;
    }

    .button:active {
        color: #888;
    }
</style>
`,x=JSON.parse('{"title":"2. 第三人称飞行","description":"","frontmatter":{},"headers":[],"relativePath":"4.application/02.flyControls/index.md","filePath":"4.application/02.flyControls/index.md","lastUpdated":1790242985000}'),v={name:"4.application/02.flyControls/index.md"},_=Object.assign(v,{setup(f){const l=k(!0),n=r();return d(async()=>{n.value=(await o(async()=>{const{default:e}=await import("./chunks/FlyControls.CRYQNtAJ.js");return{default:e}},__vite__mapDeps([0,1,2,3,4,5,6,7]))).default}),(e,s)=>{const h=E("ClientOnly");return c(),y("div",null,[s[1]||(s[1]=t("h1",{id:"_2-第三人称飞行",tabindex:"-1"},[u("2. 第三人称飞行 "),t("a",{class:"header-anchor",href:"#_2-第三人称飞行","aria-label":'Permalink to "2. 第三人称飞行"'},"​")],-1)),g(i(a(A),null,null,512),[[b,l.value]]),i(h,null,{default:p(()=>[i(a(D),{title:"vue演示",description:"按任意键开始，WASD 键控制水平移动，RF 键控制升降，上下左右键控制转向，或用鼠标引导飞行方向",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:s[0]||(s[0]=()=>{l.value=!1}),vueCode:a(C)},m({_:2},[n.value?{name:"vue",fn:p(()=>[i(a(n))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[2]||(s[2]=F("",7))])}}});export{x as __pageData,_ as default};
