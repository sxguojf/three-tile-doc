<style>
   table{
        display: table !important;  
        height: 100%;  
   }
   table img {
        height: 100%; 
   }
  .badge{
      display: inline-block;
      margin-top: 30px;
      text-align: center;
      width: 100%;
  }  
  .badge >img{
      display: inline-block;
      margin-right: 10px;
  }
</style>



# three-tile 介绍

three-tile 是一个开源的轻量级前端三维瓦片框架，基于 threejs 使用 typescript 开发，提供一个三维地形模型，能轻松给你的应用增加三维瓦片地图。

| ![](./image-20240708192901949.png) | ![](./image-20240708195023555.png) | ![](./image-20240708194820946.png) | ![](./image-20240708193035753.png) |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
|                                    |                                    |                                    |                                    |

- 框架源码：https://github.com/sxguojf/three-tile 

- 开发示例：https://github.com/sxguojf/three-tile-example

- Vue 演示：https://sxguojf.github.io/mydemo/three-tile-vue/index.html

- 问题讨论：https://github.com/sxguojf/three-tile/issues

::: warning 免责声明：
本框架不含任何地图数据，示例和演示程序中使用的地图均为直接挂接第三方数据，并不代表本开发框架立场。开发者请遵循相关法律规定使用合法地图。
:::

## 1. three-tile 是什么？

- three-tile 是基于 threejs 开发的一套前端三维瓦片地图框架。
- three-tile 是基于 cesium、mapbox 等的二次封装吗？No，它是基于 threejs 自主实现的。
- three-tile 更像是游戏开发中的 LOD 地形，但它可以使用地图服务商提供的地形和影像瓦片数据渲染地图。
- three-tile 是 3D WebGis？No，它的 GIS 功能较弱，以数据可视化为主，无地理信息数据分析功能。
- three-tile 的核心实际与地图无关，它就是一个 LOD 模型，地图只是其典型应用之一。

## 2. three-tile 的特点

相比市面上常见三维地图，three-tile 有如下特点：

- 轻量级：地图以一个三维模型方式提供，使用它不会对已有程序架构产生任何影响。
- 依赖少：整个框架仅有 threejs（>=R165）一个依赖。
- 速度快：对资源占用做极致优化，核显也能轻松跑到 60FPS。
- 使用简单：熟悉 threejs 基本上没有学习成本。
- 扩展性强：插件架构，数据格式、模型、纹理、材质、渲染过程均能根据自己需要扩展和替换。

## 3. 应用场景

### 3.1 给现有应用增加地形

在 threejs 示例中，大部分简单应用使用一个平面作为地面，如果能把平面换为真实地形，立马增色不少：

| ![alt text](./image-1.png) | ![alt text](./image-2.png) |     ![](./image-3.png)     | ![alt text](./image-5.png) |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|      threejs 中的傻鸟      |加上地形，让它翱翔在青藏高原|   threejs 中可爱的小房子   |  西安南二环找块工地放上去  |
| [three.js examples (threejs.org)](https://threejs.org/examples/#webgl_lights_hemisphere) | [three-tile demo (sxguojf.github.io)](https://sxguojf.github.io/three-tile-example/step3.2/index.html) | [three.js examples (threejs.org)](https://threejs.org/examples/#webgl_animation_keyframes) | [three-tile demo (sxguojf.github.io)](https://sxguojf.github.io/three-tile-example/step2.10/index.html) |
| ![alt text](./image-6.png) |  ![image-20240708212408563](./image-20240708212408563.png)   | ![alt text](./image-8.png) | ![alt text](./image-9.png) |
|   threejs 中孤独的小兵兵   |     放到地图上执行任务     |  threejs 中平淡无奇的夕阳  |  加上地形才是它真正的效果  |
| [three.js examples (threejs.org)](https://threejs.org/examples/#webgl_animation_skinning_blending) | [three-tile demo (sxguojf.github.io)](https://sxguojf.github.io/three-tile-example/step3.4/index.html) | [three.js examples (threejs.org)](https://threejs.org/examples/#webgl_shaders_sky) | [three-tile demo (sxguojf.github.io)](https://sxguojf.github.io/three-tile-example/step2.11/index.html) |

而这一切使用 three-tile 仅需三步：

1. 定义地图数据源
2. 创建地图模型
3. 用地图替换原来的平面

### 3.2 简单的 webgis

当然，你如果要把 three-tile 当做一个简单三维 gis 也未尝不可，three-tile 地图模型可直接使用主流瓦片数据源，渲染出逼真的地形；提供地理坐标（经纬度海拔高度）到三维场景坐标的转换，能将地图元素（模型、标签）叠加在指定位置；通过鼠标键盘控制摄像机，实现地图缩放、平移、旋转和漫游；内置 mapbox、bing、goole、arcgis、天地图、高德、腾讯等瓦片地图支持，也可以自行扩展支持其它瓦片地图服务。

| ![image-20240708161740228](./image-20240708161740228.png) | ![image-20240708161859490](./image-20240708161859490.png) | ![image-20240708162035091](./image-20240708162035091.png) | ![image-20240708162005274](./image-20240708162005274.png) |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| ![image-20240708162232109](./image-20240708162232109.png) | ![image-20240708162315798](./image-20240708162315798.png) | ![image-20240708162456709](./image-20240708162456709.png) | ![image-20240708162928975](./image-20240708162928975.png) |

### 3.3 游戏开发

如果你想将 three-tile 用于游戏开发，也可以试试，它完美支持 threejs 内置的各种控制器，仅更换控制器，即可实现第一人称、飞行等游戏功能，在真实地图上开战效果应该不错。

| ![image-20240708163206668](./image-20240708163206668.png)第一人称射击 | ![image-20240708163314611](./image-20240708163314611.png)即时战略 | ![image-20240708215113203](./image-20240708215113203.png)模拟飞行 |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| [three-tile demo](https://sxguojf.github.io/three-tile-example/step3.3/index.html) | [three-tile demo](https://sxguojf.github.io/three-tile-example/step3.4/index.html) | [three-tile demo](https://sxguojf.github.io/three-tile-example/step3.2/index.html) |

### 3.4 数据可视化

目前，three-tile 在生产环境的应用主要是数据可视化：

| ![image-20240708174444216](./image-20240708174444216.png)三维卫星云图 | ![image-20240708174650304](./image-20240708174650304.png)风场动画 |       ![](./image-20240708174850505.png)500hpa 高度场        | ![](./image-20240708174735229.png)pm2.5 体渲染 |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :--------------------------------------------: |
| [three-tile demo](https://sxguojf.github.io/three-tile-example/step5.1/index.html) |           | [three-tile demo](https://sxguojf.github.io/three-tile-example/step5.4/index.html) |              |

<span class="badge"> ![](https://profile-counter.glitch.me/sxguojf/count.svg)</span>
