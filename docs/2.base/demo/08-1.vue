<template>
    <div ref="mapRef" class="map-container"></div>
    <div class="location-info" v-if="location">
        <span class="location-info-text">经度: {{ location.x.toFixed(6) }}°</span>
        <span class="location-info-text">纬度: {{ location.y.toFixed(6) }}°</span>
        <span class="location-info-text">海拔: {{ location.z.toFixed(6) }}m</span>
        <span class="location-info-text">FPS: {{ fps }}</span>
    </div>
</template>

<script setup>
    import { ref, onMounted } from "vue";
    import * as THREE from "three";
    import * as tt from "three-tile";
    import * as plugin from "three-tile/plugin";

    const mapRef = ref(null);
    const location = ref({ x: 0, y: 0, z: 0 });
    const fps = ref(0);

    onMounted(() => {
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

        // 地图中心经纬度高度（m）转为世界坐标
        const centerPostion = map.geo2world(new THREE.Vector3(116.39180280130437, 39.915285657622775, 0));
        // 摄像机世界坐标
        const cameraPosition = new THREE.Vector3(centerPostion.x, 5000, centerPostion.z + 5000);
        viewer.flyTo(centerPostion, cameraPosition);

        viewer.addEventListener("update", (evt) => {
            if (Math.random() > 0.9) {
                fps.value = Math.round(1 / evt.delta);
            }
        });

        showLocation(viewer, map);
    });

    const showLocation = (viewer, map) => {
        const pointer = new THREE.Vector2();
        viewer.container.addEventListener("pointermove", (evt) => {
            // 取得鼠标所指位置经纬度海拔高度信息
            location.value = plugin.getLocalFromMouse(evt, map, viewer.camera);
        });
    };
</script>

<style scoped>
    .map-container {
        width: 100%;
        height: 600px;
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
        background-color: #333b;
        color: white;
        text-shadow: 0 0 5px black;
    }
    .location-info-text {
        width: 200px;
        text-align: center;
    }
</style>
