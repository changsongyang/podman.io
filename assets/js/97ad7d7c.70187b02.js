"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[39103],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=a,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return t?o.createElement(f,i(i({ref:n},c),{},{components:t})):o.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},42802:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=t(87462),a=(t(67294),t(3905));const r={title:"Podman Alpha version 0.7.2 Release Announcement",layout:"default",author:"bbaude",categories:["releases"],tags:["community","open source","podman"]},i=void 0,l={permalink:"/blog/2018/07/16/podman-alpha-v0.7.2",source:"@site/blog/2018-07-16-podman-alpha-v0.7.2.md",title:"Podman Alpha version 0.7.2 Release Announcement",description:"podman logo",date:"2018-07-16T00:00:00.000Z",formattedDate:"July 16, 2018",tags:[{label:"community",permalink:"/blog/tags/community"},{label:"open source",permalink:"/blog/tags/open-source"},{label:"podman",permalink:"/blog/tags/podman"}],readingTime:1.885,hasTruncateMarker:!0,authors:[{name:"bbaude"}],frontMatter:{title:"Podman Alpha version 0.7.2 Release Announcement",layout:"default",author:"bbaude",categories:["releases"],tags:["community","open source","podman"]},prevItem:{title:"Podman Alpha version 0.8.1 Release Announcement",permalink:"/blog/2018/08/08/podman-alpha-v0.8.1"},nextItem:{title:"Podman Alpha version 0.7.1 Release Announcement",permalink:"/blog/2018/07/09/podman-alpha-v0.7.1"}},s={authorsImageUrls:[void 0]},p=[],c={toc:p},d="wrapper";function m(e){let{components:n,...r}=e;return(0,a.kt)(d,(0,o.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"podman logo",src:t(1382).Z,width:"228",height:"61"})),(0,a.kt)("h1",{id:"podman-release-072"},"Podman release 0.7.2"),(0,a.kt)("p",null,"As most weeks are, this was fast and furious. You will see hand fulls of significant features below that have been added to podman this week. All of it is awesome work from the core team and its contributors. There were also two interesting features that users will be interested in: the ability to create a container with multiple networks and the podman remote client."),(0,a.kt)("p",null,"We have heard from users that they wish to be able to create containers with multiple networks. This can now be done with a combination of CNI configurations and podman. The easiest approach is to take the default podman configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/cni/net.d/87-podman-bridge.conflist")," and duplicate it. Within the file, change the:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"* network name\n* bridge device (cni0 -> cni1)\n* subnet\n")),(0,a.kt)("p",null,"Then run podman like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ podman run -it --network=podman,podman2 fedora:28 /bin/bash\n")),(0,a.kt)("p",null,"Jhon Honce and I have also been working on a remote client for podman, called pypodman. It is written in Python and allows users to have a podman-like front-end that accesses an actual podman backend on another node. It relies heavily on ssh and we recommend the use of ssh keys to simplify things."),(0,a.kt)("p",null,"Our vision is this could eventually become useful for those using Macs or Windows as a development environment. Look for more official blogs and write-ups specifically on this."),(0,a.kt)("p",null,"This is also the release where we start introducing pod concepts. We now have minimal support for pods. Try ",(0,a.kt)("inlineCode",{parentName:"p"},"podman pod\u200a\u2014\u200ahelp")," for further information."),(0,a.kt)("h1",{id:"other-significant-features-include-but-are-not-limited-to"},"Other significant features include but are not limited to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"* More unit tests for the varlink python client\n* Correction behavior for podman stats\n* Add\u200a\u2014\u200avolumes-from to podman run and create\n* Fix a small regression in our opt handling\n* Add a default AppArmor profile\n* Fix path for rootless containers\n* Varlink API fixes in how we start start and attach to containers\n* Podman ps now reports containers as \u2018dead\u2019 instead of \u2018unknown\u2019\n* Correct behavior in podman rmi on how to handle parent image deletions\n* Logged output now goes to syslog as well as STDERR\n* When pulling an image by SHA1, we now set the name and tag correctly.\n* Better recording of exit codes for container exits\n")))}m.isMDXComponent=!0},1382:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);