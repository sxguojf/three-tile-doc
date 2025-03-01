import { defineConfig } from "vitepress";
import { vitepressDemoPlugin } from "vitepress-demo-plugin";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    lineNumbers: true,
    config(md) {
      md.use(vitepressDemoPlugin);
    },
  },

  title: "three-tile",
  description: "three-tile 开发文档",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  lang: "zh-cn",
  base: "/three-tile-doc",
  themeConfig: {
    logo: "/logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Examples",
        link: "https://sxguojf.github.io/three-tile-example/",
      },
    ],

    sidebar: [
      {
        text: "简介",
        items: [
          { text: "什么是three-tile", link: "/1.introduce/1.whatIs" },
          { text: "快速开始", link: "/1.introduce/2.getstart" },
        ],
      },
      {
        text: "基础",
        items: [
          { text: "1. 概览", link: "/2.base/1.index" },
          { text: "2. 地图创建", link: "/2.base/2.mapCreate" },
          { text: "3. 地图属性", link: "/2.base/3.mapProps" },
          { text: "4. 地图方法", link: "/2.base/4.mapMethod" },
          { text: "5. 地图事件", link: "/2.base/5.mapEvent" },
          { text: "6. 坐标转换", link: "/2.base/6.mapCoord" },
          { text: "7. 三维场景说明", link: "/2.base/7.sceneCreate" },
        ],
      },
      {
        text: "示例",
        items: [
          {
            text: "1. 取得鼠标处经纬度信息",
            link: "/3.exampls/1.getMouseLocation",
          },
          {
            text: "2. 取得地图数据加载状态",
            link: "/3.exampls/2.getLodingInfo",
          },
          { text: "3. 调整地图缩放和位置", link: "/3.exampls/3.setMapZoom" },
          { text: "4. 自定义地图数据源", link: "/3.exampls/4.custmMapSource" },
          { text: "5. 地图显示成球体", link: "/3.exampls/5.fakeEarth" },
          { text: "6. 添加罗盘", link: "/3.exampls/6.compass" },
          { text: "7. 防止摄像机碰撞地面", link: "/todo" },
          { text: "8. 添加蓝天白云背景", link: "/todo" },
          { text: "9. 添加模型", link: "/todo" },
          { text: "10. 地形夸张", link: "/todo" },
          { text: "11. 地图阴影", link: "/todo" },
        ],
      },
      {
        text: "插件",
        items: [
          { text: "1. three-tile插件介绍", link: "/todo" },
          { text: "2. 影像加载器插件", link: "/todo" },
          { text: "3. 地形加载器插件", link: "/todo" },
          { text: "4. 自定义瓦片加载器", link: "/todo" },
          { text: "5. three-tile内置插件", link: "/todo" },
        ],
      },
      {
        text: "其它",
        items: [
          { text: "1. 参考", link: "/others" },
          { text: "2. 有用的连接", link: "/todo" },
          { text: "3. 常见问题", link: "/todo" },
          { text: "4. 开发笔记", link: "/todo" },
          { text: "5. ...", link: "/todo" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/sxguojf/three-tile" },
    ],

    footer: {
      message: "Released under the GPL License.",
      copyright: "Copyright © 2025-present hz_gjf@163.com",
    },
    lastUpdated: {
      text: "上次更新：",
    },
  },
});
