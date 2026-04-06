---
name: three-tile-usage
description: three-tile 三维瓦片地图框架的使用指南。用于创建三维地形地图应用，包括：安装配置、地图创建、数据源设置、添加模型和标注、GeoJSON 叠加、相机控制等常见功能。
---

# three-tile 使用指南

three-tile 是轻量级三维瓦片地图开发框架，基于 threejs (V0.171) 使用 TypeScript 开发，提供三维地形模型。

## 特性

- **轻量级**：打包后（不包括插件）不到70KB
- **速度快**：内存占用少，渲染速度快，核显也能轻松达到60fps
- **依赖少**：仅 threejs 一个外部依赖
- **易扩展**：插件式架构，瓦片数据加载、解析、建模、渲染过程均与核心独立
- **使用简单**：熟悉 threejs 基本上没有学习成本

## 快速开始

### 安装

```bash
npm i three -S
npm i three-tile -S
```

### Script 引入

```html
<script type="importmap">
{
    "imports": {
        "three": "https://unpkg.com/three@0.183.1/build/three.module.js",
        "three-tile": "https://unpkg.com/three-tile@0.11.14/dist",
        "three-tile/plugin": "https://unpkg.com/three-tile@0.11.14/dist/plugin"
    }
}
</script>
```

### 基础用法

```typescript
import * as THREE from "three";
import * as tt from "three-tile";
import * as plugin from "three-tile/plugin";

// 创建地图
const map = tt.TileMap.create({
    imgSource: new plugin.ArcGisSource(),
    demSource: new plugin.ArcGisDemSource(),
});
map.rotateX(-Math.PI / 2);

// 初始化场景
const viewer = new plugin.GLViewer("#map");
viewer.scene.add(map);
```

## 核心概念

### TileMap

地图主对象，通过 `tt.TileMap.create(options)` 创建。

常用选项：
- `imgSource`: 影像数据源（必填）
- `demSource`: 地形数据源
- `minLevel`: 最小缩放级别（默认2）
- `lon0`: 投影中央经线（默认0，中国区域设为90）

### GLViewer

场景查看器，管理 three.js 场景、相机、控制器。

```typescript
const viewer = new plugin.GLViewer("#map", {
    antialias: true
});
```

常用方法：
- `flyTo(centerPosition, cameraPosition, animate?)`: 飞行到指定位置
- `add(object)`: 添加对象
- `dispose()`: 销毁

### 数据源

内置支持：ArcGIS、Mapbox、Bing、Google、天地图、高德、腾讯

详见 [sources.md](references/sources.md)

## 应用场景

1. **给现有应用增加地形** - 将平面换为真实地形
2. **简单的 WebGIS** - 渲染逼真地形，地理坐标转换
3. **游戏开发** - 第一人称、飞行等游戏功能
4. **数据可视化** - 大气、卫星云图、风场动画等

详见 [examples.md](references/examples.md)

## 常用功能

### 获取鼠标位置

```typescript
const info = plugin.getLocalFromMouse(evt, map, viewer.camera);
// info.x = 经度, info.y = 纬度, info.z = 海拔
```

### 添加 3D 模型

```typescript
const loader = new THREE.GLTFLoader();
loader.load("./model.glb", (gltf) => {
    const model = gltf.scene;
    const position = map.geo2world(new THREE.Vector3(lon, lat, alt));
    model.position.copy(position);
    viewer.scene.add(model);
});
```

### 控制器切换

```typescript
viewer.controlsMode = "ORBIT";  // 轨道控制器
viewer.controlsMode = "MAP";    // 地图控制器
```

## 示例分类

| 分类 | 示例 |
|------|------|
| 基础功能 | 获取鼠标位置、获取加载信息、设置地图缩放、自定义地图源 |
| 地图显示 | 假地球、指南针、限制相机高度、天空盒 |
| 地形控制 | 添加网格、地形缩放、限制平移、设置地图边界 |
| 材质效果 | 添加阴影、CSS滤镜、添加天空、添加水面 |
| 数据叠加 | GeoJSON、MVT、WMS源、CSS2D标签 |
| 模型加载 | 添加模型、图标标注、Logo标注 |
| 地形特效 | 蒙版、单张DEM、单张影像、创建孔洞 |
| 场景配置 | 背景、切换控制器、地面组、2D地图 |
| 高级应用 | 非地图瓦片、3DTiles渲染、SplatLuma、SplatDrei |

## 应用案例

- 第一人称视角漫游
- 飞行控制
- 行走漫游
- 卫星云图渲染
- 等高线
- 大气效果
- GeoJSON三维建筑物展示

详见 [api.md](references/api.md)
