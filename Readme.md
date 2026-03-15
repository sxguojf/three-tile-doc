# three-tile

轻量级三维瓦片地图开发框架

[![GitHub stars](https://img.shields.io/github/stars/sxguojf/three-tile?style=flat)](https://github.com/sxguojf/three-tile/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/sxguojf/three-tile?style=flat)](https://github.com/sxguojf/three-tile/network)
[![npm version](https://img.shields.io/npm/v/three-tile?style=flat)](https://www.npmjs.com/package/three-tile)
[![npm downloads](https://img.shields.io/npm/dm/three-tile?style=flat)](https://www.npmjs.com/package/three-tile)

[在线文档](https://sxguojf.github.io/three-tile-doc/) | [GitHub 仓库](https://github.com/sxguojf/three-tile) | [问题反馈](https://github.com/sxguojf/three-tile/issues)

## 简介

three-tile 是一个开源的轻量级前端三维瓦片框架，基于 threejs 使用 TypeScript 开发，提供三维地形模型，能轻松给你的应用增加三维瓦片地图。经过数十版迭代，框架功能、效果能够满足生产环境使用，已在多个项目中得到验证和应用。

three-tile 更像是游戏开发中的 LOD 地形，但它可以使用地图服务商提供的地形和影像瓦片数据渲染地图。它的核心实际与地图无关，就是一个 LOD 模型，地图只是其典型应用之一。

::: warning 免责声明
本框架不含任何地图数据，示例和演示程序中使用的地图均为直接挂接第三方数据，并不代表本开发框架立场。开发者请遵循相关法律规定使用合法地图。
:::

## 特性

| 特性 | 说明 |
|------|------|
| **轻量级** | 打包后（不包括插件）不到70KB（zip：28KB），轻松集成到你的项目中 |
| **速度快** | 资源占用做到极致优化，内存占用少，渲染速度快，核显也能轻松达到60fps |
| **依赖少** | 目前仅 threejs（V0.171）一个外部依赖，各项功能均自主实现 |
| **易扩展** | 插件式架构，瓦片数据加载、解析、建模、渲染过程均与核心独立，扩展性强 |
| **使用简单** | 熟悉 threejs 基本上没有学习成本 |

## 应用场景

### 1. 给现有应用增加地形

在 threejs 示例中，大部分简单应用使用一个平面作为地面，如果能把平面换为真实地形，效果立马提升。仅需三步：

1. 定义地图数据源
2. 创建地图模型
3. 用地图替换原来的平面

### 2. 简单的 WebGIS

three-tile 地图模型可直接使用主流瓦片数据源，渲染出逼真的地形；提供地理坐标（经纬度海拔高度）到三维场景坐标的转换，能将地图元素（模型、标签）叠加在指定位置。

### 3. 游戏开发

完美支持 threejs 内置的各种控制器，仅更换控制器，即可实现第一人称、飞行等游戏功能。

### 4. 数据可视化

支持三维卫星云图、风场动画、体渲染等数据可视化场景。

## 快速开始

### 安装

```bash
npm i three -S
npm i three-tile -S
```

### 使用

```typescript
import * as THREE from "three";
import * as tt from "three-tile";
import * as plugin from "three-tile/plugin";

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
const viewer = new plugin.GLViewer("#map");
// 地图添加到场景
viewer.scene.add(map);
```

### Script 方式引入

```html
<script type="importmap">
    {
        "imports": {
            "three": "https://unpkg.com/three@0.171.0/build/three.module.js",
            "three-tile": "https://unpkg.com/three-tile@0.11.10/dist",
            "three-tile/plugin": "https://unpkg.com/three-tile@0.11.10/dist/plugin"
        }
    }
</script>
```

## 文档导航

### 基础

- [介绍](https://sxguojf.github.io/three-tile-doc/1.introduce/01.whatIs/) - three-tile 是什么、特点、应用场景
- [快速开始](https://sxguojf.github.io/three-tile-doc/1.introduce/02.getstart/) - 安装和基本使用

### 示例 (38个)

| 分类 | 示例 |
|------|------|
| 基础功能 | [获取鼠标位置](/docs/3.examples/01.getMouseLocation/) · [获取加载信息](/docs/3.examples/02.getLodingInfo/) · [设置地图缩放](/docs/3.examples/03.setMapZoom/) · [自定义地图源](/docs/3.examples/04.custmMapSource/) |
| 地图显示 | [假地球](/docs/3.examples/05.fakeEarth/) · [指南针](/docs/3.examples/06.compass/) · [限制相机高度](/docs/3.examples/07.limitCameraHeight/) · [天空盒](/docs/3.examples/08.skyBox/) |
| 地形控制 | [添加网格](/docs/3.examples/09.addMesh/) · [地形缩放](/docs/3.examples/10.terrainScale/) · [限制平移](/docs/3.examples/31.limitPan/) · [设置地图边界](/docs/3.examples/28.setMapBounds/) |
| 材质效果 | [添加阴影](/docs/3.examples/11.addShadow/) · [CSS滤镜](/docs/3.examples/12.addCssFilter/) · [添加天空](/docs/3.examples/16.addSky/) · [添加水面](/docs/3.examples/17.addWater/) |
| 数据叠加 | [GeoJSON](/docs/3.examples/13.addGeoJSON/) · [MVT](/docs/3.examples/14.addMVT/) · [WMS源](/docs/3.examples/27.useWMSSource/) · [CSS2D标签](/docs/3.examples/29.addCss2d/) |
| 模型加载 | [添加模型](/docs/3.examples/15.addModel/) · [图标标注](/docs/3.examples/20.addIcon/) · [Logo标注](/docs/3.examples/18.addLogo/) · [白色模型](/docs/3.examples/38.addWhiteModel/) |
| 地形特效 | [蒙版](/docs/3.examples/19.addMask/) · [单张DEM](/docs/3.examples/21.singleDem/) · [单张影像](/docs/3.examples/22.singleImage/) · [创建孔洞](/docs/3.examples/23.createHole/) · [多边形孔洞](/docs/3.examples/34.polyHole/) |
| 场景配置 | [背景](/docs/3.examples/24.background/) · [切换控制器](/docs/3.examples/25.changeControls/) · [地面组](/docs/3.examples/30.groundGroup/) · [2D地图](/docs/3.examples/33.2DMap/) |
| 高级应用 | [非地图瓦片](/docs/3.examples/32.notMapTile/) · [3DTiles渲染](/docs/3.examples/35.3dtilesRender/) · [SplatLuma](/docs/3.examples/36.splatLuma/) · [SplatDrei](/docs/3.examples/37.splatDrei/) |

### 应用案例 (7个)

| 案例 | 说明 |
|------|------|
| [第一人称](/docs/4.application/01.firstPerson/) | 第一人称视角漫游 |
| [飞行控制](/docs/4.application/02.flyControls/) | 自由飞行模式 |
| [行走漫游](/docs/4.application/03.walk/) | 地面行走漫游 |
| [云层渲染](/docs/4.application/04.cloud/) | 三维云图展示 |
| [等高线](/docs/4.application/05.contour/) | 地形等高线 |
| [大气效果](/docs/4.application/06.atmosphere/) | 大气渲染效果 |
| [GeoJSON 3D](/docs/4.application/07.GeoJSON3D/) | GeoJSON三维展示 |

### API 文档

- [核心库 API](https://sxguojf.github.io/three-tile-doc/api/lib/) - three-tile 核心库
- [插件 API](https://sxguojf.github.io/three-tile-doc/api/plugin/) - three-tile 插件

## 数据源支持

内置支持主流瓦片地图服务：

- ArcGIS
- Mapbox
- Bing
- Google
- 天地图
- 高德
- 腾讯

同时支持自定义瓦片数据源扩展。

## 项目结构

```
three-tile-doc/
├── docs/                      # 文档目录
│   ├── 1.introduce/          # 介绍文档
│   ├── 2.base/               # 基础教程
│   ├── 3.examples/           # 示例代码 (38个)
│   ├── 4.application/        # 应用案例 (7个)
│   ├── api/                  # API 文档
│   └── public/               # 静态资源
├── package.json
└── vite.config.ts
```

## 开发指南

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建文档
npm run build

# 预览
npm run preview
```

## 相关链接

- [框架源码](https://github.com/sxguojf/three-tile)
- [Vue 演示](https://sxguojf.github.io/mydemo/three-tile-vue/index.html)
- [在线示例](https://sxguojf.github.io/three-tile-example/)
- [问题讨论](https://github.com/sxguojf/three-tile/issues)

## 许可证

MIT License
