import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "three-tile",
  description: "three-tile 开发文档",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  lang: "zh-cn",
  base: "/three-tile-doc/",
  themeConfig: {
    logo: "/logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/examples" },
    ],

    sidebar: [
      {
        text: "入门",
        items: [
          { text: "简介", link: "/introduce" },
          { text: "安装", link: "/install" },
          { text: "hello world", link: "/first" },
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
