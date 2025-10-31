import{p as t,C as p,c as r,o as h,j as e,a4 as k,G as i,a2 as d,a as o,a5 as E,k as n,w as c}from"./chunks/framework.BQo5SrHh.js";import{R as g,k as m}from"./chunks/index.UKPBqX0I.js";const y=`<!DOCTYPE html>\r
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
            viewer.scene.background = 0;\r
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
                const centerPosition = map.geo2world(new THREE.Vector3(86.93, 27.99, 0));\r
                // 摄像机经纬度高度（m）转为世界坐标\r
                const cameraPosition = map.geo2world(new THREE.Vector3(86.95, 28.1, 20000));\r
                // 摄像机飞到指定位置\r
                viewer.flyTo(centerPosition, cameraPosition, false);\r
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
            //添加蓝天白云\r
            const skybox = new THREE.CubeTextureLoader()\r
                .setPath("../../skybox/")\r
                .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);\r
            viewer.scene.background = skybox;\r
            //==============================================================\r
\r
            // --------------创建球体模型-------------------------\r
            function crateSphere(color) {\r
                const sphereGeometry = new THREE.SphereGeometry(1000, 32, 32);\r
                const sphereMaterial = new THREE.MeshStandardMaterial({\r
                    color,\r
                    roughness: 0.2,\r
                    metalness: 0.8,\r
                    flatShading: true,\r
                });\r
                return new THREE.Mesh(sphereGeometry, sphereMaterial);\r
            }\r
\r
            // -------------- 模型加入场景(绿球)-------------------------\r
            const lonlat1 = new THREE.Vector3(86.92, 27.98, 8 * 1000);\r
            const sphere1 = crateSphere(0x00ff00);\r
            sphere1.position.copy(map.geo2world(lonlat1));\r
            viewer.scene.add(sphere1);\r
\r
            // 瓦片下载完成后更新模型高度\r
            map.addEventListener("loading-complete", () => {\r
                const info = map.getLocalInfoFromGeo(lonlat1);\r
                if (info) {\r
                    sphere1.position.y = info.location.z;\r
                }\r
            });\r
\r
            // ---------------模型加入地图(蓝球)--------------------------\r
            const lonlat2 = new THREE.Vector3(86.94, 28, 8 * 1000);\r
            const sphere2 = crateSphere(0x0000ff);\r
            // 设置球体坐标\r
            sphere2.position.copy(map.geo2map(lonlat2));\r
            // 将模型添加到地图中\r
            map.add(sphere2);\r
\r
            // 瓦片下载完成后更新模型高度\r
            map.addEventListener("loading-complete", () => {\r
                const info = map.getLocalInfoFromGeo(lonlat2);\r
                if (info) {\r
                    sphere2.position.z = info.location.z;\r
                }\r
            });\r
        <\/script>\r
    </body>\r
</html>\r
`,D=JSON.parse('{"title":"9. 添加模型","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/09.addMesh/index.md","filePath":"3.exampls/09.addMesh/index.md","lastUpdated":1761902788000}'),u={name:"3.exampls/09.addMesh/index.md"},A=Object.assign(u,{setup(b){const a=t(!0);return(F,s)=>{const l=p("ClientOnly");return h(),r("div",null,[s[1]||(s[1]=e("h1",{id:"_9-添加模型",tabindex:"-1"},[o("9. 添加模型 "),e("a",{class:"header-anchor",href:"#_9-添加模型","aria-label":'Permalink to "9. 添加模型"'},"​")],-1)),k(i(n(g),null,null,512),[[E,a.value]]),i(l,null,{default:c(()=>[i(n(m),{title:"example",description:"添加两个球，绿球加入场景（场景全局坐标系），蓝球加入地图（地图模型局地坐标系）",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{a.value=!1}),htmlCode:n(y)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=d("",17))])}}});export{D as __pageData,A as default};
