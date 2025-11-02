import{p as l,C as r,c as p,o as h,j as e,a4 as k,G as i,a2 as o,a as E,a5 as d,k as n,w as c}from"./chunks/framework.xbTv8SNN.js";import{R as g,k as m}from"./chunks/index.T3-yMMRo.js";const y=`<!DOCTYPE html>\r
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
                minLevel: 10,\r
            });\r
            // 地图旋转到xz平面\r
            map.rotateX(-Math.PI / 2);\r
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
            //添加蓝天白云\r
            const skybox = new THREE.CubeTextureLoader()\r
                .setPath("../../skybox/")\r
                .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);\r
            viewer.scene.background = skybox;\r
\r
            //==============================================================\r
            // 地图中心经纬度高度（m）转为世界坐标\r
            const centerPostion = map.geo2world(new THREE.Vector3(109.4, 31));\r
            // 摄像机经纬度高度（m）转为世界坐标\r
            const cameraPosition = map.geo2world(new THREE.Vector3(109.38, 30.96, 2500));\r
            // 摄像机飞到指定位置\r
            viewer.flyTo(centerPostion, cameraPosition, false);\r
\r
            //==============================================================\r
            // 图标精灵材质\r
            const spritTexture = new THREE.TextureLoader().load("../../images/gis.png");\r
            spritTexture.colorSpace = THREE.SRGBColorSpace;\r
            const SpriteMaterial = new THREE.SpriteMaterial({\r
                map: spritTexture,\r
                sizeAttenuation: false,\r
                transparent: true,\r
            });\r
\r
            // 添加图标精灵\r
            function addIcon(map, lonlat) {\r
                const icon = new THREE.Sprite(SpriteMaterial);\r
                icon.renderOrder = 999;\r
                icon.center.set(0.5, 0);\r
                icon.scale.setScalar(0.08);\r
                const position = map.geo2map(lonlat);\r
                icon.position.copy(position);\r
                map.add(icon);\r
            }\r
            const currentLonlat = new THREE.Vector3();\r
            // 鼠标点击事件添加图标\r
            viewer.container?.addEventListener("pointerdown", (evt) => {\r
                const lonlat = plugin.getLocalFromMouse(evt, map, viewer.camera);\r
                if (lonlat) {\r
                    currentLonlat.copy(lonlat);\r
                }\r
            });\r
            viewer.container?.addEventListener("pointerup", (evt) => {\r
                const lonlat = plugin.getLocalFromMouse(evt, map, viewer.camera);\r
                console.log(lonlat);\r
                if (lonlat && lonlat.distanceTo(currentLonlat) < 1) {\r
                    addIcon(map, lonlat);\r
                }\r
            });\r
        <\/script>\r
    </body>\r
</html>\r
`,w=JSON.parse('{"title":"20. 添加 sprite 广告牌","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/20.addIcon/index.md","filePath":"3.exampls/20.addIcon/index.md","lastUpdated":1761902788000}'),u={name:"3.exampls/20.addIcon/index.md"},B=Object.assign(u,{setup(b){const a=l(!0);return(F,s)=>{const t=r("ClientOnly");return h(),p("div",null,[s[1]||(s[1]=e("h1",{id:"_20-添加-sprite-广告牌",tabindex:"-1"},[E("20. 添加 sprite 广告牌 "),e("a",{class:"header-anchor",href:"#_20-添加-sprite-广告牌","aria-label":'Permalink to "20. 添加 sprite 广告牌"'},"​")],-1)),k(i(n(g),null,null,512),[[d,a.value]]),i(t,null,{default:c(()=>[i(n(m),{title:"Example",description:"点击地图添加一个地标",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{a.value=!1}),htmlCode:n(y)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=o("",5))])}}});export{w as __pageData,B as default};
