import{p as e,C as t,c as h,o as r,j as l,a2 as k,G as i,a0 as d,a as E,a3 as c,k as a,w as g}from"./chunks/framework.C-aSrekC.js";import{d as o,f as u}from"./chunks/index.CS2ASXZU.js";const y="/three-tile-doc/assets/image.DPtNRNOY.png",b=`<!DOCTYPE html>\r
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
      <button onclick="arcgis()">ArcGIS</button>\r
      <button onclick="bing()">Bing</button>\r
      <button onclick="gaode()">ArcGis影像+高德地名</button>\r
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
\r
      // 初始化场景\r
      const viewer = new tt.plugin.GLViewer("#map");\r
\r
      // 地图添加到场景\r
      viewer.scene.add(map);\r
\r
      //=====================================================================================\r
      // 地图中心经纬度高度（km）转为世界坐标\r
      const centerPostion = map.geo2world(new THREE.Vector3(100, 35, 0));\r
      // 摄像机经纬度高度（km）转为世界坐标\r
      const cameraPosition = map.geo2world(new THREE.Vector3(100, 10, 5000));\r
      // 摄像机飞到指定位置\r
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
      // 切换数据源\r
      window.bing = function () {\r
        // 用内置的bing数据源\r
        map.imgSource = new tt.plugin.BingSource();\r
        map.reload();\r
      };\r
\r
      window.arcgis = function () {\r
        // 用Source的create方法创建自定义数据源\r
        const imgSource = tt.TileSource.create({\r
          // 瓦片url模板\r
          url: "https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",\r
        });\r
        map.imgSource = imgSource;\r
        map.reload();\r
      };\r
\r
      window.gaode = function () {\r
        // 用内置的bing数据源\r
        map.imgSource = [\r
          new tt.plugin.ArcGisSource(),\r
          new tt.plugin.GDSource(),\r
        ];\r
        map.reload();\r
      };\r
    <\/script>\r
  </body>\r
</html>\r
`,B=JSON.parse('{"title":"自定义地图数据源","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/04.custmMapSource.md","filePath":"3.exampls/04.custmMapSource.md","lastUpdated":1741063516000}'),m={name:"3.exampls/04.custmMapSource.md"},v=Object.assign(m,{setup(F){const n=e(!0);return(A,s)=>{const p=t("ClientOnly");return r(),h("div",null,[s[1]||(s[1]=l("h1",{id:"自定义地图数据源",tabindex:"-1"},[E("自定义地图数据源 "),l("a",{class:"header-anchor",href:"#自定义地图数据源","aria-label":'Permalink to "自定义地图数据源"'},"​")],-1)),k(i(a(o),null,null,512),[[c,n.value]]),i(p,null,{default:g(()=>[i(a(u),{title:"Example",description:"点击地图下方厂商名称切换地图数据",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{n.value=!1}),htmlCode:a(b)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=d("",36))])}}});export{B as __pageData,v as default};
