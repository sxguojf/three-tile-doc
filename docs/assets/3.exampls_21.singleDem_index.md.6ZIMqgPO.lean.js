import{p as t,C as l,c as p,o,j as a,a4 as h,G as s,a2 as d,a as c,a5 as k,k as e,w as E}from"./chunks/framework.xbTv8SNN.js";import{R as m,k as g}from"./chunks/index.T3-yMMRo.js";const u=`<!DOCTYPE html>\r
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
        #loading {\r
            position: absolute;\r
            bottom: 0px;\r
            right: 20px;\r
        }\r
\r
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
            // 注册单影像TIF-DEM加载器\r
            tt.registerDEMLoader(new plugin.SingleTifDEMLoader());\r
\r
            // tif地形数据源\r
            const tifDemSource = new tt.TileSource({\r
                dataType: "single-tif",\r
                url: "../../map/dem1.tif",\r
                // maxLevel: 20,\r
                skirtHeight: 100,\r
                bounds: [111.16267204284668, 21.59287851485902, 111.23897552490234, 21.64825416643841],\r
            });\r
\r
            // 创建地图\r
            const map = tt.TileMap.create({\r
                // 影像数据源\r
                imgSource: new plugin.ArcGisSource(),\r
                // 地形数据源\r
                demSource: tifDemSource,\r
                lon0: 90,\r
                minLevel: 2,\r
            });\r
            // 地图旋转到xz平面\r
            map.rotateX(-Math.PI / 2);\r
            // 地形夸张2倍\r
            map.scale.setZ(2.5);\r
\r
            // 初始化场景\r
            const viewer = new plugin.GLViewer("#map");\r
            viewer.renderer.toneMapping = THREE.ACESFilmicToneMapping;\r
            // viewer.renderer.toneMappingExposure = 1.5;\r
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
            showLoading(map, "#loading");\r
\r
            //==============================================================\r
            // 添加罗盘\r
            const compass = plugin.createCompass(viewer.controls);\r
            const compassContainer = document.querySelector("#compass-container");\r
            compassContainer && compassContainer.appendChild(compass.dom);\r
\r
            //==============================================================\r
            //添加蓝天白云\r
            const skybox = new THREE.CubeTextureLoader()\r
                .setPath("../../skybox/")\r
                .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);\r
            viewer.scene.background = skybox;\r
\r
            //==============================================================\r
            //地形添加一个box\r
            const bounds = tifDemSource.bounds;\r
            const sw = map.geo2world(new THREE.Vector3(bounds[0], bounds[1]));\r
            const ne = map.geo2world(new THREE.Vector3(bounds[2], bounds[3]));\r
            const center = new THREE.Vector3((ne.x + sw.x) / 2, 0, (ne.z + sw.z) / 2);\r
            const scale = new THREE.Vector3(ne.x - sw.x, 1000, ne.z - sw.z);\r
            const mat = new THREE.Matrix4();\r
            mat.setPosition(center);\r
            mat.scale(scale);\r
            const box = new THREE.Mesh(\r
                new THREE.BoxGeometry(),\r
                new THREE.MeshLambertMaterial({\r
                    color: 0x00ff00,\r
                    transparent: true,\r
                    opacity: 0.3,\r
                    side: THREE.BackSide,\r
                })\r
            );\r
            box.applyMatrix4(mat);\r
            box.renderOrder = 1000;\r
            const boxHelper = new THREE.BoxHelper(box, 0xffff00);\r
            viewer.scene.add(boxHelper);\r
            viewer.scene.add(box);\r
\r
            // flyto 目标位置\r
            viewer.flyTo(center, new THREE.Vector3(center.x, 3000, center.z + 6000));\r
        <\/script>\r
    </body>\r
</html>\r
`,v=JSON.parse('{"title":"21. 单 TIFF 文件地形","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/21.singleDem/index.md","filePath":"3.exampls/21.singleDem/index.md","lastUpdated":1761902788000}'),b={name:"3.exampls/21.singleDem/index.md"},T=Object.assign(b,{setup(y){const i=t(!0);return(f,n)=>{const r=l("ClientOnly");return o(),p("div",null,[n[1]||(n[1]=a("h1",{id:"_21-单-tiff-文件地形",tabindex:"-1"},[c("21. 单 TIFF 文件地形 "),a("a",{class:"header-anchor",href:"#_21-单-tiff-文件地形","aria-label":'Permalink to "21. 单 TIFF 文件地形"'},"​")],-1)),h(s(e(m),null,null,512),[[k,i.value]]),s(r,null,{default:E(()=>[s(e(g),{title:"example",description:"使用tiff文件作为地形",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:n[0]||(n[0]=()=>{i.value=!1}),htmlCode:e(u)},null,8,["htmlCode"])]),_:1}),n[2]||(n[2]=d("",5))])}}});export{v as __pageData,T as default};
