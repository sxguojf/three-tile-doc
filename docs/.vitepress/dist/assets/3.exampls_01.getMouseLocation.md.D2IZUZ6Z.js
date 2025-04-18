import{p as t,C as p,c as h,o as r,j as e,a2 as k,G as i,a0 as d,a as o,a3 as c,k as a,w as E}from"./chunks/framework.C-aSrekC.js";import{d as g,f as y}from"./chunks/index.CS2ASXZU.js";const m=`<!DOCTYPE html>\r
<html lang="zh-cn">\r
  <head>\r
    <meta charset="utf-8" />\r
    <meta\r
      name="viewport"\r
      content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"\r
    />\r
    <title>three-tile最小化应用</title>\r
  </head>\r
  <style>\r
    html,\r
    body {\r
      color: white;\r
      background-color: #333;\r
      height: 400px;\r
      width: 100%;\r
      padding: 0;\r
      margin: 0;\r
      display: flex;\r
      overflow: hidden;\r
      flex-direction: column;\r
      text-align: center;\r
    }\r
    #map {\r
      flex: 1;\r
    }\r
  </style>\r
\r
  <script type="importmap">\r
    {\r
      "imports": {\r
        "three": "https://unpkg.com/three@0.165.0/build/three.module.js",\r
        "three-tile": "https://unpkg.com/three-tile@0.8.6/dist/three-tile.js"\r
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
\r
      console.log(\`three-tile v\${tt.version} start!\`);\r
\r
      // 创建地图\r
      const map = tt.TileMap.create({\r
        // 影像数据源\r
        imgSource: new tt.plugin.ArcGisSource(),\r
        // 地形数据源\r
        demSource: new tt.plugin.ArcGisDemSource(),\r
        lon0: 90,\r
      });\r
      // 地图旋转到xz平面\r
      map.rotateX(-Math.PI / 2);\r
\r
      // 初始化场景\r
      const viewer = new tt.plugin.GLViewer("#map");\r
\r
      // 地图添加到场景\r
      viewer.scene.add(map);\r
\r
      //==============================================================\r
      // 地图中心经纬度高度（km）转为世界坐标\r
      const centerPostion = map.geo2world(\r
        new THREE.Vector3(116.39180280130437, 39.915285657622775, 0)\r
      );\r
      // 摄像机经纬度高度（km）转为世界坐标\r
      const cameraPosition = map.geo2world(\r
        new THREE.Vector3(116.39199596764485, 39.91047669278009, 0.9)\r
      );\r
      viewer.flyTo(centerPostion, cameraPosition);\r
\r
      //==============================================================\r
      function showLocation(viewer, map, id) {\r
        const pointer = new THREE.Vector2();\r
        viewer.container.addEventListener("pointermove", (evt) => {\r
          // 计算屏幕坐标（-0.5到+0.5范围）\r
          pointer.x =\r
            (evt.clientX / viewer.renderer.domElement.clientWidth) * 2 - 1;\r
          pointer.y =\r
            -(evt.clientY / viewer.renderer.domElement.clientHeight) * 2 + 1;\r
          // 取得该坐标的信息\r
          const info = map.getLocalInfoFromScreen(viewer.camera, pointer);\r
          if (info) {\r
            const el = document.querySelector(id);\r
            el.innerHTML = \`经度:\${info.location.x.toFixed(\r
              6\r
            )}° 纬度:\${info.location.y.toFixed(\r
              6\r
            )}° 海拔:\${info.location.z.toFixed(6)}km\`;\r
          }\r
        });\r
      }\r
      showLocation(viewer, map, "#local-info");\r
    <\/script>\r
  </body>\r
</html>\r
`,C=JSON.parse('{"title":"取得鼠标处经纬度海拔高度","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/01.getMouseLocation.md","filePath":"3.exampls/01.getMouseLocation.md","lastUpdated":1741063516000}'),F={name:"3.exampls/01.getMouseLocation.md"},v=Object.assign(F,{setup(u){const n=t(!0);return(b,s)=>{const l=p("ClientOnly");return r(),h("div",null,[s[1]||(s[1]=e("h1",{id:"取得鼠标处经纬度海拔高度",tabindex:"-1"},[o("取得鼠标处经纬度海拔高度 "),e("a",{class:"header-anchor",href:"#取得鼠标处经纬度海拔高度","aria-label":'Permalink to "取得鼠标处经纬度海拔高度"'},"​")],-1)),k(i(a(g),null,null,512),[[c,n.value]]),i(l,null,{default:E(()=>[i(a(y),{title:"Example",description:"地图下方状态栏显示鼠标所指经纬度、海拔高度信息",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{n.value=!1}),htmlCode:a(m)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=d(`<h2 id="_1-根据屏幕坐标取得地面信息" tabindex="-1">1. 根据屏幕坐标取得地面信息 <a class="header-anchor" href="#_1-根据屏幕坐标取得地面信息" aria-label="Permalink to &quot;1. 根据屏幕坐标取得地面信息&quot;">​</a></h2><p>通过 TileMap.getLocalInfoFromScreen()屏幕坐标处的地图经纬度以及海拔高度，鼠标在地图上移动时，取得屏幕坐标再调用它取得地面信息。函数的定义如下：</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 获取指定屏幕坐标的地面信息</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> camera</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 摄像机</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pointer</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 点的屏幕坐标（-0.5~0.5）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 位置信息（经纬度、高度等）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLocalInfoFromScreen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(camera: Camera, pointer: Vector2): LocationInfo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>返回类型为 LocationInfo，类型定义如下：</p><ul><li>distance —— 射线投射原点和相交部分之间的距离。</li><li>point —— 相交部分的点（世界坐标）</li><li>face —— 相交的面</li><li>faceIndex —— 相交的面的索引</li><li>object —— 相交的物体</li><li>uv —— 相交部分的点的 UV 坐标。</li><li>uv1 —— 相交部分的点的第二组 UV 坐标</li><li>normal - 交点处的内插法向量</li><li>instanceId – 与 InstancedMesh 物体相交时的 instance 索引</li><li><mark> location: Verctor3 —— 经纬度信息（经度、纬度、高度）</mark></li></ul><p>最后一项 location 即为经纬度海拔高度信息，其中 x 为经度、y 为纬度、z 为海拔高度(KM)。</p><p>主要代码代码：</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 显示地理位置信息</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> showLocation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">viewer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pointer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Vector2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  viewer.container.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pointermove&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">evt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 计算屏幕坐标（-0.5到+0.5范围）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pointer.x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (evt.clientX </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> viewer.renderer.domElement.clientWidth) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    pointer.y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(evt.clientY </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> viewer.renderer.domElement.clientHeight) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 取得该坐标的信息</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> info</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLocalInfoFromScreen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(viewer.camera, pointer);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (info) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> el</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(id);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      el.innerHTML </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`经度:\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toFixed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        6</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      )</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}° 纬度:\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toFixed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}° 海拔:\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">info</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">z</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toFixed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        6</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      )</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}km\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">showLocation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(viewer, map, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#local-info&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="_2-根据经纬度取得地面信息" tabindex="-1">2. 根据经纬度取得地面信息 <a class="header-anchor" href="#_2-根据经纬度取得地面信息" aria-label="Permalink to &quot;2. 根据经纬度取得地面信息&quot;">​</a></h2><p>类似的，TileMap.getLocalInfoFromGeo()根据经纬度取得地面信息：</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /**</span></span>
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
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getLocalInfoFromWorld</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pos: Vector3): LocationInfo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_4-应用场景" tabindex="-1">4. 应用场景 <a class="header-anchor" href="#_4-应用场景" aria-label="Permalink to &quot;4. 应用场景&quot;">​</a></h2><ul><li>实时显示鼠标处的经纬度、海拔高度、世界坐标、法向量（可以计算坡向）等</li><li>取得指定经纬度的海拔高度、世界坐标、法向量等</li><li>取得指定世界坐标处的经纬度和海拔高度等</li><li>鼠标点击放置模型到地面</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这几个函数是通过射线法计算射线与瓦片交点取得，所以需要等瓦片加载完毕后才能计算，否则会返回空值。</p></div>`,17))])}}});export{C as __pageData,v as default};
