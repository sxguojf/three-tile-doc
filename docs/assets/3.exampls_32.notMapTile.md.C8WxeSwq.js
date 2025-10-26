import{p as i,C as o,c as s,o as m,j as t,a4 as p,G as r,a as c,a5 as h,k as n,w as d}from"./chunks/framework.BZ48x_LH.js";import{R as u,k as w}from"./chunks/index.DCj37L2o.js";const v=`<!DOCTYPE html>\r
<html lang="zh-cn">\r
    <head>\r
        <meta charset="utf-8" />\r
        <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />\r
        <title>three-tile最小化应用</title>\r
    </head>\r
    <style>\r
        html,\r
        body {\r
            color: white;\r
            background-color: #333;\r
            height: 100%;\r
            min-height: 600px;\r
            width: 100%;\r
            padding: 0;\r
            margin: 0;\r
            display: flex;\r
            overflow: hidden;\r
            flex-direction: column;\r
            text-align: center;\r
        }\r
        #map {\r
            height: 100%;\r
            width: 100%;\r
        }\r
        #local-info {\r
            position: absolute;\r
            bottom: 10px;\r
            left: 20px;\r
        }\r
        #loading {\r
            position: absolute;\r
            bottom: 10px;\r
            right: 20px;\r
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
\r
        <script type="module">\r
            import * as THREE from "three";\r
            import * as tt from "three-tile";\r
            import * as plugin from "three-tile/plugin";\r
\r
            console.log(\`three-tile v\${tt.version} start!\`);\r
\r
            const zeldaSource = new tt.TileSource({\r
                url: "https://vjmap.com/server/api/v1/map/tile/sys_zp/v1/s80a61468a/{z}/{x}/{y}?tag=c47be46a2ad2&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MiwiVXNlcm5hbWUiOiJhZG1pbjEiLCJOaWNrTmFtZSI6ImFkbWluMSIsIkF1dGhvcml0eUlkIjoiYWRtaW4iLCJCdWZmZXJUaW1lIjo4NjQwMCwiZXhwIjo0ODEzMjY3NjM3LCJpc3MiOiJ2am1hcCIsIm5iZiI6MTY1OTY2NjYzN30.cDXCH2ElTzU2sQU36SNHWoTYTAc4wEkVIXmBAIzWh6M",\r
                // url: "http://www.16p.top/Map/{z}_{x}_{y}.png",\r
            });\r
\r
            // 创建地图\r
            const map = tt.TileMap.create({\r
                // 影像数据源\r
                imgSource: [zeldaSource],\r
                maxLevel: 10,\r
            });\r
            // 地图旋转到xz平面\r
            map.rotateX(-Math.PI / 2);\r
\r
            // 初始化场景\r
            const viewer = new plugin.GLViewer("#map");\r
            viewer.scene.background = new THREE.Color(0x112233);\r
            viewer.fogFactor = 0;\r
\r
            // 地图添加到场景\r
            viewer.scene.add(map);\r
        <\/script>\r
    </body>\r
</html>\r
`,y=JSON.parse('{"title":"非地图瓦片","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/32.notMapTile.md","filePath":"3.exampls/32.notMapTile.md","lastUpdated":1761471651000}'),g={name:"3.exampls/32.notMapTile.md"},k=Object.assign(g,{setup(b){const l=i(!0);return(x,e)=>{const a=o("ClientOnly");return m(),s("div",null,[e[1]||(e[1]=t("h1",{id:"非地图瓦片",tabindex:"-1"},[c("非地图瓦片 "),t("a",{class:"header-anchor",href:"#非地图瓦片","aria-label":'Permalink to "非地图瓦片"'},"​")],-1)),p(r(n(u),null,null,512),[[h,l.value]]),r(a,null,{default:d(()=>[r(n(w),{title:"Example",description:"CAD图纸显示，数据来源：https://vjmap.com",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),htmlCode:n(v)},null,8,["htmlCode"])]),_:1}),e[2]||(e[2]=t("p",null,"本示例展示了如何显示 CAD 图纸等非地图瓦片。",-1)),e[3]||(e[3]=t("p",null,"将大图切成是 xyz 瓦片，即可加载。可用于显示超大 CAD 图纸、超大图片、游戏地图等。",-1))])}}});export{y as __pageData,k as default};
