var Z=Object.defineProperty;var Q=(o,e,i)=>e in o?Z(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var z=(o,e,i)=>Q(o,typeof e!="symbol"?e+"":e,i);import{b as C,V as x,S as q,B as ee,U as te,o as ie,R as H,M as ne,aD as re,al as oe,ar as O,aB as se,aH as ae,aI as le,aJ as ce,aK as de,aL as he,aM as ue,aN as pe,ai as ge,aj as me,ak as ve,c as V}from"./index.B-YquQ_z.js";import{a as fe,b as be,u as ye}from"./style.CCtHUzaI.js";import{u as Ae}from"./useState.EiXjSKHF.js";import{d as we,p as T,v as _e,x as xe,c as Ce,o as Ee,j as m,t as M,k as D,_ as Se}from"./framework.xbTv8SNN.js";/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class w{constructor(e,i,n,s,u="div"){this.parent=e,this.object=i,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),w.nextNameID=w.nextNameID||0,this.$name.id="lil-gui-name-"+ ++w.nextNameID,this.$widget=document.createElement(u),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const i=this.parent.add(this.object,this.property,e);return i.name(this._name),this.destroy(),i}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class ke extends w{constructor(e,i,n){super(e,i,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function P(o){let e,i;return(e=o.match(/(#|0x)?([a-f0-9]{6})/i))?i=e[2]:(e=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!i&&"#"+i}const $e={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:P,toHexString:P},$={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},Le={isPrimitive:!1,match:Array.isArray,fromHexString(o,e,i=1){const n=$.fromHexString(o);e[0]=(n>>16&255)/255*i,e[1]=(n>>8&255)/255*i,e[2]=(255&n)/255*i},toHexString:([o,e,i],n=1)=>$.toHexString(o*(n=255/n)<<16^e*n<<8^i*n<<0)},Te={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,e,i=1){const n=$.fromHexString(o);e.r=(n>>16&255)/255*i,e.g=(n>>8&255)/255*i,e.b=(255&n)/255*i},toHexString:({r:o,g:e,b:i},n=1)=>$.toHexString(o*(n=255/n)<<16^e*n<<8^i*n<<0)},Me=[$e,$,Le,Te];class De extends w{constructor(e,i,n,s){var u;super(e,i,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(u=this.initialValue,Me.find(a=>a.match(u))),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const a=P(this.$text.value);a&&this._setValueFromHexString(a)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const i=this._format.fromHexString(e);this.setValue(i)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class F extends w{constructor(e,i,n){super(e,i,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Fe extends w{constructor(e,i,n,s,u,a){super(e,i,n,"number"),this._initInput(),this.min(s),this.max(u);const r=a!==void 0;this.step(r?a:this._getImplicitStep(),r),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,i=!0){return this._step=e,this._stepExplicit=i,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let i=(e-this._min)/(this._max-this._min);i=Math.max(0,Math.min(i,1)),this.$fill.style.width=100*i+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=c=>{const A=parseFloat(this.$input.value);isNaN(A)||(this._snapClampSetValue(A+c),this.$input.value=this.getValue())};let i,n,s,u,a,r=!1;const g=c=>{if(r){const A=c.clientX-i,p=c.clientY-n;Math.abs(p)>5?(c.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(A)>5&&v()}if(!r){const A=c.clientY-s;a-=A*this._step*this._arrowKeyMultiplier(c),u+a>this._max?a=this._max-u:u+a<this._min&&(a=this._min-u),this._snapClampSetValue(u+a)}s=c.clientY},v=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",v)};this.$input.addEventListener("input",()=>{let c=parseFloat(this.$input.value);isNaN(c)||(this._stepExplicit&&(c=this._snap(c)),this.setValue(this._clamp(c)))}),this.$input.addEventListener("keydown",c=>{c.code==="Enter"&&this.$input.blur(),c.code==="ArrowUp"&&(c.preventDefault(),e(this._step*this._arrowKeyMultiplier(c))),c.code==="ArrowDown"&&(c.preventDefault(),e(this._step*this._arrowKeyMultiplier(c)*-1))}),this.$input.addEventListener("wheel",c=>{this._inputFocused&&(c.preventDefault(),e(this._step*this._normalizeMouseWheel(c)))},{passive:!1}),this.$input.addEventListener("mousedown",c=>{i=c.clientX,n=s=c.clientY,r=!0,u=this.getValue(),a=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",v)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=p=>{const _=this.$slider.getBoundingClientRect();let t=(E=p,b=_.left,l=_.right,S=this._min,L=this._max,(E-b)/(l-b)*(L-S)+S);var E,b,l,S,L;this._snapClampSetValue(t)},i=p=>{e(p.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",n)};let s,u,a=!1;const r=p=>{p.preventDefault(),this._setDraggingStyle(!0),e(p.touches[0].clientX),a=!1},g=p=>{if(a){const _=p.touches[0].clientX-s,t=p.touches[0].clientY-u;Math.abs(_)>Math.abs(t)?r(p):(window.removeEventListener("touchmove",g),window.removeEventListener("touchend",v))}else p.preventDefault(),e(p.touches[0].clientX)},v=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",g),window.removeEventListener("touchend",v)},c=this._callOnFinishChange.bind(this);let A;this.$slider.addEventListener("mousedown",p=>{this._setDraggingStyle(!0),e(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",p=>{p.touches.length>1||(this._hasScrollBar?(s=p.touches[0].clientX,u=p.touches[0].clientY,a=!0):r(p),window.addEventListener("touchmove",g,{passive:!1}),window.addEventListener("touchend",v))},{passive:!1}),this.$slider.addEventListener("wheel",p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const _=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+_),this.$input.value=this.getValue(),clearTimeout(A),A=setTimeout(c,400)},{passive:!1})}_setDraggingStyle(e,i="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+i,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:i,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(i=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),i+-n}_arrowKeyMultiplier(e){let i=this._stepExplicit?1:10;return e.shiftKey?i*=10:e.altKey&&(i/=10),i}_snap(e){const i=Math.round(e/this._step)*this._step;return parseFloat(i.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Re extends w{constructor(e,i,n,s){super(e,i,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(s)?s:Object.values(s),this._names=Array.isArray(s)?s:Object.keys(s),this._names.forEach(u=>{const a=document.createElement("option");a.innerHTML=u,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),i=this._values.indexOf(e);return this.$select.selectedIndex=i,this.$display.innerHTML=i===-1?e:this._names[i],this}}class Pe extends w{constructor(e,i,n){super(e,i,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let N=!1;class I{constructor({parent:e,autoPlace:i=e===void 0,container:n,width:s,title:u="Controls",injectStyles:a=!0,touchStyles:r=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",g=>{g.code!=="Enter"&&g.code!=="Space"||(g.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(u),r&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!N&&a&&(function(g){const v=document.createElement("style");v.innerHTML=g;const c=document.querySelector("head link[rel=stylesheet], head style");c?document.head.insertBefore(v,c):document.head.appendChild(v)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),N=!0),n?n.appendChild(this.domElement):i&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this.domElement.addEventListener("keydown",g=>g.stopPropagation()),this.domElement.addEventListener("keyup",g=>g.stopPropagation())}add(e,i,n,s,u){if(Object(n)===n)return new Re(this,e,i,n);const a=e[i];switch(typeof a){case"number":return new Fe(this,e,i,n,s,u);case"boolean":return new ke(this,e,i);case"string":return new Pe(this,e,i);case"function":return new F(this,e,i)}console.error(`gui.add failed
	property:`,i,`
	object:`,e,`
	value:`,a)}addColor(e,i,n=1){return new De(this,e,i,n)}addFolder(e){return new I({parent:this,title:e})}load(e,i=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof F||n._name in e.controllers&&n.load(e.controllers[n._name])}),i&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const i={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof F)){if(n._name in i.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);i.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in i.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);i.folders[n._title]=n.save()}),i}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const i=this.$children.clientHeight;this.$children.style.height=i+"px",this.domElement.classList.add("transition");const n=u=>{u.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(i=>{e=e.concat(i.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(i=>{e=e.concat(i.foldersRecursive())}),e}}const Ie=`precision highp float;\r
precision highp int;\r
precision highp sampler2D;\r
\r
// 太阳\r
// uniform vec3 sun_color;// 太阳颜色\r
uniform float sunAngularDiameter;// 太阳角直径,默认为0.505度\r
uniform float mieDirectionalG;// 米式散射因子-方向光高光\r
uniform float Exposure;// 色调映射曝光\r
\r
// 天空\r
// uniform float skyscale;\r
uniform float turbidity;// 浑浊度\r
uniform float skylineF;// 天际线\r
// uniform float rayleigh;// 瑞利散射\r
uniform float mieCoefficient;// 米氏因子（白）\r
uniform vec3 skyGlowColor;// 天空霞光颜色\r
uniform vec3 sunGlowColor;// 太阳霞光颜色\r
// uniform vec3 backSkyColor;// 背面天空颜色\r
uniform vec3 up;// 相机上方\r
\r
// 云朵\r
uniform sampler2D map;// 云噪声图\r
uniform float uTime;// 时间\r
uniform float weaken;// 采样衰减因子\r
uniform float THICKNESS;// 云厚度\r
uniform int N_LIGHT_STEPS;// 光照计算迭代次数\r
uniform float curve;// 坐标高度曲率\r
uniform float speed;// 风速\r
uniform vec3 wind;// 风向\r
uniform float coverage;// 覆盖率\r
uniform float ABSORPTION;// 云的光线吸收率\r
uniform float mult;//位置变换系数，控制局部变化翻滚\r
uniform int N_MARCH_STEPS;// 云厚度迭代次数\r
\r
// 雾\r
uniform float fogDensity;// 雾密度\r
uniform vec3 fogColor;// 雾颜色\r
\r
varying vec3 vWorldPosition;// 当前片元的坐标（已转换）\r
varying vec3 vSunDirection;// 太阳方向\r
varying float vSunfade;// 边缘褪色-影响阳光范围\r
varying vec3 vBetaR;// 瑞利散射\r
varying float vSunE;// 光强\r
\r
// 云--------------------------------------------------------------------------\r
const vec3 cameraPos = vec3(0.0, 0.0, 0.0);// 相机位置\r
const float pi = 3.141592653589793238462643383279502884197169;\r
const float TWO_PI = 6.28318530717958648;\r
\r
// 采集噪声值\r
float noise3D(vec3 p) {\r
    return texture(map, p.xz).x;\r
}\r
\r
// 3*3采样位置变换矩阵\r
const mat3 m = mat3(0.00, 0.80, 0.60, -0.80, 0.36, -0.48, -0.60, -0.48, 0.64);\r
\r
// 计算叠加噪声值（模拟分形布朗克运动）\r
float fbm(vec3 p) {\r
    float t = 0.;\r
    float a = pow(weaken, 0.01);// 初始系数\r
\r
    for(int i = 0; i < 6; i++) {\r
        t += a * noise3D(p);\r
        p = m * p * mult;\r
        a *= weaken;\r
    }\r
\r
    return t;\r
}\r
\r
// 分形布朗运动实现\r
float fbm1(vec3 p) {\r
    float t;\r
    float mult = 2.76434;  // 频率倍增因子\r
\r
    // 叠加不同频率和振幅的噪声\r
    t = 0.51749673 * noise3D(p);\r
    p = m * p * mult;\r
    t += 0.25584929 * noise3D(p);\r
    p = m * p * mult;\r
    t += 0.12527603 * noise3D(p);\r
    p = m * p * mult;\r
    t += 0.06255931 * noise3D(p);\r
\r
    return t;\r
}\r
\r
// 云密度（返回 pos 位置的云密度值）cov为密度阈值参数\r
float cloud_density(vec3 pos, float cov) {\r
    float dens = fbm(pos);// 修改\r
    return smoothstep(cov, 1., dens);// 阈值缩放\r
}\r
\r
// 云亮度计算\r
float cloud_light(vec3 pos, vec3 sundir_step, float cov) {\r
    float T = 1.0;// 透明度，transmitance\r
    float dens;// 密度\r
    float T_i;// 透射率\r
\r
    for(int i = 0; i < N_LIGHT_STEPS; i++) {\r
        dens = cloud_density(pos, cov);\r
        T_i = exp(-ABSORPTION * dens);\r
        T *= T_i;\r
        pos += sundir_step;\r
    }\r
    T = clamp(T, 0., 1.);\r
    return T;\r
}\r
\r
// 云渲染（根据天空（云）坐标和视角方向计算当前方向的云颜色值和透明度）\r
vec4 render_clouds(vec3 rayOrigin, vec3 rayDirection) {\r
    float march_step = (THICKNESS + .0002) / float(N_MARCH_STEPS);// 云迭代步长\r
    vec3 pos = rayOrigin + speed * vec3(uTime * wind.x, uTime * wind.y, uTime * wind.z);// 云初始位置\r
    vec3 dir_step = rayDirection * march_step;// 计算云迭代方向步长\r
\r
    vec3 light_step = normalize(vSunDirection - cameraPos) * march_step;// 光线迭代步长\r
\r
    float T = 1.0;// 云初始透明度\r
    vec3 C = vec3(0.0);// 云初始颜色\r
    float alpha = 0.0;// 初始不透明度\r
    float dens;// 密度\r
    float T_i;// 透射率\r
    float cloudLight;// 云透光率\r
\r
    for(int i = 0; i < N_MARCH_STEPS; i++) {\r
        dens = cloud_density(pos, 1. - coverage);// 密度\r
\r
        T_i = exp(-ABSORPTION * dens * march_step);// 累积系数\r
        T *= T_i;// 累积透明度\r
        cloudLight = cloud_light(pos, light_step, 1. - coverage);// 云透光率（实现太阳照到云的高亮）\r
        C += T * cloudLight * dens * march_step;//累加片元颜色\r
        C = mix(C * 0.9, C, clamp(cloudLight, 0.0, 1.0));//颜色混合（阴影）\r
        alpha += (1.0 - T_i) * (1.0 - alpha);// 片元颜色透明度\r
\r
        if(alpha > .99)\r
            break;// 透明度接近1，提前退出循环节省性能开销\r
        pos += dir_step;\r
    }\r
\r
    return vec4(C, alpha);\r
}\r
\r
// 天空----------------------------------------------------------------------------------------\r
const float rayleighZenithLength = 8.4E3;// 瑞利光程\r
const float mieZenithLength = 1.25E3;// 米氏光程\r
const float THREE_OVER_SIXTEENPI = 0.05968310365946075;// 3.0 / ( 16.0 * pi )\r
const float ONE_OVER_FOURPI = 0.07957747154594767;// 1.0 / ( 4.0 * pi )\r
const vec3 MieConst = vec3(1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14);// RGB米氏散射值\r
\r
// 瑞利散射相位因子\r
float rayleighPhase(float cosTheta) {\r
    return THREE_OVER_SIXTEENPI * (1.0 + pow(cosTheta, 2.0));\r
}\r
\r
// 米氏散射相位因子\r
float hgPhase(float cosTheta, float g) {\r
    float g2 = pow(g, 2.0);\r
    float inverse = 1.0 / pow(1.0 - 2.0 * g * cosTheta + g2, 1.5);\r
    return ONE_OVER_FOURPI * ((1.0 - g2) * inverse);\r
}\r
\r
// 米氏散射计算\r
vec3 totalMie(float T) {\r
    float c = (0.2 * T) * 10E-18;\r
    return 0.434 * c * MieConst;\r
}\r
\r
// 色彩逆映射\r
vec3 ReRRTAndODTFit(vec3 color) {\r
    vec3 ret;\r
    ret = -(sqrt(10.0) * sqrt((-187345541948750.0 * pow(color, vec3(2.0))) + 232671271403227.0 * color + 241563894490.0) + 21647550.0 * color - 1228930.0) / (98372900.0 * color - 100000000.0);\r
    return ret;\r
}\r
\r
// 色调逆映射\r
vec3 ReACESToneMapping(vec3 color) {\r
    mat3 InputM_I = mat3(1.76474, -0.14703, -0.03634, -0.67578, 1.16025, -0.16244, -0.08896, -0.01322, 1.19877);\r
    mat3 Output_I = mat3(0.64304, 0.05927, 0.005962, 0.31119, 0.93144, 0.06393, 0.04578, 0.00929, 0.93012);\r
\r
    vec3 ret;\r
    ret = InputM_I * ReRRTAndODTFit(Output_I * color) * 0.6 / Exposure;\r
    return ret;\r
}\r
\r
void main() {\r
\r
    // 云\r
    vec3 pos = normalize(vWorldPosition);//将立方体坐标转换为网格球体    \r
\r
    if(pos.y < -0.2) {\r
        discard;\r
        return;\r
    }\r
\r
    vec4 cld = vec4(1., 1., 1., 1.);\r
    float d_factor = 1. - smoothstep(0., skylineF, pos.y);// 天际线距离因子,近小远大\r
    if(pos.y > 0.)// 只计算地平线(0.)以上的云\r
    {\r
        float df = 1. / (curve * pos.y + .1);// 坐标距离因子,近小远大\r
        vec3 posS = .4 * df * pos;// 云(天空)坐标\r
\r
        vec3 raydir = normalize(posS - cameraPos);// 云(天空)方向\r
        cld = render_clouds(posS, raydir);\r
    }\r
\r
    // 天空\r
    vec3 direction = normalize(vWorldPosition - cameraPos);\r
    float view = smoothstep(0.0, 1.0, dot(up, direction));// 0~1\r
    float zenithAngle = acos(max(0.0, dot(up, direction)));\r
    float inverse = 1.0 / (cos(zenithAngle) + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / pi), -1.253));\r
    float sR = rayleighZenithLength * inverse;// 瑞利天顶长度\r
    float sM = mieZenithLength * inverse;// 米式天顶长度\r
    float sun_up = smoothstep(0., 1., dot(up, vSunDirection));\r
\r
    // 米氏系数mie coefficients		\r
    vec3 vBetaM = totalMie(turbidity) * mieCoefficient;// 天空米式系数\r
\r
    // 联合消光（散射）因子combined extinction factor\r
    vec3 Fex = exp(-(vBetaR * sR + vBetaM * sM));// 天空\r
    vec3 Fex_c = exp(-(vBetaR * sR + vBetaM * sM * (10000. * cld.a + 1.)) / 2.);// 云\r
\r
    float cosTheta = dot(direction, vSunDirection);//片元方向和太阳方向的夹角余弦\r
\r
    // 太阳\r
    float sunAngularDiameterCos = cos(sunAngularDiameter * pi / 180.);// 太阳角直径余弦\r
    float sundisk = smoothstep(sunAngularDiameterCos, 1., cosTheta);// 太阳圆盘\r
    vec3 suncolor = vSunE * 19000. * Fex * sundisk;// 圆盘颜色\r
    suncolor *= 1. - smoothstep(0., 1., cld.a * 2000.);// 云遮挡\r
\r
    // 瑞利散射\r
    float rPhase = rayleighPhase(cosTheta * 0.5 + 0.5);//瑞利相位,取值:0.736~1.178\r
    vec3 betaRTheta = vBetaR * rPhase;// 天空的瑞利散射\r
    vec3 cloudBetaR = vBetaR * rPhase;// 云的瑞利散射\r
\r
    // 米氏散射\r
    float a = 1. - smoothstep(0., 1., cld.a * 2000.);// 单散射的反射率\r
    float mPhase = a * hgPhase(cosTheta, mieDirectionalG);\r
    vec3 betaMTheta = vBetaM * mPhase;\r
\r
    // 天空颜色\r
    vec3 Lin = pow(vSunE * ((betaRTheta + betaMTheta) / (vBetaR + vBetaM)) * (1.0 - Fex), vec3(3.5));//天空颜色蓝度1.5\r
    Lin *= mix(vec3(1.0), pow(vSunE * ((betaRTheta + betaMTheta) / (vBetaR + vBetaM)) * Fex, vec3(1.0 / 2.0)), clamp(pow(1.0 - dot(up, vSunDirection), 5.), 0.0, 1.0));\r
\r
    vec3 L0 = vec3(0.1) * Fex;// 天空底色（夜空）\r
\r
    // 云颜色\r
    vec3 cloud = pow(vSunE * ((cloudBetaR + betaMTheta) / (vBetaR + vBetaM)) * (1.0 - Fex_c), vec3(1.5));//天空颜色蓝度1.5\r
    cloud *= mix(vec3(1.0), pow(vSunE * ((cloudBetaR + betaMTheta) / (vBetaR + vBetaM)) * Fex_c, vec3(1.0 / 2.0)), clamp(pow(1.0 - dot(up, vSunDirection), 5.), 0.0, 1.0));\r
    cloud *= 1. + cld.xyz * 2000.;// 云阴影\r
\r
    // 早晚霞\r
    vec3 delta2 = pow(pos.xyz - vSunDirection.xyz, vec3(2.));\r
    vec2 glowRange = vec2(4., 0.5);\r
    vec2 R = vec2(delta2.x + delta2.z, delta2.y) / glowRange;\r
    float deltaR = R.x + R.y;// 晚霞范围（椭圆）\r
    float f = 1. - smoothstep(0., 0.26, sun_up);\r
    vec3 cloudGlow = ReACESToneMapping(skyGlowColor);\r
    cloud = mix(cloud, cloudGlow, f);// 基础红霞\r
    if(pos.y > 0. && deltaR < 1.) {\r
        vec3 sunFixColor = ReACESToneMapping(sunGlowColor);\r
        cloud = mix(cloud, sunFixColor, f * (1. - deltaR));\r
    }\r
\r
    vec3 bluecolor = vec3(0.0002, 0.00045, 0.0008);// 蓝天修正偏移色\r
\r
    vec3 texColor = (Lin + L0) * 0.04 + bluecolor;// Lin为蓝色天空，L0为夜空底色；\r
    vec3 retColor = pow(texColor, vec3(1.0 / (1.2 + (1.2 * vSunfade))));\r
\r
    cloud = mix(cloud, retColor, clamp(d_factor, 0., 1.));//云天际线颜色\r
    retColor = mix(retColor + suncolor, cloud, clamp((cld.a) * 2000., 0., 1.));// 混合云和天空颜色\r
\r
    // vec3 backcolor = ReACESToneMapping(backSkyColor);// 背景色色调映射\r
    // vec3 backcolor = ReACESToneMapping(sRGBToLinear(vec4(backSkyColor,1.0)).rgb);// 背景色色调映射\r
\r
    // backcolor = sRGBToLinear(vec4(backcolor,1.0)).rgb;// 转换为线性空间\r
    // if(pos.y < 0.) {\r
    //     retColor = mix(backcolor, retColor, pow(1. + pos.y, 30.));\r
    // }// 地面阴影\r
    vec3 fog_Color = ReACESToneMapping(fogColor);\r
    retColor = mix(retColor, fog_Color, fogDensity);// 雾效果\r
    retColor = clamp(retColor, 0., 14.);// 颜色范围\r
\r
    gl_FragColor = vec4(retColor, 1.0);// 输出片元颜色\r
	#include <tonemapping_fragment>\r
	#include <colorspace_fragment>\r
}`,Be=`// 太阳\r
uniform float Intensity;// 亮度\r
uniform vec3 sunPosition;// 太阳位置\r
\r
// 天空\r
// uniform float skyscale;\r
uniform float rayleigh;// 瑞利散射\r
uniform vec3 up;// 相机上方\r
\r
varying vec3 vWorldPosition;// 世界坐标\r
varying vec3 vSunDirection;// 阳光方向\r
varying float vSunfade;// 太阳照射范围\r
varying vec3 vBetaR;// 瑞利系数\r
varying float vSunE;// 阳光强度\r
\r
// 相关常数\r
const float e = 2.71828182845904523536028747135266249775724709369995957;\r
const float pi = 3.141592653589793238462643383279502884197169;\r
const vec3 totalRayleigh = vec3(5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5);// RGB瑞利散射\r
const float cutoffAngle = 1.6110731556870734;\r
const float steepness = 1.5;\r
const float EE = 1000.0;\r
\r
float sunIntensity(float zenithAngleCos) {\r
    zenithAngleCos = clamp(zenithAngleCos, -1.0, 1.0);\r
    return Intensity * EE * max(0.0, 1.0 - pow(e, -((cutoffAngle - acos(zenithAngleCos)) / steepness)));\r
}\r
\r
void main() {\r
    // vec4 worldPosition = skyscale*modelMatrix * vec4( position, 1.0 );\r
    // vWorldPosition = skyscale*worldPosition.xyz;    \r
    // gl_Position = skyscale * projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
\r
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);\r
    vWorldPosition = worldPosition.xyz;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
\r
    gl_Position.z = gl_Position.w; // set z to camera.far\r
\r
    vSunDirection = normalize(sunPosition);// 归一化\r
    float sun_up = dot(vSunDirection, up);\r
\r
    vSunE = sunIntensity(sun_up);\r
    vSunfade = 1.0 - clamp(1.0 - exp((sun_up)), 0.0, 1.0);// 太阳照射范围\r
\r
    float rayleighCoefficient = rayleigh - (1.0 * (1.0 - vSunfade));\r
    vBetaR = totalRayleigh * rayleighCoefficient;// 瑞利系数\r
}`,R={uniforms:{sun_color:{value:new C(1,0,0)},sunAngularDiameter:{value:.505},Intensity:{value:1},sunPosition:{value:new x},mieDirectionalG:{value:1},Exposure:{value:1},skyscale:{value:1},turbidity:{value:10},skylineF:{value:.2},rayleigh:{value:.4},mieCoefficient:{value:.005},skyGlowColor:{value:new C(1,.5,.5)},sunGlowColor:{value:new C(.9216,.2431,.1059)},backSkyColor:{value:new C(.1,.1,.1)},up:{value:new x(0,1,0)},map:{value:null},uTime:{value:1},weaken:{value:.15},THICKNESS:{value:.001},N_LIGHT_STEPS:{value:3},curve:{value:.3},speed:{value:.5},wind:{value:new x(.3,.1,.3)},coverage:{value:.5},ABSORPTION:{value:.45},mult:{value:.2},N_MARCH_STEPS:{value:3},fogColor:{value:new C(.7,.7,.7)},fogDensity:{value:1e-4}},vertexShader:Be,fragmentShader:Ie};class ze extends q{constructor(e){super({uniforms:te.clone(R.uniforms),fragmentShader:R.fragmentShader,vertexShader:R.vertexShader,side:ee,depthWrite:!1});const i=new ie().load(e);i.wrapS=H,i.wrapT=H,i.generateMipmaps=!1,this.uniforms.map.value=i}}class He extends ne{constructor(i={url:""}){const n=i.url||"../../images/perlin256.png",s=new ze(n);super(new re,s);z(this,"isSky",!0);this.onBeforeRender=()=>{s.uniforms.uTime.value=performance.now()*.001}}}const Oe={class:"demo-container"},Ve={class:"state"},Ne={class:"location"},Ge={class:"loading"},je={class:"weather",tabindex:"-1"},Ye=we({__name:"Atmosphere",setup(o){var B;const e=()=>{const f=ge.create({imgSource:[new ve],demSource:new me,lon0:90});return f.rotateX(-Math.PI/2),f},i=(f,d,h,k)=>(f.controls.target.copy(d.geo2world(h)),f.camera.position.copy(d.geo2world(k)),{centerPos:f.controls.target,camerePos:f.camera.position}),n=T(null),s=T(),u=T(),a=e(),r=new oe;r.renderer.toneMapping=O;const g=new He;g.scale.setScalar(2e7),r.scene.add(g);const v=fe(a,r),c=be(a);ye(r.controls,s);const A=T(),p=Ae(A);r.addEventListener("update",()=>{p.update()}),_e(()=>{if(!n.value){console.error("map or cssrenderer or compass container is null");return}r.addTo(n.value),r.scene.add(a),i(r,a,new x(109,34,0),new x(109.1,34.1,3e3)),a.addEventListener("update",()=>{se(a,r.camera)}),u.value&&S()}),xe(()=>{a.dispose()});const _={uTime:0,mult:.2,weaken:.15,THICKNESS:80,ABSORPTION:.2,N_MARCH_STEPS:3,N_LIGHT_STEPS:3,coverage:.6,skylineF:.2,curve:.3,speed:2,xfactor:.3,yfactor:.3,zfactor:.1,turbidity:10,rayleigh:.3,mieCoefficient:.002,mieDirectionalG:1,elevation:15,azimuth:180,sunSize:1,fogColor:((B=r.scene.fog)==null?void 0:B.color)||new C(0),fogFactor:.5,ambLight:1,dirLight:1},t={..._},E=new x,b=()=>{Object.assign(t,_),r.ambLight.intensity=t.ambLight,r.dirLight.intensity=t.dirLight,r.scene.fog&&r.scene.fog.color.set(11853567).convertLinearToSRGB()},l=()=>{const f=V.degToRad(90-t.elevation),d=V.degToRad(t.azimuth);E.setFromSphericalCoords(1,f,d);const h=g.material.uniforms;h.sunPosition.value.copy(E),h.turbidity.value=t.turbidity,h.rayleigh.value=t.rayleigh,h.mieCoefficient.value=t.mieCoefficient,h.mieDirectionalG.value=t.mieDirectionalG,h.sunAngularDiameter.value=t.sunSize*.505,h.mult.value=t.mult,h.THICKNESS.value=t.THICKNESS/3e4,h.ABSORPTION.value=t.ABSORPTION,h.N_MARCH_STEPS.value=t.N_MARCH_STEPS,h.N_LIGHT_STEPS.value=t.N_LIGHT_STEPS,h.weaken.value=t.weaken,h.coverage.value=t.coverage,h.speed.value=t.speed/10,h.wind.value=new x(t.xfactor,t.yfactor,t.zfactor),h.skylineF.value=t.skylineF,h.curve.value=1-t.curve,r.fogFactor=t.fogFactor,r.scene.fog&&r.scene.fog.color.set(t.fogColor),r.ambLight.intensity=t.ambLight,r.dirLight.intensity=t.dirLight},S=()=>{l();const f=new I({title:"选项",autoPlace:!1,container:u.value}),d=f.addFolder("场景");d.add(r.controls,"autoRotate").name("自动旋转").listen(),d.add(r.camera,"fov",10,120,.1).onChange(()=>{r.camera.updateProjectionMatrix()}).name("视场角FOV").listen(),d.add(r.ambLight,"intensity",0,5,.01).name("环境光强度").listen(),d.add(r.dirLight,"intensity",0,5,.01).name("平行光强度").listen(),d.addColor(t,"fogColor").onChange(l).name("雾颜色").listen(),d.add(t,"fogFactor",0,5,.01).name("雾浓度").onChange(l).listen(),d.add(r.renderer,"toneMapping",{NoToneMapping:pe,LinearToneMapping:ue,ReinhardToneMapping:he,CineonToneMapping:de,ACESFilmicToneMapping:O,CustomToneMapping:ce,AgXToneMapping:le,NeutralToneMapping:ae}).name("色调映射模式").listen(),d.add(r.renderer,"toneMappingExposure",0,2,.01).name("色调映射曝光度").listen(),d.add(a,"LODThreshold",.5,5,.1).name("LOD阈值").listen();const h=f.addFolder("天空");h.add(t,"turbidity",0,20,1).onChange(l).name("浊度").listen(),h.add(t,"rayleigh",0,4,.001).onChange(l).name("瑞利系数").listen(),h.add(t,"mieCoefficient",0,.1,.001).onChange(l).name("米氏系数").listen(),h.add(t,"mieDirectionalG",0,.99999999999,.001).onChange(l).name("米氏方向因子").listen();const k=f.addFolder("太阳");k.add(t,"elevation",0,90,.1).onChange(l).name("太阳高度").listen(),k.add(t,"azimuth",-180,180,.1).onChange(l).name("方位角").listen(),k.add(t,"sunSize",0,10,1).onChange(l).name("大小").listen();const y=f.addFolder("云");y.add(t,"mult",0,5,.01).onChange(l).name("局部翻滚").listen(),y.add(t,"weaken",0,1,.01).onChange(l).name("云量").listen(),y.add(t,"THICKNESS",0,100,.001).onChange(l).name("厚度").listen(),y.add(t,"ABSORPTION",0,1,.01).onChange(l).name("吸光率").listen(),y.add(t,"N_MARCH_STEPS",0,30,1).onChange(l).name("采样次数").listen(),y.add(t,"N_LIGHT_STEPS",0,10,1).onChange(l).name("阴影").listen(),y.add(t,"coverage",0,1,.01).onChange(l).name("覆盖率").listen(),y.add(t,"speed",0,10,.1).onChange(l).name("风速").listen(),y.add(t,"xfactor",-1,1,.01).onChange(l).name("风向X").listen(),y.add(t,"yfactor",-1,1,.01).onChange(l).name("风向Y").listen(),y.add(t,"zfactor",-1,1,.01).onChange(l).name("风向Z").listen(),y.add(t,"skylineF",0,1,.01).onChange(l).name("天际线").listen(),y.add(t,"curve",.1,.6,.01).onChange(l).name("高度").listen()},L=()=>{b(),t.turbidity=15,t.rayleigh=.2,t.mieCoefficient=.001,t.weaken=0,t.elevation=45,t.dirLight=2,l()},G=()=>{b(),l()},j=()=>{b(),t.fogColor.set(5927041),t.fogFactor=1,t.elevation=19,t.turbidity=20,t.rayleigh=3,t.mieCoefficient=.06,t.mieDirectionalG=.9999,t.weaken=.2,t.THICKNESS=40,t.coverage=1,t.curve=.5,t.ambLight=1,t.dirLight=.5,l()},Y=()=>{b(),t.fogFactor=3,t.weaken=1,t.fogColor.set(15265535),t.elevation=50,t.ambLight=.5,t.dirLight=.5,l()},K=()=>{b(),t.elevation=0,t.sunSize=3,t.turbidity=10,t.rayleigh=2,t.mieCoefficient=1e-4,t.mieDirectionalG=.996,t.THICKNESS=60,t.weaken=.1,t.coverage=.4,t.skylineF=.6,t.sunSize=5,t.curve=.1,t.fogFactor=.3,t.fogColor.set(14107443),t.ambLight=.5,l()},X=()=>{b(),t.elevation=19,t.turbidity=1,t.rayleigh=.05,t.mieCoefficient=.001,t.weaken=.5,t.THICKNESS=40,t.coverage=1,t.curve=.1,t.fogFactor=.3,t.ambLight=1,t.dirLight=1,l()},W=()=>{b(),t.elevation=0,t.sunSize=2,t.turbidity=6,t.rayleigh=1.8,t.mieCoefficient=.005,t.mieDirectionalG=.998,t.THICKNESS=60,t.weaken=.25,t.coverage=.3,t.skylineF=.6,t.curve=.1,t.fogFactor=.3,t.fogColor.set(15370522),t.ambLight=.8,t.dirLight=.8,l()},J=()=>{b(),t.elevation=8,t.sunSize=3,t.turbidity=10,t.rayleigh=0,t.mieCoefficient=.2,t.mieDirectionalG=.999999,t.THICKNESS=60,t.ABSORPTION=.5,t.weaken=.2,t.coverage=.4,t.skylineF=1,t.fogFactor=0,t.ambLight=.5,t.dirLight=.5,l()},U=()=>{b(),t.elevation=19,t.turbidity=1,t.rayleigh=0,t.mieCoefficient=.03,t.mieDirectionalG=.998,t.weaken=.01,t.THICKNESS=60,t.coverage=1,t.fogFactor=0,t.ambLight=.5,t.dirLight=.3,l()};return(f,d)=>(Ee(),Ce("div",Oe,[m("div",{ref_key:"viewerRef",ref:n,class:"map-container"},null,512),m("div",{class:"compass",ref_key:"compassRef",ref:s},null,512),m("div",Ve,[m("div",Ne,[m("span",null,"经度："+M(D(v).x.toFixed(6))+"° ",1),m("span",null,"纬度："+M(D(v).y.toFixed(6))+"° ",1),m("span",null,"海拔："+M(D(v).z.toFixed(1))+"m ",1)]),m("div",Ge,M(D(c)),1)]),m("div",je,[m("button",{class:"button",onClick:d[0]||(d[0]=h=>G())},"多云"),m("button",{class:"button",onClick:d[1]||(d[1]=h=>L())},"晴天"),m("button",{class:"button",onClick:d[2]||(d[2]=h=>j())},"阴天"),m("button",{class:"button",onClick:d[3]||(d[3]=h=>Y())},"雾霾"),m("button",{class:"button",onClick:d[4]||(d[4]=h=>K())},"日出"),m("button",{class:"button",onClick:d[5]||(d[5]=h=>X())},"早晨"),m("button",{class:"button",onClick:d[6]||(d[6]=h=>W())},"傍晚"),m("button",{class:"button",onClick:d[7]||(d[7]=h=>J())},"夜空"),m("button",{class:"button",onClick:d[8]||(d[8]=h=>U())},"夜晚")]),m("div",{class:"stats",ref_key:"statsRef",ref:A},null,512),m("div",{class:"gui",ref_key:"guiRef",ref:u},null,512)]))}}),Ze=Se(Ye,[["__scopeId","data-v-c56b8f55"]]);export{Ze as default};
