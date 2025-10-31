import{p as t,C as l,c as p,o as h,j as e,a4 as k,G as i,a2 as o,a as d,a5 as E,k as n,w as c}from"./chunks/framework.BQo5SrHh.js";import{R as g,k as y}from"./chunks/index.UKPBqX0I.js";const u=`<!DOCTYPE html>\r
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
                "three-tile/plugin": "https://unpkg.com/three-tile@0.11.10/dist/plugin"\r
            }\r
        }\r
    <\/script>\r
\r
    <body>\r
        <div id="map"></div>\r
        <div id="loading">-</div>\r
\r
        <div class="position">\r
            <button class="show-position" onclick="showPosition()">刷新位置</button>\r
            <div class="text"></div>\r
        </div>\r
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
            //添加蓝天白云\r
            const skybox = new THREE.CubeTextureLoader()\r
                .setPath("../../skybox/")\r
                .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);\r
            viewer.scene.background = skybox;\r
\r
            //==============================================================\r
            // const centerGeo = new THREE.Vector3(116.391, 39.9235, 40);\r
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
            window.showPosition = () => {\r
                let text = "";\r
                groundGroup.traverse((child) => {\r
                    if (child instanceof THREE.Sprite) {\r
                        const pos = map.map2geo(child.position);\r
                        text += \`\${pos.x.toFixed(5)}, \${pos.y.toFixed(6)}, \${pos.z.toFixed(3)}m <br/>\`;\r
                    }\r
                });\r
                const html = document.querySelector(".text");\r
                html.innerHTML = text;\r
            };\r
            viewer.controls.addEventListener("end", () => showPosition());\r
        <\/script>\r
    </body>\r
</html>\r
`,x=JSON.parse('{"title":"30. 贴地模型组","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/30.groundGroup/index.md","filePath":"3.exampls/30.groundGroup/index.md","lastUpdated":1761902788000}'),m={name:"3.exampls/30.groundGroup/index.md"},w=Object.assign(m,{setup(F){const a=t(!0);return(b,s)=>{const r=l("ClientOnly");return h(),p("div",null,[s[1]||(s[1]=e("h1",{id:"_30-贴地模型组",tabindex:"-1"},[d("30. 贴地模型组 "),e("a",{class:"header-anchor",href:"#_30-贴地模型组","aria-label":'Permalink to "30. 贴地模型组"'},"​")],-1)),k(i(n(g),null,null,512),[[E,a.value]]),i(r,null,{default:c(()=>[i(n(y),{title:"Example",description:"随机在地面添加一批树",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{a.value=!1}),htmlCode:n(u)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=o(`<p>建筑物、树木等模型要放在地面上，需要传入模型所在地面海拔高度才能准确贴地，但不同层级地形瓦片的几何误差不同，同一位置的高度在不同层级高度不同，所以需要根据模型所在位置动态调整贴地高度，这个计算比较繁琐。为了简化贴地操作，three-tile 提供 GroundGroup 插件，它继承 threejs 的 Group 对象，只要将模型、精灵等加入 GroundGroup，就能够自动贴地。上面示例中，你可以看到不同缩放级别下，同样位置的树木的海拔高度不同。</p><p>下面的代码以 sprite 方式，随机向地面添加 500 棵树：</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建贴地模型组</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> groundGroup</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> plugin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GroundGroup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(map);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(groundGroup);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 树木精灵材质</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> SpriteMaterial</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SpriteMaterial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    map: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TextureLoader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../images/tree1.webp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    color: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x777777</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    transparent: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 随机添加500棵树</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 500</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> icon</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Sprite</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(SpriteMaterial);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    icon.renderOrder </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 999</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    icon.center.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    icon.scale.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setScalar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> lon</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> centerGeo.x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">random</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.005</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> lat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> centerGeo.y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">random</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.005</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> position</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">geo2map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Vector3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(lon, lat));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    icon.position.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">copy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(position);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    groundGroup.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(icon);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>GroundGroup 内部其实还是使用射线法对地形进行采样，贴地模型数量太多会影响运行效率。</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>当加载大量贴地模型时，如果你关注的区域地形变化不是很大，建议代码中指定模型的海拔高度。在上面示例中，待地图加载完毕，点击&quot;显示贴地模型位置&quot;，可以查看所有贴地模型的经纬度和海拔高度，运行时直接使用这些位置以加快运行速度。在地形起伏比较大时，由于不同级别瓦片几何误差不同，固定海拔高度可能贴地不准确，还是需要使用 GroundGroup 方式，实时采样地形高度调整模型贴地。</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>当然，你也可以使用 <code>添加广告牌</code> 方式，使用鼠标把树一颗一颗点上去，然后保存树的经纬度和海拔高度，再加载。</p></div>`,6))])}}});export{x as __pageData,w as default};
