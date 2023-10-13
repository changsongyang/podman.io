"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[64891],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return t?o.createElement(h,i(i({ref:n},u),{},{components:t})):o.createElement(h,i({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},90127:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(87462),a=(t(67294),t(3905));const r={title:"Podman Alpha version 0.6.4 Release Announcement",layout:"default",author:"bbaude",categories:["releases"],tags:["community","open source","podman"]},i=void 0,l={permalink:"/blogs/2018/07/02/podman-alpha-v0.6.4",source:"@site/blog/2018-07-02-podman-alpha-v0.6.4.md",title:"Podman Alpha version 0.6.4 Release Announcement",description:"podman logo",date:"2018-07-02T00:00:00.000Z",formattedDate:"July 2, 2018",tags:[{label:"community",permalink:"/blogs/tags/community"},{label:"open source",permalink:"/blogs/tags/open-source"},{label:"podman",permalink:"/blogs/tags/podman"}],readingTime:2.265,hasTruncateMarker:!0,authors:[{name:"bbaude"}],frontMatter:{title:"Podman Alpha version 0.6.4 Release Announcement",layout:"default",author:"bbaude",categories:["releases"],tags:["community","open source","podman"]},prevItem:{title:"Podman Alpha version 0.7.1 Release Announcement",permalink:"/blogs/2018/07/09/podman-alpha-v0.7.1"},nextItem:{title:"Podman Alpha version 0.6.1 Release Announcement",permalink:"/blogs/2018/06/04/podman-alpha-v0.6.1"}},s={authorsImageUrls:[void 0]},c=[{value:"Notable features include:",id:"notable-features-include",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...r}=e;return(0,a.kt)(p,(0,o.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"podman logo",src:t(1382).Z,width:"228",height:"61"})),(0,a.kt)("h1",{id:"podman-release-064"},"Podman release 0.6.4"),(0,a.kt)("p",null,"This afternoon we were able to overcome some last minute bugs and release a new Podman. The packages are building in Fedora and will work their way through Fedora\u2019s bodhi system. For giggles, I looked at the number of individual contributors this week and was glad to see the number at 10."),(0,a.kt)("p",null,"Mainly bugfixes this week, one big one was that we do a better job cleaning up containers that run in the back ground."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"podman container cleanup")," was added to cleanup mountpoint, cgroups and network configuration when containers exit. When a container is run in background mode (-d), the podman command exits, but ",(0,a.kt)("strong",{parentName:"p"},"conmon")," continues to run and monitor the container, when the container exits, conmon executes podman container cleanup to cleanup the container."),(0,a.kt)("p",null,"There were a number of bug fixes and a lot of vendoring new code\u200a\u2014\u200aGolang speak for updating the code we depend on from other projects. Interesting things are in store for podman in the upcoming weeks. Stay tuned!"),(0,a.kt)("p",null,"I missed writing this blog the last couple of weeks, and wanted to point out a huge new feature from the ",(0,a.kt)("strong",{parentName:"p"},"buildah project"),". ",(0,a.kt)("strong",{parentName:"p"},"podman build")," now supports layering. As you may know podman build by default only adds one layer when processing a Dockerfile. This is different the ",(0,a.kt)("strong",{parentName:"p"},"docker build"),". Docker defaults to layering each line in the Dockerfile, which makes the creation of an application easier, since docker build jumps to the first line changed in the Dockerfile since the previous build. Podman build on the other hand starts at the beginning, which works better in using a Dockerfile in a build system. With the introducion of the\u200a\u2014\u200alayers flag, you can now get the same behaviour in podman build that you have in docker build, incremental changes to the Dockerfile will start the build at the change point rather then in the beginning. There is even a environment variable BUILDAH_LAYERS which can be set to default to the layers method."),(0,a.kt)("h2",{id:"notable-features-include"},"Notable features include:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"* Continued work on podman remote client. A mock up of a podman remote client went into the contrib/ section of our repository. This is not ready for anyone but Jhon Honce as the primary contributor to the python library code.\n* Continued work on running podman without requiring you to be root. Giuseppe Scrivano made a bunch of commits related to rootless containers.\n* added podman-image and podman-container man page links\n* fixed a fatal error where when a container disappeared during podman ps.\n* added an authfile option to podman search to deal with private registries.\n* fixed a bug related to container startup and attached mode.\n* building podman with varlink support is now optionional.\n")))}d.isMDXComponent=!0},1382:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);