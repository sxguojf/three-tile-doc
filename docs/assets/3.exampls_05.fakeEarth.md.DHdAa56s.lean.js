import{p as t,C as l,c as p,o as h,j as e,a4 as k,G as a,a2 as d,a as o,a5 as c,k as i,w as m}from"./chunks/framework.CJqd0DOR.js";import{R as E,k as g}from"./chunks/index.Ga076E9x.js";const u=`<!DOCTYPE html>\r
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
        #loading {\r
            position: absolute;\r
            bottom: 0px;\r
            right: 20px;\r
        }\r
    </style>\r
    <body>\r
        <div id="map"></div>\r
        <div id="loading">-</div>\r
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
                lon0: 90,\r
                minLevel: 2,\r
            });\r
            // 地图旋转到xz平面\r
            map.rotateX(-Math.PI / 2);\r
\r
            // 初始化场景\r
            const viewer = new plugin.GLViewer("#map");\r
            viewer.scene.background = new THREE.Color(0x112233);\r
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
                        el.innerHTML = "Started: " + evt.itemsLoaded + " of " + evt.itemsTotal + " files.";\r
                    });\r
                    map.addEventListener("loading-progress", (evt) => {\r
                        el.innerHTML = "Loading: " + evt.itemsLoaded + " of " + evt.itemsTotal + " files.";\r
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
            // 添加伪球体\r
            // function addFakeEarth(viewer, map) {\r
            //   const fakeEarth = new plugin.FakeEarth(\r
            //     viewer.scene.fog?.color || new Color(0)\r
            //   );\r
            //   fakeEarth.name = "fakeearth";\r
            //   fakeEarth.applyMatrix4(map.rootTile.matrix);\r
            //   map.add(fakeEarth);\r
            //   return fakeEarth;\r
            // }\r
            // addFakeEarth(viewer, map);\r
\r
            // 填加伪球体\r
            const frakeEarth = plugin.createFrakEarth(map, viewer.scene.background);\r
            map.add(frakeEarth);\r
        <\/script>\r
    </body>\r
</html>\r
`,A=JSON.parse('{"title":"地图显示成球体","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/05.fakeEarth.md","filePath":"3.exampls/05.fakeEarth.md","lastUpdated":1761368239000}'),y={name:"3.exampls/05.fakeEarth.md"},D=Object.assign(y,{setup(b){const n=t(!0);return(v,s)=>{const r=l("ClientOnly");return h(),p("div",null,[s[1]||(s[1]=e("h1",{id:"地图显示成球体",tabindex:"-1"},[o("地图显示成球体 "),e("a",{class:"header-anchor",href:"#地图显示成球体","aria-label":'Permalink to "地图显示成球体"'},"​")],-1)),k(a(i(E),null,null,512),[[c,n.value]]),a(r,null,{default:m(()=>[a(i(g),{title:"example",description:"将地球显示成一个球",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{n.value=!1}),htmlCode:i(u)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=d("",4))])}}});export{A as __pageData,D as default};
