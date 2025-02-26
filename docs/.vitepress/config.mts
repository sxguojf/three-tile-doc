import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "three-tile docs",
  description: "three-tile 开发文档",
  head: [["link", { rel: "icon", href: "./logo.svg" }]],
  lang: "zh-cn",
  lastUpdated: true,
  themeConfig: {
    logo: "./logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    footer: {
      message: "Released under the GPL License.",
      copyright: "Copyright © 2025-present Guojiangfeng hz_gjf@163.com",
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
