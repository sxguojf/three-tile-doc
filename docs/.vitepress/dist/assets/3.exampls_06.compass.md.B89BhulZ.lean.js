import{p as t,C as l,c as p,o as h,j as e,a2 as o,G as n,a0 as k,a as d,a3 as c,k as i,w as E}from"./chunks/framework.C-aSrekC.js";import{d as m,f as g}from"./chunks/index.CS2ASXZU.js";const u=`<!DOCTYPE html>\r
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
      height: 600px;\r
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
\r
    #compass {\r
      position: absolute;\r
      height: 100px;\r
      width: 100px;\r
      left: 30px;\r
      bottom: 50px;\r
      display: flex;\r
      align-items: center;\r
      justify-content: center;\r
      border-radius: 50%;\r
      border: 1px solid #fffc;\r
      filter: drop-shadow(0px 0px 2px black);\r
      background-color: #0005;\r
      cursor: pointer;\r
    }\r
    #compass > .circle {\r
      width: 60%;\r
      height: 60%;\r
      text-align: center;\r
      border-radius: 50%;\r
      border: 1px solid #fffc;\r
      background-color: #fff4;\r
    }\r
\r
    #compass:hover > .circle {\r
      background-color: #0f05;\r
    }\r
\r
    #compass:active .circle {\r
      background-color: #000;\r
    }\r
\r
    #compass > #compass-text {\r
      position: absolute;\r
      top: 0px;\r
      left: 0px;\r
      width: 100%;\r
      height: 100%;\r
      display: grid;\r
      align-items: center;\r
      justify-items: center;\r
      grid-template-columns: 18% auto 18%;\r
      grid-template-rows: 18% auto 18%;\r
      text-shadow: 0px 0px 2px black;\r
      font-size: 10px;\r
    }\r
\r
    #compass > .circle > #compass-plane {\r
      height: 90%;\r
      width: 92%;\r
      translate: 2px 0px;\r
      fill: #fffc;\r
      filter: drop-shadow(5px 5px 5px black);\r
    }\r
  </style>\r
  <body>\r
    <div id="map"></div>\r
    <div id="loading">-</div>\r
    <!-- 罗盘 -->\r
    <div id="compass">\r
      <div class="circle">\r
        <svg\r
          id="compass-plane"\r
          viewBox="0 0 1024 1024"\r
          version="1.1"\r
          xmlns="http://www.w3.org/2000/svg"\r
        >\r
          <path\r
            d="M479.075523 711.254681c0 70.2291 0.083871 114.20878 0.218064 140.734974l-148.360914 106.16768 0 65.842665c0 0 137.164181-31.552144 156.372659-56.247861 19.212672-24.685233 1.369189 45.264997 24.691523 45.264997 23.324432 0 5.476754-69.95023 24.695717-45.264997 19.206382 24.695717 156.372659 56.247861 156.372659 56.247861l0-65.842665-148.375592-106.16768c0.14258-26.526194 0.226451-70.505874 0.226451-140.734974 0-283.942036 460.894459 0 460.894459 0l0-79.555518-115.225712-85.227272 0-65.662343c0-9.083193-13.343823-16.461715-24.685233-16.461715-11.351894 0-24.695717 7.378522-24.695717 16.461715l0 29.119895-85.724206-63.422996c0-178.315322-28.115543-160.490709-28.115543-160.490709s-21.938469 15.094623-24.685233 100.128992c-1.645962 51.108686-52.339488 15.51817-92.547084-21.017988l-22.569596-104.490267-26.182325-14.138497c0-35.590516 0-81.312609 0-129.18179C561.379902 13.064953 511.307019 0 511.307019 0s-48.693211 13.054469-48.693211 117.311994c0 47.240151 0 92.396117 0 127.766473l-28.803283 14.329303-23.194432 106.176067 0.016774 0c3.310794-1.945799 6.558686-4.151598 9.735287-6.470622-3.159827 2.966925-6.407719 5.938043-9.735287 8.919645-39.630985 35.456323-87.693069 67.884915-89.311773 18.12445-2.748861-85.051143-24.691523-100.128992-24.691523-100.128992s-28.115543-17.824613-28.115543 160.490709l-85.724206 63.406222 0-29.119895c0-9.083193-13.335436-16.461715-24.691523-16.461715s-24.691523 7.378522-24.691523 16.461715l0 65.662343L18.187353 631.697066l0 79.555518C18.187353 711.254681 479.075523 427.310549 479.075523 711.254681z"\r
          ></path>\r
        </svg>\r
      </div>\r
      <div id="compass-text">\r
        <span></span> <span>N</span><span></span> <span>W</span><span></span\r
        ><span>E</span> <span></span><span>S</span><span></span>\r
      </div>\r
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
      function fly() {\r
        // 地图中心经纬度高度（km）转为世界坐标\r
        const centerPostion = map.geo2world(new THREE.Vector3(110, 30, 0));\r
        // 摄像机经纬度高度（km）转为世界坐标\r
        const cameraPosition = map.geo2world(new THREE.Vector3(110, 10, 3000));\r
        // 摄像机飞到指定位置\r
        viewer.flyTo(centerPostion, cameraPosition);\r
      }\r
      setTimeout(fly, 1500);\r
\r
      //==============================================================\r
      // 添加伪球体\r
      function addFakeEarth(viewer, map) {\r
        const fakeEarth = new tt.plugin.FakeEarth(\r
          viewer.scene.fog?.color || new Color(0)\r
        );\r
        fakeEarth.name = "fakeearth";\r
        fakeEarth.applyMatrix4(map.rootTile.matrix);\r
        map.add(fakeEarth);\r
        return fakeEarth;\r
      }\r
      addFakeEarth(viewer, map);\r
\r
      //==============================================================\r
      // 显示罗盘\r
      function showCompass(viewer) {\r
        const compass = document.querySelector("#compass");\r
        const plane = document.querySelector("#compass-plane");\r
        const text = document.querySelector("#compass-text");\r
        if (compass && plane && text) {\r
          viewer.controls.addEventListener("change", () => {\r
            plane.style.transform = \`rotateX(\${viewer.controls.getPolarAngle()}rad)\`;\r
            text.style.transform = \`rotate(\${viewer.controls.getAzimuthalAngle()}rad)\`;\r
          });\r
          compass.addEventListener("click", viewer.controls.reset);\r
        }\r
      }\r
      window.onload = () => {\r
        showCompass(viewer);\r
      };\r
    <\/script>\r
  </body>\r
</html>\r
`,w=JSON.parse('{"title":"添加罗盘","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/06.compass.md","filePath":"3.exampls/06.compass.md","lastUpdated":1741063516000}'),y={name:"3.exampls/06.compass.md"},x=Object.assign(y,{setup(F){const a=t(!0);return(v,s)=>{const r=l("ClientOnly");return h(),p("div",null,[s[1]||(s[1]=e("h1",{id:"添加罗盘",tabindex:"-1"},[d("添加罗盘 "),e("a",{class:"header-anchor",href:"#添加罗盘","aria-label":'Permalink to "添加罗盘"'},"​")],-1)),o(n(i(m),null,null,512),[[c,a.value]]),n(r,null,{default:E(()=>[n(i(g),{title:"example",description:"添加一个罗盘",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{a.value=!1}),htmlCode:i(u)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=k("",6))])}}});export{w as __pageData,x as default};
