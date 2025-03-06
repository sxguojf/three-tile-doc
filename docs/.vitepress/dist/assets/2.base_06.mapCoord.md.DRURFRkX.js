import{p as a,C as l,c as p,o,a0 as h,a2 as d,G as n,j as s,a3 as k,k as r,w as c,a as m}from"./chunks/framework.C-aSrekC.js";import{d as E,f as g}from"./chunks/index.CS2ASXZU.js";const b=`<!DOCTYPE html>\r
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
        "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/",\r
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
      import {\r
        CSS2DObject,\r
        CSS2DRenderer,\r
      } from "three/addons/renderers/CSS2DRenderer.js";\r
\r
      console.log(\`three-tile v\${tt.version} start!\`);\r
\r
      //=====================================================================================\r
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
      // 初始化场景\r
      const viewer = new tt.plugin.GLViewer("#map");\r
      // 地图添加到场景\r
      viewer.scene.add(map);\r
\r
      //=====================================================================================\r
      // 地图中心经纬度高度（km）转为世界坐标\r
      const centerPostion = map.geo2world(new THREE.Vector3(100, 35, 0));\r
      // 摄像机经纬度高度（km）转为世界坐标\r
      const cameraPosition = map.geo2world(new THREE.Vector3(100, 10, 5000));\r
      viewer.flyTo(centerPostion, cameraPosition);\r
\r
      //=====================================================================================\r
      // 添加标签容器\r
      const labelRenderer = new CSS2DRenderer();\r
      labelRenderer.setSize(\r
        viewer.container.clientWidth,\r
        viewer.container.clientHeight\r
      );\r
      labelRenderer.domElement.style.position = "absolute";\r
      labelRenderer.domElement.style.top = "0px";\r
      labelRenderer.domElement.style.color = "white";\r
      viewer.container.appendChild(labelRenderer.domElement);\r
\r
      viewer.addEventListener("update", () => {\r
        labelRenderer.render(viewer.scene, viewer.camera);\r
      });\r
\r
      window.addEventListener("resize", () =>\r
        labelRenderer.setSize(\r
          viewer.container.clientWidth,\r
          viewer.container.clientHeight\r
        )\r
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
            const pos = map.geo2pos(new THREE.Vector3(x, y));\r
            const arrow = new THREE.ArrowHelper(\r
              dir,\r
              new THREE.Vector3(pos.x, pos.y, -1),\r
              50\r
            );\r
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
            const lonlat = map.pos2geo(\r
              new THREE.Vector3(obj.position.x, obj.position.y)\r
            );\r
            label.innerHTML = \`\${lonlat.x.toFixed(0)},\${lonlat.y.toFixed(0)}\`;\r
            label.title = "提示信息： " + label.innerHTML;\r
\r
            // 创建css2dObj加入场景\r
            const css = new CSS2DObject(label);\r
            css.position.copy(\r
              obj.position.clone().add(new THREE.Vector3(0, 0, 10))\r
            );\r
            labelGroup.add(css);\r
          }\r
        });\r
      })();\r
    <\/script>\r
  </body>\r
</html>\r
`,F=JSON.parse('{"title":"坐标转换","description":"","frontmatter":{},"headers":[],"relativePath":"2.base/06.mapCoord.md","filePath":"2.base/06.mapCoord.md","lastUpdated":1741063516000}'),u={name:"2.base/06.mapCoord.md"},f=Object.assign(u,{setup(y){const t=a(!0);return(C,e)=>{const i=l("ClientOnly");return o(),p("div",null,[e[1]||(e[1]=h(`<h1 id="坐标转换" tabindex="-1">坐标转换 <a class="header-anchor" href="#坐标转换" aria-label="Permalink to &quot;坐标转换&quot;">​</a></h1><p>三维可视化，玩的就是坐标转换和矩阵变换，熟悉坐标系非常重要。three-tile 中包含地理坐标系、世界坐标系、模型坐标系、屏幕坐标系等。上节调整摄像机位置就是用到了经纬度到世界坐标系的转换。</p><p>拿到一个坐标，必须要清楚它是基于哪个坐标系的，比如拿到经纬度，我们知道它是以地球中心为原点的。</p><h2 id="_1-坐标系介绍" tabindex="-1">1. 坐标系介绍 <a class="header-anchor" href="#_1-坐标系介绍" aria-label="Permalink to &quot;1. 坐标系介绍&quot;">​</a></h2><ul><li><p>地理坐标系</p><p>地理坐标一般指经纬度海拔高度，或投影坐标等。经纬度海拔作为坐标更加直观，但三维场景中并不能直接使用它，需要将它转换为三维世界坐标或模型坐标才能使用。</p></li><li><p>世界坐标系</p><p>世界坐标是 WebGL（OpenGL）中的概念，一般采用右手坐标系，原点为世界中心，这个坐标是全局唯一的，也叫全局坐标系。threejs 的世界坐标 X 指向右，y 轴指向上，z 轴指向屏幕外。</p></li><li><p>模型坐标系</p><p>另一种坐标是模型坐标，也叫局地坐标系，一般是指相对于模型中心的坐标。</p></li><li><p>屏幕坐标系</p><p>屏幕坐标系是二维坐标，这个容易理解，但在三维场景中，坐标原点在屏幕左下角，y 轴向上。</p></li><li><p>three-tile 地图模型坐标</p><p>右手坐标系，默认情况 y 轴是指向上的，可以看做指向天顶，z 轴指向右，也就是东。为符合人类习惯，three-tile 定义 x 轴指向东，y 轴指向北，z 轴指向天顶，所以将地图模型加入场景时，可以看到一行代码：</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rotateX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Math.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul><p>这句代码就是将地图旋转到世界坐标系的 xz 平面。</p><h2 id="_2-坐标转换" tabindex="-1">2. 坐标转换 <a class="header-anchor" href="#_2-坐标转换" aria-label="Permalink to &quot;2. 坐标转换&quot;">​</a></h2><p>threejs 提供了世界坐标、模型坐标、屏幕坐标之间的转换方法，three-tile 增加了一些方法用于地理坐标与这些坐标之间的转换。</p><table tabindex="0"><thead><tr><th>名称</th><th>参数</th><th>返回</th><th>功能</th></tr></thead><tbody><tr><td>geo2pos(geo: Vector3)</td><td>geo: 地理坐标（经纬度）</td><td>Vector3：地图模型局地坐标</td><td>地理坐标转地图模型坐标</td></tr><tr><td>pos2geo(pos: Vector3)</td><td>pos: 地图模型坐标</td><td>Vector3：地理坐标（经度、纬度、高度）</td><td>地图模型坐标转地理坐标</td></tr><tr><td>geo2world(geo:Vector3)</td><td>geo: 地理坐标（经纬度）</td><td>Vector3：世界坐标坐标</td><td>地理坐标转世界坐标</td></tr><tr><td>world2geo(world:Vector)</td><td>world:世界坐标</td><td>Vector3：地理坐标（经度、纬度、高度）</td><td>世界坐标转地理坐标</td></tr></tbody></table><p>前面移动摄像机到指定经纬度，就是使用了 geo2world 方法:</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 地图中心经纬度高度（km）转为世界坐标</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> centerPostion</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">geo2world</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Vector3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">110</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">35</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 摄像机经纬度高度（km）转为世界坐标</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cameraPosition</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">geo2world</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Vector3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">116.39199596764485</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">39.91047669278009</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>还有模型坐标到与世界坐标的转换、屏幕坐标与世界坐标的转换等，这些事 threejs 的方法，这里就不啰嗦了。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>three-tile 的坐标单位使用了千米，这个与其它 GIS 系统不一致，其实用什么单位不重要，但因与大家的习惯不一致，需要注意一下。如果大家确实觉得不方面，后面考虑换为米。</p></div><h2 id="_3-坐标转换示例" tabindex="-1">3. 坐标转换示例 <a class="header-anchor" href="#_3-坐标转换示例" aria-label="Permalink to &quot;3. 坐标转换示例&quot;">​</a></h2><p>一个在地图上标注位置的示例：</p>`,15)),d(n(r(E),null,null,512),[[k,t.value]]),n(i,null,{default:c(()=>[n(r(g),{title:"坐标转换",description:"地图上指定位置添加标签",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",visible:!0,onMount:e[0]||(e[0]=()=>{t.value=!1}),htmlCode:r(b)},null,8,["htmlCode"])]),_:1}),e[2]||(e[2]=s("p",null,[m("上面的代码使用 threejs 的 CSS2DRenderer 类添加标签到地图上： "),s("a",{href:"https://threejs.org/docs/index.html?q=css#examples/zh/renderers/CSS2DRenderer",target:"_blank",rel:"noreferrer"},"https://threejs.org/docs/index.html?q=css#examples/zh/renderers/CSS2DRenderer")],-1)),e[3]||(e[3]=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,"CSS2DRenderer 是通过通过添加 DOM 标签到场景中实现的，使用比较简单，但如果添加的标签太多会影响速度，更好效果可以使用 sprite 或 canvas 等方式。只要理解了坐标转换，实现方式都一样。")],-1))])}}});export{F as __pageData,f as default};
