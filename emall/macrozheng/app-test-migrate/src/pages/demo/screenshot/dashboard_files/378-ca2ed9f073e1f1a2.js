"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[378],{10378:function(e,n,t){t.d(n,{oC:function(){return nt},VY:function(){return e8},ZA:function(){return e4},ck:function(){return nn},wU:function(){return na},__:function(){return ne},v2:function(){return e3},h_:function(){return e9},Ee:function(){return nr},Rk:function(){return no},fC:function(){return e7},Z0:function(){return nu},Tr:function(){return nl},tu:function(){return ni},fF:function(){return nc},xz:function(){return e5}});var r=t(87462),o=t(67294),a=t(65936),u=t(78990),l=t(36206),c=t(28771),i=t(25360),d=t(91276),s=t(90667),f=t(27552),p=t(95420),v=t(46293),m=t(42651),g=t(29115),h=t(75320),M=t(66681),b=t(88426),E=t(79698),_=t(23541),w=t(6223);let C=["Enter"," "],R=["ArrowUp","PageDown","End"],y=["ArrowDown","PageUp","Home",...R],k={ltr:[...C,"ArrowRight"],rtl:[...C,"ArrowLeft"]},D={ltr:["ArrowLeft"],rtl:["ArrowRight"]},P="Menu",[O,x,Z]=(0,a.B)(P),[T,I]=(0,i.b)(P,[Z,v.D7,M.Pc]),F=(0,v.D7)(),S=(0,M.Pc)(),[A,K]=T(P),[L,V]=T(P),B=e=>{let{__scopeMenu:n,open:t=!1,children:r,dir:a,onOpenChange:l,modal:c=!0}=e,i=F(n),[d,s]=(0,o.useState)(null),f=(0,o.useRef)(!1),p=(0,E.W)(l),m=(0,u.gm)(a);return(0,o.useEffect)(()=>{let e=()=>{f.current=!0,document.addEventListener("pointerdown",n,{capture:!0,once:!0}),document.addEventListener("pointermove",n,{capture:!0,once:!0})},n=()=>f.current=!1;return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",n,{capture:!0}),document.removeEventListener("pointermove",n,{capture:!0})}},[]),(0,o.createElement)(v.fC,i,(0,o.createElement)(A,{scope:n,open:t,onOpenChange:p,content:d,onContentChange:s},(0,o.createElement)(L,{scope:n,onClose:(0,o.useCallback)(()=>p(!1),[p]),isUsingKeyboardRef:f,dir:m,modal:c},r)))},W=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,...a}=e,u=F(t);return(0,o.createElement)(v.ee,(0,r.Z)({},u,a,{ref:n}))}),U="MenuPortal",[G,z]=T(U,{forceMount:void 0}),X=e=>{let{__scopeMenu:n,forceMount:t,children:r,container:a}=e,u=K(U,n);return(0,o.createElement)(G,{scope:n,forceMount:t},(0,o.createElement)(g.z,{present:t||u.open},(0,o.createElement)(m.h,{asChild:!0,container:a},r)))},Y="MenuContent",[H,N]=T(Y),j=(0,o.forwardRef)((e,n)=>{let t=z(Y,e.__scopeMenu),{forceMount:a=t.forceMount,...u}=e,l=K(Y,e.__scopeMenu),c=V(Y,e.__scopeMenu);return(0,o.createElement)(O.Provider,{scope:e.__scopeMenu},(0,o.createElement)(g.z,{present:a||l.open},(0,o.createElement)(O.Slot,{scope:e.__scopeMenu},c.modal?(0,o.createElement)(q,(0,r.Z)({},u,{ref:n})):(0,o.createElement)(J,(0,r.Z)({},u,{ref:n})))))}),q=(0,o.forwardRef)((e,n)=>{let t=K(Y,e.__scopeMenu),a=(0,o.useRef)(null),u=(0,c.e)(n,a);return(0,o.useEffect)(()=>{let e=a.current;if(e)return(0,_.Ry)(e)},[]),(0,o.createElement)(Q,(0,r.Z)({},e,{ref:u,trapFocus:t.open,disableOutsidePointerEvents:t.open,disableOutsideScroll:!0,onFocusOutside:(0,l.M)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>t.onOpenChange(!1)}))}),J=(0,o.forwardRef)((e,n)=>{let t=K(Y,e.__scopeMenu);return(0,o.createElement)(Q,(0,r.Z)({},e,{ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>t.onOpenChange(!1)}))}),Q=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,loop:a=!1,trapFocus:u,onOpenAutoFocus:i,onCloseAutoFocus:d,disableOutsidePointerEvents:m,onEntryFocus:g,onEscapeKeyDown:h,onPointerDownOutside:E,onFocusOutside:_,onInteractOutside:C,onDismiss:k,disableOutsideScroll:D,...P}=e,O=K(Y,t),Z=V(Y,t),T=F(t),I=S(t),A=x(t),[L,B]=(0,o.useState)(null),W=(0,o.useRef)(null),U=(0,c.e)(n,W,O.onContentChange),G=(0,o.useRef)(0),z=(0,o.useRef)(""),X=(0,o.useRef)(0),N=(0,o.useRef)(null),j=(0,o.useRef)("right"),q=(0,o.useRef)(0),J=D?w.Z:o.Fragment,Q=D?{as:b.g7,allowPinchZoom:!0}:void 0,$=e=>{var n,t;let r=z.current+e,o=A().filter(e=>!e.disabled),a=document.activeElement,u=null===(n=o.find(e=>e.ref.current===a))||void 0===n?void 0:n.textValue,l=o.map(e=>e.textValue),c=function(e,n,t){var r;let o=n.length>1&&Array.from(n).every(e=>e===n[0]),a=o?n[0]:n,u=t?e.indexOf(t):-1,l=(r=Math.max(u,0),e.map((n,t)=>e[(r+t)%e.length])),c=1===a.length;c&&(l=l.filter(e=>e!==t));let i=l.find(e=>e.toLowerCase().startsWith(a.toLowerCase()));return i!==t?i:void 0}(l,r,u),i=null===(t=o.find(e=>e.textValue===c))||void 0===t?void 0:t.ref.current;!function e(n){z.current=n,window.clearTimeout(G.current),""!==n&&(G.current=window.setTimeout(()=>e(""),1e3))}(r),i&&setTimeout(()=>i.focus())};(0,o.useEffect)(()=>()=>window.clearTimeout(G.current),[]),(0,f.EW)();let ee=(0,o.useCallback)(e=>{var n,t;let r=j.current===(null===(n=N.current)||void 0===n?void 0:n.side);return r&&function(e,n){if(!n)return!1;let t={x:e.clientX,y:e.clientY};return function(e,n){let{x:t,y:r}=e,o=!1;for(let e=0,a=n.length-1;e<n.length;a=e++){let u=n[e].x,l=n[e].y,c=n[a].x,i=n[a].y,d=l>r!=i>r&&t<(c-u)*(r-l)/(i-l)+u;d&&(o=!o)}return o}(t,n)}(e,null===(t=N.current)||void 0===t?void 0:t.area)},[]);return(0,o.createElement)(H,{scope:t,searchRef:z,onItemEnter:(0,o.useCallback)(e=>{ee(e)&&e.preventDefault()},[ee]),onItemLeave:(0,o.useCallback)(e=>{var n;ee(e)||(null===(n=W.current)||void 0===n||n.focus(),B(null))},[ee]),onTriggerLeave:(0,o.useCallback)(e=>{ee(e)&&e.preventDefault()},[ee]),pointerGraceTimerRef:X,onPointerGraceIntentChange:(0,o.useCallback)(e=>{N.current=e},[])},(0,o.createElement)(J,Q,(0,o.createElement)(p.M,{asChild:!0,trapped:u,onMountAutoFocus:(0,l.M)(i,e=>{var n;e.preventDefault(),null===(n=W.current)||void 0===n||n.focus()}),onUnmountAutoFocus:d},(0,o.createElement)(s.XB,{asChild:!0,disableOutsidePointerEvents:m,onEscapeKeyDown:h,onPointerDownOutside:E,onFocusOutside:_,onInteractOutside:C,onDismiss:k},(0,o.createElement)(M.fC,(0,r.Z)({asChild:!0},I,{dir:Z.dir,orientation:"vertical",loop:a,currentTabStopId:L,onCurrentTabStopIdChange:B,onEntryFocus:(0,l.M)(g,e=>{Z.isUsingKeyboardRef.current||e.preventDefault()})}),(0,o.createElement)(v.VY,(0,r.Z)({role:"menu","aria-orientation":"vertical","data-state":ew(O.open),"data-radix-menu-content":"",dir:Z.dir},T,P,{ref:U,style:{outline:"none",...P.style},onKeyDown:(0,l.M)(P.onKeyDown,e=>{let n=e.target,t=n.closest("[data-radix-menu-content]")===e.currentTarget,r=e.ctrlKey||e.altKey||e.metaKey,o=1===e.key.length;t&&("Tab"===e.key&&e.preventDefault(),!r&&o&&$(e.key));let a=W.current;if(e.target!==a||!y.includes(e.key))return;e.preventDefault();let u=A().filter(e=>!e.disabled),l=u.map(e=>e.ref.current);R.includes(e.key)&&l.reverse(),function(e){let n=document.activeElement;for(let t of e)if(t===n||(t.focus(),document.activeElement!==n))return}(l)}),onBlur:(0,l.M)(e.onBlur,e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(G.current),z.current="")}),onPointerMove:(0,l.M)(e.onPointerMove,ey(e=>{let n=e.target,t=q.current!==e.clientX;if(e.currentTarget.contains(n)&&t){let n=e.clientX>q.current?"right":"left";j.current=n,q.current=e.clientX}}))})))))))}),$=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,...a}=e;return(0,o.createElement)(h.WV.div,(0,r.Z)({role:"group"},a,{ref:n}))}),ee=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,...a}=e;return(0,o.createElement)(h.WV.div,(0,r.Z)({},a,{ref:n}))}),en="MenuItem",et="menu.itemSelect",er=(0,o.forwardRef)((e,n)=>{let{disabled:t=!1,onSelect:a,...u}=e,i=(0,o.useRef)(null),d=V(en,e.__scopeMenu),s=N(en,e.__scopeMenu),f=(0,c.e)(n,i),p=(0,o.useRef)(!1),v=()=>{let e=i.current;if(!t&&e){let n=new CustomEvent(et,{bubbles:!0,cancelable:!0});e.addEventListener(et,e=>null==a?void 0:a(e),{once:!0}),(0,h.jH)(e,n),n.defaultPrevented?p.current=!1:d.onClose()}};return(0,o.createElement)(eo,(0,r.Z)({},u,{ref:f,disabled:t,onClick:(0,l.M)(e.onClick,v),onPointerDown:n=>{var t;null===(t=e.onPointerDown)||void 0===t||t.call(e,n),p.current=!0},onPointerUp:(0,l.M)(e.onPointerUp,e=>{var n;p.current||null===(n=e.currentTarget)||void 0===n||n.click()}),onKeyDown:(0,l.M)(e.onKeyDown,e=>{let n=""!==s.searchRef.current;!t&&(!n||" "!==e.key)&&C.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())})}))}),eo=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,disabled:a=!1,textValue:u,...i}=e,d=N(en,t),s=S(t),f=(0,o.useRef)(null),p=(0,c.e)(n,f),[v,m]=(0,o.useState)(!1),[g,b]=(0,o.useState)("");return(0,o.useEffect)(()=>{let e=f.current;if(e){var n;b((null!==(n=e.textContent)&&void 0!==n?n:"").trim())}},[i.children]),(0,o.createElement)(O.ItemSlot,{scope:t,disabled:a,textValue:null!=u?u:g},(0,o.createElement)(M.ck,(0,r.Z)({asChild:!0},s,{focusable:!a}),(0,o.createElement)(h.WV.div,(0,r.Z)({role:"menuitem","data-highlighted":v?"":void 0,"aria-disabled":a||void 0,"data-disabled":a?"":void 0},i,{ref:p,onPointerMove:(0,l.M)(e.onPointerMove,ey(e=>{if(a)d.onItemLeave(e);else if(d.onItemEnter(e),!e.defaultPrevented){let n=e.currentTarget;n.focus()}})),onPointerLeave:(0,l.M)(e.onPointerLeave,ey(e=>d.onItemLeave(e))),onFocus:(0,l.M)(e.onFocus,()=>m(!0)),onBlur:(0,l.M)(e.onBlur,()=>m(!1))}))))}),ea=(0,o.forwardRef)((e,n)=>{let{checked:t=!1,onCheckedChange:a,...u}=e;return(0,o.createElement)(es,{scope:e.__scopeMenu,checked:t},(0,o.createElement)(er,(0,r.Z)({role:"menuitemcheckbox","aria-checked":eC(t)?"mixed":t},u,{ref:n,"data-state":eR(t),onSelect:(0,l.M)(u.onSelect,()=>null==a?void 0:a(!!eC(t)||!t),{checkForDefaultPrevented:!1})})))}),[eu,el]=T("MenuRadioGroup",{value:void 0,onValueChange:()=>{}}),ec=(0,o.forwardRef)((e,n)=>{let{value:t,onValueChange:a,...u}=e,l=(0,E.W)(a);return(0,o.createElement)(eu,{scope:e.__scopeMenu,value:t,onValueChange:l},(0,o.createElement)($,(0,r.Z)({},u,{ref:n})))}),ei=(0,o.forwardRef)((e,n)=>{let{value:t,...a}=e,u=el("MenuRadioItem",e.__scopeMenu),c=t===u.value;return(0,o.createElement)(es,{scope:e.__scopeMenu,checked:c},(0,o.createElement)(er,(0,r.Z)({role:"menuitemradio","aria-checked":c},a,{ref:n,"data-state":eR(c),onSelect:(0,l.M)(a.onSelect,()=>{var e;return null===(e=u.onValueChange)||void 0===e?void 0:e.call(u,t)},{checkForDefaultPrevented:!1})})))}),ed="MenuItemIndicator",[es,ef]=T(ed,{checked:!1}),ep=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,forceMount:a,...u}=e,l=ef(ed,t);return(0,o.createElement)(g.z,{present:a||eC(l.checked)||!0===l.checked},(0,o.createElement)(h.WV.span,(0,r.Z)({},u,{ref:n,"data-state":eR(l.checked)})))}),ev=(0,o.forwardRef)((e,n)=>{let{__scopeMenu:t,...a}=e;return(0,o.createElement)(h.WV.div,(0,r.Z)({role:"separator","aria-orientation":"horizontal"},a,{ref:n}))}),em=((e,n)=>{let{__scopeMenu:t,...a}=e,u=F(t);return(0,o.createElement)(v.Eh,(0,r.Z)({},u,a,{ref:n}))},"MenuSub"),[eg,eh]=T(em),eM=e=>{let{__scopeMenu:n,children:t,open:r=!1,onOpenChange:a}=e,u=K(em,n),l=F(n),[c,i]=(0,o.useState)(null),[s,f]=(0,o.useState)(null),p=(0,E.W)(a);return(0,o.useEffect)(()=>(!1===u.open&&p(!1),()=>p(!1)),[u.open,p]),(0,o.createElement)(v.fC,l,(0,o.createElement)(A,{scope:n,open:r,onOpenChange:p,content:s,onContentChange:f},(0,o.createElement)(eg,{scope:n,contentId:(0,d.M)(),triggerId:(0,d.M)(),trigger:c,onTriggerChange:i},t)))},eb="MenuSubTrigger",eE=(0,o.forwardRef)((e,n)=>{let t=K(eb,e.__scopeMenu),a=V(eb,e.__scopeMenu),u=eh(eb,e.__scopeMenu),i=N(eb,e.__scopeMenu),d=(0,o.useRef)(null),{pointerGraceTimerRef:s,onPointerGraceIntentChange:f}=i,p={__scopeMenu:e.__scopeMenu},v=(0,o.useCallback)(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return(0,o.useEffect)(()=>v,[v]),(0,o.useEffect)(()=>{let e=s.current;return()=>{window.clearTimeout(e),f(null)}},[s,f]),(0,o.createElement)(W,(0,r.Z)({asChild:!0},p),(0,o.createElement)(eo,(0,r.Z)({id:u.triggerId,"aria-haspopup":"menu","aria-expanded":t.open,"aria-controls":u.contentId,"data-state":ew(t.open)},e,{ref:(0,c.F)(n,u.onTriggerChange),onClick:n=>{var r;null===(r=e.onClick)||void 0===r||r.call(e,n),e.disabled||n.defaultPrevented||(n.currentTarget.focus(),t.open||t.onOpenChange(!0))},onPointerMove:(0,l.M)(e.onPointerMove,ey(n=>{i.onItemEnter(n),n.defaultPrevented||e.disabled||t.open||d.current||(i.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{t.onOpenChange(!0),v()},100))})),onPointerLeave:(0,l.M)(e.onPointerLeave,ey(e=>{var n,r;v();let o=null===(n=t.content)||void 0===n?void 0:n.getBoundingClientRect();if(o){let n=null===(r=t.content)||void 0===r?void 0:r.dataset.side,a="right"===n,u=o[a?"left":"right"],l=o[a?"right":"left"];i.onPointerGraceIntentChange({area:[{x:e.clientX+(a?-5:5),y:e.clientY},{x:u,y:o.top},{x:l,y:o.top},{x:l,y:o.bottom},{x:u,y:o.bottom}],side:n}),window.clearTimeout(s.current),s.current=window.setTimeout(()=>i.onPointerGraceIntentChange(null),300)}else{if(i.onTriggerLeave(e),e.defaultPrevented)return;i.onPointerGraceIntentChange(null)}})),onKeyDown:(0,l.M)(e.onKeyDown,n=>{let r=""!==i.searchRef.current;if(!e.disabled&&(!r||" "!==n.key)&&k[a.dir].includes(n.key)){var o;t.onOpenChange(!0),null===(o=t.content)||void 0===o||o.focus(),n.preventDefault()}})})))}),e_=(0,o.forwardRef)((e,n)=>{let t=z(Y,e.__scopeMenu),{forceMount:a=t.forceMount,...u}=e,i=K(Y,e.__scopeMenu),d=V(Y,e.__scopeMenu),s=eh("MenuSubContent",e.__scopeMenu),f=(0,o.useRef)(null),p=(0,c.e)(n,f);return(0,o.createElement)(O.Provider,{scope:e.__scopeMenu},(0,o.createElement)(g.z,{present:a||i.open},(0,o.createElement)(O.Slot,{scope:e.__scopeMenu},(0,o.createElement)(Q,(0,r.Z)({id:s.contentId,"aria-labelledby":s.triggerId},u,{ref:p,align:"start",side:"rtl"===d.dir?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:e=>{var n;d.isUsingKeyboardRef.current&&(null===(n=f.current)||void 0===n||n.focus()),e.preventDefault()},onCloseAutoFocus:e=>e.preventDefault(),onFocusOutside:(0,l.M)(e.onFocusOutside,e=>{e.target!==s.trigger&&i.onOpenChange(!1)}),onEscapeKeyDown:(0,l.M)(e.onEscapeKeyDown,e=>{d.onClose(),e.preventDefault()}),onKeyDown:(0,l.M)(e.onKeyDown,e=>{let n=e.currentTarget.contains(e.target),t=D[d.dir].includes(e.key);if(n&&t){var r;i.onOpenChange(!1),null===(r=s.trigger)||void 0===r||r.focus(),e.preventDefault()}})})))))});function ew(e){return e?"open":"closed"}function eC(e){return"indeterminate"===e}function eR(e){return eC(e)?"indeterminate":e?"checked":"unchecked"}function ey(e){return n=>"mouse"===n.pointerType?e(n):void 0}var ek=t(77342);let eD="Menubar",[eP,eO,ex]=(0,a.B)(eD),[eZ,eT]=(0,i.b)(eD,[ex,M.Pc]),eI=I(),eF=(0,M.Pc)(),[eS,eA]=eZ(eD),eK=(0,o.forwardRef)((e,n)=>{let{__scopeMenubar:t,value:a,onValueChange:l,defaultValue:c,loop:i=!0,dir:d,...s}=e,f=(0,u.gm)(d),p=eF(t),[v="",m]=(0,ek.T)({prop:a,onChange:l,defaultProp:c}),[g,b]=(0,o.useState)(null);return(0,o.createElement)(eS,{scope:t,value:v,onMenuOpen:(0,o.useCallback)(e=>{m(e),b(e)},[m]),onMenuClose:(0,o.useCallback)(()=>m(""),[m]),onMenuToggle:(0,o.useCallback)(e=>{m(n=>Boolean(n)?"":e),b(e)},[m]),dir:f,loop:i},(0,o.createElement)(eP.Provider,{scope:t},(0,o.createElement)(eP.Slot,{scope:t},(0,o.createElement)(M.fC,(0,r.Z)({asChild:!0},p,{orientation:"horizontal",loop:i,dir:f,currentTabStopId:g,onCurrentTabStopIdChange:b}),(0,o.createElement)(h.WV.div,(0,r.Z)({role:"menubar"},s,{ref:n}))))))}),eL="MenubarMenu",[eV,eB]=eZ(eL),eW=e=>{let{__scopeMenubar:n,value:t,...a}=e,u=(0,d.M)(),l=t||u||"LEGACY_REACT_AUTO_VALUE",c=eA(eL,n),i=eI(n),s=(0,o.useRef)(null),f=(0,o.useRef)(!1),p=c.value===l;return(0,o.useEffect)(()=>{p||(f.current=!1)},[p]),(0,o.createElement)(eV,{scope:n,value:l,triggerId:(0,d.M)(),triggerRef:s,contentId:(0,d.M)(),wasKeyboardTriggerOpenRef:f},(0,o.createElement)(B,(0,r.Z)({},i,{open:p,onOpenChange:e=>{e||c.onMenuClose()},modal:!1,dir:c.dir},a)))},eU="MenubarTrigger",eG=(0,o.forwardRef)((e,n)=>{let{__scopeMenubar:t,disabled:a=!1,...u}=e,i=eF(t),d=eI(t),s=eA(eU,t),f=eB(eU,t),p=(0,o.useRef)(null),v=(0,c.e)(n,p,f.triggerRef),[m,g]=(0,o.useState)(!1),b=s.value===f.value;return(0,o.createElement)(eP.ItemSlot,{scope:t,value:f.value,disabled:a},(0,o.createElement)(M.ck,(0,r.Z)({asChild:!0},i,{focusable:!a,tabStopId:f.value}),(0,o.createElement)(W,(0,r.Z)({asChild:!0},d),(0,o.createElement)(h.WV.button,(0,r.Z)({type:"button",role:"menuitem",id:f.triggerId,"aria-haspopup":"menu","aria-expanded":b,"aria-controls":b?f.contentId:void 0,"data-highlighted":m?"":void 0,"data-state":b?"open":"closed","data-disabled":a?"":void 0,disabled:a},u,{ref:v,onPointerDown:(0,l.M)(e.onPointerDown,e=>{a||0!==e.button||!1!==e.ctrlKey||(s.onMenuOpen(f.value),b||e.preventDefault())}),onPointerEnter:(0,l.M)(e.onPointerEnter,()=>{let e=Boolean(s.value);if(e&&!b){var n;s.onMenuOpen(f.value),null===(n=p.current)||void 0===n||n.focus()}}),onKeyDown:(0,l.M)(e.onKeyDown,e=>{!a&&(["Enter"," "].includes(e.key)&&s.onMenuToggle(f.value),"ArrowDown"===e.key&&s.onMenuOpen(f.value),["Enter"," ","ArrowDown"].includes(e.key)&&(f.wasKeyboardTriggerOpenRef.current=!0,e.preventDefault()))}),onFocus:(0,l.M)(e.onFocus,()=>g(!0)),onBlur:(0,l.M)(e.onBlur,()=>g(!1))})))))}),ez=e=>{let{__scopeMenubar:n,...t}=e,a=eI(n);return(0,o.createElement)(X,(0,r.Z)({},a,t))},eX="MenubarContent",eY=(0,o.forwardRef)((e,n)=>{let{__scopeMenubar:t,align:a="start",...u}=e,c=eI(t),i=eA(eX,t),d=eB(eX,t),s=eO(t),f=(0,o.useRef)(!1);return(0,o.createElement)(j,(0,r.Z)({id:d.contentId,"aria-labelledby":d.triggerId,"data-radix-menubar-content":""},c,u,{ref:n,align:a,onCloseAutoFocus:(0,l.M)(e.onCloseAutoFocus,e=>{let n=Boolean(i.value);if(!n&&!f.current){var t;null===(t=d.triggerRef.current)||void 0===t||t.focus()}f.current=!1,e.preventDefault()}),onFocusOutside:(0,l.M)(e.onFocusOutside,e=>{let n=e.target,t=s().some(e=>{var t;return null===(t=e.ref.current)||void 0===t?void 0:t.contains(n)});t&&e.preventDefault()}),onInteractOutside:(0,l.M)(e.onInteractOutside,()=>{f.current=!0}),onEntryFocus:e=>{d.wasKeyboardTriggerOpenRef.current||e.preventDefault()},onKeyDown:(0,l.M)(e.onKeyDown,e=>{if(["ArrowRight","ArrowLeft"].includes(e.key)){var n,t;let r=e.target,o=r.hasAttribute("data-radix-menubar-subtrigger"),a=r.closest("[data-radix-menubar-content]")!==e.currentTarget,u="rtl"===i.dir?"ArrowRight":"ArrowLeft",l=u===e.key;if(!l&&o||a&&l)return;let c=s().filter(e=>!e.disabled),f=c.map(e=>e.value);l&&f.reverse();let p=f.indexOf(d.value);f=i.loop?(n=f,t=p+1,n.map((e,r)=>n[(t+r)%n.length])):f.slice(p+1);let[v]=f;v&&i.onMenuOpen(v)}},{checkForDefaultPrevented:!1}),style:{...e.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}}))}),eH=(0,o.forwardRef)((e,n)=>{let{__scopeMenubar:t,...a}=e,u=eI(t);return(0,o.createElement)($,(0,r.Z)({},u,a,{ref:n}))}),eN=(0,o.forwardRef)((e,n)=>{let{__scopeMenubar:t,...a}=e,u=eI(t);return(0,o.createElement)(ee,(0,r.Z)({},u,a,{ref:n}))}),ej=(0,o.forwardRef)((e,n)=>{let{__scopeMenubar:t,...a}=e,u=eI(t);return(0,o.createElement)(er,(0,r.Z)({},u,a,{ref:n}))}),eq=(0,o.forwardRef)((e,n)=>{let{__scopeMenubar:t,...a}=e,u=eI(t);return(0,o.createElement)(ea,(0,r.Z)({},u,a,{ref:n}))}),eJ=(0,o.forwardRef)((e,n)=>{let{__scopeMenubar:t,...a}=e,u=eI(t);return(0,o.createElement)(ec,(0,r.Z)({},u,a,{ref:n}))}),eQ=(0,o.forwardRef)((e,n)=>{let{__scopeMenubar:t,...a}=e,u=eI(t);return(0,o.createElement)(ei,(0,r.Z)({},u,a,{ref:n}))}),e$=(0,o.forwardRef)((e,n)=>{let{__scopeMenubar:t,...a}=e,u=eI(t);return(0,o.createElement)(ep,(0,r.Z)({},u,a,{ref:n}))}),e0=(0,o.forwardRef)((e,n)=>{let{__scopeMenubar:t,...a}=e,u=eI(t);return(0,o.createElement)(ev,(0,r.Z)({},u,a,{ref:n}))}),e1=e=>{let{__scopeMenubar:n,children:t,open:a,onOpenChange:u,defaultOpen:l}=e,c=eI(n),[i=!1,d]=(0,ek.T)({prop:a,defaultProp:l,onChange:u});return(0,o.createElement)(eM,(0,r.Z)({},c,{open:i,onOpenChange:d}),t)},e2=(0,o.forwardRef)((e,n)=>{let{__scopeMenubar:t,...a}=e,u=eI(t);return(0,o.createElement)(eE,(0,r.Z)({"data-radix-menubar-subtrigger":""},u,a,{ref:n}))}),e6=(0,o.forwardRef)((e,n)=>{let{__scopeMenubar:t,...a}=e,u=eI(t);return(0,o.createElement)(e_,(0,r.Z)({},u,{"data-radix-menubar-content":""},a,{ref:n,style:{...e.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}}))}),e7=eK,e3=eW,e5=eG,e9=ez,e8=eY,e4=eH,ne=eN,nn=ej,nt=eq,nr=eJ,no=eQ,na=e$,nu=e0,nl=e1,nc=e2,ni=e6}}]);