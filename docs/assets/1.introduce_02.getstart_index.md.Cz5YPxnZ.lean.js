import{p as l,C as p,c as h,o as r,a2 as t,a4 as k,G as i,a5 as d,k as a,w as E}from"./chunks/framework.BQo5SrHh.js";import{R as o,k as g}from"./chunks/index.UKPBqX0I.js";const c="/three-tile-doc/assets/image.diyoRxD9.png",u=`<!DOCTYPE html>\r
<html lang="zh-cn">\r
    <head>\r
        <meta charset="utf-8" />\r
        <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />\r
        <title>three-tile最小化应用</title>\r
    </head>\r
    <style>\r
        .vp-raw {\r
            height: 100%;\r
        }\r
        html,\r
        body {\r
            background-color: #333;\r
            height: 400px;\r
            width: 100%;\r
            padding: 0;\r
            margin: 0;\r
            overflow: hidden;\r
        }\r
        #map {\r
            flex: 1;\r
            width: 100%;\r
            height: 100%;\r
        }\r
    </style>\r
\r
    <script type="importmap">\r
        {\r
            "imports": {\r
                "three": "https://unpkg.com/three@0.171.0/build/three.module.js",\r
                "three-tile": "https://unpkg.com/three-tile@0.11.10/dist",\r
                "three-tile/plugin": "https://unpkg.com/three-tile@0.11.10/dist/plugin"\r
            }\r
        }\r
    <\/script>\r
\r
    <body>\r
        <div id="map"></div>\r
        <script type="module">\r
            import * as THREE from "three";\r
            import * as tt from "three-tile";\r
            import * as plugin from "three-tile/plugin";\r
\r
            console.log(\`three-tile v\${tt.version} start!\`);\r
\r
            // 创建地图\r
            const map = tt.TileMap.create({\r
                // 影像数据源\r
                imgSource: new plugin.ArcGisSource(),\r
                // 地形数据源\r
                demSource: new plugin.ArcGisDemSource(),\r
            });\r
            // 地图旋转到xz平面\r
            map.rotateX(-Math.PI / 2);\r
\r
            // 初始化场景\r
            const viewer = new plugin.GLViewer("#map");\r
\r
            // 地图添加到场景\r
            viewer.scene.add(map);\r
        <\/script>\r
    </body>\r
</html>\r
`,A=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"1.introduce/02.getstart/index.md","filePath":"1.introduce/02.getstart/index.md","lastUpdated":1761902788000}'),m={name:"1.introduce/02.getstart/index.md"},D=Object.assign(m,{setup(y){const n=l(!0);return(b,s)=>{const e=p("ClientOnly");return r(),h("div",null,[s[1]||(s[1]=t("",11)),k(i(a(o),null,null,512),[[d,n.value]]),i(e,null,{default:E(()=>[i(a(g),{title:"Example",description:"three-tile 最小化示例，鼠标左键拖动地图，右键旋转地图，滚轮缩放",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{n.value=!1}),htmlCode:a(u)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=t("",5))])}}});export{A as __pageData,D as default};
