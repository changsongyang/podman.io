"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[78325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(n),b=r,g=c["".concat(l,".").concat(b)]||c[b]||u[b]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},15542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const o={title:"Container image short names in Podman",layout:"default",author:"tsweeney",categories:["blogs"],tags:["containers","podman","networking","pod","api","kubernetes","kube","v2","hpc","windows","mac"]},i=void 0,s={permalink:"/blogs/2020/12/01/short-container-names",source:"@site/blog/2020-12-01-short-container-names.md",title:"Container image short names in Podman",description:"podman logo",date:"2020-12-01T00:00:00.000Z",formattedDate:"December 1, 2020",tags:[{label:"containers",permalink:"/blogs/tags/containers"},{label:"podman",permalink:"/blogs/tags/podman"},{label:"networking",permalink:"/blogs/tags/networking"},{label:"pod",permalink:"/blogs/tags/pod"},{label:"api",permalink:"/blogs/tags/api"},{label:"kubernetes",permalink:"/blogs/tags/kubernetes"},{label:"kube",permalink:"/blogs/tags/kube"},{label:"v2",permalink:"/blogs/tags/v-2"},{label:"hpc",permalink:"/blogs/tags/hpc"},{label:"windows",permalink:"/blogs/tags/windows"},{label:"mac",permalink:"/blogs/tags/mac"}],readingTime:.335,hasTruncateMarker:!1,authors:[{name:"tsweeney"}],frontMatter:{title:"Container image short names in Podman",layout:"default",author:"tsweeney",categories:["blogs"],tags:["containers","podman","networking","pod","api","kubernetes","kube","v2","hpc","windows","mac"]},prevItem:{title:"Container image short names in Podman",permalink:"/blogs/2020/12/01/new"},nextItem:{title:"The history of an API&#58; GitLab Runner and Podman",permalink:"/blogs/2020/11/13/gitlab-runner-and-podman"}},l={authorsImageUrls:[void 0]},m=[{value:"By Tom Sweeney GitHub",id:"by-tom-sweeney-github",level:2}],p={toc:m},c="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,r.kt)("h1",{id:"container-image-short-names-in-podman"},"Container image short names in Podman"),(0,r.kt)("h2",{id:"by-tom-sweeney-github"},"By Tom Sweeney ",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/TomSweeneyRedhat"},"GitHub")),(0,r.kt)("p",null,"Do you like you container names to be short, sweet and yet secure? ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/vlntnrthbrg"},"Valentin Rothberg")," shows you how in a recent blog post on the ",(0,r.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/"},"Red Hat Enable Sysadmin")," site, ",(0,r.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/container-image-short-names"},"Container image short names in Podman"),". This functionality is now available in the upstream version of Podman and is targeted for Podman v3.0."))}u.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);