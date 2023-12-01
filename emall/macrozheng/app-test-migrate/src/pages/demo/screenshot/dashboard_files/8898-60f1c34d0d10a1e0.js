"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8898],{24125:function(e,t,a){var r=a(85893),s=a(14323),n=a(30381),i=a.n(n),o=a(67294);let l=e=>{let{bucket:t}=e,a=(0,o.useMemo)(()=>null==t?void 0:t.active,[t]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"flex justify-between items-center w-full gap-2",children:[(0,r.jsx)("div",{className:"flex-grow text-left",children:t.name}),!a&&(0,r.jsx)("span",{className:(0,s.cn)("text-xs px-1 rounded-full border border-red-400","text-red-500  bg-red-100 ","dark:text-red-100 dark:bg-red-900"),children:"inactive"}),(0,r.jsx)("div",{children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"})})})]}),(0,r.jsxs)("div",{className:"flex items-center justify-between w-full",children:[(0,r.jsx)("p",{className:"text-xs text-left text-gray-500 line-clamp-1 flex-grow",children:t.description}),(0,r.jsx)("div",{className:"text-xs text-gray-400",style:{whiteSpace:"nowrap"},children:i()(t.updatedAt).fromNow()})]})]})};t.Z=l},93707:function(e,t,a){a.d(t,{r:function(){return w}});var r=a(85893),s=a(67294),n=a(99863),i=a(93446),o=a(14323);let l=e=>{let{bucketName:t,setBucketName:a,bucketDescription:s,setBucketDescription:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{bucketName:t,setBucketName:a}),(0,r.jsx)(c,{bucketDescription:s,setBucketDescription:n})]})},d=e=>{let{bucketName:t,setBucketName:a}=e;return(0,r.jsx)(i.Z,{title:"Name",input:{placeholder:"e.g. Travel",value:t,onChange:e=>a(e.target.value),css:(0,o.cn)("placeholder:text-sm placeholder:text-gray-500","ring-1 ring-primary-700-fade/60 dark:ring-primary-700","border-2 border-transparent","hover:border-transparent hover:ring-1 hover:ring-chat-blue-fade/30 dark:hover:ring-chat-blue-fade/30","focus:border-chat-blue-fade/30")}})},c=e=>{let{bucketDescription:t,setBucketDescription:a}=e;return(0,r.jsx)(n.Z,{title:"Description",input:{placeholder:"e.g. This bucket contains information about travel. It specifically highlights the best places to visit in the world.",value:t,onChange:e=>a(e.target.value),css:(0,o.cn)("h-32 placeholder:text-sm placeholder:text-gray-500","ring-1 ring-primary-700-fade/60 dark:ring-primary-700","border-2 border-transparent","hover:border-transparent hover:ring-1 hover:ring-chat-blue-fade/30 dark:hover:ring-chat-blue-fade/30 ","focus:border-chat-blue-fade/30")}})};var u=a(67091),h=a(46885),m=a(20272),g=a(35377),p=a(8583);let x=e=>{let{userId:t,setError:a,submitData:n,onSubmitEnd:i}=e,[l,d]=(0,s.useState)(!1),c=e=>{let t=(0,o.ro)([()=>h.X.validateBucketUpload(e.uploadType,e.uploadData),()=>h.X.validateSourceName(e.sourceName)]);return!t||(a(t),!1)},u=async()=>{a(null);let e=c(n);if(!e)return;d(!0);let{bucketName:r,bucketDescription:s,bucketId:o,uploadType:l,uploadData:u,sourceName:m}=n;try{let e=await h.X.getOrCreateBucket({userId:t,bucketId:o,bucketName:r,bucketDescription:s});if(!e){a("Failed to create Knowledge Base. Please try again.");return}o||(0,p.Q)("Knowledge Base created.",!0);let n=await h.X.upload({bucketId:e,uploadType:l,uploadData:u,sourceName:m,userId:t});i({bucketId:null!=e?e:void 0,uploadId:null!=n?n:void 0},()=>{n?(0,p.Q)("Upload successful!"):(0,p.J)("Upload failed. Please try again later.")})}catch(e){i({},()=>{(0,p.J)("Something went wrong failed. Please try again later.")})}d(!1)};return(0,r.jsxs)(m.KM,{padding:"tight",className:"px-4 shadow-sm flex items-center gap-2",disabled:l,onClick:u,children:[l&&(0,r.jsx)(g.Z,{small:!0})," Create"]})};var v=a(23735);let f=e=>{let{page:t,setPage:a,submitData:s,onSubmitEnd:n,setError:i}=e,{userId:l}=(0,u.Z)(),d=e=>{let t=(0,o.ro)([()=>h.X.validateBucketName(e.bucketName),()=>h.X.validateBucketDescription(e.bucketDescription)]);return!t||(i(t),!1)},c=()=>{t>1&&(i(null),a(e=>e-1))},g=()=>{i(null);let e=d(s);e&&a(e=>e+1)};return l?(0,r.jsxs)("div",{className:"grid grid-cols-2",children:[(0,r.jsx)("div",{className:"flex items-center",children:!s.bucketId&&t>1&&(0,r.jsxs)("button",{className:(0,o.cn)("flex items-center gap-2 text-sm group text-primary-300",t<=1?"opacity-50 cursor-not-allowed":"hover:text-primary-0 transition duration-200 ease-in-out"),onClick:c,children:[(0,r.jsx)(v.vj,{size:"sm",className:(0,o.cn)("stroke-1",t>1&&"group-hover:stroke-2")}),"Back"]})}),(0,r.jsx)("div",{className:"flex justify-end",children:!s.bucketId&&t<2?(0,r.jsxs)(m.kq,{padding:"tight",className:"px-4 shadow-sm flex items-center gap-2 group",onClick:g,children:["Continue",(0,r.jsx)(v.PC,{size:"sm",className:(0,o.cn)("stroke-1","group-hover:stroke-2")})]}):(0,r.jsx)(x,{userId:l,setError:i,submitData:s,onSubmitEnd:n})})]}):(0,r.jsx)("div",{className:"text-center",children:"Login to proceed"})};var b=a(82852),k=a(17754);let w=e=>{let{onSubmitEnd:t}=e,[a,n]=(0,s.useState)(1),{bucketName:i,setBucketName:o,bucketDescription:d,setBucketDescription:c,uploadType:u,setUploadType:h,uploadData:m,setUploadData:g,sourceName:p,setSourceName:x,error:v,setError:w}=(0,k.Z)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{className:"text-2xl font-semibold text-center",children:(0,r.jsxs)(r.Fragment,{children:[1===a&&"Create Knowledge Base",2===a&&"Upload Data"]})}),1===a&&(0,r.jsx)(l,{bucketName:i,setBucketName:o,bucketDescription:d,setBucketDescription:c}),2===a&&(0,r.jsx)(b.N,{uploadType:u,setUploadType:h,setUploadData:g,uploadData:m,sourceName:p,setSourceName:x}),v&&(0,r.jsx)("div",{className:"text-red-500 text-sm",children:v}),(0,r.jsx)(f,{page:a,setPage:n,submitData:{bucketName:i,bucketDescription:d,uploadType:u,uploadData:m,sourceName:p},onSubmitEnd:t,setError:w})]})}},82852:function(e,t,a){a.d(t,{N:function(){return b}});var r=a(85893),s=a(72749),n=a(11798),i=a(71212),o=a(14323);let l=e=>{let{selected:t,setSelected:a}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)(s.yH,{css:"pb-3",children:"Upload Type"}),(0,r.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-8",children:[(0,r.jsx)(d,{isSelected:t===i.z.Raw,select:()=>a(i.z.Raw),title:"Raw Text",icon:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})})}),(0,r.jsx)(d,{isSelected:t===i.z.File,select:()=>a(i.z.File),title:"File",active:!0,icon:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"})})})]})]})},d=e=>{let{title:t,icon:a,isSelected:s,select:i,active:l=!0}=e;return(0,r.jsx)(n.Z,{className:(0,o.cn)(l?(0,o.cn)("cursor-pointer",s?"ring-2 ring-chat-blue-fade/60 dark:ring-chat-blue-fade/60":"hover:ring-1 hover:ring-chat-blue-fade/30 dark:hover:ring-chat-blue-fade/30"):"cursor-not-allowed shadow-sm bg-[rgba(0,0,0,0.03)]"),onClick:()=>{l&&i()},children:(0,r.jsxs)("div",{className:"flex items-center gap-4",children:[a,(0,r.jsx)("h3",{className:"font-medium",children:t})]})})};var c=a(99863),u=a(16137),h=a(21469),m=a(67294);let g=e=>{let{selected:t,uploadData:a,setUploadData:s}=e,[n,o]=(0,u.Z)(!0);return(0,r.jsx)(h.E.div,{animate:{height:0===o?"auto":o},children:(0,r.jsx)("div",{ref:n,children:t===i.z.Raw?(0,r.jsx)(p,{setUploadData:s}):t===i.z.File?(0,r.jsx)(x,{uploadData:a,setUploadData:s}):(0,r.jsx)("div",{children:"coming soon"})})})},p=e=>{let{setUploadData:t}=e,[a,s]=(0,m.useState)("");return(0,r.jsx)("div",{children:(0,r.jsx)(c.Z,{input:{placeholder:"e.g. This bucket contains information about travel. It specifically highlights the best places to visit in the world.",value:a,onChange:e=>{let a=e.target.value;s(a),t(a)},css:(0,o.cn)("h-52 placeholder:text-sm placeholder:text-gray-500","ring-1 ring-primary-700-fade/60 dark:ring-primary-700","border-2 border-transparent","hover:border-transparent hover:ring-1 hover:ring-chat-blue-fade/30 dark:hover:ring-chat-blue-fade/30 ","focus:border-chat-blue-fade/30")}})})},x=e=>{let{uploadData:t,setUploadData:a}=e,s=(0,m.useMemo)(()=>{if(t instanceof File)return t.name},[t]);return(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("div",{className:"font-medium text-lg mb-2",children:"File to upload"}),!s&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"w-full",children:[(0,r.jsxs)("label",{htmlFor:"file-upload",className:(0,o.cn)("flex text-base relative rounded-md","cursor-pointer","p-3 text-left shadow-sm  focus:outline-none","items-center justify-center",s?"bg-gray-300 hover:bg-gray-400":"bg-white dark:bg-primary-900 hover:bg-[rgba(0,0,0,0.03)] dark:hover:bg-primary-800 border border-dashed border-primary-700"),children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Choose File"]}),(0,r.jsx)("input",{id:"file-upload",className:"absolute w-full h-full opacity-0  hidden cursor-pointer",type:"file",name:"file",onChange:e=>{var t;a(null===(t=e.target.files)||void 0===t?void 0:t[0])}})]}),(0,r.jsx)("p",{className:"text-sm text-red-500",children:"maximum file size: 4.5 MB"})]}),(0,r.jsx)("div",{className:"flex-grow",children:s?(0,r.jsxs)("div",{className:"font-medium flex items-center gap-2",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})}),s,(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6 text-green-600",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})]}):(0,r.jsx)("span",{className:"text-gray-500",children:"No file chosen"})})]})};var v=a(93446);let f=e=>{let{sourceName:t,setSourceName:a}=e;return(0,r.jsx)(v.Z,{title:"Name",description:"Give your upload a name so you can easily find it later.",input:{placeholder:"e.g. Lisbon Travel Article",value:null!=t?t:"",onChange:e=>a(e.target.value&&e.target.value.trim().length>0?e.target.value:void 0),css:(0,o.cn)("placeholder:text-sm placeholder:text-gray-500","ring-1 ring-primary-700-fade/60 dark:ring-primary-700","border-2 border-transparent","hover:border-transparent hover:ring-1 hover:ring-chat-blue-fade/30 dark:hover:ring-chat-blue-fade/30","focus:border-chat-blue-fade/30")}})},b=e=>{let{uploadType:t,setUploadType:a,setUploadData:s,uploadData:n,sourceName:i,setSourceName:o}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{sourceName:i,setSourceName:o}),(0,r.jsx)(l,{selected:t,setSelected:a}),(0,r.jsx)(g,{uploadData:n,selected:t,setUploadData:s})]})}},17754:function(e,t,a){var r=a(71212),s=a(67294);let n=r.z.Raw,i=()=>{let[e,t]=(0,s.useState)(""),[a,r]=(0,s.useState)(""),[i,o]=(0,s.useState)(n),[l,d]=(0,s.useState)(),[c,u]=(0,s.useState)(),[h,m]=(0,s.useState)(""),[g,p]=(0,s.useState)(null);return{bucketName:e,setBucketName:t,bucketDescription:a,setBucketDescription:r,uploadType:i,setUploadType:o,uploadData:l,setUploadData:d,sourceName:c,setSourceName:u,sourceDescription:h,setSourceDescription:m,error:g,setError:p}};t.Z=i},46885:function(e,t,a){a.d(t,{X:function(){return l}});var r=a(52934),s=a(45830),n=a(14323),i=a(59556),o=a(71212);class l{}l.validateBucketName=e=>e?e.length<r.LP?"Name must be at least ".concat(r.LP," characters"):e.length>r.qO?"Name must be at most ".concat(r.qO," characters"):void 0:"Name is required",l.validateSourceName=e=>e?e.length<r.L4?"Name must be at least ".concat(r.L4," characters"):e.length>r.F9?"Name must be at most ".concat(r.F9," characters"):void 0:"Name is required",l.validateBucketDescription=e=>e?e.length<r.Vp?"Description must be at least ".concat(r.Vp," characters"):e.length>r.tk?"Description must be at most ".concat(r.tk," characters"):void 0:"Description is required",l.validateSourceDescription=e=>e?e.length<r.sB?"Description must be at least ".concat(r.sB," characters"):e.length>r.AS?"Description must be at most ".concat(r.AS," characters"):void 0:"Description is required",l.validateBucketUpload=(e,t)=>{if(!t)return"Data is required";switch(e){case o.z.Raw:if("string"!=typeof t)return"Invalid data";break;case o.z.File:if(!(t instanceof File))return"Invalid data";break;case o.z.Website:if("string"!=typeof t||!(0,n.CB)(t))return"Invalid data"}},l.getOrCreateBucket=async e=>{let t=e.bucketId;if(!t){(l.validateBucketName(e.bucketName)||l.validateBucketDescription(e.bucketDescription)||!e.userId)&&l.handleErrorAndExit({statusCode:422,message:"Invalid Name or Description."});let a={userId:e.userId,name:e.bucketName,description:e.bucketDescription},r=await s.x.createBucket(a);r.ok||l.handleErrorAndExit({statusCode:r.status,message:"Failed to create. Please try again later."});let{bucketId:n}=await r.json();n||l.handleErrorAndExit({statusCode:500,message:"Failed to retrieve bucket id. Please refresh or try again later."}),t=n}return t},l.upload=async e=>{let{bucketId:t,uploadType:a,uploadData:r,sourceName:i,userId:d}=e;l.validateBucketUpload(a,r)&&l.handleErrorAndExit({statusCode:422,message:"Invalid Input."});let c={bucketId:t,source:{name:i&&i.length>0?i:void 0,description:void 0},userId:d};switch(a){case o.z.Raw:c.content=r;break;case o.z.File:let u=await l.uploadFileToStorage(r);u||l.handleErrorAndExit({statusCode:500,message:"Failed to retrieve file data. Please try again later."});let{fileId:h,fileName:m}=u;c.fileId=h,i&&0!==i.length||(c.source.name=(0,n.TF)(m));break;case o.z.Website:c.content=r.toString()}let g=await s.x.uploadToBucket(c);g.ok||l.handleErrorAndExit({statusCode:g.status,message:"Failed to upload. Please try again later."});let{uploadId:p}=await g.json();return p||l.handleErrorAndExit({statusCode:500,message:"Failed to retrieve upload file id. Please refresh or try again later."}),p},l.uploadFileToStorage=async e=>{if(!e)return;let t=new FormData;t.set("file",e);let a=await fetch("/api/upload",{method:"POST",body:t});a.ok||l.handleErrorAndExit({statusCode:a.status,message:"Failed to upload. Please try again later."});let{fileId:r,fileName:s}=await a.json();if(r)return{fileId:r,fileName:s};l.handleErrorAndExit({statusCode:500,message:"Failed to retrieve upload file id. Please refresh or try again later."})},l.handleErrorAndExit=e=>{(0,i._5)(e)}},71212:function(e,t,a){var r,s;a.d(t,{z:function(){return r}}),(s=r||(r={})).Raw="raw",s.File="file",s.Website="website"},59556:function(e,t,a){a.d(t,{_5:function(){return s}});class r extends Error{constructor({statusCode:e=400,key:t,message:a}){if(super(a),this.statusCode=e,!(e in c))throw Error("Unknown HTTP status code = ".concat(e));this.key=t||c[e],this.message=a}}let s=e=>{switch(e.statusCode){case 400:throw new n({message:e.message});case 401:throw new o({message:e.message});case 422:throw new i({message:e.message});case 500:throw new l({message:e.message});case 501:throw new d({message:e.message});default:var t;throw{title:null!==(t=c[e.statusCode])&&void 0!==t?t:"General Error",statusCode:e.statusCode,message:e.message}}};class n extends r{constructor({message:e="Bad Request",statusCode:t=400}={}){super({statusCode:t,message:e})}}class i extends r{constructor({message:e="Unprocessable Entity",statusCode:t=422}={}){super({statusCode:t,message:e})}}class o extends r{constructor({message:e="Unauthorized",statusCode:t=401}={}){super({statusCode:t,message:e})}}class l extends r{constructor({message:e="Internal Server Error",statusCode:t=500}={}){super({statusCode:t,message:e})}}class d extends r{constructor({message:e="Not Implemented",statusCode:t=501}={}){super({statusCode:t,message:e})}}let c={400:"BadRequest",401:"Unauthorized",402:"PaymentRequired",403:"Forbidden",404:"NotFound",405:"MethodNotAllowed",406:"NotAcceptable",407:"ProxyAuthenticationRequired",408:"RequestTimeout",409:"Conflict",410:"Gone",411:"LengthRequired",412:"PreconditionFailed",413:"PayloadTooLarge",414:"URITooLong",415:"UnsupportedMediaType",416:"RangeNotSatisfiable",417:"ExpectationFailed",418:"ImATeapot",421:"MisdirectedRequest",422:"UnprocessableEntity",423:"Locked",424:"FailedDependency",425:"TooEarly",426:"UpgradeRequired",428:"PreconditionRequired",429:"TooManyRequests",431:"RequestHeaderFieldsTooLarge",451:"UnavailableForLegalReasons",500:"InternalServerError",501:"NotImplemented",502:"BadGateway",503:"ServiceUnavailable",504:"GatewayTimeout",505:"HTTPVersionNotSupported",506:"VariantAlsoNegotiates",507:"InsufficientStorage",508:"LoopDetected",509:"BandwidthLimitExceeded",510:"NotExtended",511:"NetworkAuthenticationRequired"}},814:function(e,t,a){a.d(t,{L_:function(){return d},Oo:function(){return o},SK:function(){return n},Yc:function(){return c},k7:function(){return l},uP:function(){return i}});var r=a(60117),s=a(59556);let n=(e,t)=>async a=>{let n=await r.j.authorizedFetch(a);if(!n.ok){(0,s._5)({statusCode:n.status,message:"Failed to fetch ".concat(t,". Please try again later.")});return}let i=await n.json();if(!i){(0,s._5)({statusCode:500,message:"Failed to fetch ".concat(t,". Please try again later.")});return}return e(i)},i=e=>e.buckets,o=e=>e.bucket,l=e=>{let t=e.buckets;if(t&&t.length>0)return t[0]},d=e=>e.chatbots,c=e=>e.storageUsed}}]);