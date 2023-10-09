"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[22609],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(g,l(l({ref:n},c),{},{components:t})):a.createElement(g,l({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},26578:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={title:"Exploring Podman RESTful API using Python and Bash",layout:"default",author:"jwhonce",categories:["blogs"],tags:["containers","podman","networking","pod","api","kubernetes","kube","v2","hpc","windows","mac","restful","REST"]},l=void 0,i={permalink:"/blog/2020/10/17/expoloring-restful-api",source:"@site/blog/2020-10-17-expoloring-restful-api.md",title:"Exploring Podman RESTful API using Python and Bash",description:"podman logo",date:"2020-10-17T00:00:00.000Z",formattedDate:"October 17, 2020",tags:[{label:"containers",permalink:"/blog/tags/containers"},{label:"podman",permalink:"/blog/tags/podman"},{label:"networking",permalink:"/blog/tags/networking"},{label:"pod",permalink:"/blog/tags/pod"},{label:"api",permalink:"/blog/tags/api"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"kube",permalink:"/blog/tags/kube"},{label:"v2",permalink:"/blog/tags/v-2"},{label:"hpc",permalink:"/blog/tags/hpc"},{label:"windows",permalink:"/blog/tags/windows"},{label:"mac",permalink:"/blog/tags/mac"},{label:"restful",permalink:"/blog/tags/restful"},{label:"REST",permalink:"/blog/tags/rest"}],readingTime:.36,hasTruncateMarker:!1,authors:[{name:"jwhonce"}],frontMatter:{title:"Exploring Podman RESTful API using Python and Bash",layout:"default",author:"jwhonce",categories:["blogs"],tags:["containers","podman","networking","pod","api","kubernetes","kube","v2","hpc","windows","mac","restful","REST"]},prevItem:{title:"The history of an API&#58; GitLab Runner and Podman",permalink:"/blog/2020/11/13/new"},nextItem:{title:"Exploring Podman RESTful API using Python and Bash",permalink:"/blog/2020/10/17/new"}},s={authorsImageUrls:[void 0]},p=[{value:"By Jhon Honce GitHub",id:"by-jhon-honce-github",level:2}],c={toc:p},u="wrapper";function m(e){let{components:n,...o}=e;return(0,r.kt)(u,(0,a.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"podman logo",src:t(1382).Z,width:"228",height:"61"})),(0,r.kt)("h1",{id:"exploring-podman-restful-api-using-python-and-bash"},"Exploring Podman RESTful API using Python and Bash"),(0,r.kt)("h2",{id:"by-jhon-honce-github"},"By Jhon Honce ",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/jwhonce"},"GitHub")),(0,r.kt)("p",null,"In a recent blog post on the ",(0,r.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/"},"Red Hat Enable Sysadmin")," site, ",(0,r.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/podman-python-bash"},"Exploring Podman RESTful API using Python and Bash"),", Jhon Honce nicely demonstrates the new Podman REST API using code examples in Python and shell commands. Additional notes are included in the code comments. The provided code was written to be clear vs. production quality."))}m.isMDXComponent=!0},1382:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);