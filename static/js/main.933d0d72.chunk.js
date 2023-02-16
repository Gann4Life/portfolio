(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a.n(c),i=a(1),s=a.n(i),o=a(2),u=a(3),m=function(e){var t=e.data;return Object(n.useEffect)(function(){},[]),t.social_links?r.a.createElement("div",{className:"container px-auto text-white"},r.a.createElement("img",{alt:"Avatar",id:"avatar",className:"rounded-circle",src:t.avatar_url}),r.a.createElement("h1",{className:"mx-auto my-5"},"Hi! I'm ",t.first_name,"! - Also known as Gann4Life."),r.a.createElement("span",{style:{whiteSpace:"pre-line"}},t.intro),r.a.createElement("div",{className:"d-flex justify-content-around my-5"},r.a.createElement("a",{className:"interactable text-white",href:t.social_links.linkedin},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"currentColor",class:"bi bi-linkedin",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"}))),r.a.createElement("a",{className:"interactable text-white",href:t.social_links.github},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"currentColor",class:"bi bi-github",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))),r.a.createElement("a",{className:"interactable text-white",href:t.social_links.twitter},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"currentColor",class:"bi bi-twitter",viewBox:"0 0 16 16"},r.a.createElement("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"})))),r.a.createElement("hr",null)):null},p=function(e){return r.a.createElement("div",{className:"project-tech interactable bg-danger px-2 my-2 align-items-center rounded-pill"},r.a.createElement("p",null,e.tech))},d=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"d-xl-flex justify-content-evenly"},r.a.createElement("p",{className:"m-xl-2"},"Keywords:"),e.main_tech.map(function(e){return r.a.createElement(p,{tech:e})})),e.other_tech.length>0?r.a.createElement("p",{className:"text-muted"},"Other: ",e.other_tech.join(", ")):"")},h=function(e){var t=e.data;return r.a.createElement("div",{href:t.link_to_project,className:"col-lg-5 project shadow text-decoration-none bg-dark text-white m-2 p-2"},r.a.createElement("div",{className:"noselect py-2"},r.a.createElement("div",{className:"d-flex justify-content-around"},r.a.createElement("div",null,r.a.createElement("h3",null,t.project_title),r.a.createElement("p",{className:"text-muted"},r.a.createElement("i",null,t.role))),r.a.createElement("p",{className:"text-muted"},r.a.createElement("i",null,t.start_date===t.end_date?r.a.createElement("p",null,t.end_date):r.a.createElement("p",null,t.start_date," - ",t.is_current?"Present":t.end_date)))),r.a.createElement("div",{className:"d-flex justify-content-around"},null!=t.link_to_project?r.a.createElement("a",{className:"text-white text-decoration-none mx-2 w-100",href:t.link_to_project},r.a.createElement("p",{className:"interactable bg-danger rounded-pill"},"View project")):"",null!=t.link_to_source_code?r.a.createElement("a",{className:"text-white text-decoration-none mx-2 w-100",href:t.link_to_source_code},r.a.createElement("p",{className:"interactable bg-danger rounded-pill"},"Source Code")):""),t.image?r.a.createElement("img",{alt:"Project thumbnail",src:t.image,className:"project img-fluid p-2"}):"",r.a.createElement("p",null,t.description),r.a.createElement("hr",null),r.a.createElement(d,{main_tech:t.highlighted_technologies,other_tech:t.other_technologies})))},f=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",{className:"row portfolio justify-content-center"},r.a.createElement("input",{class:"rounded-pill bg-dark text-white border-0 fs-4",type:"text",placeholder:"Search...",onChange:function(e){return l(e.target.value)}}),e.projects.filter(function(e){var t=""===c,a=(e.project_title+e.description+e.highlighted_technologies.join()+e.other_technologies.join()).toLowerCase().includes(c.toLowerCase());return t||a?e:""}).map(function(e,t){return r.a.createElement(h,{key:t,data:e})}).sort(function(e,t){return-e.props.data.start_date.localeCompare(t.props.data.start_date)}))},v=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),i=Object(u.a)(l,2),p=i[0],d=i[1];Object(n.useEffect)(function(){var e=function(){var e=Object(o.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(o.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();e(),t()},[]);var h=function(){var e=Object(o.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("https://api.codersrank.io/v2/users/gann4life/projects?get_by=username");case 2:return t=e.sent,e.abrupt("return",t.projects);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E("https://api.codersrank.io/v2/users/gann4life?get_by=username");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"app container-fluid py-1 text-center"},r.a.createElement("div",{className:"container my-5"},r.a.createElement(m,{data:p}),r.a.createElement("hr",null),a.length>0?r.a.createElement(f,{projects:a}):""))},E=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,22)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;a(e),n(e),r(e),c(e),l(e)})};a(17),a(19);l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null))),E()},6:function(e,t,a){e.exports=a(21)}},[[6,3,2]]]);
//# sourceMappingURL=main.933d0d72.chunk.js.map