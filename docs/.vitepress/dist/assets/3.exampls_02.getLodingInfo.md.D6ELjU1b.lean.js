import{p as l,C as r,c as p,o as h,j as t,a2 as k,G as i,a0 as d,a as E,a3 as o,k as n,w as g}from"./chunks/framework.C-aSrekC.js";import{d as c,f as m}from"./chunks/index.CS2ASXZU.js";const y=`<!DOCTYPE html>\r
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
      color: white;\r
      background-color: #333;\r
      height: 400px;\r
      width: 100%;\r
      padding: 0;\r
      margin: 0;\r
      display: flex;\r
      overflow: hidden;\r
      flex-direction: column;\r
      text-align: center;\r
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
    <div id="loading">-</div>\r
\r
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
      //==============================================================\r
      // 地图中心经纬度高度（km）转为世界坐标\r
      const centerPostion = map.geo2world(\r
        new THREE.Vector3(116.39180280130437, 39.915285657622775, 0)\r
      );\r
      // 摄像机经纬度高度（km）转为世界坐标\r
      const cameraPosition = map.geo2world(\r
        new THREE.Vector3(116.39199596764485, 39.91047669278009, 0.9)\r
      );\r
      viewer.flyTo(centerPostion, cameraPosition);\r
\r
      //==============================================================\r
      // 显示地图加载进度\r
      function showLoading(map, id) {\r
        const el = document.querySelector("#loading");\r
        if (el) {\r
          map.addEventListener("loading-start", (evt) => {\r
            el.innerHTML =\r
              "Started: " +\r
              evt.itemsLoaded +\r
              " of " +\r
              evt.itemsTotal +\r
              " files.";\r
          });\r
          map.addEventListener("loading-progress", (evt) => {\r
            el.innerHTML =\r
              "Loading: " +\r
              evt.itemsLoaded +\r
              " of " +\r
              evt.itemsTotal +\r
              " files.";\r
          });\r
          map.addEventListener("loading-complete", () => {\r
            el.innerHTML = "Loading complete!";\r
          });\r
          map.addEventListener("loading-error", (url) => {\r
            el.innerHTML = "There was an error loading " + url;\r
          });\r
        }\r
      }\r
      showLoading(map);\r
    <\/script>\r
  </body>\r
</html>\r
`,A=JSON.parse('{"title":"取得瓦片数据加载状态","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/02.getLodingInfo.md","filePath":"3.exampls/02.getLodingInfo.md","lastUpdated":1741063516000}'),u={name:"3.exampls/02.getLodingInfo.md"},L=Object.assign(u,{setup(F){const a=l(!0);return(b,s)=>{const e=r("ClientOnly");return h(),p("div",null,[s[1]||(s[1]=t("h1",{id:"取得瓦片数据加载状态",tabindex:"-1"},[E("取得瓦片数据加载状态 "),t("a",{class:"header-anchor",href:"#取得瓦片数据加载状态","aria-label":'Permalink to "取得瓦片数据加载状态"'},"​")],-1)),k(i(n(c),null,null,512),[[o,a.value]]),i(e,null,{default:g(()=>[i(n(m),{title:"Example",description:"地图下方状态栏显示地图数据加载状态",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{a.value=!1}),htmlCode:n(y)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=d("",4))])}}});export{A as __pageData,L as default};
