"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[61708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77621:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Learning Red Hat's Podman (docker), Buildah, Skopeo and Quay.io",layout:"default",author:"tsweeney",categories:["blogs"],tags:["podman","containers","v2","github","rename"]},i=void 0,l={permalink:"/blogs/2020/08/13/walk-through",source:"@site/blog/2020-08-13-walk-through.md",title:"Learning Red Hat's Podman (docker), Buildah, Skopeo and Quay.io",description:"podman logo",date:"2020-08-13T00:00:00.000Z",formattedDate:"August 13, 2020",tags:[{label:"podman",permalink:"/blogs/tags/podman"},{label:"containers",permalink:"/blogs/tags/containers"},{label:"v2",permalink:"/blogs/tags/v-2"},{label:"github",permalink:"/blogs/tags/github"},{label:"rename",permalink:"/blogs/tags/rename"}],readingTime:.325,hasTruncateMarker:!1,authors:[{name:"tsweeney"}],frontMatter:{title:"Learning Red Hat's Podman (docker), Buildah, Skopeo and Quay.io",layout:"default",author:"tsweeney",categories:["blogs"],tags:["podman","containers","v2","github","rename"]},prevItem:{title:"Learning Red Hat's Podman (docker), Buildah, Skopeo and Quay.io",permalink:"/blogs/2020/08/13/new"},nextItem:{title:"Moving from docker-compose to Podman pods",permalink:"/blogs/2020/08/11/migrate-from-docker-compose"}},s={authorsImageUrls:[void 0]},p=[{value:"By Tom Sweeney GitHub",id:"by-tom-sweeney-github",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,a.kt)("h1",{id:"learning-red-hats-podman-docker-buildah-skopeo-and-quayio"},"Learning Red Hat's Podman (docker), Buildah, Skopeo and Quay.io"),(0,a.kt)("h2",{id:"by-tom-sweeney-github"},"By Tom Sweeney ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/TomSweeneyRedhat"},"GitHub")),(0,a.kt)("p",null,"Four engineers at IBM and Red Hat, ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/jjasghar"},"JJ Asghar"),", ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/briantannous"},"Brian Tannous"),", ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/jdob"},"Jason Dobies")," and Cedric Clyburn spent some time in a stream learning about Podman, Buildah, Skopeo from the ground up in this video blog ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?time_continue=246&v=IKGcxxjieFo&feature=emb_logo"},"post"),". Check out the video to get a great introduction to the tools."))}m.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);