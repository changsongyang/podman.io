"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[77885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,g=p["".concat(l,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"Using Podman and systemd to manage container lifecycle",layout:"default",author:"ehaynes",categories:["blogs"],tags:["containers","podman","api","kubernetes","linux"]},i=void 0,s={permalink:"/blogs/2020/12/09/podman-systemd-demo",source:"@site/blog/2020-12-09-podman-systemd-demo.md",title:"Using Podman and systemd to manage container lifecycle",description:"podman logo",date:"2020-12-09T00:00:00.000Z",formattedDate:"December 9, 2020",tags:[{label:"containers",permalink:"/blogs/tags/containers"},{label:"podman",permalink:"/blogs/tags/podman"},{label:"api",permalink:"/blogs/tags/api"},{label:"kubernetes",permalink:"/blogs/tags/kubernetes"},{label:"linux",permalink:"/blogs/tags/linux"}],readingTime:2.98,hasTruncateMarker:!0,authors:[{name:"ehaynes"}],frontMatter:{title:"Using Podman and systemd to manage container lifecycle",layout:"default",author:"ehaynes",categories:["blogs"],tags:["containers","podman","api","kubernetes","linux"]},prevItem:{title:"Using Podman and systemd to manage container lifecycle",permalink:"/blogs/2020/12/09/new"},nextItem:{title:"Podman Posts of Interest",permalink:"/blogs/2020/12/07/new"}},l={authorsImageUrls:[void 0]},c=[{value:"By Ed Haynes GitHub",id:"by-ed-haynes-github",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,o.kt)("h1",{id:"using-podman-and-systemd-to-manage-container-lifecycle"},"Using Podman and systemd to manage container lifecycle"),(0,o.kt)("h2",{id:"by-ed-haynes-github"},"By Ed Haynes ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/ehaynes"},"GitHub")),(0,o.kt)("p",null,'My background is in industrial automation, and in most cases, the edge devices in the factory are too underpowered to run Kubernetes as a method to manage the lifecycle of containers. The workloads have a very long lifecycle, and generally are "tied" to the edge device. There is a lot of value in containerizing applications on these edge devices, however, as it decouples the application dependencies from the OS and provides a level of isolation between applications. This demo will show how using Podman in conjunction with systemd provides an elegant solution for this sort of use case. In addition, this will be done as a "rootless" user - a key benefit of Podman that helps keep the device secure.'))}m.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);