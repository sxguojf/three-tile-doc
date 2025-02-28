---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "three-tile"
  text: "轻量级三维瓦片地图开发框架"
  tagline: 开源免费，cesium的轻量级替代方案
  image:
    src: "/logo.png"
    alt: three-tile
  actions:
    - theme: brand
      text: 介绍
      link: /1.introduce/1.whatIs

    - theme: alt
      text: 快速开始
      link: /1.introduce/2.getstart
    - theme: alt
      text: 开发示例
      link: /3.examples

features:
  - title: 轻量级
    details: 框架打包后不到500KB(zip：165KB)，开箱即用，且不会对你现有程序产生任何侵入性影响。
  - title: 速度快
    details: 资源占用少，渲染速度快，核显也能轻松达到60fps。
  - title: 依赖少
    details: 仅 threejs（V0.165）一个外部依赖。
  - title: 易使用
    details: 基于threejs，熟悉threejs的开发者可以快速上手。
---
