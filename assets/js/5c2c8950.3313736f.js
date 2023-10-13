"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[92341],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,g=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Exploring additional image stores in Podman",layout:"default",author:"dwalsh",categories:["blogs"],tags:["podman","containers","v2","github","rename"]},i=void 0,l={permalink:"/blogs/2020/07/17/additional-image-stores",source:"@site/blog/2020-07-17-additional-image-stores.md",title:"Exploring additional image stores in Podman",description:"podman logo",date:"2020-07-17T00:00:00.000Z",formattedDate:"July 17, 2020",tags:[{label:"podman",permalink:"/blogs/tags/podman"},{label:"containers",permalink:"/blogs/tags/containers"},{label:"v2",permalink:"/blogs/tags/v-2"},{label:"github",permalink:"/blogs/tags/github"},{label:"rename",permalink:"/blogs/tags/rename"}],readingTime:.3,hasTruncateMarker:!1,authors:[{name:"dwalsh"}],frontMatter:{title:"Exploring additional image stores in Podman",layout:"default",author:"dwalsh",categories:["blogs"],tags:["podman","containers","v2","github","rename"]},prevItem:{title:"Speed up container builds with overlay mounts",permalink:"/blogs/2020/07/18/speed-up-build-with-overlayfs"},nextItem:{title:"Exploring additional image stores in Podman",permalink:"/blogs/2020/07/17/new"}},s={authorsImageUrls:[void 0]},p=[{value:"By Dan Walsh GitHub",id:"by-dan-walsh-github",level:2}],m={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,r.kt)("h1",{id:"exploring-additional-image-stores-in-podman"},"Exploring additional image stores in Podman"),(0,r.kt)("h2",{id:"by-dan-walsh-github"},"By Dan Walsh ",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/rhatdan"},"GitHub")),(0,r.kt)("p",null,"Dan Walsh has another blog post on the ",(0,r.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/"},"Red Hat Enable Sysadmin")," site this time he's writing about ",(0,r.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/image-stores-podman"},"Exploring additional image stores in Podman"),". In the article Dan shows you how to store container images on shares, permitting the images to be accessed over the network."))}d.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);