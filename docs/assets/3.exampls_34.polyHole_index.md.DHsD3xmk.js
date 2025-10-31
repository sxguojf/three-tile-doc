import{p as l,C as i,c as s,o as c,j as o,a4 as p,G as e,a as d,a5 as m,k as r,w as h}from"./chunks/framework.BQo5SrHh.js";import{R as u,k as g}from"./chunks/index.UKPBqX0I.js";const w=`<!DOCTYPE html>\r
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
        #local-info {\r
            position: absolute;\r
            bottom: 0px;\r
            left: 20px;\r
        }\r
        .controls {\r
            position: absolute;\r
            top: 20px;\r
            right: 20px;\r
        }\r
        button {\r
            background-color: #333;\r
            border: 1px solid white;\r
            border-radius: 5px;\r
            padding: 0 5px;\r
            box-shadow: 0 0 5px black;\r
            margin-right: 10px;\r
        }\r
    </style>\r
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
    <body>\r
        <div id="map"></div>\r
        <div class="controls">\r
            <button name="controls" onclick="hole()">挖洞</button>\r
            <button name="controls" onclick="clip()">剪裁</button>\r
        </div>\r
        <div id="local-info">-</div>\r
\r
        <script type="module">\r
            import * as THREE from "three";\r
            import * as tt from "three-tile";\r
            import * as plugin from "three-tile/plugin";\r
\r
            console.log(\`three-tile v\${tt.version} start!\`);\r
\r
            // 注册geojson加载器\r
            tt.registerImgLoader(new plugin.GeoJSONLoader());\r
\r
            // 创建地图\r
            const map = tt.TileMap.create({\r
                // 影像数据源\r
                imgSource: [new plugin.ArcGisSource()],\r
                // 地形数据源\r
                demSource: new plugin.ArcGisDemSource(),\r
                // 中央经线\r
                lon0: 90,\r
                // 最小缩放级别\r
                minLevel: 4,\r
                // 地图经纬度范围\r
                bounds: [60, 0, 145, 60],\r
            });\r
            // 地图旋转到xz平面\r
            map.rotateX(-Math.PI / 2);\r
\r
            //==============================================================\r
\r
            // 初始化场景\r
            const viewer = new plugin.GLViewer("#map");\r
            viewer.scene.background = new THREE.Color(0x112233);\r
            viewer.scene.fog.color = viewer.scene.background;\r
            viewer.renderer.shadowMap.enabled = true;\r
            viewer.renderer.localClippingEnabled = true;\r
\r
            // 地图添加到场景\r
            viewer.scene.add(map);\r
\r
            //==============================================================\r
            // 地图中心经纬度高度（m）转为世界坐标\r
            const centerPostion = map.geo2world(new THREE.Vector3(109.4, 36.2, 0));\r
            // 摄像机经纬度高度（m）转为世界坐标\r
            const cameraPosition = map.geo2world(new THREE.Vector3(109.4, 34, 50000));\r
\r
            viewer.camera.position.copy(cameraPosition);\r
            viewer.controls.target.copy(centerPostion);\r
\r
            //==============================================================\r
            function showLocation(viewer, map, id) {\r
                const pointer = new THREE.Vector2();\r
                viewer.container.addEventListener("pointermove", (evt) => {\r
                    const lonlat = plugin.getLocalFromMouse(evt, map, viewer.camera);\r
                    if (lonlat) {\r
                        const el = document.querySelector(id);\r
                        el.innerHTML = \`经度:\${lonlat.x.toFixed(6)}° 纬度:\${lonlat.y.toFixed(\r
                            6\r
                        )}° 海拔:\${lonlat.z.toFixed(1)}m\`;\r
                    }\r
                });\r
            }\r
            showLocation(viewer, map, "#local-info");\r
\r
            // ==============================================================\r
            // 瓦片加载完成事件中，将mask材质的纹理赋给需要被mask材质的alphaMap;\r
            map.addEventListener("tile-loaded", (evt) => {\r
                const model = evt.tile.model;\r
                if (model && model.material.length > 1) {\r
                    const mat0 = model.material[0];\r
                    const mat1 = model.material[1];\r
                    if (mat0 instanceof THREE.MeshStandardMaterial && mat1 instanceof THREE.MeshStandardMaterial) {\r
                        mat0.alphaMap = mat1.map;\r
                    }\r
                }\r
            });\r
\r
            // 创建geojson数据源\r
            const createSource = (url, color) => {\r
                return new plugin.GeoJSONSource({\r
                    url,\r
                    dataType: "geojson",\r
                    style: {\r
                        fill: true,\r
                        fillColor: color,\r
                        fillOpacity: 1,\r
                    },\r
                    opacity: 0,\r
                });\r
            };\r
\r
            // 挖洞\r
            window.hole = function () {\r
                const holeSource = createSource("../../map/holeMap.geojson", "#FFFFFF");\r
                map.imgSource = [new plugin.ArcGisSource(), holeSource];\r
                map.reload();\r
            };\r
\r
            // 剪裁\r
            window.clip = function () {\r
                const clipSource = createSource("../../map/clipMap.geojson", "#ffff00");\r
                map.imgSource = [new plugin.ArcGisSource(), clipSource];\r
                map.reload();\r
            };\r
\r
            // 加一个球测试\r
            // const ball = new THREE.Mesh(\r
            //     new THREE.SphereGeometry(7e4),\r
            //     new THREE.MeshStandardMaterial({\r
            //         color: 0xff0000,\r
            //         roughness: 0.5,\r
            //         metalness: 0.5,\r
            //         // depthTest: false,\r
            //         // depthFunc: THREE.GreaterDepthFunc,\r
            //     })\r
            // );\r
            // ball.position.copy(centerPostion);\r
            // viewer.scene.add(ball);\r
\r
            // ==============================================================\r
            // 创建挤压几何体\r
            export function createExtrudedMesh(map, coordinates, depth = 50000) {\r
                // 墨卡托投影函数\r
                function lonLatToXY(lon, lat) {\r
                    const pos = map.geo2map(new THREE.Vector3(lon, lat));\r
                    return [pos.x, pos.y];\r
                }\r
\r
                const shape = new THREE.Shape();\r
                const [firstPoint] = coordinates[0];\r
                const p0 = lonLatToXY(firstPoint[0], firstPoint[1]);\r
                shape.moveTo(p0[0], p0[1]);\r
\r
                for (let i = 1; i < coordinates[0].length; i++) {\r
                    const [lon, lat] = coordinates[0][i];\r
                    const p1 = lonLatToXY(lon, lat);\r
                    shape.lineTo(p1[0], p1[1]);\r
                }\r
\r
                const geometry = new THREE.ExtrudeGeometry(shape, { depth: depth });\r
                const plane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 2000);\r
                const material = new THREE.MeshStandardMaterial({\r
                    color: 0x049ef4,\r
                    emissive: 0,\r
                    roughness: 0.5,\r
                    metalness: 0.5,\r
                    clipIntersection: false,\r
                    side: THREE.DoubleSide,\r
                });\r
                material.clippingPlanes = [plane];\r
                return new THREE.Mesh(geometry, material);\r
            }\r
\r
            fetch("../../map/clipMap.geojson").then((res) => {\r
                res.json().then((data) => {\r
                    const coordinates = data.features[0].geometry.coordinates;\r
                    const mesh = createExtrudedMesh(map, coordinates[0]);\r
                    mesh.renderOrder = 100;\r
                    mesh.translateZ(-10000);\r
                    mesh.castShadow = true;\r
                    mesh.receiveShadow = true;\r
                    map.add(mesh);\r
                });\r
            });\r
        <\/script>\r
    </body>\r
</html>\r
`,y=JSON.parse('{"title":"34. 用 geojson 挖洞或剪裁","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/34.polyHole/index.md","filePath":"3.exampls/34.polyHole/index.md","lastUpdated":1761902788000}'),f={name:"3.exampls/34.polyHole/index.md"},T=Object.assign(f,{setup(v){const t=l(!0);return(E,n)=>{const a=i("ClientOnly");return c(),s("div",null,[n[1]||(n[1]=o("h1",{id:"_34-用-geojson-挖洞或剪裁",tabindex:"-1"},[d("34. 用 geojson 挖洞或剪裁 "),o("a",{class:"header-anchor",href:"#_34-用-geojson-挖洞或剪裁","aria-label":'Permalink to "34. 用 geojson 挖洞或剪裁"'},"​")],-1)),p(e(r(u),null,null,512),[[m,t.value]]),e(a,null,{default:h(()=>[e(r(g),{title:"example",description:"点击右上角按钮挖洞或剪裁",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:n[0]||(n[0]=()=>{t.value=!1}),htmlCode:r(w)},null,8,["htmlCode"])]),_:1})])}}});export{y as __pageData,T as default};
