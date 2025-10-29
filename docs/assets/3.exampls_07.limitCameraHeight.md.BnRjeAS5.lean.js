import{p as l,C as s,c as o,o as p,j as i,a4 as d,G as n,a2 as h,a as m,a5 as c,k as r,w as u}from"./chunks/framework.CJqd0DOR.js";import{R as g,k}from"./chunks/index.Ga076E9x.js";const v="/three-tile-doc/assets/image-1.q_U1_vxc.png",b=`<!DOCTYPE html>\r
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
            left: 20px;\r
        }\r
        #compass-container {\r
            position: absolute;\r
            height: 75px;\r
            width: 75px;\r
            left: 30px;\r
            bottom: 50px;\r
        }\r
    </style>\r
    <body>\r
        <div id="map"></div>\r
        <div id="loading">-</div>\r
        <!-- 罗盘 -->\r
        <div id="compass-container"></div>\r
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
            function fly() {\r
                // 地图中心经纬度高度（m）转为世界坐标\r
                const centerPostion = map.geo2world(new THREE.Vector3(86.95, 27.98, 0));\r
                // 摄像机经纬度高度（m）转为世界坐标\r
                const cameraPosition = map.geo2world(new THREE.Vector3(86.95, 28.1, 10000));\r
                // 摄像机飞到指定位置\r
                viewer.flyTo(centerPostion, cameraPosition, false);\r
            }\r
            fly();\r
\r
            //==============================================================\r
            // 添加罗盘\r
            const compass = plugin.createCompass(viewer.controls);\r
            const compassContainer = document.querySelector("#compass-container");\r
            compassContainer && compassContainer.appendChild(compass.dom);\r
\r
            //==============================================================\r
\r
            // 防止摄像机进入地下\r
            viewer.addEventListener("update", () => {\r
                plugin.limitCameraHeight(map, viewer.camera);\r
            });\r
        <\/script>\r
    </body>\r
</html>\r
`,x=JSON.parse('{"title":"防止摄像机碰撞地面","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/07.limitCameraHeight.md","filePath":"3.exampls/07.limitCameraHeight.md","lastUpdated":1761368239000}'),E={name:"3.exampls/07.limitCameraHeight.md"},C=Object.assign(E,{setup(f){const t=l(!0);return(w,e)=>{const a=s("ClientOnly");return p(),o("div",null,[e[1]||(e[1]=i("h1",{id:"防止摄像机碰撞地面",tabindex:"-1"},[m("防止摄像机碰撞地面 "),i("a",{class:"header-anchor",href:"#防止摄像机碰撞地面","aria-label":'Permalink to "防止摄像机碰撞地面"'},"​")],-1)),d(n(r(g),null,null,512),[[c,t.value]]),n(a,null,{default:u(()=>[n(r(k),{title:"example",description:"防止摄像机进入地下，接近地面会反弹",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),htmlCode:r(b)},null,8,["htmlCode"])]),_:1}),e[2]||(e[2]=h("",18))])}}});export{x as __pageData,C as default};
