<script setup lang="ts">
    import { AnimationMixer, Color, CubeTextureLoader, Vector2, Vector3 } from "three";
    import Stats from "three/addons/libs/stats.module.js";
    import { onMounted, onUnmounted, reactive, ref, watch } from "vue";

    import * as tt from "three-tile";
    import * as plugin from "three-tile/plugin";
    import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
    import { FLViewer } from "./FLViewer";

    const mapRef = ref<HTMLDivElement>();
    const autoForward = ref<boolean>(false);

    const state = reactive({
        location: new Vector3(),
        loading: 0,
        modelHeight: 0,
    });

    // 创建地图
    const createMap = () => {
        const map = new tt.TileMap({
            // 影像数据源
            imgSource: new plugin.ArcGisSource(),
            // 地形数据源
            demSource: new plugin.ArcGisDemSource(),
            // 中央子午线经度
            lon0: 90,
            minLevel: 8,
            debug: 1,
        });
        // 地图旋转到xz平面
        map.rotateX(-Math.PI / 2);

        return map;
    };

    onMounted(() => {
        if (!mapRef.value) return;

        // 地图
        const map = createMap();

        // 场景
        const viewer = new FLViewer(mapRef.value);
        const { scene, camera } = viewer;

        //添加蓝天白云
        const skybox = new CubeTextureLoader()
            .setPath("../skybox4/")
            .load(["px.jpg", "nx.jpg", "py.jpg", "ny.jpg", "pz.jpg", "nz.jpg"]);
        scene.background = skybox;
        if (viewer.scene.fog) {
            viewer.scene.fog.color = new Color(0xd4dcea);
        }
        // 调整相机位置
        const cameraPosition = map.geo2world(new Vector3(86, 28, 1e4));
        camera.position.copy(cameraPosition);

        scene.add(map);

        watch(autoForward, (val) => (viewer.autoForward = val));

        addStats(viewer);

        onUnmounted(() => {
            map.dispose();
        });

        initFly(viewer, map);
    });

    const initFly = (viewer: FLViewer, map: tt.TileMap) => {
        const loader = new GLTFLoader();
        loader.loadAsync("../model/Parrot.glb").then((gltf) => {
            const model = gltf.scene;
            model.scale.setScalar(10);
            viewer.scene.add(model);

            // 动画
            const mixer = new AnimationMixer(model);
            mixer.clipAction(gltf.animations[0]).play();

            viewer.addEventListener("update", (evt: any) => {
                // 固定在摄像机前面
                model.position.set(0, -500, -2000);
                model.applyMatrix4(viewer.camera.matrixWorld);

                // 飞行高度
                const groundInfo = map.getLocalInfoFromWorld(model.position);
                if (groundInfo) {
                    state.modelHeight = model.position.y - groundInfo.point.y;
                }
                // 小鸟距地高度<100m撞死，否则动画飞行
                if (groundInfo && state.modelHeight <= 100) {
                    // 撞地死了
                    viewer.controls.movementSpeed = 0;
                    autoForward.value = false;
                } else {
                    const target = new Vector3(0, 0, -10000).applyMatrix4(viewer.camera.matrixWorld);
                    model.lookAt(target);
                    viewer.controls.movementSpeed = 2000;
                    mixer.update(evt.delta);
                }
            });
        });
    };

    // 添加性能监视器
    function addStats(viewer: FLViewer) {
        const stats = new Stats();
        stats.showPanel(0);
        stats.dom.style.position = "relative";
        document.querySelector("#stats")?.appendChild(stats.dom);
        viewer.addEventListener("update", () => stats.update());
    }
</script>

<template>
    <div class="map-container">
        <div ref="mapRef" class="map"></div>
        <div id="help">
            <b>WASD</b> move, <b>R|F</b> up | down, <b>Q|E</b> roll, <b>up|down</b> pitch, <b>left|right</b> yaw
        </div>
        <label class="forward" for="autoForward"
            >自动前进<input type="checkbox" id="autoForward" @change="autoForward = !autoForward"
        /></label>
        <div class="mapState">
            <div>飞行高度: {{ state.modelHeight.toFixed(0) }} m</div>
        </div>
        <div id="stats"></div>
    </div>
</template>

<style scoped>
    .map-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        color: #ffffff;
        height: 600px;
    }
    .map {
        width: 100%;
        height: 100%;
    }

    .focus {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0%);
        filter: drop-shadow(0 0 3px #ffffff);
        pointer-events: none;
    }
    .mapState {
        position: absolute;
        right: 30px;
        top: 80px;
        text-shadow: 1px 1px 1px black;
    }
    #help {
        position: absolute;
        left: 30px;
        top: 80px;
        text-shadow: 1px 1px 1px black;
    }
    #stats {
        position: absolute;
        top: 610px;
        left: 30px;
        z-index: 1000;
    }
    .forward {
        position: absolute;
        right: 30px;
        top: 630px;
        z-index: 1000;
    }
</style>
