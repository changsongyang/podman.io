"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[32699],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Podman Posts of Interest",layout:"default",author:"tsweeney",categories:["new"],tags:["containers","podman","networking","pod","api","kubernetes","kube","v2","hpc","windows","mac"]},i=void 0,s={permalink:"/blogs/2020/09/18/new",source:"@site/blog/2020-09-18-new.md",title:"Podman Posts of Interest",description:"I've run across a number of posts over the past few weeks concerning Podman and have",date:"2020-09-18T00:00:00.000Z",formattedDate:"September 18, 2020",tags:[{label:"containers",permalink:"/blogs/tags/containers"},{label:"podman",permalink:"/blogs/tags/podman"},{label:"networking",permalink:"/blogs/tags/networking"},{label:"pod",permalink:"/blogs/tags/pod"},{label:"api",permalink:"/blogs/tags/api"},{label:"kubernetes",permalink:"/blogs/tags/kubernetes"},{label:"kube",permalink:"/blogs/tags/kube"},{label:"v2",permalink:"/blogs/tags/v-2"},{label:"hpc",permalink:"/blogs/tags/hpc"},{label:"windows",permalink:"/blogs/tags/windows"},{label:"mac",permalink:"/blogs/tags/mac"}],readingTime:.82,hasTruncateMarker:!1,authors:[{name:"tsweeney"}],frontMatter:{title:"Podman Posts of Interest",layout:"default",author:"tsweeney",categories:["new"],tags:["containers","podman","networking","pod","api","kubernetes","kube","v2","hpc","windows","mac"]},prevItem:{title:"Podman Posts of Interest",permalink:"/blogs/2020/09/18/multi-blog-posts"},nextItem:{title:"Podman remote clients for macOS and Windows",permalink:"/blogs/2020/09/02/new"}},l={authorsImageUrls:[void 0]},p=[],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I've run across a number of posts over the past few weeks concerning Podman and have\nbeen busy getting other work done. So now I have a few moments and thought I'd add some links\nto the posts. Enjoy!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Brian Smith - ",(0,r.kt)("a",{parentName:"li",href:"https://www.redhat.com/sysadmin/rootless-containers-podman"},"Rootless containers using Podman")," - Watch this two-part video series on understanding root inside and outside of containers and how user namespaces work."),(0,r.kt)("li",{parentName:"ul"},"Jack Wallen - ",(0,r.kt)("a",{parentName:"li",href:"https://www.techrepublic.com/article/how-to-install-podman-support-in-cockpit/"},"How to install Podman support in Cockpit")," - Learn how to add Cockpit support to manage images and containers."),(0,r.kt)("li",{parentName:"ul"},"Dan Walsh - ",(0,r.kt)("a",{parentName:"li",href:"https://www.redhat.com/sysadmin/selinux-kata-containers?sc_cid=701f2000000txokAAA&utm_source=bambu&utm_medium=social&utm_campaign=abm"},"SELinux changes for KVM-separated (Kata) containers")," - Understanding SELinux types that improve security in container engines such as Podman and CRI-O."),(0,r.kt)("li",{parentName:"ul"},"Brian Smith - ",(0,r.kt)("a",{parentName:"li",href:"https://www.redhat.com/sysadmin/container-vulnerabilities-openscap"},"Scanning containers for vulnerabilities with OpenSCAP and Podman")," - Containers are no more secure than physical machines. Find out how to scan yours for vulnerabilities."),(0,r.kt)("li",{parentName:"ul"},"Brian Smith - (Video)",(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=AGkM2jGT61Y"},"Managing Containers in Podman with systemd Unit Files")),(0,r.kt)("li",{parentName:"ul"},"Mrivik - (asciinema)",(0,r.kt)("a",{parentName:"li",href:"https://asciinema.org/a/FKU4CaX96MgnlZQ8aTBBMPIv2"},"GIMP working on rootless Podman container"))))}u.isMDXComponent=!0}}]);