"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[66291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=o,d=c["".concat(s,".").concat(g)]||c[g]||u[g]||a;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},27495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Pulling podman images from a container repository",layout:"default",author:"tsweeney",categories:["blogs"],tags:["containers","images","docker","buildah","podman","hpc","oci","networking","runtime","windows","microsoft"]},i=void 0,l={permalink:"/blogs/2020/03/31/build-pull-options",source:"@site/blog/2020-03-31-build-pull-options.md",title:"Pulling podman images from a container repository",description:"podman logo",date:"2020-03-31T00:00:00.000Z",formattedDate:"March 31, 2020",tags:[{label:"containers",permalink:"/blogs/tags/containers"},{label:"images",permalink:"/blogs/tags/images"},{label:"docker",permalink:"/blogs/tags/docker"},{label:"buildah",permalink:"/blogs/tags/buildah"},{label:"podman",permalink:"/blogs/tags/podman"},{label:"hpc",permalink:"/blogs/tags/hpc"},{label:"oci",permalink:"/blogs/tags/oci"},{label:"networking",permalink:"/blogs/tags/networking"},{label:"runtime",permalink:"/blogs/tags/runtime"},{label:"windows",permalink:"/blogs/tags/windows"},{label:"microsoft",permalink:"/blogs/tags/microsoft"}],readingTime:.32,hasTruncateMarker:!1,authors:[{name:"tsweeney"}],frontMatter:{title:"Pulling podman images from a container repository",layout:"default",author:"tsweeney",categories:["blogs"],tags:["containers","images","docker","buildah","podman","hpc","oci","networking","runtime","windows","microsoft"]},prevItem:{title:"Convert docker-compose services to pods with Podman",permalink:"/blogs/2020/04/04/new"},nextItem:{title:"Pulling podman images from a container repository",permalink:"/blogs/2020/03/31/new"}},s={authorsImageUrls:[void 0]},p=[{value:"By Tom Sweeney GitHub",id:"by-tom-sweeney-github",level:2}],m={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,o.kt)("h1",{id:"pulling-podman-images-from-a-container-repository"},"Pulling podman images from a container repository"),(0,o.kt)("h2",{id:"by-tom-sweeney-github"},"By Tom Sweeney ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/TomSweeneyRedhat"},"GitHub")),(0,o.kt)("p",null,"Tom Sweeney has another blog post on the ",(0,o.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/"},"Red Hat Enable Sysadmin")," site this time he's writing about ",(0,o.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/podman-image-pulling"},"Pulling podman images from a container repository"),". Learn the different varieties of pull that the ",(0,o.kt)("inlineCode",{parentName:"p"},"podman build")," command can use to speed up or further secure your environment in this post."))}u.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);