import{p as t,C as r,c as p,o,j as e,a4 as h,G as n,a2 as c,a as d,a5 as k,k as i,w as m}from"./chunks/framework.xbTv8SNN.js";import{R as u,k as g}from"./chunks/index.T3-yMMRo.js";const b=`<!DOCTYPE html>\r
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
\r
        #map {\r
            height: 100%;\r
            width: 100%;\r
        }\r
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
                "three": "https://unpkg.com/three@0.171.0/build/three.module.min.js",\r
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
\r
            // 初始化场景\r
            const viewer = new plugin.GLViewer("#map");\r
\r
            // 地图添加到场景\r
            viewer.scene.add(map);\r
\r
            //==============================================================\r
            // 地图中心经纬度高度（m）转为世界坐标\r
            const centerPostion = map.geo2world(new THREE.Vector3(116.39180280130437, 39.915285657622775, 0));\r
            // 摄像机经纬度高度（m）转为世界坐标\r
            const cameraPosition = map.geo2world(new THREE.Vector3(116.39199596764485, 39.91047669278009, 900));\r
            viewer.flyTo(centerPostion, cameraPosition);\r
\r
            //==============================================================\r
\r
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
`,f=JSON.parse('{"title":"1. 取得鼠标处经纬度海拔高度","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/01.getMouseLocation/index.md","filePath":"3.exampls/01.getMouseLocation/index.md","lastUpdated":1762073091000}'),y={name:"3.exampls/01.getMouseLocation/index.md"},w=Object.assign(y,{setup(D){const a=t(!0);return(A,s)=>{const l=r("ClientOnly");return o(),p("div",null,[s[1]||(s[1]=e("h1",{id:"_1-取得鼠标处经纬度海拔高度",tabindex:"-1"},[d("1. 取得鼠标处经纬度海拔高度 "),e("a",{class:"header-anchor",href:"#_1-取得鼠标处经纬度海拔高度","aria-label":'Permalink to "1. 取得鼠标处经纬度海拔高度"'},"​")],-1)),h(n(i(u),null,null,512),[[k,a.value]]),n(l,null,{default:m(()=>[n(i(g),{title:"Example",description:"地图下方显示鼠标所指经纬度、海拔高度信息",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:s[0]||(s[0]=()=>{a.value=!1}),htmlCode:i(b)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=c(`<p>实时显示鼠标处经纬度海拔高度信息是地图软件最常用的功能，这里使用了 TileMap 的根据屏幕坐标采用地面信息的方法。</p><p>three-tile 提供多种取得地面信息的方法，包括通过屏幕坐标、经纬度、世界坐标取得地面信息（地形采样）。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>three-tile 插件 plugin.getLocalFromMouse 辅助函数，简化取得鼠标位置信息</p></div><h2 id="_1-根据屏幕坐标取得地面信息" tabindex="-1">1. 根据屏幕坐标取得地面信息 <a class="header-anchor" href="#_1-根据屏幕坐标取得地面信息" aria-label="Permalink to &quot;1. 根据屏幕坐标取得地面信息&quot;">​</a></h2><p>通过 TileMap.getLocalInfoFromScreen()屏幕坐标处的地图经纬度以及海拔高度，鼠标在地图上移动时，取得屏幕坐标再调用它取得地面信息。函数的定义如下：</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 获取指定屏幕坐标的地面信息</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> camera</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 摄像机</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pointer</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 点的屏幕坐标（-0.5~0.5）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 位置信息（经纬度、高度等）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLocalInfoFromScreen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(camera: Camera, pointer: Vector2): LocationInfo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>返回类型为 LocationInfo，类型定义如下：</p><ul><li>distance —— 射线投射原点和相交部分之间的距离。</li><li>point —— 相交部分的点（世界坐标）</li><li>face —— 相交的面</li><li>faceIndex —— 相交的面的索引</li><li>object —— 相交的物体</li><li>uv —— 相交部分的点的 UV 坐标。</li><li>uv1 —— 相交部分的点的第二组 UV 坐标</li><li>normal - 交点处的内插法向量</li><li>instanceId – 与 InstancedMesh 物体相交时的 instance 索引</li><li><mark> location: Verctor3 —— 经纬度信息（经度、纬度、高度[米]）</mark></li></ul><p>最后一项 location 即为经纬度海拔高度信息，其中 x 为经度、y 为纬度、z 为海拔高度(m)。</p><h2 id="_2-根据经纬度取得地面信息" tabindex="-1">2. 根据经纬度取得地面信息 <a class="header-anchor" href="#_2-根据经纬度取得地面信息" aria-label="Permalink to &quot;2. 根据经纬度取得地面信息&quot;">​</a></h2><p>类似的，TileMap.getLocalInfoFromGeo()根据经纬度取得地面信息：</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Get the ground infomation from latitude and longitude</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 获取指定经纬度的地面信息（法向量、高度等）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> geo</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 地理坐标</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 地面信息</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLocalInfoFromGeo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(geo: Vector3): LocationInfo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_3-根据海拔高度取得地面信息" tabindex="-1">3. 根据海拔高度取得地面信息 <a class="header-anchor" href="#_3-根据海拔高度取得地面信息" aria-label="Permalink to &quot;3. 根据海拔高度取得地面信息&quot;">​</a></h2><p>同样，TileMap.getLocalInfoFromWorld()根据世界坐标取得地面信息：</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Get loacation infomation from world position</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 获取指定世界坐标的地面信息</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pos</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 世界坐标</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 地面信息</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLocalInfoFromWorld</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pos: Vector3): LocationInfo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_4-应用场景" tabindex="-1">4. 应用场景 <a class="header-anchor" href="#_4-应用场景" aria-label="Permalink to &quot;4. 应用场景&quot;">​</a></h2><ul><li>实时显示鼠标处的经纬度、海拔高度、世界坐标、法向量（可以计算坡向）等</li><li>取得指定经纬度的海拔高度、世界坐标、法向量等</li><li>取得指定世界坐标处的经纬度和海拔高度等</li><li>鼠标点击放置模型到地面</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这几个函数是通过计算射线与地形交点取得，所以需要等地形瓦片加载完毕后才能取得，否则会返回空值。</p></div>`,18))])}}});export{f as __pageData,w as default};
