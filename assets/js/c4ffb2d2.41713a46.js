"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[34224],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},b="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(a),g=r,d=b["".concat(i,".").concat(g)]||b[g]||u[g]||o;return a?n.createElement(d,l(l({ref:t},c),{},{components:a})):n.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[b]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},12849:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Testing Podman 4 with the new network stack",layout:"default",author:"baude",categories:["blogs"],tags:["containers","podman","networking","pod","api","kubernetes","kube","v2","hpc","windows","mac","rootless","sudo","network","netavark","aardvark","aardvark-dns"]},l=void 0,s={permalink:"/blogs/2022/02/04/network-usage",source:"@site/blog/2022-02-04-network-usage.md",title:"Testing Podman 4 with the new network stack",description:"podman logo",date:"2022-02-04T00:00:00.000Z",formattedDate:"February 4, 2022",tags:[{label:"containers",permalink:"/blogs/tags/containers"},{label:"podman",permalink:"/blogs/tags/podman"},{label:"networking",permalink:"/blogs/tags/networking"},{label:"pod",permalink:"/blogs/tags/pod"},{label:"api",permalink:"/blogs/tags/api"},{label:"kubernetes",permalink:"/blogs/tags/kubernetes"},{label:"kube",permalink:"/blogs/tags/kube"},{label:"v2",permalink:"/blogs/tags/v-2"},{label:"hpc",permalink:"/blogs/tags/hpc"},{label:"windows",permalink:"/blogs/tags/windows"},{label:"mac",permalink:"/blogs/tags/mac"},{label:"rootless",permalink:"/blogs/tags/rootless"},{label:"sudo",permalink:"/blogs/tags/sudo"},{label:"network",permalink:"/blogs/tags/network"},{label:"netavark",permalink:"/blogs/tags/netavark"},{label:"aardvark",permalink:"/blogs/tags/aardvark"},{label:"aardvark-dns",permalink:"/blogs/tags/aardvark-dns"}],readingTime:1.465,hasTruncateMarker:!0,authors:[{name:"baude"}],frontMatter:{title:"Testing Podman 4 with the new network stack",layout:"default",author:"baude",categories:["blogs"],tags:["containers","podman","networking","pod","api","kubernetes","kube","v2","hpc","windows","mac","rootless","sudo","network","netavark","aardvark","aardvark-dns"]},prevItem:{title:"Podman v4.0.0 Released",permalink:"/blogs/2022/02/22/new"},nextItem:{title:"Testing Podman 4 with new network stack",permalink:"/blogs/2022/02/04/new"}},i={authorsImageUrls:[void 0]},p=[{value:"By Brent Baude GitHub",id:"by-brent-baude-github",level:2}],c={toc:p},b="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(b,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"podman logo",src:a(1382).Z,width:"228",height:"61"})),(0,r.kt)("h1",{id:"testing-podman-4-with-the-new-network-stack"},"Testing Podman 4 with the new network stack"),(0,r.kt)("h2",{id:"by-brent-baude-github"},"By Brent Baude ",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/baude"},"GitHub")),(0,r.kt)("p",null,"Podman 4.0 will implement a new network stack instead of CNI plugins. There are two components to the new stack:"))}u.isMDXComponent=!0},1382:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);