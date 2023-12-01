"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5151],{84658:function(e,t,r){r.d(t,{Z:function(){return w}});var s,a,n=r(85893),i=r(3436),o=r(94772),l=r(96093),c=r(14323),d=r(35377),m=r(45830),u=r(8583);(s=a||(a={}))[s.NEUTRAL=0]="NEUTRAL",s[s.GOOD=1]="GOOD",s[s.BAD=2]="BAD";var x=r(67294),p=r(66824),h=r(78133),g=r(91173);let v=e=>{let{openPopover:t,setOpenPopover:r,show:s,children:i,selectedRating:o,userId:l,conversationId:v,conversationItemId:f}=e,[y,j]=(0,x.useState)(""),[b,N]=(0,x.useState)(!1),{isDesktop:w}=(0,g.Z)();(0,x.useEffect)(()=>{j("")},[t,o]);let I=async()=>{N(!0),await m.x.emitMessageFeedback({userId:l,conversationId:v,conversationItemId:f,rating:o,feedback:y}),N(!1),(0,u.Q)("Thanks for your additional feedback!")},k=o===a.GOOD?"Why did you like this response?":"Why did you choose this rating?";return s?(0,n.jsx)(h.Z,{content:(0,n.jsxs)("div",{className:(0,c.AK)("relative","w-full rounded-xl p-4 flex flex-col gap-4"),children:[(0,n.jsxs)("div",{className:"text-primary-50 font-medium text-center flex items-start gap-2 justify-center",children:[k," ",(0,n.jsx)("span",{className:"text-xs font-light text-primary-300",children:"optional"})]}),w&&(0,n.jsx)("div",{className:"absolute top-0 right-0 p-2 select-none",children:(0,n.jsx)(p.P,{onClick:()=>r(!1)})}),(0,n.jsxs)("div",{className:"flex gap-2",children:[(0,n.jsx)("div",{className:"flex-grow flex md:min-w-[500px] justify-center",children:(0,n.jsx)("input",{disabled:b,onKeyDown:async e=>{y.length>0&&"Enter"===e.key&&(await I(),r(!1))},className:" w-full p-2 border border-primary-600 dark:bg-primary-550 bg-primary-700 rounded-lg  focus:outline-none focus:ring-0 focus:border-primary-400 text-primary-0 transition duration-200 ease-in-out ",onChange:e=>j(e.target.value)})}),(0,n.jsx)("div",{className:"flex mx-auto",children:b?(0,n.jsx)("div",{className:(0,c.AK)("flex gap-2  items-center justify-center space-x-2 rounded-full w-11 h-11 p-2 ","text-sm transition duration-200 bg-chat-blue"),children:(0,n.jsx)(d.Z,{small:!0})}):(0,n.jsx)("button",{onClick:async()=>{y.length>0&&(await I(),r(!1))},className:(0,c.AK)("text-white","flex gap-2  items-center justify-center space-x-2 rounded-full w-11 h-11 p-2 ","text-sm transition duration-200 bg-chat-blue hover:bg-chat-blue-fade/70 active:bg-chat-blue-fade/60",y.length>0?"text-primary-0":"text-primary-300"),children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:(0,c.AK)("w-5 h-5"),children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"})})})})]})]}),openPopover:t,setOpenPopover:r,children:(0,n.jsx)("div",{onClick:()=>r(!t),children:i})}):(0,n.jsx)(n.Fragment,{children:i})},f="w-4 h-4 group-hover:w-5 group-hover:h-5  group-active:text-primary-500 group-active:w-4 group-active:h-4 transition-all duration-200 ease-in-out",y=[{rating:a.GOOD,tooltip:"Good Response",icon:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",className:f,children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"})})},{rating:a.BAD,tooltip:"Bad Response",icon:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",className:f,children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"})})}],j=e=>{let{conversationId:t,conversationItemId:r,userId:s}=e,[a,o]=(0,x.useState)(),[l,p]=(0,x.useState)(!1),[h,g]=(0,x.useState)(),f=async e=>{o(e),await m.x.emitMessageFeedback({userId:s,conversationId:t,conversationItemId:r,rating:e}),o(void 0),(0,u.Q)("Thanks for your feedback!")};return(0,n.jsxs)("div",{className:"flex gap-1 md:gap-2 justify-start items-center",children:[(0,n.jsx)("div",{className:"w-5"}),(0,n.jsx)("div",{className:"my-1 ml-1 md:my-2 md:ml-2 flex items-center text-primary-300",children:y.map((e,o)=>(0,n.jsx)(v,{openPopover:l,setOpenPopover:p,show:h===e.rating,selectedRating:e.rating,userId:s,conversationId:t,conversationItemId:r,children:a&&a===e.rating?(0,n.jsx)("div",{className:"w-6 h-6 flex items-center justify-center text-primary-300",children:(0,n.jsx)(d.Z,{small:!0})}):(0,n.jsx)(i.Z,{content:e.tooltip,disabled:!!a,delayDuration:200,children:(0,n.jsx)("div",{onClick:()=>{a||(g(e.rating),p(!0),f(e.rating))},className:(0,c.AK)("w-6 h-6 flex items-center justify-center",a?"cursor-default":"cursor-pointer group"),children:e.icon})})},o))})]})};var b=r(89484);let N=e=>{let{userId:t,message:r,model:s,conversationId:a,conversationItemId:l,emoji:d,allowFeedback:m,showInfo:u}=e;return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"flex-grow flex gap-1 md:gap-2 w-full justify-start items-end",children:[(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"rounded-full text-lg md:text-xl w-5 flex items-center justify-center",children:d||o.$Y})}),(0,n.jsx)("div",{className:(0,c.AK)("text-sm md:text-base rounded-2xl py-1 md:py-2 px-2 md:px-3 relative","bg-primary-700","text-primary-0 dark:bg-primary-650"),children:r?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(b.J,{message:r,sender:"ai"})}):(0,n.jsx)("div",{className:"py-2",children:(0,n.jsx)(k,{})})})]}),(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.jsx)("div",{children:m&&r&&a&&l&&t&&(0,n.jsx)(j,{conversationId:a,conversationItemId:l,userId:t})}),s&&u&&(0,n.jsx)(i.Z,{content:(0,n.jsx)("div",{children:I(s)}),delayDuration:200,children:(0,n.jsx)("div",{className:"text-primary-500 w-6 h-6 flex items-center justify-center group",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4 group-hover:w-5 group-hover:h-5 transition-all duration-200 ease-in-out",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"})})})})]})]})};var w=N;let I=e=>{let t=e.split("::")[1];if(t&&l.Fi[t])return l.Fi[t]},k=()=>(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)("div",{className:"typing__dot"}),(0,n.jsx)("div",{className:"typing__dot"}),(0,n.jsx)("div",{className:"typing__dot"})]})},5572:function(e,t,r){var s=r(85893),a=r(3436),n=r(54418),i=r(14323),o=r(21469),l=r(41664),c=r.n(l),d=r(89484);let m=e=>{let{message:t,image:r,username:a}=e,{ALLOW_IMAGE_GEN:o,tag:l,transformedInput:c}=(0,n.Z)(t);return t?(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"flex-grow flex justify-end items-end w-full gap-2",children:[(0,s.jsxs)("div",{style:{whiteSpace:"pre-line"},className:"bg-chat-blue text-primary-50 rounded-2xl py-1 px-2 md:py-2  md:px-3 sm:flex sm:gap-2 sm:items-center lg:max-w-[70%] text-sm md:text-base relative",children:[o&&l&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:" justify-center mb-2 sm:mb-0 text-center",children:(0,s.jsx)("div",{className:"bg-primary-600 px-2 py-[2px] rounded-xl",children:l})})}),(0,s.jsx)(d.J,{sender:"human",message:c})]}),(0,s.jsx)("div",{children:(0,s.jsx)(u,{username:a,classes:"rounded-full text-lg md:text-xl flex items-center justify-center",children:r?(0,s.jsx)("img",{src:r,className:(0,i.AK)("rounded-full h-7 w-7"),referrerPolicy:"no-referrer"}):"\uD83E\uDDD1‍\uD83D\uDE80"})})]})}):(0,s.jsx)(s.Fragment,{})};t.Z=m;let u=e=>{let{username:t,children:r,classes:n}=e;return t?(0,s.jsx)(a.Z,{content:"View Profile",children:(0,s.jsx)(c(),{href:"/profile/".concat(t),children:(0,s.jsx)(o.E.div,{whileTap:{scale:.95},className:n,children:r})})}):(0,s.jsx)("div",{className:n,children:r})}},89484:function(e,t,r){r.d(t,{J:function(){return b}});var s=r(85893),a=r(3436),n=r(8583),i=r(14323),o=r(15575),l=r(82010),c=r(67294),d=r(74655),m=r(45884),u=r(14769),x=r(30399),p=r(23735),h=r(53682),g=r(21373),v=r(84283);let f=(0,c.memo)(e=>{let{language:t,value:r}=e,[a,o]=(0,c.useState)(!1),l=async()=>{await (0,i.vQ)({text:r,onSuccess:async()=>{o(!0),setTimeout(()=>{o(!1)},2e3)},onError:e=>(0,n.J)("Copy to clipboard failed!")})},d=()=>{let e=j[t]||".file",s="code-".concat((0,h.J3)()).concat(e),a=window.prompt("Enter file name",s);if(!a)return;let n=new Blob([r],{type:"text/plain"}),i=URL.createObjectURL(n),o=document.createElement("a");o.download=a,o.href=i,o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(i)};return(0,s.jsxs)("div",{className:"px-0 relative font-sans text-[16px]",children:[t&&(0,s.jsxs)("div",{className:"flex items-center justify-between p-1.5 px-2 bg-primary-650 dark:bg-primary-800 rounded-t-lg",children:[(0,s.jsx)("span",{className:"text-xs lowercase text-primary-0",children:t}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsxs)("button",{className:"flex gap-1.5 items-center rounded bg-none p-1 text-xs text-primary-0",onClick:l,children:[a?(0,s.jsx)(p.NO,{size:"sm",strokeWidth:1.5}):(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"})}),a?"Copied!":"Copy code"]}),(0,s.jsx)("button",{className:"flex items-center rounded bg-none p-1 text-xs text-primary-0",onClick:d,children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"})})})]})]}),(0,s.jsx)(g.Z,{language:t,style:v.vk,className:"text-sm overflow-auto",customStyle:{margin:0,borderRadius:"0 0 8px 8px"},children:y(r)})]})});f.displayName="CodeBlock";let y=e=>e.replace(/^\s+|\s+$/g,""),j={javascript:".js",python:".py",java:".java",c:".c",cpp:".cpp","c++":".cpp","c#":".cs",ruby:".rb",php:".php",swift:".swift","objective-c":".m",kotlin:".kt",typescript:".ts",go:".go",perl:".pl",rust:".rs",scala:".scala",haskell:".hs",lua:".lua",shell:".sh",sql:".sql",html:".html",css:".css"},b=(0,c.memo)(e=>{let{message:t,sender:r}=e,{theme:h}=(0,l.F)(),[g,v]=(0,c.useState)(!1),{setImage:y}=(0,o.z)(),j=async()=>{await (0,i.vQ)({text:t,onSuccess:async()=>{(0,n.Q)("Copied to clipboard!"),v(!0),setTimeout(()=>{v(!1)},2e3)},onError:e=>(0,n.J)("Copy to clipboard failed!")})},b="ai"===r?"dark"===h?"text-white":"text-primary-50":"dark"===h?"text-white":"text-primary-900";return(0,s.jsxs)("div",{className:(0,i.AK)("group","overflow-auto xl:max-w-3xl w-full"),children:[(0,s.jsx)("div",{className:(0,i.AK)("relative m-auto flex text-base md:gap-2 "),children:(0,s.jsx)("div",{className:(0,i.AK)("prose mt-[-2px]  w-full prose-invert"),children:(0,s.jsx)("div",{className:"flex flex-row",children:(0,s.jsx)(d.D,{className:(0,i.AK)("flex flex-col gap-2 flex-1 relative overflow-auto",b),remarkPlugins:[u.Z,x.Z],rehypePlugins:[m.Z],components:{pre(e){let{children:t}=e;return(0,s.jsx)("pre",{className:"bg-transparent my-0 px-0",children:t})},h1(e){let{children:t}=e;return(0,s.jsx)("h1",{className:(0,i.AK)(" my-0 ",b),children:t})},h2(e){let{children:t}=e;return(0,s.jsx)("h2",{className:(0,i.AK)(" my-0 ",b),children:t})},h3(e){let{children:t}=e;return(0,s.jsx)("h3",{className:(0,i.AK)(" my-0 ",b),children:t})},h4(e){let{children:t}=e;return(0,s.jsx)("h4",{className:(0,i.AK)(" my-0 ",b),children:t})},h5(e){let{children:t}=e;return(0,s.jsx)("h5",{className:(0,i.AK)(" my-0 ",b),children:t})},code(e){let{node:t,inline:r,className:a,children:n,...o}=e,l=/language-(\w+)/.exec(a||"");return r?(0,s.jsx)("span",{className:(0,i.AK)(a||"","text-white dark:text-primary-0 bg-primary-500 dark:bg-[#29282c] px-[6px] py-[2px] text-sm rounded"),...o,children:n}):(0,s.jsx)(f,{language:l&&l[1]||"",value:String(n).replace(/\n$/,""),...o},Math.random())},table(e){let{children:t}=e;return(0,s.jsx)("table",{className:(0,i.AK)("border-collapse border px-3 py-1 border-primary-0 my-0"),children:t})},th(e){let{children:t}=e;return(0,s.jsx)("th",{className:(0,i.AK)("break-words border bg-primary-650 dark:bg-gray-500 px-3 py-1 text-primary-0 border-primary-0"),children:t})},td(e){let{children:t}=e;return(0,s.jsx)("td",{className:(0,i.AK)("break-words border px-3 py-1"," text-black dark:text-inherit border-primary-0 bg-primary-800 dark:bg-primary-600"),children:t})},ol(e){let{children:t}=e;return(0,s.jsx)("ol",{className:(0,i.AK)(" my-0 ",b),children:t})},ul(e){let{children:t}=e;return(0,s.jsx)("ul",{className:(0,i.AK)(" my-0 ",b),children:t})},p(e){let{children:t}=e;return(0,s.jsx)("div",{className:(0,i.AK)(" my-0 ",b),children:t})},strong:e=>(0,s.jsx)("strong",{className:(0,i.AK)("font-medium my-0 ",b),children:e.children}),a:e=>(0,s.jsx)("a",{target:"_blank",className:"my-0 text-blue-400 hover:text-blue-500 underline transition duration-200 ease-in-out font-normal",href:e.href,rel:"noreferrer",children:e.children}),img:e=>(0,s.jsx)("div",{className:"w-full my-0 ",children:(0,s.jsx)("div",{className:"h-64 w-64 overflow-hidden rounded",children:(0,s.jsx)("img",{onClick:()=>{y(e.src)},src:e.src,alt:e.alt,style:{transition:"transform 0.3s ease"},className:"hover:scale-110 shadow-md shadow-black/30 cursor-pointer my-0"})})})},children:t})})})}),(0,s.jsx)("div",{className:"absolute bottom-1 md:bottom-2 right-1 md:right-2",children:g?(0,s.jsx)("div",{className:"rounded-full bg-primary-700 flex items-center p-1.5",children:(0,s.jsx)(p.NO,{size:"sm",color:"green",strokeWidth:1.5})}):(0,s.jsx)(a.Z,{content:"copy text",children:(0,s.jsx)("button",{className:(0,i.AK)("invisible group-hover:visible focus:visible text-primary-300 hover:text-primary-0","transition duration-200 ease-in-out","rounded-full bg-primary-700 flex items-center p-1.5"),onClick:j,children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"})})})})})]})});b.displayName="ChatMessage"},66824:function(e,t,r){r.d(t,{P:function(){return i}});var s=r(85893),a=r(23735),n=r(21469);let i=e=>{let{onClick:t}=e;return(0,s.jsx)(n.E.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:"cursor-pointer",onClick:t,children:(0,s.jsx)(a.bM,{size:"md"})})}},78133:function(e,t,r){r.d(t,{Z:function(){return u}});var s=r(85893),a=r(86419),n=r(91173),i=r(67294),o=r(25675),l=r(51526),c=r(21469);function d(e){let{setShow:t,children:r}=e,a=(0,i.useRef)(null),n=(0,o._)(),d={type:"spring",stiffness:500,damping:30};async function m(e,r){var s;let i=r.offset.y,o=r.velocity.y,l=(null===(s=a.current)||void 0===s?void 0:s.getBoundingClientRect().height)||0;i>l/2||o>800?(await n.start({y:"100%",transition:d}),t(!1)):n.start({y:0,transition:d})}return(0,i.useEffect)(()=>{n.start({y:20,transition:d})},[]),(0,s.jsxs)(l.M,{children:[(0,s.jsxs)(c.E.div,{ref:a,className:"group fixed inset-x-0 bottom-0 z-40 w-screen cursor-grab rounded-t-4xl bg-white dark:bg-primary-900 pb-5 active:cursor-grabbing sm:hidden",initial:{y:"100%"},animate:n,exit:{y:"100%"},transition:d,drag:"y",dragDirectionLock:!0,onDragEnd:m,dragElastic:{top:0,bottom:1},dragConstraints:{top:0,bottom:0},children:[(0,s.jsxs)("div",{className:"rounded-t-4xl -mb-1 flex h-7 w-full items-center justify-center border-t border-border-light dark:border-border-dark",children:[(0,s.jsx)("div",{className:"-mr-1 h-1 w-6 rounded-full bg-gray-300 transition-all group-active:rotate-12"}),(0,s.jsx)("div",{className:"h-1 w-6 rounded-full bg-gray-300 transition-all group-active:-rotate-12"})]}),r]},"leaflet"),(0,s.jsx)(c.E.div,{className:"fixed inset-0 z-30 bg-gray-100 bg-opacity-10 backdrop-blur",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>t(!1)},"leaflet-backdrop")]})}var m=r(14323);function u(e){let{children:t,content:r,align:i="center",openPopover:o,setOpenPopover:l,className:c}=e,{isMobile:u,isDesktop:x}=(0,n.Z)();return(0,s.jsxs)(s.Fragment,{children:[u&&t,o&&u&&(0,s.jsx)(d,{setShow:l,children:r}),x&&(0,s.jsxs)(a.fC,{open:o,onOpenChange:e=>l(e),children:[(0,s.jsx)(a.xz,{className:"inline-flex",asChild:!0,children:t}),(0,s.jsx)(a.VY,{sideOffset:4,align:i,className:(0,m.cn)("z-50 min-w-[12rem] m-1 overflow-hidden rounded-md border border-primary-700 bg-white dark:bg-primary-900 p-1","shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",c),children:r})]})]})}},54418:function(e,t,r){r.d(t,{Z:function(){return o}});var s=r(78001),a=r(94404),n=r(21805),i=r(67294);function o(e){let{session:t}=(0,n.t)(),[r,o]=(0,i.useState)(a._p),[l,c]=(0,i.useState)(),[d,m]=(0,i.useState)("");return(0,i.useEffect)(()=>{e&&(r&&e&&e.length>0&&e.startsWith(s.Y)?(c("generate"),m('"'.concat(e.substring(s.Y.length).trim(),'"'))):m(e))},[r,e]),{ALLOW_IMAGE_GEN:r,tag:l,transformedInput:d}}},78001:function(e,t,r){r.d(t,{Y:function(){return c},Km:function(){return a},Rr:function(){return p},Px:function(){return d},KO:function(){return g},S9:function(){return x}});var s,a,n=r(45830),i=r(8583),o=r(8853),l=r(53682);let c="/generate",d=async e=>{let t=e.input.substring(c.length).trim(),r=await m(t);if(!r){(0,i.J)("Sorry, image generation failed. Please try again.");return}let{id:s}=r;n.x.emitMixpanelEvent({eventName:o.yV,properties:{distinct_id:e.uid,bot_id:e.chatbot.id,inference_id:s}});let l=!1,d=performance.now();for(;!l;){var p,h,g;await new Promise(e=>setTimeout(e,3e3));let r=await fetch("/api/images/check",{method:"POST",body:JSON.stringify({inferenceId:s,chatbotId:e.chatbot.id,conversationId:e.conversationId,userId:e.uid,userInput:"".concat(c," ").concat(t)})}),n=await u(r);if(n&&(null===(p=n.inference)||void 0===p?void 0:p.state)==="finished"&&(null===(h=n.inference)||void 0===h?void 0:h.images)&&(null===(g=n.inference)||void 0===g?void 0:g.images.length)>0){x(e.setMessages,a.IMAGE_GENERATION,{model:n.model,images:n.inference.images,conversationItemId:n.conversationItemId,timestamp:n.timestamp}),!e.conversationId&&n.conversationId&&e.setConversationId(n.conversationId),l=!0;break}if(n&&n.error)return x(e.setMessages,a.IMAGE_GENERATION_FAIL,{toast:"Sorry, image generation failed. Please try again."});if(performance.now()-d>=12e4)return x(e.setMessages,a.IMAGE_GENERATION_FAIL,{toast:"Image generation timed out. Please try again."})}},m=async e=>{let t=await fetch("/api/images/req",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e,seed:(0,l.qb)()})});if(200===t.status){let e=await t.json();return e}},u=async e=>200===e.status?e.json():{error:!0};(s=a||(a={}))[s.HISTORY=0]="HISTORY",s[s.USER_INPUT=1]="USER_INPUT",s[s.TEXT_GENERATION=2]="TEXT_GENERATION",s[s.TEXT_GENERATION_FAIL=3]="TEXT_GENERATION_FAIL",s[s.IMAGE_GENERATION=4]="IMAGE_GENERATION",s[s.IMAGE_GENERATION_FAIL=5]="IMAGE_GENERATION_FAIL";let x=(e,t,r)=>{switch(t){case a.HISTORY:return e(r.messages);case a.USER_INPUT:return e(e=>[...e,{message:r.message,sender:"user",timestamp:r.timestamp||(0,l.u3)()}]);case a.TEXT_GENERATION:return e(e=>[...e,{model:r.model,message:r.message,sender:"bot",conversationItemId:r.conversationItemId,timestamp:r.timestamp}]);case a.TEXT_GENERATION_FAIL:return e(e=>[...e,{message:"Sorry, I'm having trouble understanding you.",sender:"bot"}]);case a.IMAGE_GENERATION:e(e=>[...e,{model:r.model,message:(0,l.$T)(r.images),sender:"bot",conversationItemId:r.conversationItemId,timestamp:r.timestamp}]);case a.IMAGE_GENERATION_FAIL:return(0,i.J)(r.toast),e(e=>[...e,{message:"Sorry, I'm having trouble generating an image, please try again.",sender:"bot"}])}},p=async e=>{let t=await n.x.getConversationItems({...e}),r=t.items;return{conversationId:t&&t.conversationId?t.conversationId:void 0,messages:r&&r.length>0?h(r):void 0}},h=e=>e.reduce((e,t)=>(e.push({message:t.input,conversationItemId:t.conversationItemId,timestamp:t.timestamp,sender:"user"}),e.push({message:t.response||void 0,conversationItemId:t.conversationItemId,timestamp:t.timestamp,sender:"bot",model:t.model}),e),[]),g=async e=>{let t=await v({chatbot:e.chatbot,input:e.input,conversationId:e.conversationId,userId:e.uid});if(t){if(t.error){e.setGPT4LimitReached&&"gpt-4-limit"===t.error&&e.setGPT4LimitReached(!0);return}t.conversationId&&e.setConversationId(t.conversationId),t&&t.response&&x(e.setMessages,a.TEXT_GENERATION,{model:t.model,message:t.response,conversationItemId:t.conversationItemId,timestamp:t.timestamp})}else x(e.setMessages,a.TEXT_GENERATION_FAIL)},v=async e=>{try{let r=await n.x.addConversationItem(e),s=await r.json();if(r.ok&&s.response)return{...s,response:s.response.text};if(s.error){var t;(0,i.J)(null!==(t=s.error.message)&&void 0!==t?t:void 0)}}catch(e){(0,i.J)()}}}}]);