"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[35174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(n),u=a,g=c["".concat(l,".").concat(u)]||c[u]||d[u]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={title:"Improved systemd integration with Podman 2.0",layout:"default",author:"tsweeney",categories:["blogs"],tags:["podman","containers","v2","github","rename"]},i=void 0,s={permalink:"/blogs/2020/08/02/systemd-integration-v2",source:"@site/blog/2020-08-02-systemd-integration-v2.md",title:"Improved systemd integration with Podman 2.0",description:"podman logo",date:"2020-08-02T00:00:00.000Z",formattedDate:"August 2, 2020",tags:[{label:"podman",permalink:"/blogs/tags/podman"},{label:"containers",permalink:"/blogs/tags/containers"},{label:"v2",permalink:"/blogs/tags/v-2"},{label:"github",permalink:"/blogs/tags/github"},{label:"rename",permalink:"/blogs/tags/rename"}],readingTime:.28,hasTruncateMarker:!1,authors:[{name:"tsweeney"}],frontMatter:{title:"Improved systemd integration with Podman 2.0",layout:"default",author:"tsweeney",categories:["blogs"],tags:["podman","containers","v2","github","rename"]},prevItem:{title:"Improved systemd integration with Podman 2.0",permalink:"/blogs/2020/08/02/new"},nextItem:{title:"Podman API v1.0 Deprecation and Removal Notice",permalink:"/blogs/2020/08/01/deprecate-and-remove-varlink-notice"}},l={authorsImageUrls:[void 0]},m=[{value:"By Tom Sweeney GitHub",id:"by-tom-sweeney-github",level:2}],p={toc:m},c="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,a.kt)("h1",{id:"improved-systemd-integration-with-podman-20"},"Improved systemd integration with Podman 2.0"),(0,a.kt)("h2",{id:"by-tom-sweeney-github"},"By Tom Sweeney ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/TomSweeneyRedhat"},"GitHub")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/vlntnrthbrg"},"Valentin Rothberg")," just landed a blog post on the ",(0,a.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/"},"Red Hat Enable Sysadmin")," site ",(0,a.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/improved-systemd-podman"},"Improved systemd integration with Podman 2.0"),". In the post, Valentin talks about how systemd in Podman v2.0 is even more tightly integrated than it was in prior versions."))}d.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);