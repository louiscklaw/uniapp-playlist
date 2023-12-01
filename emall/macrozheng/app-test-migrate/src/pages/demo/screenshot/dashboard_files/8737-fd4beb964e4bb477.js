"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8737],{46894:function(e,t,r){var s=r(85893),a=r(3436),i=r(14323),n=r(41664),l=r.n(n),o=r(66587),d=r(67294),c=r(11163),x=r(21469),u=r(6869),h=r(91173),m=r(27023),p=r(24831),f=r(82099),j=r(67091);let g=e=>{var t;let{chatbot:r,withFooter:n}=e,{isSignedIn:g}=(0,j.Z)();(0,c.useRouter)();let[v,b]=(0,u.Z)(),{isMobile:y}=(0,h.Z)(),w=(0,d.useMemo)(()=>{var e;return(0,o.J6)({requestingUserAuthenticated:g,boosted:r.boosted,model:null!==(t=null===(e=r.config)||void 0===e?void 0:e.data.model)&&void 0!==t?t:""})},[r,g]),N=(0,d.useMemo)(()=>r.description?r.description:r.isOwner?r.creationPrompt:"",[r]),k=(0,d.useMemo)(()=>!!n&&(!!w||!!r.isOwner||!!r.isService||!!r.createdByUsername),[n,w,r.isOwner,r.isService,r.createdByUsername]),C=(0,d.useMemo)(()=>!!n&&!!y&&(!!w||!!r.isOwner||!!r.isService||!!r.createdByUsername),[n,w,r.isOwner,r.isService,r.createdByUsername,y]),[S,L]=(0,d.useState)(!1);return(0,s.jsxs)("div",{ref:v,className:(0,i.cn)("rounded-lg group","border","shadow-sm","bg-white border-border-light","dark:bg-primary-800 dark:border-border-dark","relative"),children:[w&&(0,s.jsx)("div",{className:"absolute top-0 left-0 p-1",onClick:e=>{e.preventDefault()},children:(0,s.jsx)("div",{className:"flex",children:(0,s.jsx)(o.SU,{label:w,hasSeenDisclaimer:!0,setHasSeenDisclaimer:()=>{},openDialog:S,setOpenDialog:L,className:(0,i.cn)("rounded p-[0.1rem]","transition ease-in-out duration-200 active:bg-primary-800 hover:bg-primary-800 ","text-orange-600 hover:text-orange-500"),children:"login"===w?(0,s.jsx)(f.Z,{small:!0}):"boosted"===w?(0,s.jsx)(m.Z,{small:!0}):"premium"===w&&(0,s.jsx)(p.Z,{small:!0})})})}),(0,s.jsx)(l(),{href:(0,i.cb)({id:r.id,username:r.createdByUsername,slug:r.slug}),children:(0,s.jsx)(a.Z,{disabled:!r.description,delayDuration:50,content:r.description,className:"bg-white dark:bg-black max-w-lg",children:(0,s.jsxs)(x.E.button,{animate:k||C?{borderBottomLeftRadius:b||C?"0rem":"0.5rem",borderBottomRightRadius:b||C?"0rem":"0.5rem"}:{},className:(0,i.cn)("w-[9.8rem] h-[8.1rem]","p-2",k||C?"rounded-t-lg":"rounded-lg","flex flex-col items-center gap-1","select-none","transition duration-200 ease-in-out"),children:[(0,s.jsx)("div",{className:"rounded-full h-12 w-12 bg-primary-700 flex items-center justify-center text-2xl",children:r.emoji}),(0,s.jsx)("div",{className:(0,i.cn)("max-w-[8.8rem]","text-center text-sm font-semibold line-clamp-1 overflow-hidden"),children:r.name}),(0,s.jsx)("div",{className:(0,i.cn)("max-w-[8.8rem]","text-xs text-left w-full text-primary-500 line-clamp-2"),children:N})]})})})]})};t.Z=g},86506:function(e,t,r){var s=r(85893),a=r(35377),i=r(88133),n=r(60117),l=r(14323),o=r(41664),d=r.n(o),c=r(67294),x=r(58533),u=r(95591),h=r(46894),m=r(42889);let p=async e=>{let t=await n.j.authorizedFetch(e),r=await t.json();if(!t.ok||!r){let e=Error("An error occurred while fetching the data.");throw e}return r.chatbots},f=e=>{let{chatbots:t,grid:r,border:a}=e,i=(0,c.useMemo)(()=>t.filter((e,t,r)=>t===r.findIndex(t=>t.id===e.id)),[t]);return(0,s.jsx)("div",{className:(0,l.cn)(r&&"flex flex-wrap gap-2 md:gap-4 pb-8 md:justify-start justify-center"),children:i.map(e=>e?(0,s.jsx)("div",{className:(0,l.cn)(!r&&"py-2",a&&"border-b border-primary-700"),children:(0,s.jsx)(h.Z,{chatbot:e,withFooter:!0})},e.id):null)})},j=e=>{let{url:t,options:r,setSearchLoading:n}=e,{data:o,error:d,size:u,setSize:h,mutate:m,isLoadingMore:j,isReachingEnd:g,isRefreshing:v,isEmpty:b}=(0,i.Z)(t,p,{...r,infinite:"scroll"});return(0,c.useEffect)(()=>{n&&"boolean"==typeof j&&n(j)},[j]),(0,s.jsx)("div",{children:b||d?(0,s.jsx)("p",{className:"text-center text-primary-300",children:"No Chatbots found"}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x.Z,{dataLength:o.length,next:()=>h(u+1),hasMore:!g,loader:(0,s.jsx)(s.Fragment,{}),className:"overflow-hidden",children:(0,s.jsx)(f,{chatbots:o,grid:!0})}),!g&&(0,s.jsx)("div",{className:(0,l.cn)("flex justify-center items-center",o.length?"p-4 md:p-8":""),children:j?(0,s.jsx)("div",{className:"py-2",children:(0,s.jsx)(a.Z,{})}):(0,s.jsx)("button",{disabled:j||g,onClick:()=>h(u+1),className:"px-3 py-2 bg-primary-700 hover:bg-primary-650 rounded-lg text-sm transition duration-200 ease-in-out",children:"Load More"})})]})})},g=e=>{let{url:t,children:r}=e,{data:i,error:n,isLoading:l,mutate:o}=(0,u.ZP)(t,p),d=(null==i?void 0:i.length)===0;return l?(0,s.jsx)("div",{className:"flex items-center justify-center p-4",children:(0,s.jsx)(a.Z,{})}):(0,s.jsxs)("div",{children:[d||n||!i?(0,s.jsx)("p",{className:"text-center text-primary-300",children:"No Chatbots found"}):(0,s.jsx)(f,{chatbots:i,grid:!0}),!d&&(0,s.jsx)("div",{children:r})]})},v=e=>{let{isExpanded:t,chatbots:r,onChatbotClick:a,setSelectedChatbotId:i,selectedChatbotId:n,hideIcons:o=!1,mutate:d}=e,c=r.filter((e,t,r)=>t===r.findIndex(t=>t.id===e.id));return(0,s.jsx)("div",{className:(0,l.cn)("flex flex-col space-y-1"),children:c.map(e=>e?(0,s.jsx)("div",{children:(0,s.jsx)(m.ZP,{version:t?"expanded":"minimized",mutate:d,onChatbotClick:a,hideIcons:o,setSelectedChatbotId:i,selectedChatbotId:n,chatbot:e,minimal:!0})},e.id):null)})},b=e=>{let{selectedChatbotId:t,setSelectedChatbotId:r,onChatbotClick:n,url:o,options:c,isExpanded:u=!0,createBotButton:h=!0,hideIcons:m=!1,onMutate:j,filterChatbots:g}=e,{data:v,error:b,size:y,setSize:w,mutate:N,isLoadingMore:k,isReachingEnd:C,isRefreshing:S,isEmpty:L}=(0,i.Z)(o,p,c);return(0,s.jsx)(s.Fragment,{children:L||b?(0,s.jsx)("div",{className:"flex items-center justify-center",children:h?(0,s.jsx)(d(),{href:"/create",className:"w-full",children:(0,s.jsxs)("button",{className:(0,l.cn)("flex items-center gap-1 w-full rounded-lg","transition duration-200 ease-in-out",(0,l.uL)(),"text-gray-500 hover:text-gray-700 dark:text-gray-400",u?"justify-start p-1":"justify-center px-1 py-2"),children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})}),u&&"Create Bot"]})}):(0,s.jsx)(s.Fragment,{children:"No Chatbots found."})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x.Z,{dataLength:v.length,next:()=>w(y+1),hasMore:!C,loader:(0,s.jsx)(s.Fragment,{}),children:(0,s.jsx)(f.Sidebar,{isExpanded:u,chatbots:g?g(v):v,mutate:()=>{N(),null==j||j()},hideIcons:m,onChatbotClick:n,selectedChatbotId:t,setSelectedChatbotId:r})}),!C&&(0,s.jsx)("div",{className:(0,l.cn)("flex justify-center items-center",v.length&&u?"p-4 md:p-8":"",v.length&&!u?"pt-4":""),children:k?(0,s.jsx)("div",{className:"py-2",children:(0,s.jsx)(a.Z,{})}):(0,s.jsx)("button",{disabled:k||C,onClick:()=>w(y+1),className:(0,l.cn)("relative px-3 py-2 bg-primary-700 hover:bg-primary-650 rounded-lg text-sm transition duration-200 ease-in-out"),children:u?"Load More":(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m6-6H6"})})})})]})})};f.InfiniteScroll=j,f.WithLimit=g,f.Sidebar=v,f.SidebarInfiniteScroll=b,t.Z=f},88133:function(e,t,r){r.d(t,{Z:function(){return a}});var s=r(44593);function a(e,t,r){var a;let i="pageLimit"in r?r.pageLimit:"limit"in r?r.limit:16,{data:n,mutate:l,size:o,setSize:d,isValidating:c,isLoading:x,error:u}=(0,s.ZP)((t,s)=>{if(s&&!s.length)return null;r.offset=0===t?0:t*i,"pageLimit"in r&&(r.limit=i,delete r.pageLimit);let a=e;return Object.entries(r).reduce((t,r,s)=>{let[i,n]=r;return i&&i.length>0&&null!=n&&(a+="".concat(0===s&&"?"===e[e.length-1]?"":"&").concat(i,"=").concat(n)),t},e),a},t),h=n?[].concat(...n):[],m=x||o>0&&n&&void 0===n[o-1],p=!x&&(!n||!n[0]||0===n[0].length),f=p||n&&(null===(a=n[n.length-1])||void 0===a?void 0:a.length)<i,j=c&&n&&n.length===o;return{data:h,isLoadingMore:m,isReachingEnd:f,isRefreshing:j,isEmpty:p,error:u,mutate:l,size:o,setSize:d}}},8737:function(e,t,r){r.d(t,{Z:function(){return _}});var s=r(85893),a=r(84517),i=r(67091),n=r(14323),l=r(67294),o=r(11163),d=r(44121);r(47409);var c=r(78133),x=r(91173),u=r(51526),h=r(21469),m=r(37358),p=r(88133),f=r(60117),j=r(41664),g=r.n(j),v=r(58533),b=r(95591),y=r(35377),w=r(94772),N=r(30381),k=r.n(N);let C=e=>{var t;let{messageSummary:r,selectedChatbotId:a,setSelectedChatbotId:i,isExpanded:l}=e,{isMobile:d}=(0,x.Z)(),c=(0,o.useRouter)();return(0,s.jsx)("div",{onClick:()=>{i&&i(r.chatbotId),d&&c.push((0,n.cb)({id:r.chatbotId}))},className:(0,n.AK)((0,n.uL)(a===r.chatbotId),"w-full px-2 py-1 justify-center","transition duration-200 ease-in-out","flex flex-col cursor-pointer","rounded-lg","group/test"),children:l?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"flex gap-2 items-center justify-between",children:[(0,s.jsx)("div",{className:"font-medium line-clamp-1  transition duration-200 ease-in-out",children:r.chatbotName}),(0,s.jsx)("div",{className:"group-hover/test:opacity-100 opacity-0 text-right text-xs text-gray-400 dark:text-gray-600 transition duration-200 ease-in-out",children:k()(r.timestamp).fromNow()})]}),(0,s.jsx)("div",{className:"flex items-center gap-2",children:(0,s.jsx)("div",{className:(0,n.cn)("text-xs line-clamp-1 leading-5 transition duration-200 ease-in-out",a===r.chatbotId?"text-gray-500":"text-gray-400 dark:text-gray-600"),children:r.response})})]}):(0,s.jsx)("div",{className:"flex items-center justify-center",children:(0,s.jsx)("div",{className:"text-xl transition duration-200 ease-in-out",children:null!==(t=r.emoji)&&void 0!==t?t:w.$Y})})})},S=async e=>{let t=await f.j.authorizedFetch(e),r=await t.json();if(!t.ok||!r){let e=Error("An error occurred while fetching the data.");throw e}return r.recentMessageSummaries},L=e=>{let{isExpanded:t,messages:r,setSelectedChatbotId:a,selectedChatbotId:i}=e,l=r.filter((e,t,r)=>t===r.findIndex(t=>t.chatbotId===e.chatbotId));return(0,s.jsx)("div",{className:(0,n.cn)("flex flex-col space-y-1"),children:l.map(e=>(0,s.jsx)("div",{children:(0,s.jsx)(C,{messageSummary:e,selectedChatbotId:i,setSelectedChatbotId:a,isExpanded:t})},e.chatbotId))})},E=e=>{let{url:t,children:r}=e,{data:a,error:i,isLoading:n,mutate:l}=(0,b.ZP)(t,S),o=(null==a?void 0:a.length)===0;return n?(0,s.jsx)("div",{className:"flex items-center justify-center p-4",children:(0,s.jsx)(y.Z,{})}):(0,s.jsxs)("div",{children:[o||i||!a?(0,s.jsx)("p",{className:"text-center text-primary-300",children:"No Messages found"}):(0,s.jsx)(L,{isExpanded:!0,messages:a}),!o&&r&&(0,s.jsx)("div",{children:r})]})},Z=e=>{let{url:t,options:r}=e,{data:a,error:i,size:l,setSize:o,mutate:d,isLoadingMore:c,isReachingEnd:x,isRefreshing:u,isEmpty:h}=(0,p.Z)(t,S,r);return(0,s.jsx)("div",{className:"pb-8",children:h||i?(0,s.jsx)("p",{className:"text-center text-primary-300",children:"No Messages found"}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v.Z,{dataLength:a.length,next:()=>o(l+1),hasMore:!x,loader:(0,s.jsx)(s.Fragment,{}),children:(0,s.jsx)(L,{isExpanded:!0,messages:a})}),!x&&(0,s.jsx)("div",{className:(0,n.cn)("flex justify-center items-center",a.length?"p-4 md:p-8":""),children:c?(0,s.jsx)("div",{className:"py-2",children:(0,s.jsx)(y.Z,{})}):(0,s.jsx)("button",{disabled:c||x,onClick:()=>o(l+1),className:"px-3 py-2 bg-primary-700 hover:bg-primary-650 rounded-lg text-sm transition duration-200 ease-in-out",children:"Load More"})})]})})},I=e=>{let{isExpanded:t,selectedChatbotId:r,setSelectedChatbotId:a,url:i,pageLimit:l,userId:o}=e,{data:d,error:c,size:x,setSize:u,mutate:h,isLoadingMore:m,isReachingEnd:f,isRefreshing:j,isEmpty:b}=(0,p.Z)(i,e=>S(e),{pageLimit:l,userId:o});return(0,s.jsx)("div",{className:"pb-8 p-2",children:b||c?(0,s.jsx)("div",{className:"flex items-center justify-center",children:(0,s.jsx)(g(),{href:"/create",className:"w-full",children:(0,s.jsxs)("button",{className:(0,n.cn)("flex items-center gap-1 w-full  text-gray-500 hover:text-gray-700 dark:text-gray-400 hover:bg-primary-700 rounded-lg","transition duration-200 ease-in-out",t?"justify-start p-1":"justify-center px-1 py-2"),children:[(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})}),t&&"Create Bot"]})})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v.Z,{dataLength:d.length,next:()=>u(x+1),hasMore:!f,loader:(0,s.jsx)(s.Fragment,{}),children:(0,s.jsx)(L,{isExpanded:t,messages:d,selectedChatbotId:r,setSelectedChatbotId:a})}),!f&&(0,s.jsx)("div",{className:(0,n.cn)("flex justify-center items-center",d.length&&t?"p-4 md:p-8":"",d.length&&!t?"pt-4":""),children:m?(0,s.jsx)("div",{className:"py-2",children:(0,s.jsx)(y.Z,{})}):(0,s.jsx)("button",{disabled:m||f,onClick:()=>u(x+1),className:(0,n.cn)("relative px-3 py-2 bg-primary-700 hover:bg-primary-650 rounded-lg text-sm transition duration-200 ease-in-out"),children:t?"Load More":(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m6-6H6"})})})})]})})};L.InfiniteScroll=Z,L.WithLimit=E,L.SidebarInfiniteScroll=I;var M=r(86506),F=r(92758),B=r(14235);let D=e=>{let{isExpanded:t,setSelectedChatbotId:r,selectedChatbotId:a,fetchChatbot:n,setInboxSidebarExpanded:d}=e,{userId:c}=(0,i.Z)(),[x,p]=(0,l.useState)("inbox"),f=(0,o.useRouter)(),j=(0,m.Z)();return(0,l.useEffect)(()=>{f.query.view&&f.query.view!==x&&["inbox","chatbot","favorites"].includes(x)&&p(f.query.view)},[f.query.view]),(0,s.jsx)(u.M,{initial:!1,children:c&&(0,s.jsxs)(h.E.div,{animate:{width:t&&j>1e3?"24rem":t?"18rem":"4rem"},transition:B.n,className:"relative h-full overflow-y-auto flex flex-col w-16",children:[(0,s.jsx)(R,{view:x,setView:p,isExpanded:t,router:f,setInboxSidebarExpanded:d}),(0,s.jsxs)("div",{className:"flex-grow",children:["inbox"===x&&(0,s.jsx)(L.SidebarInfiniteScroll,{isExpanded:t,selectedChatbotId:a,setSelectedChatbotId:r,url:"/users/".concat(c,"/conversations?"),pageLimit:10}),["chatbot","favorites"].includes(x)&&(0,s.jsx)("div",{className:"pb-8 p-2",children:(0,s.jsx)(M.Z.SidebarInfiniteScroll,{isExpanded:t,createBotButton:!0,selectedChatbotId:a,setSelectedChatbotId:r,onMutate:n,url:"/users/".concat(c,"/chatbots?"),options:{pageLimit:10,saved:"favorites"===x,withConfig:!0}})})]}),!t&&(0,s.jsx)("div",{className:"group-hover:opacity-100 opacity-0 sticky bottom-0 p-2 flex items-center justify-center mx-auto transition duration-200 ease-in-out",children:(0,s.jsx)(F.Z,{direction:"right",expandHandler:()=>d(!t)})})]})})},R=e=>{let{view:t,setView:r,isExpanded:a,router:i,setInboxSidebarExpanded:o}=e,[d,c]=(0,l.useState)(!1),x=e=>{r(e),i.replace({query:{...i.query,view:e}},void 0,{shallow:!0})};return a?(0,s.jsx)("div",{className:(0,n.cn)("px-2 border-b","border-border-light","dark:border-border-dark"),children:(0,s.jsxs)("div",{className:"flex justify-between items-center py-1",children:[(0,s.jsxs)("div",{className:(0,n.cn)("flex items-center rounded-lg p-1 gap-2","bg-[rgba(0,0,0,0.04)]","dark:bg-primary-700"),children:[(0,s.jsx)(q,{selectedView:t,view:"inbox",handler:()=>x("inbox")}),(0,s.jsx)(q,{selectedView:t,view:"chatbot",handler:()=>x("chatbot")}),(0,s.jsx)(q,{selectedView:t,view:"favorites",handler:()=>x("favorites")})]}),(0,s.jsx)(F.Z,{direction:"left",expandHandler:()=>o(!a)})]})}):(0,s.jsx)("div",{className:"p-2",children:(0,s.jsx)(A,{openPopover:d,setOpenPopover:c,view:t,setView:r})})},q=e=>{let{selectedView:t,view:r,handler:a}=e;return(0,s.jsxs)("h2",{onClick:a,className:(0,n.AK)("flex items-center px-2 text-base","cursor-pointer rounded-md ",(0,n.uL)(r===t),r===t?"bg-white dark:!bg-primary-600 shadow-sm":" "),children:["inbox"===r&&"Inbox","chatbot"===r&&"Chatbots","favorites"===r&&"Saved"]})},A=e=>{let{view:t,setView:r,openPopover:a,setOpenPopover:i}=e,{isDesktop:l}=(0,x.Z)(),u=(0,o.useRouter)(),h=e=>{r(e),u.replace({query:{...u.query,view:e}},void 0,{shallow:!0}),i(!1)};return(0,s.jsx)(c.Z,{content:(0,s.jsx)("div",{className:(0,n.AK)("relative"),children:(0,s.jsxs)("div",{className:"flex flex-col gap-2  ",children:[(0,s.jsxs)("button",{onClick:()=>h("inbox"),className:(0,n.AK)("outline-none","flex gap-2 items-center py-1 px-2 rounded-lg",(0,n.uL)("inbox"===t)),children:[d.F.inbox," Inbox"]}),(0,s.jsxs)("button",{onClick:()=>h("chatbot"),className:(0,n.AK)("flex gap-2 items-center py-1 px-2 rounded-lg",(0,n.uL)("chatbot"===t)),children:[d.F.chatbots,"Chatbots"]}),(0,s.jsxs)("button",{onClick:()=>h("favorites"),className:(0,n.AK)("flex gap-2 items-center py-1 px-2 rounded-lg",(0,n.uL)("favorites"===t)),children:[d.F.favoritesTransparent,"Liked"]})]})}),openPopover:a,setOpenPopover:i,children:(0,s.jsxs)("div",{onClick:()=>i(!a),className:(0,n.cn)("w-full flex items-center justify-center transition duration-200 ease-in-out cursor-pointer h-11 rounded-lg","bg-[rgba(0,0,0,0.06)] dark:bg-primary-700",(0,n.uL)()),children:["inbox"===t&&d.F.inbox,"chatbot"===t&&d.F.chatbots,"favorites"===t&&d.F.favoritesTransparent]})})};var P=r(45830),H=r(86744),O=r(53682),W=r(11798);let K=e=>{let{pageLimit:t}=e,{asPath:r}=(0,o.useRouter)(),{userId:a}=(0,i.Z)();return(0,s.jsx)(s.Fragment,{children:a&&(0,s.jsx)("div",{className:"mb-8 px-2 pt-4",children:r.startsWith("/dashboard")?(0,s.jsxs)(W.Z,{children:[(0,s.jsx)("div",{className:"px-2 font-medium text-lg",children:"Messages"}),(0,s.jsx)(L.WithLimit,{url:"/users/".concat(a,"/conversations").concat((0,O.A2)({limit:null!=t?t:16,offset:0}))})]}):(0,s.jsx)(L.InfiniteScroll,{url:"/users/".concat(a,"/conversations?"),options:{pageLimit:null!=t?t:16}})})})},U=e=>{let{showMobileView:t,setSelectedChatbotId:r,selectedChatbotId:a}=e;return t?(0,s.jsx)(K,{}):(0,s.jsx)(V,{setSelectedChatbotId:r,selectedChatbotId:a})},V=e=>{let{setSelectedChatbotId:t,selectedChatbotId:r}=e,[d,c]=(0,l.useState)(),{userId:m}=(0,i.Z)(),[p,f]=(0,l.useState)(!1),{isDesktop:j,sizeUndefined:g}=(0,x.Z)(),v=(0,o.useRouter)();(0,l.useEffect)(()=>{r&&m&&b(r,m)},[r,m]);let b=async(e,t)=>{if(e&&t){f(!0);try{let s=await P.x.getChatbot({id:e,userId:t,withConfig:!0}),a=await s.json();c(a.chatbot),v.replace({query:{...v.query,cid:r}},void 0,{shallow:!0})}catch(e){}f(!1)}},[w,N]=(0,l.useState)(!0);return(0,s.jsxs)("div",{className:"h-full relative flex overflow-x-auto ",children:[!g&&j&&(0,s.jsx)(u.M,{initial:!1,children:(0,s.jsx)(h.E.div,{animate:{width:w?"24rem":"4rem"},transition:B.n,className:(0,n.cn)("group relative hidden md:block h-full border-r hover:shadow transition duration-200 ease-in-out","bg-white border-border-light","dark:bg-primary-900 dark:border-border-dark"),children:(0,s.jsx)(D,{fetchChatbot:()=>m&&b(r,m),setInboxSidebarExpanded:N,isExpanded:w,selectedChatbotId:r,setSelectedChatbotId:t})})}),(0,s.jsxs)("div",{className:"relative flex-grow overflow-auto h-full w-full",children:[p&&(0,s.jsx)("div",{className:"w-full h-full flex items-center justify-center",children:(0,s.jsx)(y.Z,{})}),d&&!p&&(0,s.jsx)(a.Z,{chatbot:d}),!d&&!p&&(0,s.jsx)(z,{})]})]})};var _=U;let z=()=>(0,s.jsxs)("div",{className:"h-full w-full flex flex-col gap-8 items-center justify-center p-4",children:[(0,s.jsx)(H.e,{}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-4 max-w-[400px] w-full py-10",children:[(0,s.jsx)(T,{href:"/create",text:"Create New Chatbot"}),J.map(e=>(0,s.jsx)(G,{title:e.title,description:e.description,icon:e.icon,href:e.href},e.title))]}),(0,s.jsxs)("div",{className:"mb-2",children:["Questions? Chat with us on"," ",(0,s.jsx)(g(),{href:w.ul,className:"text-chat-blue hover:font-medium",children:"Discord."})]})]}),T=e=>{let{text:t,href:r}=e,a=(0,l.useRef)(null),[i,n]=(0,l.useState)(!1),[o,c]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{if(a.current){let e=a.current;return e.addEventListener("mouseenter",()=>n(!0)),e.addEventListener("mouseleave",()=>n(!1)),e.addEventListener("mousedown",()=>c(!0)),e.addEventListener("mouseup",()=>c(!1)),()=>{e.removeEventListener("mouseenter",()=>n(!0)),e.removeEventListener("mouseleave",()=>n(!1)),e.removeEventListener("mousedown",()=>c(!0)),e.removeEventListener("mouseup",()=>c(!1))}}},[a]),(0,s.jsx)(h.E.div,{animate:{y:i?-2:0,boxShadow:i?"-3px 4px 2px -2px rgba(0,0,0,0.8)":"0px 0px 2px -2px rgba(0,0,0,0.8)"},whileTap:{y:0,boxShadow:"0px 0px 2px -2px rgba(0,0,0,0.8)"},ref:a,className:"select-none cursor-pointer col-span-2 bg-chat-blue text-white  rounded-lg text-xl font-medium ",children:(0,s.jsxs)(g(),{href:r,className:"flex items-center justify-between gap-2 p-4",children:[(0,s.jsx)("div",{children:t}),(0,s.jsx)(h.E.div,{animate:{y:i&&!o?"-4px":"0px",scale:o?.98:i?1.02:1,justifyContent:"center",boxShadow:i&&!o?"-2px 4px 2px -2px rgba(0,0,0,0.8)":"0px 0px 2px -2px rgba(0,0,0,0.8)"},className:"h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center",children:d.F.create})]})})},G=e=>{let{title:t,description:r,icon:a,href:i}=e,n=(0,l.useRef)(null),[o,d]=(0,l.useState)(!1),[c,x]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{if(n.current){let e=n.current;return e.addEventListener("mouseenter",()=>d(!0)),e.addEventListener("mouseleave",()=>d(!1)),e.addEventListener("mousedown",()=>x(!0)),e.addEventListener("mouseup",()=>x(!1)),()=>{e.removeEventListener("mouseenter",()=>d(!0)),e.removeEventListener("mouseleave",()=>d(!1)),e.removeEventListener("mousedown",()=>x(!0)),e.removeEventListener("mouseup",()=>x(!1))}}},[n]),(0,s.jsx)(g(),{href:i,children:(0,s.jsxs)(h.E.div,{animate:{y:o?-2:0,boxShadow:o?"-3px 4px 2px -2px rgba(0,0,0,0.2)":"0px 0px 2px -2px rgba(0,0,0,0.2)"},whileTap:{y:0,boxShadow:"0px 0px 2px -2px rgba(0,0,0,0.2)"},ref:n,className:"p-4 rounded-lg bg-primary-700 cursor-pointer select-none",children:[(0,s.jsx)("div",{className:"flex items-center justify-start mb-4",children:(0,s.jsx)(h.E.div,{animate:{y:o&&!c?"-4px":"0px",scale:c?.98:o?1.02:1,justifyContent:"center",boxShadow:o&&!c?"-2px 3px 2px -2px rgba(0,0,0,0.2)":"0px 0px 2px -2px rgba(0,0,0,0.2)"},className:"h-10 w-10 bg-primary-600 rounded-full flex items-center justify-center",children:a})}),(0,s.jsx)("h1",{className:"text-2xl font-medium mb-1",children:t}),(0,s.jsx)("p",{className:"text-primary-300 text-sm",children:r})]})})},J=[{title:"Feed",description:"See what conversations are being shared.",icon:d.F.feed,href:"/feed"},{title:"Explore",description:"See what other people are building.",icon:d.F.explore,href:"/explore"}]},86744:function(e,t,r){r.d(t,{e:function(){return v}});var s=r(85893),a=r(84658),i=r(46894),n=r(35377),l=r(91173),o=r(45830),d=r(94772),c=r(14323),x=r(42034),u=r(51526),h=r(21469),m=r(41664),p=r.n(m),f=r(11163),j=r(67294);let g=()=>(0,s.jsxs)("div",{className:"flex flex-col gap-8 md:gap-16 w-full items-center justify-center px-4 overflow-y-auto min-h-full py-10",children:[(0,s.jsx)(v,{}),(0,s.jsx)(b,{}),(0,s.jsx)(y,{})]});t.Z=g;let v=()=>{let e=(0,f.useRouter)(),{setMessage:t}=(0,x.G)(),[r,i]=(0,j.useState)(""),[l,o]=(0,j.useState)(!1),d=e=>{"Enter"!==e.key||e.shiftKey||(e.preventDefault(),u())},u=()=>{if(l||!r||0===r.length)return;o(!0),t(r);let s=(0,c.Zh)()?"/openai/chatgpt":"/dennis77/testing-lemon";e.push(s)};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"max-w-xl w-full flex flex-col gap-6",children:[(0,s.jsx)(a.Z,{message:"Hey, how can I help you today? \uD83E\uDD17"}),(0,s.jsxs)("div",{className:(0,c.cn)("pl-4 pr-2 py-2 border border-primary-700 dark:border-primary-650 rounded-full","bg-white dark:bg-primary-800","flex items-center gap-2","max-w-xl w-full","shadow-sm"),children:[(0,s.jsx)("input",{placeholder:"Start a new chat",autoFocus:!0,value:r,onChange:e=>i(e.target.value),onKeyDown:d,className:(0,c.cn)("flex-grow bg-transparent focus:outline-none","placeholder-xl")}),(0,s.jsx)("button",{disabled:l||!r||0===r.length,onClick:u,className:(0,c.cn)("h-8 w-8","rounded-3xl flex items-center justify-center transition duration-200 ease-in-out",r.length&&!l?"text-white bg-chat-blue hover:rounded-lg":"text-primary-300 bg-primary-800 hover:bg-primary-700","transition-all duration-200 ease-in-out"),children:l?(0,s.jsx)(n.Z,{small:!0}):(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"})})})]})]})})},b=()=>{let{isMobile:e}=(0,l.Z)(),[t,r]=(0,j.useState)([]);return(0,j.useEffect)(()=>{r([...d.E3].sort(()=>Math.random()-.5).slice(0,e?6:11))},[e]),(0,s.jsx)("div",{className:(0,c.cn)("flex flex-row flex-wrap items-center justify-center gap-4 ","max-w-4xl mx-auto"),children:t.map(e=>(0,s.jsx)(p(),{href:"/explore?category=".concat(e.value),children:(0,s.jsx)("button",{className:(0,c.cn)("px-2 border border-primary-700 dark:border-primary-650 rounded-full","bg-white dark:bg-black","dark:text-primary-300","hover:bg-primary-800 dark:hover:bg-primary-700 active:bg-primary-700 dark:active:bg-primary-800","transition duration-200 ease-in-out","flex items-center gap-2","text-sm","cursor-pointer"),children:e.label},e.value)},e.value))})},y=()=>{let[e,t]=(0,j.useState)([]);(0,j.useEffect)(()=>{r()},[]);let r=async()=>{try{let e=await o.x.getChatbots({orderBy:"most_saved",limit:100});if(!e)return;let r=e.sort(()=>Math.random()-Math.random()).slice(0,10);e&&t(r)}catch(e){}};return(0,s.jsx)(u.M,{children:e&&e.length>0&&(0,s.jsx)(h.E.div,{initial:{maxHeight:"0px",opacity:0},animate:{maxHeight:"1000px",opacity:1},exit:{maxHeight:"0px",opacity:0},transition:{duration:.5},className:"overflow-hidden",children:(0,s.jsx)("div",{className:(0,c.cn)("flex flex-wrap items-center justify-center gap-2 md:gap-4 ","max-w-4xl mx-auto"),children:e.map((e,t)=>(0,s.jsx)(i.Z,{chatbot:e,withFooter:!1},t))})})})}}}]);