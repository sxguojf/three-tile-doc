import { defineConfig } from "vitepress";
import { vitepressDemoPlugin } from "vitepress-demo-plugin";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
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
      { text: "Examples", link: "/examples" },
    ],

    sidebar: [
      {
        text: "简介",
        items: [
          { text: "什么是three-tile", link: "/introduce" },
          { text: "快速开始", link: "/getstart" },
        ],
      },
      {
        text: "基础",
        items: [
          { text: "1. 概览", link: "/base" },
          { text: "2. 第一幅地图", link: "/base/firstMap" },
          { text: "3. 坐标转换", link: "/base/coordinate" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    footer: {
      message: "Released under the GPL License.",
      copyright: "Copyright © 2025-present hz_gjf@163.com",
    },
    lastUpdated: {
      text: "上次更新：",
      // formatOptions: {
      //   dateStyle: "full",
      //   timeStyle: "medium",
      // },
    },
  },
});
