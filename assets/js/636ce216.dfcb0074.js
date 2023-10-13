"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[26283],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(t),u=r,h=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return t?a.createElement(h,s(s({ref:n},m),{},{components:t})):a.createElement(h,s({ref:n},m))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},38524:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const o={title:"Podman and NFS",layout:"default",author:"adrianr",categories:["blogs"],tags:["podman","containers","hpc","nfs"]},s=void 0,i={permalink:"/blogs/2019/10/28/podman-with-nfs",source:"@site/blog/2019-10-28-podman-with-nfs.md",title:"Podman and NFS",description:"podman logo",date:"2019-10-28T00:00:00.000Z",formattedDate:"October 28, 2019",tags:[{label:"podman",permalink:"/blogs/tags/podman"},{label:"containers",permalink:"/blogs/tags/containers"},{label:"hpc",permalink:"/blogs/tags/hpc"},{label:"nfs",permalink:"/blogs/tags/nfs"}],readingTime:2.49,hasTruncateMarker:!0,authors:[{name:"adrianr"}],frontMatter:{title:"Podman and NFS",layout:"default",author:"adrianr",categories:["blogs"],tags:["podman","containers","hpc","nfs"]},prevItem:{title:"Podman and NFS",permalink:"/blogs/2019/10/28/new"},nextItem:{title:"PMM Server + podman&#58; Running a Container Without root Privileges",permalink:"/blogs/2019/10/23/Perona-PMM"}},c={authorsImageUrls:[void 0]},l=[{value:"By Adrian Reber GitHub",id:"by-adrian-reber-github",level:2}],m={toc:l},p="wrapper";function d(e){let{components:n,...o}=e;return(0,r.kt)(p,(0,a.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"podman logo",src:t(1382).Z,width:"228",height:"61"})),(0,r.kt)("h1",{id:"podman-and-nfs"},"Podman and NFS"),(0,r.kt)("h2",{id:"by-adrian-reber-github"},"By Adrian Reber ",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/adrianreber"},"GitHub")),(0,r.kt)("p",null,"In my previous ",(0,r.kt)("a",{parentName:"p",href:"https://podman.io/blogs/2019/09/26/podman-in-hpc.html"},"Podman in HPC\nenvironments")," article I\nintroduced how Podman can be used to run containers under the control of Open\nMPI. In this article I want to extend my HPC environment to use a shared NFS\nhome directory."),(0,r.kt)("p",null,"The following examples are running on CentOS 7.7 and are\nconfiguring Podman for rootless usage based on ",(0,r.kt)("a",{parentName:"p",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux_atomic_host/7/html-single/managing_containers/index#running_containers_as_root_or_rootless"},"the official\ndocumentation"),"."),(0,r.kt)("p",null,"The user in my examples is named ",(0,r.kt)("em",{parentName:"p"},"centos"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo sh -c \"echo 'user.max_user_namespaces=28633' > /etc/sysctl.d/userns.conf\"\n$ sudo sysctl -p /etc/sysctl.d/userns.conf\n$ sudo sh -c \"echo 'centos:200000:65536' >> /etc/subuid\"\n$ sudo sh -c \"echo 'centos:200000:65536' >> /etc/subgid\"\n")),(0,r.kt)("p",null,"With this the system should be ready to run rootless containers. As I am focussing\non containers running under Open MPI's control I am using Podman with ",(0,r.kt)("em",{parentName:"p"},"--net=host"),",\nas mentioned in my ",(0,r.kt)("a",{parentName:"p",href:"https://podman.io/blogs/2019/09/26/podman-in-hpc.html"},"previous article"),"."),(0,r.kt)("p",null,"During system setup I am also configuring Podman to be ready to run on a NFS\nbased home directory because, as far as I know, it is not possible for Podman\nto correctly setup the necessary ",(0,r.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man7/user_namespaces.7.html"},"user\nnamespaces")," when\nthe storage backend is running on NFS."),(0,r.kt)("p",null,"The following commands are necessary on my system to tell Podman to use\n",(0,r.kt)("em",{parentName:"p"},"/tmp/centos/containers")," as the storage backend:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ podman info\n$ sed -e "s,graphroot.*$,graphroot = \\"/tmp/centos/containers\\",g" -i .config/containers/storage.conf\n$ rm -f ./.local/share/containers/storage/libpod/bolt_state.db ./.local/share/containers/cache/blob-info-cache-v1.boltdb\n')),(0,r.kt)("p",null,"The first command lets Podman create an initial configuration for the current\nsystem. As the home directory is on a NFS mounted directory it is necessary to\ntell Podman to use a non NFS directory for backend storage\n(",(0,r.kt)("em",{parentName:"p"},"/tmp/centos/containers")," in this example). As this happens during initial\nsystem (or user) configuration and no container has yet been run by Podman I\ncan easily delete Podman's local database which contains reference to the home\ndirectory as the storage backend. With these 3 steps Podman is ready to be used\non a NFS based home directory once the user logs in for the first time."),(0,r.kt)("p",null,"I am now running the same Open MPI based container example as in my\n",(0,r.kt)("a",{parentName:"p",href:"https://podman.io/blogs/2019/09/26/podman-in-hpc.html"},"previous article"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ mpirun --hostfile hostfile \\\n   --mca orte_tmpdir_base /tmp/podman-mpirun \\\n   podman run --env-host \\\n     -v /tmp/podman-mpirun:/tmp/podman-mpirun \\\n     --userns=keep-id \\\n     --net=host --pid=host --ipc=host \\\n     quay.io/adrianreber/mpi-test:30 /home/ring\nRank 2 has cleared MPI_Init\nRank 2 has completed ring\nRank 2 has completed MPI_Barrier\nRank 3 has cleared MPI_Init\nRank 3 has completed ring\nRank 3 has completed MPI_Barrier\nRank 1 has cleared MPI_Init\nRank 1 has completed ring\nRank 1 has completed MPI_Barrier\nRank 0 has cleared MPI_Init\nRank 0 has completed ring\nRank 0 has completed MPI_Barrier\n")),(0,r.kt)("p",null,"The difference to the previous article is that my home directory is now NFS\nbased. Podman will now go to the specified registry (",(0,r.kt)("em",{parentName:"p"},"quay.io"),") to download for\neach host involved in the MPI job the specified container to\n",(0,r.kt)("em",{parentName:"p"},"/tmp/centos/containers"),"."),(0,r.kt)("p",null,"This enables me to use Podman in a even more HPC like environment where shared\nhome directories are very common to share input and output data."))}d.isMDXComponent=!0},1382:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/podman-ce586c2894883ad9c353492b5e1893a8.svg"}}]);