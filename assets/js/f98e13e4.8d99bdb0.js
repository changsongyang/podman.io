"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[24720],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(b,l(l({ref:t},c),{},{components:r})):a.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},74494:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"Fedora 31 and Control Group v2",layout:"default",author:"dwalsh",categories:["blogs"],tags:["containers","images","docker","buildah","podman","hpc","oci","security","runtime"]},l=void 0,i={permalink:"/blog/2019/11/12/F31-Control-Group-v2",source:"@site/blog/2019-11-12-F31-Control-Group-v2.md",title:"Fedora 31 and Control Group v2",description:"podman logo",date:"2019-11-12T00:00:00.000Z",formattedDate:"November 12, 2019",tags:[{label:"containers",permalink:"/blog/tags/containers"},{label:"images",permalink:"/blog/tags/images"},{label:"docker",permalink:"/blog/tags/docker"},{label:"buildah",permalink:"/blog/tags/buildah"},{label:"podman",permalink:"/blog/tags/podman"},{label:"hpc",permalink:"/blog/tags/hpc"},{label:"oci",permalink:"/blog/tags/oci"},{label:"security",permalink:"/blog/tags/security"},{label:"runtime",permalink:"/blog/tags/runtime"}],readingTime:.32,hasTruncateMarker:!1,authors:[{name:"dwalsh"}],frontMatter:{title:"Fedora 31 and Control Group v2",layout:"default",author:"dwalsh",categories:["blogs"],tags:["containers","images","docker","buildah","podman","hpc","oci","security","runtime"]},prevItem:{title:"Leasing routable IP addresses with Podman containers",permalink:"/blog/2019/11/13/new"},nextItem:{title:"Fedora 31 and Control Group v2",permalink:"/blog/2019/11/12/new"}},s={authorsImageUrls:[void 0]},p=[{value:"By Dan Walsh GitHub",id:"by-dan-walsh-github",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"podman logo",src:r(1382).Z,width:"228",height:"61"})),(0,n.kt)("h1",{id:"fedora-31-and-control-group-v2"},"Fedora 31 and Control Group v2"),(0,n.kt)("h2",{id:"by-dan-walsh-github"},"By Dan Walsh ",(0,n.kt)("a",{parentName:"h2",href:"https://github.com/rhatdan"},"GitHub")),(0,n.kt)("p",null,"Dan Walsh has another blog post on the ",(0,n.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/"},"Red Hat Enable Sysadmin")," site this time about ",(0,n.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/fedora-31-control-group-v2"},"Fedora 31 and Control Group v2"),". In the post Dan talks about the new version of control groups that is part of the Fedora 31 release and how it makes containers even more secure."))}d.isMDXComponent=!0},1382:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);