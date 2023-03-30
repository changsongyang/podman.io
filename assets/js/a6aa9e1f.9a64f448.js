"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[89],{3269:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var l=a(7294),r=a(6010),n=a(2263),m=a(1944),c=a(5281),s=a(9058),i=a(5999),o=a(2244);function d(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,i.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(o.Z,{permalink:a,title:l.createElement(i.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),r&&l.createElement(o.Z,{permalink:r,title:l.createElement(i.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var u=a(197),g=a(9460),x=a(756);function p(e){let{items:t,component:a=x.Z}=e;return l.createElement(l.Fragment,null,t.map((e=>{let{content:t}=e;return l.createElement(g.n,{key:t.metadata.permalink,content:t},l.createElement(a,null,l.createElement(t,null)))})))}function E(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,n.Z)(),{blogDescription:r,blogTitle:c,permalink:s}=t,i="/"===s?a:c;return l.createElement(l.Fragment,null,l.createElement(m.d,{title:i,description:r}),l.createElement(u.Z,{tag:"blog_posts_list"}))}function b(e){const{metadata:t,items:a,sidebar:r}=e;return l.createElement(s.Z,{sidebar:r},l.createElement(p,{items:a}),l.createElement(d,{metadata:t}))}function f(e){return l.createElement(m.FG,{className:(0,r.Z)(c.k.wrapper.blogPages,c.k.page.blogListPage)},l.createElement(E,e),l.createElement(b,e))}},5686:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7294),r=a(8480),n=a(1743);function m(e){const{title:t,subtitle:a,details:r}=e;return l.createElement("div",{className:"mx-2 mt-4"},l.createElement("h3",{className:"mb-3 font-bold text-gray-700 dark:text-gray-50"},t),l.createElement(n.D,{children:a,className:"text-gray-700"}),l.createElement(n.D,{children:r,className:"text-gray-700"}))}function c(e){const{text:t}=e;return l.createElement("div",{className:"my-6 mx-2 lg:my-8"},l.createElement("p",{className:"max-w-sm text-gray-700 dark:text-gray-100"},t))}function s(e){let{data:t=[{text:"card text"}]}=e;return l.createElement("div",{className:" mx-2 mb-4 flex justify-center gap-2 lg:mb-8"},t.map(((e,t)=>l.createElement("div",{key:t},l.createElement(r.Z,e)))))}function i(e){return l.createElement("article",{className:"m-4 flex flex-col justify-between rounded-lg bg-gray-50 p-4 shadow-xl dark:bg-gray-700 dark:shadow-none lg:m-2"},l.createElement(m,e),l.createElement(c,e),l.createElement(s,e))}},4966:(e,t,a)=>{a.d(t,{Z:()=>g});var l=a(7294);const r=a.p+"assets/images/podman-ui-679w-592h-c0d5178b2516f917e2c764adb219b9af.webp";var n=a(1954),m=a(8480);function c(e){let{text:t,url:a,textColor:r="text-blue-700"}=e;return l.createElement("a",{href:a,className:`${r} cursor-pointer  underline underline-offset-4 transition duration-150 ease-in hover:text-purple-700 dark:text-blue-900`},t)}var s=a(6455);const i=e=>{let{grid:t,display:a,layout:r,title:n,subtitle:m}=e;return l.createElement("div",{className:`${t} ${a} ${r} container`},l.createElement("h1",{className:"mb-4 text-white dark:text-gray-50 lg:mb-8"},n),l.createElement("p",{className:"max-w-sm text-white dark:text-gray-50 lg:max-w-prose"},m),l.createElement(o,{layout:"flex max-w-sm gap-8 my-3"}),l.createElement("p",{className:"flex gap-4 text-white dark:text-gray-100"},l.createElement("span",null,"Latest stable ",l.createElement(c,{text:"v4.3.0",textColor:"text-white dark:text-gray-100"})),l.createElement("span",null,"-"),l.createElement(c,{text:"Apache License 2.0",textColor:"text-white dark:text-gray-100"})))},o=e=>{let{grid:t,display:a,layout:r}=e;return l.createElement("div",{className:`${t} ${a} ${r}`},l.createElement(m.Z,{text:"Get Started"}),l.createElement(m.Z,{text:"Downloads",bgColor:"bg-white dark:bg-transparent dark:outline",textColor:"text-purple-700"}))},d=e=>{let{grid:t,display:a,layout:r}=e;return l.createElement("div",{className:` ${t} ${a} ${r} container`},l.createElement("h3",{className:" text-base font-medium text-white dark:text-gray-100"},"Supported platforms"),l.createElement("ul",{className:"flex gap-4"},l.createElement("li",null,l.createElement(n.JO,{icon:"fa6-brands:redhat",className:"text-3xl text-white dark:text-gray-100"})),l.createElement("li",null,l.createElement(n.JO,{icon:"fa6-brands:apple",className:"text-3xl text-white dark:text-gray-100"})),l.createElement("li",null,l.createElement(n.JO,{icon:"fa6-brands:microsoft",className:"text-3xl text-white dark:text-gray-100"})),l.createElement("li",null,l.createElement(n.JO,{icon:"fa6-brands:linux",className:"text-3xl text-white dark:text-gray-100"}))))},u=e=>{let{grid:t,display:a,layout:n}=e;return l.createElement("div",{className:`${t} ${a} ${n}`},l.createElement("img",{src:r,alt:"Screenshots of podman ui",className:"object-cover"}))};function g(e){let{title:t,subtitle:a}=e;return l.createElement("header",{className:"bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-700 dark:to-blue-900"},l.createElement("div",{className:"grid md:grid-cols-2 md:gap-12"},l.createElement(i,{title:t,subtitle:a,grid:"row-span-2 place-self-center",layout:"mt-12 mb-4 md:ml-10 xl:ml-24 md:mb-0"}),l.createElement("div",{className:"flex flex-col justify-end self-end md:col-start-2 md:row-span-3 lg:row-span-2 lg:row-start-2"},l.createElement(d,{layout:"md:max-w-lg 2xl:pr-8 lg:max-w-full mb-12 md:mb-0",display:"flex flex-col items-end"}),l.createElement(u,{display:"hidden md:flex justify-end lg:w-[510px] 2xl:w-full",layout:"-mb-24 lg:mb-12"})),l.createElement(s.Z,{grid:"col-span-full lg:row-start-3",layout:""})))}},7951:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7242),r=a(7294);const n=function(e){let{children:t}=e;return r.createElement("section",{className:"py-8 lg:py-12"},t)};var m=a(4966),c=a(5686);const s={...l.Z,main:function(e){let{children:t}=e;return r.createElement("main",{className:"mx-auto h-screen"},t)},section:n,cardGrid:function(e){let{children:t}=e;return r.createElement("section",{className:"my-4 flex justify-center gap-8 xl:gap-12"},t)},card:c.Z,hero:m.Z}}}]);