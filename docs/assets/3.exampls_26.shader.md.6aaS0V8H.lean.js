import{p as o,C as e,c as h,o as d,j as r,a4 as c,G as s,a2 as k,a as l,a5 as m,k as a,w as g}from"./chunks/framework.CJqd0DOR.js";import{R as u,k as E}from"./chunks/index.Ga076E9x.js";const b=`<!DOCTYPE html>\r
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
        .controls {\r
            position: absolute;\r
            top: 20px;\r
            right: 20px;\r
            display: flex;\r
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
        <div id="loading">-</div>\r
        <div class="controls">\r
            <button onclick="handleReset()">原始样式</button>\r
            <button onclick="handlFilter()">自定义着色器</button>\r
            <button onclick="setStyle(0xaaccff)">蓝色</button>\r
            <button onclick="setStyle(0x88ffcc)">绿色</button>\r
            <button onclick="setStyle(0xffaaaa)">红色</button>\r
        </div>\r
\r
        <script type="module">\r
            import * as THREE from "three";\r
            import * as tt from "three-tile";\r
            import * as plugin from "three-tile/plugin";\r
\r
            console.log(\`three-tile v\${tt.version} start!\`);\r
\r
            //==============================================================\r
            // 定义着色器\r
            class Filter extends THREE.MeshBasicMaterial {\r
                constructor(params) {\r
                    super(params);\r
                    this.onBeforeCompile = (shader) => {\r
                        // 修改片段着色器\r
                        shader.fragmentShader = shader.fragmentShader.replace(\r
                            "#include <dithering_fragment>",\r
                            \`\r
                            #include <dithering_fragment>\r
                            vec4 texel = texture2D(map, vMapUv);                \r
                            vec3 inverted = 1.0 - texel.rgb; \r
                            float luminance = dot(inverted, vec3(0.299, 0.587, 0.114));\r
                            vec3 grayscale = vec3(luminance);                            \r
                            vec3 finalColor = mix(grayscale, inverted, 0.6) * diffuse * 2.0;\r
                            gl_FragColor =  vec4( finalColor, opacity * texel.a );\r
                            \`\r
                        );\r
                    };\r
                }\r
            }\r
\r
            //==============================================================\r
            // 修改影像加载器的材质为Filter\r
            const loader = tt.getImgLoader("image");\r
            loader.material = new Filter({ color: 0xaaccff });\r
\r
            //==============================================================\r
            // 创建地图\r
            const map = tt.TileMap.create({\r
                // 影像数据源\r
                imgSource: new plugin.GDSource({ style: 7 }),\r
                minLevel: 4,\r
                lon0: 90,\r
                // 地图经纬度范围\r
                bounds: [60, 0, 145, 60],\r
            });\r
            // 地图旋转到xz平面\r
            map.rotateX(-Math.PI / 2);\r
\r
            // 初始化场景\r
            const viewer = new plugin.GLViewer("#map");\r
            viewer.scene.background = new THREE.Color(0x000022);\r
\r
            // 地图添加到场景\r
            viewer.scene.add(map);\r
\r
            //==============================================================\r
            // 地图中心经纬度高度（m）转为世界坐标\r
            const centerPostion = map.geo2world(new THREE.Vector3(116.4, 39.92, 0));\r
            // 摄像机经纬度高度（m）转为世界坐标\r
            const cameraPosition = map.geo2world(new THREE.Vector3(116.4, 39.91, 10000));\r
            viewer.flyTo(centerPostion, cameraPosition, false);\r
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
            //===========================================================\r
            // 修改着色器\r
            window.handleReset = function () {\r
                const loader = tt.getImgLoader("image");\r
                loader.material = new THREE.MeshBasicMaterial();\r
                map.reload();\r
            };\r
\r
            window.handlFilter = function () {\r
                // 修改影像加载器的材质\r
                const loader = tt.getImgLoader("image");\r
                loader.material = new Filter({ color: 0xaaccff });\r
                map.reload();\r
            };\r
\r
            window.setStyle = (color) => {\r
                loader.material.color.set(color);\r
                map.reload();\r
            };\r
        <\/script>\r
    </body>\r
</html>\r
`,y={id:"自定义瓦片着色器",tabindex:"-1"},w=JSON.parse('{"title":"自定义瓦片着色器","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/26.shader.md","filePath":"3.exampls/26.shader.md","lastUpdated":1761471651000}'),F={name:"3.exampls/26.shader.md"},B=Object.assign(F,{setup(v){const i=o(!0);return(f,n)=>{const t=e("Badge"),p=e("ClientOnly");return d(),h("div",null,[r("h1",y,[n[1]||(n[1]=l("自定义瓦片着色器")),s(t,{type:"tip",text:"≥0.11.4"}),n[2]||(n[2]=l()),n[3]||(n[3]=r("a",{class:"header-anchor",href:"#自定义瓦片着色器","aria-label":'Permalink to "自定义瓦片着色器<Badge type="tip" text="≥0.11.4" />"'},"​",-1))]),c(s(a(u),null,null,512),[[m,i.value]]),s(p,null,{default:g(()=>[s(a(E),{title:"example",description:"点击右上角按钮，切换着色器",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:n[0]||(n[0]=()=>{i.value=!1}),htmlCode:a(b)},null,8,["htmlCode"])]),_:1}),n[4]||(n[4]=k("",10))])}}});export{w as __pageData,B as default};
