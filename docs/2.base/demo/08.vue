<template>
    <div ref="mapRef" class="map-container"></div>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from "vue";
    import * as tt from "three-tile";
    import * as plugin from "three-tile/plugin";

    const mapRef = ref(null);

    onMounted(() => {
        // 创建地图
        const map = tt.TileMap.create({
            // 影像数据源
            imgSource: new plugin.ArcGisSource(),
            // 地形数据源
            demSource: new plugin.ArcGisDemSource(),
        });
        // 地图旋转到xz平面
        map.rotateX(-Math.PI / 2);
        // 初始化场景
        const viewer = new plugin.GLViewer(mapRef.value);
        // 地图添加到场景
        viewer.scene.add(map);

        onUnmounted(() => {
            map.dispose();
        });
    });
</script>

<style>
    .map-container {
        width: 100%;
        height: 600px;
    }
</style>
