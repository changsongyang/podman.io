"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[78442],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(t),p=o,y=m["".concat(s,".").concat(p)]||m[p]||u[p]||r;return t?a.createElement(y,i(i({ref:n},c),{},{components:t})):a.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},22883:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(87462),o=(t(67294),t(3905));const r={title:"OnDemand Course&#58; Container pipelines for sys admins\u2014and anyone, really\u2014with Buildah and Podman",layout:"default",author:"tsweeney",categories:["blogs"],tags:["containers","images","docker","buildah","podman","oci"]},i=void 0,l={permalink:"/blog/2019/06/19/ondemand-course",source:"@site/blog/2019-06-19-ondemand-course.md",title:"OnDemand Course&#58; Container pipelines for sys admins\u2014and anyone, really\u2014with Buildah and Podman",description:"podman logo",date:"2019-06-19T00:00:00.000Z",formattedDate:"June 19, 2019",tags:[{label:"containers",permalink:"/blog/tags/containers"},{label:"images",permalink:"/blog/tags/images"},{label:"docker",permalink:"/blog/tags/docker"},{label:"buildah",permalink:"/blog/tags/buildah"},{label:"podman",permalink:"/blog/tags/podman"},{label:"oci",permalink:"/blog/tags/oci"}],readingTime:.445,hasTruncateMarker:!1,authors:[{name:"tsweeney"}],frontMatter:{title:"OnDemand Course&#58; Container pipelines for sys admins\u2014and anyone, really\u2014with Buildah and Podman",layout:"default",author:"tsweeney",categories:["blogs"],tags:["containers","images","docker","buildah","podman","oci"]},prevItem:{title:"OnDemand Course&#58; Container pipelines for sys admins\u2014and anyone, really\u2014with Buildah and Podman",permalink:"/blog/2019/06/19/new"},nextItem:{title:"Podman Mailing list",permalink:"/blog/2019/06/17/mailinglist"}},s={authorsImageUrls:[void 0]},d=[{value:"By Tom Sweeney GitHub",id:"by-tom-sweeney-github",level:2}],c={toc:d},m="wrapper";function u(e){let{components:n,...r}=e;return(0,o.kt)(m,(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"podman logo",src:t(1382).Z,width:"228",height:"61"})),(0,o.kt)("h1",{id:"ondemand-course-container-pipelines-for-sys-adminsand-anyone-reallywith-buildah-and-podman"},"OnDemand Course",":"," Container pipelines for sys admins\u2014and anyone, really\u2014with Buildah and Podman"),(0,o.kt)("h2",{id:"by-tom-sweeney-github"},"By Tom Sweeney ",(0,o.kt)("a",{parentName:"h2",href:"https://github.com/TomSweeneyRedhat"},"GitHub")),(0,o.kt)("p",null,"Red Hat has recently posted an OnDemand course: ",(0,o.kt)("a",{parentName:"p",href:"https://www.redhat.com/en/events/webinar/container-pipelines-sys-admins-and-anyone-really-buildah-and-podman?sc_cid=701f2000000txokAAA&utm_source=bambu&utm_medium=social&utm_campaign=abm"},"Container pipelines for sys admins\u2014and anyone, really\u2014with Buildah and Podman"),". The session teaches you how to integrate both Podman and Buildah into your continuous delivery (CI/CD) solutions and also serves as a good introduction to both tools. The cost can't be beat (free!), so if you're looking for a quick introduction into the tools, this is a good way to go."))}u.isMDXComponent=!0},1382:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);