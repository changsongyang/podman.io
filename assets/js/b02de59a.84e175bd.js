"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[24464],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,g=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Podman API v1.0 Deprecation and Removal Notice",layout:"default",author:"tsweeney",categories:["blogs"],tags:["podman","containers","v2","github","varlink","rest-api"]},i=void 0,l={permalink:"/blog/2020/08/01/deprecate-and-remove-varlink-notice",source:"@site/blog/2020-08-01-deprecate-and-remove-varlink-notice.md",title:"Podman API v1.0 Deprecation and Removal Notice",description:"podman logo",date:"2020-08-01T00:00:00.000Z",formattedDate:"August 1, 2020",tags:[{label:"podman",permalink:"/blog/tags/podman"},{label:"containers",permalink:"/blog/tags/containers"},{label:"v2",permalink:"/blog/tags/v-2"},{label:"github",permalink:"/blog/tags/github"},{label:"varlink",permalink:"/blog/tags/varlink"},{label:"rest-api",permalink:"/blog/tags/rest-api"}],readingTime:2.705,hasTruncateMarker:!0,authors:[{name:"tsweeney"}],frontMatter:{title:"Podman API v1.0 Deprecation and Removal Notice",layout:"default",author:"tsweeney",categories:["blogs"],tags:["podman","containers","v2","github","varlink","rest-api"]},prevItem:{title:"Improved systemd integration with Podman 2.0",permalink:"/blog/2020/08/02/systemd-integration-v2"},nextItem:{title:"Podman API v1.0 Deprecation and Removal Notice",permalink:"/blog/2020/08/01/new"}},c={authorsImageUrls:[void 0]},p=[{value:"By Tom Sweeney GitHub",id:"by-tom-sweeney-github",level:2}],s={toc:p},m="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,a.kt)("h1",{id:"podman-api-v10-deprecation-and-removal-notice"},"Podman API v1.0 Deprecation and Removal Notice"),(0,a.kt)("h2",{id:"by-tom-sweeney-github"},"By Tom Sweeney ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/TomSweeneyRedhat"},"GitHub")),(0,a.kt)("p",null,"The Podman API v1.0 relied on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/varlink/libvarlink"},"varlink library")," to handle the underlying client/server calls from the Podman client to the host where the Podman service was running. About one year ago, the Podman team was notified that the focus on the varlink library was being greatly reduced and there would be no further development and little support for it from the varlink library team. This led the Podman team to investigate the use of other client/server technologies and it was decided to develop a RESTful API for Podman using the native Go libraries."))}d.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);