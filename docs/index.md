---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "three-tile"
  text: "轻量级三维瓦片地图开发框架"
  tagline: 开源免费，轻量级三维地图解决方案
  image:
    src: "logo.png"
    alt: three-tile
  actions:
    - theme: brand
      text: 介绍
      link: /1.introduce/01.whatIs

    - theme: alt
      text: 快速开始
      link: /1.introduce/02.getstart
    - theme: alt
      text: 示例
      link: /3.exampls/01.getMouseLocation.html

features:
  - title: 轻量级
    details: 打包后（不包括插件）不到70KB（zip：28KB），开箱即用，轻松集成到你的项目中。
  - title: 速度快
    details: 资源占用做到极致优化，内存占用少，渲染速度快，核显也能轻松达到60fps。
  - title: 依赖少
    details: 目前仅 threejs（V0.171）一个外部依赖，各项功能均自主实现。
  - title: 易扩展
    details: 插件式架构，瓦片数据加载、解析、建模、渲染过程均与核心独立，扩展性强。
---

<style>   
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

<br/>

<span class='badge'> ![](https://img.shields.io/github/stars/sxguojf/three-tile?style=float)
![](https://img.shields.io/github/forks/sxguojf/three-tile?style=float)
![](https://img.shields.io/github/watchers/sxguojf/three-tile?style=float)
![](https://img.shields.io/github/followers/sxguojf?style=flat)
![](https://img.shields.io/github/package-json/v/sxguojf/three-tile?style=flat)
![](https://img.shields.io/npm/dm/three-tile?style=flat)
<br/><br/>![](https://count.getloli.com/@guojf?name=guojf&theme=3d-num&scale=0.5)
</span>
