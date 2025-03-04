import{p as t,C as p,c as r,o as h,a0 as e,a2 as k,G as i,a3 as d,k as a,w as o}from"./chunks/framework.C-aSrekC.js";import{d as c,f as E}from"./chunks/index.CS2ASXZU.js";const m="/three-tile-doc/assets/image.C5CMJ9vT.png",g=`<!DOCTYPE html>\r
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
        lon0: 90,\r
      });\r
      // 地图旋转到xz平面\r
      map.rotateX(-Math.PI / 2);\r
\r
      // 初始化场景\r
      const viewer = new tt.plugin.GLViewer("#map");\r
\r
      // 地图添加到场景\r
      viewer.scene.add(map);\r
\r
      // 地图中心经纬度高度（km）转为世界坐标\r
      const centerPostion = map.geo2world(\r
        new THREE.Vector3(116.39180280130437, 39.915285657622775, 0)\r
      );\r
      // 摄像机经纬度高度（km）转为世界坐标\r
      const cameraPosition = map.geo2world(\r
        new THREE.Vector3(116.39199596764485, 39.91047669278009, 0.9)\r
      );\r
      viewer.flyTo(centerPostion, cameraPosition);\r
    <\/script>\r
  </body>\r
</html>\r
`,C=JSON.parse('{"title":"TileMap 创建","description":"","frontmatter":{},"headers":[],"relativePath":"2.base/02.mapCreate.md","filePath":"2.base/02.mapCreate.md","lastUpdated":1741063516000}'),u={name:"2.base/02.mapCreate.md"},v=Object.assign(u,{setup(y){const n=t(!0);return(b,s)=>{const l=p("ClientOnly");return h(),r("div",null,[s[1]||(s[1]=e("",15)),k(i(a(c),null,null,512),[[d,n.value]]),i(l,null,{default:o(()=>[i(a(E),{title:"最小化演示",description:"移动摄像机到故宫上空",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{n.value=!1}),htmlCode:a(g)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=e("",2))])}}});export{C as __pageData,v as default};
