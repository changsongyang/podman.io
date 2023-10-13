"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[85350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,g=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Replacing Docker with Podman",layout:"default",author:"tsweeney",categories:["blogs"],tags:["containers","images","docker","buildah","podman","oci"]},i=void 0,l={permalink:"/blogs/2019/06/26/replace-docker-with-podman",source:"@site/blog/2019-06-26-replace-docker-with-podman.md",title:"Replacing Docker with Podman",description:"podman logo",date:"2019-06-26T00:00:00.000Z",formattedDate:"June 26, 2019",tags:[{label:"containers",permalink:"/blogs/tags/containers"},{label:"images",permalink:"/blogs/tags/images"},{label:"docker",permalink:"/blogs/tags/docker"},{label:"buildah",permalink:"/blogs/tags/buildah"},{label:"podman",permalink:"/blogs/tags/podman"},{label:"oci",permalink:"/blogs/tags/oci"}],readingTime:.315,hasTruncateMarker:!1,authors:[{name:"tsweeney"}],frontMatter:{title:"Replacing Docker with Podman",layout:"default",author:"tsweeney",categories:["blogs"],tags:["containers","images","docker","buildah","podman","oci"]},prevItem:{title:"Replacing Docker with Podman",permalink:"/blogs/2019/06/26/new"},nextItem:{title:"OnDemand Course&#58; Container pipelines for sys admins\u2014and anyone, really\u2014with Buildah and Podman",permalink:"/blogs/2019/06/19/new"}},c={authorsImageUrls:[void 0]},p=[{value:"By Tom Sweeney GitHub",id:"by-tom-sweeney-github",level:2}],s={toc:p},m="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,a.kt)("h1",{id:"replacing-docker-with-podman"},"Replacing Docker with Podman"),(0,a.kt)("h2",{id:"by-tom-sweeney-github"},"By Tom Sweeney ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/TomSweeneyRedhat"},"GitHub")),(0,a.kt)("p",null,"Ganesh Mani recently wrote the blog ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@ganeshmani009/replacing-docker-with-podman-power-of-podman-cloudnweb-23cfb7541538"},"Replacing Docker with Podman\u200a\u2014\u200aPower of Podman\u200a\u2014\u200aCloudnweb"),". The article gives a nice overview of Docker, Podman, their differences, and how you can use Podman to replace Docker. A nice read and\nreally, who doesn't love a blog that wraps up with a meme featuring The Rock?"))}d.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);