"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[64600],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Rootless Podman and NFS",author:"dwalsh",layout:"default",categories:["new"]},s=void 0,i={permalink:"/blogs/2019/11/26/new",source:"@site/blog/2019-11-26-new.md",title:"Rootless Podman and NFS",description:"Dan Walsh has another blog post on the Red Hat Enable Sysadmin site this time about Rootless Podman and NFS. In the post Dan talks about how you can make some minor configuration changes to allow Podman to use a user's home directory on an NFS share. Give it a read!",date:"2019-11-26T00:00:00.000Z",formattedDate:"November 26, 2019",tags:[],readingTime:.255,hasTruncateMarker:!1,authors:[{name:"dwalsh"}],frontMatter:{title:"Rootless Podman and NFS",author:"dwalsh",layout:"default",categories:["new"]},prevItem:{title:"Understanding root inside and outside a container",permalink:"/blogs/2019/12/11/understanding-root"},nextItem:{title:"Rootless Podman and NFS",permalink:"/blogs/2019/11/26/rootless-podman-and-nfs"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Dan Walsh has another blog post on the ",(0,o.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/"},"Red Hat Enable Sysadmin")," site this time about ",(0,o.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/rootless-podman-nfs"},"Rootless Podman and NFS"),". In the post Dan talks about how you can make some minor configuration changes to allow Podman to use a user's home directory on an NFS share. Give it a read!"))}m.isMDXComponent=!0}}]);