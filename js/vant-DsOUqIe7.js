var e=Math.pow;import{i as t,o as n,c as o,r as a,a as l,b as r,d as i,w as s,g as c,p as u,e as d,n as v,f as p,u as f,h as m,j as h,k as g,m as y,l as b,T as w,q as x,s as C,v as S,F as k,t as O}from"./vue-vendor-BPs1j0Jh.js";function z(){}const B=Object.assign,I="undefined"!=typeof window,T=e=>null!==e&&"object"==typeof e,A=e=>null!=e,$=e=>"function"==typeof e,P=e=>"number"==typeof e||/^\d+(\.\d+)?$/.test(e);function E(e,t){const n=t.split(".");let o=e;return n.forEach((e=>{var t;o=T(o)&&null!=(t=o[e])?t:""})),o}function N(e,t,n){return t.reduce(((t,n)=>(t[n]=e[n],t)),{})}const L=(e,t)=>JSON.stringify(e)===JSON.stringify(t),V=null,j=[Number,String],M={type:Boolean,default:!0},Y=e=>({type:j,default:e}),X=e=>({type:String,default:e});var D="undefined"!=typeof window;function H(e){return D?requestAnimationFrame(e):-1}function R(e){H((()=>H(e)))}var W=(e,t)=>({top:0,left:0,right:e,bottom:t,width:e,height:t}),F=e=>{const t=f(e);if(t===window){const e=t.innerWidth,n=t.innerHeight;return W(e,n)}return(null==t?void 0:t.getBoundingClientRect)?t.getBoundingClientRect():W(0,0)};var U,q,J=(e,t)=>{const n=e.indexOf(t);return-1===n?e.findIndex((e=>void 0!==t.key&&null!==t.key&&e.type===t.type&&e.key===t.key)):n};function Z(e,t,n){const o=function(e){const t=[],n=e=>{Array.isArray(e)&&e.forEach((e=>{var o;m(e)&&(t.push(e),(null==(o=e.component)?void 0:o.subTree)&&(t.push(e.component.subTree),n(e.component.subTree.children)),e.children&&n(e.children))}))};return n(e),t}(e.subTree.children);n.sort(((e,t)=>J(o,e.vnode)-J(o,t.vnode)));const a=n.map((e=>e.proxy));t.sort(((e,t)=>a.indexOf(e)-a.indexOf(t)))}function _(e){let t;d((()=>{e(),v((()=>{t=!0}))})),p((()=>{t&&e()}))}function K(e,t,o={}){if(!D)return;const{target:a=window,passive:l=!1,capture:c=!1}=o;let u,d=!1;const v=n=>{if(d)return;const o=f(n);o&&!u&&(o.addEventListener(e,t,{capture:c,passive:l}),u=!0)},p=n=>{if(d)return;const o=f(n);o&&u&&(o.removeEventListener(e,t,c),u=!1)};let m;return n((()=>p(a))),r((()=>p(a))),_((()=>v(a))),i(a)&&(m=s(a,((e,t)=>{p(t),v(e)}))),()=>{null==m||m(),p(a),d=!0}}var G,Q=/scroll|auto|overlay/i,ee=D?window:void 0;function te(e){return"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType}var ne=Symbol("van-field");I&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());const oe=e=>e.stopPropagation();function ae(e,t){("boolean"!=typeof e.cancelable||e.cancelable)&&e.preventDefault(),t&&oe(e)}function le(e){const t=f(e);if(!t)return!1;const n=window.getComputedStyle(t),o="none"===n.display,a=null===t.offsetParent&&"fixed"!==n.position;return o||a}const{width:re,height:ie}=function(){if(!U&&(U=a(0),q=a(0),D)){const e=()=>{U.value=window.innerWidth,q.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:U,height:q}}();function se(e){if(A(e))return P(e)?`${e}px`:String(e)}function ce(e){if(A(e)){if(Array.isArray(e))return{width:se(e[0]),height:se(e[1])};const t=se(e);return{width:t,height:t}}}const ue=/-(\w)/g,de=e=>e.replace(ue,((e,t)=>t.toUpperCase())),ve=(e,t,n)=>Math.min(Math.max(e,t),n);const{hasOwnProperty:pe}=Object.prototype;function fe(e,t){return Object.keys(t).forEach((n=>{!function(e,t,n){const o=t[n];A(o)&&(pe.call(e,n)&&T(o)?e[n]=fe(Object(e[n]),o):e[n]=o)}(e,t,n)})),e}const me=a("zh-CN"),he=l({"zh-CN":{name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,t)=>`${e}年${t}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}}});var ge={messages:()=>he[me.value],use(e,t){me.value=e,this.add({[e]:t})},add(e={}){fe(he,e)}};function ye(e){const t=de(e)+".";return(e,...n)=>{const o=ge.messages(),a=E(o,t+e)||E(o,e);return $(a)?a(...n):a}}function be(e,t){return t?"string"==typeof t?` ${e}--${t}`:Array.isArray(t)?t.reduce(((t,n)=>t+be(e,n)),""):Object.keys(t).reduce(((n,o)=>n+(t[o]?be(e,o):"")),""):""}function we(e){return(t,n)=>(t&&"string"!=typeof t&&(n=t,t=""),`${t=t?`${e}__${t}`:e}${be(t,n)}`)}function xe(e){const t=`van-${e}`;return[t,we(t),ye(t)]}const Ce="van-haptics-feedback";function Se(e,{args:t=[],done:n,canceled:o,error:a}){if(e){const r=e.apply(null,t);T(l=r)&&$(l.then)&&$(l.catch)?r.then((e=>{e?n():o&&o()})).catch(a||z):r?n():o&&o()}else n();var l}function ke(e){return e.install=t=>{const{name:n}=e;n&&(t.component(n,e),t.component(de(`-${n}`),e))},e}const Oe=Symbol();function ze(e){const n=t(Oe,null);n&&s(n,(t=>{t&&e()}))}function Be(e){const t=c();t&&B(t.proxy,e)}const[Ie,Te]=xe("badge");const Ae=ke(h({name:Ie,props:{dot:Boolean,max:j,tag:X("div"),color:String,offset:Array,content:j,showZero:M,position:X("top-right")},setup(e,{slots:t}){const n=()=>{if(t.content)return!0;const{content:n,showZero:o}=e;return A(n)&&""!==n&&(o||0!==n&&"0"!==n)},a=()=>{const{dot:o,max:a,content:l}=e;if(!o&&n())return t.content?t.content():A(a)&&P(l)&&+l>+a?`${a}+`:l},l=e=>e.startsWith("-")?e.replace("-",""):`-${e}`,r=o((()=>{const n={background:e.color};if(e.offset){const[o,a]=e.offset,{position:r}=e,[i,s]=r.split("-");t.default?(n[i]="number"==typeof a?se("top"===i?a:-a):"top"===i?se(a):l(a),n[s]="number"==typeof o?se("left"===s?o:-o):"left"===s?se(o):l(o)):(n.marginTop=se(a),n.marginLeft=se(o))}return n})),i=()=>{if(n()||e.dot)return g("div",{class:Te([e.position,{dot:e.dot,fixed:!!t.default}]),style:r.value},[a()])};return()=>{if(t.default){const{tag:n}=e;return g(n,{class:Te("wrapper")},{default:()=>[t.default(),i()]})}return i()}}}));let $e=2e3;const[Pe,Ee]=xe("config-provider"),Ne=Symbol(Pe),[Le,Ve]=xe("icon");const je=ke(h({name:Le,props:{dot:Boolean,tag:X("i"),name:String,size:j,badge:j,color:String,badgeProps:Object,classPrefix:String},setup(e,{slots:n}){const a=t(Ne,null),l=o((()=>e.classPrefix||(null==a?void 0:a.iconPrefix)||Ve()));return()=>{const{tag:t,dot:o,name:a,size:r,badge:i,color:s}=e,c=(e=>null==e?void 0:e.includes("/"))(a);return g(Ae,y({dot:o,tag:t,class:[l.value,c?"":`${l.value}-${a}`],style:{color:s,fontSize:se(r)},content:i},e.badgeProps),{default:()=>{var e;return[null==(e=n.default)?void 0:e.call(n),c&&g("img",{class:Ve("image"),src:a},null)]}})}}})),[Me,Ye]=xe("loading"),Xe=Array(12).fill(null).map(((e,t)=>g("i",{class:Ye("line",String(t+1))},null))),De=g("svg",{class:Ye("circular"),viewBox:"25 25 50 50"},[g("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]);var He=h({name:Me,props:{size:j,type:X("circular"),color:String,vertical:Boolean,textSize:j,textColor:String},setup(e,{slots:t}){const n=o((()=>B({color:e.color},ce(e.size)))),a=()=>{const o="spinner"===e.type?Xe:De;return g("span",{class:Ye("spinner",e.type),style:n.value},[t.icon?t.icon():o])},l=()=>{var n;if(t.default)return g("span",{class:Ye("text"),style:{fontSize:se(e.textSize),color:null!=(n=e.textColor)?n:e.color}},[t.default()])};return()=>{const{type:t,vertical:n}=e;return g("div",{class:Ye([t,{vertical:n}]),"aria-live":"polite","aria-busy":!0},[a(),l()])}}});const Re=ke(He),We={show:Boolean,zIndex:j,overlay:M,duration:j,teleport:[String,Object],lockScroll:M,lazyRender:M,beforeClose:Function,overlayStyle:Object,overlayClass:V,transitionAppear:Boolean,closeOnClickOverlay:M},Fe=Object.keys(We);function Ue(){const e=a(0),t=a(0),n=a(0),o=a(0),l=a(0),r=a(0),i=a(""),s=a(!0),c=()=>{n.value=0,o.value=0,l.value=0,r.value=0,i.value="",s.value=!0};return{move:a=>{const c=a.touches[0];n.value=(c.clientX<0?0:c.clientX)-e.value,o.value=c.clientY-t.value,l.value=Math.abs(n.value),r.value=Math.abs(o.value);var u,d;(!i.value||l.value<10&&r.value<10)&&(i.value=(u=l.value,d=r.value,u>d?"horizontal":d>u?"vertical":"")),s.value&&(l.value>5||r.value>5)&&(s.value=!1)},start:n=>{c(),e.value=n.touches[0].clientX,t.value=n.touches[0].clientY},reset:c,startX:e,startY:t,deltaX:n,deltaY:o,offsetX:l,offsetY:r,direction:i,isVertical:()=>"vertical"===i.value,isHorizontal:()=>"horizontal"===i.value,isTap:s}}let qe=0;const Je="van-overflow-hidden";function Ze(e,t){const n=Ue(),o=t=>{n.move(t);const o=n.deltaY.value>0?"10":"01",a=function(e,t=ee){let n=e;for(;n&&n!==t&&te(n);){const{overflowY:e}=window.getComputedStyle(n);if(Q.test(e))return n;n=n.parentNode}return t}(t.target,e.value),{scrollHeight:l,offsetHeight:r,scrollTop:i}=a;let s="11";0===i?s=r>=l?"00":"01":i+r>=l&&(s="10"),"11"===s||!n.isVertical()||parseInt(s,2)&parseInt(o,2)||ae(t,!0)},a=()=>{document.addEventListener("touchstart",n.start),document.addEventListener("touchmove",o,{passive:!1}),qe||document.body.classList.add(Je),qe++},l=()=>{qe&&(document.removeEventListener("touchstart",n.start),document.removeEventListener("touchmove",o),qe--,qe||document.body.classList.remove(Je))},i=()=>t()&&l();_((()=>t()&&a())),r(i),b(i),s(t,(e=>{e?a():l()}))}function _e(e){const t=a(!1);return s(e,(e=>{e&&(t.value=e)}),{immediate:!0}),e=>()=>t.value?e():null}const Ke=()=>{var e;const{scopeId:t}=(null==(e=c())?void 0:e.vnode)||{};return t?{[t]:""}:null},[Ge,Qe]=xe("overlay");const et=ke(h({name:Ge,props:{show:Boolean,zIndex:j,duration:j,className:V,lockScroll:M,lazyRender:M,customStyle:Object,teleport:[String,Object]},setup(e,{slots:t}){const n=a(),o=_e((()=>e.show||!e.lazyRender))((()=>{var o;const a=B(function(e){const t={};return void 0!==e&&(t.zIndex=+e),t}(e.zIndex),e.customStyle);return A(e.duration)&&(a.animationDuration=`${e.duration}s`),C(g("div",{ref:n,style:a,class:[Qe(),e.className]},[null==(o=t.default)?void 0:o.call(t)]),[[S,e.show]])}));return K("touchmove",(t=>{e.lockScroll&&ae(t,!0)}),{target:n}),()=>{const t=g(w,{name:"van-fade",appear:!0},{default:o});return e.teleport?g(x,{to:e.teleport},{default:()=>[t]}):t}}})),tt=B({},We,{round:Boolean,position:X("center"),closeIcon:X("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:X("top-right"),destroyOnClose:Boolean,safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[nt,ot]=xe("popup");const at=ke(h({name:nt,inheritAttrs:!1,props:tt,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:t,attrs:n,slots:l}){let i,c;const f=a(),m=a(),h=_e((()=>e.show||!e.lazyRender)),b=o((()=>{const t={zIndex:f.value};if(A(e.duration)){t["center"===e.position?"animationDuration":"transitionDuration"]=`${e.duration}s`}return t})),O=()=>{i||(i=!0,f.value=void 0!==e.zIndex?+e.zIndex:++$e,t("open"))},z=()=>{i&&Se(e.beforeClose,{done(){i=!1,t("close"),t("update:show",!1)}})},B=n=>{t("clickOverlay",n),e.closeOnClickOverlay&&z()},I=()=>{if(e.overlay)return g(et,y({show:e.show,class:e.overlayClass,zIndex:f.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0},Ke(),{onClick:B}),{default:l["overlay-content"]})},T=e=>{t("clickCloseIcon",e),z()},$=()=>{if(e.closeable)return g(je,{role:"button",tabindex:0,name:e.closeIcon,class:[ot("close-icon",e.closeIconPosition),Ce],classPrefix:e.iconPrefix,onClick:T},null)};let P;const E=()=>{P&&clearTimeout(P),P=setTimeout((()=>{t("opened")}))},N=()=>t("closed"),L=e=>t("keydown",e),V=h((()=>{var t;const{destroyOnClose:o,round:a,position:r,safeAreaInsetTop:i,safeAreaInsetBottom:s,show:c}=e;if(c||!o)return C(g("div",y({ref:m,style:b.value,role:"dialog",tabindex:0,class:[ot({round:a,[r]:r}),{"van-safe-area-top":i,"van-safe-area-bottom":s}],onKeydown:L},n,Ke()),[null==(t=l.default)?void 0:t.call(l),$()]),[[S,c]])})),j=()=>{const{position:t,transition:n,transitionAppear:o}=e;return g(w,{name:n||("center"===t?"van-fade":`van-popup-slide-${t}`),appear:o,onAfterEnter:E,onAfterLeave:N},{default:V})};return s((()=>e.show),(e=>{e&&!i&&(O(),0===n.tabindex&&v((()=>{var e;null==(e=m.value)||e.focus()}))),!e&&i&&(i=!1,t("close"))})),Be({popupRef:m}),Ze(m,(()=>e.show&&e.lockScroll)),K("popstate",(()=>{e.closeOnPopstate&&(z(),c=!1)})),d((()=>{e.show&&O()})),p((()=>{c&&(t("update:show",!0),c=!1)})),r((()=>{e.show&&e.teleport&&(z(),c=!0)})),u(Oe,(()=>e.show)),()=>e.teleport?g(x,{to:e.teleport},{default:()=>[I(),j()]}):g(k,null,[I(),j()])}})),[lt,rt]=xe("action-sheet"),it=B({},We,{title:String,round:M,actions:{type:Array,default:()=>[]},closeIcon:X("cross"),closeable:M,cancelText:String,description:String,closeOnPopstate:M,closeOnClickAction:Boolean,safeAreaInsetBottom:M}),st=[...Fe,"round","closeOnPopstate","safeAreaInsetBottom"];const ct=ke(h({name:lt,props:it,emits:["select","cancel","update:show"],setup(e,{slots:t,emit:n}){const o=e=>n("update:show",e),a=()=>{o(!1),n("cancel")},l=()=>{if(e.title)return g("div",{class:rt("header")},[e.title,e.closeable&&g(je,{name:e.closeIcon,class:[rt("close"),Ce],onClick:a},null)])},r=()=>{if(t.cancel||e.cancelText)return[g("div",{class:rt("gap")},null),g("button",{type:"button",class:rt("cancel"),onClick:a},[t.cancel?t.cancel():e.cancelText])]},i=e=>{if(e.icon)return g(je,{class:rt("item-icon"),name:e.icon},null)},s=(e,n)=>e.loading?g(Re,{class:rt("loading-icon")},null):t.action?t.action({action:e,index:n}):[g("span",{class:rt("name")},[e.name]),e.subname&&g("div",{class:rt("subname")},[e.subname])],c=(t,a)=>{const{color:l,loading:r,callback:c,disabled:u,className:d}=t;return g("button",{type:"button",style:{color:l},class:[rt("item",{loading:r,disabled:u}),d],onClick:()=>{u||r||(c&&c(t),e.closeOnClickAction&&o(!1),v((()=>n("select",t,a))))}},[i(t),s(t,a)])},u=()=>{if(e.description||t.description){const n=t.description?t.description():e.description;return g("div",{class:rt("description")},[n])}};return()=>g(at,y({class:rt(),position:"bottom","onUpdate:show":o},N(e,st)),{default:()=>{var n;return[l(),u(),g("div",{class:rt("content")},[e.actions.map(c),null==(n=t.default)?void 0:n.call(t)]),r()]}})}})),[ut,dt]=xe("swipe"),vt={loop:M,width:j,height:j,vertical:Boolean,autoplay:Y(0),duration:Y(500),touchable:M,lazyRender:Boolean,initialSwipe:Y(0),indicatorColor:String,showIndicators:M,stopPropagation:M},pt=Symbol(ut);const ft=ke(h({name:ut,props:vt,emits:["change","dragStart","dragEnd"],setup(e,{emit:t,slots:n}){const i=a(),f=a(),m=l({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let h=!1;const y=Ue(),{children:w,linkChildren:x}=function(e){const t=l([]),n=l([]),o=c();return{children:t,linkChildren:a=>{u(e,Object.assign({link:e=>{e.proxy&&(n.push(e),t.push(e.proxy),Z(o,t,n))},unlink:e=>{const o=n.indexOf(e);t.splice(o,1),n.splice(o,1)},children:t,internalChildren:n},a))}}}(pt),C=o((()=>w.length)),S=o((()=>m[e.vertical?"height":"width"])),k=o((()=>e.vertical?y.deltaY.value:y.deltaX.value)),O=o((()=>{if(m.rect){return(e.vertical?m.rect.height:m.rect.width)-S.value*C.value}return 0})),z=o((()=>S.value?Math.ceil(Math.abs(O.value)/S.value):C.value)),B=o((()=>C.value*S.value)),I=o((()=>(m.active+C.value)%C.value)),T=o((()=>{const t=e.vertical?"vertical":"horizontal";return y.direction.value===t})),A=o((()=>{const t={transitionDuration:`${m.swiping?0:e.duration}ms`,transform:`translate${e.vertical?"Y":"X"}(${+m.offset.toFixed(2)}px)`};if(S.value){const n=e.vertical?"height":"width",o=e.vertical?"width":"height";t[n]=`${B.value}px`,t[o]=e[o]?`${e[o]}px`:""}return t})),$=(t,n=0)=>{let o=t*S.value;e.loop||(o=Math.min(o,-O.value));let a=n-o;return e.loop||(a=ve(a,O.value,0)),a},P=({pace:n=0,offset:o=0,emitChange:a})=>{if(C.value<=1)return;const{active:l}=m,r=(t=>{const{active:n}=m;return t?e.loop?ve(n+t,-1,C.value):ve(n+t,0,z.value):n})(n),i=$(r,o);if(e.loop){if(w[0]&&i!==O.value){const e=i<O.value;w[0].setOffset(e?B.value:0)}if(w[C.value-1]&&0!==i){const e=i>0;w[C.value-1].setOffset(e?-B.value:0)}}m.active=r,m.offset=i,a&&r!==l&&t("change",I.value)},E=()=>{m.swiping=!0,m.active<=-1?P({pace:C.value}):m.active>=C.value&&P({pace:-C.value})},N=()=>{E(),y.reset(),R((()=>{m.swiping=!1,P({pace:1,emitChange:!0})}))};let L;const V=()=>clearTimeout(L),j=()=>{V(),+e.autoplay>0&&C.value>1&&(L=setTimeout((()=>{N(),j()}),+e.autoplay))},M=(t=+e.initialSwipe)=>{if(!i.value)return;const n=()=>{var n,o;if(!le(i)){const t={width:i.value.offsetWidth,height:i.value.offsetHeight};m.rect=t,m.width=+(null!=(n=e.width)?n:t.width),m.height=+(null!=(o=e.height)?o:t.height)}C.value&&-1===(t=Math.min(C.value-1,t))&&(t=C.value-1),m.active=t,m.swiping=!0,m.offset=$(t),w.forEach((e=>{e.setOffset(0)})),j()};le(i)?v().then(n):n()},Y=()=>M(m.active);let X;const H=t=>{!e.touchable||t.touches.length>1||(y.start(t),h=!1,X=Date.now(),V(),E())},W=()=>{if(!e.touchable||!m.swiping)return;const n=Date.now()-X,o=k.value/n;if((Math.abs(o)>.25||Math.abs(k.value)>S.value/2)&&T.value){const t=e.vertical?y.offsetY.value:y.offsetX.value;let n=0;n=e.loop?t>0?k.value>0?-1:1:0:-Math[k.value>0?"ceil":"floor"](k.value/S.value),P({pace:n,emitChange:!0})}else k.value&&P({pace:0});h=!1,m.swiping=!1,t("dragEnd",{index:I.value}),j()},F=(t,n)=>{const o=n===I.value,a=o?{backgroundColor:e.indicatorColor}:void 0;return g("i",{style:a,class:dt("indicator",{active:o})},null)};return Be({prev:()=>{E(),y.reset(),R((()=>{m.swiping=!1,P({pace:-1,emitChange:!0})}))},next:N,state:m,resize:Y,swipeTo:(t,n={})=>{E(),y.reset(),R((()=>{let o;o=e.loop&&t===C.value?0===m.active?0:t:t%C.value,n.immediate?R((()=>{m.swiping=!1})):m.swiping=!1,P({pace:o-m.active,emitChange:!0})}))}}),x({size:S,props:e,count:C,activeIndicator:I}),s((()=>e.initialSwipe),(e=>M(+e))),s(C,(()=>M(m.active))),s((()=>e.autoplay),j),s([re,ie,()=>e.width,()=>e.height],Y),s(function(){if(!G&&(G=a("visible"),D)){const e=()=>{G.value=document.hidden?"hidden":"visible"};e(),window.addEventListener("visibilitychange",e)}return G}(),(e=>{"visible"===e?j():V()})),d(M),p((()=>M(m.active))),ze((()=>M(m.active))),r(V),b(V),K("touchmove",(n=>{if(e.touchable&&m.swiping&&(y.move(n),T.value)){!e.loop&&(0===m.active&&k.value>0||m.active===C.value-1&&k.value<0)||(ae(n,e.stopPropagation),P({offset:k.value}),h||(t("dragStart",{index:I.value}),h=!0))}}),{target:f}),()=>{var t;return g("div",{ref:i,class:dt()},[g("div",{ref:f,style:A.value,class:dt("track",{vertical:e.vertical}),onTouchstartPassive:H,onTouchend:W,onTouchcancel:W},[null==(t=n.default)?void 0:t.call(n)]),n.indicator?n.indicator({active:I.value,total:C.value}):e.showIndicators&&C.value>1?g("div",{class:dt("indicators",{vertical:e.vertical})},[Array(C.value).fill("").map(F)]):void 0])}}})),[mt,ht]=xe("swipe-item");const gt=ke(h({name:mt,setup(e,{slots:r}){let i;const s=l({offset:0,inited:!1,mounted:!1}),{parent:u,index:p}=function(e){const l=t(e,null);if(l){const e=c(),{link:t,unlink:a,internalChildren:r}=l;return t(e),n((()=>a(e))),{parent:l,index:o((()=>r.indexOf(e)))}}return{parent:null,index:a(-1)}}(pt);if(!u)return;const f=o((()=>{const e={},{vertical:t}=u.props;return u.size.value&&(e[t?"height":"width"]=`${u.size.value}px`),s.offset&&(e.transform=`translate${t?"Y":"X"}(${s.offset}px)`),e})),m=o((()=>{const{loop:e,lazyRender:t}=u.props;if(!t||i)return!0;if(!s.mounted)return!1;const n=u.activeIndicator.value,o=u.count.value-1,a=0===n&&e?o:n-1,l=n===o&&e?0:n+1;return i=p.value===n||p.value===a||p.value===l,i}));return d((()=>{v((()=>{s.mounted=!0}))})),Be({setOffset:e=>{s.offset=e}}),()=>{var e;return g("div",{class:ht(),style:f.value},[m.value?null==(e=r.default)?void 0:e.call(r):null])}}}));let yt=0;const[bt,wt]=xe("toast"),xt=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay","zIndex"];var Ct,St=h({name:bt,props:{icon:String,show:Boolean,type:X("text"),overlay:Boolean,message:j,iconSize:j,duration:(Ct=2e3,{type:Number,default:Ct}),position:X("middle"),teleport:[String,Object],wordBreak:String,className:V,iconPrefix:String,transition:X("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:V,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean,zIndex:j},emits:["update:show"],setup(e,{emit:t,slots:o}){let a,l=!1;const r=()=>{const t=e.show&&e.forbidClick;l!==t&&(l=t,l?(yt||document.body.classList.add("van-toast--unclickable"),yt++):yt&&(yt--,yt||document.body.classList.remove("van-toast--unclickable")))},i=e=>t("update:show",e),c=()=>{e.closeOnClick&&i(!1)},u=()=>clearTimeout(a),v=()=>{const{icon:t,type:n,iconSize:o,iconPrefix:a,loadingType:l}=e;return t||"success"===n||"fail"===n?g(je,{name:t||n,size:o,class:wt("icon"),classPrefix:a},null):"loading"===n?g(Re,{class:wt("loading"),size:o,type:l},null):void 0},p=()=>{const{type:t,message:n}=e;return o.message?g("div",{class:wt("text")},[o.message()]):A(n)&&""!==n?"html"===t?g("div",{key:0,class:wt("text"),innerHTML:String(n)},null):g("div",{class:wt("text")},[n]):void 0};return s((()=>[e.show,e.forbidClick]),r),s((()=>[e.show,e.type,e.message,e.duration]),(()=>{u(),e.show&&e.duration>0&&(a=setTimeout((()=>{i(!1)}),e.duration))})),d(r),n(r),()=>g(at,y({class:[wt([e.position,"normal"===e.wordBreak?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:c,onClosed:u,"onUpdate:show":i},N(e,xt)),{default:()=>[v(),p()]})}});let kt=[],Ot=B({},{icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1});const zt=new Map;function Bt(e){return T(e)?e:{message:e}}function It(){const{instance:e,unmount:t}=function(e){const t=O(e),n=document.createElement("div");return document.body.appendChild(n),{instance:t.mount(n),unmount(){t.unmount(),document.body.removeChild(n)}}}({setup(){const e=a(""),{open:t,state:n,close:o,toggle:r}=function(){const e=l({show:!1}),t=t=>{e.show=t},n=n=>{B(e,n,{transitionAppear:!0}),t(!0)},o=()=>t(!1);return Be({open:n,close:o,toggle:t}),{open:n,close:o,state:e,toggle:t}}(),i=()=>{};return s(e,(e=>{n.message=e})),c().render=()=>g(St,y(n,{onClosed:i,"onUpdate:show":r}),null),{open:t,close:o,message:e}}});return e}function Tt(e={}){if(!I)return{};const t=function(){if(!kt.length){const e=It();kt.push(e)}return kt[kt.length-1]}(),n=Bt(e);return t.open(B({},Ot,zt.get(n.type||Ot.type),n)),t}const At=($t="loading",e=>Tt(B({type:$t},Bt(e))));var $t;const Pt=e=>{kt.length&&kt[0].close()};ke(St);const[Et,Nt]=xe("notice-bar");const Lt=ke(h({name:Et,props:{text:String,mode:String,color:String,delay:Y(1),speed:Y(60),leftIcon:String,wrapable:Boolean,background:String,scrollable:{type:Boolean,default:null}},emits:["close","replay"],setup(e,{emit:t,slots:n}){let o,r=0,i=0;const c=a(),u=a(),d=l({show:!0,offset:0,duration:0}),v=n=>{"closeable"===e.mode&&(d.show=!1,t("close",n))},p=()=>{if(n["right-icon"])return n["right-icon"]();const t="closeable"===e.mode?"cross":"link"===e.mode?"arrow":void 0;return t?g(je,{name:t,class:Nt("right-icon"),onClick:v},null):void 0},f=()=>{d.offset=r,d.duration=0,H((()=>{R((()=>{d.offset=-i,d.duration=(i+r)/+e.speed,t("replay")}))}))},m=()=>{const t=!1===e.scrollable&&!e.wrapable,o={transform:d.offset?`translateX(${d.offset}px)`:"",transitionDuration:`${d.duration}s`};return g("div",{ref:c,role:"marquee",class:Nt("wrap")},[g("div",{ref:u,style:o,class:[Nt("content"),{"van-ellipsis":t}],onTransitionend:f},[n.default?n.default():e.text])])},h=()=>{const{delay:t,speed:n,scrollable:a}=e,l=A(t)?1e3*+t:0;r=0,i=0,d.offset=0,d.duration=0,clearTimeout(o),o=setTimeout((()=>{if(!c.value||!u.value||!1===a)return;const e=F(c).width,t=F(u).width;(a||t>e)&&R((()=>{r=e,i=t,d.offset=-i,d.duration=i/+n}))}),l)};return ze(h),_(h),K("pageshow",h),Be({reset:h}),s((()=>[e.text,e.scrollable]),h),()=>{const{color:t,wrapable:o,background:a}=e;return C(g("div",{role:"alert",class:Nt({wrapable:o}),style:{color:t,background:a}},[n["left-icon"]?n["left-icon"]():e.leftIcon?g(je,{class:Nt("left-icon"),name:e.leftIcon},null):void 0,m(),p()]),[[S,d.show]])}}})),[Vt,jt]=xe("slider");const Mt=ke(h({name:Vt,props:{min:Y(0),max:Y(100),step:Y(1),range:Boolean,reverse:Boolean,disabled:Boolean,readonly:Boolean,vertical:Boolean,barHeight:j,buttonSize:j,activeColor:String,inactiveColor:String,modelValue:{type:[Number,Array],default:0}},emits:["change","dragEnd","dragStart","update:modelValue"],setup(n,{emit:l,slots:r}){let i,c,u;const d=a(),v=[a(),a()],p=a(),f=Ue(),m=o((()=>Number(n.max)-Number(n.min))),h=o((()=>{const e=n.vertical?"width":"height";return{background:n.inactiveColor,[e]:se(n.barHeight)}})),y=e=>n.range&&Array.isArray(e),b=()=>{const{modelValue:e,min:t}=n;return y(e)?100*(e[1]-e[0])/m.value+"%":100*(e-Number(t))/m.value+"%"},w=o((()=>{const e=n.vertical?"height":"width",t={[e]:b(),background:n.activeColor};p.value&&(t.transition="none");return t[n.vertical?n.reverse?"bottom":"top":n.reverse?"right":"left"]=(()=>{const{modelValue:e,min:t}=n;return y(e)?100*(e[0]-Number(t))/m.value+"%":"0%"})(),t})),x=t=>{const o=+n.min,a=+n.max,l=+n.step;t=ve(t,o,a);return function(t,n){const o=e(10,10);return Math.round((t+n)*o)/o}(o,Math.round((t-o)/l)*l)},C=()=>{const e=n.modelValue;u=y(e)?e.map(x):x(e)},S=(e,t)=>{e=y(e)?(e=>{var t,o;const a=null!=(t=e[0])?t:Number(n.min),l=null!=(o=e[1])?o:Number(n.max);return a>l?[l,a]:[a,l]})(e).map(x):x(e),L(e,n.modelValue)||l("update:modelValue",e),t&&!L(e,u)&&l("change",e)},k=e=>{if(e.stopPropagation(),n.disabled||n.readonly)return;C();const{min:t,reverse:o,vertical:a,modelValue:l}=n,r=F(d),i=a?r.height:r.width,s=Number(t)+(a?o?r.bottom-e.clientY:e.clientY-r.top:o?r.right-e.clientX:e.clientX-r.left)/i*m.value;if(y(l)){const[e,t]=l;S(s<=(e+t)/2?[s,t]:[e,s],!0)}else S(s,!0)},O=e=>{if(n.disabled||n.readonly)return;"start"===p.value&&l("dragStart",e),ae(e,!0),f.move(e),p.value="dragging";const t=F(d);let o=(n.vertical?f.deltaY.value:f.deltaX.value)/(n.vertical?t.height:t.width)*m.value;if(n.reverse&&(o=-o),y(u)){const e=n.reverse?1-i:i;c[e]=u[e]+o}else c=u+o;S(c)},z=e=>{n.disabled||n.readonly||("dragging"===p.value&&(S(c,!0),l("dragEnd",e)),p.value="")},B=e=>{if("number"==typeof e){return jt("button-wrapper",["left","right"][e])}return jt("button-wrapper",n.reverse?"left":"right")},I=(e,t)=>{const o="dragging"===p.value;if("number"==typeof t){const n=r[0===t?"left-button":"right-button"];let a;if(o&&Array.isArray(c)&&(a=c[0]>c[1]?1^i:i),n)return n({value:e,dragging:o,dragIndex:a})}return r.button?r.button({value:e,dragging:o}):g("div",{class:jt("button"),style:ce(n.buttonSize)},null)},T=e=>{const t="number"==typeof e?n.modelValue[e]:n.modelValue;return g("div",{ref:v[null!=e?e:0],role:"slider",class:B(e),tabindex:n.disabled?void 0:0,"aria-valuemin":n.min,"aria-valuenow":t,"aria-valuemax":n.max,"aria-disabled":n.disabled||void 0,"aria-readonly":n.readonly||void 0,"aria-orientation":n.vertical?"vertical":"horizontal",onTouchstartPassive:t=>{"number"==typeof e&&(i=e),(e=>{n.disabled||n.readonly||(f.start(e),c=n.modelValue,C(),p.value="start")})(t)},onTouchend:z,onTouchcancel:z,onClick:oe},[I(t,e)])};return S(n.modelValue),function(e){const n=t(ne,null);n&&!n.customValue.value&&(n.customValue.value=e,s(e,(()=>{n.resetValidation(),n.validateWithTrigger("onChange")})))}((()=>n.modelValue)),v.forEach((e=>{K("touchmove",O,{target:e})})),()=>g("div",{ref:d,style:h.value,class:jt({vertical:n.vertical,disabled:n.disabled}),onClick:k},[g("div",{class:jt("bar"),style:w.value},[n.range?[T(0),T(1)]:T()])])}}));export{ct as A,Lt as N,gt as S,At as a,ft as b,Pt as c,Mt as d,Tt as s};
