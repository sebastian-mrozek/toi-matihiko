(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function P(){}function be(e){return e()}function _e(){return Object.create(null)}function W(e){e.forEach(be)}function se(e){return typeof e=="function"}function ue(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Oe(e){return Object.keys(e).length===0}function Re(e){return e&&se(e.destroy)?e.destroy:P}function a(e,t){e.appendChild(t)}function ce(e,t,n){e.insertBefore(t,n||null)}function Y(e){e.parentNode&&e.parentNode.removeChild(e)}function k(e){return document.createElement(e)}function N(e){return document.createTextNode(e)}function A(){return N(" ")}function j(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function m(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ne(e){return e===""?null:+e}function Se(e){return Array.from(e.childNodes)}function re(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function B(e,t){e.value=t??""}function $e(e,t,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,i,t),r}let G;function U(e){G=e}function Ee(){if(!G)throw new Error("Function called outside component initialization");return G}function Le(e){Ee().$$.on_mount.push(e)}function De(){const e=Ee();return(t,n,{cancelable:i=!1}={})=>{const r=e.$$.callbacks[t];if(r){const o=$e(t,n,{cancelable:i});return r.slice().forEach(u=>{u.call(e,o)}),!o.defaultPrevented}return!0}}const M=[],pe=[],J=[],ye=[],Ne=Promise.resolve();let oe=!1;function Ae(){oe||(oe=!0,Ne.then(ke))}function le(e){J.push(e)}const ie=new Set;let Z=0;function ke(){const e=G;do{for(;Z<M.length;){const t=M[Z];Z++,U(t),je(t.$$)}for(U(null),M.length=0,Z=0;pe.length;)pe.pop()();for(let t=0;t<J.length;t+=1){const n=J[t];ie.has(n)||(ie.add(n),n())}J.length=0}while(M.length);for(;ye.length;)ye.pop()();oe=!1,ie.clear(),U(e)}function je(e){if(e.fragment!==null){e.update(),W(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(le)}}const Q=new Set;let Pe;function fe(e,t){e&&e.i&&(Q.delete(e),e.i(t))}function Ce(e,t,n,i){if(e&&e.o){if(Q.has(e))return;Q.add(e),Pe.c.push(()=>{Q.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function we(e){e&&e.c()}function ae(e,t,n,i){const{fragment:r,after_update:o}=e.$$;r&&r.m(t,n),i||le(()=>{const u=e.$$.on_mount.map(be).filter(se);e.$$.on_destroy?e.$$.on_destroy.push(...u):W(u),e.$$.on_mount=[]}),o.forEach(le)}function de(e,t){const n=e.$$;n.fragment!==null&&(W(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ie(e,t){e.$$.dirty[0]===-1&&(M.push(e),Ae(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function he(e,t,n,i,r,o,u,h=[-1]){const v=G;U(e);const s=e.$$={fragment:null,ctx:[],props:o,update:P,not_equal:r,bound:_e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(v?v.$$.context:[])),callbacks:_e(),dirty:h,skip_bound:!1,root:t.target||v.$$.root};u&&u(s.root);let p=!1;if(s.ctx=n?n(e,t.props||{},(l,C,...S)=>{const w=S.length?S[0]:C;return s.ctx&&r(s.ctx[l],s.ctx[l]=w)&&(!s.skip_bound&&s.bound[l]&&s.bound[l](w),p&&Ie(e,l)),C}):[],s.update(),p=!0,W(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){const l=Se(t.target);s.fragment&&s.fragment.l(l),l.forEach(Y)}else s.fragment&&s.fragment.c();t.intro&&fe(e.$$.fragment),ae(e,t.target,t.anchor,t.customElement),ke()}U(v)}class ge{$destroy(){de(this,1),this.$destroy=P}$on(t,n){if(!se(n))return P;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!Oe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Te="modulepreload",ze=function(e){return"/toi-motihiko/"+e},ve={},Be=function(t,n,i){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=ze(o),o in ve)return;ve[o]=!0;const u=o.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!i)for(let p=r.length-1;p>=0;p--){const l=r[p];if(l.href===o&&(!u||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${h}`))return;const s=document.createElement("link");if(s.rel=u?"stylesheet":Te,u||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),u)return new Promise((p,l)=>{s.addEventListener("load",p),s.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function xe(e){let t,n,i;return{c(){t=k("div"),m(t,"style",e[0]),m(t,"class","m-0")},m(r,o){ce(r,t,o),n||(i=Re(e[1].call(null,t)),n=!0)},p(r,[o]){o&1&&m(t,"style",r[0])},i:P,o:P,d(r){r&&Y(t),n=!1,i()}}}function Fe(e,t){return t.forEach(([n,i])=>e[n]=i),e}function He(e,t,n){let{target:i=void 0}=t,{sketch:r=void 0}=t,{parentDivStyle:o="display: block;"}=t,{debug:u=!1}=t,h;const v=De(),s={ref(){v("ref",i)},instance(){v("instance",h)}};function p(l){return n(2,i=l),{destroy(){n(2,i=void 0)}}}return Le(async()=>{const l=await Be(()=>import("./p5.min-7dea8225.js").then(_=>_.p),[]),{default:C}=l,w=Object.entries(l).filter(([_,I])=>I instanceof Function&&_[0]!=="_"&&_!=="default");u&&console.log("available p5 native classes",w),h=new C(_=>(_=Fe(_,w),u&&console.log("p5 instance",_),window._p5Instance=_,r(_)),i),s.ref(),s.instance()}),e.$$set=l=>{"target"in l&&n(2,i=l.target),"sketch"in l&&n(3,r=l.sketch),"parentDivStyle"in l&&n(0,o=l.parentDivStyle),"debug"in l&&n(4,u=l.debug)},[o,p,i,r,u]}class Ke extends ge{constructor(t){super(),he(this,t,He,xe,ue,{target:2,sketch:3,parentDivStyle:0,debug:4})}}function Me(e){let t,n,i,r,o,u,h,v,s,p,l,C,S,w,_,I,O,V,x,q,c,F,L,T,z,D,$,H,X;return D=new Ke({props:{sketch:e[4]}}),{c(){t=k("div"),n=k("div"),i=k("label"),r=N(`Size
      `),o=k("input"),u=A(),h=N(e[0]),v=A(),s=k("label"),p=N(`Speed
      `),l=k("input"),C=A(),S=N(e[1]),w=A(),_=k("label"),I=N(`Density
      `),O=k("input"),V=A(),x=N(e[2]),q=A(),c=k("label"),F=N(`Random colors
      `),L=k("input"),T=A(),z=k("div"),we(D.$$.fragment),m(o,"type","range"),m(o,"min","20"),m(o,"max","200"),m(o,"step","3"),m(i,"class","block svelte-1cjg086"),m(l,"type","range"),m(l,"min","5"),m(l,"max","50"),m(l,"step","1"),m(s,"class","block svelte-1cjg086"),m(O,"type","range"),m(O,"min","0"),m(O,"max","20"),m(O,"step","1"),m(_,"class","block svelte-1cjg086"),m(L,"type","checkbox"),m(c,"class","block svelte-1cjg086"),m(n,"class","control-panel svelte-1cjg086"),m(z,"class","picture svelte-1cjg086")},m(y,R){ce(y,t,R),a(t,n),a(n,i),a(i,r),a(i,o),B(o,e[0]),a(i,u),a(i,h),a(n,v),a(n,s),a(s,p),a(s,l),B(l,e[1]),a(s,C),a(s,S),a(n,w),a(n,_),a(_,I),a(_,O),B(O,e[2]),a(_,V),a(_,x),a(n,q),a(n,c),a(c,F),a(c,L),L.checked=e[3],a(t,T),a(t,z),ae(D,z,null),$=!0,H||(X=[j(o,"change",e[5]),j(o,"input",e[5]),j(l,"change",e[6]),j(l,"input",e[6]),j(O,"change",e[7]),j(O,"input",e[7]),j(L,"change",e[8])],H=!0)},p(y,[R]){R&1&&B(o,y[0]),(!$||R&1)&&re(h,y[0]),R&2&&B(l,y[1]),(!$||R&2)&&re(S,y[1]),R&4&&B(O,y[2]),(!$||R&4)&&re(x,y[2]),R&8&&(L.checked=y[3])},i(y){$||(fe(D.$$.fragment,y),$=!0)},o(y){Ce(D.$$.fragment,y),$=!1},d(y){y&&Y(t),de(D),H=!1,W(X)}}}const Ue=1,Ge=0;function We(e,t,n){let i,r,o=600,u=400,h=50,v="#000f",s="#ffff",p=10,l=2,C=!0;const S=1,w=0,_=-1,I=c=>{function F(){o=c.windowWidth*.8,u=c.windowHeight*.68}function L(){C&&(v=me(Ge),s=me(Ue))}function T(f,g,d){let b=y(f),E=R(f);z(f,g,d,E),H(f,g,b)}function z(f,g,d,b){let E=D(f,g,d),K=$(d);c.fill(b),c.rect(E.x,E.y,K.x,K.y)}function D(f,g,d){var b,E;return d==_?b=g*h+r:(d==S||d==w)&&(b=g*h),E=f*r+1,c.createVector(b,E)}function $(f){let g=f==w?h:r;return c.createVector(g+1,r)}function H(f,g,d){let b=g*h+r,E=f*r;c.fill(d),c.ellipse(b,E,h,h)}function X(f){let g=y(f);c.fill(g),c.rect(0,f*r,o,r)}function y(f){return ee(f)?s:v}function R(f){return ee(f)?v:s}function ee(f){return f%2==0}function te(f,g){return c.round(c.random(f,g))}function me(f){let g="#";for(let d=0;d<3;d++){const b=Math.random(),E=(f?8:0)+b*8|0;g+=E.toString(16)}return g}c.setup=()=>{F(),c.createCanvas(o,u),c.noStroke(),c.frameRate(i)},c.windowResized=()=>{F(),c.resizeCanvas(o,u)},c.draw=()=>{L(),c.background(v),c.frameRate(i);let f=u/r,g=o/h;c.fill(s);for(var d=0;d<f;d++)if(X(d),d>0&&d<f-1){let E=ee(d)?te(1,g/2-l-1):te(g/2+1,g-l);T(d,E,_);let K=te(0,l);for(var b=1;b<=K;b++)T(d,E+b,w);T(d,E+K+1,S)}}};function O(){h=ne(this.value),n(0,h)}function V(){p=ne(this.value),n(1,p)}function x(){l=ne(this.value),n(2,l)}function q(){C=this.checked,n(3,C)}return e.$$.update=()=>{e.$$.dirty&2&&(i=p/10),e.$$.dirty&1&&(r=h/2)},[h,p,l,C,I,O,V,x,q]}class Ve extends ge{constructor(t){super(),he(this,t,We,Me,ue,{})}}function qe(e){let t,n,i;return n=new Ve({}),{c(){t=k("div"),we(n.$$.fragment)},m(r,o){ce(r,t,o),ae(n,t,null),i=!0},p:P,i(r){i||(fe(n.$$.fragment,r),i=!0)},o(r){Ce(n.$$.fragment,r),i=!1},d(r){r&&Y(t),de(n)}}}class Xe extends ge{constructor(t){super(),he(this,t,null,qe,ue,{})}}new Xe({target:document.getElementById("app")});
