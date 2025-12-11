import{p as e,C as l,c as p,o as h,j as t,a4 as k,G as i,a2 as o,a as d,a5 as E,k as n,w as c}from"./chunks/framework.xbTv8SNN.js";import{R as g,k as u}from"./chunks/index.T3-yMMRo.js";const y=`<!DOCTYPE html>\r
<html lang="zh-cn">\r
    <head>\r
        <meta charset="utf-8" />\r
        <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />\r
        <title>three-tile最小化应用</title>\r
    </head>\r
    <style>\r
        html,\r
        body {\r
            color: #ddd;\r
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
            text-shadow: 0 0 2px black;\r
        }\r
        #map {\r
            height: 100%;\r
            width: 100%;\r
        }\r
\r
        #loading {\r
            position: absolute;\r
            bottom: 10px;\r
            left: 20px;\r
        }\r
\r
        .show-position {\r
            width: 100%;\r
            height: 35px;\r
            background-color: #0005;\r
            cursor: pointer;\r
        }\r
        .show-position:active {\r
            background-color: #000;\r
        }\r
\r
        .position {\r
            position: absolute;\r
            top: 20px;\r
            right: 20px;\r
            width: 300px;\r
\r
            border: 1px solid #fff3;\r
            border-radius: 5px;\r
            box-shadow: 0 0 3px #000;\r
            background-color: #0006;\r
        }\r
\r
        .position .text {\r
            /* display: none; */\r
            height: 520px;\r
            overflow-y: auto;\r
            margin-top: 5px;\r
        }\r
\r
        /* .position:hover .text {\r
            display: block;\r
        } */\r
    </style>\r
\r
    <script type="importmap">\r
        {\r
            "imports": {\r
                "three": "https://unpkg.com/three@0.171.0/build/three.module.js",\r
                "three-tile": "https://unpkg.com/three-tile@0.11.10/dist",\r
                "three-tile/plugin": "https://unpkg.com/three-tile@0.11.10/dist/plugin",\r
                "utils": "../utils/index.js"\r
            }\r
        }\r
    <\/script>\r
\r
    <body>\r
        <div id="map"></div>\r
        <div id="loading">-</div>\r
\r
        <!-- <div class="position">\r
            <button class="show-position" onclick="showPosition()">刷新位置</button>\r
            <div class="text"></div>\r
        </div> -->\r
\r
        <script type="module">\r
            import * as THREE from "three";\r
            import * as tt from "three-tile";\r
            import * as plugin from "three-tile/plugin";\r
            import * as utils from "utils";\r
\r
            console.log(\`three-tile v\${tt.version} start!\`);\r
\r
            // 创建地图\r
            const map = tt.TileMap.create({\r
                // 影像数据源\r
                imgSource: new plugin.BingSource(),\r
                // 地形数据源\r
                demSource: new plugin.ArcGisDemSource(),\r
                lon0: 90,\r
                minLevel: 6,\r
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
            const centerGeo = new THREE.Vector3(109.5, 36.7, 1000);\r
            // 地图中心经纬度高度（m）转为世界坐标\r
            const centerPostion = map.geo2world(centerGeo);\r
            // 摄像机经纬度高度（m）转为世界坐标\r
            const cameraPosition = map.geo2world(new THREE.Vector3(109.497, 36.7, 1100));\r
            // 摄像机飞到指定位置\r
            viewer.flyTo(centerPostion, cameraPosition, false);\r
\r
            //==============================================================\r
\r
            utils.showLoading(map, "#loading");\r
            utils.addSkyBox(viewer);\r
\r
            //==============================================================\r
\r
            // 创建贴地模型组\r
            const groundGroup = new plugin.GroundGroup(map);\r
            map.add(groundGroup);\r
\r
            // 树木精灵材质\r
            const treeTexture = new THREE.TextureLoader().load("../../images/tree3.png");\r
            treeTexture.colorSpace = THREE.SRGBColorSpace;\r
            const SpriteMaterial = new THREE.SpriteMaterial({\r
                map: treeTexture,\r
                color: 0xaaaaaa,\r
                transparent: true,\r
                opacity: 0.9,\r
            });\r
\r
            // 随机添加500棵树\r
            for (let i = 0; i < 500; i++) {\r
                const icon = new THREE.Sprite(SpriteMaterial);\r
                icon.renderOrder = 999;\r
                icon.center.set(0.5, 0);\r
                icon.scale.set(Math.random() * 10 + 20, Math.random() * 20 + 15, 1);\r
                const lon = centerGeo.x + (Math.random() - 0.5) * 0.005;\r
                const lat = centerGeo.y + (Math.random() - 0.5) * 0.005;\r
                const position = map.geo2map(new THREE.Vector3(lon, lat));\r
                icon.position.copy(position);\r
                groundGroup.add(icon);\r
            }\r
\r
            // 显示树经纬度\r
            // window.showPosition = () => {\r
            //     let text = "";\r
            //     groundGroup.traverse((child) => {\r
            //         if (child instanceof THREE.Sprite) {\r
            //             const pos = map.map2geo(child.position);\r
            //             text += \`\${pos.x.toFixed(5)}, \${pos.y.toFixed(6)}, \${pos.z.toFixed(3)}m <br/>\`;\r
            //         }\r
            //     });\r
            //     const html = document.querySelector(".text");\r
            //     html.innerHTML = text;\r
            // };\r
            // viewer.controls.addEventListener("end", () => showPosition());\r
        <\/script>\r
    </body>\r
</html>\r
`,w=JSON.parse('{"title":"30. 贴地模型组","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/30.groundGroup/index.md","filePath":"3.exampls/30.groundGroup/index.md","lastUpdated":1761902788000}'),m={name:"3.exampls/30.groundGroup/index.md"},v=Object.assign(m,{setup(F){const a=e(!0);return(b,s)=>{const r=l("ClientOnly");return h(),p("div",null,[s[1]||(s[1]=t("h1",{id:"_30-贴地模型组",tabindex:"-1"},[d("30. 贴地模型组 "),t("a",{class:"header-anchor",href:"#_30-贴地模型组","aria-label":'Permalink to "30. 贴地模型组"'},"​")],-1)),k(i(n(g),null,null,512),[[E,a.value]]),i(r,null,{default:c(()=>[i(n(u),{title:"Example",description:"随机在地面添加一批树",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{a.value=!1}),htmlCode:n(y)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=o("",6))])}}});export{w as __pageData,v as default};
