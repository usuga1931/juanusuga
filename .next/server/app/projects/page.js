(()=>{var e={};e.id=895,e.ids=[895],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},7167:(e,s,a)=>{"use strict";a.r(s),a.d(s,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>j,pages:()=>o,routeModule:()=>m,tree:()=>d}),a(6204),a(7317),a(1888);var r=a(3191),i=a(8716),t=a(7922),n=a.n(t),l=a(5231),c={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>l[e]);a.d(s,c);let d=["",{children:["projects",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,6204)),"/Users/juansebastianusugaagudelo/Documents/juanusuga/app/projects/page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,6599))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,7317)),"/Users/juansebastianusugaagudelo/Documents/juanusuga/app/layout.js"],"not-found":[()=>Promise.resolve().then(a.bind(a,1888)),"/Users/juansebastianusugaagudelo/Documents/juanusuga/app/not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,6599))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],o=["/Users/juansebastianusugaagudelo/Documents/juanusuga/app/projects/page.js"],j="/projects/page",p={require:a,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/projects/page",pathname:"/projects",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9317:(e,s,a)=>{Promise.resolve().then(a.bind(a,7669)),Promise.resolve().then(a.bind(a,445)),Promise.resolve().then(a.t.bind(a,9404,23)),Promise.resolve().then(a.bind(a,933)),Promise.resolve().then(a.bind(a,6618))},7669:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>c});var r=a(326),i=a(7520),t=a.n(i),n=a(434),l=a(7577);let c=()=>{let e=(0,l.useRef)(),[s,a]=(0,l.useState)("*");(0,l.useEffect)(()=>{setTimeout(()=>{e.current=new(t())(".project-masonry-active",{itemSelector:".item",percentPosition:!0,masonry:{columnWidth:".item"},animationOptions:{duration:750,easing:"linear",queue:!1}})},500)},[]),(0,l.useEffect)(()=>{e.current&&("*"===s?e.current.arrange({filter:"*"}):e.current.arrange({filter:`.${s}`}))},[s]);let i=e=>()=>{a(e)},c=e=>e===s?"current":"";return(0,r.jsxs)(l.Fragment,{children:[(0,r.jsxs)("ul",{className:"project-filter filter-btns-one justify-content-center pb-35 wow fadeInUp delay-0-2s",children:[r.jsx("li",{className:`c-pointer ${c("*")}`,onClick:i("*"),children:"Show All"}),r.jsx("li",{className:`c-pointer ${c("design")}`,onClick:i("design"),children:"Design"}),r.jsx("li",{className:`c-pointer ${c("branding")}`,onClick:i("branding"),children:"Branding"}),r.jsx("li",{className:`c-pointer ${c("marketing")}`,onClick:i("marketing"),children:"Marketing"}),r.jsx("li",{className:`c-pointer ${c("development")}`,onClick:i("development"),children:"Development"}),r.jsx("li",{className:`c-pointer ${c("apps")}`,onClick:i("apps"),children:"Mobile Apps"}),r.jsx("li",{className:`c-pointer ${c("graphics")}`,onClick:i("graphics"),children:"Graphics"})]}),(0,r.jsxs)("div",{className:"row project-masonry-active",children:[r.jsx("div",{className:"col-lg-6 item branding development",children:(0,r.jsxs)("div",{className:"project-item style-two wow fadeInUp delay-0-2s",children:[(0,r.jsxs)("div",{className:"project-image",children:[r.jsx("img",{src:"assets/images/projects/project1.jpg",alt:"Project"}),r.jsx(n.default,{legacyBehavior:!0,href:"/project-details",children:r.jsx("a",{className:"details-btn",children:r.jsx("i",{className:"far fa-arrow-right"})})})]}),(0,r.jsxs)("div",{className:"project-content",children:[r.jsx("span",{className:"sub-title",children:"Product Design"}),r.jsx("h3",{children:r.jsx(n.default,{legacyBehavior:!0,href:"project-details",children:"Mobile Application Design"})})]})]})}),r.jsx("div",{className:"col-lg-6 item design marketing graphics",children:(0,r.jsxs)("div",{className:"project-item style-two wow fadeInUp delay-0-4s",children:[(0,r.jsxs)("div",{className:"project-image",children:[r.jsx("img",{src:"assets/images/projects/project2.jpg",alt:"Project"}),r.jsx(n.default,{legacyBehavior:!0,href:"/project-details",children:r.jsx("a",{className:"details-btn",children:r.jsx("i",{className:"far fa-arrow-right"})})})]}),(0,r.jsxs)("div",{className:"project-content",children:[r.jsx("span",{className:"sub-title",children:"Product Design"}),r.jsx("h3",{children:r.jsx(n.default,{legacyBehavior:!0,href:"project-details",children:"Website Makeup Design"})})]})]})}),r.jsx("div",{className:"col-lg-6 item development graphics",children:(0,r.jsxs)("div",{className:"project-item style-two wow fadeInUp delay-0-2s",children:[(0,r.jsxs)("div",{className:"project-image",children:[r.jsx("img",{src:"assets/images/projects/project3.jpg",alt:"Project"}),r.jsx(n.default,{legacyBehavior:!0,href:"/project-details",children:r.jsx("a",{className:"details-btn",children:r.jsx("i",{className:"far fa-arrow-right"})})})]}),(0,r.jsxs)("div",{className:"project-content",children:[r.jsx("span",{className:"sub-title",children:"Graphics Design"}),r.jsx("h3",{children:r.jsx(n.default,{legacyBehavior:!0,href:"project-details",children:"Brand Identity and Motion Design"})})]})]})}),r.jsx("div",{className:"col-lg-6 item design development apps",children:(0,r.jsxs)("div",{className:"project-item style-two wow fadeInUp delay-0-4s",children:[(0,r.jsxs)("div",{className:"project-image",children:[r.jsx("img",{src:"assets/images/projects/project4.jpg",alt:"Project"}),r.jsx(n.default,{legacyBehavior:!0,href:"/project-details",children:r.jsx("a",{className:"details-btn",children:r.jsx("i",{className:"far fa-arrow-right"})})})]}),(0,r.jsxs)("div",{className:"project-content",children:[r.jsx("span",{className:"sub-title",children:"Product Design"}),r.jsx("h3",{children:r.jsx(n.default,{legacyBehavior:!0,href:"project-details",children:"Mobile Application Design"})})]})]})}),r.jsx("div",{className:"col-lg-6 item branding marketing graphics",children:(0,r.jsxs)("div",{className:"project-item style-two wow fadeInUp delay-0-2s",children:[(0,r.jsxs)("div",{className:"project-image",children:[r.jsx("img",{src:"assets/images/projects/project5.jpg",alt:"Project"}),r.jsx(n.default,{legacyBehavior:!0,href:"/project-details",children:r.jsx("a",{className:"details-btn",children:r.jsx("i",{className:"far fa-arrow-right"})})})]}),(0,r.jsxs)("div",{className:"project-content",children:[r.jsx("span",{className:"sub-title",children:"Design & Branding"}),r.jsx("h3",{children:r.jsx(n.default,{legacyBehavior:!0,href:"project-details",children:"Creative Graphics Design"})})]})]})}),r.jsx("div",{className:"col-lg-6 item design marketing apps",children:(0,r.jsxs)("div",{className:"project-item style-two wow fadeInUp delay-0-4s",children:[(0,r.jsxs)("div",{className:"project-image",children:[r.jsx("img",{src:"assets/images/projects/project6.jpg",alt:"Project"}),r.jsx(n.default,{legacyBehavior:!0,href:"/project-details",children:r.jsx("a",{className:"details-btn",children:r.jsx("i",{className:"far fa-arrow-right"})})})]}),(0,r.jsxs)("div",{className:"project-content",children:[r.jsx("span",{className:"sub-title",children:"Product Design"}),r.jsx("h3",{children:r.jsx(n.default,{legacyBehavior:!0,href:"project-details",children:"Design & Branding Mokeup"})})]})]})})]})]})}},6204:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>d,metadata:()=>c});var r=a(9510),i=a(1113),t=a(1100),n=a(7371);let l=(0,a(8318).default)(()=>a.e(438).then(a.bind(a,2438)),{loadableGenerated:{modules:["app/projects/page.js -> @/components/ProjectGridIsotop"]},ssr:!1}),c={title:"Projects Grid"},d=()=>(0,r.jsxs)(t.Z,{children:[r.jsx(i.Z,{pageName:"Project Grid View"}),(0,r.jsxs)("section",{className:"projects-area pt-40 pb-130 rpb-100 rel z-1",children:[(0,r.jsxs)("div",{className:"container",children:[r.jsx(l,{}),r.jsx("div",{className:"project-btn text-center wow fadeInUp delay-0-2s",children:r.jsx(n.default,{legacyBehavior:!0,href:"/projects",children:(0,r.jsxs)("a",{className:"theme-btn",children:["View More Projects ",r.jsx("i",{className:"far fa-angle-right"})]})})})]}),(0,r.jsxs)("div",{className:"bg-lines",children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]})]})]})},1113:(e,s,a)=>{"use strict";a.d(s,{Z:()=>t});var r=a(9510),i=a(7371);let t=({pageName:e})=>(0,r.jsxs)("section",{className:"page-banner-area pt-200 rpt-140 pb-100 rpb-60 rel z-1 text-center",children:[r.jsx("div",{className:"container",children:(0,r.jsxs)("div",{className:"banner-inner text-white",children:[r.jsx("h1",{className:"page-title wow fadeInUp delay-0-2s",children:e}),r.jsx("nav",{"aria-label":"breadcrumb",children:(0,r.jsxs)("ol",{className:"breadcrumb justify-content-center wow fadeInUp delay-0-4s",children:[r.jsx("li",{className:"breadcrumb-item",children:r.jsx(i.default,{legacyBehavior:!0,href:"/",children:"Home"})}),r.jsx("li",{className:"breadcrumb-item active",children:e})]})})]})}),(0,r.jsxs)("div",{className:"bg-lines",children:[r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{}),r.jsx("span",{})]})]})}};var s=require("../../webpack-runtime.js");s.C(e);var a=e=>s(s.s=e),r=s.X(0,[948,914,478,933],()=>a(7167));module.exports=r})();