/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},i=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${i}--\x3e`,n=new RegExp(`${i}|${s}`);class r{constructor(t,e){this.parts=[],this.element=e;const s=[],r=[],o=document.createTreeWalker(e.content,133,null,!1);let l=0,u=-1,d=0;const{strings:f,values:{length:p}}=t;for(;d<p;){const t=o.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let s=0;for(let t=0;t<i;t++)a(e[t].name,"$lit$")&&s++;for(;s-- >0;){const e=f[d],i=c.exec(e)[2],s=i.toLowerCase()+"$lit$",r=t.getAttribute(s);t.removeAttribute(s);const a=r.split(n);this.parts.push({type:"attribute",index:u,name:i,strings:a}),d+=a.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),o.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(i)>=0){const i=t.parentNode,r=e.split(n),o=r.length-1;for(let e=0;e<o;e++){let s,n=r[e];if(""===n)s=h();else{const t=c.exec(n);null!==t&&a(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(n)}i.insertBefore(s,t),this.parts.push({type:"node",index:++u})}""===r[o]?(i.insertBefore(h(),t),s.push(t)):t.data=r[o],d+=o}}else if(8===t.nodeType)if(t.data===i){const e=t.parentNode;null!==t.previousSibling&&u!==l||(u++,e.insertBefore(h(),t)),l=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(s.push(t),u--),d++}else{let e=-1;for(;-1!==(e=t.data.indexOf(i,e+1));)this.parts.push({type:"node",index:-1}),d++}}else o.currentNode=r.pop()}for(const t of s)t.parentNode.removeChild(t)}}const a=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},o=t=>-1!==t.index,h=()=>document.createComment(""),c=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function l(t,e){const{element:{content:i},parts:s}=t,n=document.createTreeWalker(i,133,null,!1);let r=d(s),a=s[r],o=-1,h=0;const c=[];let l=null;for(;n.nextNode();){o++;const t=n.currentNode;for(t.previousSibling===l&&(l=null),e.has(t)&&(c.push(t),null===l&&(l=t)),null!==l&&h++;void 0!==a&&a.index===o;)a.index=null!==l?-1:a.index-h,r=d(s,r),a=s[r]}c.forEach(t=>t.parentNode.removeChild(t))}const u=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},d=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(o(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const f=new WeakMap,p=t=>"function"==typeof t&&f.has(t),m={},g={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(t,e,i){this.t=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.t)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],s=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let r,a=0,h=0,c=n.nextNode();for(;a<s.length;)if(r=s[a],o(r)){for(;h<r.index;)h++,"TEMPLATE"===c.nodeName&&(i.push(c),n.currentNode=c.content),null===(c=n.nextNode())&&(n.currentNode=i.pop(),c=n.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(c,r.name,r.strings,this.options));a++}else this.t.push(void 0),a++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=` ${i} `;class w{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let r=0;r<t;r++){const t=this.strings[r],a=t.lastIndexOf("\x3c!--");n=(a>-1||n)&&-1===t.indexOf("--\x3e",a+1);const o=c.exec(t);e+=null===o?t+(n?b:s):t.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+i}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=t=>null===t||!("object"==typeof t||"function"==typeof t),x=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class _{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new S(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let s=0;s<e;s++){i+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(y(t)||!x(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===m||y(t)&&t===this.value||(this.value=t,p(t)||(this.committer.dirty=!0))}commit(){for(;p(this.value);){const t=this.value;this.value=m,t(this)}this.value!==m&&this.committer.commit()}}class k{constructor(t){this.value=void 0,this.i=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(h()),this.endNode=t.appendChild(h())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.s(this.startNode=h()),t.s(this.endNode=h())}insertAfterPart(t){t.s(this.startNode=h()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.i=t}commit(){if(null===this.startNode.parentNode)return;for(;p(this.i);){const t=this.i;this.i=m,t(this)}const t=this.i;t!==m&&(y(t)?t!==this.value&&this.o(t):t instanceof w?this.h(t):t instanceof Node?this.l(t):x(t)?this.u(t):t===g?(this.value=g,this.clear()):this.o(t))}s(t){this.endNode.parentNode.insertBefore(t,this.endNode)}l(t){this.value!==t&&(this.clear(),this.s(t),this.value=t)}o(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.l(document.createTextNode(i)),this.value=t}h(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const i=new v(e,t.processor,this.options),s=i._clone();i.update(t.values),this.l(s),this.value=i}}u(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const n of t)i=e[s],void 0===i&&(i=new k(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(n),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class M{constructor(t,e,i){if(this.value=void 0,this.i=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.i=t}commit(){for(;p(this.i);){const t=this.i;this.i=m,t(this)}if(this.i===m)return;const t=!!this.i;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.i=m}}class $ extends _{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new C(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class C extends S{}let E=!1;(()=>{try{const t={get capture(){return E=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class A{constructor(t,e,i){this.value=void 0,this.i=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.p=t=>this.handleEvent(t)}setValue(t){this.i=t}commit(){for(;p(this.i);){const t=this.i;this.i=m,t(this)}if(this.i===m)return;const t=this.i,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.p,this.m),s&&(this.m=T(t),this.element.addEventListener(this.eventName,this.p,this.m)),this.value=t,this.i=m}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const T=t=>t&&(E?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function F(t){let e=P.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},P.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const n=t.strings.join(i);return s=e.keyString.get(n),void 0===s&&(s=new r(t,t.getTemplateElement()),e.keyString.set(n,s)),e.stringsArray.set(t.strings,s),s}const P=new Map,O=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const N=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,s){const n=e[0];if("."===n){return new $(t,e.slice(1),i).parts}return"@"===n?[new A(t,e.slice(1),s.eventContext)]:"?"===n?[new M(t,e.slice(1),i)]:new _(t,e,i).parts}handleTextExpression(t){return new k(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const j=(t,...e)=>new w(t,e,"html",N)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,V=(t,e)=>`${t}--${e}`;let z=!0;void 0===window.ShadyCSS?z=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),z=!1);const I=t=>e=>{const s=V(e.type,t);let n=P.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},P.set(s,n));let a=n.stringsArray.get(e.strings);if(void 0!==a)return a;const o=e.strings.join(i);if(a=n.keyString.get(o),void 0===a){const i=e.getTemplateElement();z&&window.ShadyCSS.prepareTemplateDom(i,t),a=new r(e,i),n.keyString.set(o,a)}return n.stringsArray.set(e.strings,a),a},U=["html","svg"],L=new Set,R=(t,e,i)=>{L.add(t);const s=i?i.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(s,t);const a=document.createElement("style");for(let t=0;t<r;t++){const e=n[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}(t=>{U.forEach(e=>{const i=P.get(V(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),l(t,i)})})})(t);const o=s.content;i?function(t,e,i=null){const{element:{content:s},parts:n}=t;if(null==i)return void s.appendChild(e);const r=document.createTreeWalker(s,133,null,!1);let a=d(n),o=0,h=-1;for(;r.nextNode();){for(h++,r.currentNode===i&&(o=u(e),i.parentNode.insertBefore(e,i));-1!==a&&n[a].index===h;){if(o>0){for(;-1!==a;)n[a].index+=o,a=d(n,a);return}a=d(n,a)}}}(i,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const h=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==h)e.insertBefore(h.cloneNode(!0),e.firstChild);else if(i){o.insertBefore(a,o.firstChild);const t=new Set;t.add(a),l(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const D={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},q=(t,e)=>e!==t&&(e==e||t==t),B={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:q};class J extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=B){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(i){const s=this[t];this[e]=i,this._requestUpdate(t,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||B}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=q){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||D,n="function"==typeof s?s:s.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||D.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=B){const s=this.constructor,n=s._attributeNameForProperty(t,i);if(void 0!==n){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const s=this.constructor,n=s.getPropertyOptions(t);s._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}J.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const H="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol();class G{constructor(t,e){if(e!==W)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(H?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Y=(t,...e)=>{const i=e.reduce((e,i,s)=>e+(t=>{if(t instanceof G)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1],t[0]);return new G(i,W)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Z={};class K extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),s=[];i.forEach(t=>s.unshift(t)),this._styles=s}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?H?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Z&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return Z}}K.finalized=!0,K.render=(t,i,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const n=s.scopeName,r=O.has(i),a=z&&11===i.nodeType&&!!i.host,o=a&&!L.has(n),h=o?document.createDocumentFragment():i;if(((t,i,s)=>{let n=O.get(i);void 0===n&&(e(i,i.firstChild),O.set(i,n=new k(Object.assign({templateFactory:F},s))),n.appendInto(i)),n.setValue(t),n.commit()})(t,h,Object.assign({templateFactory:I(n)},s)),o){const t=O.get(h);O.delete(h);const s=t.value instanceof v?t.value.template:void 0;R(n,h,s),e(i,i.firstChild),i.appendChild(h),O.set(i,t)}!r&&a&&window.ShadyCSS.styleElement(i.host)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const X="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,Q=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},tt=`{{lit-${String(Math.random()).slice(2)}}}`,et=`\x3c!--${tt}--\x3e`,it=new RegExp(`${tt}|${et}`);class st{constructor(t,e){this.parts=[],this.element=e;const i=[],s=[],n=document.createTreeWalker(e.content,133,null,!1);let r=0,a=-1,o=0;const{strings:h,values:{length:c}}=t;for(;o<c;){const t=n.nextNode();if(null!==t){if(a++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let s=0;for(let t=0;t<i;t++)nt(e[t].name,"$lit$")&&s++;for(;s-- >0;){const e=h[o],i=ot.exec(e)[2],s=i.toLowerCase()+"$lit$",n=t.getAttribute(s);t.removeAttribute(s);const r=n.split(it);this.parts.push({type:"attribute",index:a,name:i,strings:r}),o+=r.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(tt)>=0){const s=t.parentNode,n=e.split(it),r=n.length-1;for(let e=0;e<r;e++){let i,r=n[e];if(""===r)i=at();else{const t=ot.exec(r);null!==t&&nt(t[2],"$lit$")&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(r)}s.insertBefore(i,t),this.parts.push({type:"node",index:++a})}""===n[r]?(s.insertBefore(at(),t),i.push(t)):t.data=n[r],o+=r}}else if(8===t.nodeType)if(t.data===tt){const e=t.parentNode;null!==t.previousSibling&&a!==r||(a++,e.insertBefore(at(),t)),r=a,this.parts.push({type:"node",index:a}),null===t.nextSibling?t.data="":(i.push(t),a--),o++}else{let e=-1;for(;-1!==(e=t.data.indexOf(tt,e+1));)this.parts.push({type:"node",index:-1}),o++}}else n.currentNode=s.pop()}for(const t of i)t.parentNode.removeChild(t)}}const nt=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},rt=t=>-1!==t.index,at=()=>document.createComment(""),ot=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function ht(t,e){const{element:{content:i},parts:s}=t,n=document.createTreeWalker(i,133,null,!1);let r=lt(s),a=s[r],o=-1,h=0;const c=[];let l=null;for(;n.nextNode();){o++;const t=n.currentNode;for(t.previousSibling===l&&(l=null),e.has(t)&&(c.push(t),null===l&&(l=t)),null!==l&&h++;void 0!==a&&a.index===o;)a.index=null!==l?-1:a.index-h,r=lt(s,r),a=s[r]}c.forEach(t=>t.parentNode.removeChild(t))}const ct=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},lt=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(rt(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const ut=new WeakMap,dt=t=>"function"==typeof t&&ut.has(t),ft={},pt={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class mt{constructor(t,e,i){this.t=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.t)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const t=X?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let n,r=0,a=0,o=s.nextNode();for(;r<i.length;)if(n=i[r],rt(n)){for(;a<n.index;)a++,"TEMPLATE"===o.nodeName&&(e.push(o),s.currentNode=o.content),null===(o=s.nextNode())&&(s.currentNode=e.pop(),o=s.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(o.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(o,n.name,n.strings,this.options));r++}else this.t.push(void 0),r++;return X&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const gt=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),vt=` ${tt} `;class bt{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let s=0;s<t;s++){const t=this.strings[s],n=t.lastIndexOf("\x3c!--");i=(n>-1||i)&&-1===t.indexOf("--\x3e",n+1);const r=ot.exec(t);e+=null===r?t+(i?vt:et):t.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+tt}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==gt&&(e=gt.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const wt=t=>null===t||!("object"==typeof t||"function"==typeof t),yt=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class xt{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new _t(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!yt(t))return t}let s="";for(let n=0;n<e;n++){s+=t[n];const e=i[n];if(void 0!==e){const t=e.value;if(wt(t)||!yt(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class _t{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===ft||wt(t)&&t===this.value||(this.value=t,dt(t)||(this.committer.dirty=!0))}commit(){for(;dt(this.value);){const t=this.value;this.value=ft,t(this)}this.value!==ft&&this.committer.commit()}}class St{constructor(t){this.value=void 0,this.i=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(at()),this.endNode=t.appendChild(at())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.s(this.startNode=at()),t.s(this.endNode=at())}insertAfterPart(t){t.s(this.startNode=at()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.i=t}commit(){if(null===this.startNode.parentNode)return;for(;dt(this.i);){const t=this.i;this.i=ft,t(this)}const t=this.i;t!==ft&&(wt(t)?t!==this.value&&this.o(t):t instanceof bt?this.h(t):t instanceof Node?this.l(t):yt(t)?this.u(t):t===pt?(this.value=pt,this.clear()):this.o(t))}s(t){this.endNode.parentNode.insertBefore(t,this.endNode)}l(t){this.value!==t&&(this.clear(),this.s(t),this.value=t)}o(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.l(document.createTextNode(i)),this.value=t}h(t){const e=this.options.templateFactory(t);if(this.value instanceof mt&&this.value.template===e)this.value.update(t.values);else{const i=new mt(e,t.processor,this.options),s=i._clone();i.update(t.values),this.l(s),this.value=i}}u(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const n of t)i=e[s],void 0===i&&(i=new St(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(n),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){Q(this.startNode.parentNode,t.nextSibling,this.endNode)}}class kt{constructor(t,e,i){if(this.value=void 0,this.i=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.i=t}commit(){for(;dt(this.i);){const t=this.i;this.i=ft,t(this)}if(this.i===ft)return;const t=!!this.i;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.i=ft}}class Mt extends xt{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new $t(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class $t extends _t{}let Ct=!1;(()=>{try{const t={get capture(){return Ct=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class Et{constructor(t,e,i){this.value=void 0,this.i=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.p=t=>this.handleEvent(t)}setValue(t){this.i=t}commit(){for(;dt(this.i);){const t=this.i;this.i=ft,t(this)}if(this.i===ft)return;const t=this.i,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.p,this.m),s&&(this.m=At(t),this.element.addEventListener(this.eventName,this.p,this.m)),this.value=t,this.i=ft}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const At=t=>t&&(Ct?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function Tt(t){let e=Ft.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},Ft.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(tt);return i=e.keyString.get(s),void 0===i&&(i=new st(t,t.getTemplateElement()),e.keyString.set(s,i)),e.stringsArray.set(t.strings,i),i}const Ft=new Map,Pt=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Ot=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,s){const n=e[0];if("."===n){return new Mt(t,e.slice(1),i).parts}return"@"===n?[new Et(t,e.slice(1),s.eventContext)]:"?"===n?[new kt(t,e.slice(1),i)]:new xt(t,e,i).parts}handleTextExpression(t){return new St(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const Nt=(t,...e)=>new bt(t,e,"html",Ot)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,jt=(t,e)=>`${t}--${e}`;let Vt=!0;void 0===window.ShadyCSS?Vt=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Vt=!1);const zt=t=>e=>{const i=jt(e.type,t);let s=Ft.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},Ft.set(i,s));let n=s.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(tt);if(n=s.keyString.get(r),void 0===n){const i=e.getTemplateElement();Vt&&window.ShadyCSS.prepareTemplateDom(i,t),n=new st(e,i),s.keyString.set(r,n)}return s.stringsArray.set(e.strings,n),n},It=["html","svg"],Ut=new Set,Lt=(t,e,i)=>{Ut.add(t);const s=i?i.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(s,t);const a=document.createElement("style");for(let t=0;t<r;t++){const e=n[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}(t=>{It.forEach(e=>{const i=Ft.get(jt(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),ht(t,i)})})})(t);const o=s.content;i?function(t,e,i=null){const{element:{content:s},parts:n}=t;if(null==i)return void s.appendChild(e);const r=document.createTreeWalker(s,133,null,!1);let a=lt(n),o=0,h=-1;for(;r.nextNode();){for(h++,r.currentNode===i&&(o=ct(e),i.parentNode.insertBefore(e,i));-1!==a&&n[a].index===h;){if(o>0){for(;-1!==a;)n[a].index+=o,a=lt(n,a);return}a=lt(n,a)}}}(i,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const h=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==h)e.insertBefore(h.cloneNode(!0),e.firstChild);else if(i){o.insertBefore(a,o.firstChild);const t=new Set;t.add(a),ht(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const Rt={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},Dt=(t,e)=>e!==t&&(e==e||t==t),qt={attribute:!0,type:String,converter:Rt,reflect:!1,hasChanged:Dt};class Bt extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=qt){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdateInternal(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||qt}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=Dt){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||Rt,n="function"==typeof s?s:s.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||Rt.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=qt){const s=this.constructor,n=s._attributeNameForProperty(t,i);if(void 0!==n){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let s=!0;if(void 0!==t){const n=this.constructor;i=i||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Bt.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const Jt=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ht=Symbol();class Wt{constructor(t,e){if(e!==Ht)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Jt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Gt=(t,...e)=>{const i=e.reduce((e,i,s)=>e+(t=>{if(t instanceof Wt)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1],t[0]);return new Wt(i,Ht)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const Yt={};class Zt extends Bt{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),s=[];i.forEach(t=>s.unshift(t)),this._styles=s}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!Jt){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new Wt(String(e),Ht)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Jt?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Yt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return Yt}}Zt.finalized=!0,Zt.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const s=i.scopeName,n=Pt.has(e),r=Vt&&11===e.nodeType&&!!e.host,a=r&&!Ut.has(s),o=a?document.createDocumentFragment():e;if(((t,e,i)=>{let s=Pt.get(e);void 0===s&&(Q(e,e.firstChild),Pt.set(e,s=new St(Object.assign({templateFactory:Tt},i))),s.appendInto(e)),s.setValue(t),s.commit()})(t,o,Object.assign({templateFactory:zt(s)},i)),a){const t=Pt.get(o);Pt.delete(o);const i=t.value instanceof mt?t.value.template:void 0;Lt(s,o,i),Q(e,e.firstChild),e.appendChild(o),Pt.set(e,t)}!n&&r&&window.ShadyCSS.styleElement(e.host)};const Kt=new WeakMap;function Xt(t){return e=>{if(function(t,e){let i=e;for(;i;){if(Kt.get(i)===t)return!0;i=Object.getPrototypeOf(i)}return!1}(t,e))return e;const i=t(e);return Kt.set(i,t),i}}let Qt=Math.round(1e5*Math.random());const te="-|\\.|[0-9]|[a-z]",ee=new RegExp(`[a-z](${te})*-(${te})*`),ie=(t,e)=>{const i=`${t}-${Qt+=1}`;return((t,e)=>!!e.get(t))(i,e)?ie(t,e):i};function se(t,e=customElements){if(i=t,null===ee.exec(i))throw new Error("tagName is invalid");var i;return ie(t,e)}const ne=new Map,re=(t,e)=>ne.set(e,t),ae=(t,e,i=customElements)=>{re(t,e),i.define(t,class extends e{})},oe=(t,e,i)=>{const s=customElements;if(!(t=>Object.prototype.isPrototypeOf.call(HTMLElement,t))(e))return((t,e,i)=>{const s=se(t,e);if(!i)throw new Error("Lazy scoped elements requires the use of tags cache");return i.set(t,s),s})(t,s,i);if(e===customElements.get(t))return re(t,e),t;const n=se(t,s);return ae(n,e,s),n};function he(t,e,i){return(t=>ne.get(t))(e)||i&&i.get(t)||oe(t,e,i)}const ce=new RegExp("<\\/?([a-z](-|\\.|[0-9]|[a-z])*-(-|\\.|[0-9]|[a-z])*)","g"),le=new Map,ue=(t,e,i,s)=>{const n=t.map(t=>{let i=t;const n=(t=>{const e=[];let i;for(;null!==(i=ce.exec(t));)e.push(i);return e})(t);for(let t=n.length-1;t>=0;t-=1){const r=n[t],[a,o]=r,h=he(o,e[o],s),c=r.index+a.length-o.length,l=c+o.length,u=0===a.indexOf("</");i=i.slice(0,c)+(u?h:`${h} data-tag-name="${o}"`)+i.slice(l)}return i});return i.set(t,n),n};let de=!0;const{ShadyCSS:fe}=window;(void 0===fe||void 0===fe.prepareTemplateDom)&&(de=!1);const pe=new WeakMap,me=new WeakMap,ge=t=>(me.has(t)||me.set(t,new Map),me.get(t)),ve=(t,e,i,s)=>t.map(t=>t instanceof w?be(t,e,i,s):Array.isArray(t)?ve(t,e,i,s):t),be=(t,e,i,s)=>new w(function(t,e,i=le,s){return i.get(t)||ue(t,e,i,s)}(t.strings,e,i,s),ve(t.values,e,i,s),t.type,t.processor),we=(t,e,s,n)=>a=>{const o=be(a,e,s,n);return(t=>e=>{const s=((t,e)=>`${t}--${e}`)(e.type,t);let n=P.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},P.set(s,n));let a=n.stringsArray.get(e.strings);if(void 0!==a)return a;const o=e.strings.join(i);if(a=n.keyString.get(o),void 0===a){const i=e.getTemplateElement();de&&fe.prepareTemplateDom(i,t),a=new r(e,i),n.keyString.set(o,a)}return n.stringsArray.set(e.strings,a),a})(t)(o)},ye=Xt(t=>class extends t{static get scopedElements(){return{}}static render(t,e,i){if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const{scopeName:s}=i,n=(r=this,pe.has(r)||pe.set(r,new Map),pe.get(r));var r;const a=ge(this),{scopedElements:o}=this;return super.render(t,e,{...i,templateFactory:we(s,o,n,a)})}defineScopedElement(t,e){return function(t,e,i){const s=i.get(t);s?void 0===customElements.get(s)&&ae(s,e,customElements):i.set(t,he(t,e,i))}(t,e,ge(this.constructor))}static getScopedTagName(t){const e=this.scopedElements[t];return e?he(t,e,ge(this)):ge(this).get(t)}}),xe=Xt(t=>class extends t{static get properties(){return{disabled:{type:Boolean,reflect:!0}}}constructor(){super(),this._requestedToBeDisabled=!1,this.g=!0,this.v=!1,this.disabled=!1}makeRequestToBeDisabled(){!1===this._requestedToBeDisabled&&(this._requestedToBeDisabled=!0,this.v=this.disabled,this._(!0))}retractRequestToBeDisabled(){!0===this._requestedToBeDisabled&&(this._requestedToBeDisabled=!1,this._(this.v))}_(t){this.g=!1,this.disabled=t,this.g=!0}requestUpdateInternal(t,e){super.requestUpdateInternal(t,e),"disabled"===t&&(this.g&&(this.v=this.disabled),!1===this.disabled&&!0===this._requestedToBeDisabled&&this._(!0))}}),_e=Xt(t=>class extends t{get slots(){return{}}constructor(){super(),this.S=new Set(null)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._connectSlotMixin()}_connectSlotMixin(){this.k||(Object.keys(this.slots).forEach(t=>{if(!this.querySelector(`[slot=${t}]`)){const e=(0,this.slots[t])();e instanceof Element&&(e.setAttribute("slot",t),this.appendChild(e),this.S.add(t))}}),this.k=!0)}_isPrivateSlot(t){return this.S.has(t)}}),Se=/Trident/.test(window.navigator.userAgent),ke=Xt(t=>class extends t{static get properties(){return{focused:{type:Boolean,reflect:!0}}}constructor(){super(),this.focused=!1}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.M()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this.$()}focus(){const t=this._inputNode;t&&t.focus()}blur(){const t=this._inputNode;t&&t.blur()}C(){this.focused=!0}A(){this.focused=!1}M(){this.T=t=>{t.stopPropagation(),this.dispatchEvent(new Event("focus"))},this._inputNode.addEventListener("focus",this.T),this.F=t=>{t.stopPropagation(),this.dispatchEvent(new Event("blur"))},this._inputNode.addEventListener("blur",this.F),this.P=t=>{t.stopPropagation(),this.C(),this.dispatchEvent(new Event("focusin",{bubbles:!0,composed:!0}))},this._inputNode.addEventListener("focusin",this.P),this.O=t=>{t.stopPropagation(),this.A(),this.dispatchEvent(new Event("focusout",{bubbles:!0,composed:!0}))},this._inputNode.addEventListener("focusout",this.O)}$(){this._inputNode.removeEventListener("focus",this.T),this._inputNode.removeEventListener("blur",this.F),this._inputNode.removeEventListener("focusin",this.P),this._inputNode.removeEventListener("focusout",this.O)}});class Me{constructor(t){this.type="unparseable",this.viewValue=t}toString(){return JSON.stringify({type:this.type,viewValue:this.viewValue})}}const $e=Xt(t=>class extends t{static get properties(){return{modelValue:{attribute:!1},formattedValue:{attribute:!1},serializedValue:{attribute:!1},formatOn:{attribute:!1},formatOptions:{attribute:!1}}}requestUpdateInternal(t,e){super.requestUpdateInternal(t,e),"modelValue"===t&&this.modelValue!==e&&this._onModelValueChanged({modelValue:this.modelValue},{modelValue:e}),"serializedValue"===t&&this.serializedValue!==e&&this._calculateValues({source:"serialized"}),"formattedValue"===t&&this.formattedValue!==e&&this._calculateValues({source:"formatted"})}parser(t,e){return t}formatter(t,e){return t}serializer(t){return void 0!==t?t:""}deserializer(t){return void 0===t?"":t}_calculateValues({source:t}={source:null}){this.N||(this.N=!0,"model"!==t&&("serialized"===t?this.modelValue=this.deserializer(this.serializedValue):"formatted"===t&&(this.modelValue=this.j())),"formatted"!==t&&(this.formattedValue=this.V()),"serialized"!==t&&(this.serializedValue=this.serializer(this.modelValue)),this._reflectBackFormattedValueToUser(),this.N=!1)}j(t=this.formattedValue){if(""===t)return"";if("string"!=typeof t)return;const e=this.parser(t,this.formatOptions);return void 0!==e?e:new Me(t)}V(){return this.I&&this.hasFeedbackFor&&this.hasFeedbackFor.length&&this.hasFeedbackFor.includes("error")&&this._inputNode?this._inputNode?this.value:void 0:this.modelValue instanceof Me?this.modelValue.viewValue:this.formatter(this.modelValue,this.formatOptions)}_onModelValueChanged(...t){this._calculateValues({source:"model"}),this._dispatchModelValueChangedEvent(...t)}_dispatchModelValueChangedEvent(){this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,detail:{formPath:[this]}}))}_syncValueUpwards(){this.modelValue=this.j(this.value)}_reflectBackFormattedValueToUser(){this._reflectBackOn()&&(this.value=void 0!==this.formattedValue?this.formattedValue:"")}_reflectBackOn(){return!this.I}_proxyInputEvent(){this.dispatchEvent(new CustomEvent("user-input-changed",{bubbles:!0,composed:!0}))}_onUserInputChanged(){this.I=!0,this._syncValueUpwards(),this.I=!1}constructor(){super(),this.formatOn="change",this.formatOptions={}}connectedCallback(){super.connectedCallback(),this._reflectBackFormattedValueToUser=this._reflectBackFormattedValueToUser.bind(this),this._reflectBackFormattedValueDebounced=()=>{setTimeout(this._reflectBackFormattedValueToUser)},this.addEventListener("user-input-changed",this._onUserInputChanged),void 0===this.modelValue&&this._syncValueUpwards(),this._reflectBackFormattedValueToUser(),this._inputNode&&(this._inputNode.addEventListener(this.formatOn,this._reflectBackFormattedValueDebounced),this._inputNode.addEventListener("input",this._proxyInputEvent))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("user-input-changed",this._onUserInputChanged),this._inputNode&&(this._inputNode.removeEventListener("input",this._proxyInputEvent),this._inputNode.removeEventListener(this.formatOn,this._reflectBackFormattedValueDebounced))}}),Ce=Xt(t=>class extends t{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.dispatchEvent(new CustomEvent("form-element-register",{detail:{element:this},bubbles:!0}))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this.U&&this.U.removeFormElement(this)}});function Ee(t,{reverse:e}={}){const i=t.filter(t=>t);return i.sort((t,e)=>{const i=t.compareDocumentPosition(e);return i===Node.DOCUMENT_POSITION_PRECEDING||i===Node.DOCUMENT_POSITION_CONTAINED_BY?Se?-1:1:Se?1:-1}),e&&i.reverse(),i}const Ae=Xt(t=>class extends(Ce(_e(t))){static get properties(){return{name:{type:String,reflect:!0},label:String,helpText:{type:String,attribute:"help-text"},_ariaLabelledNodes:{attribute:!1},_ariaDescribedNodes:{attribute:!1},_repropagationRole:{attribute:!1},_isRepropagationEndpoint:{attribute:!1}}}get label(){return this.L||this._labelNode&&this._labelNode.textContent||""}set label(t){const e=this.label;this.L=t,this.requestUpdate("label",e)}get helpText(){return this.R||this._helpTextNode&&this._helpTextNode.textContent||""}set helpText(t){const e=this.helpText;this.R=t,this.requestUpdate("helpText",e)}get fieldName(){return this.D||this.label||this.name}set fieldName(t){this.D=t}get slots(){return{...super.slots,label:()=>{const t=document.createElement("label");return t.textContent=this.label,t},"help-text":()=>{const t=document.createElement("div");return t.textContent=this.helpText,t}}}updated(t){super.updated(t),t.has("_ariaLabelledNodes")&&this.B("aria-labelledby",this._ariaLabelledNodes,this.J),t.has("_ariaDescribedNodes")&&this.B("aria-describedby",this._ariaDescribedNodes,this.H),t.has("label")&&this._onLabelChanged({label:this.label}),t.has("helpText")&&this._onHelpTextChanged({helpText:this.helpText})}get _inputNode(){return this.W("input")}get _labelNode(){return this.W("label")}get _helpTextNode(){return this.W("help-text")}get _feedbackNode(){return this.W("feedback")}constructor(){super(),this._inputId=`${this.localName}-${Math.random().toString(36).substr(2,10)}`,this._ariaLabelledNodes=[],this._ariaDescribedNodes=[],this._repropagationRole="child",this.addEventListener("model-value-changed",this.G)}connectedCallback(){super.connectedCallback(),this._enhanceLightDomClasses(),this._enhanceLightDomA11y(),this._triggerInitialModelValueChangedEvent()}_triggerInitialModelValueChangedEvent(){this.Y()}_enhanceLightDomClasses(){this._inputNode&&this._inputNode.classList.add("form-control")}_enhanceLightDomA11y(){const{_inputNode:t,_labelNode:e,_helpTextNode:i,_feedbackNode:s}=this;t&&(t.id=t.id||this._inputId),e&&(e.setAttribute("for",this._inputId),this.addToAriaLabelledBy(e,{idPrefix:"label"})),i&&this.addToAriaDescribedBy(i,{idPrefix:"help-text"}),s&&(s.setAttribute("aria-live","polite"),this.addToAriaDescribedBy(s,{idPrefix:"feedback"})),this._enhanceLightDomA11yForAdditionalSlots()}_enhanceLightDomA11yForAdditionalSlots(t=["prefix","suffix","before","after"]){t.forEach(t=>{const e=this.W(t);e&&(!0===e.hasAttribute("data-label")&&this.addToAriaLabelledBy(e,{idPrefix:t}),!0===e.hasAttribute("data-description")&&this.addToAriaDescribedBy(e,{idPrefix:t}))})}B(t,e,i){if(this._inputNode){if(i){const t=e.filter(t=>this.contains(t)),i=e.filter(t=>!this.contains(t));e=[...Ee(t),...i]}const s=e.map(t=>t.id).join(" ");this._inputNode.setAttribute(t,s)}}_onLabelChanged({label:t}){this._labelNode&&(this._labelNode.textContent=t)}_onHelpTextChanged({helpText:t}){this._helpTextNode&&(this._helpTextNode.textContent=t)}render(){return Nt`
        <div class="form-field__group-one">
          ${this._groupOneTemplate()}
        </div>
        <div class="form-field__group-two">
          ${this._groupTwoTemplate()}
        </div>
      `}_groupOneTemplate(){return Nt` ${this._labelTemplate()} ${this._helpTextTemplate()} `}_groupTwoTemplate(){return Nt` ${this._inputGroupTemplate()} ${this._feedbackTemplate()} `}_labelTemplate(){return Nt`
        <div class="form-field__label">
          <slot name="label"></slot>
        </div>
      `}_helpTextTemplate(){return Nt`
        <small class="form-field__help-text">
          <slot name="help-text"></slot>
        </small>
      `}_inputGroupTemplate(){return Nt`
        <div class="input-group">
          ${this._inputGroupBeforeTemplate()}
          <div class="input-group__container">
            ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
            ${this._inputGroupSuffixTemplate()}
          </div>
          ${this._inputGroupAfterTemplate()}
        </div>
      `}_inputGroupBeforeTemplate(){return Nt`
        <div class="input-group__before">
          <slot name="before"></slot>
        </div>
      `}_inputGroupPrefixTemplate(){return Array.from(this.children).find(t=>"prefix"===t.slot)?Nt`
            <div class="input-group__prefix">
              <slot name="prefix"></slot>
            </div>
          `:pt}_inputGroupInputTemplate(){return Nt`
        <div class="input-group__input">
          <slot name="input"></slot>
        </div>
      `}_inputGroupSuffixTemplate(){return Array.from(this.children).find(t=>"suffix"===t.slot)?Nt`
            <div class="input-group__suffix">
              <slot name="suffix"></slot>
            </div>
          `:pt}_inputGroupAfterTemplate(){return Nt`
        <div class="input-group__after">
          <slot name="after"></slot>
        </div>
      `}_feedbackTemplate(){return Nt`
        <div class="form-field__feedback">
          <slot name="feedback"></slot>
        </div>
      `}_isEmpty(t=this.modelValue){let e=t;if(this.modelValue instanceof Me&&(e=this.modelValue.viewValue),"object"==typeof e&&null!==e&&!(e instanceof Date))return!Object.keys(e).length;const i="number"==typeof e&&(0===e||Number.isNaN(e));return!e&&!i&&!("boolean"==typeof e&&!1===e)}static get styles(){return[Gt`
          /**********************
            {block} .form-field
           ********************/

          :host {
            display: block;
          }

          :host([hidden]) {
            display: none;
          }

          :host([disabled]) {
            pointer-events: none;
          }

          :host([disabled]) .form-field__label ::slotted(*),
          :host([disabled]) .form-field__help-text ::slotted(*) {
            color: var(--disabled-text-color, #adadad);
          }

          /***********************
            {block} .input-group
           *********************/

          .input-group__container {
            display: flex;
          }

          .input-group__input {
            flex: 1;
            display: flex;
          }

          /***** {state} :disabled *****/
          :host([disabled]) .input-group ::slotted(slot='input') {
            color: var(--disabled-text-color, #adadad);
          }

          /***********************
            {block} .form-control
           **********************/

          .input-group__container > .input-group__input ::slotted(.form-control) {
            flex: 1 1 auto;
            margin: 0; /* remove input margin in Safari */
            font-size: 100%; /* normalize default input font-size */
          }
        `]}_getAriaDescriptionElements(){return[this._helpTextNode,this._feedbackNode]}addToAriaLabelledBy(t,e={}){const{idPrefix:i,reorder:s}={reorder:!0,...e};t.id=t.id||`${i}-${this._inputId}`,this._ariaLabelledNodes.includes(t)||(this._ariaLabelledNodes=[...this._ariaLabelledNodes,t],this.J=Boolean(s))}addToAriaDescribedBy(t,e={}){const{idPrefix:i,reorder:s}={reorder:!0,...e};t.id=t.id||`${i}-${this._inputId}`,this._ariaDescribedNodes.includes(t)||(this._ariaDescribedNodes=[...this._ariaDescribedNodes,t],this.H=Boolean(s))}W(t){return[...this.children].find(e=>e.slot===t)}Y(){"child"!==this._repropagationRole&&(this.Z=!0,this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,detail:{formPath:[this],initialize:!0}})))}_onBeforeRepropagateChildrenValues(t){}G(t){this._onBeforeRepropagateChildrenValues(t);const e=t.detail&&t.detail.element||t.target,i=this._isRepropagationEndpoint||"choice-group"===this._repropagationRole;if(e===this)return;t.stopImmediatePropagation();const s="child"!==this._repropagationRole&&!this.Z,n=t.detail&&t.detail.initialize;if(s||n)return;if("choice-group"===this._repropagationRole&&!this.multipleChoice&&!e.checked)return;let r=[];i||(r=t.detail&&t.detail.formPath||[e]);const a=[...r,this];this.dispatchEvent(new CustomEvent("model-value-changed",{bubbles:!0,detail:{formPath:a}}))}}),Te=Xt(t=>class extends(Ae(t)){static get properties(){return{touched:{type:Boolean,reflect:!0},dirty:{type:Boolean,reflect:!0},filled:{type:Boolean,reflect:!0},prefilled:{attribute:!1},submitted:{attribute:!1}}}requestUpdateInternal(t,e){super.requestUpdateInternal(t,e),"touched"===t&&this.touched!==e&&this._onTouchedChanged(),"modelValue"===t&&(this.filled=!this._isEmpty()),"dirty"===t&&this.dirty!==e&&this._onDirtyChanged()}constructor(){super(),this.touched=!1,this.dirty=!1,this.prefilled=!1,this.filled=!1,this._leaveEvent="blur",this._valueChangedEvent="model-value-changed",this._iStateOnLeave=this._iStateOnLeave.bind(this),this._iStateOnValueChange=this._iStateOnValueChange.bind(this)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.addEventListener(this._leaveEvent,this._iStateOnLeave),this.addEventListener(this._valueChangedEvent,this._iStateOnValueChange),this.initInteractionState()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this.removeEventListener(this._leaveEvent,this._iStateOnLeave),this.removeEventListener(this._valueChangedEvent,this._iStateOnValueChange)}initInteractionState(){this.dirty=!1,this.prefilled=!this._isEmpty()}_iStateOnLeave(){this.touched=!0,this.prefilled=!this._isEmpty()}_iStateOnValueChange(){this.dirty=!0}resetInteractionState(){this.touched=!1,this.submitted=!1,this.dirty=!1,this.prefilled=!this._isEmpty()}_onTouchedChanged(){this.dispatchEvent(new CustomEvent("touched-changed",{bubbles:!0,composed:!0}))}_onDirtyChanged(){this.dispatchEvent(new CustomEvent("dirty-changed",{bubbles:!0,composed:!0}))}});const Fe=new class{constructor(){this._map=new Map}set(t,e){if(this.has(t))throw new Error(`The key "${t}" is already defined and can not be overridden.`);this._map.set(t,e)}get(t){return this._map.get(t)}has(t){return this._map.has(t)}};function Pe(t,e){return t(e={exports:{}},e.exports),e.exports}var Oe="long",Ne="short",je="numeric",Ve={number:{decimal:{style:"decimal"},integer:{style:"decimal",maximumFractionDigits:0},currency:{style:"currency",currency:"USD"},percent:{style:"percent"},default:{style:"decimal"}},date:{short:{month:je,day:je,year:"2-digit"},medium:{month:Ne,day:je,year:je},long:{month:Oe,day:je,year:je},full:{month:Oe,day:je,year:je,weekday:Oe},default:{month:Ne,day:je,year:je}},time:{short:{hour:je,minute:je},medium:{hour:je,minute:je,second:je},long:{hour:je,minute:je,second:je,timeZoneName:Ne},full:{hour:je,minute:je,second:je,timeZoneName:Ne},default:{hour:je,minute:je,second:je}},duration:{default:{hours:{minimumIntegerDigits:1,maximumFractionDigits:0},minutes:{minimumIntegerDigits:2,maximumFractionDigits:0},seconds:{minimumIntegerDigits:2,maximumFractionDigits:3}}},parseNumberPattern:function(t){if(t){var e={},i=t.match(/\b[A-Z]{3}\b/i),s=t.replace(/[^¤]/g,"").length;if(!s&&i&&(s=1),s?(e.style="currency",e.currencyDisplay=1===s?"symbol":2===s?"code":"name",e.currency=i?i[0].toUpperCase():"USD"):t.indexOf("%")>=0&&(e.style="percent"),!/[@#0]/.test(t))return e.style?e:void 0;if(e.useGrouping=t.indexOf(",")>=0,/E\+?[@#0]+/i.test(t)||t.indexOf("@")>=0){var n=t.replace(/E\+?[@#0]+|[^@#0]/gi,"");e.minimumSignificantDigits=Math.min(Math.max(n.replace(/[^@0]/g,"").length,1),21),e.maximumSignificantDigits=Math.min(Math.max(n.length,1),21)}else{for(var r=t.replace(/[^#0.]/g,"").split("."),a=r[0],o=a.length-1;"0"===a[o];)--o;e.minimumIntegerDigits=Math.min(Math.max(a.length-1-o,1),21);var h=r[1]||"";for(o=0;"0"===h[o];)++o;for(e.minimumFractionDigits=Math.min(Math.max(o,0),20);"#"===h[o];)++o;e.maximumFractionDigits=Math.min(Math.max(o,0),20)}return e}},parseDatePattern:function(t){if(t){for(var e={},i=0;i<t.length;){for(var s=t[i],n=1;t[++i]===s;)++n;switch(s){case"G":e.era=5===n?"narrow":4===n?Oe:Ne;break;case"y":case"Y":e.year=2===n?"2-digit":je;break;case"M":case"L":n=Math.min(Math.max(n-1,0),4),e.month=[je,"2-digit",Ne,Oe,"narrow"][n];break;case"E":case"e":case"c":e.weekday=5===n?"narrow":4===n?Oe:Ne;break;case"d":case"D":e.day=2===n?"2-digit":je;break;case"h":case"K":e.hour12=!0,e.hour=2===n?"2-digit":je;break;case"H":case"k":e.hour12=!1,e.hour=2===n?"2-digit":je;break;case"m":e.minute=2===n?"2-digit":je;break;case"s":case"S":e.second=2===n?"2-digit":je;break;case"z":case"Z":case"v":case"V":e.timeZoneName=1===n?Ne:Oe}}return Object.keys(e).length?e:void 0}}},ze="one",Ie="two",Ue="few",Le="many",Re="other",De=[function(t){return 1===+t?ze:Re},function(t){var e=+t;return 0<=e&&e<=1?ze:Re},function(t){return 0===Math.floor(Math.abs(+t))||1===+t?ze:Re},function(t){var e=+t;return 0===e?"zero":1===e?ze:2===e?Ie:3<=e%100&&e%100<=10?Ue:11<=e%100&&e%100<=99?Le:Re},function(t){var e=Math.floor(Math.abs(+t)),i=(t+".").split(".")[1].length;return 1===e&&0===i?ze:Re},function(t){var e=+t;return e%10==1&&e%100!=11?ze:2<=e%10&&e%10<=4&&(e%100<12||14<e%100)?Ue:e%10==0||5<=e%10&&e%10<=9||11<=e%100&&e%100<=14?Le:Re},function(t){var e=+t;return e%10==1&&e%100!=11&&e%100!=71&&e%100!=91?ze:e%10==2&&e%100!=12&&e%100!=72&&e%100!=92?Ie:(3<=e%10&&e%10<=4||e%10==9)&&(e%100<10||19<e%100)&&(e%100<70||79<e%100)&&(e%100<90||99<e%100)?Ue:0!==e&&e%1e6==0?Le:Re},function(t){var e=Math.floor(Math.abs(+t)),i=(t+".").split(".")[1].length,s=+(t+".").split(".")[1];return 0===i&&e%10==1&&e%100!=11||s%10==1&&s%100!=11?ze:0===i&&2<=e%10&&e%10<=4&&(e%100<12||14<e%100)||2<=s%10&&s%10<=4&&(s%100<12||14<s%100)?Ue:Re},function(t){var e=Math.floor(Math.abs(+t)),i=(t+".").split(".")[1].length;return 1===e&&0===i?ze:2<=e&&e<=4&&0===i?Ue:0!==i?Le:Re},function(t){var e=+t;return 0===e?"zero":1===e?ze:2===e?Ie:3===e?Ue:6===e?Le:Re},function(t){var e=Math.floor(Math.abs(+t)),i=+(""+t).replace(/^[^.]*.?|0+$/g,"");return 1===+t||0!==i&&(0===e||1===e)?ze:Re},function(t){var e=Math.floor(Math.abs(+t)),i=(t+".").split(".")[1].length,s=+(t+".").split(".")[1];return 0===i&&e%100==1||s%100==1?ze:0===i&&e%100==2||s%100==2?Ie:0===i&&3<=e%100&&e%100<=4||3<=s%100&&s%100<=4?Ue:Re},function(t){var e=Math.floor(Math.abs(+t));return 0===e||1===e?ze:Re},function(t){var e=Math.floor(Math.abs(+t)),i=(t+".").split(".")[1].length,s=+(t+".").split(".")[1];return 0===i&&(1===e||2===e||3===e)||0===i&&e%10!=4&&e%10!=6&&e%10!=9||0!==i&&s%10!=4&&s%10!=6&&s%10!=9?ze:Re},function(t){var e=+t;return 1===e?ze:2===e?Ie:3<=e&&e<=6?Ue:7<=e&&e<=10?Le:Re},function(t){var e=+t;return 1===e||11===e?ze:2===e||12===e?Ie:3<=e&&e<=10||13<=e&&e<=19?Ue:Re},function(t){var e=Math.floor(Math.abs(+t)),i=(t+".").split(".")[1].length;return 0===i&&e%10==1?ze:0===i&&e%10==2?Ie:0!==i||e%100!=0&&e%100!=20&&e%100!=40&&e%100!=60&&e%100!=80?0!==i?Le:Re:Ue},function(t){var e=Math.floor(Math.abs(+t)),i=(t+".").split(".")[1].length,s=+t;return 1===e&&0===i?ze:2===e&&0===i?Ie:0===i&&(s<0||10<s)&&s%10==0?Le:Re},function(t){var e=Math.floor(Math.abs(+t)),i=+(""+t).replace(/^[^.]*.?|0+$/g,"");return 0===i&&e%10==1&&e%100!=11||0!==i?ze:Re},function(t){var e=+t;return 1===e?ze:2===e?Ie:Re},function(t){var e=+t;return 0===e?"zero":1===e?ze:Re},function(t){var e=Math.floor(Math.abs(+t)),i=+t;return 0===i?"zero":0!==e&&1!==e||0===i?Re:ze},function(t){var e=+(t+".").split(".")[1],i=+t;return i%10==1&&(i%100<11||19<i%100)?ze:2<=i%10&&i%10<=9&&(i%100<11||19<i%100)?Ue:0!==e?Le:Re},function(t){var e=(t+".").split(".")[1].length,i=+(t+".").split(".")[1],s=+t;return s%10==0||11<=s%100&&s%100<=19||2===e&&11<=i%100&&i%100<=19?"zero":s%10==1&&s%100!=11||2===e&&i%10==1&&i%100!=11||2!==e&&i%10==1?ze:Re},function(t){var e=Math.floor(Math.abs(+t)),i=(t+".").split(".")[1].length,s=+(t+".").split(".")[1];return 0===i&&e%10==1&&e%100!=11||s%10==1&&s%100!=11?ze:Re},function(t){var e=Math.floor(Math.abs(+t)),i=(t+".").split(".")[1].length,s=+t;return 1===e&&0===i?ze:0!==i||0===s||1!==s&&1<=s%100&&s%100<=19?Ue:Re},function(t){var e=+t;return 1===e?ze:0===e||2<=e%100&&e%100<=10?Ue:11<=e%100&&e%100<=19?Le:Re},function(t){var e=Math.floor(Math.abs(+t)),i=(t+".").split(".")[1].length;return 1===e&&0===i?ze:0===i&&2<=e%10&&e%10<=4&&(e%100<12||14<e%100)?Ue:0===i&&1!==e&&0<=e%10&&e%10<=1||0===i&&5<=e%10&&e%10<=9||0===i&&12<=e%100&&e%100<=14?Le:Re},function(t){var e=Math.floor(Math.abs(+t));return 0<=e&&e<=1?ze:Re},function(t){var e=Math.floor(Math.abs(+t)),i=(t+".").split(".")[1].length;return 0===i&&e%10==1&&e%100!=11?ze:0===i&&2<=e%10&&e%10<=4&&(e%100<12||14<e%100)?Ue:0===i&&e%10==0||0===i&&5<=e%10&&e%10<=9||0===i&&11<=e%100&&e%100<=14?Le:Re},function(t){var e=+t;return 0===Math.floor(Math.abs(+t))||1===e?ze:2<=e&&e<=10?Ue:Re},function(t){var e=Math.floor(Math.abs(+t)),i=+(t+".").split(".")[1],s=+t;return 0===s||1===s||0===e&&1===i?ze:Re},function(t){var e=Math.floor(Math.abs(+t)),i=(t+".").split(".")[1].length;return 0===i&&e%100==1?ze:0===i&&e%100==2?Ie:0===i&&3<=e%100&&e%100<=4||0!==i?Ue:Re},function(t){var e=+t;return 0<=e&&e<=1||11<=e&&e<=99?ze:Re},function(t){var e=+t;return 1===e||5===e||7===e||8===e||9===e||10===e?ze:2===e||3===e?Ie:4===e?Ue:6===e?Le:Re},function(t){var e=Math.floor(Math.abs(+t));return e%10==1||e%10==2||e%10==5||e%10==7||e%10==8||e%100==20||e%100==50||e%100==70||e%100==80?ze:e%10==3||e%10==4||e%1e3==100||e%1e3==200||e%1e3==300||e%1e3==400||e%1e3==500||e%1e3==600||e%1e3==700||e%1e3==800||e%1e3==900?Ue:0===e||e%10==6||e%100==40||e%100==60||e%100==90?Le:Re},function(t){var e=+t;return e%10!=2&&e%10!=3||e%100==12||e%100==13?Re:Ue},function(t){var e=+t;return 1===e||3===e?ze:2===e?Ie:4===e?Ue:Re},function(t){var e=+t;return 0===e||7===e||8===e||9===e?"zero":1===e?ze:2===e?Ie:3===e||4===e?Ue:5===e||6===e?Le:Re},function(t){var e=+t;return e%10==1&&e%100!=11?ze:e%10==2&&e%100!=12?Ie:e%10==3&&e%100!=13?Ue:Re},function(t){var e=+t;return 1===e?ze:2===e||3===e?Ie:4===e?Ue:6===e?Le:Re},function(t){var e=+t;return 1===e||5===e?ze:Re},function(t){var e=+t;return 11===e||8===e||80===e||800===e?Le:Re},function(t){var e=Math.floor(Math.abs(+t));return 1===e?ze:0===e||2<=e%100&&e%100<=20||e%100==40||e%100==60||e%100==80?Le:Re},function(t){var e=+t;return e%10==6||e%10==9||e%10==0&&0!==e?Le:Re},function(t){var e=Math.floor(Math.abs(+t));return e%10==1&&e%100!=11?ze:e%10==2&&e%100!=12?Ie:e%10!=7&&e%10!=8||e%100==17||e%100==18?Re:Le},function(t){var e=+t;return 1===e?ze:2===e||3===e?Ie:4===e?Ue:Re},function(t){var e=+t;return 1<=e&&e<=4?ze:Re},function(t){var e=+t;return 1===e||5===e||7<=e&&e<=9?ze:2===e||3===e?Ie:4===e?Ue:6===e?Le:Re},function(t){var e=+t;return 1===e?ze:e%10==4&&e%100!=14?Le:Re},function(t){var e=+t;return e%10!=1&&e%10!=2||e%100==11||e%100==12?Re:ze},function(t){var e=+t;return e%10==6||e%10==9||10===e?Ue:Re},function(t){var e=+t;return e%10==3&&e%100!=13?Ue:Re}],qe={af:{cardinal:De[0]},ak:{cardinal:De[1]},am:{cardinal:De[2]},ar:{cardinal:De[3]},ars:{cardinal:De[3]},as:{cardinal:De[2],ordinal:De[34]},asa:{cardinal:De[0]},ast:{cardinal:De[4]},az:{cardinal:De[0],ordinal:De[35]},be:{cardinal:De[5],ordinal:De[36]},bem:{cardinal:De[0]},bez:{cardinal:De[0]},bg:{cardinal:De[0]},bh:{cardinal:De[1]},bn:{cardinal:De[2],ordinal:De[34]},br:{cardinal:De[6]},brx:{cardinal:De[0]},bs:{cardinal:De[7]},ca:{cardinal:De[4],ordinal:De[37]},ce:{cardinal:De[0]},cgg:{cardinal:De[0]},chr:{cardinal:De[0]},ckb:{cardinal:De[0]},cs:{cardinal:De[8]},cy:{cardinal:De[9],ordinal:De[38]},da:{cardinal:De[10]},de:{cardinal:De[4]},dsb:{cardinal:De[11]},dv:{cardinal:De[0]},ee:{cardinal:De[0]},el:{cardinal:De[0]},en:{cardinal:De[4],ordinal:De[39]},eo:{cardinal:De[0]},es:{cardinal:De[0]},et:{cardinal:De[4]},eu:{cardinal:De[0]},fa:{cardinal:De[2]},ff:{cardinal:De[12]},fi:{cardinal:De[4]},fil:{cardinal:De[13],ordinal:De[0]},fo:{cardinal:De[0]},fr:{cardinal:De[12],ordinal:De[0]},fur:{cardinal:De[0]},fy:{cardinal:De[4]},ga:{cardinal:De[14],ordinal:De[0]},gd:{cardinal:De[15]},gl:{cardinal:De[4]},gsw:{cardinal:De[0]},gu:{cardinal:De[2],ordinal:De[40]},guw:{cardinal:De[1]},gv:{cardinal:De[16]},ha:{cardinal:De[0]},haw:{cardinal:De[0]},he:{cardinal:De[17]},hi:{cardinal:De[2],ordinal:De[40]},hr:{cardinal:De[7]},hsb:{cardinal:De[11]},hu:{cardinal:De[0],ordinal:De[41]},hy:{cardinal:De[12],ordinal:De[0]},io:{cardinal:De[4]},is:{cardinal:De[18]},it:{cardinal:De[4],ordinal:De[42]},iu:{cardinal:De[19]},iw:{cardinal:De[17]},jgo:{cardinal:De[0]},ji:{cardinal:De[4]},jmc:{cardinal:De[0]},ka:{cardinal:De[0],ordinal:De[43]},kab:{cardinal:De[12]},kaj:{cardinal:De[0]},kcg:{cardinal:De[0]},kk:{cardinal:De[0],ordinal:De[44]},kkj:{cardinal:De[0]},kl:{cardinal:De[0]},kn:{cardinal:De[2]},ks:{cardinal:De[0]},ksb:{cardinal:De[0]},ksh:{cardinal:De[20]},ku:{cardinal:De[0]},kw:{cardinal:De[19]},ky:{cardinal:De[0]},lag:{cardinal:De[21]},lb:{cardinal:De[0]},lg:{cardinal:De[0]},ln:{cardinal:De[1]},lt:{cardinal:De[22]},lv:{cardinal:De[23]},mas:{cardinal:De[0]},mg:{cardinal:De[1]},mgo:{cardinal:De[0]},mk:{cardinal:De[24],ordinal:De[45]},ml:{cardinal:De[0]},mn:{cardinal:De[0]},mo:{cardinal:De[25],ordinal:De[0]},mr:{cardinal:De[2],ordinal:De[46]},mt:{cardinal:De[26]},nah:{cardinal:De[0]},naq:{cardinal:De[19]},nb:{cardinal:De[0]},nd:{cardinal:De[0]},ne:{cardinal:De[0],ordinal:De[47]},nl:{cardinal:De[4]},nn:{cardinal:De[0]},nnh:{cardinal:De[0]},no:{cardinal:De[0]},nr:{cardinal:De[0]},nso:{cardinal:De[1]},ny:{cardinal:De[0]},nyn:{cardinal:De[0]},om:{cardinal:De[0]},or:{cardinal:De[0],ordinal:De[48]},os:{cardinal:De[0]},pa:{cardinal:De[1]},pap:{cardinal:De[0]},pl:{cardinal:De[27]},prg:{cardinal:De[23]},ps:{cardinal:De[0]},pt:{cardinal:De[28]},"pt-PT":{cardinal:De[4]},rm:{cardinal:De[0]},ro:{cardinal:De[25],ordinal:De[0]},rof:{cardinal:De[0]},ru:{cardinal:De[29]},rwk:{cardinal:De[0]},saq:{cardinal:De[0]},scn:{cardinal:De[4],ordinal:De[42]},sd:{cardinal:De[0]},sdh:{cardinal:De[0]},se:{cardinal:De[19]},seh:{cardinal:De[0]},sh:{cardinal:De[7]},shi:{cardinal:De[30]},si:{cardinal:De[31]},sk:{cardinal:De[8]},sl:{cardinal:De[32]},sma:{cardinal:De[19]},smi:{cardinal:De[19]},smj:{cardinal:De[19]},smn:{cardinal:De[19]},sms:{cardinal:De[19]},sn:{cardinal:De[0]},so:{cardinal:De[0]},sq:{cardinal:De[0],ordinal:De[49]},sr:{cardinal:De[7]},ss:{cardinal:De[0]},ssy:{cardinal:De[0]},st:{cardinal:De[0]},sv:{cardinal:De[4],ordinal:De[50]},sw:{cardinal:De[4]},syr:{cardinal:De[0]},ta:{cardinal:De[0]},te:{cardinal:De[0]},teo:{cardinal:De[0]},ti:{cardinal:De[1]},tig:{cardinal:De[0]},tk:{cardinal:De[0],ordinal:De[51]},tl:{cardinal:De[13],ordinal:De[0]},tn:{cardinal:De[0]},tr:{cardinal:De[0]},ts:{cardinal:De[0]},tzm:{cardinal:De[33]},ug:{cardinal:De[0]},uk:{cardinal:De[29],ordinal:De[52]},ur:{cardinal:De[4]},uz:{cardinal:De[0]},ve:{cardinal:De[0]},vo:{cardinal:De[0]},vun:{cardinal:De[0]},wa:{cardinal:De[1]},wae:{cardinal:De[0]},xh:{cardinal:De[0]},xog:{cardinal:De[0]},yi:{cardinal:De[4]},zu:{cardinal:De[2]},lo:{ordinal:De[0]},ms:{ordinal:De[0]},vi:{ordinal:De[0]}},Be=Pe((function(t,e){function i(t,e,n,r,a){var o=t.map((function(t){return function(t,e,n,r,a){if("string"==typeof t){var o=t;return function(){return o}}var c,l=t[0],u=t[1];if(e&&"#"===t[0]){l=e[0];var d=e[2],f=(r.number||h.number)([l,"number"],n);return function(t){return f(s(l,t)-d,t)}}"plural"===u||"selectordinal"===u?(c={},Object.keys(t[3]).forEach((function(e){c[e]=i(t[3][e],t,n,r,a)})),t=[t[0],t[1],t[2],c]):t[2]&&"object"==typeof t[2]&&(c={},Object.keys(t[2]).forEach((function(e){c[e]=i(t[2][e],t,n,r,a)})),t=[t[0],t[1],c]);var p=u&&(r[u]||h[u]);if(p){var m=p(t,n);return function(t){return m(s(l,t),t)}}return a?function(t){return String(s(l,t))}:function(t){return s(l,t)}}(t,e,n,r,a)}));return a?1===o.length?o[0]:function(t){for(var e="",i=0;i<o.length;++i)e+=o[i](t);return e}:function(t){return o.reduce((function(e,i){return e.concat(i(t))}),[])}}function s(t,e){if(e&&t in e)return e[t];for(var i=t.split("."),s=e,n=0,r=i.length;s&&n<r;++n)s=s[i[n]];return s}function n(t,e){var i=t[2],s=Ve.number[i]||Ve.parseNumberPattern(i)||Ve.number.default;return new Intl.NumberFormat(e,s).format}function r(t,e){var i=t[1],s=t[2],n=Ve[i][s]||Ve.parseDatePattern(s)||Ve[i].default;return new Intl.DateTimeFormat(e,n).format}function a(t,e){var i,s="selectordinal"===t[1]?"ordinal":"cardinal",n=t[2],r=t[3];if(Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf(e).length>0)i=new Intl.PluralRules(e,{type:s});else{var a=function(t,e){if("string"==typeof t&&e[t])return t;for(var i=[].concat(t||[]),s=0,n=i.length;s<n;++s)for(var r=i[s].split("-");r.length;){var a=r.join("-");if(e[a])return a;r.pop()}}(e,qe),h=a&&qe[a][s]||o;i={select:h}}return function(t,e){return(r["="+ +t]||r[i.select(t-n)]||r.other)(e)}}function o(){return"other"}(e=t.exports=function(t,e,s){return i(t,null,e||"en",s||{},!0)}).toParts=function(t,e,s){return i(t,null,e||"en",s||{},!1)};var h={number:n,ordinal:n,spellout:n,duration:function(t,e){var i=t[2],s=Ve.duration[i]||Ve.duration.default,n=new Intl.NumberFormat(e,s.seconds).format,r=new Intl.NumberFormat(e,s.minutes).format,a=new Intl.NumberFormat(e,s.hours).format,o=/^fi$|^fi-|^da/.test(String(e))?".":":";return function(t,e){if(t=+t,!isFinite(t))return n(t);var i=~~(t/60/60),s=~~(t/60%60),h=(i?a(Math.abs(i))+o:"")+r(Math.abs(s))+o+n(Math.abs(t%60));return t<0?a(-1).replace(a(1),h):h}},date:r,time:r,plural:a,selectordinal:a,select:function(t,e){var i=t[2];return function(t,e){return(i[t]||i.other)(e)}}};e.types=h})),Je=(Be.toParts,Be.types,Pe((function(t,e){var i=["number","date","time","ordinal","duration","spellout"],s=["plural","select","selectordinal"];function n(t,e){var i=t.pattern,s=i.length,n=[],a=t.index,o=r(t,e);for(o&&n.push(o),o&&t.tokens&&t.tokens.push(["text",i.slice(a,t.index)]);t.index<s;){if("}"===i[t.index]){if(!e)throw f(t);break}if(e&&t.tagsType&&"</"===i.slice(t.index,t.index+"</".length))break;n.push(h(t)),a=t.index,(o=r(t,e))&&n.push(o),o&&t.tokens&&t.tokens.push(["text",i.slice(a,t.index)])}return n}function r(t,e){for(var i=t.pattern,s=i.length,n="plural"===e||"selectordinal"===e,r=!!t.tagsType,o="{style}"===e,h="";t.index<s;){var c=i[t.index];if("{"===c||"}"===c||n&&"#"===c||r&&"<"===c||o&&a(c.charCodeAt(0)))break;if("'"===c)if("'"===(c=i[++t.index]))h+=c,++t.index;else if("{"===c||"}"===c||n&&"#"===c||r&&"<"===c||o)for(h+=c;++t.index<s;)if("'"===(c=i[t.index])&&"'"===i[t.index+1])h+="'",++t.index;else{if("'"===c){++t.index;break}h+=c}else h+="'";else h+=c,++t.index}return h}function a(t){return t>=9&&t<=13||32===t||133===t||160===t||6158===t||t>=8192&&t<=8205||8232===t||8233===t||8239===t||8287===t||8288===t||12288===t||65279===t}function o(t){for(var e=t.pattern,i=e.length,s=t.index;t.index<i&&a(e.charCodeAt(t.index));)++t.index;s<t.index&&t.tokens&&t.tokens.push(["space",t.pattern.slice(s,t.index)])}function h(t){var e=t.pattern;if("#"===e[t.index])return t.tokens&&t.tokens.push(["syntax","#"]),++t.index,["#"];var s=function(t){var e=t.tagsType;if(!e||"<"!==t.pattern[t.index])return;if("</"===t.pattern.slice(t.index,t.index+"</".length))throw f(t,null,"closing tag without matching opening tag");t.tokens&&t.tokens.push(["syntax","<"]);++t.index;var i=c(t,!0);if(!i)throw f(t,"placeholder id");t.tokens&&t.tokens.push(["id",i]);if(o(t),"/>"===t.pattern.slice(t.index,t.index+"/>".length))return t.tokens&&t.tokens.push(["syntax","/>"]),t.index+="/>".length,[i,e];if(">"!==t.pattern[t.index])throw f(t,">");t.tokens&&t.tokens.push(["syntax",">"]);++t.index;var s=n(t,e),r=t.index;if("</"!==t.pattern.slice(t.index,t.index+"</".length))throw f(t,"</"+i+">");t.tokens&&t.tokens.push(["syntax","</"]);t.index+="</".length;var a=c(t,!0);a&&t.tokens&&t.tokens.push(["id",a]);if(i!==a)throw t.index=r,f(t,"</"+i+">","</"+a+">");if(o(t),">"!==t.pattern[t.index])throw f(t,">");t.tokens&&t.tokens.push(["syntax",">"]);return++t.index,[i,e,{children:s}]}(t);if(s)return s;if("{"!==e[t.index])throw f(t,"{");t.tokens&&t.tokens.push(["syntax","{"]),++t.index,o(t);var r=c(t);if(!r)throw f(t,"placeholder id");t.tokens&&t.tokens.push(["id",r]),o(t);var a=e[t.index];if("}"===a)return t.tokens&&t.tokens.push(["syntax","}"]),++t.index,[r];if(","!==a)throw f(t,", or }");t.tokens&&t.tokens.push(["syntax",","]),++t.index,o(t);var h,d=c(t);if(!d)throw f(t,"placeholder type");if(t.tokens&&t.tokens.push(["type",d]),o(t),"}"===(a=e[t.index])){if(t.tokens&&t.tokens.push(["syntax","}"]),"plural"===d||"selectordinal"===d||"select"===d)throw f(t,d+" sub-messages");return++t.index,[r,d]}if(","!==a)throw f(t,", or }");if(t.tokens&&t.tokens.push(["syntax",","]),++t.index,o(t),"plural"===d||"selectordinal"===d){var p=function(t){var e=t.pattern,i=e.length,s=0;if("offset:"===e.slice(t.index,t.index+"offset:".length)){t.tokens&&t.tokens.push(["offset","offset"],["syntax",":"]),t.index+="offset:".length,o(t);for(var n=t.index;t.index<i&&((r=e.charCodeAt(t.index))>=48&&r<=57);)++t.index;if(n===t.index)throw f(t,"offset number");t.tokens&&t.tokens.push(["number",e.slice(n,t.index)]),s=+e.slice(n,t.index)}var r;return s}(t);o(t),h=[r,d,p,u(t,d)]}else if("select"===d)h=[r,d,u(t,d)];else if(i.indexOf(d)>=0)h=[r,d,l(t)];else{var m=t.index,g=l(t);o(t),"{"===e[t.index]&&(t.index=m,g=u(t,d)),h=[r,d,g]}if(o(t),"}"!==e[t.index])throw f(t,"}");return t.tokens&&t.tokens.push(["syntax","}"]),++t.index,h}function c(t,e){for(var i=t.pattern,s=i.length,n="";t.index<s;){var r=i[t.index];if("{"===r||"}"===r||","===r||"#"===r||"'"===r||a(r.charCodeAt(0))||e&&("<"===r||">"===r||"/"===r))break;n+=r,++t.index}return n}function l(t){var e=t.index,i=r(t,"{style}");if(!i)throw f(t,"placeholder style name");return t.tokens&&t.tokens.push(["style",t.pattern.slice(e,t.index)]),i}function u(t,e){for(var i=t.pattern,n=i.length,r={};t.index<n&&"}"!==i[t.index];){var a=c(t);if(!a)throw f(t,"sub-message selector");t.tokens&&t.tokens.push(["selector",a]),o(t),r[a]=d(t,e),o(t)}if(!r.other&&s.indexOf(e)>=0)throw f(t,null,null,'"other" sub-message must be specified in '+e);return r}function d(t,e){if("{"!==t.pattern[t.index])throw f(t,"{ to start sub-message");t.tokens&&t.tokens.push(["syntax","{"]),++t.index;var i=n(t,e);if("}"!==t.pattern[t.index])throw f(t,"} to end sub-message");return t.tokens&&t.tokens.push(["syntax","}"]),++t.index,i}function f(t,e,i,s){var n=t.pattern,r=n.slice(0,t.index).split(/\r?\n/),a=t.index,o=r.length,h=r.slice(-1)[0].length;return i=i||(t.index>=n.length?"end of message pattern":c(t)||n[t.index]),s||(s=function(t,e){return t?"Expected "+t+" but found "+e:"Unexpected "+e+" found"}(e,i)),new p(s+=" in "+n.replace(/\r?\n/g,"\n"),e,i,a,o,h)}function p(t,e,i,s,n,r){Error.call(this,t),this.name="SyntaxError",this.message=t,this.expected=e,this.found=i,this.offset=s,this.line=n,this.column=r}e=t.exports=function(t,e){return n({pattern:String(t),index:0,tagsType:e&&e.tagsType||null,tokens:e&&e.tokens||null},"")},p.prototype=Object.create(Error.prototype),e.SyntaxError=p}))),He=(Je.SyntaxError,new RegExp("^("+Object.keys(qe).join("|")+")\\b")),We=new WeakMap;
/*!
 * Intl.MessageFormat prollyfill
 * Copyright(c) 2015 Andy VanWagoner
 * MIT licensed
 **/
function Ge(t,e,i){if(!(this instanceof Ge)||We.has(this))throw new TypeError("calling MessageFormat constructor without new is invalid");var s=Je(t);We.set(this,{ast:s,format:Be(s,e,i&&i.types),locale:Ge.supportedLocalesOf(e)[0]||"en",locales:e,options:i})}var Ye=Ge;Object.defineProperties(Ge.prototype,{format:{configurable:!0,get:function(){var t=We.get(this);if(!t)throw new TypeError("MessageFormat.prototype.format called on value that's not an object initialized as a MessageFormat");return t.format}},formatToParts:{configurable:!0,writable:!0,value:function(t){var e=We.get(this);if(!e)throw new TypeError("MessageFormat.prototype.formatToParts called on value that's not an object initialized as a MessageFormat");return(e.toParts||(e.toParts=Be.toParts(e.ast,e.locales,e.options&&e.options.types)))(t)}},resolvedOptions:{configurable:!0,writable:!0,value:function(){var t=We.get(this);if(!t)throw new TypeError("MessageFormat.prototype.resolvedOptions called on value that's not an object initialized as a MessageFormat");return{locale:t.locale}}}}),"undefined"!=typeof Symbol&&Object.defineProperty(Ge.prototype,Symbol.toStringTag,{value:"Object"}),Object.defineProperties(Ge,{supportedLocalesOf:{configurable:!0,writable:!0,value:function(t){return[].concat(Intl.NumberFormat.supportedLocalesOf(t),Intl.DateTimeFormat.supportedLocalesOf(t),Intl.PluralRules?Intl.PluralRules.supportedLocalesOf(t):[],[].concat(t||[]).filter((function(t){return He.test(t)}))).filter((function(t,e,i){return i.indexOf(t)===e}))}}});let Ze=Fe.get("@lion/localize::localize::0.10.x")||new class{constructor({autoLoadOnLocaleChange:t=!1,fallbackLocale:e=""}={}){this.K=document.createDocumentFragment(),this._autoLoadOnLocaleChange=!!t,this._fallbackLocale=e,this.X={},this.tt=new Map,this.nt={},this.rt={},this.formatNumberOptions={returnIfNaN:""};const i=document.documentElement.getAttribute("data-localize-lang");this._supportExternalTranslationTools=Boolean(i),this._supportExternalTranslationTools&&(this.locale=i||"en-GB",this._setupTranslationToolSupport()),document.documentElement.lang||(document.documentElement.lang=this.locale||"en-GB"),this._setupHtmlLangAttributeObserver()}_setupTranslationToolSupport(){this._langAttrSetByTranslationTool=document.documentElement.lang||null}teardown(){this._teardownHtmlLangAttributeObserver()}get locale(){return this._supportExternalTranslationTools?this.at||"":document.documentElement.lang}set locale(t){let e;this._supportExternalTranslationTools?(e=this.at,this.at=t,null===this._langAttrSetByTranslationTool&&this._setHtmlLangAttribute(t)):(e=document.documentElement.lang,this._setHtmlLangAttribute(t)),t.includes("-")||this.ot(t),this._onLocaleChanged(t,e)}_setHtmlLangAttribute(t){this._teardownHtmlLangAttributeObserver(),document.documentElement.lang=t,this._setupHtmlLangAttributeObserver()}ot(t){throw new Error(`\n      Locale was set to ${t}.\n      Language only locales are not allowed, please use the full language locale e.g. 'en-GB' instead of 'en'.\n      See https://github.com/ing-bank/lion/issues/187 for more information.\n    `)}get loadingComplete(){return Promise.all(Object.values(this.rt[this.locale]))}reset(){this.X={},this.tt=new Map,this.nt={},this.rt={}}addData(t,e,i){if(this._isNamespaceInCache(t,e))throw new Error(`Namespace "${e}" has been already added for the locale "${t}".`);this.X[t]=this.X[t]||{},this.X[t][e]=i}setupNamespaceLoader(t,e){this.tt.set(t,e)}loadNamespaces(t,{locale:e}={}){return Promise.all(t.map(t=>this.loadNamespace(t,{locale:e})))}loadNamespace(t,{locale:e=this.locale}={locale:this.locale}){const i="object"==typeof t,s=i?Object.keys(t)[0]:t;if(this._isNamespaceInCache(e,s))return Promise.resolve();const n=this._getCachedNamespaceLoaderPromise(e,s);return n||this._loadNamespaceData(e,t,i,s)}msg(t,e,i={}){const s=i.locale?i.locale:this.locale,n=this._getMessageForKeys(t,s);return n?new Ye(n,s).format(e):""}_setupHtmlLangAttributeObserver(){this._htmlLangAttributeObserver||(this._htmlLangAttributeObserver=new MutationObserver(t=>{t.forEach(t=>{this._supportExternalTranslationTools?"auto"===document.documentElement.lang?(this._langAttrSetByTranslationTool=null,this._setHtmlLangAttribute(this.locale)):this._langAttrSetByTranslationTool=document.documentElement.lang:this._onLocaleChanged(document.documentElement.lang,t.oldValue||"")})})),this._htmlLangAttributeObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],attributeOldValue:!0})}_teardownHtmlLangAttributeObserver(){this._htmlLangAttributeObserver&&this._htmlLangAttributeObserver.disconnect()}_isNamespaceInCache(t,e){return!(!this.X[t]||!this.X[t][e])}_getCachedNamespaceLoaderPromise(t,e){return this.rt[t]?this.rt[t][e]:null}_loadNamespaceData(t,e,i,s){const n=this._getNamespaceLoader(e,i,s),r=this._getNamespaceLoaderPromise(n,t,s);return this._cacheNamespaceLoaderPromise(t,s,r),r.then(e=>{const i=function(t){return!(!t||!t.default||"object"!=typeof t.default||1!==Object.keys(t).length)}(e)?e.default:e;this.addData(t,s,i)})}_getNamespaceLoader(t,e,i){let s=this.nt[i];if(!s)if(e){s=t[i],this.nt[i]=s}else s=this._lookupNamespaceLoader(i),this.nt[i]=s;if(!s)throw new Error(`Namespace "${i}" was not properly setup.`);return this.nt[i]=s,s}_getNamespaceLoaderPromise(t,e,i,s=this._fallbackLocale){return t(e,i).catch(()=>{const n=this._getLangFromLocale(e);return t(n,i).catch(()=>{if(s)return this._getNamespaceLoaderPromise(t,s,i,"").catch(()=>{const t=this._getLangFromLocale(s);throw new Error(`Data for namespace "${i}" and current locale "${e}" or fallback locale "${s}" could not be loaded. Make sure you have data either for locale "${e}" (and/or generic language "${n}") or for fallback "${s}" (and/or "${t}").`)});throw new Error(`Data for namespace "${i}" and locale "${e}" could not be loaded. Make sure you have data for locale "${e}" (and/or generic language "${n}").`)})})}_cacheNamespaceLoaderPromise(t,e,i){this.rt[t]||(this.rt[t]={}),this.rt[t][e]=i}_lookupNamespaceLoader(t){for(const[e,i]of this.tt){const s="string"==typeof e&&e===t,n="object"==typeof e&&"RegExp"===e.constructor.name&&e.test(t);if(s||n)return i}return null}_getLangFromLocale(t){return t.substring(0,2)}addEventListener(t,e,...i){this.K.addEventListener(t,e,...i)}removeEventListener(t,e,...i){this.K.removeEventListener(t,e,...i)}dispatchEvent(t){this.K.dispatchEvent(t)}_onLocaleChanged(t,e){t!==e&&(this._autoLoadOnLocaleChange&&this._loadAllMissing(t,e),this.dispatchEvent(new CustomEvent("localeChanged",{detail:{newLocale:t,oldLocale:e}})))}_loadAllMissing(t,e){const i=this.X[e]||{},s=this.X[t]||{},n=[];return Object.keys(i).forEach(e=>{s[e]||n.push(this.loadNamespace(e,{locale:t}))}),Promise.all(n)}_getMessageForKeys(t,e){if("string"==typeof t)return this._getMessageForKey(t,e);const i=Array.from(t).reverse();let s,n;for(;i.length;)if(s=i.pop(),n=this._getMessageForKey(s,e),n)return n}_getMessageForKey(t,e){if(!t||-1===t.indexOf(":"))throw new Error(`Namespace is missing in the key "${t}". The format for keys is "namespace:name".`);const[i,s]=t.split(":"),n=this.X[e],r=n?n[i]:{},a=s.split(".").reduce((t,e)=>"object"==typeof t?t[e]:t,r);return String(a||"")}}({autoLoadOnLocaleChange:!0,fallbackLocale:"en-GB"});class Ke extends Zt{static get properties(){return{feedbackData:Array}}_messageTemplate({message:t}){return t}updated(){super.updated(),this.feedbackData&&this.feedbackData[0]?(this.setAttribute("type",this.feedbackData[0].type),this.currentType=this.feedbackData[0].type,window.clearTimeout(this.removeMessage),"success"===this.currentType&&(this.removeMessage=window.setTimeout(()=>{this.removeAttribute("type"),this.feedbackData=""},3e3))):"success"!==this.currentType&&this.removeAttribute("type")}render(){return Nt`
      ${this.feedbackData&&this.feedbackData.map(({message:t,type:e,validator:i})=>Nt`
          ${this._messageTemplate({message:t,type:e,validator:i})}
        `)}
    `}}class Xe{constructor(t,e){!function(t){const e=document.createDocumentFragment();t.addEventListener=(t,i,s)=>e.addEventListener(t,i,s),t.dispatchEvent=t=>e.dispatchEvent(t),t.removeEventListener=(t,i,s)=>e.removeEventListener(t,i,s)}(this),this.ht=t,this.ct=e||{},this.type=e&&e.type||"error"}static get validatorName(){return""}static get async(){return!1}execute(){if(!this.validatorName)throw new Error("A validator needs to have a name! Please set it via \"static get validatorName() { return 'IsCat'; }\"")}set param(t){this.ht=t,this.dispatchEvent(new Event("param-changed"))}get param(){return this.ht}set config(t){this.ct=t,this.dispatchEvent(new Event("config-changed"))}get config(){return this.ct}async _getMessage(t){const e={name:this.constructor.validatorName,type:this.type,params:this.param,config:this.config,...t};if(this.config.getMessage){if("function"==typeof this.config.getMessage)return this.config.getMessage(e);throw new Error("You must provide a value for getMessage of type 'function', you provided a value of type: "+typeof this.config.getMessage)}return this.constructor.getMessage(e)}static async getMessage(){return`Please configure an error message for "${this.name}" by overriding "static async getMessage()"`}onFormControlConnect(t){}onFormControlDisconnect(t){}abortExecution(){}}class Qe extends Xe{executeOnResults({validationResult:t,prevValidationResult:e,validators:i}){}}class ti{constructor(){this.ut=!1,this.dt=[]}add(t){this.dt.push(t),this.ut||(this.complete=new Promise(t=>{this.ft=t}),this.gt())}async gt(){this.ut=!0,await this.dt[0](),this.dt.shift(),this.dt.length>0?this.gt():(this.ut=!1,this.ft&&this.ft())}}const ei=Xt(t=>class extends t{constructor(){super(),this.vt={}}firstUpdated(t){super.firstUpdated(t),this.vt.connected=!0,this.bt()}disconnectedCallback(){super.disconnectedCallback(),this.vt.connected=!1}static wt(t,e,i){const s=this._classProperties;return s.get(t)&&s.get(t).hasChanged?s.get(t).hasChanged(e,i):e!==i}bt(){const t=this.vt,e=this.constructor;t.initialized=!0,t.queue&&Array.from(t.queue).forEach(t=>{e.wt(t,this[t],void 0)&&this.updateSync(t,void 0)})}requestUpdateInternal(t,e){super.requestUpdateInternal(t,e),this.vt=this.vt||{};const i=this.vt,s=this.constructor;i.connected?s.wt(t,this[t],e)&&this.updateSync(t,e):(i.queue=i.queue||new Set,i.queue.add(t))}updateSync(t,e){}});class ii extends Xe{static get validatorName(){return"Required"}onFormControlConnect(t){t._inputNode&&t._inputNode.setAttribute("aria-required","true")}onFormControlDisconnect(t){t._inputNode&&t._inputNode.removeAttribute("aria-required")}}function si(t=[],e=[]){return t.filter(t=>!e.includes(t)).concat(e.filter(e=>!t.includes(e)))}const ni=Xt(t=>class extends(ei(_e(ye(t)))){static get scopedElements(){return{...super.scopedElements,"lion-validation-feedback":Ke}}static get properties(){return{validators:Array,hasFeedbackFor:{type:Array},shouldShowFeedbackFor:{type:Array},showsFeedbackFor:{type:Array,attribute:"shows-feedback-for",reflect:!0,converter:{fromAttribute:t=>t.split(","),toAttribute:t=>t.join(",")}},validationStates:{type:Object},isPending:{type:Boolean,attribute:"is-pending",reflect:!0},modelValue:Object,defaultValidators:Array,_visibleMessagesAmount:Number,fieldName:String}}static get validationTypes(){return["error"]}get slots(){return{...super.slots,feedback:()=>document.createElement(this.constructor.getScopedTagName("lion-validation-feedback"))}}get _feedbackNode(){return this.querySelector("[slot=feedback]")}get _allValidators(){return[...this.validators,...this.defaultValidators]}constructor(){super(),this.hasFeedbackFor=[],this.shouldShowFeedbackFor=[],this.showsFeedbackFor=[],this.validationStates={},this._visibleMessagesAmount=1,this.isPending=!1,this.validators=[],this.defaultValidators=[],this.yt=[],this.xt=[],this._t=[],this.St=this.St.bind(this),this._updateFeedbackComponent=this._updateFeedbackComponent.bind(this)}connectedCallback(){super.connectedCallback(),Ze.addEventListener("localeChanged",this._updateFeedbackComponent)}disconnectedCallback(){super.disconnectedCallback(),Ze.removeEventListener("localeChanged",this._updateFeedbackComponent)}firstUpdated(t){super.firstUpdated(t),this.kt=!0,this.validate()}updateSync(t,e){if(super.updateSync(t,e),"validators"===t?(this.Mt(),this.validate({clearCurrentResult:!0})):"modelValue"===t&&this.validate({clearCurrentResult:!0}),["touched","dirty","prefilled","submitted","hasFeedbackFor"].includes(t)&&this._updateShouldShowFeedbackFor(),"showsFeedbackFor"===t){this._inputNode&&this._inputNode.setAttribute("aria-invalid",this._hasFeedbackVisibleFor("error"));const t=si(this.showsFeedbackFor,e);t.length>0&&this.dispatchEvent(new Event("showsFeedbackForChanged",{bubbles:!0})),t.forEach(t=>{var e;this.dispatchEvent(new Event(`showsFeedbackFor${e=t,e.charAt(0).toUpperCase()+e.slice(1)}Changed`,{bubbles:!0}))})}if("shouldShowFeedbackFor"===t){si(this.shouldShowFeedbackFor,e).length>0&&this.dispatchEvent(new Event("shouldShowFeedbackForChanged",{bubbles:!0}))}}async validate({clearCurrentResult:t}={}){if(this.disabled)return this.$t(),this.Ct({source:"sync",hasAsync:!0}),void this._updateFeedbackComponent();this.kt&&(this.Et(),t&&this.$t(),await this.At())}Et(){this.Tt=this._t}async At(){this.validateComplete=new Promise(t=>{this.Ft=t});const t=this.modelValue instanceof Me?this.modelValue.viewValue:this.modelValue,e=this._allValidators.find(t=>t instanceof ii);if(this.Pt(t))return e&&(this.yt=[e]),void this.Ct({source:"sync"});const i=this._allValidators.filter(t=>!(t instanceof Qe||t instanceof ii)),s=i.filter(t=>!t.constructor.async),n=i.filter(t=>t.constructor.async);this.Ot(s,t,{hasAsync:Boolean(n.length)}),await this.Nt(n,t)}Ot(t,e,{hasAsync:i}){t.length&&(this.yt=t.filter(t=>t.execute(e,t.param,{node:this}))),this.Ct({source:"sync",hasAsync:i})}async Nt(t,e){if(t.length){this.isPending=!0;const i=t.map(t=>t.execute(e,t.param,{node:this})),s=await Promise.all(i);this.xt=s.map((e,i)=>t[i]).filter((t,e)=>s[e]),this.Ct({source:"async"}),this.isPending=!1}}jt(t){return this._allValidators.filter(t=>!t.constructor.async&&t instanceof Qe).filter(e=>e.executeOnResults({regularValidationResult:t,prevValidationResult:this.Tt}))}Ct({source:t,hasAsync:e}){const i=[...this.yt,...this.xt],s=this.jt(i);this._t=[...s,...i];const n=this.constructor.validationTypes.reduce((t,e)=>({...t,[e]:{}}),{});this._t.forEach(t=>{n[t.type]||(n[t.type]={}),n[t.type][t.constructor.validatorName]=!0}),this.validationStates=n,this.hasFeedbackFor=[...new Set(this._t.map(t=>t.type))],this.dispatchEvent(new Event("validate-performed",{bubbles:!0})),"async"!==t&&e||this.Ft()}$t(){this.yt=[],this.xt=[]}St(t){"param-changed"!==t.type&&"config-changed"!==t.type||this.validate()}Mt(){const t=["param-changed","config-changed"];this.Vt&&this.Vt.forEach(e=>{t.forEach(t=>e.removeEventListener(t,this.St)),e.onFormControlDisconnect(this)}),this._allValidators.forEach(e=>{if(!(e instanceof Xe)){const t=`Validators array only accepts class instances of Validator. Type "${Array.isArray(e)?"array":typeof e}" found.`;throw console.error(t,this),new Error(t)}if(-1===this.constructor.validationTypes.indexOf(e.type)){const t=`This component does not support the validator type "${e.type}" used in "${e.constructor.validatorName}". You may change your validators type or add it to the components "static get validationTypes() {}".`;throw console.error(t,this),new Error(t)}t.forEach(t=>e.addEventListener(t,this.St)),e.onFormControlConnect(this)}),this.Vt=this._allValidators}static _hasObjectChanged(t,e){return JSON.stringify(t)!==JSON.stringify(e)}Pt(t){return"function"==typeof this._isEmpty?this._isEmpty(t):null===this.modelValue||void 0===this.modelValue||""===this.modelValue}async zt(t){let e=await this.fieldName;return Promise.all(t.map(async t=>(t.config.fieldName&&(e=await t.config.fieldName),{message:await t._getMessage({modelValue:this.modelValue,formControl:this,fieldName:e}),type:t.type,validator:t})))}_updateFeedbackComponent(){this._feedbackNode&&(this.It||(this.It=new ti),this.showsFeedbackFor.length>0?this.It.add(async()=>{this.Ut=this._prioritizeAndFilterFeedback({validationResult:this._t});const t=await this.zt(this.Ut);this._feedbackNode.feedbackData=t.length?t:[]}):this.It.add(async()=>{this._feedbackNode.feedbackData=[]}),this.feedbackComplete=this.It.complete)}_showFeedbackConditionFor(){return this.touched&&this.dirty||this.prefilled||this.submitted}_hasFeedbackVisibleFor(t){return this.hasFeedbackFor&&this.hasFeedbackFor.includes(t)&&this.shouldShowFeedbackFor&&this.shouldShowFeedbackFor.includes(t)}updated(t){super.updated(t),(t.has("shouldShowFeedbackFor")||t.has("hasFeedbackFor"))&&(this.showsFeedbackFor=this.constructor.validationTypes.map(t=>this._hasFeedbackVisibleFor(t)?t:void 0).filter(t=>!!t),this._updateFeedbackComponent())}_updateShouldShowFeedbackFor(){this.shouldShowFeedbackFor=this.constructor.validationTypes.map(t=>this._showFeedbackConditionFor(t)?t:void 0).filter(t=>!!t)}_prioritizeAndFilterFeedback({validationResult:t}){const e=this.constructor.validationTypes;return t.sort((t,i)=>e.indexOf(t.type)-e.indexOf(i.type)).slice(0,this._visibleMessagesAmount)}});class ri extends(Ae(Te(ke($e(ni(xe(_e(Zt)))))))){static get properties(){return{submitted:{type:Boolean},autocomplete:{type:String,reflect:!0},value:{type:String}}}get selectionStart(){const t=this._inputNode;return t&&t.selectionStart?t.selectionStart:0}set selectionStart(t){const e=this._inputNode;e&&e.selectionStart&&(e.selectionStart=t)}get selectionEnd(){const t=this._inputNode;return t&&t.selectionEnd?t.selectionEnd:0}set selectionEnd(t){const e=this._inputNode;e&&e.selectionEnd&&(e.selectionEnd=t)}set value(t){this._inputNode?(this._setValueAndPreserveCaret(t),this.Lt=void 0):this.Lt=t}get value(){return this._inputNode&&this._inputNode.value||this.Lt||""}constructor(){super(),this.name="",this.submitted=!1}firstUpdated(t){super.firstUpdated(t),this._initialModelValue=this.modelValue}connectedCallback(){super.connectedCallback(),this._onChange=this._onChange.bind(this),this._inputNode.addEventListener("change",this._onChange),this.classList.add("form-field")}disconnectedCallback(){super.disconnectedCallback(),this._inputNode.removeEventListener("change",this._onChange)}updated(t){super.updated(t),t.has("disabled")&&(this._inputNode.disabled=this.disabled,this.validate()),t.has("name")&&(this._inputNode.name=this.name),t.has("autocomplete")&&(this._inputNode.autocomplete=this.autocomplete)}resetInteractionState(){super.resetInteractionState&&super.resetInteractionState(),this.submitted=!1}reset(){this.modelValue=this._initialModelValue,this.resetInteractionState()}clear(){super.clear&&super.clear(),this.modelValue=""}_onChange(){super._onChange&&super._onChange(),this.dispatchEvent(new CustomEvent("user-input-changed",{bubbles:!0}))}_setValueAndPreserveCaret(t){if(this.focused)try{const e=this._inputNode.selectionStart;this._inputNode.value=t,this._inputNode.selectionStart=e,this._inputNode.selectionEnd=e}catch(e){this._inputNode.value=t}else this._inputNode.value=t}}function ai(t,e){if(function(t){return t?new RegExp("^(|/)"+t.replace(/:[^\s/]+/g,"([\\wÀ-ÖØ-öø-ÿ-]+)")+"(|/)$"):new RegExp("(^$|^/$)")}(e).test(t))return!0}function oi(t){return class extends t{static get properties(){return{route:{type:String,reflect:!0,attribute:"route"},canceled:{type:Boolean}}}constructor(...t){super(...t),this.route="",this.canceled=!1}connectedCallback(...t){super.connectedCallback(...t),this.routing(this.constructor.routes,(...t)=>this.router(...t)),window.addEventListener("route",()=>{this.routing(this.constructor.routes,(...t)=>this.router(...t))}),window.onpopstate=()=>{window.dispatchEvent(new CustomEvent("route"))}}routed(t,e,i,s,n,r){r&&r(t,e,i,s),n(t,e,i,s)}routing(t,e){this.canceled=!0;const i=decodeURI(window.location.pathname),s=decodeURI(window.location.search);let n=t.filter(t=>"*"===t.pattern)[0],r=t.filter(t=>"*"!==t.pattern&&ai(i,t.pattern))[0],a=function(t){return t?JSON.parse('{"'+t.substring(1).replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}(s);r?(r.params=function(t,e){let i={};const s=t.split("/").filter(t=>""!=t),n=e.split("/").filter(t=>""!=t);return s.map((t,e)=>{/^:/.test(t)&&(i[t.substring(1)]=n[e])}),i}(r.pattern,i),r.data=r.data||{},r.authentication&&r.authentication.authenticate&&"function"==typeof r.authentication.authenticate?(this.canceled=!1,Promise.resolve(r.authentication.authenticate.bind(this).call()).then(t=>{this.canceled||(t?r.authorization&&r.authorization.authorize&&"function"==typeof r.authorization.authorize?(this.canceled=!1,Promise.resolve(r.authorization.authorize.bind(this).call()).then(t=>{this.canceled||(t?this.routed(r.name,r.params,a,r.data,e,r.callback):this.routed(r.authorization.unauthorized.name,r.params,a,r.data,e,r.callback))})):this.routed(r.name,r.params,a,r.data,e,r.callback):this.routed(r.authentication.unauthenticated.name,r.params,a,r.data,e,r.callback))})):r.authorization&&r.authorization.authorize&&"function"==typeof r.authorization.authorize?(this.canceled=!1,Promise.resolve(r.authorization.authorize.bind(this).call()).then(t=>{this.canceled||(t?this.routed(r.name,r.params,a,r.data,e,r.callback):this.routed(r.authorization.unauthorized.name,r.params,a,r.data,e,r.callback))})):this.routed(r.name,r.params,a,r.data,e,r.callback)):n&&(n.data=n.data||{},this.routed(n.name,{},a,n.data,e,n.callback))}}}function hi(t){return class extends t{navigate(t){window.history.pushState({},null,t),window.dispatchEvent(new CustomEvent("route"))}}}customElements.define("lion-input",class extends ri{static get properties(){return{readOnly:{type:Boolean,attribute:"readonly",reflect:!0},type:{type:String,reflect:!0},placeholder:{type:String,reflect:!0}}}get slots(){return{...super.slots,input:()=>{const t=document.createElement("input");return this.hasAttribute("value")&&t.setAttribute("value",this.getAttribute("value")),t}}}constructor(){super(),this.readOnly=!1,this.type="text"}requestUpdateInternal(t,e){super.requestUpdateInternal(t,e),"readOnly"===t&&this.Rt()}firstUpdated(t){super.firstUpdated(t),this.Rt()}updated(t){super.updated(t),t.has("type")&&(this._inputNode.type=this.type),t.has("placeholder")&&(this._inputNode.placeholder=this.placeholder)}Rt(){this._inputNode&&(this._inputNode.readOnly=this.readOnly)}});class ci extends(hi(K)){static get properties(){return{href:{type:String}}}static get styles(){return Y`
      a {
        margin: 5px;
        text-decoration: none;
        color: #fff;
      }
    `}constructor(){super(),this.href=""}render(){return j`
      <a href="${this.href}" @click="${this.linkClick}">
        <slot></slot>
      </a>
    `}linkClick(t){t.preventDefault(),this.navigate(this.href)}}customElements.define("nav-link",ci);var li=Y`
    html {
        display: flex;
    }
    :host {
        --orange-bg-color: #FF6200;
    }
`;const ui="AIzaSyDpv51Z_euYXkI42YRMsAZjJJzxFGVcNCI",di="v-galaxy::iyt-dialogue-api::1.x",fi="v-galaxy::route-data-resolver-api::1.x",pi="v-galaxy::basic-event-emitter-api::1.x",mi={home:{part:["snippet"],maxResults:20,safeSearch:"strict"},movies:{part:["snippet"],maxResults:20,q:"marvel's movies",safeSearch:"strict"},learning:{part:["snippet"],maxResults:20,q:"Litelement, Angular, React tutorial",safeSearch:"strict"},subscriptions:void 0,"not-found":void 0};customElements.define("fa-icon",class extends K{static get properties(){return{color:String,iClass:{attribute:"class"},src:String,style:String,size:String,pathPrefix:{attribute:"path-prefix"}}}static get styles(){return Y`
      :host {
        display: inline-block;
        padding: 0;
        margin: 0;
      }
      :host svg {
        fill: var(--fa-icon-fill-color, currentcolor);
        width: var(--fa-icon-width, 19px);
        height: var(--fa-icon-height, 19px);
      }
    `}getSources(t){const e={fas:"solid",far:"regular",fal:"light",fab:"brands",fa:"solid"},i=t=>t.replace("fa-","");let s=(t=>{let s=t.split(" ");return[e[s[0]],i(s[1])]})(t);return`${this.pathPrefix}/@fortawesome/fontawesome-free/sprites/${s[0]}.svg#${s[1]}`}constructor(){super(),this.iClass="",this.src="",this.style="",this.size="",this.color="",this.pathPrefix="node_modules"}firstUpdated(){this.src=this.getSources(this.iClass)}_parseStyles(){return`\n      ${this.size?`width: ${this.size};`:""}\n      ${this.size?`height: ${this.size};`:""}\n      ${this.color?`fill: ${this.color};`:""}\n      ${this.style}\n    `}render(){return j`
      <svg 
        .style="${this._parseStyles()}">
        <use 
          href="${this.src}">
        </use>
      </svg>
    `}});customElements.define("app-logo-element",class extends K{static get styles(){return Y`
            :host {
                display: inline-block;
            }
            .triangle {
                position: relative;
                width: 0px;
                border-bottom: 28px solid #FF6200;
                border-right: 17px solid transparent;
                border-left: 17px solid transparent;
                transform: rotate(90deg);
            }
            .triangle .empty {
                position: absolute;
                top: 6px;
                left: -10px;
                width: 0px;
                border-bottom: 18px solid white;
                border-right: 10px solid transparent;
                border-left: 10px solid transparent;
            }
        `}render(){return j`
        <div class="triangle">
            <div class="empty"></div>
        </div>`}});class gi extends(hi(K)){static get styles(){return[li,Y`
            :host {
                display: block;
                position: sticky;
                top: 0;
            }

            .sidenav {
                height: 100%;
                width: 0;
                position: fixed;
                z-index: 1;
                top: 0;
                left: 0;
                background-color: var(--orange-bg-color);
                overflow-x: hidden;
                transition: 0.5s;
                padding-top: 60px;
            }

            .sidenav ul {
                list-style: none;
                min-width: 250px;
            }

            .sidenav ul li{
                padding: 10px;
            }

            .sidenav .icon {
                vertical-align: middle;
                margin-right: 6px;
            }

            .sidenav a {
                padding: 8px 8px 8px 32px;
                text-decoration: none;
                font-size: 25px;
                color: #818181;
                display: block;
                transition: 0.3s;
            }

            .sidenav a:hover {
                color: #f1f1f1;
            }

            .sidenav .closebtn {
                position: absolute;
                top: 0;
                right: 25px;
                font-size: 36px;
                margin-left: 50px;
                color: #fff;
            }

            nav {
                padding: 6px;
                background-color: #474747;
                display: flex;
                align-items: center;
            }

            .menu {
                font-size:30px;
                cursor:pointer;
                color: #fff;
            }

            .logo {
                margin-left: 10px;
            }

            .navbar-brand {
                display: flex;
                width: max-content;
                text-decoration: none;
            }

            
            .navbar-brand .title {
                font: 1.4em Impact;
                text-decoration: none;
                color: var(--orange-bg-color);
                margin-left: 8px;
            }

            .lion-input-search {
                width: 50%;
                margin-left: 20px;
            }

            .lion-search-btn {
                margin-left: 10px;
                cursor: pointer;
            }

            @media screen and (max-height: 450px) {
                .sidenav {padding-top: 15px;}
                .sidenav a {font-size: 18px;}
            }

            @media screen and (max-width: 414px) and (orientation: portrait) {
                
            }
        `]}openDrawer(t){this.shadowRoot.getElementById("drawer").style.width="250px",t.preventDefault()}closeDrawer(t){this.shadowRoot.getElementById("drawer").style.width="0"}firstUpdated(){const t=new URLSearchParams(location.search).get("q");this.shadowRoot.getElementById("searchInput").value=t}searchClick(t){console.log("e => ",t),this.navigate("search?q="+this.shadowRoot.getElementById("searchInput").value),Fe.get(pi).emit("start-search")}render(){return j`
            <div id="drawer" class="sidenav"  @click="${this.closeDrawer}">
                <a href="javascript:void(0)" class="closebtn">&times;</a>

                <ul>
                    <li>
                        <nav-link href="/">
                          <fa-icon class="fas fa-home icon" color="#ffffff" size="2em"></fa-icon>Home
                        </nav-link>
                    </li>
                    <li>
                        <nav-link href="/subscriptions">
                            <fa-icon class="far fa-bell icon" color="#ffffff" size="2em"></fa-icon>Subscriptions
                        </nav-link>
                    </li>
                    <li>
                        <nav-link href="/movies">
                        <fa-icon class="fas fa-film icon" color="#ffffff" size="2em"></fa-icon>Movies
                        </nav-link>
                    </li>
                    <li>
                        <nav-link href="/learning">
                        <fa-icon class="fas fa-graduation-cap icon" color="#ffffff" size="2em"></fa-icon>Learning
                        </nav-link>
                    </li>
                </ul>
            </div>
            
            <nav class="navbar">
                <span class="menu" @click="${this.openDrawer}">&#9776;</span>
                <a class="navbar-brand" href="#">
                    <app-logo-element class="logo"></app-logo-element>
                    <span class="title">Video Galaxy</span>
                </a>
                <lion-input id="searchInput" class="lion-input-search">
                    <div slot="suffix" class="lion-search-btn">
                        <lion-button @click=${this.searchClick}><fa-icon class="fas fa-search icon" color="#ffffff" size="2em"></fa-icon></lion-button>
                    </div>
                </lion-input>
            </nav>
        `}}customElements.define("header-element",gi);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const vi=(t,e)=>{const i=t.startNode.parentNode,s=void 0===e?t.endNode:e.startNode,n=i.insertBefore(h(),s);i.insertBefore(h(),s);const r=new k(t.options);return r.insertAfterNode(n),r},bi=(t,e)=>(t.setValue(e),t.commit(),t),wi=(t,e,i)=>{const s=t.startNode.parentNode,n=i?i.startNode:t.endNode,r=e.endNode.nextSibling;r!==n&&((t,e,i=null,s=null)=>{for(;e!==i;){const i=e.nextSibling;t.insertBefore(e,s),e=i}})(s,e.startNode,r,n)},yi=t=>{e(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},xi=(t,e,i)=>{const s=new Map;for(let n=e;n<=i;n++)s.set(t[n],n);return s},_i=new WeakMap,Si=new WeakMap,ki=(t=>(...e)=>{const i=t(...e);return f.set(i,!0),i})((t,e,i)=>{let s;return void 0===i?i=e:void 0!==e&&(s=e),e=>{if(!(e instanceof k))throw new Error("repeat can only be used in text bindings");const n=_i.get(e)||[],r=Si.get(e)||[],a=[],o=[],h=[];let c,l,u=0;for(const e of t)h[u]=s?s(e,u):u,o[u]=i(e,u),u++;let d=0,f=n.length-1,p=0,m=o.length-1;for(;d<=f&&p<=m;)if(null===n[d])d++;else if(null===n[f])f--;else if(r[d]===h[p])a[p]=bi(n[d],o[p]),d++,p++;else if(r[f]===h[m])a[m]=bi(n[f],o[m]),f--,m--;else if(r[d]===h[m])a[m]=bi(n[d],o[m]),wi(e,n[d],a[m+1]),d++,m--;else if(r[f]===h[p])a[p]=bi(n[f],o[p]),wi(e,n[f],n[d]),f--,p++;else if(void 0===c&&(c=xi(h,p,m),l=xi(r,d,f)),c.has(r[d]))if(c.has(r[f])){const t=l.get(h[p]),i=void 0!==t?n[t]:null;if(null===i){const t=vi(e,n[d]);bi(t,o[p]),a[p]=t}else a[p]=bi(i,o[p]),wi(e,i,n[d]),n[t]=null;p++}else yi(n[f]),f--;else yi(n[d]),d++;for(;p<=m;){const t=vi(e,a[m+1]);bi(t,o[p]),a[p++]=t}for(;d<=f;){const t=n[d++];null!==t&&yi(t)}_i.set(e,a),Si.set(e,h)}});customElements.define("video-grid-element",class extends K{constructor(){super()}static get properties(){return{snippet:{type:Object},heading:{type:String}}}static get styles(){return Y`
            :host {
                display: block;
            }

            header {
                margin-bottom: 10px;
                font-size: 1.4em;
                font-weight: 600;
            }

            a {
                text-decoration: none;
                color: #2b2b2b;
            }

            .thumb-row {
                display: flex;
                flex-wrap: wrap;
            }

            .thumb {
                margin-right: 18px;
                margin-bottom: 18px;
                display: flex;
                flex-direction: column;
                max-width: 320px;
                justify-content: space-between;
                -webkit-box-shadow: 10px 10px 33px -12px rgba(0,0,0,0.75);
                -moz-box-shadow: 10px 10px 33px -12px rgba(0,0,0,0.75);
                box-shadow: 10px 10px 33px -12px rgba(0,0,0,0.75);
            }

            .thumb img {
                max-width: 320px;
                max-height: 180px;
            }

            .thumb .title {
                margin-right: 5px;
                font-weight: 600;
                padding: 0 10px;
            }

            .thumb .channelTitle {
                font-size: 0.8em;
                padding: 10px;
            }
    `}render(){console.log("video snippets...",this.snippet);let{items:t}=this.snippet.result,e=j`No contents to show!`;return t&&(e=j`
            <section>
                <header>
                ${this.heading}
                </header>
                <section class="thumb-row">
                    ${ki(t,t=>t.id.videoId,(t,e)=>j`<a class="thumb" target="_blank" href="https://www.youtube.com/watch?v=${t.id.videoId}">
                                    <section>
                                        <img alt="${t.snippet.title}" src="${t.snippet.thumbnails.medium.url}">
                                        <div class="title">${t.snippet.title}</div>
                                    </section>
                                    <div class="channelTitle">${t.snippet.channelTitle}</div>
                    </a>
                        `)}
                </section>
            </section>`),e}});customElements.define("home-contents-element",class extends K{constructor(){super(),this.ytApi=Fe.get(di)}static get properties(){return{data:{type:Object}}}static get styles(){return Y`
            :host {
                display: block;
            }
        `}async connectedCallback(){this.recommendedData=await this.ytApi.loadContents(mi.home),super.connectedCallback()}render(){return console.log("render home...",this.recommendedData),j`<video-grid-element snippet='${JSON.stringify(this.recommendedData)}' heading='Pick for you'></video-grid-element>`}});customElements.define("movies-contents-element",class extends K{constructor(){super(),this.ytApi=Fe.get(di)}static get styles(){return Y`
            :host {
                display: block;
            }
        `}async connectedCallback(){this.moviesData=await this.ytApi.loadContents(mi.movies),super.connectedCallback()}render(){return console.log("render movies...",this.moviesData),j`<video-grid-element snippet='${JSON.stringify(this.moviesData)}' heading='Movies'></video-grid-element>`}});customElements.define("search-contents-element",class extends K{constructor(){super(),this.eventEmitter=Fe.get(pi),this.eventEmitter.subscribe("start-search",this.search),this.ytApi=Fe.get(di)}static get styles(){return Y`
            :host {
                display: block;
            }
        `}async requestData(){const t=new URLSearchParams(location.search).get("q");this.data=await this.ytApi.loadContents({part:["snippet"],maxResults:20,q:t,safeSearch:"strict"})}async search(){await this.requestData(),this.requestUpdate()}async connectedCallback(){await this.requestData(),super.connectedCallback()}updated(t){console.log("updated ")}render(){return j`<video-grid-element snippet='${JSON.stringify(this.data)}' heading='Search'></video-grid-element>`}});customElements.define("learning-element",class extends K{constructor(){super(),this.ytApi=Fe.get(di)}static get styles(){return Y`
            :host {
                display: block;
            }
        `}async connectedCallback(){this.learningData=await this.ytApi.loadContents(mi.learning),super.connectedCallback()}render(){return j`<video-grid-element snippet='${JSON.stringify(this.learningData)}' heading='Learning tutorials'></video-grid-element>`}});class Mi{constructor(){this.initGoogleApi()}initGoogleApi(){gapi.load("client"),gapi.client.setApiKey(ui)}async loadYoutubeApi(){gapi.client.youtube||await gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")}async loadContents(t){return await this.loadYoutubeApi(),gapi.client.youtube.search.list(t)}}class $i extends(function(t){return class extends t{static get properties(){return{activeRoute:{type:String,reflect:!0,attribute:"active-route"}}}attributeChangedCallback(...t){super.attributeChangedCallback(...t),t.some(t=>"active-route"===t)&&this.outlet()}connectedCallback(...t){super.connectedCallback(...t),setTimeout(()=>{this.outlet()})}outlet(){Array.from(this.querySelectorAll("[route]")).map(t=>{t.style.display="none"}),Array.from(this.shadowRoot.querySelectorAll("[route]")).map(t=>{t.style.display="none"}),this.activeRoute&&(Array.from(this.querySelectorAll(`[route~=${this.activeRoute}]`)).map(t=>{t.style.display=""}),Array.from(this.shadowRoot.querySelectorAll(`[route~=${this.activeRoute}]`)).map(t=>{t.style.display=""}))}}}(K)){render(){return j`
      <slot></slot>
    `}}customElements.define("main-wrapper",$i);class Ci{constructor(){this.ytApi=Fe.get(di)}async getContents(t){return this.data=await this.ytApi.loadContents(mi[t]),this.data}}class Ei{constructor(){this.events={}}subscribe(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)}unSubscribe(t,e){if(this.events[t])for(let i=0;i<this.events[t].length;i++)if(this.events[t][i]===e){this.events[t].splice(i,1);break}}emit(t,e){this.events[t]&&this.events[t].forEach((function(t){t instanceof AsyncFunction==!0?console.log("async function found"):t(e)}))}}class Ai extends(oi(K)){static get styles(){return Y`
      .container {
        padding:14px;
      }
    `}static get properties(){return{route:{type:String},params:{type:Object},query:{type:Object},data:{type:Object}}}static get routes(){return[{name:"home",pattern:"",data:{title:"Home"}},{name:"subscriptions",pattern:"subscriptions"},{name:"movies",pattern:"movies"},{name:"learning",pattern:"learning"},{name:"search",pattern:"search"},{name:"not-found",pattern:"*"}]}constructor(){super(),this.init()}init(){Fe.set(di,new Mi),Fe.set(fi,new Ci),Fe.set(pi,new Ei),this.route="",this.params={},this.query={},this.data={}}router(t,e,i,s){this.route=t,this.params=e,this.query=i,this.data=s,console.log("route activate..",t,e,i,s)}render(){return j`
      <header-element></header-element>
      <div class="container">
        <main-wrapper active-route=${this.route}>
          ${"home"===this.route?j`<home-contents-element route="home"></home-contents-element>`:j``}
          
          <h1 route="subscriptions">subscriptions</h1>
          ${"movies"===this.route?j`<movies-contents-element route="movies"></movies-contents-element>`:j``}
          ${"learning"===this.route?j`<learning-element route="learning"></learning-element>`:j``}
          ${"search"===this.route?j`<search-contents-element route="search"></search-contents-element>`:j``}
        </main-wrapper>
    </div>
    `}}window.customElements.define("app-root",Ai);export{Ai as AppRoot};
