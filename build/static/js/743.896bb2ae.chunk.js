"use strict";(self.webpackChunkreact_tailwindcss_portfolio=self.webpackChunkreact_tailwindcss_portfolio||[]).push([[743],{2612:function(e,t,r){r.d(t,{Z:function(){return x}});var a=r(2791),i=r(3313),s=r(4034),n=r(1087),l=r(184),o=function(e){var t=e.title,r=e.category,a=e.image;return(0,l.jsx)(s.E.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:(0,l.jsx)(n.rU,{to:"/projects/single-project","aria-label":"Single Project",children:(0,l.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[(0,l.jsx)("div",{children:(0,l.jsx)("img",{src:a,className:"rounded-t-xl border-none",alt:"Single Project"})}),(0,l.jsxs)("div",{className:"text-center px-4 py-6",children:[(0,l.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),(0,l.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:r})]})]})})})},c=r(454),d=["Web Application","Mobile Application","UI/UX Design","Branding"],m=function(e){var t=e.setSelectProject;return(0,l.jsxs)("select",{onChange:function(e){t(e.target.value)},className:"font-general-medium \r px-4\r sm:px-6\r py-2\r border\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r dark:font-medium\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",children:[(0,l.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),d.map((function(e){return(0,l.jsx)("option",{className:"text-normal sm:text-md",children:e},e)}))]})},x=function(){var e=(0,a.useContext)(c.v),t=e.projects,r=e.searchProject,s=e.setSearchProject,n=e.searchProjectsByTitle,d=e.selectProject,x=e.setSelectProject,g=e.selectProjectsByCategory;return(0,l.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[(0,l.jsx)("div",{className:"text-center",children:(0,l.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),(0,l.jsxs)("div",{className:"mt-10 sm:mt-16",children:[(0,l.jsx)("h3",{className:"font-general-regular \r text-center text-secondary-dark\r dark:text-ternary-light\r text-md\r sm:text-xl\r mb-3\r ",children:"Search projects by title or filter by category"}),(0,l.jsxs)("div",{className:"\r flex\r justify-between\r border-b border-primary-light\r dark:border-secondary-dark\r pb-3\r gap-3\r ",children:[(0,l.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,l.jsx)("span",{className:"\r hidden\r sm:block\r bg-primary-light\r dark:bg-ternary-dark\r p-2.5\r shadow-sm\r rounded-xl\r cursor-pointer\r ",children:(0,l.jsx)(i.jRj,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),(0,l.jsx)("input",{onChange:function(e){s(e.target.value)},className:"font-general-medium \r pl-3\r pr-1\r sm:px-4\r py-2\r border \r border-gray-200\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),(0,l.jsx)(m,{setSelectProject:x})]})]}),(0,l.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:d?g.map((function(e){return(0,l.jsx)(o,{title:e.title,category:e.category,image:e.img},e.id)})):r?n.map((function(e){return(0,l.jsx)(o,{title:e.title,category:e.category,image:e.img},e.id)})):t.map((function(e){return(0,l.jsx)(o,{title:e.title,category:e.category,image:e.img},e.id)}))})]})}},454:function(e,t,r){r.d(t,{v:function(){return l},V:function(){return o}});var a=r(678),i=r(2791),s=[{id:1,title:"Covid Contact Tracing",category:"Web Application",img:r(9416),ProjectHeader:{title:"Project Management UI - From Context",publishDate:"Jul 26, 2021",tags:"FrontEnd"}},{id:2,title:"Developer Portfolio",category:"Website",img:r(9958)},{id:3,title:"Trash Wise",category:"Web Application",img:r(2265)}],n=r(184),l=(0,i.createContext)(),o=function(e){var t=(0,i.useState)(s),r=(0,a.Z)(t,2),o=r[0],c=r[1],d=(0,i.useState)(""),m=(0,a.Z)(d,2),x=m[0],g=m[1],u=(0,i.useState)(""),p=(0,a.Z)(u,2),h=p[0],y=p[1],j=o.filter((function(e){return e.title.toLowerCase().includes(x.toLowerCase())||""===x?e:""})),f=o.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(h)}));return(0,n.jsx)(l.Provider,{value:{projects:o,setProjects:c,searchProject:x,setSearchProject:g,searchProjectsByTitle:j,selectProject:h,setSelectProject:y,selectProjectsByCategory:f},children:e.children})}},8743:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var a=r(1087),i=r(678),s=r(5558),n=r(3313);r(2791);var l=r.p+"static/media/developer.2f084608158c1db6dcc0b2c76a2806f7.svg";var o=r.p+"static/media/developer-dark.aa2700b57c0b14ead116acc39d478609.svg",c=r(4034),d=r(184),m=function(){var e=(0,s.Z)(),t=(0,i.Z)(e,1)[0];return(0,d.jsxs)(c.E.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[(0,d.jsxs)("div",{className:"w-full md:w-1/3 text-left",children:[(0,d.jsx)(c.E.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",children:"Hi, I am Garsha"}),(0,d.jsx)(c.E.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:"A Junior Developer & IT Enthusiast"}),(0,d.jsx)(c.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"flex justify-center sm:block",children:(0,d.jsxs)("a",{download:"Garsha_Iravani_Resume.pdf",href:"/files/Garsha_Iravani_Resume.pdf",className:"font-general-medium flex items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume",children:[(0,d.jsx)(n.UJB,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),(0,d.jsx)("span",{className:"text-sm sm:text-lg font-general-medium duration-100",children:"Download Resume"})]})})]}),(0,d.jsx)(c.E.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0",children:(0,d.jsx)("img",{src:"dark"===t?l:o,alt:"Developer"})})]})},x=r(2612),g=r(454),u=r(992),p=function(){return(0,d.jsxs)("div",{className:"container mx-auto",children:[(0,d.jsx)(m,{}),(0,d.jsx)(g.V,{children:(0,d.jsx)(x.Z,{})}),(0,d.jsx)("div",{className:"mt-8 sm:mt-10 flex justify-center",children:(0,d.jsx)(a.rU,{to:"/projects",className:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects",children:(0,d.jsx)(u.Z,{title:"More Projects"})})})]})}},9958:function(e,t,r){e.exports=r.p+"static/media/mobile-project-2.a5aae7867760d0c29dd2.jpg"},2265:function(e,t,r){e.exports=r.p+"static/media/ui-project-1.74d24174695594610f59.jpg"},9416:function(e,t,r){e.exports=r.p+"static/media/web-project-2.46180fbea39aa96e1f29.jpg"}}]);
//# sourceMappingURL=743.896bb2ae.chunk.js.map