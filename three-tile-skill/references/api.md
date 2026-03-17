# API 参考

## 核心类

### TileMap

```typescript
const map = tt.TileMap.create(options)
```

**options:**
- `imgSource`: ISource | ISource[] - 影像数据源（必填）
- `demSource`: ISource - 地形数据源
- `minLevel`: number - 最小缩放级别，默认2
- `maxLevel`: number - 最大缩放级别（已废弃，自动调整）
- `lon0`: number - 投影中央经线，默认0
- `loader`: ITileLoader - 数据加载器
- `debug`: number - 调试模式

**方法:**
- `rotateX(angle)`: 旋转地图到 xz 平面
- `geo2world(vector3)`: 地理坐标转世界坐标
- `world2geo(vector3)`: 世界坐标转地理坐标
- `addLayer(layer)`: 添加图层
- `removeLayer(layer)`: 移除图层

### GLViewer

```typescript
const viewer = new plugin.GLViewer(container, options)
```

**container:** 容器选择器或 DOM 元素，如 `"#map"` 或 `document.getElementById("map")`

**options:**
- `antialias`: boolean - 抗锯齿
- `logarithmicDepthBuffer`: boolean - 对数深度缓冲

**属性:**
- `scene`: THREE.Scene - 场景
- `camera`: THREE.PerspectiveCamera - 相机
- `controls`: MapControls | OrbitControls - 控制器
- `controlsMode`: "MAP" | "ORBIT" - 控制器模式
- `container`: HTMLElement - 容器

**方法:**
- `flyTo(centerPosition: Vector3, cameraPosition: Vector3, animate?: boolean)`: 飞行到指定位置
- `flyToObject(object: Object3D)`: 飞行到对象位置
- `add(object)`: 添加对象到场景
- `remove(object)`: 从场景移除对象
- `dispose()`: 销毁释放资源

## 工具函数

### 鼠标交互

```typescript
const info = plugin.getLocalFromMouse(event, map, camera)
```
返回 `{ x: 经度, y: 纬度, z: 海拔 }` 或 `null`

### 坐标转换

```typescript
// 地理坐标转世界坐标
const worldPos = map.geo2world(new THREE.Vector3(lon, lat, alt))

// 世界坐标转地理坐标
const geoPos = map.world2geo(new THREE.Vector3(x, y, z))
```

## 事件

### 地图加载事件

```typescript
map.addEventListener("loading-start", (evt) => {
    // evt.itemsLoaded, evt.itemsTotal
})
map.addEventListener("loading-progress", (evt) => {
    // evt.itemsLoaded, evt.itemsTotal
})
map.addEventListener("loading-complete", () => {})
map.addEventListener("loading-error", (url) => {})
```

## 控制器

### MapControls

地图控制器，平移时地图贴合地面。

### OrbitControls

轨道控制器，可自由旋转视角。

### 控制器配置

```typescript
// 限制距离
viewer.controls.minDistance = 100;
viewer.controls.maxDistance = 5000;

// 限制角度
viewer.controls.maxPolarAngle = Math.PI / 2 - 0.1;

// 保存/恢复状态
viewer.controls.saveState();
viewer.controls.reset();
```
