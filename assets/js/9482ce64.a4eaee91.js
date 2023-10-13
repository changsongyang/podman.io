"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[7703],{3905:(e,t,o)=>{o.d(t,{Zo:()=>i,kt:()=>g});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},i=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=l(o),u=n,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return o?r.createElement(g,s(s({ref:t},i),{},{components:o})):r.createElement(g,s({ref:t},i))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[m]="string"==typeof e?e:n,s[1]=c;for(var l=2;l<a;l++)s[l]=o[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},73716:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const a={title:"Convert docker-compose services to pods with Podman",layout:"default",author:"balage",categories:["blogs"],tags:["containers","docker-compose","podman","networking","pod"]},s=void 0,c={permalink:"/blogs/2020/04/04/convert-docker-compose-to-pods",source:"@site/blog/2020-04-04-convert-docker-compose-to-pods.md",title:"Convert docker-compose services to pods with Podman",description:"podman logo",date:"2020-04-04T00:00:00.000Z",formattedDate:"April 4, 2020",tags:[{label:"containers",permalink:"/blogs/tags/containers"},{label:"docker-compose",permalink:"/blogs/tags/docker-compose"},{label:"podman",permalink:"/blogs/tags/podman"},{label:"networking",permalink:"/blogs/tags/networking"},{label:"pod",permalink:"/blogs/tags/pod"}],readingTime:.275,hasTruncateMarker:!1,authors:[{name:"balage"}],frontMatter:{title:"Convert docker-compose services to pods with Podman",layout:"default",author:"balage",categories:["blogs"],tags:["containers","docker-compose","podman","networking","pod"]},prevItem:{title:"Managing Podman pods with pods-compose",permalink:"/blogs/2020/04/05/new"},nextItem:{title:"Convert docker-compose services to pods with Podman",permalink:"/blogs/2020/04/04/new"}},p={authorsImageUrls:[void 0]},l=[{value:"By Bal\xe1zs N\xe9meth GitHub",id:"by-bal\xe1zs-n\xe9meth-github",level:2}],i={toc:l},m="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"podman logo",src:o(1382).Z,width:"228",height:"61"})),(0,n.kt)("h1",{id:"convert-docker-compose-services-to-pods-with-podman"},"Convert docker-compose services to pods with Podman"),(0,n.kt)("h2",{id:"by-bal\xe1zs-n\xe9meth-github"},"By Bal\xe1zs N\xe9meth ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/abalage"},"GitHub")),(0,n.kt)("p",null,"How to deploy pods with Podman when you only need a single-host system and not a complete Kubernetes. Check the blog post ",(0,n.kt)("a",{parentName:"p",href:"https://balagetech.com/convert-docker-compose-services-to-pods/"},"Convert your docker-compose services to pods with Podman")," by Bal\xe1zs N\xe9meth to see how it can be done."))}d.isMDXComponent=!0},1382:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);