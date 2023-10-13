"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[42798],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=a.createContext({}),d=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(m.Provider,{value:n},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(t),c=o,f=l["".concat(m,".").concat(c)]||l[c]||u[c]||r;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=c;var s={};for(var m in n)hasOwnProperty.call(n,m)&&(s[m]=n[m]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},91231:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(87462),o=(t(67294),t(3905));const r={title:"Podman v4.3.0 Released",layout:"default",author:"mheon",categories:["releases"],tags:["community","open source","podman","hpc","kubernetes"]},i="Podman Release v4.3.0",s={permalink:"/release/2022/10/22/podman-release-v4.3.0",source:"@site/release/2022-10-22-podman-release-v4.3.0.md",title:"Podman v4.3.0 Released",description:"podman logo",date:"2022-10-22T00:00:00.000Z",formattedDate:"October 22, 2022",tags:[{label:"community",permalink:"/release/tags/community"},{label:"open source",permalink:"/release/tags/open-source"},{label:"podman",permalink:"/release/tags/podman"},{label:"hpc",permalink:"/release/tags/hpc"},{label:"kubernetes",permalink:"/release/tags/kubernetes"}],readingTime:2.4,hasTruncateMarker:!1,authors:[{name:"mheon"}],frontMatter:{title:"Podman v4.3.0 Released",layout:"default",author:"mheon",categories:["releases"],tags:["community","open source","podman","hpc","kubernetes"]},nextItem:{title:"Netavark and Aardvark-dns 1.2.0 released",permalink:"/release/2022/09/28/updated-1.2.0"}},m={authorsImageUrls:[void 0]},d=[],p={toc:d},l="wrapper";function u(e){let{components:n,...r}=e;return(0,o.kt)(l,(0,a.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"podman logo",src:t(1382).Z,width:"228",height:"61"})),(0,o.kt)("p",null,"Podman 4.3.0 is now available! There\u2019s a lot to be excited about, including numerous new features, over 30 bug fixes, and many other improvements. A major focus of 4.3 has been on improving Docker compatibility, including the addition of many missing options and aliases to Podman\u2019s command line to further our efforts to make transitioning to Podman a seamless change. Podman\u2019s integration with Kubernetes has also seen many improvements, including improved integration with systemd and support for automatic updates. Read on for more details and these changes and more!"),(0,o.kt)("p",null,"The Podman team made improved compatibility with Docker a priority for Podman 4.3. We audited Podman\u2019s commands against the Docker command line tool to identify missing and unsupported options and then set to work adding and fixing differences. As part of these, we added a dozen new options to various Podman commands, with many of these being missing aliases for existing options. A new set of commands, ",(0,o.kt)("inlineCode",{parentName:"p"},"podman context"),", have been added for compatibility with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker context"),". These are also aliases (for ",(0,o.kt)("inlineCode",{parentName:"p"},"podman system connection")," commands), and will usually be hidden as they are only required for scripts originally written to use Docker. We have also removed a known incompatibility with Docker in Podman\u2019s volume handling. Docker compatibility remains a focus for Podman, and we will continue our efforts to make migrating to Podman effortless."),(0,o.kt)("p",null,"Podman\u2019s Kubernetes integration also saw numerous changes, the biggest of which is the creation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"podman kube")," command. Previously, Kubernetes YAML was generated with ",(0,o.kt)("inlineCode",{parentName:"p"},"podman generate kube")," and ran with ",(0,o.kt)("inlineCode",{parentName:"p"},"podman play kube"),", but users found this confusing - it wasn\u2019t immediately obvious from ",(0,o.kt)("inlineCode",{parentName:"p"},"podman help")," that the commands existed. By moving the commands to ",(0,o.kt)("inlineCode",{parentName:"p"},"podman kube generate")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"podman kube play")," and introducing a new command to tear down pods (",(0,o.kt)("inlineCode",{parentName:"p"},"podman kube down"),"), we consolidated all Kubernetes commands in one easy-to-find place. The ",(0,o.kt)("inlineCode",{parentName:"p"},"podman generate kube"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"podman play kube")," commands will continue to work, but the new ",(0,o.kt)("inlineCode",{parentName:"p"},"podman kube")," commands will be preferred."),(0,o.kt)("p",null,"Of course, we didn\u2019t stop at just renaming commands. We\u2019ve made a number of further additions to ",(0,o.kt)("inlineCode",{parentName:"p"},"podman kube play"),", most notably improved systemd integration. In Podman 4.2, we added ",(0,o.kt)("inlineCode",{parentName:"p"},"podman-kube@.service")," to allow pods created with ",(0,o.kt)("inlineCode",{parentName:"p"},"podman kube play")," to be managed with systemd. With Podman 4.3, we\u2019ve improved this in two significant ways. First, pods using ",(0,o.kt)("inlineCode",{parentName:"p"},"podman-kube@.service")," can now use sdnotify to verify to systemd that they have started. This laid the groundwork for the following major change: Pods from ",(0,o.kt)("inlineCode",{parentName:"p"},"podman-kube@.service")," now support Podman\u2019s auto-updated mechanism, enabled using an annotation (",(0,o.kt)("inlineCode",{parentName:"p"},"io.containers.auto-update"),"). Furthermore, we made several improvements to ",(0,o.kt)("inlineCode",{parentName:"p"},"podman kube play"),", including support for ",(0,o.kt)("inlineCode",{parentName:"p"},"emptyDir")," volumes, support for user namespaces via ",(0,o.kt)("inlineCode",{parentName:"p"},"HostUsers"),", and support for binary data in ConfigMaps."),(0,o.kt)("p",null,"These are just a few of the over 30 features and bug fixes included in Podman 4.3.0. Be sure to check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/releases/tag/v4.3.0"},"release notes")," for more details!"))}u.isMDXComponent=!0},1382:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);