var K=Object.defineProperty;var W=(r,e,t)=>e in r?K(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var B=(r,e,t)=>W(r,typeof e!="symbol"?e+"":e,t);import{d as J,p as T,v as U,x as Z,c as Q,o as q,j as v,a as R,a4 as z,aa as O,k as w,ab as H,t as E,_ as ee}from"./framework.xbTv8SNN.js";import{b as C,V as y,S as te,B as ie,U as ne,o as re,R as V,v as G,M as oe,aD as se,al as ae,ar as le,aB as ce,ai as de,aj as he,ak as ue,c as N}from"./index.xb0hfx6i.js";import{a as pe,b as ge,u as me}from"./style.n9PNkupe.js";import{u as ve}from"./useState.EiXjSKHF.js";import{u as fe}from"./useFog.D4XtqScj.js";/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class A{constructor(e,t,i,o,c="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(o),this.$name=document.createElement("div"),this.$name.classList.add("name"),A.nextNameID=A.nextNameID||0,this.$name.id="lil-gui-name-"+ ++A.nextNameID,this.$widget=document.createElement(c),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class be extends A{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function P(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!t&&"#"+t}const Ae={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:P,toHexString:P},S={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},_e={isPrimitive:!1,match:Array.isArray,fromHexString(r,e,t=1){const i=S.fromHexString(r);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(255&i)/255*t},toHexString:([r,e,t],i=1)=>S.toHexString(r*(i=255/i)<<16^e*i<<8^t*i<<0)},we={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const i=S.fromHexString(r);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(255&i)/255*t},toHexString:({r,g:e,b:t},i=1)=>S.toHexString(r*(i=255/i)<<16^e*i<<8^t*i<<0)},ye=[Ae,S,_e,we];class xe extends A{constructor(e,t,i,o){var c;super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(c=this.initialValue,ye.find(s=>s.match(c))),this._rgbScale=o,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=P(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class D extends A{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",o=>{o.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Ee extends A{constructor(e,t,i,o,c,s){super(e,t,i,"number"),this._initInput(),this.min(o),this.max(c);const u=s!==void 0;this.step(u?s:this._getImplicitStep(),u),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=a=>{const f=parseFloat(this.$input.value);isNaN(f)||(this._snapClampSetValue(f+a),this.$input.value=this.getValue())};let t,i,o,c,s,u=!1;const p=a=>{if(u){const f=a.clientX-t,l=a.clientY-i;Math.abs(l)>5?(a.preventDefault(),this.$input.blur(),u=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(f)>5&&m()}if(!u){const f=a.clientY-o;s-=f*this._step*this._arrowKeyMultiplier(a),c+s>this._max?s=this._max-c:c+s<this._min&&(s=this._min-c),this._snapClampSetValue(c+s)}o=a.clientY},m=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",m)};this.$input.addEventListener("input",()=>{let a=parseFloat(this.$input.value);isNaN(a)||(this._stepExplicit&&(a=this._snap(a)),this.setValue(this._clamp(a)))}),this.$input.addEventListener("keydown",a=>{a.code==="Enter"&&this.$input.blur(),a.code==="ArrowUp"&&(a.preventDefault(),e(this._step*this._arrowKeyMultiplier(a))),a.code==="ArrowDown"&&(a.preventDefault(),e(this._step*this._arrowKeyMultiplier(a)*-1))}),this.$input.addEventListener("wheel",a=>{this._inputFocused&&(a.preventDefault(),e(this._step*this._normalizeMouseWheel(a)))},{passive:!1}),this.$input.addEventListener("mousedown",a=>{t=a.clientX,i=o=a.clientY,u=!0,c=this.getValue(),s=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",m)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=l=>{const _=this.$slider.getBoundingClientRect();let x=($=l,n=_.left,g=_.right,d=this._min,h=this._max,($-n)/(g-n)*(h-d)+d);var $,n,g,d,h;this._snapClampSetValue(x)},t=l=>{e(l.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",i)};let o,c,s=!1;const u=l=>{l.preventDefault(),this._setDraggingStyle(!0),e(l.touches[0].clientX),s=!1},p=l=>{if(s){const _=l.touches[0].clientX-o,x=l.touches[0].clientY-c;Math.abs(_)>Math.abs(x)?u(l):(window.removeEventListener("touchmove",p),window.removeEventListener("touchend",m))}else l.preventDefault(),e(l.touches[0].clientX)},m=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",p),window.removeEventListener("touchend",m)},a=this._callOnFinishChange.bind(this);let f;this.$slider.addEventListener("mousedown",l=>{this._setDraggingStyle(!0),e(l.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",i)}),this.$slider.addEventListener("touchstart",l=>{l.touches.length>1||(this._hasScrollBar?(o=l.touches[0].clientX,c=l.touches[0].clientY,s=!0):u(l),window.addEventListener("touchmove",p,{passive:!1}),window.addEventListener("touchend",m))},{passive:!1}),this.$slider.addEventListener("wheel",l=>{if(Math.abs(l.deltaX)<Math.abs(l.deltaY)&&this._hasScrollBar)return;l.preventDefault();const _=this._normalizeMouseWheel(l)*this._step;this._snapClampSetValue(this.getValue()+_),this.$input.value=this.getValue(),clearTimeout(f),f=setTimeout(a,400)},{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Ce extends A{constructor(e,t,i,o){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(o)?o:Object.values(o),this._names=Array.isArray(o)?o:Object.keys(o),this._names.forEach(c=>{const s=document.createElement("option");s.innerHTML=c,this.$select.appendChild(s)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class Se extends A{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",o=>{o.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let Y=!1;class I{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:o,title:c="Controls",injectStyles:s=!0,touchStyles:u=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",p=>{p.code!=="Enter"&&p.code!=="Space"||(p.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(c),u&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Y&&s&&(function(p){const m=document.createElement("style");m.innerHTML=p;const a=document.querySelector("head link[rel=stylesheet], head style");a?document.head.insertBefore(m,a):document.head.appendChild(m)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Y=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),o&&this.domElement.style.setProperty("--width",o+"px"),this.domElement.addEventListener("keydown",p=>p.stopPropagation()),this.domElement.addEventListener("keyup",p=>p.stopPropagation())}add(e,t,i,o,c){if(Object(i)===i)return new Ce(this,e,t,i);const s=e[t];switch(typeof s){case"number":return new Ee(this,e,t,i,o,c);case"boolean":return new be(this,e,t);case"string":return new Se(this,e,t);case"function":return new D(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,s)}addColor(e,t,i=1){return new xe(this,e,t,i)}addFolder(e){return new I({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof D||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof D)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=c=>{c.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const o=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=o+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const $e=`precision highp float;\r
precision highp int;\r
precision highp sampler2D;\r
\r
// 太阳\r
uniform vec3 sun_color;// 太阳颜色\r
uniform float sunAngularDiameter;// 太阳角直径,默认为0.505度\r
uniform float mieDirectionalG;// 米式散射因子-方向光高光\r
uniform float Exposure;// 色调映射曝光\r
\r
// 天空\r
uniform float skyscale;\r
uniform float turbidity;// 浑浊度\r
uniform float skylineF;// 天际线\r
uniform float rayleigh;// 瑞利散射\r
uniform float mieCoefficient;// 米氏因子（白）\r
uniform vec3 skyGlowColor;// 天空霞光颜色\r
uniform vec3 sunGlowColor;// 太阳霞光颜色\r
uniform vec3 backSkyColor;// 背面天空颜色\r
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
// 生成3D噪声\r
float noise3D(vec3 p) {\r
    return texture(map, p.xz).x;\r
}// 采集噪声值\r
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
    vec3 direction = normalize(vWorldPosition - cameraPos);\r
    float view = smoothstep(0.0, 1.0, dot(up, direction));// 0~1\r
    float zenithAngle = acos(max(0.0, dot(up, direction)));\r
    float inverse = 1.0 / (cos(zenithAngle) + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / pi), -1.253));\r
    float sR = rayleighZenithLength * inverse;// 瑞利天顶长度\r
    float sM = mieZenithLength * inverse;// 米式天顶长度\r
    float sun_up = smoothstep(0., 1., dot(up, vSunDirection));\r
\r
    // 云\r
    vec3 pos = normalize(vWorldPosition);//将立方体坐标转换为网格球体    \r
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
    vec3 backcolor = ReACESToneMapping(backSkyColor);// 背景色色调映射\r
    // vec3 backcolor = ReACESToneMapping(sRGBToLinear(vec4(backSkyColor,1.0)).rgb);// 背景色色调映射\r
\r
    // backcolor = sRGBToLinear(vec4(backcolor,1.0)).rgb;// 转换为线性空间\r
    if(pos.y < 0.) {\r
        retColor = mix(backcolor, retColor, pow(1. + pos.y, 30.));\r
    }// 地面阴影\r
    vec3 fog_Color = ReACESToneMapping(fogColor);\r
    retColor = mix(retColor, fog_Color, fogDensity);// 雾效果\r
    retColor = clamp(retColor, 0., 14.);// 颜色范围\r
\r
    gl_FragColor = vec4(retColor, 1.0);// 输出片元颜色\r
	#include <tonemapping_fragment>\r
	#include <colorspace_fragment>\r
}`,ke=`// 太阳\r
uniform float Intensity;// 亮度\r
uniform vec3 sunPosition;// 太阳位置\r
\r
// 天空\r
uniform float skyscale;\r
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
const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );// RGB瑞利散射\r
const float cutoffAngle = 1.6110731556870734;\r
const float steepness = 1.5;\r
const float EE = 1000.0;\r
\r
float sunIntensity( float zenithAngleCos ) {\r
    zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );\r
    return Intensity * EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );\r
}\r
\r
void main() {\r
    vec4 worldPosition = skyscale*modelMatrix * vec4( position, 1.0 );\r
    vWorldPosition = skyscale*worldPosition.xyz;\r
\r
    gl_Position = skyscale*projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r
    gl_Position.z = gl_Position.w; // set z to camera.far\r
\r
    vSunDirection = normalize( sunPosition );// 归一化\r
    float sun_up = dot( vSunDirection, up );\r
\r
    vSunE = sunIntensity( sun_up );\r
    vSunfade = 1.0 - clamp( 1.0 - exp( ( sun_up ) ), 0.0, 1.0 );// 太阳照射范围\r
\r
    float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );\r
    vBetaR = totalRayleigh * rayleighCoefficient;// 瑞利系数\r
}`,F={uniforms:{sun_color:{value:new C(1,0,0)},sunAngularDiameter:{value:.505},Intensity:{value:1},sunPosition:{value:new y},mieDirectionalG:{value:1},Exposure:{value:1},skyscale:{value:1},turbidity:{value:10},skylineF:{value:.2},rayleigh:{value:.4},mieCoefficient:{value:.005},skyGlowColor:{value:new C(1,.5,.5)},sunGlowColor:{value:new C(.9216,.2431,.1059)},backSkyColor:{value:new C(.1,.1,.1)},up:{value:new y(0,1,0)},map:{value:null},uTime:{value:1},weaken:{value:.15},THICKNESS:{value:.001},N_LIGHT_STEPS:{value:3},curve:{value:.3},speed:{value:.5},wind:{value:new y(.3,.1,.3)},coverage:{value:.5},ABSORPTION:{value:.45},mult:{value:.2},N_MARCH_STEPS:{value:3},fogColor:{value:new C(.7,.7,.7)},fogDensity:{value:1e-4}},vertexShader:ke,fragmentShader:$e};class Te extends te{constructor(e){super({uniforms:ne.clone(F.uniforms),fragmentShader:F.fragmentShader,vertexShader:F.vertexShader,side:ie,depthWrite:!1});const t=new re().load(e);t.anisotropy=16,t.wrapS=V,t.wrapT=V,t.minFilter=G,t.magFilter=G,t.generateMipmaps=!1,this.uniforms.map.value=t}}class Le extends oe{constructor(t={url:""}){const i=t.url||"../../images/perlin256.png",o=new Te(i);super(new se(1,32,16,0,Math.PI*2,0,Math.PI/1.8),o);B(this,"isSky",!0);this.onBeforeRender=()=>{o.uniforms.uTime.value=performance.now()*.001}}}const Me={class:"demo-container"},Re={class:"tools"},De={for:"fogFactor"},Fe={for:"fogColor"},Pe={class:"state"},Ie={class:"location"},Be={class:"loading"},ze=J({__name:"Atmosphere",setup(r){const e=()=>{const n=de.create({imgSource:[new ue],demSource:new he,lon0:90});return n.rotateX(-Math.PI/2),n},t=(n,g,d,h)=>(n.controls.target.copy(g.geo2world(d)),n.camera.position.copy(g.geo2world(h)),{centerPos:n.controls.target,camerePos:n.camera.position}),i=T(null),o=T(),c=T(),s=e(),u=new ae;u.renderer.toneMapping=le;const p=new Le;u.scene.add(p);const m=pe(s,u),a=ge(s),{fogFactor:f,fogColor:l}=fe(u);me(u.controls,o);const _=T(),x=ve(_);u.addEventListener("update",()=>{x.update()}),U(()=>{if(!i.value){console.error("map or cssrenderer or compass container is null");return}u.addTo(i.value),u.scene.add(s),t(u,s,new y(109,34,500),new y(109.2,34.1,3e3)),s.addEventListener("update",()=>{ce(s,u.camera)}),c.value&&$()}),Z(()=>{s.dispose()});const $=()=>{const n={uTime:0,scale:3e7,mult:.2,weaken:.15,THICKNESS:6,ABSORPTION:1,N_MARCH_STEPS:3,N_LIGHT_STEPS:3,coverage:.5,sunSize:1,skylineF:.2,curve:.3,speed:2,xfactor:.3,yfactor:.3,zfactor:.1,turbidity:10,rayleigh:.4,mieCoefficient:.005,mieDirectionalG:1,elevation:12,azimuth:180,exposure:u.renderer.toneMappingExposure},g=new y,d=p.material.uniforms;function h(){const j=N.degToRad(90-n.elevation),X=N.degToRad(n.azimuth);g.setFromSphericalCoords(1,j,X),d.sunPosition.value.copy(g),d.turbidity.value=n.turbidity,d.rayleigh.value=n.rayleigh,d.mieCoefficient.value=n.mieCoefficient,d.mieDirectionalG.value=n.mieDirectionalG,d.sunAngularDiameter.value=n.sunSize*.505,d.mult.value=n.mult,d.THICKNESS.value=n.THICKNESS/n.scale,d.ABSORPTION.value=n.ABSORPTION,d.N_MARCH_STEPS.value=n.N_MARCH_STEPS,d.N_LIGHT_STEPS.value=n.N_LIGHT_STEPS,d.weaken.value=n.weaken,d.coverage.value=n.coverage,d.speed.value=n.speed/10,d.wind.value=new y(n.xfactor,n.yfactor,n.zfactor),d.skylineF.value=n.skylineF,d.curve.value=1-n.curve,p.scale.setScalar(n.scale)}h();const L=new I({title:"控件",autoPlace:!1,container:c.value}),k=L.addFolder("天空");k.add(n,"turbidity",0,20,1).onChange(h).name("浊度"),k.add(n,"rayleigh",0,4,.001).onChange(h).name("瑞利系数"),k.add(n,"mieCoefficient",0,.1,.001).onChange(h).name("米氏系数"),k.add(n,"mieDirectionalG",0,.99999999999,.001).onChange(h).name("米氏方向因子");const M=L.addFolder("太阳");M.add(n,"elevation",0,90,.1).onChange(h).name("太阳高度"),M.add(n,"azimuth",-180,180,.1).onChange(h).name("方位角"),M.add(n,"sunSize",0,10,1).onChange(h).name("大小");const b=L.addFolder("云");b.add(n,"mult",0,5,.01).onChange(h).name("局部翻滚"),b.add(n,"weaken",0,1,.01).onChange(h).name("云量"),b.add(n,"THICKNESS",0,200,.001).onChange(h).name("厚度"),b.add(n,"ABSORPTION",0,1,.01).onChange(h).name("吸光率"),b.add(n,"N_MARCH_STEPS",0,30,1).onChange(h).name("采样次数"),b.add(n,"N_LIGHT_STEPS",0,10,1).onChange(h).name("阴影"),b.add(n,"coverage",0,1,.01).onChange(h).name("覆盖率"),b.add(n,"speed",0,10,.1).onChange(h).name("风速"),b.add(n,"xfactor",-1,1,.01).onChange(h).name("风向X"),b.add(n,"yfactor",-1,1,.01).onChange(h).name("风向Y"),b.add(n,"zfactor",-1,1,.01).onChange(h).name("风向Z"),b.add(n,"skylineF",0,1,.01).onChange(h).name("天际线"),b.add(n,"curve",.1,.6,.01).onChange(h).name("高度")};return(n,g)=>(q(),Q("div",Me,[v("div",{ref_key:"viewerRef",ref:i,class:"map-container"},null,512),v("div",Re,[v("label",De,[g[2]||(g[2]=R("雾浓度 ")),z(v("input",{type:"range",id:"fogFactor",min:"0",max:"2",step:"0.1","onUpdate:modelValue":g[0]||(g[0]=d=>H(f)?f.value=d:null)},null,512),[[O,w(f)]]),R(E(w(f)),1)]),v("label",Fe,[g[3]||(g[3]=R("雾颜色 ")),z(v("input",{type:"color",id:"fogColor","onUpdate:modelValue":g[1]||(g[1]=d=>H(l)?l.value=d:null)},null,512),[[O,w(l)]])])]),v("div",{class:"compass",ref_key:"compassRef",ref:o},null,512),v("div",Pe,[v("div",Ie,[v("span",null,"经度："+E(w(m).x.toFixed(6))+"° ",1),v("span",null,"纬度："+E(w(m).y.toFixed(6))+"° ",1),v("span",null,"海拔："+E(w(m).z.toFixed(1))+"m ",1)]),v("div",Be,E(w(a)),1)]),v("div",{class:"stats",ref_key:"statsRef",ref:_},null,512),v("div",{class:"gui",ref_key:"guiRef",ref:c},null,512)]))}}),je=ee(ze,[["__scopeId","data-v-af839f5a"]]);export{je as default};
