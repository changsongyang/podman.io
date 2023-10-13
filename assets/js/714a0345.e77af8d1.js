"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[35119],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,y=d["".concat(l,".").concat(u)]||d[u]||m[u]||s;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={title:"Using systemd to control the startup of Podman containers",layout:"default",author:"emacchi",categories:["blogs"],tags:["podman","containers","systemd"]},o=void 0,i={permalink:"/blogs/2018/09/13/systemd",source:"@site/blog/2018-09-13-systemd.md",title:"Using systemd to control the startup of Podman containers",description:"podman logo",date:"2018-09-13T00:00:00.000Z",formattedDate:"September 13, 2018",tags:[{label:"podman",permalink:"/blogs/tags/podman"},{label:"containers",permalink:"/blogs/tags/containers"},{label:"systemd",permalink:"/blogs/tags/systemd"}],readingTime:1.795,hasTruncateMarker:!0,authors:[{name:"emacchi"}],frontMatter:{title:"Using systemd to control the startup of Podman containers",layout:"default",author:"emacchi",categories:["blogs"],tags:["podman","containers","systemd"]},prevItem:{title:"Cool thing&#58; Pulling content directly from the Docker Daemon...",permalink:"/blogs/2018/09/25/pulling-images-from-docker"},nextItem:{title:"What's NEW!",permalink:"/blogs/2018/09/10/welcome"}},l={authorsImageUrls:[void 0]},c=[{value:"By Emilien Macchi GitHub",id:"by-emilien-macchi-github",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...s}=e;return(0,a.kt)(d,(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"podman logo",src:n(1382).Z,width:"228",height:"61"})),(0,a.kt)("h1",{id:"using-systemd-to-control-the-startup-of-podman-containers"},"Using systemd to control the startup of Podman containers"),(0,a.kt)("h2",{id:"by-emilien-macchi-github"},"By Emilien Macchi ",(0,a.kt)("a",{parentName:"h2",href:"https://github.com/EmilienM"},"GitHub")),(0,a.kt)("p",null,"Podman wasn't designed to manage containers startup order, dependency\nchecking or failed container recovery.\nIn fact, this job can be done by external tools and this blog post describes\nhow we can use the systemd initialization service to work with Podman\ncontainers."),(0,a.kt)("p",null,"Thanks to systemd, containers can be managed in the same way as other\nservices on a Linux system."),(0,a.kt)("p",null,"By setting up a systemd unit file on the host, we can have the host\nautomatically start, stop, check the status, and otherwise manage a container\nas a regular systemd service."),(0,a.kt)("p",null,"Let's prepare the container (example with Redis):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"podman pull docker.io/redis\nsudo podman run -d --name redis -p 6379:6379 redis\n")),(0,a.kt)("p",null,"Check that the container is actually running with ",(0,a.kt)("inlineCode",{parentName:"p"},"podman ps"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CONTAINER ID   IMAGE                            COMMAND                  CREATED          STATUS             PORTS                    NAMES\n411a6c6be7d8   docker.io/library/redis:latest   docker-entrypoint.s...   10 minutes ago   Up 5 minutes ago   0.0.0.0:6379->6379/tcp   redis\n")),(0,a.kt)("p",null,"Now, let's create the systemd unit file in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/redis.service"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[Unit]\nDescription=Redis Podman container\nWants=syslog.service\n[Service]\nRestart=always\nExecStart=/usr/bin/podman start -a redis\nExecStop=/usr/bin/podman stop -t 10 redis\n[Install]\nWantedBy=multi-user.target\n")),(0,a.kt)("p",null,"Enable and start the systemd service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl enable redis.service\nsudo systemctl start redis.service\n")),(0,a.kt)("p",null,"The container is running redis-server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sudo podman top redis\nUSER    PID   PPID   %CPU    ELAPSED            TTY   TIME   COMMAND\nredis   1     0      0.000   15m14.490268713s   ?     0s     redis-server *:6379\n")),(0,a.kt)("p",null,"Check that the service is seen as active in systemd with\n",(0,a.kt)("inlineCode",{parentName:"p"},"sudo systemctl status redis"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"redis.service - Redis Podman container\n   Loaded: loaded (/etc/systemd/system/redis.service; enabled; vendor preset: disabled)\n   Active: active (running) since Thu 2018-09-13 12:24:00 PDT; 1s ago\n Main PID: 1520 (podman)\n    Tasks: 8 (limit: 4708)\n   Memory: 7.8M\n   CGroup: /system.slice/redis.service\n           \u2514\u25001520 /usr/local/bin/podman start -a redis\n\nSep 13 12:24:00 fedora28.localdomain systemd[1]: Started Redis Podman container.\n")),(0,a.kt)("p",null,"Note that if you try to run ",(0,a.kt)("inlineCode",{parentName:"p"},"podman stop redis"),', the container will be\nrestarted by systemd because of to the "Restart=always" policy.\nThe proper way to stop the container is to run ',(0,a.kt)("inlineCode",{parentName:"p"},"sudo service redis stop"),"."),(0,a.kt)("p",null,"An alternative to systemd for controlling containers lifecycle is to use\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/cri-o"},"CRI-O")," but this would be for\nanother blog post :-)."))}m.isMDXComponent=!0},1382:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);