import{p as t,C as p,c as h,o as r,j as e,a2 as k,G as i,a0 as d,a as o,a3 as c,k as a,w as E}from"./chunks/framework.C-aSrekC.js";import{d as g,f as y}from"./chunks/index.CS2ASXZU.js";const m=`<!DOCTYPE html>\r
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
    <div id="local-info">-</div>\r
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
      function showLocation(viewer, map, id) {\r
        const pointer = new THREE.Vector2();\r
        viewer.container.addEventListener("pointermove", (evt) => {\r
          // 计算屏幕坐标（-0.5到+0.5范围）\r
          pointer.x =\r
            (evt.clientX / viewer.renderer.domElement.clientWidth) * 2 - 1;\r
          pointer.y =\r
            -(evt.clientY / viewer.renderer.domElement.clientHeight) * 2 + 1;\r
          // 取得该坐标的信息\r
          const info = map.getLocalInfoFromScreen(viewer.camera, pointer);\r
          if (info) {\r
            const el = document.querySelector(id);\r
            el.innerHTML = \`经度:\${info.location.x.toFixed(\r
              6\r
            )}° 纬度:\${info.location.y.toFixed(\r
              6\r
            )}° 海拔:\${info.location.z.toFixed(6)}km\`;\r
          }\r
        });\r
      }\r
      showLocation(viewer, map, "#local-info");\r
    <\/script>\r
  </body>\r
</html>\r
`,C=JSON.parse('{"title":"取得鼠标处经纬度海拔高度","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/01.getMouseLocation.md","filePath":"3.exampls/01.getMouseLocation.md","lastUpdated":1741063516000}'),F={name:"3.exampls/01.getMouseLocation.md"},v=Object.assign(F,{setup(u){const n=t(!0);return(b,s)=>{const l=p("ClientOnly");return r(),h("div",null,[s[1]||(s[1]=e("h1",{id:"取得鼠标处经纬度海拔高度",tabindex:"-1"},[o("取得鼠标处经纬度海拔高度 "),e("a",{class:"header-anchor",href:"#取得鼠标处经纬度海拔高度","aria-label":'Permalink to "取得鼠标处经纬度海拔高度"'},"​")],-1)),k(i(a(g),null,null,512),[[c,n.value]]),i(l,null,{default:E(()=>[i(a(y),{title:"Example",description:"地图下方状态栏显示鼠标所指经纬度、海拔高度信息",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{n.value=!1}),htmlCode:a(m)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=d("",17))])}}});export{C as __pageData,v as default};
