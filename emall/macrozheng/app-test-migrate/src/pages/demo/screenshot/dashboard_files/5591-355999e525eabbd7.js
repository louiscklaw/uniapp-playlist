"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5591],{11753:function(e,t,r){r.d(t,{$l:function(){return o},BN:function(){return F},DY:function(){return E},J$:function(){return G},JN:function(){return R},LI:function(){return D},PM:function(){return s},W6:function(){return S},i_:function(){return u},ko:function(){return en},kw:function(){return N},mf:function(){return l},o8:function(){return a},qC:function(){return M},s6:function(){return er},sj:function(){return x},u3:function(){return j},u_:function(){return Y},w6:function(){return C},xD:function(){return ei}});var n=r(67294);let i=()=>{},u=i(),o=Object,a=e=>e===u,l=e=>"function"==typeof e,s=(e,t)=>({...e,...t}),c=e=>l(e.then),f=new WeakMap,d=0,g=e=>{let t,r;let n=typeof e,i=e&&e.constructor,u=i==Date;if(o(e)!==e||u||i==RegExp)t=u?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(t=f.get(e))return t;if(t=++d+"~",f.set(e,t),i==Array){for(r=0,t="@";r<e.length;r++)t+=g(e[r])+",";f.set(e,t)}if(i==o){t="#";let n=o.keys(e).sort();for(;!a(r=n.pop());)a(e[r])||(t+=r+":"+g(e[r])+",");f.set(e,t)}}return t},E=new WeakMap,w={},_={},h="undefined",p=typeof window!=h,v=typeof document!=h,y=()=>p&&typeof window.requestAnimationFrame!=h,R=(e,t)=>{let r=E.get(e);return[()=>!a(t)&&e.get(t)||w,n=>{if(!a(t)){let i=e.get(t);t in _||(_[t]=i),r[5](t,s(i,n),i||w)}},r[6],()=>!a(t)&&t in _?_[t]:!a(t)&&e.get(t)||w]},T=!0,[m,b]=p&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[i,i],O=()=>{let e=v&&document.visibilityState;return a(e)||"hidden"!==e},V=e=>(v&&document.addEventListener("visibilitychange",e),m("focus",e),()=>{v&&document.removeEventListener("visibilitychange",e),b("focus",e)}),L=e=>{let t=()=>{T=!0,e()},r=()=>{T=!1};return m("online",t),m("offline",r),()=>{b("online",t),b("offline",r)}},k={initFocus:V,initReconnect:L},C=!n.useId,S=!p||"Deno"in window,N=e=>y()?window.requestAnimationFrame(e):setTimeout(e,1),D=S?n.useEffect:n.useLayoutEffect,I="undefined"!=typeof navigator&&navigator.connection,A=!S&&I&&(["slow-2g","2g"].includes(I.effectiveType)||I.saveData),M=e=>{if(l(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?g(e):"",t]},P=0,j=()=>++P;var x={__proto__:null,ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function F(...e){let[t,r,n,i]=e,o=s({populateCache:!0,throwOnError:!0},"boolean"==typeof i?{revalidate:i}:i||{}),f=o.populateCache,d=o.rollbackOnError,g=o.optimisticData,w=!1!==o.revalidate,_=e=>"function"==typeof d?d(e):!1!==d,h=o.throwOnError;if(l(r)){let e=[],n=t.keys();for(let i of n)!/^\$(inf|sub)\$/.test(i)&&r(t.get(i)._k)&&e.push(i);return Promise.all(e.map(p))}return p(r);async function p(r){let i;let[o]=M(r);if(!o)return;let[s,d]=R(t,o),[p,v,y,T]=E.get(t),m=p[o],b=()=>w&&(delete y[o],delete T[o],m&&m[0])?m[0](2).then(()=>s().data):s().data;if(e.length<3)return b();let O=n,V=j();v[o]=[V,0];let L=!a(g),k=s(),C=k.data,S=k._c,N=a(S)?C:S;if(L&&d({data:g=l(g)?g(N,C):g,_c:N}),l(O))try{O=O(N)}catch(e){i=e}if(O&&c(O)){if(O=await O.catch(e=>{i=e}),V!==v[o][0]){if(i)throw i;return O}i&&L&&_(i)&&(f=!0,d({data:O=N,_c:u}))}f&&!i&&(l(f)&&(O=f(O,N)),d({data:O,error:u,_c:u})),v[o][1]=j();let D=await b();if(d({_c:u}),i){if(h)throw i;return}return f?D:O}}let W=(e,t)=>{for(let r in e)e[r][0]&&e[r][0](t)},J=(e,t)=>{if(!E.has(e)){let r=s(k,t),n={},o=F.bind(u,e),a=i,l={},c=(e,t)=>{let r=l[e]||[];return l[e]=r,r.push(t),()=>r.splice(r.indexOf(t),1)},f=(t,r,n)=>{e.set(t,r);let i=l[t];if(i)for(let e of i)e(r,n)},d=()=>{if(!E.has(e)&&(E.set(e,[n,{},{},{},o,f,c]),!S)){let t=r.initFocus(setTimeout.bind(u,W.bind(u,n,0))),i=r.initReconnect(setTimeout.bind(u,W.bind(u,n,1)));a=()=>{t&&t(),i&&i(),E.delete(e)}}};return d(),[e,o,d,a]}return[e,E.get(e)[4]]},U=(e,t,r,n,i)=>{let u=r.errorRetryCount,o=i.retryCount,l=~~((Math.random()+.5)*(1<<(o<8?o:8)))*r.errorRetryInterval;(a(u)||!(o>u))&&setTimeout(n,l,i)},$=(e,t)=>g(e)==g(t),[q,B]=J(new Map),Y=s({onLoadingSlow:i,onSuccess:i,onError:i,onErrorRetry:U,onDiscarded:i,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:A?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:A?5e3:3e3,compare:$,isPaused:()=>!1,cache:q,mutate:B,fallback:{}},{isOnline:()=>T,isVisible:O}),Z=(e,t)=>{let r=s(e,t);if(t){let{use:n,fallback:i}=e,{use:u,fallback:o}=t;n&&u&&(r.use=n.concat(u)),i&&o&&(r.fallback=s(i,o))}return r},z=(0,n.createContext)({}),G=e=>{let{value:t}=e,r=(0,n.useContext)(z),i=l(t),o=(0,n.useMemo)(()=>i?t(r):t,[i,r,t]),a=(0,n.useMemo)(()=>i?o:Z(r,o),[i,r,o]),c=o&&o.provider,f=(0,n.useRef)(u);c&&!f.current&&(f.current=J(c(a.cache||q),o));let d=f.current;return d&&(a.cache=d[0],a.mutate=d[1]),D(()=>{if(d)return d[2]&&d[2](),d[3]},[]),(0,n.createElement)(z.Provider,s(e,{value:a}))},H=p&&window.__SWR_DEVTOOLS_USE__,K=H?window.__SWR_DEVTOOLS_USE__:[],Q=e=>l(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],X=()=>s(Y,(0,n.useContext)(z)),ee=e=>(t,r,n)=>{let i=r&&((...e)=>{let[n]=M(t),[,,,i]=E.get(q),u=i[n];return a(u)?r(...e):(delete i[n],u)});return e(t,i,n)},et=K.concat(ee),er=e=>function(...t){let r=X(),[n,i,u]=Q(t),o=Z(r,u),a=e,{use:l}=o,s=(l||[]).concat(et);for(let e=s.length;e--;)a=s[e](a);return a(n,i||o.fetcher||null,o)},en=(e,t,r)=>{let n=t[e]||(t[e]=[]);return n.push(r),()=>{let e=n.indexOf(r);e>=0&&(n[e]=n[n.length-1],n.pop())}},ei=(e,t)=>(...r)=>{let[n,i,u]=Q(r),o=(u.use||[]).concat(t);return e(n,i,{...u,use:o})};H&&(window.__SWR_DEVTOOLS_REACT__=n)},95591:function(e,t,r){r.d(t,{ZP:function(){return s}});var n=r(67294),i=r(61688),u=r(11753);let o=n.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),a={dedupe:!0},l=(e,t,r)=>{let{cache:l,compare:s,suspense:c,fallbackData:f,revalidateOnMount:d,revalidateIfStale:g,refreshInterval:E,refreshWhenHidden:w,refreshWhenOffline:_,keepPreviousData:h}=r,[p,v,y,R]=u.DY.get(l),[T,m]=(0,u.qC)(e),b=(0,n.useRef)(!1),O=(0,n.useRef)(!1),V=(0,n.useRef)(T),L=(0,n.useRef)(t),k=(0,n.useRef)(r),C=()=>k.current,S=()=>C().isVisible()&&C().isOnline(),[N,D,I,A]=(0,u.JN)(l,T),M=(0,n.useRef)({}).current,P=(0,u.o8)(f)?r.fallback[T]:f,j=(e,t)=>{for(let r in M){let n=r;if("data"===n){if(!s(e[n],t[n])&&(!(0,u.o8)(e[n])||!s(Y,t[n])))return!1}else if(t[n]!==e[n])return!1}return!0},x=(0,n.useMemo)(()=>{let e=!!T&&!!t&&((0,u.o8)(d)?!C().isPaused()&&!c&&(!!(0,u.o8)(g)||g):d),r=t=>{let r=(0,u.PM)(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},n=N(),i=A(),o=r(n),a=n===i?o:r(i),l=o;return[()=>{let e=r(N()),t=j(e,l);return t?(l.data=e.data,l.isLoading=e.isLoading,l.isValidating=e.isValidating,l.error=e.error,l):(l=e,e)},()=>a]},[l,T]),F=(0,i.useSyncExternalStore)((0,n.useCallback)(e=>I(T,(t,r)=>{j(r,t)||e()}),[l,T]),x[0],x[1]),W=!b.current,J=p[T]&&p[T].length>0,U=F.data,$=(0,u.o8)(U)?P:U,q=F.error,B=(0,n.useRef)($),Y=h?(0,u.o8)(U)?B.current:U:$,Z=(!J||!!(0,u.o8)(q))&&(W&&!(0,u.o8)(d)?d:!C().isPaused()&&(c?!(0,u.o8)($)&&g:(0,u.o8)($)||g)),z=!!(T&&t&&W&&Z),G=(0,u.o8)(F.isValidating)?z:F.isValidating,H=(0,u.o8)(F.isLoading)?z:F.isLoading,K=(0,n.useCallback)(async e=>{let t,n;let i=L.current;if(!T||!i||O.current||C().isPaused())return!1;let o=!0,a=e||{},l=!y[T]||!a.dedupe,c=()=>u.w6?!O.current&&T===V.current&&b.current:T===V.current,f={isValidating:!1,isLoading:!1},d=()=>{D(f)},g=()=>{let e=y[T];e&&e[1]===n&&delete y[T]},E={isValidating:!0};(0,u.o8)(N().data)&&(E.isLoading=!0);try{if(l&&(D(E),r.loadingTimeout&&(0,u.o8)(N().data)&&setTimeout(()=>{o&&c()&&C().onLoadingSlow(T,r)},r.loadingTimeout),y[T]=[i(m),(0,u.u3)()]),[t,n]=y[T],t=await t,l&&setTimeout(g,r.dedupingInterval),!y[T]||y[T][1]!==n)return l&&c()&&C().onDiscarded(T),!1;f.error=u.i_;let e=v[T];if(!(0,u.o8)(e)&&(n<=e[0]||n<=e[1]||0===e[1]))return d(),l&&c()&&C().onDiscarded(T),!1;let a=N().data;f.data=s(a,t)?a:t,l&&c()&&C().onSuccess(t,T,r)}catch(r){g();let e=C(),{shouldRetryOnError:t}=e;!e.isPaused()&&(f.error=r,l&&c()&&(e.onError(r,T,e),(!0===t||(0,u.mf)(t)&&t(r))&&S()&&e.onErrorRetry(r,T,e,e=>{let t=p[T];t&&t[0]&&t[0](u.sj.ERROR_REVALIDATE_EVENT,e)},{retryCount:(a.retryCount||0)+1,dedupe:!0})))}return o=!1,d(),!0},[T,l]),Q=(0,n.useCallback)((...e)=>(0,u.BN)(l,V.current,...e),[]);if((0,u.LI)(()=>{L.current=t,k.current=r,(0,u.o8)(U)||(B.current=U)}),(0,u.LI)(()=>{if(!T)return;let e=K.bind(u.i_,a),t=0,r=(r,n={})=>{if(r==u.sj.FOCUS_EVENT){let r=Date.now();C().revalidateOnFocus&&r>t&&S()&&(t=r+C().focusThrottleInterval,e())}else if(r==u.sj.RECONNECT_EVENT)C().revalidateOnReconnect&&S()&&e();else if(r==u.sj.MUTATE_EVENT)return K();else if(r==u.sj.ERROR_REVALIDATE_EVENT)return K(n)},n=(0,u.ko)(T,p,r);return O.current=!1,V.current=T,b.current=!0,D({_k:m}),Z&&((0,u.o8)($)||u.W6?e():(0,u.kw)(e)),()=>{O.current=!0,n()}},[T]),(0,u.LI)(()=>{let e;function t(){let t=(0,u.mf)(E)?E(N().data):E;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!N().error&&(w||C().isVisible())&&(_||C().isOnline())?K(a).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[E,w,_,T]),(0,n.useDebugValue)(Y),c&&(0,u.o8)($)&&T){if(!u.w6&&u.W6)throw Error("Fallback data is required when using suspense in SSR.");L.current=t,k.current=r,O.current=!1;let e=R[T];if(!(0,u.o8)(e)){let t=Q(e);o(t)}if((0,u.o8)(q)){let e=K(a);(0,u.o8)(Y)||(e.status="fulfilled",e.value=!0),o(e)}else throw q}return{mutate:Q,get data(){return M.data=!0,Y},get error(){return M.error=!0,q},get isValidating(){return M.isValidating=!0,G},get isLoading(){return M.isLoading=!0,H}}};u.$l.defineProperty(u.J$,"defaultValue",{value:u.u_});let s=(0,u.s6)(l)}}]);