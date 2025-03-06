import{p as a,C as l,c as p,o,a0 as h,a2 as d,G as n,j as s,a3 as k,k as r,w as c,a as m}from"./chunks/framework.C-aSrekC.js";import{d as E,f as g}from"./chunks/index.CS2ASXZU.js";const b=`<!DOCTYPE html>\r
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
        "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/",\r
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
      import {\r
        CSS2DObject,\r
        CSS2DRenderer,\r
      } from "three/addons/renderers/CSS2DRenderer.js";\r
\r
      console.log(\`three-tile v\${tt.version} start!\`);\r
\r
      //=====================================================================================\r
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
      // 初始化场景\r
      const viewer = new tt.plugin.GLViewer("#map");\r
      // 地图添加到场景\r
      viewer.scene.add(map);\r
\r
      //=====================================================================================\r
      // 地图中心经纬度高度（km）转为世界坐标\r
      const centerPostion = map.geo2world(new THREE.Vector3(100, 35, 0));\r
      // 摄像机经纬度高度（km）转为世界坐标\r
      const cameraPosition = map.geo2world(new THREE.Vector3(100, 10, 5000));\r
      viewer.flyTo(centerPostion, cameraPosition);\r
\r
      //=====================================================================================\r
      // 添加标签容器\r
      const labelRenderer = new CSS2DRenderer();\r
      labelRenderer.setSize(\r
        viewer.container.clientWidth,\r
        viewer.container.clientHeight\r
      );\r
      labelRenderer.domElement.style.position = "absolute";\r
      labelRenderer.domElement.style.top = "0px";\r
      labelRenderer.domElement.style.color = "white";\r
      viewer.container.appendChild(labelRenderer.domElement);\r
\r
      viewer.addEventListener("update", () => {\r
        labelRenderer.render(viewer.scene, viewer.camera);\r
      });\r
\r
      window.addEventListener("resize", () =>\r
        labelRenderer.setSize(\r
          viewer.container.clientWidth,\r
          viewer.container.clientHeight\r
        )\r
      );\r
\r
      const labelGroup = new THREE.Group();\r
      map.add(labelGroup);\r
\r
      //=====================================================================================\r
      // 添加标签\r
      (() => {\r
        // 先画一堆地面垂直向上的箭头\r
        const dir = new THREE.Vector3(0, 0, 1);\r
        for (let x = 60; x < 140; x += 10) {\r
          for (let y = 0; y < 70; y += 10) {\r
            // 经纬度转换为模型坐标\r
            const pos = map.geo2pos(new THREE.Vector3(x, y));\r
            const arrow = new THREE.ArrowHelper(\r
              dir,\r
              new THREE.Vector3(pos.x, pos.y, -1),\r
              50\r
            );\r
            labelGroup.add(arrow);\r
          }\r
        }\r
        // 遍历箭头加上标签\r
        labelGroup.traverse((obj) => {\r
          if (obj instanceof THREE.ArrowHelper) {\r
            const label = document.createElement("span");\r
            label.className = "label";\r
\r
            // 模型坐标转换为经纬度\r
            const lonlat = map.pos2geo(\r
              new THREE.Vector3(obj.position.x, obj.position.y)\r
            );\r
            label.innerHTML = \`\${lonlat.x.toFixed(0)},\${lonlat.y.toFixed(0)}\`;\r
            label.title = "提示信息： " + label.innerHTML;\r
\r
            // 创建css2dObj加入场景\r
            const css = new CSS2DObject(label);\r
            css.position.copy(\r
              obj.position.clone().add(new THREE.Vector3(0, 0, 10))\r
            );\r
            labelGroup.add(css);\r
          }\r
        });\r
      })();\r
    <\/script>\r
  </body>\r
</html>\r
`,F=JSON.parse('{"title":"坐标转换","description":"","frontmatter":{},"headers":[],"relativePath":"2.base/06.mapCoord.md","filePath":"2.base/06.mapCoord.md","lastUpdated":1741063516000}'),u={name:"2.base/06.mapCoord.md"},f=Object.assign(u,{setup(y){const t=a(!0);return(C,e)=>{const i=l("ClientOnly");return o(),p("div",null,[e[1]||(e[1]=h("",15)),d(n(r(E),null,null,512),[[k,t.value]]),n(i,null,{default:c(()=>[n(r(g),{title:"坐标转换",description:"地图上指定位置添加标签",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),htmlCode:r(b)},null,8,["htmlCode"])]),_:1}),e[2]||(e[2]=s("p",null,[m("上面的代码使用 threejs 的 CSS2DRenderer 类添加标签到地图上： "),s("a",{href:"https://threejs.org/docs/index.html?q=css#examples/zh/renderers/CSS2DRenderer",target:"_blank",rel:"noreferrer"},"https://threejs.org/docs/index.html?q=css#examples/zh/renderers/CSS2DRenderer")],-1)),e[3]||(e[3]=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,"CSS2DRenderer 是通过通过添加 DOM 标签到场景中实现的，使用比较简单，但如果添加的标签太多会影响速度，更好效果可以使用 sprite 或 canvas 等方式。只要理解了坐标转换，实现方式都一样。")],-1))])}}});export{F as __pageData,f as default};
