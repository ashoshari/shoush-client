import{r as m,R as $t}from"./react-BHfQynsH.js";import{r as _t}from"./react-dom-D7AI4CH_.js";function Q(t){return St(t)?(t.nodeName||"").toLowerCase():"#document"}function M(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function V(t){var e;return(e=(St(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function St(t){return t instanceof Node||t instanceof M(t).Node}function T(t){return t instanceof Element||t instanceof M(t).Element}function I(t){return t instanceof HTMLElement||t instanceof M(t).HTMLElement}function yt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof M(t).ShadowRoot}function G(t){const{overflow:e,overflowX:o,overflowY:n,display:r}=B(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(r)}function Ht(t){return["table","td","th"].includes(Q(t))}function dt(t){const e=mt(),o=B(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function jt(t){let e=$(t);for(;I(e)&&!q(e);){if(dt(e))return e;e=$(e)}return null}function mt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function q(t){return["html","body","#document"].includes(Q(t))}function B(t){return M(t).getComputedStyle(t)}function st(t){return T(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function $(t){if(Q(t)==="html")return t;const e=t.assignedSlot||t.parentNode||yt(t)&&t.host||V(t);return yt(e)?e.host:e}function Lt(t){const e=$(t);return q(e)?t.ownerDocument?t.ownerDocument.body:t.body:I(e)&&G(e)?e:Lt(e)}function Z(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const r=Lt(t),s=r===((n=t.ownerDocument)==null?void 0:n.body),i=M(r);return s?e.concat(i,i.visualViewport||[],G(r)?r:[],i.frameElement&&o?Z(i.frameElement):[]):e.concat(r,Z(r,[],o))}const U=Math.min,H=Math.max,nt=Math.round,tt=Math.floor,_=t=>({x:t,y:t}),zt={left:"right",right:"left",bottom:"top",top:"bottom"},Xt={start:"end",end:"start"};function Yt(t,e,o){return H(t,U(e,o))}function ct(t,e){return typeof t=="function"?t(e):t}function K(t){return t.split("-")[0]}function J(t){return t.split("-")[1]}function qt(t){return t==="x"?"y":"x"}function gt(t){return t==="y"?"height":"width"}function pt(t){return["top","bottom"].includes(K(t))?"y":"x"}function ht(t){return qt(pt(t))}function Ut(t,e,o){o===void 0&&(o=!1);const n=J(t),r=ht(t),s=gt(r);let i=r==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(i=ot(i)),[i,ot(i)]}function Kt(t){const e=ot(t);return[ft(t),e,ft(e)]}function ft(t){return t.replace(/start|end/g,e=>Xt[e])}function Qt(t,e,o){const n=["left","right"],r=["right","left"],s=["top","bottom"],i=["bottom","top"];switch(t){case"top":case"bottom":return o?e?r:n:e?n:r;case"left":case"right":return e?s:i;default:return[]}}function Zt(t,e,o,n){const r=J(t);let s=Qt(K(t),o==="start",n);return r&&(s=s.map(i=>i+"-"+r),e&&(s=s.concat(s.map(ft)))),s}function ot(t){return t.replace(/left|right|bottom|top/g,e=>zt[e])}function Gt(t){return{top:0,right:0,bottom:0,left:0,...t}}function Tt(t){return typeof t!="number"?Gt(t):{top:t,right:t,bottom:t,left:t}}function rt(t){const{x:e,y:o,width:n,height:r}=t;return{width:n,height:r,top:o,left:e,right:e+n,bottom:o+r,x:e,y:o}}function vt(t,e,o){let{reference:n,floating:r}=t;const s=pt(e),i=ht(e),c=gt(i),l=K(e),a=s==="y",u=n.x+n.width/2-r.width/2,d=n.y+n.height/2-r.height/2,g=n[c]/2-r[c]/2;let f;switch(l){case"top":f={x:u,y:n.y-r.height};break;case"bottom":f={x:u,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:d};break;case"left":f={x:n.x-r.width,y:d};break;default:f={x:n.x,y:n.y}}switch(J(e)){case"start":f[i]-=g*(o&&a?-1:1);break;case"end":f[i]+=g*(o&&a?-1:1);break}return f}const Jt=async(t,e,o)=>{const{placement:n="bottom",strategy:r="absolute",middleware:s=[],platform:i}=o,c=s.filter(Boolean),l=await(i.isRTL==null?void 0:i.isRTL(e));let a=await i.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:d}=vt(a,n,l),g=n,f={},p=0;for(let w=0;w<c.length;w++){const{name:y,fn:h}=c[w],{x:v,y:x,data:R,reset:b}=await h({x:u,y:d,initialPlacement:n,placement:g,strategy:r,middlewareData:f,rects:a,platform:i,elements:{reference:t,floating:e}});u=v??u,d=x??d,f={...f,[y]:{...f[y],...R}},b&&p<=50&&(p++,typeof b=="object"&&(b.placement&&(g=b.placement),b.rects&&(a=b.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:r}):b.rects),{x:u,y:d}=vt(a,g,l)),w=-1)}return{x:u,y:d,placement:g,strategy:r,middlewareData:f}};async function te(t,e){var o;e===void 0&&(e={});const{x:n,y:r,platform:s,rects:i,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:g=!1,padding:f=0}=ct(e,t),p=Tt(f),y=c[g?d==="floating"?"reference":"floating":d],h=rt(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(y)))==null||o?y:y.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:a,rootBoundary:u,strategy:l})),v=d==="floating"?{x:n,y:r,width:i.floating.width,height:i.floating.height}:i.reference,x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),R=await(s.isElement==null?void 0:s.isElement(x))?await(s.getScale==null?void 0:s.getScale(x))||{x:1,y:1}:{x:1,y:1},b=rt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:v,offsetParent:x,strategy:l}):v);return{top:(h.top-b.top+p.top)/R.y,bottom:(b.bottom-h.bottom+p.bottom)/R.y,left:(h.left-b.left+p.left)/R.x,right:(b.right-h.right+p.right)/R.x}}const ee=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:r,rects:s,platform:i,elements:c,middlewareData:l}=e,{element:a,padding:u=0}=ct(t,e)||{};if(a==null)return{};const d=Tt(u),g={x:o,y:n},f=ht(r),p=gt(f),w=await i.getDimensions(a),y=f==="y",h=y?"top":"left",v=y?"bottom":"right",x=y?"clientHeight":"clientWidth",R=s.reference[p]+s.reference[f]-g[f]-s.floating[p],b=g[f]-s.reference[f],C=await(i.getOffsetParent==null?void 0:i.getOffsetParent(a));let S=C?C[x]:0;(!S||!await(i.isElement==null?void 0:i.isElement(C)))&&(S=c.floating[x]||s.floating[p]);const O=R/2-b/2,N=S/2-w[p]/2-1,k=U(d[h],N),F=U(d[v],N),P=k,W=S-w[p]-F,L=S/2-w[p]/2+O,A=Yt(P,L,W),D=!l.arrow&&J(r)!=null&&L!==A&&s.reference[p]/2-(L<P?k:F)-w[p]/2<0,E=D?L<P?L-P:L-W:0;return{[f]:g[f]+E,data:{[f]:A,centerOffset:L-A-E,...D&&{alignmentOffset:E}},reset:D}}}),ne=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:r,middlewareData:s,rects:i,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:g,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:w=!0,...y}=ct(t,e);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const h=K(r),v=K(c)===c,x=await(l.isRTL==null?void 0:l.isRTL(a.floating)),R=g||(v||!w?[ot(c)]:Kt(c));!g&&p!=="none"&&R.push(...Zt(c,w,p,x));const b=[c,...R],C=await te(e,y),S=[];let O=((n=s.flip)==null?void 0:n.overflows)||[];if(u&&S.push(C[h]),d){const P=Ut(r,i,x);S.push(C[P[0]],C[P[1]])}if(O=[...O,{placement:r,overflows:S}],!S.every(P=>P<=0)){var N,k;const P=(((N=s.flip)==null?void 0:N.index)||0)+1,W=b[P];if(W)return{data:{index:P,overflows:O},reset:{placement:W}};let L=(k=O.filter(A=>A.overflows[0]<=0).sort((A,D)=>A.overflows[1]-D.overflows[1])[0])==null?void 0:k.placement;if(!L)switch(f){case"bestFit":{var F;const A=(F=O.map(D=>[D.placement,D.overflows.filter(E=>E>0).reduce((E,z)=>E+z,0)]).sort((D,E)=>D[1]-E[1])[0])==null?void 0:F[0];A&&(L=A);break}case"initialPlacement":L=c;break}if(r!==L)return{reset:{placement:L}}}return{}}}};async function oe(t,e){const{placement:o,platform:n,elements:r}=t,s=await(n.isRTL==null?void 0:n.isRTL(r.floating)),i=K(o),c=J(o),l=pt(o)==="y",a=["left","top"].includes(i)?-1:1,u=s&&l?-1:1,d=ct(e,t);let{mainAxis:g,crossAxis:f,alignmentAxis:p}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return c&&typeof p=="number"&&(f=c==="end"?p*-1:p),l?{x:f*u,y:g*a}:{x:g*a,y:f*u}}const re=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;const{x:r,y:s,placement:i,middlewareData:c}=e,l=await oe(e,t);return i===((o=c.offset)==null?void 0:o.placement)&&(n=c.arrow)!=null&&n.alignmentOffset?{}:{x:r+l.x,y:s+l.y,data:{...l,placement:i}}}}};function Dt(t){const e=B(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const r=I(t),s=r?t.offsetWidth:o,i=r?t.offsetHeight:n,c=nt(o)!==s||nt(n)!==i;return c&&(o=s,n=i),{width:o,height:n,$:c}}function wt(t){return T(t)?t:t.contextElement}function Y(t){const e=wt(t);if(!I(e))return _(1);const o=e.getBoundingClientRect(),{width:n,height:r,$:s}=Dt(e);let i=(s?nt(o.width):o.width)/n,c=(s?nt(o.height):o.height)/r;return(!i||!Number.isFinite(i))&&(i=1),(!c||!Number.isFinite(c))&&(c=1),{x:i,y:c}}const ie=_(0);function Mt(t){const e=M(t);return!mt()||!e.visualViewport?ie:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function se(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==M(t)?!1:e}function j(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const r=t.getBoundingClientRect(),s=wt(t);let i=_(1);e&&(n?T(n)&&(i=Y(n)):i=Y(t));const c=se(s,o,n)?Mt(s):_(0);let l=(r.left+c.x)/i.x,a=(r.top+c.y)/i.y,u=r.width/i.x,d=r.height/i.y;if(s){const g=M(s),f=n&&T(n)?M(n):n;let p=g,w=p.frameElement;for(;w&&n&&f!==p;){const y=Y(w),h=w.getBoundingClientRect(),v=B(w),x=h.left+(w.clientLeft+parseFloat(v.paddingLeft))*y.x,R=h.top+(w.clientTop+parseFloat(v.paddingTop))*y.y;l*=y.x,a*=y.y,u*=y.x,d*=y.y,l+=x,a+=R,p=M(w),w=p.frameElement}}return rt({width:u,height:d,x:l,y:a})}const ce=[":popover-open",":modal"];function xt(t){return ce.some(e=>{try{return t.matches(e)}catch{return!1}})}function le(t){let{elements:e,rect:o,offsetParent:n,strategy:r}=t;const s=r==="fixed",i=V(n),c=e?xt(e.floating):!1;if(n===i||c&&s)return o;let l={scrollLeft:0,scrollTop:0},a=_(1);const u=_(0),d=I(n);if((d||!d&&!s)&&((Q(n)!=="body"||G(i))&&(l=st(n)),I(n))){const g=j(n);a=Y(n),u.x=g.x+n.clientLeft,u.y=g.y+n.clientTop}return{width:o.width*a.x,height:o.height*a.y,x:o.x*a.x-l.scrollLeft*a.x+u.x,y:o.y*a.y-l.scrollTop*a.y+u.y}}function fe(t){return Array.from(t.getClientRects())}function Ft(t){return j(V(t)).left+st(t).scrollLeft}function ae(t){const e=V(t),o=st(t),n=t.ownerDocument.body,r=H(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),s=H(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let i=-o.scrollLeft+Ft(t);const c=-o.scrollTop;return B(n).direction==="rtl"&&(i+=H(e.clientWidth,n.clientWidth)-r),{width:r,height:s,x:i,y:c}}function ue(t,e){const o=M(t),n=V(t),r=o.visualViewport;let s=n.clientWidth,i=n.clientHeight,c=0,l=0;if(r){s=r.width,i=r.height;const a=mt();(!a||a&&e==="fixed")&&(c=r.offsetLeft,l=r.offsetTop)}return{width:s,height:i,x:c,y:l}}function de(t,e){const o=j(t,!0,e==="fixed"),n=o.top+t.clientTop,r=o.left+t.clientLeft,s=I(t)?Y(t):_(1),i=t.clientWidth*s.x,c=t.clientHeight*s.y,l=r*s.x,a=n*s.y;return{width:i,height:c,x:l,y:a}}function Rt(t,e,o){let n;if(e==="viewport")n=ue(t,o);else if(e==="document")n=ae(V(t));else if(T(e))n=de(e,o);else{const r=Mt(t);n={...e,x:e.x-r.x,y:e.y-r.y}}return rt(n)}function kt(t,e){const o=$(t);return o===e||!T(o)||q(o)?!1:B(o).position==="fixed"||kt(o,e)}function me(t,e){const o=e.get(t);if(o)return o;let n=Z(t,[],!1).filter(c=>T(c)&&Q(c)!=="body"),r=null;const s=B(t).position==="fixed";let i=s?$(t):t;for(;T(i)&&!q(i);){const c=B(i),l=dt(i);!l&&c.position==="fixed"&&(r=null),(s?!l&&!r:!l&&c.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||G(i)&&!l&&kt(t,i))?n=n.filter(u=>u!==i):r=c,i=$(i)}return e.set(t,n),n}function ge(t){let{element:e,boundary:o,rootBoundary:n,strategy:r}=t;const i=[...o==="clippingAncestors"?xt(e)?[]:me(e,this._c):[].concat(o),n],c=i[0],l=i.reduce((a,u)=>{const d=Rt(e,u,r);return a.top=H(d.top,a.top),a.right=U(d.right,a.right),a.bottom=U(d.bottom,a.bottom),a.left=H(d.left,a.left),a},Rt(e,c,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function pe(t){const{width:e,height:o}=Dt(t);return{width:e,height:o}}function he(t,e,o){const n=I(e),r=V(e),s=o==="fixed",i=j(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=_(0);if(n||!n&&!s)if((Q(e)!=="body"||G(r))&&(c=st(e)),n){const d=j(e,!0,s,e);l.x=d.x+e.clientLeft,l.y=d.y+e.clientTop}else r&&(l.x=Ft(r));const a=i.left+c.scrollLeft-l.x,u=i.top+c.scrollTop-l.y;return{x:a,y:u,width:i.width,height:i.height}}function lt(t){return B(t).position==="static"}function bt(t,e){return!I(t)||B(t).position==="fixed"?null:e?e(t):t.offsetParent}function Wt(t,e){const o=M(t);if(xt(t))return o;if(!I(t)){let r=$(t);for(;r&&!q(r);){if(T(r)&&!lt(r))return r;r=$(r)}return o}let n=bt(t,e);for(;n&&Ht(n)&&lt(n);)n=bt(n,e);return n&&q(n)&&lt(n)&&!dt(n)?o:n||jt(t)||o}const we=async function(t){const e=this.getOffsetParent||Wt,o=this.getDimensions,n=await o(t.floating);return{reference:he(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function xe(t){return B(t).direction==="rtl"}const Bt={convertOffsetParentRelativeRectToViewportRelativeRect:le,getDocumentElement:V,getClippingRect:ge,getOffsetParent:Wt,getElementRects:we,getClientRects:fe,getDimensions:pe,getScale:Y,isElement:T,isRTL:xe};function ye(t,e){let o=null,n;const r=V(t);function s(){var c;clearTimeout(n),(c=o)==null||c.disconnect(),o=null}function i(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),s();const{left:a,top:u,width:d,height:g}=t.getBoundingClientRect();if(c||e(),!d||!g)return;const f=tt(u),p=tt(r.clientWidth-(a+d)),w=tt(r.clientHeight-(u+g)),y=tt(a),v={rootMargin:-f+"px "+-p+"px "+-w+"px "+-y+"px",threshold:H(0,U(1,l))||1};let x=!0;function R(b){const C=b[0].intersectionRatio;if(C!==l){if(!x)return i();C?i(!1,C):n=setTimeout(()=>{i(!1,1e-7)},1e3)}x=!1}try{o=new IntersectionObserver(R,{...v,root:r.ownerDocument})}catch{o=new IntersectionObserver(R,v)}o.observe(t)}return i(!0),s}function Be(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:i=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,a=wt(t),u=r||s?[...a?Z(a):[],...Z(e)]:[];u.forEach(h=>{r&&h.addEventListener("scroll",o,{passive:!0}),s&&h.addEventListener("resize",o)});const d=a&&c?ye(a,o):null;let g=-1,f=null;i&&(f=new ResizeObserver(h=>{let[v]=h;v&&v.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var x;(x=f)==null||x.observe(e)})),o()}),a&&!l&&f.observe(a),f.observe(e));let p,w=l?j(t):null;l&&y();function y(){const h=j(t);w&&(h.x!==w.x||h.y!==w.y||h.width!==w.width||h.height!==w.height)&&o(),w=h,p=requestAnimationFrame(y)}return o(),()=>{var h;u.forEach(v=>{r&&v.removeEventListener("scroll",o),s&&v.removeEventListener("resize",o)}),d==null||d(),(h=f)==null||h.disconnect(),f=null,l&&cancelAnimationFrame(p)}}const Ie=re,Ne=ne,Et=ee,ve=(t,e,o)=>{const n=new Map,r={platform:Bt,...o},s={...r.platform,_c:n};return Jt(t,e,{...r,platform:s})},Ve=t=>{function e(o){return{}.hasOwnProperty.call(o,"current")}return{name:"arrow",options:t,fn(o){const{element:n,padding:r}=typeof t=="function"?t(o):t;return n&&e(n)?n.current!=null?Et({element:n.current,padding:r}).fn(o):{}:n?Et({element:n,padding:r}).fn(o):{}}}};var et=typeof document<"u"?m.useLayoutEffect:m.useEffect;function it(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let o,n,r;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(o=t.length,o!==e.length)return!1;for(n=o;n--!==0;)if(!it(t[n],e[n]))return!1;return!0}if(r=Object.keys(t),o=r.length,o!==Object.keys(e).length)return!1;for(n=o;n--!==0;)if(!{}.hasOwnProperty.call(e,r[n]))return!1;for(n=o;n--!==0;){const s=r[n];if(!(s==="_owner"&&t.$$typeof)&&!it(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function It(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Ct(t,e){const o=It(t);return Math.round(e*o)/o}function Ot(t){const e=m.useRef(t);return et(()=>{e.current=t}),e}function Re(t){t===void 0&&(t={});const{placement:e="bottom",strategy:o="absolute",middleware:n=[],platform:r,elements:{reference:s,floating:i}={},transform:c=!0,whileElementsMounted:l,open:a}=t,[u,d]=m.useState({x:0,y:0,strategy:o,placement:e,middlewareData:{},isPositioned:!1}),[g,f]=m.useState(n);it(g,n)||f(n);const[p,w]=m.useState(null),[y,h]=m.useState(null),v=m.useCallback(E=>{E!==C.current&&(C.current=E,w(E))},[]),x=m.useCallback(E=>{E!==S.current&&(S.current=E,h(E))},[]),R=s||p,b=i||y,C=m.useRef(null),S=m.useRef(null),O=m.useRef(u),N=l!=null,k=Ot(l),F=Ot(r),P=m.useCallback(()=>{if(!C.current||!S.current)return;const E={placement:e,strategy:o,middleware:g};F.current&&(E.platform=F.current),ve(C.current,S.current,E).then(z=>{const X={...z,isPositioned:!0};W.current&&!it(O.current,X)&&(O.current=X,_t.flushSync(()=>{d(X)}))})},[g,e,o,F]);et(()=>{a===!1&&O.current.isPositioned&&(O.current.isPositioned=!1,d(E=>({...E,isPositioned:!1})))},[a]);const W=m.useRef(!1);et(()=>(W.current=!0,()=>{W.current=!1}),[]),et(()=>{if(R&&(C.current=R),b&&(S.current=b),R&&b){if(k.current)return k.current(R,b,P);P()}},[R,b,P,k,N]);const L=m.useMemo(()=>({reference:C,floating:S,setReference:v,setFloating:x}),[v,x]),A=m.useMemo(()=>({reference:R,floating:b}),[R,b]),D=m.useMemo(()=>{const E={position:o,left:0,top:0};if(!A.floating)return E;const z=Ct(A.floating,u.x),X=Ct(A.floating,u.y);return c?{...E,transform:"translate("+z+"px, "+X+"px)",...It(A.floating)>=1.5&&{willChange:"transform"}}:{position:o,left:z,top:X}},[o,c,A.floating,u.x,u.y]);return m.useMemo(()=>({...u,update:P,refs:L,elements:A,floatingStyles:D}),[u,P,L,A,D])}const Nt={...$t},be=Nt.useInsertionEffect,Ee=be||(t=>t());function Ce(t){const e=m.useRef(()=>{});return Ee(()=>{e.current=t}),m.useCallback(function(){for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return e.current==null?void 0:e.current(...n)},[])}var at=typeof document<"u"?m.useLayoutEffect:m.useEffect;function ut(){return ut=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},ut.apply(this,arguments)}let Pt=!1,Oe=0;const At=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+Oe++;function Pe(){const[t,e]=m.useState(()=>Pt?At():void 0);return at(()=>{t==null&&e(At())},[]),m.useEffect(()=>{Pt=!0},[]),t}const Ae=Nt.useId,Vt=Ae||Pe,$e=m.forwardRef(function(e,o){const{context:{placement:n,elements:{floating:r},middlewareData:{arrow:s}},width:i=14,height:c=7,tipRadius:l=0,strokeWidth:a=0,staticOffset:u,stroke:d,d:g,style:{transform:f,...p}={},...w}=e,y=Vt();if(!r)return null;const h=a*2,v=h/2,x=i/2*(l/-8+1),R=c/2*l/4,[b,C]=n.split("-"),S=Bt.isRTL(r),O=!!g,N=b==="top"||b==="bottom",k=u&&C==="end"?"bottom":"top";let F=u&&C==="end"?"right":"left";u&&S&&(F=C==="end"?"left":"right");const P=(s==null?void 0:s.x)!=null?u||s.x:"",W=(s==null?void 0:s.y)!=null?u||s.y:"",L=g||"M0,0"+(" H"+i)+(" L"+(i-x)+","+(c-R))+(" Q"+i/2+","+c+" "+x+","+(c-R))+" Z",A={top:O?"rotate(180deg)":"",left:O?"rotate(90deg)":"rotate(-90deg)",bottom:O?"":"rotate(180deg)",right:O?"rotate(-90deg)":"rotate(90deg)"}[b];return m.createElement("svg",ut({},w,{"aria-hidden":!0,ref:o,width:O?i:i+h,height:i,viewBox:"0 0 "+i+" "+(c>i?c:i),style:{position:"absolute",pointerEvents:"none",[F]:P,[k]:W,[b]:N||O?"100%":"calc(100% - "+h/2+"px)",transform:""+A+(f??""),...p}}),h>0&&m.createElement("path",{clipPath:"url(#"+y+")",fill:"none",stroke:d,strokeWidth:h+(g?0:1),d:L}),m.createElement("path",{stroke:h&&!g?w.fill:"none",d:L}),m.createElement("clipPath",{id:y},m.createElement("rect",{x:-v,y:v*(O?-1:1),width:i+h,height:i})))});function Se(){const t=new Map;return{emit(e,o){var n;(n=t.get(e))==null||n.forEach(r=>r(o))},on(e,o){t.set(e,[...t.get(e)||[],o])},off(e,o){var n;t.set(e,((n=t.get(e))==null?void 0:n.filter(r=>r!==o))||[])}}}const Le=m.createContext(null),Te=m.createContext(null),De=()=>{var t;return((t=m.useContext(Le))==null?void 0:t.id)||null},Me=()=>m.useContext(Te);function Fe(t){const{open:e=!1,onOpenChange:o,elements:n}=t,r=Vt(),s=m.useRef({}),[i]=m.useState(()=>Se()),c=De()!=null,[l,a]=m.useState(n.reference),u=Ce((f,p,w)=>{s.current.openEvent=f?p:void 0,i.emit("openchange",{open:f,event:p,reason:w,nested:c}),o==null||o(f,p,w)}),d=m.useMemo(()=>({setPositionReference:a}),[]),g=m.useMemo(()=>({reference:l||n.reference||null,floating:n.floating||null,domReference:n.reference}),[l,n.reference,n.floating]);return m.useMemo(()=>({dataRef:s,open:e,onOpenChange:u,elements:g,events:i,floatingId:r,refs:d}),[e,u,g,i,r,d])}function _e(t){t===void 0&&(t={});const{nodeId:e}=t,o=Fe({...t,elements:{reference:null,floating:null,...t.elements}}),n=t.rootContext||o,r=n.elements,[s,i]=m.useState(null),[c,l]=m.useState(null),u=(r==null?void 0:r.reference)||s,d=m.useRef(null),g=Me();at(()=>{u&&(d.current=u)},[u]);const f=Re({...t,elements:{...r,...c&&{reference:c}}}),p=m.useCallback(x=>{const R=T(x)?{getBoundingClientRect:()=>x.getBoundingClientRect(),contextElement:x}:x;l(R),f.refs.setReference(R)},[f.refs]),w=m.useCallback(x=>{(T(x)||x===null)&&(d.current=x,i(x)),(T(f.refs.reference.current)||f.refs.reference.current===null||x!==null&&!T(x))&&f.refs.setReference(x)},[f.refs]),y=m.useMemo(()=>({...f.refs,setReference:w,setPositionReference:p,domReference:d}),[f.refs,w,p]),h=m.useMemo(()=>({...f.elements,domReference:u}),[f.elements,u]),v=m.useMemo(()=>({...f,...n,refs:y,elements:h,nodeId:e}),[f,y,h,e,n]);return at(()=>{n.dataRef.current.floatingContext=v;const x=g==null?void 0:g.nodesRef.current.find(R=>R.id===e);x&&(x.context=v)}),m.useMemo(()=>({...f,context:v,refs:y,elements:h}),[f,y,h,v])}export{$e as F,Be as a,Ve as b,Ne as f,Ie as o,_e as u};