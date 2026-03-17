# 示例代码

## 基础地图

```typescript
import * as THREE from "three";
import * as tt from "three-tile";
import * as plugin from "three-tile/plugin";

const map = tt.TileMap.create({
    imgSource: new plugin.ArcGisSource(),
    demSource: new plugin.ArcGisDemSource(),
});
map.rotateX(-Math.PI / 2);

const viewer = new plugin.GLViewer("#map");
viewer.scene.add(map);

// 跳转到指定位置
const centerPostion = map.geo2world(new THREE.Vector3(116.39, 39.91, 0));
const cameraPosition = new THREE.Vector3(centerPostion.x, 5000, centerPostion.z + 5000);
viewer.flyTo(centerPostion, cameraPosition);
```

## 中国区域地图

```typescript
const map = tt.TileMap.create({
    imgSource: new plugin.ArcGisSource(),
    demSource: new plugin.ArcGisDemSource(),
    lon0: 90,  // 中央经线设为90度，中国区域居中
    minLevel: 3
});
```

## 显示鼠标位置

```typescript
viewer.container.addEventListener("pointermove", (evt) => {
    const info = plugin.getLocalFromMouse(evt, map, viewer.camera);
    if (info) {
        console.log(`经度:${info.x} 纬度:${info.y} 海拔:${info.z}`);
    }
});
```

## 加载进度显示

```typescript
map.addEventListener("loading-start", (evt) => {
    console.log(`开始: ${evt.itemsLoaded}/${evt.itemsTotal}`);
});
map.addEventListener("loading-progress", (evt) => {
    console.log(`加载中: ${evt.itemsLoaded}/${evt.itemsTotal}`);
});
map.addEventListener("loading-complete", () => {
    console.log("加载完成");
});
```

## 添加 3D 模型

```typescript
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const loader = new GLTFLoader();
loader.load("./building.glb", (gltf) => {
    const model = gltf.scene;
    const position = map.geo2world(new THREE.Vector3(116.39, 39.91, 0));
    model.position.copy(position);
    viewer.scene.add(model);
    viewer.flyToObject(model);
});
```

## 天空盒

```typescript
const skybox = new THREE.CubeTextureLoader()
    .setPath("./skybox/")
    .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);
viewer.scene.background = skybox;
```

## 限制相机高度

```typescript
viewer.controls.minDistance = 100;
viewer.controls.maxDistance = 5000;
viewer.controls.maxPolarAngle = Math.PI / 2 - 0.1;
```

## 切换控制器模式

```typescript
viewer.controlsMode = "MAP";    // 地图控制器
viewer.controlsMode = "ORBIT";  // 轨道控制器
```

## 多数据源叠加

```typescript
const map = tt.TileMap.create({
    imgSource: [
        new plugin.ArcGisSource(),
        new plugin.GDSource({ style: "8" })
    ],
    demSource: new plugin.ArcGisDemSource(),
});
```

## 保存/恢复地图状态

```typescript
viewer.controls.saveState();
viewer.controls.reset();
```

## 第一人称视角

```typescript
const viewer = new plugin.PLViewer("#map");
```

PLViewer 是 three-tile 对第一人称场景的封装。

## 添加阴影

```typescript
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1);
light.castShadow = true;
viewer.scene.add(light);

map.traverse((child) => {
    if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
    }
});
```

## 地形缩放

```typescript
map.scale.y = 2; // 地形高度放大2倍
```
