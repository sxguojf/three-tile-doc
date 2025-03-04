import{p as t,C as p,c as r,o as h,a0 as e,a2 as k,G as i,a3 as d,k as a,w as o}from"./chunks/framework.C-aSrekC.js";import{d as c,f as E}from"./chunks/index.CS2ASXZU.js";const m="/three-tile-doc/assets/image.C5CMJ9vT.png",g=`<!DOCTYPE html>\r
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
      background-color: #333;\r
      height: 400px;\r
      width: 100%;\r
      padding: 0;\r
      margin: 0;\r
      display: flex;\r
      overflow: hidden;\r
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
      // 地图中心经纬度高度（km）转为世界坐标\r
      const centerPostion = map.geo2world(\r
        new THREE.Vector3(116.39180280130437, 39.915285657622775, 0)\r
      );\r
      // 摄像机经纬度高度（km）转为世界坐标\r
      const cameraPosition = map.geo2world(\r
        new THREE.Vector3(116.39199596764485, 39.91047669278009, 0.9)\r
      );\r
      viewer.flyTo(centerPostion, cameraPosition);\r
    <\/script>\r
  </body>\r
</html>\r
`,C=JSON.parse('{"title":"TileMap 创建","description":"","frontmatter":{},"headers":[],"relativePath":"2.base/02.mapCreate.md","filePath":"2.base/02.mapCreate.md","lastUpdated":1741063516000}'),u={name:"2.base/02.mapCreate.md"},v=Object.assign(u,{setup(y){const n=t(!0);return(b,s)=>{const l=p("ClientOnly");return h(),r("div",null,[s[1]||(s[1]=e(`<h1 id="tilemap-创建" tabindex="-1">TileMap 创建 <a class="header-anchor" href="#tilemap-创建" aria-label="Permalink to &quot;TileMap 创建&quot;">​</a></h1><p>瓦片地图类 TileMap 是地图的重点，它继承于 threejs 的 Mesh 类，对地图的绝大数操作均可通过对 TileMap 类完成。</p><h2 id="_1-地图创建参数" tabindex="-1">1. 地图创建参数 <a class="header-anchor" href="#_1-地图创建参数" aria-label="Permalink to &quot;1. 地图创建参数&quot;">​</a></h2><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MapParams</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  imgSource</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ISource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ISource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//影像数据源</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  demSource</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ISource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//高程数据源，默认undefined</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  minLevel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//最小缩放级别，默认0</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  maxLevel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//最大缩放级别，默认19</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  lon0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ProjectCenterLongitude</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//地图投影中央经线经度，默认0</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  loader</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ITileLoader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//地图加载器，默认加载器</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  rootTile</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RootTile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//根瓦片</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><table tabindex="0"><thead><tr><th>名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>imgSource</td><td>ISource[] | ISource</td><td>必选参数，默认为[]，用来指定地图瓦片的影像数据源，如果有多层影像数据可传入影像源数组，多层影像将以叠加混合方式显示。数据源的类型为 ISource，three-tile 已内置主流瓦片数据源，可直接创建使用。</td></tr><tr><td>demSource</td><td>ISource</td><td>可选参数，默认为 undefined，用来指定地图瓦片地形数据源，如果为空，地图将不显示地形，与影像数据源一样，可使用内置的地形数据源。</td></tr><tr><td>minLevel</td><td>number</td><td>可选参数，地图瓦片的最小缩放级别，默认为 2，当瓦片缩放级别小于它时地图瓦片将不再合并。</td></tr><tr><td>maxLevel</td><td>number</td><td>可选参数，地图瓦片的最最大放级别，默认为 19，当瓦片缩放级别小于它时地图瓦片将不再细分。</td></tr><tr><td>lon0</td><td>ProjectCenterLongitude</td><td>可选参数，地图投影中央经线经度，默认为 0，它用来指定投影的中央经线的经度，注意它并不是用来指定地图中心位置的。</td></tr><tr><td>loader</td><td>ITileLoader</td><td>可选参数，地图数据加载器，默认为内置的 TileLoader 类实例，用来指定用哪个加载器加载数据生成瓦片模型和材质，高级开发者可通过自定义 loader 实现自定义数据加载、瓦片模型创建过程。</td></tr><tr><td>rootTile</td><td>RootTile</td><td>可选参数，地图根瓦片，默认为 0 级瓦片，用来指定从哪个开始创建瓦片树，不需要手工传入。</td></tr></tbody></table><ul><li><h3 id="imgsource-demsource" tabindex="-1">imgSource/demSource <a class="header-anchor" href="#imgsource-demsource" aria-label="Permalink to &quot;imgSource/demSource&quot;">​</a></h3> 用来指定使用谁家的瓦片地图服务的额，先不要管它，后面会专门讲，包括自定义数据源。</li><li><h3 id="lon0" tabindex="-1">lon0 <a class="header-anchor" href="#lon0" aria-label="Permalink to &quot;lon0&quot;">​</a></h3> 用来指定地图投影的中央子午线，默认为 0°，要把中国放中间，那就设为 90，美国为中心设-90，欧洲为中心设 0。当 lon0 不为 0 时，minLevel 属性 必须&gt;1。</li><li><h3 id="minlevel" tabindex="-1">minLevel <a class="header-anchor" href="#minlevel" aria-label="Permalink to &quot;minLevel&quot;">​</a></h3> 指定从哪个级别开始加载瓦片，推荐 2 级。内部实际上是小于这个级别瓦片数不再合并，真正控制是否加载是根据瓦片数据源的 minLevel 属性，0-1 级瓦片太小没必要加载。</li><li><h3 id="maxlevel" tabindex="-1">maxLevel <a class="header-anchor" href="#maxlevel" aria-label="Permalink to &quot;maxLevel&quot;">​</a></h3> 指定到哪个级别开始不再加载瓦片，推荐 19 级。内部实际上是从这个级别开始瓦片树不再细分,，真正控制是否加载是根据瓦片数据源的 maxLevel 属性，一般地图服务商瓦片最大到 18 级。</li><li><h3 id="loader" tabindex="-1">loader <a class="header-anchor" href="#loader" aria-label="Permalink to &quot;loader&quot;">​</a></h3> 指定瓦片使用的加载器，一般默认值即可，除非你想自己重写瓦片加载过程。</li><li><h3 id="roottile" tabindex="-1">rootTile <a class="header-anchor" href="#roottile" aria-label="Permalink to &quot;rootTile&quot;">​</a></h3> 指定根瓦片，默认值即可。</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>TileMap 和数据源 TileSource 都要的 minLevel 和 maxLevel 属性，但它们的意义并不相同，TileMap 的用来控制瓦片树的细分和合并，数据源的用来控制瓦片的加载，两者也不一定要一致。</p></div><p>示例：</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建地图</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> map</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tt.TileMap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 影像数据源</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  imgSource: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tt.plugin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ArcGisSource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 地形数据源</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  demSource: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tt.plugin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ArcGisDemSource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 最小缩放级别</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  minLevel: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 最大缩放级别</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  maxLevel: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 投影中央经线经度，默认0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  lon0: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">90</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>TileMap.create 方法是静态方法，用来创建地图实例，也可以通过 new TileMap() 创建实例，效果一样，之所以增加 create 函数，是因为一些同学不喜欢面向对象语法。</p></div><h2 id="_2-修改地图启动时的中心坐标" tabindex="-1">2. 修改地图启动时的中心坐标 <a class="header-anchor" href="#_2-修改地图启动时的中心坐标" aria-label="Permalink to &quot;2. 修改地图启动时的中心坐标&quot;">​</a></h2><p>大多数时候，我们希望地图启动时能直接定位在某个位置，比如以北京为中心，以方位角为 180°，斜 45° 看向故宫。</p><p>与二维地图不同，三维场景并不能通过指定中心经纬度和缩放级别对地图进行定位，需要指定摄像机位置已经摄像机朝向来解决。大部分三维地图采用修改摄像机的 yaw、pitch、roll 来完成，但这个概念并不直观，你完全估计不出你需要站在高空哪个经纬度高度，以哪个角度看向地球：</p><p><img src="`+m+'" alt="alt text"></p><p>three-tile 通过设置两个坐标来调整摄像机姿态，一个是摄像机位置坐标，一个是地图中心坐标，即你站在摄像机位置，看向地图中心。</p>',15)),k(i(a(c),null,null,512),[[d,n.value]]),i(l,null,{default:o(()=>[i(a(E),{title:"最小化演示",description:"移动摄像机到故宫上空",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:s[0]||(s[0]=()=>{n.value=!1}),htmlCode:a(g)},null,8,["htmlCode"])]),_:1}),s[2]||(s[2]=e(`<div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 地图中心经纬度高度（km）转为世界坐标</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> centerPostion</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">geo2world</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Vector3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">116.39180280130437</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">39.915285657622775</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 摄像机经纬度高度（km）转为世界坐标</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cameraPosition</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">geo2world</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Vector3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">116.39199596764485</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">39.91047669278009</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 调整摄像机位置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">viewer.camera.position.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">copy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cameraPosition);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 调整地图中心位置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">viewer.controls.target.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">copy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(centerPostion);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>地图数据下载需要一定时间，可以通过定时器或用 <code>tween</code> 动态调整摄像机位置，提升用户体验。</li><li>坐标转换后面有一节专门会讲，这里你只需要知道，通过 <code>map.geo2world</code> 方法可以将经纬度转换为三维场景坐标。</li></ul></div>`,2))])}}});export{C as __pageData,v as default};
