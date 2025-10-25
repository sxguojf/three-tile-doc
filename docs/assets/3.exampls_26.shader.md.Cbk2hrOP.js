import{p as o,C as e,c as h,o as d,j as r,a4 as c,G as s,a2 as k,a as l,a5 as m,k as a,w as g}from"./chunks/framework.BZ48x_LH.js";import{R as u,k as E}from"./chunks/index.DCj37L2o.js";const b=`<!DOCTYPE html>\r
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
`,y={id:"自定义瓦片着色器",tabindex:"-1"},w=JSON.parse('{"title":"自定义瓦片着色器","description":"","frontmatter":{},"headers":[],"relativePath":"3.exampls/26.shader.md","filePath":"3.exampls/26.shader.md","lastUpdated":1761368239000}'),F={name:"3.exampls/26.shader.md"},B=Object.assign(F,{setup(v){const i=o(!0);return(f,n)=>{const t=e("Badge"),p=e("ClientOnly");return d(),h("div",null,[r("h1",y,[n[1]||(n[1]=l("自定义瓦片着色器")),s(t,{type:"tip",text:"≥0.11.4"}),n[2]||(n[2]=l()),n[3]||(n[3]=r("a",{class:"header-anchor",href:"#自定义瓦片着色器","aria-label":'Permalink to "自定义瓦片着色器<Badge type="tip" text="≥0.11.4" />"'},"​",-1))]),c(s(a(u),null,null,512),[[m,i.value]]),s(p,null,{default:g(()=>[s(a(E),{title:"example",description:"点击右上角按钮，切换着色器",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Atrue%7D",codesandbox:"%7B%22show%22%3Atrue%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",visible:!0,onMount:n[0]||(n[0]=()=>{i.value=!1}),htmlCode:a(b)},null,8,["htmlCode"])]),_:1}),n[4]||(n[4]=k(`<p>three-tile 地图瓦片默认使用<code>MeshStandardMaterial</code>材质，可以使用自定义材质实现地图特效。</p><h2 id="_1-步骤" tabindex="-1">1. 步骤 <a class="header-anchor" href="#_1-步骤" aria-label="Permalink to &quot;1. 步骤&quot;">​</a></h2><p>内置的影像加载器<code>TileMaterialLoader</code>（包括其子类）有一个<code>material</code>属性，所有瓦片材质均从该材质 <code>clone()</code> 得来，修改此<code>material</code>不仅可以改变瓦片默认材质，还可以使用自定义着色器替换材质，利用着色器实现各种特效。自定义瓦片着色器步骤如下：</p><ol><li>编写自定义着色器材质</li><li>获取加载器实例</li><li>修改加载器的<code>material</code>属性</li></ol><h2 id="_2-代码" tabindex="-1">2. 代码 <a class="header-anchor" href="#_2-代码" aria-label="Permalink to &quot;2. 代码&quot;">​</a></h2><ol><li>写一个简单的着色器，将地图反色、降低饱和度，并与原地图色混合：</li></ol><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 定义着色器</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Filter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> THREE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MeshBasicMaterial</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">params</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    super</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onBeforeCompile</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">shader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 修改片段着色器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      shader.fragmentShader </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> shader.fragmentShader.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;#include &lt;dithering_fragment&gt;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        \`</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        #include &lt;dithering_fragment&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        vec4 texel = texture2D( map, vMapUv );                </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        vec3 inverted = 1.0 - texel.rgb; </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        float luminance = dot(inverted, vec3(0.299, 0.587, 0.114));</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        vec3 grayscale = vec3(luminance);                            </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        vec3 finalColor = mix(grayscale, inverted, 0.6) * diffuse * 2.0;                            </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        gl_FragColor =  vec4( finalColor, opacity * texel.a );</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        \`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ol start="2"><li>使用自定义着色器</li></ol><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 修改影像加载器的材质</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> loader</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getImgLoader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;image&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">loader.material </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ color: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0xaaccff</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">map.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reload</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>每块瓦片的材质均是从该着色器 <code>clone</code> 而来，各个材质没有关联，所以运行时修改该着色器的属性如颜色，已有瓦片并不会实时响应。如果要实现实时调整颜色等属性的功能，有两种方案：</p><ol><li>修改属性时，遍历所有瓦片修改每个瓦片的材质属性，效率略低。使用 threejs 内置材质时建议使用该方法。</li><li>重写材质的<code>copy</code>函数，<code>clone</code> 时，将材质的 uniform 以引用方式传递而不是复制，让所有瓦片的材质的 uniform 指向同一个对象。使用自定义着色器时建议使用该方法。</li></ol></div>`,10))])}}});export{w as __pageData,B as default};
