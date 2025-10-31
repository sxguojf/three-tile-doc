import{p as a,C as l,c as h,o,a2 as p,a4 as d,G as t,j as r,a5 as c,k as s,w as k,a as m}from"./chunks/framework.BQo5SrHh.js";import{R as E,k as b}from"./chunks/index.UKPBqX0I.js";const g=`<!DOCTYPE html>\r
<html lang="zh-cn">\r
    <head>\r
        <meta charset="utf-8" />\r
        <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />\r
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
            height: 100%;\r
            width: 100%;\r
        }\r
    </style>\r
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
    <body>\r
        <div id="map"></div>\r
        <script type="module">\r
            import * as THREE from "three";\r
            import * as tt from "three-tile";\r
            import * as plugin from "three-tile/plugin";\r
            import { CSS2DObject, CSS2DRenderer } from "three/addons/renderers/CSS2DRenderer.js";\r
\r
            console.log(\`three-tile v\${tt.version} start!\`);\r
\r
            //=====================================================================================\r
            // 创建地图\r
            const map = tt.TileMap.create({\r
                // 影像数据源\r
                imgSource: new plugin.ArcGisSource(),\r
                // 地形数据源\r
                demSource: new plugin.ArcGisDemSource(),\r
                lon0: 90,\r
            });\r
            // 地图旋转到xz平面\r
            map.rotateX(-Math.PI / 2);\r
            // 初始化场景\r
            const viewer = new plugin.GLViewer("#map");\r
            // 地图添加到场景\r
            viewer.scene.add(map);\r
\r
            //=====================================================================================\r
            // 地图中心经纬度高度（m）转为世界坐标\r
            const centerPostion = map.geo2world(new THREE.Vector3(100, 35, 0));\r
            // 摄像机经纬度高度（m）转为世界坐标\r
            const cameraPosition = map.geo2world(new THREE.Vector3(100, 10, 5000 * 1000));\r
            viewer.flyTo(centerPostion, cameraPosition);\r
\r
            //=====================================================================================\r
            // 添加标签容器\r
            const labelRenderer = new CSS2DRenderer();\r
            labelRenderer.setSize(viewer.container.clientWidth, viewer.container.clientHeight);\r
            labelRenderer.domElement.style.position = "absolute";\r
            labelRenderer.domElement.style.top = "0px";\r
            labelRenderer.domElement.style.color = "white";\r
            labelRenderer.domElement.style.pointerEvents = "none";\r
            viewer.container.appendChild(labelRenderer.domElement);\r
\r
            viewer.addEventListener("update", () => {\r
                labelRenderer.render(viewer.scene, viewer.camera);\r
            });\r
\r
            window.addEventListener("resize", () =>\r
                labelRenderer.setSize(viewer.container.clientWidth, viewer.container.clientHeight)\r
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
                        const pos = map.geo2map(new THREE.Vector3(x, y));\r
                        const arrow = new THREE.ArrowHelper(dir, new THREE.Vector3(pos.x, pos.y, -1), 50);\r
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
                        const lonlat = map.map2geo(new THREE.Vector3(obj.position.x, obj.position.y));\r
                        label.innerHTML = \`\${lonlat.x.toFixed(0)},\${lonlat.y.toFixed(0)}\`;\r
                        label.title = "提示信息： " + label.innerHTML;\r
                        label.style.border = "1px solid white";\r
                        label.style.fontSize = "12px";\r
                        label.style.lineHeight = "12px";\r
                        label.style.textShadow = "0 0 2px black";\r
                        label.style.borderRadius = "4px";\r
                        label.style.padding = "2px 4px";\r
\r
                        // 创建css2dObj加入场景\r
                        const css = new CSS2DObject(label);\r
                        css.position.copy(obj.position.clone().add(new THREE.Vector3(0, 0, 10)));\r
                        labelGroup.add(css);\r
                    }\r
                });\r
            })();\r
        <\/script>\r
    </body>\r
</html>\r
`,x=JSON.parse('{"title":"6. 坐标转换","description":"","frontmatter":{},"headers":[],"relativePath":"2.base/06.mapCoord/index.md","filePath":"2.base/06.mapCoord/index.md","lastUpdated":1761902788000}'),u={name:"2.base/06.mapCoord/index.md"},F=Object.assign(u,{setup(y){const i=a(!0);return(w,e)=>{const n=l("ClientOnly");return o(),h("div",null,[e[1]||(e[1]=p("",17)),d(t(s(E),null,null,512),[[c,i.value]]),t(n,null,{default:k(()=>[t(s(b),{title:"坐标转换",description:"地图上指定位置添加标签",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:e[0]||(e[0]=()=>{i.value=!1}),htmlCode:s(g)},null,8,["htmlCode"])]),_:1}),e[2]||(e[2]=r("p",null,[m("上面的代码使用 threejs 的 CSS2DRenderer 类添加标签到地图上： "),r("a",{href:"https://threejs.org/docs/index.html?q=css#examples/zh/renderers/CSS2DRenderer",target:"_blank",rel:"noreferrer"},"https://threejs.org/docs/index.html?q=css#examples/zh/renderers/CSS2DRenderer")],-1))])}}});export{x as __pageData,F as default};
