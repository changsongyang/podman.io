"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[63998],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"Building Container Images with Podman and Buildah",layout:"default",categories:["new"]},i=void 0,l={permalink:"/blog/2020/03/02/new",source:"@site/blog/2020-03-02-new.md",title:"Building Container Images with Podman and Buildah",description:"We were just pointed to this post Building Container Images with Podman and Buildah by Puja Abbassi on the Giant Swarm site. In the article Puja goes over how Podman and Buildah handle daemonless and rootless building processes. A tardy link on this site, but worth a read!",date:"2020-03-02T00:00:00.000Z",formattedDate:"March 2, 2020",tags:[],readingTime:.24,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Building Container Images with Podman and Buildah",layout:"default",categories:["new"]},prevItem:{title:"Building Container Images with Podman and Buildah",permalink:"/blog/2020/03/02/building-with-podman-and-buildah"},nextItem:{title:"6 guides on making containers secure",permalink:"/blog/2020/02/07/new"}},s={authorsImageUrls:[]},u=[],d={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We were just pointed to this post ",(0,a.kt)("a",{parentName:"p",href:"https://blog.giantswarm.io/building-container-images-with-podman-and-buildah/"},"Building Container Images with Podman and Buildah")," by Puja Abbassi on the ",(0,a.kt)("a",{parentName:"p",href:"https://blog.giantswarm.io/"},"Giant Swarm")," site. In the article Puja goes over how Podman and Buildah handle daemonless and rootless building processes. A tardy link on this site, but worth a read!"))}p.isMDXComponent=!0}}]);