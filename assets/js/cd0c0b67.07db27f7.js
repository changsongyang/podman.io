"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[97635],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,g=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},74135:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const o={title:"Podman v1.1.2 Released",layout:"default",author:"tsweeney",categories:["releases"],tags:["community","open source","podman"]},l="Podman Release 1.1.2",i={permalink:"/release/2019/03/05/podman-release-v1.1.2",source:"@site/release/2019-03-05-podman-release-v1.1.2.md",title:"Podman v1.1.2 Released",description:"podman logo",date:"2019-03-05T00:00:00.000Z",formattedDate:"March 5, 2019",tags:[{label:"community",permalink:"/release/tags/community"},{label:"open source",permalink:"/release/tags/open-source"},{label:"podman",permalink:"/release/tags/podman"}],readingTime:.845,hasTruncateMarker:!1,authors:[{name:"tsweeney"}],frontMatter:{title:"Podman v1.1.2 Released",layout:"default",author:"tsweeney",categories:["releases"],tags:["community","open source","podman"]},prevItem:{title:"Podman v1.2.0 Released",permalink:"/release/2019/04/10/podman-release-v1.2.0"},nextItem:{title:"Podman v1.1.1 Released",permalink:"/release/2019/03/01/podman-release-v1.1.1"}},s={authorsImageUrls:[void 0]},m=[{value:"Podman has gone 1.1.2!",id:"podman-has-gone-112",level:2},{value:"Changes",id:"changes",level:2},{value:"Bugfixes",id:"bugfixes",level:3},{value:"Misc",id:"misc",level:3}],p={toc:m},u="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"podman logo",src:a(1382).Z,width:"228",height:"61"})),(0,r.kt)("h2",{id:"podman-has-gone-112"},"Podman has gone 1.1.2!"),(0,r.kt)("p",null,"After releasing Podman v1.1.1 a number of bug fixes\nfocusing on command line options and parsing were added.\nAll the details follow!"),(0,r.kt)("h2",{id:"changes"},"Changes"),(0,r.kt)("h3",{id:"bugfixes"},"Bugfixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the podman image list, podman image rm, and podman container list had broken global storage options"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the --label option to podman create and podman run was missing the -l alias"),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where running Podman with the --config flag would not set an appropriate default value for tmp_dir ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/containers/podman/issues/2408"},"#2408")),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the podman logs command with the --timestamps flag produced unreadable output ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/containers/podman/issues/2500"},"#2500")),(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where the podman cp command would automatically extract .tar files copied into the container ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/containers/podman/issues/2509"},"#2509"))),(0,r.kt)("h3",{id:"misc"},"Misc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The podman container stop command is now usable with the Podman remote client")),(0,r.kt)("p",null,"As always, please visit our release notes on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/blob/main/RELEASE_NOTES.md"},"GitHub")," to see the full changelog."),(0,r.kt)("p",null,"You can find instructions for installing Podman ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/blob/main/install.md"},"here")))}c.isMDXComponent=!0},1382:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);