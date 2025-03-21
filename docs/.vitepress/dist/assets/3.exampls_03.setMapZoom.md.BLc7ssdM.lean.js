import{p as l,C as r,c as p,o as h,j as i,a2 as k,G as n,a0 as o,a as d,a3 as E,k as a,w as c}from"./chunks/framework.C-aSrekC.js";import{d as g,f as m}from"./chunks/index.CS2ASXZU.js";const y=`<!DOCTYPE html>\r
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
    .tools {\r
      display: flex;\r
      flex-direction: row;\r
    }\r
    #loading {\r
      width: 500px;\r
    }\r
    button {\r
      margin: 0 10px;\r
    }\r
  </style>\r
  <body>\r
    <div id="map"></div>\r
    <div class="tools">\r
      <div id="loading">-</div>\r
      <button onclick="goto(116.39, 39.91, 0)">北京</button>\r
      <button onclick="goto(86.95, 27.98, 3)">珠穆朗玛峰</button>\r
    </div>\r
\r
    <script type="importmap">\r
      {\r
        "imports": {\r
          "three": "https://unpkg.com/three@0.165.0/build/three.module.js",\r
          "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/",\r
          "three-tile": "https://unpkg.com/three-tile@0.8.6/dist/three-tile.js"\r
        }\r
      }\r
    <\/script>\r
\r
    <script type="module">\r
      import * as THREE from "three";\r
      import * as tt from "three-tile";\r
      import TWEEN, { Tween } from "three/addons/libs/tween.module.js";\r
\r
      console.log(\`three-tile v\${tt.version} start!\`);\r
\r
      // 创建地图\r
      // const map = tt.TileMap.create({\r
      //   // 影像数据源\r
      //   imgSource: new tt.plugin.ArcGisSource(),\r
      //   // 地形数据源\r
      //   demSource: new tt.plugin.ArcGisDemSource(),\r
      //   lon0: 90,\r
      //   minLevel: 2,\r
      // });\r
\r
      // // 地图旋转到xz平面\r
      // map.rotateX(-Math.PI / 2);\r
\r
      // // 地图中心经纬度高度转为世界坐标\r
      // const centerPosition = map.geo2world(new THREE.Vector3(100, 30, 0));\r
      // // 摄像机经纬度高度转为世界坐标\r
      // const cameraPosition = map.geo2world(new THREE.Vector3(100, 0, 10000));\r
      // // 初始化场景\r
      // const viewer = new tt.plugin.GLViewer("#map", {\r
      //   centerPosition,\r
      //   cameraPosition,\r
      // });\r
      // // 地图添加到场景\r
      // viewer.scene.add(map);\r
\r
      // 创建地图\r
      const map = tt.TileMap.create({\r
        // 影像数据源\r
        imgSource: new tt.plugin.ArcGisSource(),\r
        // 地形数据源\r
        demSource: new tt.plugin.ArcGisDemSource(),\r
        lon0: 90,\r
        minLevel: 2,\r
      });\r
      // 地图旋转到xz平面\r
      map.rotateX(-Math.PI / 2);\r
      // 初始化场景\r
      const viewer = new tt.plugin.GLViewer("#map");\r
      // 地图添加到场景\r
      viewer.scene.add(map);\r
\r
      //==============================================================\r
      // 地图中心经纬度高度（km）转为世界坐标\r
      const centerPostion = map.geo2world(new THREE.Vector3(110, 30, 0));\r
      // 摄像机经纬度高度（km）转为世界坐标\r
      const cameraPosition = map.geo2world(new THREE.Vector3(110, 10, 3000));\r
      // 漫游到指定位置\r
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
\r
      //==============================================================\r
\r
      window.goto = function (x, y, z) {\r
        const lonlat = new THREE.Vector3(x, y, z);\r
        // 地图中心经纬度高度（km）转为世界坐标\r
        const centerPostion = map.geo2world(lonlat);\r
        // 摄像机经纬度高度（km）转为世界坐标\r
        const cameraPosition = map.geo2world(\r
          new THREE.Vector3(lonlat.x, lonlat.y - 0.1, lonlat.z + 10)\r
        );\r
        // 漫游到指定位置\r
        viewer.flyTo(centerPostion, cameraPosition);\r
      };\r
    <\/script>\r
  </body>\r
</html>\r
`,C=JSON.parse('{"title":"调整地图位置和缩放","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/03.setMapZoom.md","filePath":"3.exampls/03.setMapZoom.md","lastUpdated":1741063516000}'),u={name:"3.exampls/03.setMapZoom.md"},w=Object.assign(u,{setup(b){const t=l(!0);return(F,s)=>{const e=r("ClientOnly");return h(),p("div",null,[s[1]||(s[1]=i("h1",{id:"调整地图位置和缩放",tabindex:"-1"},[d("调整地图位置和缩放 "),i("a",{class:"header-anchor",href:"#调整地图位置和缩放","aria-label":'Permalink to "调整地图位置和缩放"'},"​")],-1)),s[2]||(s[2]=i("p",null,"地图创建部分已讲过，地图的中心位置和缩放需要通过调整摄像机位置和姿态来实现。",-1)),k(n(a(g),null,null,512),[[E,t.value]]),n(e,null,{default:c(()=>[n(a(m),{title:"Example",description:"点击地图下方的地名调整地图位置和缩放",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{t.value=!1}),htmlCode:a(y)},null,8,["htmlCode"])]),_:1}),s[3]||(s[3]=o("",4))])}}});export{C as __pageData,w as default};
