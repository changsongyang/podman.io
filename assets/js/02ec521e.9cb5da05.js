"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[65870],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return n?r.createElement(h,s(s({ref:t},m),{},{components:n})):r.createElement(h,s({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Running containers with Podman and shareable systemd services",author:"vrothberg",layout:"default",categories:["new"]},s=void 0,i={permalink:"/blogs/2019/12/17/new",source:"@site/blog/2019-12-17-new.md",title:"Running containers with Podman and shareable systemd services",description:"Podman version 1.7 is coming out soon and will include new features that will make management of containers with systemd services even easier. Valentin Rothberg has a blog post on the Red Hat Enable Sysadmin site that previews the features: Running containers with Podman and shareable systemd services. In the post Valentin goes over the highlights and then gives a great working example.",date:"2019-12-17T00:00:00.000Z",formattedDate:"December 17, 2019",tags:[],readingTime:.315,hasTruncateMarker:!1,authors:[{name:"vrothberg"}],frontMatter:{title:"Running containers with Podman and shareable systemd services",author:"vrothberg",layout:"default",categories:["new"]},prevItem:{title:"Bioinformatics and rootless containers with Podman",permalink:"/blogs/2020/01/15/new"},nextItem:{title:"Running containers with Podman and shareable systemd services",permalink:"/blogs/2019/12/17/podman-systemd-1-7"}},l={authorsImageUrls:[void 0]},c=[],m={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Podman version 1.7 is coming out soon and will include new features that will make management of containers with systemd services even easier. Valentin Rothberg has a blog post on the ",(0,a.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/"},"Red Hat Enable Sysadmin")," site that previews the features: ",(0,a.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/podman-shareable-systemd-services"},"Running containers with Podman and shareable systemd services"),". In the post Valentin goes over the highlights and then gives a great working example."))}d.isMDXComponent=!0}}]);