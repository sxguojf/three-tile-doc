import{p as l,C as p,c as r,o as h,a0 as e,a2 as k,G as i,a3 as d,k as a,w as c}from"./chunks/framework.C-aSrekC.js";import{d as o,f as E}from"./chunks/index.CS2ASXZU.js";const u="/three-tile-doc/assets/image.diyoRxD9.png",m=`<!DOCTYPE html>\r
<html lang="zh-cn">\r
  <head>\r
    <meta charset="utf-8" />\r
    <meta\r
      name="viewport"\r
      content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"\r
    />\r
    <title>three-tile最小化应用</title>\r
  </head>\r
  <style>\r
    html,\r
    body {\r
      background-color: #333;\r
      height: 400px;\r
      width: 100%;\r
      padding: 0;\r
      margin: 0;\r
      display: flex;\r
      overflow: hidden;\r
    }\r
    #map {\r
      flex: 1;\r
    }\r
  </style>\r
\r
  <script type="importmap">\r
    {\r
      "imports": {\r
        "three": "https://unpkg.com/three@0.165.0/build/three.module.js",\r
        "three-tile": "https://unpkg.com/three-tile@0.8.6/dist/three-tile.js"\r
      }\r
    }\r
  <\/script>\r
\r
  <body>\r
    <div id="map"></div>\r
    <script type="module">\r
      import * as THREE from "three";\r
      import * as tt from "three-tile";\r
\r
      console.log(\`three-tile v\${tt.version} start!\`);\r
\r
      // 创建地图\r
      const map = tt.TileMap.create({\r
        // 影像数据源\r
        imgSource: new tt.plugin.ArcGisSource(),\r
        // 地形数据源\r
        demSource: new tt.plugin.ArcGisDemSource(),\r
      });\r
      // 地图旋转到xz平面\r
      map.rotateX(-Math.PI / 2);\r
\r
      // 初始化场景\r
      const viewer = new tt.plugin.GLViewer("#map");\r
\r
      // 地图添加到场景\r
      viewer.scene.add(map);\r
    <\/script>\r
  </body>\r
</html>\r
`,v=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"1.introduce/02.getstart/index.md","filePath":"1.introduce/02.getstart/index.md","lastUpdated":1741063516000}'),g={name:"1.introduce/02.getstart/index.md"},_=Object.assign(g,{setup(b){const n=l(!0);return(y,s)=>{const t=p("ClientOnly");return h(),r("div",null,[s[1]||(s[1]=e("",9)),k(i(a(o),null,null,512),[[d,n.value]]),i(t,null,{default:c(()=>[i(a(E),{title:"Example",description:"three-tile 最小化示例，鼠标左键拖动地图，右键旋转地图，滚轮缩放",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{n.value=!1}),htmlCode:a(m)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=e("",3))])}}});export{v as __pageData,_ as default};
