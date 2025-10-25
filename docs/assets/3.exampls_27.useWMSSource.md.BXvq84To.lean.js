import{p as o,C as a,c as h,o as d,j as t,a4 as m,G as n,a2 as k,a as r,a5 as c,k as e,w as u}from"./chunks/framework.BZ48x_LH.js";import{R as g,k as E}from"./chunks/index.DCj37L2o.js";const b=`<!DOCTYPE html>\r
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
            height: 600px;\r
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
        #loading {\r
            color: white;\r
            position: absolute;\r
            bottom: 0px;\r
            left: 20px;\r
            user-select: none;\r
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
        <div id="loading"></div>\r
\r
        <script type="module">\r
            import * as THREE from "three";\r
            import * as tt from "three-tile";\r
            import * as plugin from "three-tile/plugin";\r
\r
            console.log(\`three-tile v\${tt.version} start!\`);\r
\r
            const wmsSource = new plugin.WmsSource({\r
                url: "https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r-t.cgi?&service=WMS&request=GetMap&layers=nexrad-n0r-wmst&styles=&format=image/png&transparent=true&version=1.1.1&time=2005-08-29T14:00&width=256&height=256&srs=EPSG:3857&bbox={bbox}",\r
            });\r
\r
            // 创建地图\r
            const map = tt.TileMap.create({\r
                // 影像数据源\r
                imgSource: [new plugin.ArcGisSource(), wmsSource],\r
                // 地形数据源\r
                demSource: new plugin.ArcGisDemSource(),\r
                // 中央经线设为美洲\r
                lon0: -90,\r
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
            // // 地图中心经纬度高度（m）转为世界坐标\r
            const centerPostion = map.geo2world(new THREE.Vector3(-90, 35, 0));\r
            // 摄像机经纬度高度（m）转为世界坐标\r
            const cameraPosition = map.geo2world(new THREE.Vector3(-90, 30, 3000000));\r
            viewer.flyTo(centerPostion, cameraPosition);\r
\r
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
        <\/script>\r
    </body>\r
</html>\r
`,y={id:"使用-wms-数据源",tabindex:"-1"},f=JSON.parse('{"title":"使用 WMS 数据源","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/27.useWMSSource.md","filePath":"3.exampls/27.useWMSSource.md","lastUpdated":1761368239000}'),w={name:"3.exampls/27.useWMSSource.md"},x=Object.assign(w,{setup(v){const i=o(!0);return(S,s)=>{const l=a("Badge"),p=a("ClientOnly");return d(),h("div",null,[t("h1",y,[s[1]||(s[1]=r("使用 WMS 数据源")),n(l,{type:"tip",text:"≥0.11.5"}),s[2]||(s[2]=r()),s[3]||(s[3]=t("a",{class:"header-anchor",href:"#使用-wms-数据源","aria-label":'Permalink to "使用 WMS 数据源<Badge type="tip" text="≥0.11.5" />"'},"​",-1))]),m(n(e(g),null,null,512),[[c,i.value]]),n(p,null,{default:u(()=>[n(e(E),{title:"example",description:"从 https://mesonet.agron.iastate.edu/ 加载美国NEXRAD天气雷达拼图WMS服务",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{i.value=!1}),htmlCode:e(b)},null,8,["htmlCode"])]),_:1}),s[4]||(s[4]=k("",2))])}}});export{f as __pageData,x as default};
