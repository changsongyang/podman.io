"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[19480],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),g=o,u=m["".concat(s,".").concat(g)]||m[g]||d[g]||a;return n?r.createElement(u,p(p({ref:t},c),{},{components:n})):r.createElement(u,p({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},35074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"Moving from docker-compose to Podman pods",layout:"default",author:"tsweeney",categories:["new"],tags:["containers","podman","networking","pod","api","rest","rest-api","v2","hpc"]},p=void 0,i={permalink:"/blog/2020/08/11/new",source:"@site/blog/2020-08-11-new.md",title:"Moving from docker-compose to Podman pods",description:"Nathan Lager just landed a blog post on the Red Hat Enable Sysadmin site Moving from docker-compose to Podman pods. In the post, Nathan talks about ins and outs of the migration process.",date:"2020-08-11T00:00:00.000Z",formattedDate:"August 11, 2020",tags:[{label:"containers",permalink:"/blog/tags/containers"},{label:"podman",permalink:"/blog/tags/podman"},{label:"networking",permalink:"/blog/tags/networking"},{label:"pod",permalink:"/blog/tags/pod"},{label:"api",permalink:"/blog/tags/api"},{label:"rest",permalink:"/blog/tags/rest"},{label:"rest-api",permalink:"/blog/tags/rest-api"},{label:"v2",permalink:"/blog/tags/v-2"},{label:"hpc",permalink:"/blog/tags/hpc"}],readingTime:.165,hasTruncateMarker:!1,authors:[{name:"tsweeney"}],frontMatter:{title:"Moving from docker-compose to Podman pods",layout:"default",author:"tsweeney",categories:["new"],tags:["containers","podman","networking","pod","api","rest","rest-api","v2","hpc"]},prevItem:{title:"Moving from docker-compose to Podman pods",permalink:"/blog/2020/08/11/migrate-from-docker-compose"},nextItem:{title:"Podman Go bindings",permalink:"/blog/2020/08/10/new"}},s={authorsImageUrls:[void 0]},l=[],c={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/gangrif"},"Nathan Lager")," just landed a blog post on the ",(0,o.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/"},"Red Hat Enable Sysadmin")," site ",(0,o.kt)("a",{parentName:"p",href:"https://www.redhat.com/sysadmin/compose-podman-pods"},"Moving from docker-compose to Podman pods"),". In the post, Nathan talks about ins and outs of the migration process."))}d.isMDXComponent=!0}}]);