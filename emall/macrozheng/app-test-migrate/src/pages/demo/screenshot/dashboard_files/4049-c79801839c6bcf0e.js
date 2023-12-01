"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4049],{24049:function(e,s,r){r.d(s,{B7:function(){return H},Ve:function(){return q},ZP:function(){return T}});var t=r(85893),i=r(35377),a=r(67091),l=r(44781),n=r(30381),d=r.n(n),c=r(67294),o=r(20272),x=r(45830),u=r(90305),m=r(61734),h=r(8583),p=r(95116),j=r(14323),v=r(41664),f=r.n(v),g=r(11798);let y=e=>{let{subscriptionId:s}=e,{userId:r}=(0,a.Z)(),[l,n]=(0,c.useState)(),[x,j]=(0,c.useState)(!0),[v,y]=(0,c.useState)(!1),N=(0,c.useMemo)(()=>l&&(0,m.HY)(null==l?void 0:l.productId),[null==l?void 0:l.productId]);(0,c.useEffect)(()=>{r&&s&&k({userId:r,subscriptionId:s})},[r,s]);let k=async e=>{let s=new u.L;try{let r=await s.getSubscription({...e});n(r)}catch(e){}j(!1)},I=async e=>{y(!0);try{let s=new u.L,r=await s.getCustomerPortalUrl({userId:e.userId});window.location.assign(r)}catch(e){(0,h.J)("Ooops, something went wrong."),y(!1)}};return x?(0,t.jsx)(i.Z.Center,{}):(0,t.jsx)("div",{className:"max-w-4xl mx-auto",children:(0,t.jsxs)("div",{className:"flex flex-col w-full gap-8 pb-24",children:[N&&(0,t.jsx)("div",{className:"flex flex-col gap-4",children:(0,t.jsxs)(g.Z,{children:[(0,t.jsx)("div",{className:"flex md:hidden",children:(0,t.jsx)(w,{status:l.status})}),(0,t.jsxs)("div",{className:"flex justify-between items-center",children:[(0,t.jsxs)("h3",{className:"text-xl md:text-3xl font-medium",children:["You","'","re on the ",N," Plan"," ",(0,t.jsx)("span",{className:"pl-2",children:"\uD83D\uDE80"})]}),(0,t.jsx)("div",{className:"hidden md:flex",children:(0,t.jsx)(w,{status:l.status})})]}),(0,t.jsxs)("p",{children:["Thanks for subscribing to Ora. As part of the"," ",N," Plan you have access to:"]}),(0,t.jsx)("div",{className:"md:px-4 pb-2 grid grid-cols-1 md:grid-cols-2 gap-2",children:(0,t.jsx)(p.Z,{filters:["previousPlanBenefits","currentPlanBenefits"],product:N})}),(0,t.jsxs)("p",{children:[N," features coming soon:"]}),(0,t.jsx)("div",{className:"md:px-4 pb-2 grid grid-cols-1 md:grid-cols-2 gap-2 ",children:(0,t.jsx)(p.Z,{filters:["comingSoonBenefits"],product:N})}),r&&(0,t.jsx)("div",{className:"flex justify-start pt-4",children:v?(0,t.jsxs)(o.KM,{disabled:!0,padding:"tight",className:"flex gap-2 items-center",children:[(0,t.jsx)(i.Z,{small:!0,className:"text-primary-900"})," ","Manage Subscription"," "]}):(0,t.jsx)(o.KM,{padding:"tight",onClick:()=>I({userId:r}),children:"Manage Subscription"})}),(0,t.jsxs)("div",{children:["For more information on other pricing plans, please visit our"," ",(0,t.jsx)(f(),{href:"/pricing",target:"_blank",children:(0,t.jsx)("span",{className:"font-medium underline",children:"Pricing page"})}),"."]})]})}),(0,t.jsx)("div",{className:"flex flex-col gap-4",children:(0,t.jsx)(g.Z,{className:"gap-8",children:(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsx)("h3",{className:"text-xl font-medium",children:"Billing"}),l.cancel_at_period_end&&l.canceled_at&&l.cancel_at?(0,t.jsxs)("div",{children:["You cancelled your subscription on"," ",(0,t.jsx)("span",{className:"font-medium",children:d()(1e3*l.canceled_at).format("MMM DD")})," ","and it will end on"," ",(0,t.jsx)("span",{className:"font-medium",children:d()(1e3*l.cancel_at).format("MMM DD")}),"."]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{children:"You are on a monthly plan. That means you will be billed at the end of each month."}),(0,t.jsxs)("p",{children:["Current billing cycle:"," ",(0,t.jsxs)("span",{className:"font-medium",children:[d()(1e3*l.current_period_start).format("MMM DD")," ","-"," ",d()(1e3*l.current_period_end).format("MMM DD")]})]})]})]})})}),(0,t.jsx)("div",{className:"flex flex-col gap-4",children:(0,t.jsx)(g.Z,{className:"gap-8",children:r&&l&&"active"===l.status&&(0,m.HY)(null==l?void 0:l.productId)&&(0,t.jsx)("div",{className:"flex flex-col gap-2",children:(0,t.jsx)(b,{product:(0,m.HY)(l.productId),userId:r})})})})]})})},b=e=>{let{product:s,userId:r}=e,{profile:i,creditsUsed:a,setCreditsUsed:n}=(0,l.O)();(0,c.useEffect)(()=>{d()},[null==i?void 0:i.id]);let d=async()=>{if(!i)return;let e=await x.x.getProfileUsage({userId:r,profileId:i.id});if(e&&e.ok){let{usageCount:s}=await e.json(),r=(0,m.Ug)(s);n(r)}},o=(0,c.useMemo)(()=>(0,m.sI)(s),[s]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"text-xl font-medium",children:"Usage"}),(0,t.jsxs)("div",{className:"flex gap-4 flex-col ",children:[(0,t.jsxs)("div",{className:"max-w-sm",children:[(0,t.jsxs)("div",{className:"text flex justify-between items-center w-full font-medium pb-1",children:[(0,t.jsx)("div",{children:"Credits used"}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[a.toLocaleString()," /"," ",o.toLocaleString()]})]}),(0,t.jsx)("div",{className:"relative w-full h-1 bg-primary-600 rounded-lg",children:(0,t.jsx)("div",{style:{width:a>o?"100%":"".concat(a/o*100,"%")},className:(0,j.cn)("h-1 absolute left-0 rounded-lg",a>=o?"bg-red-500":"bg-primary-400")})})]}),a>=o&&(0,t.jsx)("div",{className:"flex flex-col gap-2 border border-red-500 rounded-lg p-2",children:(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"w-5 h-5 text-red-500",children:[(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"}),"s"," "]}),(0,t.jsxs)(t.Fragment,{children:[" ","You","'","ve reached your free credit limit of"," ",o.toLocaleString(),"."]}),a>o?(0,t.jsxs)("div",{children:["Additional credits used:"," ",(0,t.jsx)("span",{className:"font-medium",children:(a-o).toLocaleString()})]}):(0,t.jsx)("div",{children:"No additional credits used so far."})]})})]})]})},w=e=>{let{status:s}=e;return(0,t.jsx)("div",{className:"border ".concat("active"===s?"border-green-500 bg-green-500 dark:bg-green-500/10 text-white dark:text-green-400":"border-red-500 bg-red-500/10 text-red-500","  px-2 md:px-3 py-1 text-xs md:text-sm rounded-full"),children:s})};var N=r(27774);let k=()=>{let{profile:e,loading:s,isSubscribed:r}=(0,l.O)(),{userId:n}=(0,a.Z)();return s?(0,t.jsx)(i.Z.Center,{}):e&&n?r&&e.stripeSubscriptionId?(0,t.jsx)(y,{subscriptionId:e.stripeSubscriptionId}):(0,t.jsx)(N.Z,{userId:n}):(0,t.jsx)("div",{children:"Something went wrong, no profile found."})};var I=r(23735),C=r(37874),M=r(8275),S=r(91173),P=r(94772);let A=()=>{let{userId:e}=(0,a.Z)(),[s,r]=(0,c.useState)([]),[n,u]=(0,c.useState)(!0),[m,p]=(0,c.useState)(!1),{profile:v,isSubscribed:y,loading:b}=(0,l.O)();(0,c.useEffect)(()=>{e&&w()},[e,v]);let w=async()=>{if(!e||!v){console.warn("skip API call to get api keys due undefined userId [".concat(e,"] or profileId [").concat(null==v?void 0:v.id,"]"));return}let s=await x.x.getApiKeys({userId:e,profileId:v.id});r(s),n&&u(!1)},N=async()=>{if(!m){if(!e||!v){console.warn("skip API call to create api key due undefined userId");return}p(!0);try{let r=await x.x.createApiKey({userId:e,profileId:v.id}),t=await r.json();if(r.ok)await w();else{var s;(0,h.J)(null!==(s=t.error.message)&&void 0!==s?s:void 0)}}catch(e){(0,h.J)()}p(!1)}},k=!y&&!s.some(e=>!0===e.active)||y&&0===s.length;return e?(0,t.jsxs)("div",{className:"max-w-4xl mx-auto",children:[(0,t.jsx)(C.Z,{isRequired:!b&&!y,mobileMessage:"to generate API keys and use the Ora API.",desktopMessage:"Subscription required to use API."}),(0,t.jsxs)("div",{className:"mb-8 flex flex-col gap-8",children:[(0,t.jsxs)(g.Z,{children:[(0,t.jsx)("div",{className:"text-xl font-medium",children:"API Documentation"}),(0,t.jsxs)("div",{children:["Programmatically access Ora functionality using our API."," ","Read more about it in our"," ",(0,t.jsx)(f(),{href:P.eJ,target:"_blank",className:"font-medium underline hover:text-chat-blue transition duration-200 ease-in-out",children:"docs"}),"."]}),(0,t.jsx)(f(),{href:P.eJ,target:"_blank",children:(0,t.jsx)(o.KM,{padding:"tight",className:" mt-2",children:"View Docs"})})]}),(0,t.jsxs)(g.Z,{children:[(0,t.jsxs)("div",{className:"flex justify-between items-center gap-2 mb-2",children:[(0,t.jsx)("div",{className:"text-xl font-medium",children:"API Keys"}),y?(0,t.jsx)("div",{children:m?(0,t.jsxs)("div",{className:"text-sm shadow-sm border border-primary-700 py-1 px-2 rounded-lg flex gap-2 items-center",children:["Create API Key"," ",(0,t.jsx)(i.Z,{small:!0})]}):(0,t.jsx)("button",{className:(0,j.cn)("text-sm shadow-sm border border-primary-700 py-1 px-2 rounded-lg hover:bg-primary-700 transition duration-200 ease-in-out"),onClick:()=>{y&&N()},children:"Create API Key +"})}):(0,t.jsx)(L,{className:"text-sm border border-primary-700 py-1 px-2 rounded-lg hover:bg-primary-700transition duration-200 ease-in-out",children:"Create API Key +"})]}),(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsx)("div",{className:"inline-block min-w-full p-1 sm:p-[1px] align-middle",children:(0,t.jsx)("div",{className:"overflow-hidden",children:(0,t.jsxs)("table",{className:"min-w-full divide-y divide-gray-300 dark:divide-primary-600",children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{className:"text-gray-900 dark:text-white text-left text-sm font-semibold ",children:n?(0,t.jsx)("th",{children:"API Key"}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("th",{scope:"col",className:(0,j.cn)("py-3.5 pr-3"),children:"API Key"}),(0,t.jsx)("th",{scope:"col",className:"px-3 py-3.5 ",children:"Updated"}),(0,t.jsx)("th",{scope:"col",className:"px-3 py-3.5 ",children:s.some(e=>!1===e.active)&&"Status"}),(0,t.jsx)("th",{scope:"col",className:"px-3 py-3.5"})]})})}),n?(0,t.jsx)("tbody",{className:"w-full",children:(0,t.jsx)("tr",{children:(0,t.jsx)("td",{children:(0,t.jsx)(i.Z.Center,{})})})}):k?(0,t.jsx)("tbody",{className:"w-full",children:(0,t.jsx)("tr",{children:(0,t.jsx)("td",{className:"pt-4 text-sm",children:"No API keys yet."})})}):(0,t.jsx)("tbody",{className:"divide-y divide-gray-200 dark:divide-primary-600",children:s&&s.length>0&&s.map(s=>(0,t.jsxs)("tr",{className:"group",children:[(0,t.jsx)("td",{className:(0,j.cn)("py-4 pr-3 text-sm","whitespace-nowrap","font-medium text-gray-900 dark:text-white"),children:(0,t.jsx)(_,{apiKey:s.id})}),(0,t.jsx)("td",{className:(0,j.cn)("whitespace-nowrap px-3 py-4 text-sm","text-primary-50 dark:text-primary-50","w-32"),children:(0,t.jsx)("div",{className:"text-xs text-primary-0-fade/60",children:d()(s.updatedAt).format("DD MMM YYYY")})}),(0,t.jsx)("td",{className:(0,j.cn)("whitespace-nowrap px-3 py-4 text-sm","text-primary-50 dark:text-primary-50"),children:!s.active&&s.id&&v&&(0,t.jsx)(K,{apiKey:s.id,userId:e,profileId:v.id,handleFetchAPIKeys:w,isSubscribed:!b&&y})}),s.id&&v&&(0,t.jsx)(Z,{apiKey:s.id,profileId:v.id,userId:e,handleFetchAPIKeys:w})]},s.id))})]})})})})]})]})]}):(0,t.jsx)(t.Fragment,{})},Z=e=>{let{profileId:s,apiKey:r,userId:a,handleFetchAPIKeys:l}=e,[n,d]=(0,c.useState)(!1),{isDesktop:o}=(0,S.Z)(),u=async e=>{if(!n){d(!0);try{let t=await x.x.deleteApiKey({userId:a,profileId:s,apiKey:e});if(t.ok)await l(),(0,h.Q)("API Key deleted.");else{var r;let e=await t.json();(0,h.J)(null!==(r=e.error.message)&&void 0!==r?r:void 0)}}catch(e){(0,h.J)()}d(!1)}};return(0,t.jsx)("td",{className:(0,j.cn)("whitespace-nowrap px-3 py-4 text-sm w-10 ","text-primary-50 dark:text-primary-50","hover:text-red-500 text-red-500/60 cursor-pointer"),onClick:()=>{u(r)},children:n?(0,t.jsx)(i.Z,{small:!0}):(0,t.jsx)("div",{className:(0,j.cn)("cursor-pointer transition-all duration-200 ease-in-out",o?"hidden group-hover:block":""),children:(0,t.jsxs)("svg",{fill:"currentColor",height:"16px",width:"16px",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 310.285 310.285",children:[(0,t.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),(0,t.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsxs)("g",{id:"SVGRepo_iconCarrier",children:[" ",(0,t.jsx)("path",{d:"M155.143,0.001C69.597,0.001,0,69.597,0,155.143c0,85.545,69.597,155.142,155.143,155.142s155.143-69.597,155.143-155.142 C310.285,69.597,240.689,0.001,155.143,0.001z M244.143,171.498c0,4.411-3.589,8-8,8h-163c-4.411,0-8-3.589-8-8v-32 c0-4.411,3.589-8,8-8h163c4.411,0,8,3.589,8,8V171.498z"})," "]})]})})})},K=e=>{let{apiKey:s,profileId:r,userId:a,handleFetchAPIKeys:l,isSubscribed:n}=e,d=(0,c.useRef)(null),[o,u]=(0,c.useState)(!1),[m,p]=(0,c.useState)(!1),v=async e=>{if(!m){p(!0);try{let t=await x.x.editApiKey({userId:a,profileId:r,apiKey:e});if(t.ok)await l(),(0,h.Q)("API Key activated");else{var s;let e=await t.json();(0,h.J)(null!==(s=e.error.message)&&void 0!==s?s:void 0)}}catch(e){(0,h.J)()}p(!1)}};return(0,c.useEffect)(()=>{if(d.current){let e=d.current,s=()=>{u(!0)},r=()=>{u(!1)};return e.addEventListener("mouseenter",s),e.addEventListener("mouseleave",r),()=>{e.removeEventListener("mouseenter",s),e.removeEventListener("mouseleave",r)}}},[]),(0,t.jsx)("div",{children:(0,t.jsx)("div",{ref:d,className:"flex items-center w-32",onClick:()=>{n&&v(s)},children:m?(0,t.jsx)(i.Z,{small:!0}):(0,t.jsx)("div",{className:(0,j.cn)("border  text-xs text-primary-0-fade/50 rounded-full  px-2 py-1",o&&n?"border-green-500 bg-green-500/10 cursor-pointer":"border-red-500 bg-red-500/10"),children:o&&n?(0,t.jsxs)("div",{className:"flex items-center gap-1",children:["reactivate",(0,t.jsx)("div",{children:(0,t.jsx)(I.NO,{size:"sm",color:"green-700",strokeWidth:1.5})})]}):"inactive"})})})},_=e=>{let{apiKey:s}=e,[r,i]=(0,c.useState)(!1),a=async e=>{await (0,j.vQ)({text:e,onSuccess:async()=>{i(!0),setTimeout(()=>{i(!1)},2e3)},onError:e=>(0,h.J)("Copy to clipboard failed!")})};return(0,t.jsxs)("div",{onClick:async()=>{a(s)},className:"cursor-pointer flex items-center gap-2",children:[s,(0,t.jsxs)("button",{className:(0,j.cn)("gap-1.5 items-center rounded bg-none p-1 text-xs text-primary-0","flex"),children:[r?(0,t.jsx)(I.NO,{size:"sm",strokeWidth:1.5}):(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"})}),r&&"Copied!"]})]})},L=e=>{let{className:s,children:r}=e;return(0,t.jsxs)(M.Vq,{children:[(0,t.jsx)("div",{className:"flex items-center justify-center ",children:(0,t.jsx)(M.hg,{className:(0,j.cn)("focus:outline-none border-none ring-none",s),children:r})}),(0,t.jsxs)(M.cZ,{className:(0,j.cn)("bg-primary-700","border-none max-w-[400px] w-[95%] md:w-full p-4 max-h-[90%] overflow-auto"),children:[(0,t.jsx)(M.$N,{className:"text-xl",children:"Subscription Required"}),(0,t.jsx)(M.Be,{className:(0,j.cn)("text-primary-300","flex gap-2 flex-grow"),children:"A subscription is required to choose use the Ora API. To proceed please subscribe to a paid plan."}),(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsx)(f(),{href:"/settings/account",children:(0,t.jsx)(o.KM,{padding:"tight",fontSize:"sm",children:"Continue"})})})]})]})};var D=r(73069),E=r(21805),O=r(21469),Y=r(93446),B=r(99863);let V=()=>{var e,s;let[r,n]=(0,c.useState)(),{loading:d,updateProfile:o}=(0,l.O)(),{session:x}=(0,E.t)(),{userId:u}=(0,a.Z)(),{profile:m}=(0,l.O)(),[h,p]=(0,c.useState)();(0,c.useEffect)(()=>{n(void 0)},[null==h?void 0:h.username,null==h?void 0:h.bio]);let v=async()=>{try{await o(u,h)}catch(e){return n(e)}return n(void 0)};return d?(0,t.jsx)(i.Z.Center,{className:"mt-4"}):m?(0,t.jsx)("div",{className:"max-w-4xl mx-auto",children:(0,t.jsxs)(O.E.div,{variants:D._W,initial:"hidden",animate:"show",className:"flex flex-col gap-4",children:[(0,t.jsxs)(g.Z,{children:[(0,t.jsx)(J,{profile:m,modifiedUsername:null==h?void 0:h.username,setModifiedProfile:p,error:r}),(0,t.jsx)(U,{profile:m,modifiedBio:null==h?void 0:h.bio,setModifiedProfile:p,error:r})]}),(0,t.jsx)(F,{editProfile:v,allowTriggerUpdate:(0,j.aU)(null==h?void 0:h.username,null!==(e=null==m?void 0:m.username)&&void 0!==e?e:"")||(0,j.aU)(null==h?void 0:h.bio,null!==(s=null==m?void 0:m.bio)&&void 0!==s?s:"")})]})}):(0,t.jsx)("div",{className:"pt-4 mt-4 flex justify-center",children:"No Profile found. Please try again?"})},J=e=>{let{profile:s,error:r,modifiedUsername:i,setModifiedProfile:a}=e;return(0,t.jsx)(Y.Z,{title:"Username",input:{placeholder:"your username",value:null!=i?i:s.username,onChange:e=>a(r=>r?{...r,username:e.target.value.toLowerCase()}:{id:s.id,username:e.target.value.toLowerCase()}),css:r&&"username"===r.type?"border-red-500 hover:border-red-500":void 0},error:r&&"username"===r.type?r.message:void 0})},U=e=>{var s;let{profile:r,error:i,modifiedBio:a,setModifiedProfile:l}=e;return(0,t.jsx)(B.Z,{title:"Bio",input:{placeholder:"Your bio",value:null!==(s=null!=a?a:r.bio)&&void 0!==s?s:"",onChange:e=>l(s=>s?{...s,bio:e.target.value}:{id:r.id,bio:e.target.value}),css:(0,j.cn)("h-52",i&&"bio"===i.type&&"border-red-500 hover:border-red-500")},error:i&&"bio"===i.type?i.message:void 0})},F=e=>{let{editProfile:s,allowTriggerUpdate:r}=e,[a,l]=(0,c.useState)(!1);return(0,t.jsx)("div",{className:"flex justify-end",children:a?(0,t.jsxs)("div",{className:"select-none bg-chat-blue px-2 py-1 rounded-lg text-white transition duration-200 ease-in-out flex items-center gap-2 text-base",children:[(0,t.jsx)(i.Z,{small:!0,className:"text-primary-900"})," ","Save changes"]}):(0,t.jsx)(o.KM,{disabled:!r,padding:"tight",onClick:async()=>{l(!0),await s(),l(!1)},children:"Save changes"})})};var z=r(75858),R=r(11163);let H={header:{title:"Settings",description:"Configure your personal settings on Ora"},content:{align:"center",limitWidth:!0,padding:!0}},W=e=>{let{view:s}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:" flex-grow",children:["profile"===s&&(0,t.jsx)(V,{}),"account"===s&&(0,t.jsx)(k,{}),"developer"===s&&(0,t.jsx)(A,{})]})})};var T=W;let q=()=>{let e=(0,R.useRouter)();return(0,t.jsx)(z.m,{option:"path",paths:{general:{core:"/settings",label:"General"},account:{core:"/settings/account",label:"Account"},developer:{core:"/settings/developer",label:"Developer"}},currentPath:e.pathname,onTabClick:s=>e.push(s,void 0,{shallow:!0})})}}}]);