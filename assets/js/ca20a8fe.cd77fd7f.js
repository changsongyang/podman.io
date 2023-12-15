"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[57365],{3905:(e,o,t)=>{t.d(o,{Zo:()=>p,kt:()=>k});var r=t(67294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),c=function(e){var o=r.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},p=function(e){var o=c(e.components);return r.createElement(l.Provider,{value:o},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},u=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),u=n,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return t?r.createElement(k,s(s({ref:o},p),{},{components:t})):r.createElement(k,s({ref:o},p))}));function k(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i[m]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},27145:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(87462),n=(t(67294),t(3905));const a={title:"Podman 3 and Docker Compose - How Does the Dockerless Compose Work?",layout:"default",author:"kshirinkin",categories:["blogs"],tags:["podman","containers","systemd","video","docker"]},s=void 0,i={permalink:"/blogs/2021/05/26/podman-3-compose",source:"@site/blog/2021-05-26-podman-3-compose.md",title:"Podman 3 and Docker Compose - How Does the Dockerless Compose Work?",description:"podman logo",date:"2021-05-26T00:00:00.000Z",formattedDate:"May 26, 2021",tags:[{label:"podman",permalink:"/blogs/tags/podman"},{label:"containers",permalink:"/blogs/tags/containers"},{label:"systemd",permalink:"/blogs/tags/systemd"},{label:"video",permalink:"/blogs/tags/video"},{label:"docker",permalink:"/blogs/tags/docker"}],readingTime:.335,hasTruncateMarker:!1,authors:[{name:"kshirinkin"}],frontMatter:{title:"Podman 3 and Docker Compose - How Does the Dockerless Compose Work?",layout:"default",author:"kshirinkin",categories:["blogs"],tags:["podman","containers","systemd","video","docker"]},prevItem:{title:"Podman 3 and Docker Compose - How Does the Dockerless Compose Work?",permalink:"/blogs/2021/05/26/new"},nextItem:{title:"May the Fourth be with you via Podman!",permalink:"/blogs/2021/05/04/new"}},l={authorsImageUrls:[void 0]},c=[{value:"Podman 3 and Docker Compose - How Does the Dockerless Compose Work?",id:"podman-3-and-docker-compose---how-does-the-dockerless-compose-work",level:2},{value:"By Kirill Shirinkin GitHub",id:"by-kirill-shirinkin-github",level:2}],p={toc:c},m="wrapper";function d(e){let{components:o,...a}=e;return(0,n.kt)(m,(0,r.Z)({},p,a,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"podman logo",src:t(1382).Z,width:"228",height:"61"})),(0,n.kt)("h2",{id:"podman-3-and-docker-compose---how-does-the-dockerless-compose-work"},"Podman 3 and Docker Compose - How Does the Dockerless Compose Work?"),(0,n.kt)("h2",{id:"by-kirill-shirinkin-github"},"By Kirill Shirinkin ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/Fodoj"},"GitHub")),(0,n.kt)("p",null,"One of the main Podman 3 features is the support of Docker Compose. You can take any of your existing docker-compose.yml and just use it with Podman."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=15PFfjuxtvM"},"In this video"),", Kirill Shirinkin shows how he moved from Docker to Podman in a real docker-composed application."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=15PFfjuxtvM"},"Watch now"),"."))}d.isMDXComponent=!0},1382:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);