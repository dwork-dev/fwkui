var{getPrototypeOf:S,fromEntries:We,entries:q,keys:be,hasOwn:me}=Object,H,gt,j,Y,Re={isConnected:1},{get:Be,set:Le,deleteProperty:bt,ownKeys:mt}=Reflect,J,xt={},yt=S(Re),Ie=S(S),P,xe,T=Symbol(),Xe=Symbol(),Q=Symbol(),N=Symbol(),G=Symbol(),Ke=Symbol(),nn=Object.getPrototypeOf(async function(){}).constructor,vt=e=>(e[Xe]=1,e),D=e=>e instanceof Object&&!(e instanceof Function)&&!e[Ke],Ye=(e,t,n,r)=>(e??(setTimeout(n,r),new Set)).add(t),Ge=(e,t,n)=>{let r=j;j=t;try{return e(n)}catch{return n}finally{j=r}},ee=e=>{if(!Array.isArray(e))return[];let t=[];for(let n=0;n<e.length;n++)e[n]._dom?.isConnected&&t.push(e[n]);return t},Ce=e=>J=Ye(J,e,()=>{for(let t of J)t._bindings=ee(t._bindings),t._listeners=ee(t._listeners);J=P},1e3),z={get value(){return j?._getters?.add(this),this.rawValue},get oldValue(){return j?._getters?.add(this),this._oldValue},set value(e){j?._setters?.add(this),e!==this.rawValue&&(this.rawValue=e,this._bindings.length+this._listeners.length?(gt?.add(this),H=Ye(H,this,At)):this._oldValue=e)}},ye=e=>S(e)===z,V=e=>({__proto__:z,rawValue:e,_oldValue:e,_bindings:[],_listeners:[]}),L=(e,t)=>{let n={_getters:new Set,_setters:new Set},r={f:e},o=Y;Y=[];let i=Ge(e,n,t);i=(i??document).nodeType?i:new Text(i);for(let s of n._getters)n._setters.has(s)||(Ce(s),s._bindings.push(r));for(let s of Y)s._dom=i;return Y=o,r._dom=i},M=(e,t=V(),n)=>{let r={_getters:new Set,_setters:new Set},o={f:e,s:t};o._dom=n??Y?.push(o)??Re,t.value=Ge(e,r,t.rawValue);for(let i of r._getters)r._setters.has(i)||(Ce(i),i._listeners.push(o));return t},qe=e=>{if(e?.[Xe]){let t=V();return M(()=>{let n=e();D(t.rawValue)&&D(n)?ve(t.rawValue,n):t.value=te(n)}),t}else return V(te(e))},wt=e=>{let t=Array.isArray(e)?[]:{__proto__:S(e)};for(let[n,r]of q(e))t[n]=qe(r);return t[Q]=[],t[N]=V(1),t},E=(e="append")=>(t,...n)=>{let r=[];for(let i of n.flat(1/0)){let s=S(i??0),c=s===z?L(()=>i.value):s===Ie?L(i):i;c!=P&&c.nodeType!=9&&r.push(c)}return e={append:"append",prepend:"prepend",before:"before",after:"after",replaceWith:"replaceWith",replaceChildren:"replaceChildren"}[e]??"append",t[e](...r),t},Ae=E(),Ue=(e,t,...n)=>{let[{is:r,...o},...i]=S(n[0]??0)===yt?n:[{},...n],s=e?document.createElementNS(e,t,{is:r}):t=="fragment"?document.createDocumentFragment():document.createElement(t,{is:r});typeof o?.ref=="function"&&o.ref(s);for(let[c,l]of Object.entries(o)){if(c==="ref")continue;let u=p=>p?Object.getOwnPropertyDescriptor(p,c)??u(S(p)):P,d=t+","+c,a=xt[d]??=u(S(s))?.set??0,f=c.startsWith("on")?(p,_)=>{let w=c.slice(2);s.removeEventListener(w,_),s.addEventListener(w,p)}:a?a.bind(s):s.setAttribute.bind(s,c),h=S(l??0);c.startsWith("on")||h===Ie&&(l=M(l),h=z),h===z?L(()=>(f(l.value,l._oldValue),s)):f(l)}return Ae(s,i)},Me=e=>({get:(t,n)=>Ue.bind(P,e,n)}),St=(e,t)=>{if(!t)return e?.remove(),null;if(!e)return t;if(e.nodeType===Node.TEXT_NODE&&t.nodeType===Node.TEXT_NODE)return e.textContent!==t.textContent&&(e.textContent=t.textContent),e;if(e.nodeName===t.nodeName){e.textContent!==t.textContent&&(e.textContent=t.textContent);let n=t.getAttribute("src");n&&e.getAttribute("src")!==n&&e.setAttribute("src",n);let r=t.getAttribute("class");return r&&e.getAttribute("class")!==r&&e.setAttribute("class",r),e}return e.replaceWith(t),t},_t=e=>e&&(e.tagName==="IMG"||e.tagName==="VIDEO"||e.textContent&&e.offsetWidth*e.offsetHeight>1e4),Ct=(e,t)=>!e||!t?!0:e.nodeType===Node.TEXT_NODE&&t.nodeType===Node.TEXT_NODE?e.textContent!==t.textContent:e.nodeName!==t.nodeName?!0:e.textContent!==t.textContent||e.getAttribute("src")!==t.getAttribute("src"),Pe=(e,t)=>Ct(e,t)?e.nodeType===Node.TEXT_NODE&&t.nodeType===Node.TEXT_NODE?(e.textContent=t.textContent,e):(e.replaceWith(t),t):e,At=()=>{let e=[],t=[],n=new Map,r=new Map,o=[],i=[],s=0;for(let l of H)l.rawValue!==l._oldValue&&(e.push(l),t.push(l));for(H=void 0;s<t.length;){let l=t[s++];if(l.rawValue!==l._oldValue){l._oldValue=l.rawValue;let u=ee(l._listeners);l._listeners=u;for(let d=0;d<u.length;d++){let a=u[d],f=a.f.toString()+a.s;n.has(f)||(M(a.f,a.s,a._dom),n.set(f,!0),a.s&&a.s.rawValue!==a.s._oldValue&&t.push(a.s))}}}for(let l=0;l<e.length;l++){let u=e[l],d=ee(u._bindings);u._bindings=d;for(let a=0;a<d.length;a++){let f=d[a],h=f.f.toString()+f._dom;r.has(h)||(_t(f._dom)?o.push(f):i.push(f),r.set(h,!0))}}let c=document.createDocumentFragment();for(let l=0;l<o.length;l++){let u=o[l],d=L(u.f,u._dom),a=Pe(u._dom,d);c.appendChild(a)}o.length>0&&document.body.appendChild(c),requestIdleCallback(()=>{let l=document.createDocumentFragment();for(let u=0;u<i.length;u++){let d=i[u],a=L(d.f,d._dom),f=Pe(d._dom,a);l.appendChild(f)}i.length>0&&document.body.appendChild(l)},{timeout:1e3})},Ze={get:(e,t,n)=>t===T?e:me(e,t)?Array.isArray(e)&&t==="length"?e.length:e[t].value:(e[N].value,Be(e,t,n)),set:(e,t,n,r)=>me(e,t)?(Array.isArray(e)&&t==="length"?n!==e.length&&(++e[N].value,e.length=n):e[t].value=te(n),!0):t in e?Le(e,t,n,r):Le(e,t,qe(n))?(++e[N].value,ke(e).forEach(He.bind(P,r,t,e[t],xe)),!0):!1,deleteProperty:(e,t)=>(bt(e,t)&&Tt(e,t),++e[N].value),ownKeys:e=>(e[N].value,mt(e))},Je=e=>!!(!D(e)||e[T]),te=e=>Je(e)?e:new Proxy(wt(e),Ze),kt=e=>(e[Ke]=1,e),Ot=e=>e[T],Et=e=>new Proxy(e,{get:(t,n,r)=>S(t[n]??0)===z?{value:raw(t[n].rawValue)}:Be(t,n,r)}),Nt=e=>e?.[T]?new Proxy(Et(e[T]),Ze):e,ke=e=>e[Q]=e[Q].filter(t=>t._containerDom.isConnected),He=(e,t,n,r,{_containerDom:o,f:i})=>{let s=Array.isArray(e),c=s?Number(t):t;Ae(o,()=>o[G][t]=i(n,()=>delete e[t],c)),s&&!r&&c!==e.length-1&&o.insertBefore(o.lastChild,o[G][be(e).find(l=>Number(l)>c)])},Tt=(e,t)=>{for(let n of ke(e)){let r=n._containerDom[G];r[t]?.remove(),delete r[t]}},Vt=(e,t,n)=>{let r={_containerDom:e instanceof Function?e():e,f:n},o=t[T];r._containerDom[G]={},o[Q].push(r),Ce(o);for(let[i,s]of q(o))He(t,i,s,1,r);return r._containerDom},Qe=(e,t)=>{for(let[o,i]of q(t)){let s=e[o];D(s)&&D(i)?Qe(s,i):e[o]=i}for(let o in e)me(t,o)||delete e[o];let n=be(t),r=Array.isArray(e);if(r||be(e).some((o,i)=>o!==n[i])){let o=e[T];if(r)e.length=t.length;else{++o[N].value;let i={...o};for(let s of n)delete o[s];for(let s of n)o[s]=i[s]}for(let{_containerDom:i}of ke(o)){let{firstChild:s,[G]:c}=i;for(let l of n)s===c[l]?s=s.nextSibling:i.insertBefore(c[l],s)}}return e},ve=(e,t)=>{xe=1;try{return Qe(e,t instanceof Function?Array.isArray(e)?t(e.filter(n=>1)):We(t(q(e))):t)}finally{xe=P}},we=e=>Array.isArray(e)?e.filter(t=>t!==void 0&&!Number.isNaN(t)).map(we):D(e)?We(q(e).map(([t,n])=>[t,we(n)])):e,Ft=(e,t)=>St(e,L(t,e)),et=new Proxy(e=>new Proxy(Ue,Me(e)),Me()),Se=e=>Object.entries(e).reduce((t,n)=>t+n[0].split(/(?=[A-Z])/).join("-").toLowerCase()+":"+n[1]+";",""),ge=(e,t,n)=>{if(t==="style"){let r=Se(n);e.setAttribute(t,r);return}if(typeof n=="number"&&t==="tabIndex"){e.setAttribute("tabindex",n.toString());return}if(typeof n=="string"){if(t==="className"||t==="class"){e.setAttribute("class",n);return}if(t==="htmlFor"){e.setAttribute("for",n);return}e.setAttribute(t,n);return}if(typeof n=="boolean"){if(n){e.setAttribute(t,"");return}e.removeAttribute(t)}},$t=function(e,t,...n){return jt(e,{...t,children:n})},jt=function(e,{children:t,style:n,$ref:r=V(null),ref:o,...i}){if(typeof e=="string"){let s=et[e](t);r.value=s;for(let[c,l]of Object.entries(i??{})){if(typeof l=="function"&&!c.startsWith("on")){M(()=>{let u=l();ge(s,c,u)});continue}if(typeof l=="function"&&c.startsWith("on")){s.addEventListener(c.replace("on","").toLowerCase(),l);continue}if(typeof l=="object"&&"value"in l){M(()=>{ge(s,c,l.value)});continue}ge(s,c,l)}return o&&(typeof o=="function"?constructor.name=="AsyncFunction"?(async()=>await o(s))():o(s):typeof o=="object"&&ye(o)&&(o.value=s)),n&&s.setAttribute("style",Se(n)),s}if(typeof e=="function"){let s=null;return e.toString().startsWith("class")?s=new e({$ref:r,...i,children:t})?.renderDom():s=e({$ref:r,...i,children:t}),r.value=s,s&&(n&&s.setAttribute("style",Se(n)),o&&(typeof o=="function"?e.constructor.name=="AsyncFunction"?(async()=>await o(s))():o(s):typeof o=="object"&&ye(o)&&(o.value=s))),s}return null},Dt=function({children:e}){let t=document.createDocumentFragment();return e.forEach(n=>{t.appendChild(n)}),t},_e=class{constructor(t){this.props=t,this.$ref=t.$ref??V(null),this.init()}init(){}mount(t){}render(){}renderDom(){let t=this.render();return this.$ref.value=t,setTimeout(()=>{this.mount(t)}),t}},g={tags:et,hydrate:Ft,insertNodes:E,append:Ae,prepend:E("prepend"),before:E("before"),after:E("after"),replaceWith:E("replaceWith"),replaceChildren:E("replaceChildren"),stateValue:V,derive:M,calcFnc:vt,isStateValue:ye,isStateObject:Je,stateObject:te,noStateObject:kt,stateFields:Ot,rawObject:Nt,updateStateObject:ve,replaceState:ve,listObjectDom:Vt,compact:we,h:$t,f:Dt,jsxc:_e};var zt=Object.prototype.hasOwnProperty,y="~";function U(){}Object.create&&(U.prototype=Object.create(null),new U().__proto__||(y=!1));function Lt(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function tt(e,t,n,r,o){if(typeof n!="function")throw new TypeError("The listener must be a function");var i=new Lt(n,r||e,o),s=y?y+t:t;return e._events[s]?e._events[s].fn?e._events[s]=[e._events[s],i]:e._events[s].push(i):(e._events[s]=i,e._eventsCount++),e}function ne(e,t){--e._eventsCount===0?e._events=new U:delete e._events[t]}function x(){this._events=new U,this._eventsCount=0}x.prototype.eventNames=function(){var t=[],n,r;if(this._eventsCount===0)return t;for(r in n=this._events)zt.call(n,r)&&t.push(y?r.slice(1):r);return Object.getOwnPropertySymbols?t.concat(Object.getOwnPropertySymbols(n)):t};x.prototype.listeners=function(t){var n=y?y+t:t,r=this._events[n];if(!r)return[];if(r.fn)return[r.fn];for(var o=0,i=r.length,s=new Array(i);o<i;o++)s[o]=r[o].fn;return s};x.prototype.listenerCount=function(t){var n=y?y+t:t,r=this._events[n];return r?r.fn?1:r.length:0};x.prototype.emit=function(t,n,r,o,i,s){var c=y?y+t:t;if(!this._events[c])return!1;var l=this._events[c],u=arguments.length,d,a;if(l.fn){switch(l.once&&this.removeListener(t,l.fn,void 0,!0),u){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,n),!0;case 3:return l.fn.call(l.context,n,r),!0;case 4:return l.fn.call(l.context,n,r,o),!0;case 5:return l.fn.call(l.context,n,r,o,i),!0;case 6:return l.fn.call(l.context,n,r,o,i,s),!0}for(a=1,d=new Array(u-1);a<u;a++)d[a-1]=arguments[a];l.fn.apply(l.context,d)}else{var f=l.length,h;for(a=0;a<f;a++)switch(l[a].once&&this.removeListener(t,l[a].fn,void 0,!0),u){case 1:l[a].fn.call(l[a].context);break;case 2:l[a].fn.call(l[a].context,n);break;case 3:l[a].fn.call(l[a].context,n,r);break;case 4:l[a].fn.call(l[a].context,n,r,o);break;default:if(!d)for(h=1,d=new Array(u-1);h<u;h++)d[h-1]=arguments[h];l[a].fn.apply(l[a].context,d)}}return!0};x.prototype.on=function(t,n,r){return tt(this,t,n,r,!1)};x.prototype.once=function(t,n,r){return tt(this,t,n,r,!0)};x.prototype.removeListener=function(t,n,r,o){var i=y?y+t:t;if(!this._events[i])return this;if(!n)return ne(this,i),this;var s=this._events[i];if(s.fn)s.fn===n&&(!o||s.once)&&(!r||s.context===r)&&ne(this,i);else{for(var c=0,l=[],u=s.length;c<u;c++)(s[c].fn!==n||o&&!s[c].once||r&&s[c].context!==r)&&l.push(s[c]);l.length?this._events[i]=l.length===1?l[0]:l:ne(this,i)}return this};x.prototype.removeAllListeners=function(t){var n;return t?(n=y?y+t:t,this._events[n]&&ne(this,n)):(this._events=new U,this._eventsCount=0),this};x.prototype.off=x.prototype.removeListener;x.prototype.addListener=x.prototype.on;x.prefixed=y;x.EventEmitter=x;var nt=x;var Mt=["html,body,*{ font-family: 'Roboto', sans-serif;font-style: normal;line-height: 1.4;max-width:inherit;max-height:inherit;overflow:inherit;}","html[x-css-reset]{display: flex; min-height: 100%; flex-direction: column;}","[x-app] * {display: none;}","[x-css-reset] ::before, [x-css-reset] ::after { box-sizing: border-box;  border-width: 0; border-style: solid; }","[x-css-reset] :-moz-focusring {outline: auto;}","[x-css-reset] :-moz-ui-invalid { box-shadow: none;}","[x-css-reset] :disabled {cursor: default;}","[x-css-reset] ::-webkit-inner-spin-button,[x-css-reset] ::-webkit-outer-spin-button { height: auto;}","[x-css-reset] ::-webkit-search-decoration {-webkit-appearance: none;}","[x-css-reset] ::-webkit-file-upload-button {-webkit-appearance: button;font: inherit;}",'[x-css-reset] [type="search"] { outline-offset: -2px;}',"[x-css-reset] [hidden] {display: none;}","[x-css-reset] hr { height: 0; color: inherit; border-top-width: 1px;}","[x-css-reset] abbr:where([title]) { text-decoration: underline dotted; }","[x-css-reset] a {color: inherit; text-decoration: inherit; }","[x-css-reset] b,[x-css-reset] strong {font-weight: bolder; }","[x-css-reset] small {font-size: 80%; }","[x-css-reset] sub,[x-css-reset] sup {font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; }","[x-css-reset] sub {bottom: -0.25em;}","[x-css-reset] sup {top: -0.5em;}","[x-css-reset] table { text-indent: 0; border-color: inherit; border-collapse: collapse;}","[x-css-reset]  button,[x-css-reset] input,[x-css-reset] optgroup,[x-css-reset] select,[x-css-reset] textarea {font-family: inherit;font-feature-settings: inherit;font-variation-settings: inherit;font-size: 100%;font-weight: inherit;line-height: inherit;color: inherit;margin: 0;padding: 0;}","[x-css-reset]  button,[x-css-reset] select { text-transform: none;}",'[x-css-reset] button,[x-css-reset] [type="button"],[x-css-reset] [type="reset"],[x-css-reset] [type="submit"] {background-color: transparent;background-image: none;}','[x-css-reset] button,[x-css-reset] [role="button"] {cursor: pointer;}',"[x-css-reset] progress {vertical-align: baseline;}","[x-css-reset] blockquote,[x-css-reset] dl,[x-css-reset] dd,[x-css-reset] h1,[x-css-reset] h2,[x-css-reset] h3,[x-css-reset] h4,[x-css-reset] h5,[x-css-reset] h6,[x-css-reset] hr,[x-css-reset] figure,[x-css-reset] p,[x-css-reset] pre {margin: 0;}","[x-css-reset] fieldset {margin: 0;padding: 0;}","[x-css-reset] legend {padding: 0;}","[x-css-reset] ol,[x-css-reset] ul,[x-css-reset] menu {list-style: none;margin: 0;padding: 0;}","[x-css-reset] dialog {padding: 0;}","[x-css-reset] textarea {resize: vertical;}","[x-css-reset] input::placeholder,[x-css-reset] textarea::placeholder {opacity: 1;color: #9ca3af;}","[x-css-reset] summary {display: list-item;}","[x-css-reset] img,[x-css-reset] svg,[x-css-reset] video,[x-css-reset] canvas,[x-css-reset] audio,[x-css-reset] iframe,[x-css-reset] embed,[x-css-reset] object {display: block}","[x-css-reset] img,[x-css-reset] video {max-width: 100%;height: auto;}","[x-css-reset] form{margin-block-end: unset;}","[x-css-reset] h1,[x-css-reset] h2,[x-css-reset] h3,[x-css-reset] h4,[x-css-reset] h5,[x-css-reset] h6{color: var(--c-black);font-weight: 700;line-height: 1.5;margin: 0;padding: 0; }","[x-css-reset] h1{ font-size: var(--fs-4xl); }","[x-css-reset] h2{  font-size: var(--fs-3xl);}","[x-css-reset] h3{ font-size: var(--fs-2xl); }","[x-css-reset] h4{ font-size: var(--fs-xl);}","[x-css-reset] h5{ font-size: var(--fs-lg);}","[x-css-reset] h6{  font-size: var(--fs-m); }","[x-css-reset]  button { font-size: var(--fs-m); }","input.TMA,select.TMA,textarea.TMA{border:1px solid #D9D9D9;}","input.TMA,select.TMA,textarea.TMA{ padding: 0.65rem 1rem; border-radius: 0.3rem;}",`select.TMA{ -webkit-appearance: none;-moz-appearance: none;appearance: none; min-width:80px; background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>') no-repeat right 8px center; background-size: 12px;background-color:#fff;}`,"button.TMA{white-space:nowrap; border-radius: 5px;margin:auto 8px;padding: 0.5rem 1rem; font-size: 1rem; background-color: transparent;cursor: pointer;}","button.TMA2{white-space:nowrap; border-radius: 5px;margin:auto 8px;padding: 4px 8px; font-size: 1rem; background-color: transparent;cursor: pointer;}","button.Btn1{ border: 1px solid #004fad; color: #004fad;}","button.Btn2{border: none; background-color: #004fad;color: #FFFFFF;}","button.Btn3{ border: 1px solid rgb(255, 0, 0); color: rgb(255, 0, 0);}","button.Btn4{border: 1px solid rgb(255, 0, 0);background-color:rgb(255, 0, 0);color: #FFFFFF;}","button:disabled.Btn1{ border-color:#004fadb3; background-color: #f3f3f3;}","button:disabled.Btn2{background-color:#004fadb3}","td button.TMA{padding: 4px 8px;}",".Row.TMA{margin:8px auto;}",".Icon {font-family: 'icon'; font-weight: normal;font-style: normal; font-size: 24px;line-height: 1;letter-spacing: normal;text-transform: none;display: inline-block;white-space: nowrap; word-wrap: normal; direction: ltr; -webkit-font-smoothing: antialiased;}"],Pt="@layer l0{"+Mt.join("")+"}",re=Pt;var se=[],Wt=[],oe={},Rt={c:"color",fs:"font-size",ff:"font-family",fw:"font-weight",fst:"font-style",ta:"text-align",td:"text-decoration",lh:"line-height",ls:"letter-spacing",ws:"word-spacing",va:"vertical-align",bg:"background",bgc:"background-color",bgi:"background-image",bgp:"background-position",bgr:"background-repeat",bgs:"background-size",bgo:"background-origin",bgcl:"background-clip",bga:"background-attachment",o:"opacity",d:"display",pos:"position",t:"top",r:"right",b:"bottom",l:"left",fl:"float",cl:"clear",z:"z-index",w:"width",h:"height",minw:"min-width",minh:"min-height",maxw:"max-width",maxh:"max-height",m:"margin",mt:"margin-top",mr:"margin-right",mb:"margin-bottom",ml:"margin-left",p:"padding",pt:"padding-top",pr:"padding-right",pb:"padding-bottom",pl:"padding-left",bd:"border",bdt:"border-top",bdr:"border-right",bdb:"border-bottom",bdl:"border-left",bdw:"border-width",bds:"border-style",bdc:"border-color",bdra:"border-radius",fx:"flex",fxd:"flex-direction",fxw:"flex-wrap",jc:"justify-content",ai:"align-items",ac:"align-content",as:"align-self",fxg:"flex-grow",fxs:"flex-shrink",fxb:"flex-basis",or:"order",gtc:"grid-template-columns",gtr:"grid-template-rows",gac:"grid-auto-columns",gar:"grid-auto-rows",gc:"grid-column",gr:"grid-row",g:"gap",tf:"transform",ts:"transition",bxs:"box-sizing",bxsh:"box-shadow",ft:"filter",an:"animation",cr:"cursor",ov:"overflow",v:"visibility",pte:"pointer-events"},Bt={t:"transparent",cc:"currentColor",i:"inherit",a:"auto",n:"none",s:"start",e:"end",c:"center",ba:"baseline",st:"stretch",sb:"space-between",sa:"space-around",ss:"stretch",b:"block",in:"inline",inb:"inline-block",f:"flex",g:"grid",l:"left",r:"right",j:"justify",u:"underline",ovl:"overline",lt:"line-through",sc:"scroll",h:"hidden",v:"visible",nrep:"no-repeat",rep:"repeat",repx:"repeat-x",repy:"repeat-y",repn:"repeat no-repeat"},It=()=>{let e=window?.$?.cssModules??{};return{pos:{s:"static",r:"relative",a:"absolute",f:"fixed"},fxd:{c:"column",cr:"column-reverse",r:"row",rr:"row-reverse"},fxw:{n:"nowrap",w:"wrap",wr:"wrap-reverse"},...e}},st=(e,t)=>{let n=0,r=e.length-1;for(;n<=r;){let o=Math.floor((n+r)/2);if(e[o]===t)return o;e[o]<t?n=o+1:r=o-1}return-1},Oe=(e,t)=>{if(e.sort(),st(e,t)!==-1)return!1;let r=0;for(;r<e.length&&e[r]<t;)r++;return e.splice(r,0,t),!0},rt=(e,t)=>st(e,t)!==-1,Ee=e=>{if(rt(se,e)||rt(Wt,e))return null;let t=/^((?<m>xs|sm|md|lg|xl|2xl):)?(?<l>\d*)?(?<p>([a-z])((-)?[a-z])*)(?<v>(([A-Z#!])|((-)?[0-9])|(--)|({))([^@]+)?)(@(?<s>.*))?$/,{m:n="default",l:r=0,p:o,v:i,s=""}=t.exec(e)?.groups??{};if(!o||!i)return Oe(se,e),null;let c=o.split("-"),l=c.shift(),u=c.join("-"),d=Rt[l],a=d?d+(u?"-"+u:""):o,f=i[0],h=i.substring(1),p=f!=="!"?i:h,_=f=="!";p=p[0].toLowerCase()+p.substring(1);let w=It();p.startsWith("--")?p="var("+p+")":p.startsWith("{")&&p.endsWith("}")?p=p.substring(1,p.length-1):w[o]?p=w[o]?.[p]??p:p=Bt[p]||p,p=p.replace(/;/g," ");let W=s.replace(/;/g," "),A=CSS.escape(e),ae=`selector(${A}${W})`;if(W&&!CSS.supports(ae))return Oe(se,e),null;let m=p+(_?" !important":""),C=[a+":"+m];switch(a){case"mx":C=[`margin-left:${m}`,`margin-right:${m}`];break;case"my":C=[`margin-top:${m}`,`margin-bottom:${m}`];break;case"px":C=[`padding-left:${m}`,`padding-right:${m}`];break;case"py":C=[`padding-top:${m}`,`padding-bottom:${m}`];break;case"bdx":C=[`border-left:${m}`,`border-right:${m}`];break;case"bdy":C=[`border-top:${m}`,`border-bottom:${m}`];break}return C.every(R=>CSS.supports(R))?{media:n,layer:r,className:A,property:C.join(";"),selector:s}:(Oe(se,e),null)};function Xt(e){var t=/class="([^"]+)"/g,n=[];return[...e.matchAll(t)].forEach(r=>n=n.concat(r[1].split(" "))),[...new Set(n)]}function ot(e=[]){for(let r of e){var t=[...r?.classList||[]];if(t.length>0){var n=[];let o=t.filter(s=>s&&!(s.charCodeAt()>=65&&s.charCodeAt()<=90)),i=t.filter(s=>!o.includes(s));if(o.length>0){let s=[];o.forEach(c=>{if(!oe[c]){let l=Yt(3);s.push(l),oe[c]=l}}),o=o.map(c=>oe[c]),n=[...i,...s]}}if(r.children.length>0){let o=ot(r.children)}}return Object.keys(oe)}function ie(e){return e?ot([e]):[]}function it(e,t){if(typeof t!="function")throw new Error("Callback is not a function");if(!e)return;let n=null;e instanceof Document?n=e.documentElement:(e instanceof ShadowRoot||e instanceof HTMLElement)&&(n=e),n&&(t(ie(e)),new MutationObserver(r=>{for(let o of r)if(o.type=="attributes"&&o.attributeName=="class"){if(o.target.nodeType==1){let i=o.target.className||"",s=o.oldValue||"",c=i.split(" ").map(u=>u.trim()).filter(u=>u),l=s.split(" ").map(u=>u.trim()).filter(u=>u);c=c.filter(u=>!l.includes(u)),typeof t=="function"&&t([...new Set(c)])}}else if(o.type=="childList"&&o.addedNodes.length>0){let i=[...o.addedNodes].filter(s=>s.nodeType==1).map(s=>ie(s)).flat(1/0).map(s=>s.trim()).filter(s=>s);typeof t=="function"&&t([...new Set(i)])}}).observe(n,{attributes:!0,attributeOldValue:!0,attributeFilter:["class"],childList:!0,subtree:!0}))}function lt(e){let t=Ee(e);if(!t)return null;let{media:n,layer:r,property:o,selector:i,className:s}=t;return{layer:r,media:n,className:`.${s}${i}`,property:o}}function Kt(e){let t={default:{media:"",data:new Set},xs:{media:"screen and (max-width: 575px)",data:new Set},sm:{media:"screen and (min-width: 576px)",data:new Set},md:{media:"screen and (min-width: 768px)",data:new Set},lg:{media:"screen and (min-width: 992px)",data:new Set},xl:{media:"screen and (min-width: 1200px)",data:new Set},"2xl":{media:"screen and (min-width: 1400px)",data:new Set}};ie(e).forEach(r=>{let o=lt(r),i=o.className;var s=`@layer l${o.layer}{${i}{${o.property}}}`;t[o.media].data.add(s)});let n={};return Object.keys(t).forEach(r=>{n[r]={meta:t[r].media,data:[...t[r].data]}}),JSON.stringify(n)}function Yt(e=1){let t="",n=Date.now().toString(32).slice(6).toUpperCase();for(let o=0;o<e;o++)t+=String.fromCharCode(Math.floor(Math.random()*25+65));return String.fromCharCode(Math.floor(Math.random()*25+65))+n+t}function Gt(e=document,t){let n=e?.getRootNode();if(!n)return;let r=[],o=new nt,i={default:new Set,xs:new Set,sm:new Set,md:new Set,lg:new Set,xl:new Set,"2xl":new Set},s={root:new CSSStyleSheet,default:new CSSStyleSheet,xs:new CSSStyleSheet({media:"screen and (max-width: 575px)"}),sm:new CSSStyleSheet({media:"screen and (min-width: 576px)"}),md:new CSSStyleSheet({media:"screen and (min-width: 768px)"}),lg:new CSSStyleSheet({media:"screen and (min-width: 992px)"}),xl:new CSSStyleSheet({media:"screen and (min-width: 1200px)"}),"2xl":new CSSStyleSheet({media:"screen and (min-width: 1400px)"})};var c=()=>{let u;return d=>{clearTimeout(u),u=setTimeout(()=>{t&&Object.keys(i).forEach(a=>{let f=t+"-"+a;i[a].size>0&&localStorage?.setItem(f,JSON.stringify([...i[a]]))})},d||0)}},l=()=>{t&&Object.keys(i).forEach(u=>{let d=t+"-"+u,a=localStorage?.getItem(d)??null;a&&(i[u]=new Set(JSON.parse(a)),s[u].replaceSync([...i[u]].join(" ")))})};l(),re&&Array.isArray(re)&&s.root.replaceSync(re.join(`
`)),Object.keys(s).forEach(u=>{n.adoptedStyleSheets=[...n.adoptedStyleSheets,s[u]]}),o.on("change",u=>{let{media:d,property:a,selector:f,layer:h,className:p}=u,_=s[d],w=i[d];h=(f?1:0)+h;var A=`@layer l${h}{.${p}${f}{${a}}}`;w.has(A)||(w.add(A),_.insertRule(A))}),it(n,u=>{u.map(a=>Ee(a)).filter(a=>a).forEach(a=>{r.includes(a.className)||(r.push(a.className),o.emit("change",a))})})}var Ne={convertToClass:Ee,getAllClassFromString:Xt,getAllClassFromDom:ie,eventDom:it,storeCss:Gt,generateCssString:lt,generateAllCSS:Kt};var qt=0,{button:dn,div:v,header:Ut,input:fn,label:pn,span:Zt,style:hn}=g.tags,k=e=>Object.entries(e).map(([t,n])=>`${t}: ${n};`).join(""),Jt=Object.getPrototypeOf(g.stateValue(null)),Z=e=>Object.getPrototypeOf(e??0)===Jt?e:g.stateValue(e),Te=({value:e,container:t=v,Loading:n,Error:r,options:o={}},i)=>{let s=g.stateValue({status:"pending"});return e.then(c=>{s.value={status:"fulfilled",value:c}}).catch(c=>s.value={status:"rejected",value:c}),t(o,()=>s.value.status==="pending"?n?.()??"":s.value.status==="rejected"?r?.(s.value.value):typeof i=="function"?i(s.value.value):s.value.value)},Ht=({value:e,container:t=v,Loading:n,Error:r,options:o={},props:i={}})=>{let s=fetch(e).then(c=>c.text());return Te({value:s,container:t,Loading:n,Error:r,options:o},c=>{let l=g.stateValue(""),d=g.htmlStringToFw(c,!0).map(a=>{let f=Object.keys(i),h=f.length>0?new Function(...f,"props","return "+a.trim())(...f.map(p=>i[p]),i):new Function("props","return "+a.trim())(i);return typeof h=="function"?h():h});return l.value=v(d),l.value})},le=()=>++qt,Ve=({title:e,closed:t=g.stateValue(!1),x:n=0,y:r=0,width:o=300,height:i="auto",closeCross:s="\xD7",cb:c=()=>{},init:l={},customStacking:u=!1,zIndex:d=1,disableMove:a=!1,disableResize:f=!1,headerColor:h="lightgray",windowClass:p="",windowStyleOverrides:_={},headerClass:w="",headerStyleOverrides:W={},childrenContainerClass:A="",childrenContainerStyleOverrides:ae={},crossClass:m="",crossStyleOverrides:C={},crossHoverClass:R="",crossHoverStyleOverrides:ce={}},...ct)=>{n=typeof n=="number"?n:0,r=typeof r=="number"?r:0;let{width:ut,height:dt}=document.body.getBoundingClientRect();n=n==0?ut/2:n,r=r==0?dt/2:r;let ue=Z(n),de=Z(r),F=Z(o),$=Z(i),fe=Z(d);u||(fe.value=le());let pe=g.stateValue(!1),B=g.stateValue(null),I=g.stateValue(0),X=g.stateValue(0),$e=g.stateValue(0),je=g.stateValue(0),K=R||Object.keys(ce)?g.stateValue(!1):null,De=b=>{b.button===0&&(pe.value=!0,I.value=b.clientX,X.value=b.clientY)},he=b=>O=>{B.value=b,I.value=O.clientX,X.value=O.clientY,$e.value=F.value,je.value=$.value},ft=b=>{if(pe.value)ue.value+=b.clientX-I.value,de.value+=b.clientY-X.value,I.value=b.clientX,X.value=b.clientY;else if(B.value){let O=b.clientX-I.value,ze=b.clientY-X.value;B.value.includes("right")&&typeof F.value=="number"&&(F.value=$e.value+O),B.value.includes("bottom")&&typeof $.value=="number"&&($.value=je.value+ze)}},pt=()=>{pe.value=!1,B.value=null};document.addEventListener("mousemove",ft),document.addEventListener("mouseup",pt);let ht=g.stateValue(null);return()=>t.value?null:v({class:"posF w100% h100% bgc{rgba(0,0,0,0.5)} t0",style:()=>k({"z-index":fe.value})},v({ref:b=>ht.value=b,class:["posF bgcWhite bxshd{0px;1px;4px;3px;#5252521f} bda{0.5rem}"].concat(p||[]).join(" "),style:()=>{let{width:b,height:O}=document.body.getBoundingClientRect();return k({left:`${ue.value*100/b}%`,top:`${de.value*100/O}%`,width:typeof F.value=="number"?`${F.value}px`:F.value,height:typeof $.value=="number"?`${$.value}px`:$.value,transform:`translate(-${ue.value*100/b}%, -${de.value*100/O}%)`,..._})},...u?{}:{onmousedown:()=>fe.value=le()}},e?Ut({class:["crMo usN dF jcSp aiC"].concat(w||[]).join(" "),style:k({"background-color":h,...a?{cursor:"auto"}:{},...W}),...a?{}:{onmousedown:De}},e,s?Zt({class:()=>["cr tran{background-color;0.3s,color;0.3s} bda{50%} w24px h24px dF aiC jcC bgcRed:hover cWhite:hover"].concat(m||[]).concat(R&&K.value?R:[]).join(" "),style:()=>k({...C,...Object.keys(ce).length&&K.value?ce:{}}),onclick:()=>t.value=!0,...K?{onmouseenter:()=>K.value=!0,onmouseleave:()=>K.value=!1}:{}},s):null):a?null:v({class:"crMo posA l0px t0px w100% h1rem",onmousedown:De}),f?[]:[v({class:"crEr posA r0px t0px w10px h100% bgc{transparent}",onmousedown:he("right")}),v({class:"crSr posA l0px b0px w100% h10px bgc{transparent}",onmousedown:he("bottom")}),v({class:"crSer posA r0px b0px w10px h10px bgc{transparent}",onmousedown:he("rightbottom")})],v({class:()=>"mh{calc(100vh;-;100px)} "+["ofl{auto}"].concat(A||[]).join(" "),style:k(ae)},ct)))},Qt=(e,t)=>{g.appendDom(document.body,Ve(e,t))},Fe=class{_boardStylesStr;_fadeOutSec;_messageClass;_messageStylesStr;_closerClass;_closerStylesStr;_dom;_options;constructor({top:t="unset",bottom:n="unset",left:r="unset",right:o="unset",backgroundColor:i="white",fontColor:s="black",fadeOutSec:c=.3,boardClass:l="",boardStyleOverrides:u={},messageClass:d="",messageStyleOverrides:a={},closerClass:f="",closerStyleOverrides:h={}},p=document.body){r=="unset"&&(r=o==="unset"?"50%":"unset"),o=="unset"&&(o=r==="unset"?"50%":"unset"),t=="unset"&&(t=n==="unset"?"50%":"unset"),n=="unset"&&(n=t==="unset"?"50%":"unset"),this._options={top:t,bottom:n,left:r,right:o,backgroundColor:i,fontColor:s,fadeOutSec:c,boardClass:l,boardStyleOverrides:u,messageClass:d,messageStyleOverrides:a,closerClass:f,closerStyleOverrides:h};let _=k({display:"flex","flex-direction":"column","align-items":"center",position:"fixed",top:t,bottom:n,left:r,right:o,"z-index":1e4,...u});this._boardStylesStr=_,this._fadeOutSec=c,this._messageClass=d,this._messageStylesStr=k({display:"flex","background-color":i,color:s,padding:"15px","margin-bottom":"10px","border-radius":"5px","box-shadow":"0px 1px 4px 3px #00000038",transition:`opacity ${c}s, transform ${c}s`,...a}),this._closerClass=f,this._closerStylesStr=k({display:"flex","align-items":"center","margin-left":"10px",cursor:"pointer",...h}),this._dom=v({class:l,style:_}),g.appendDom(p,()=>this._dom)}show({message:t,closer:n="\xD7",messageClass:r="",closerClass:o="",postion:i={},durationSec:s=3,closed:c=g.stateValue(!1),expiredCb:l}){i={...this._options,...i},this._dom.style.top=i.top,this._dom.style.bottom=i.bottom,this._dom.style.left=i.left,this._dom.style.right=i.right;let u=null,d=g.stateValue(!1);g.derive(()=>setTimeout(f=>{d.value=f,f&&u&&clearTimeout(u)},this._fadeOutSec*1e3,c.value));let a=v({class:()=>"bda5px bxshd{1px;1px;4px;#00000061} dF gap{10px} p10px mw450px "+r},v(t),n?v({class:()=>"cRed cr fns18px fw700 "+o,onclick:()=>c.value=!0},n):null);return g.derive(()=>c.value&&(a.style.opacity="0",a.style.transform="translateY(-20px)")),typeof s=="number"&&s>0&&(u=setTimeout(()=>{c.value=!0,typeof l=="function"&&l()},s*1e3)),g.appendDom(this._dom,()=>d.value?null:a),c}remove(){this._dom.remove()}},at={HtmlRender:Ht,ElementSync:Te,topIndex:le,dialog:Qt,ElementDialog:Ve,Await:Te,topMostZIndex:le,FloatingWindow:Ve,MessageBoard:Fe};var en=(e,...t)=>{Ne.storeCss(document,"tfl"),g.append(e,t)},tn={...g,renderRoot:en,css:Ne,ui:at},yn=new Proxy(tn,{get:(e,t)=>{if(e[t])return e[t];{let n=t.split("").map(r=>{let o=r.charCodeAt(0);return o>=65&&o<=90?r.toLowerCase()+"-":r}).join("");return g.tags[n]}},ownKeys:e=>new Set([...Reflect.ownKeys(e),...Reflect.ownKeys(e.tags)]),getOwnPropertyDescriptor:(e,t)=>Reflect.getOwnPropertyDescriptor(e,t)??Reflect.getOwnPropertyDescriptor(e.tags,t)});export{yn as default};
