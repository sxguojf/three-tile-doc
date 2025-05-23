# 快速开始

:::danger 注意
three-tile V0.10.3 版本做了较大的重构，与之前的版本不兼容。更改主要有 2 点：

1. 代码结构做了调整，将原来的 three-tile.plugin 命名空间独立成一个子包，需要单独引入。
2. 应广大网友要求，地图坐标单位由公里改为米，以与主流 GIS 类软件保持一致。

改动较大，升级需要谨慎
:::

## 1. npm 安装

```bash
npm i three -S
npm i three-tile -S
```

## 2. yarn 安装

```bash
yarn add three -S
yarn add three-tile -S
```

## 3. script 引入

```html
<script type="importmap">
  {
    "imports": {
      "three": "https://unpkg.com/three@0.171.0/build/three.module.js",
      "three-tile": "https://unpkg.com/three-tile@0.11.2/dist",
      "three-tile-plugin": "https://unpkg.com/three-tile@0.11.2/dist/plugin"
    }
  }
</script>
```

## 4. 使用示例

这是一个最简单的 three-tile 程序，展示了如何在网页中添加一个三维地图，使用 arcgis 影像和地形数据:

<demo html="demo/00.html" title="Example", description="three-tile 最小化示例，鼠标左键拖动地图，右键旋转地图，滚轮缩放"></demo>

```ts
import * as THREE from "three";
import * as tt from "three-tile";
import * as plugin from "three-tile-plugin";
// npm 安装引入
// import * as plugin from "three-tile/plugin";

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

上面的地图略显简陋，但运行还是十分流畅的，当你将地图移动旋转到合适的位置时，你会发现几乎能达到以假乱真的效果。

![alt text](./image.png)
