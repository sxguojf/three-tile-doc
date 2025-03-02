---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "three-tile"
  text: "轻量级前端三维瓦片地图开发框架"
  tagline: 开源免费，cesium的轻量级替代方案
  image:
    src: "/logo.png"
    alt: three-tile
  actions:
    - theme: brand
      text: 介绍
      link: /1.introduce/01.whatIs

    - theme: alt
      text: 快速开始
      link: /1.introduce/02.getstart
    - theme: alt
      text: 演示示例
      link: https://sxguojf.github.io/three-tile-example/

features:
  - title: 轻量级
    details: 框架打包后不到500KB(zip：165KB)，开箱即用，轻松集成到你的项目中。
  - title: 速度快
    details: 资源占用做到极致优化，内存占用少，渲染速度快，核显也能轻松达到60fps。
  - title: 依赖少
    details: 目前仅 threejs（V0.165）一个外部依赖，各项功能均自主实现。
  - title: 易使用
    details: 基于threejs，熟悉threejs的开发者可以快速上手。
---

<style>   
  .badge{
    margin-top: 20px;
    text-align: center;
    width: 100%;
  }
  .badge >img{
    display: inline-block;
    margin-right: 10px;
   
  }
</style>

<span class='badge'> ![](https://img.shields.io/github/stars/sxguojf/three-tile?style=social)
![](https://img.shields.io/github/forks/sxguojf/three-tile?style=social)
![](https://img.shields.io/github/watchers/sxguojf/three-tile?style=social)
![](https://komarev.com/ghpvc/?username=sxguojf)</span>
