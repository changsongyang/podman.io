"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[52277],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),g=a,b=m["".concat(l,".").concat(g)]||m[g]||u[g]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},50297:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Container images, multi-architecture, manifests, ids, digests \u2013 what\u2019s behind?",layout:"default",author:"tsweeney",categories:["new"],tags:["containers","podman","networking","pod","api","kubernetes","kube","v2","hpc","windows","mac"]},i=void 0,s={permalink:"/blogs/2020/12/22/new",source:"@site/blog/2020-12-22-new.md",title:"Container images, multi-architecture, manifests, ids, digests \u2013 what\u2019s behind?",description:"Robert Bohne has a nice post on",date:"2020-12-22T00:00:00.000Z",formattedDate:"December 22, 2020",tags:[{label:"containers",permalink:"/blogs/tags/containers"},{label:"podman",permalink:"/blogs/tags/podman"},{label:"networking",permalink:"/blogs/tags/networking"},{label:"pod",permalink:"/blogs/tags/pod"},{label:"api",permalink:"/blogs/tags/api"},{label:"kubernetes",permalink:"/blogs/tags/kubernetes"},{label:"kube",permalink:"/blogs/tags/kube"},{label:"v2",permalink:"/blogs/tags/v-2"},{label:"hpc",permalink:"/blogs/tags/hpc"},{label:"windows",permalink:"/blogs/tags/windows"},{label:"mac",permalink:"/blogs/tags/mac"}],readingTime:.345,hasTruncateMarker:!1,authors:[{name:"tsweeney"}],frontMatter:{title:"Container images, multi-architecture, manifests, ids, digests \u2013 what\u2019s behind?",layout:"default",author:"tsweeney",categories:["new"],tags:["containers","podman","networking","pod","api","kubernetes","kube","v2","hpc","windows","mac"]},prevItem:{title:"Container images, multi-architecture, manifests, ids, digests \u2013 what\u2019s behind?",permalink:"/blogs/2020/12/22/behind-container-images"},nextItem:{title:"Podman v2.2.0 Released",permalink:"/blogs/2020/12/14/new"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/RobertBohne"},"Robert Bohne")," has a nice ",(0,a.kt)("a",{parentName:"p",href:"https://www.opensourcerers.org/2020/11/16/container-images-multi-architecture-manifests-ids-digests-whats-behind/"},"post")," on\n",(0,a.kt)("a",{parentName:"p",href:"https://www.opensourcerers.org"},"opensourcers.org")," which talks about the basics of containers, how digests and manifests come into play,\nworking with and creating multi-architecture images and more! It is a really nice discussion of all the pieces and parts of a container image for someone new to the technology right through\npeople who are a lot more experienced, but might not know every nook and cranny."))}u.isMDXComponent=!0}}]);