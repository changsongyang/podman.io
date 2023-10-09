"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[22502],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,b=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return n?a.createElement(b,l(l({ref:t},m),{},{components:n})):a.createElement(b,l({ref:t},m))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Podman v4.0.2 is available in Homebrew",layout:"default",author:"baude",categories:["blogs"],tags:["containers","podman","macOS"]},l=void 0,i={permalink:"/blog/2022/03/15/podman4.0.2brew",source:"@site/blog/2022-03-15-podman4.0.2brew.md",title:"Podman v4.0.2 is available in Homebrew",description:"podman logo",date:"2022-03-15T00:00:00.000Z",formattedDate:"March 15, 2022",tags:[{label:"containers",permalink:"/blog/tags/containers"},{label:"podman",permalink:"/blog/tags/podman"},{label:"macOS",permalink:"/blog/tags/mac-os"}],readingTime:.5,hasTruncateMarker:!1,authors:[{name:"baude"}],frontMatter:{title:"Podman v4.0.2 is available in Homebrew",layout:"default",author:"baude",categories:["blogs"],tags:["containers","podman","macOS"]},prevItem:{title:"Podman 4.0.2 is available on Homebrew",permalink:"/blog/2022/03/15/new"},nextItem:{title:"Podman 4 is not in Fedora 35",permalink:"/blog/2022/03/06/new"}},s={authorsImageUrls:[void 0]},c=[],m={toc:c},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,r.kt)("h1",{id:"podman-v402-is-available-in-homebrew"},"Podman v4.0.2 is available in Homebrew"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),", also known as ",(0,r.kt)("inlineCode",{parentName:"p"},"brew"),", now has the Podman v4.0.2 available. Updating should be trivial\nbut please make sure that Qemu is also upgraded alongside Podman. One cool feature that the community helped us\ndeliver is the ability to mount volumes from MacOS into the virtual machine. We decided to backport some code to\nmake it available to users more quickly. As such, it is possible if not likely that there will be more\nchanges around volume mounts in subsequent Podman releases (i.e. default mounts, technology used to make the mount)."))}u.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);