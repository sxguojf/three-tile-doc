<script setup lang="ts">
    import { onMounted, onUnmounted, reactive, ref, watch } from "vue";
    import {
        CubeTextureLoader,
        Group,
        Mesh,
        MeshPhongMaterial,
        SphereGeometry,
        TextureLoader,
        Vector2,
        Vector3,
        Color,
    } from "three";
    import { Easing, Tween } from "three/addons/libs/tween.module.js";
    import Stats from "three/addons/libs/stats.module.js";

    import * as tt from "three-tile";
    import * as plugin from "three-tile/plugin";
    import { PLViewer } from "./PLViewer";

    const mapRef = ref<HTMLDivElement>();
    const autoForward = ref<boolean>(false);

    const state = reactive({
        fireCount: 0,
        location: new Vector3(),
        loading: 0,
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
        const viewer = new PLViewer(mapRef.value);
        const { scene, camera, controls } = viewer;

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

        viewer.container?.addEventListener("click", (evt) => {
            if (!controls.isLocked) {
                controls.lock();
            } else if (evt.button === 2) {
                controls.unlock();
            }
        });

        watch(autoForward, (v) => (viewer.autoForward = v));

        map.addEventListener("update", () => {
            const focus = map.getLocalInfoFromScreen(camera, new Vector2(0, 0));
            if (focus) {
                const ll = map.world2geo(focus.point);
                state.location.copy(ll);
            }
            state.loading = map.downloading;
        });

        addStats(viewer);

        fireInit(viewer, map);

        onUnmounted(() => {
            map.dispose();
        });
    });

    const fireInit = (viewer: PLViewer, map: tt.TileMap) => {
        const { camera, container, cameraHeight, controls } = viewer;

        const bombGroup = new Group();
        map.add(bombGroup);

        // 创建一个球
        const ball = new Mesh(
            new SphereGeometry(),
            new MeshPhongMaterial({
                map: new TextureLoader().load("../test.jpg"),
                shininess: 3,
                transparent: true,
            })
        );

        // 监听click
        container?.addEventListener("click", (evt) => {
            if (!controls.isLocked || evt.button != 0) {
                return;
            }

            state.fireCount++;

            // clone一个球
            const aBall = ball.clone();
            aBall.scale.setScalar(cameraHeight / 40);
            bombGroup.add(aBall);

            // 球起点坐标：从摄像机位置开始
            const startPosition = map.worldToLocal(camera.getWorldPosition(new Vector3()));
            aBall.position.copy(startPosition);

            // 取得视线与地面交点
            const crossPoint = map.getLocalInfoFromScreen(camera, new Vector2(0, 0));
            // 球终点坐标：视线与地面有交点则取交点，无交点则取摄像机前方100km
            const endPostion = crossPoint
                ? map.worldToLocal(crossPoint.point)
                : map.worldToLocal(camera.localToWorld(new Vector3(0, 0, -100 * 1000)));

            // 球飞行时间
            const delay = crossPoint ? Math.log(crossPoint.distance) * 100 : 1000;
            // 球直线飞行动画
            new Tween(aBall.position).to(endPostion, delay).easing(Easing.Quadratic.Out).start();
            // 球边飞边转
            new Tween(aBall.rotation).to({ x: Math.PI, y: Math.PI, z: Math.PI }, delay).start();

            // 球减速下落动画(模拟重力作用)
            new Tween(aBall.position)
                .to({ z: endPostion.z }, delay)
                .easing(crossPoint ? Easing.Quadratic.In : Easing.Quartic.Out)
                .start()
                .onComplete(() => {
                    // 动画完成延迟销毁球
                    const dispose = () => {
                        aBall.removeFromParent();
                        aBall.geometry.dispose();
                        aBall.material.dispose();
                    };
                    if (crossPoint) {
                        setTimeout(dispose, 10 * delay);
                    } else {
                        dispose();
                    }
                });

            // 后坐力
            const pos = camera.position.clone();
            camera.position.sub(camera.getWorldDirection(new Vector3()).multiplyScalar(1000));
            setTimeout(() => {
                camera.position.copy(pos);
            }, 50);
        });
    };

    // 添加性能监视器
    function addStats(viewer: PLViewer) {
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
        <img class="focus" src="/focus.png" alt="" width="48px" height="48px" />

        <label class="forward" for="autoForward"
            >自动前进<input type="checkbox" id="autoForward" @change="autoForward = !autoForward"
        /></label>
        <div id="help"><b>WASD|Arrow</b>: 移动 | <b>Space</b>: 跳跃 | <b>Mouse</b>: 开火 | <b>Esc</b>: 退出</div>
        <div class="mapState">
            <div>FireCount: {{ state.fireCount }}</div>
            <div>Loading: {{ state.loading }}</div>
            <div>经度: {{ state.location.x.toFixed(3) }}°</div>
            <div>纬度: {{ state.location.y.toFixed(3) }}°</div>
            <div>高度: {{ state.location.z.toFixed(0) }} m</div>
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
