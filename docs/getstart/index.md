# 快速开始

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
      "three": "https://unpkg.com/three@0.165.0/build/three.module.js",
      "three-tile": "https://unpkg.com/three-tile@0.8.5/dist/three-tile.js"
    }
  }
</script>
```

## 4. 使用示例

这是一个最简单的 three-tile 程序，展示了如何在网页中添加一个三维地图，鼠标左键拖动地图，右键旋转地图，滚轮缩放。

---

<iframe src="/three-tile-doc/first.html" style="width: 100%; height: 400px; border: none;"></iframe>

---

起步阶段我们使用 script 引入方式，在网页中添加一个三维地图。将以下代码复制到 html 文件中，然后替换其中的 `MAPBOXKEY` 为你自己的 MapBox Token。可以在 [MapBox](https://www.mapbox.com/) 网站上申请。

```html
<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
    />
    <title>three-tile最小化应用</title>
  </head>
  <style>
    html,
    body {
      background-color: #333;
      height: 100%;
      width: 100%;
      padding: 0;
      margin: 0;
      display: flex;
      overflow: hidden;
    }
    #map {
      flex: 1;
    }
  </style>

  <script type="importmap">
    {
      "imports": {
        "three": "https://unpkg.com/three@0.165.0/build/three.module.js",
        "three-tile": "https://unpkg.com/three-tile@0.8.5/dist/three-tile.js"
      }
    }
  </script>

  <body>
    <div id="map"></div>
    <script type="module">
      import * as THREE from "three";
      import * as tt from "three-tile";

      console.log(`three-tile v${tt.version} start!`);

      // MapBoxToken 请更换为你自己申请的key
      const MAPBOXKEY = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

      // mapbox影像数据源
      const mapBoxImgSource = new tt.plugin.MapBoxSource({
        token: MAPBOXKEY,
        dataType: "image",
        style: "mapbox.satellite",
      });
      // mapbox地形数据源
      const mapBoxDemSource = new tt.plugin.MapBoxSource({
        token: MAPBOXKEY,
        dataType: "terrain-rgb",
        style: "mapbox.terrain-rgb",
        maxLevel: 15,
      });

      // 创建地图
      const map = tt.TileMap.create({
        // 影像数据源
        imgSource: mapBoxImgSource,
        // 地形数据源
        demSource: mapBoxDemSource,
        // 地图投影中心经度
        lon0: 90,
      });
      // 地图旋转到xz平面
      map.rotateX(-Math.PI / 2);

      // 初始化场景
      const viewer = new tt.plugin.GLViewer("#map");

      // 地图添加到场景
      viewer.scene.add(map);
    </script>
  </body>
</html>
```

上面的地图略显丑陋，但运行还是十分流畅的，当你将地图移动旋转到合适的位置时，你会发现几乎能达到以假乱真的效果，下一步我们将一步一步完善它。

![alt text](image.png)
