"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[37184],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return n?o.createElement(f,l(l({ref:t},u),{},{components:n})):o.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"Podman Alpha version 0.8.1 Release Announcement",layout:"default",author:"bbaude",categories:["releases"],tags:["community","open source","podman"]},l=void 0,i={permalink:"/blogs/2018/08/08/podman-alpha-v0.8.1",source:"@site/blog/2018-08-08-podman-alpha-v0.8.1.md",title:"Podman Alpha version 0.8.1 Release Announcement",description:"podman logo",date:"2018-08-08T00:00:00.000Z",formattedDate:"August 8, 2018",tags:[{label:"community",permalink:"/blogs/tags/community"},{label:"open source",permalink:"/blogs/tags/open-source"},{label:"podman",permalink:"/blogs/tags/podman"}],readingTime:.725,hasTruncateMarker:!0,authors:[{name:"bbaude"}],frontMatter:{title:"Podman Alpha version 0.8.1 Release Announcement",layout:"default",author:"bbaude",categories:["releases"],tags:["community","open source","podman"]},prevItem:{title:"Python3 support for Podman",permalink:"/blogs/2018/08/15/python-support-for-podman"},nextItem:{title:"Podman Alpha version 0.7.2 Release Announcement",permalink:"/blogs/2018/07/16/podman-alpha-v0.7.2"}},s={authorsImageUrls:[void 0]},p=[{value:"Other notable benefits of this release are:",id:"other-notable-benefits-of-this-release-are",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,r.kt)("h1",{id:"podman-release-081"},"Podman release 0.8.1"),(0,r.kt)("p",null,"Our latest podman release turned out to be a lot of internal plumbing. We had more than 50 commits but most were tweaks that most users would not notice. So I don\u2019t have a singular, hot feature to point you at."),(0,r.kt)("p",null,"That said, if you haven\u2019t tried the python client to for podman, I recommend you do. It allows you to interact with a remote podman instance via SSH."),(0,r.kt)("h2",{id:"other-notable-benefits-of-this-release-are"},"Other notable benefits of this release are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* Fixes to rootless containers including network support using slirp4netns written by Akihiro Suda\n* Adjustments to how images are pulled and their metadata\n* podman build now supports different isolation mechanims, to better run within a confined container.\n* Changes to our integration tests to speed them up\n* podman load now supports xz compression\n* Tidy up man pages\n")))}m.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);