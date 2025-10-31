import{p as t,C as r,c as p,o,j as e,a4 as h,G as n,a2 as k,a as c,a5 as d,k as i,w as g}from"./chunks/framework.BQo5SrHh.js";import{R as E,k as m}from"./chunks/index.UKPBqX0I.js";const u=`<!DOCTYPE html>\r
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
        #local-info {\r
            position: absolute;\r
            bottom: 0px;\r
            left: 20px;\r
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
        <div id="local-info">-</div>\r
\r
        <script type="module">\r
            import * as THREE from "three";\r
            import * as tt from "three-tile";\r
            import * as plugin from "three-tile/plugin";\r
\r
            console.log(\`three-tile v\${tt.version} start!\`);\r
\r
            // 注册logo加载器\r
            tt.registerImgLoader(new plugin.TileMaterialLogoLoader());\r
\r
            const logoSource = tt.TileSource.create({\r
                dataType: "logo",\r
                attribution: "three-tile 轻量级三维地图框架",\r
                opacity: 0.8,\r
                minLevel: 5,\r
                maxLevel: 18,\r
            });\r
\r
            // 创建地图\r
            const map = tt.TileMap.create({\r
                // 影像数据源\r
                imgSource: [new plugin.ArcGisSource(), logoSource],\r
                // 地形数据源\r
                demSource: new plugin.ArcGisDemSource(),\r
                lon0: 90,\r
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
            // 地图中心经纬度高度（m）转为世界坐标\r
            const centerPostion = map.geo2world(new THREE.Vector3(116.4, 39.91, 0));\r
            // 摄像机经纬度高度（m）转为世界坐标\r
            const cameraPosition = map.geo2world(new THREE.Vector3(116.4, 39.908, 10000));\r
            viewer.flyTo(centerPostion, cameraPosition);\r
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
        <\/script>\r
    </body>\r
</html>\r
`,C=JSON.parse('{"title":"18. 添加水印","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/18.addLogo/index.md","filePath":"3.exampls/18.addLogo/index.md","lastUpdated":1761902788000}'),b={name:"3.exampls/18.addLogo/index.md"},f=Object.assign(b,{setup(y){const a=t(!0);return(v,s)=>{const l=r("ClientOnly");return o(),p("div",null,[s[1]||(s[1]=e("h1",{id:"_18-添加水印",tabindex:"-1"},[c("18. 添加水印 "),e("a",{class:"header-anchor",href:"#_18-添加水印","aria-label":'Permalink to "18. 添加水印"'},"​")],-1)),h(n(i(E),null,null,512),[[d,a.value]]),n(l,null,{default:g(()=>[n(i(m),{title:"example",description:"添加水印logo",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{a.value=!1}),htmlCode:i(u)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=k("",5))])}}});export{C as __pageData,f as default};
