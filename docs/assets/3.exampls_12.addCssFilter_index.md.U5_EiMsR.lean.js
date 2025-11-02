import{p as s,C as l,c as d,o as m,j as e,a4 as c,G as t,a as r,a5 as p,k as o,w as h}from"./chunks/framework.xbTv8SNN.js";import{R as u,k as g}from"./chunks/index.T3-yMMRo.js";const v=`<!DOCTYPE html>\r
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
\r
        #compass-container {\r
            position: absolute;\r
            height: 75px;\r
            width: 75px;\r
            left: 30px;\r
            bottom: 50px;\r
        }\r
\r
        #loading {\r
            position: absolute;\r
            bottom: 0px;\r
            left: 20px;\r
        }\r
        button {\r
            margin: 0 10px;\r
        }\r
        button:hover {\r
            background-color: darkcyan;\r
        }\r
    </style>\r
    <body>\r
        <div id="map"></div>\r
        <!-- 罗盘 -->\r
        <div id="compass-container"></div>\r
\r
        <div id="loading">-</div>\r
\r
        <script type="importmap">\r
            {\r
                "imports": {\r
                    "three": "https://unpkg.com/three@0.171.0/build/three.module.js",\r
                    "three-tile": "https://unpkg.com/three-tile@0.11.10/dist",\r
                    "three-tile/plugin": "https://unpkg.com/three-tile@0.11.10/dist/plugin",\r
                    "three/addons/": "https://unpkg.com/three@0.171.0/examples/jsm/"\r
                }\r
            }\r
        <\/script>\r
\r
        <script type="module">\r
            import * as THREE from "three";\r
            import * as tt from "three-tile";\r
            import * as plugin from "three-tile/plugin";\r
            import { GUI } from "three/addons/libs/lil-gui.module.min.js";\r
            // import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";\r
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
                minLevel: 8,\r
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
                const centerPostion = map.geo2world(new THREE.Vector3(87, 28, 3000));\r
                // 摄像机经纬度高度（m）转为世界坐标\r
                const cameraPosition = map.geo2world(new THREE.Vector3(87, 28.1, 5000));\r
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
            //==============================================================\r
            //添加蓝天白云\r
            const skybox = new THREE.CubeTextureLoader()\r
                .setPath("../../skybox/")\r
                .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);\r
            viewer.scene.background = skybox;\r
            //==============================================================\r
            // 添加CSS滤镜\r
            const vm = {\r
                hue: 170,\r
                saturate: 1.5,\r
                brightness: 1,\r
                contrast: 2,\r
            };\r
            const onFilterChange = () => {\r
                if (viewer.container) {\r
                    viewer.container.style.filter = \`hue-rotate(\${vm.hue}deg) saturate(\${vm.saturate}) brightness(\${vm.brightness}) contrast(\${vm.contrast})\`;\r
                }\r
            };\r
            onFilterChange();\r
\r
            const folder = new GUI();\r
            folder.add(vm, "hue", 0, 360, 1).onChange(onFilterChange).name("色相");\r
            folder.add(vm, "saturate", 0, 5).onChange(onFilterChange).name("饱和度");\r
            folder.add(vm, "brightness", 0, 5, 0.1).onChange(onFilterChange).name("亮度");\r
            folder.add(vm, "contrast", 0, 5, 0.1).onChange(onFilterChange).name("对比度");\r
        <\/script>\r
    </body>\r
</html>\r
`,y=JSON.parse('{"title":"12. 添加 CSS 滤镜","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/12.addCssFilter/index.md","filePath":"3.exampls/12.addCssFilter/index.md","lastUpdated":1761902788000}'),f={name:"3.exampls/12.addCssFilter/index.md"},L=Object.assign(f,{setup(w){const a=s(!0);return(C,n)=>{const i=l("ClientOnly");return m(),d("div",null,[n[1]||(n[1]=e("h1",{id:"_12-添加-css-滤镜",tabindex:"-1"},[r("12. 添加 CSS 滤镜 "),e("a",{class:"header-anchor",href:"#_12-添加-css-滤镜","aria-label":'Permalink to "12. 添加 CSS 滤镜"'},"​")],-1)),c(t(o(u),null,null,512),[[p,a.value]]),t(i,null,{default:h(()=>[t(o(g),{title:"example",description:"右上角调整滤镜参数",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:n[0]||(n[0]=()=>{a.value=!1}),htmlCode:o(v)},null,8,["htmlCode"])]),_:1}),n[2]||(n[2]=e("p",null,[r("CSS 滤镜就是普通的 "),e("code",null,"CSS"),r("，直接设置地图容器样式的 "),e("code",null,"filter"),r(" 属性即可")],-1))])}}});export{y as __pageData,L as default};
