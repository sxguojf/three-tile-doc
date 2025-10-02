// import { defineConfig } from "vitepress";
import { vitepressDemoPlugin } from "vitepress-demo-plugin";
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
    markdown: {
        lineNumbers: true,
        image: {
            // 默认禁用；设置为 true 可为所有图片启用懒加载。
            lazyLoading: true,
        },
        config(md) {
            md.use(vitepressDemoPlugin, {
                stackblitz: {
                    show: true,
                },
                codesandbox: {
                    show: true,
                },
            });
        },
    },
    // optionally, you can pass MermaidConfig
    mermaid: {
        // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
    },
    // optionally set additional config for plugin itself with MermaidPluginConfig
    mermaidPlugin: {
        class: "mermaid my-class", // set additional css classes for parent container
    },

    title: "three-tile v0.11.9",
    description: "three-tile 开发文档",
    head: [["link", { rel: "icon", href: "logo.svg" }]],
    lang: "zh-cn",
    base: "/three-tile-doc",
    themeConfig: {
        logo: "/logo.svg",
        // https://vitepress.dev/reference/default-theme-config
        nav: [{ text: "Home", link: "/" }],

        sidebar: [
            {
                text: "简介",
                items: [
                    { text: "什么是three-tile", link: "/1.introduce/01.whatIs" },
                    { text: "快速开始", link: "/1.introduce/02.getstart" },
                ],
            },
            {
                text: "基础",
                items: [
                    { text: "1. 概览", link: "/2.base/01.index" },
                    { text: "2. 地图创建", link: "/2.base/02.mapCreate" },
                    { text: "3. 地图属性", link: "/2.base/03.mapProps" },
                    { text: "4. 地图方法", link: "/2.base/04.mapMethod" },
                    { text: "5. 地图事件", link: "/2.base/05.mapEvent" },
                    { text: "6. 坐标转换", link: "/2.base/06.mapCoord" },
                    { text: "7. 三维场景说明", link: "/2.base/07.sceneCreate" },
                    { text: "8. vue中使用", link: "/2.base/08.forVue" },
                ],
            },
            {
                text: "示例",
                items: [
                    {
                        text: "1. 取得鼠标处经纬度信息",
                        link: "/3.exampls/01.getMouseLocation",
                    },
                    {
                        text: "2. 取得地图数据加载状态",
                        link: "/3.exampls/02.getLodingInfo",
                    },
                    { text: "3. 调整地图缩放和位置", link: "/3.exampls/03.setMapZoom" },
                    { text: "4. 自定义地图数据源", link: "/3.exampls/04.custmMapSource" },
                    { text: "5. 地图显示成球体", link: "/3.exampls/05.fakeEarth" },
                    { text: "6. 添加罗盘", link: "/3.exampls/06.compass" },
                    {
                        text: "7. 防止摄像机碰撞地面",
                        link: "/3.exampls/07.limitCameraHeight",
                    },
                    {
                        text: "8. 添加蓝天白云背景",
                        link: "/3.exampls/08.skyBox",
                    },
                    { text: "9. 添加简单模型", link: "/3.exampls/09.addMesh" },
                    { text: "10. 地形夸张", link: "/3.exampls/10.terrainScale" },
                    { text: "11. 地图阴影", link: "/3.exampls/11.addShadow" },
                    { text: "12. CSS滤镜", link: "/3.exampls/12.addCssFilter" },
                    { text: "13. 添加GeoJSON", link: "/3.exampls/13.addGeoJSON" },
                    { text: "14. 添加矢量瓦片", link: "/3.exampls/14.addMVT" },
                    { text: "15. 添加GLTF模型", link: "/3.exampls/15.addModel" },
                    { text: "16. 添加Sky", link: "/3.exampls/16.addSky" },
                    { text: "17. 添加水体", link: "/3.exampls/17.addWater" },
                    { text: "18. 添加水印", link: "/3.exampls/18.addLogo" },
                    { text: "19. 显示行政区域地图", link: "/3.exampls/19.addMask" },
                    { text: "20. 添加sprite广告牌", link: "/3.exampls/20.addIcon" },
                    { text: "21. 单TIFF地形", link: "/3.exampls/21.singleDem" },
                    { text: "22. 贴地图片", link: "/3.exampls/22.singleImage" },
                    { text: "23. 挖洞", link: "/3.exampls/23.createHole" },
                    { text: "24. 地图背景", link: "/3.exampls/24.background" },
                    { text: "25. 控制器切换(≥V0.11.4)", link: "/3.exampls/25.changeControls" },
                    { text: "26. 自定义着色器(≥V0.11.4)", link: "/3.exampls/26.shader" },
                    { text: "27. 使用WMS数据源(≥V0.11.5)", link: "/3.exampls/27.useWMSSource" },
                    { text: "28. 设置地图经纬度范围(≥V0.11.5)", link: "/3.exampls/28.setMapBounds" },
                    { text: "29. 添加css2d广告牌", link: "/3.exampls/29.addCss2d" },
                    { text: "30. 贴地模型组", link: "/3.exampls/30.groundGroup" },
                ],
            },
            {
                text: "应用",
                items: [
                    { text: "1. 第一人称射击游戏", link: "/4.application/01.firstPerson" },
                    { text: "2. 第三人称飞行游戏", link: "/4.application/02.flyControls" },
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

        socialLinks: [{ icon: "github", link: "https://github.com/sxguojf/three-tile" }],

        footer: {
            message:
                // "<img style='margin: 0 auto;' src='https://count.getloli.com/@guojf?name=guojf&theme=3d-num'/><br/>
                "Released under the MIT License.",
            copyright: "Copyright © 2025-present EMail: hz_gjf@163.com",
        },
        lastUpdated: {
            text: "上次更新：",
        },
    },
});
