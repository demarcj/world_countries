(this.webpackJsonpworld_countries=this.webpackJsonpworld_countries||[]).push([[0],{14:function(e,t,n){e.exports={footer:"footer_footer__qHtVt",copyright:"footer_copyright__2cqbp",social_links_container:"footer_social_links_container__3pf8C",social_links:"footer_social_links__2FMaA",social_links_image:"footer_social_links_image__2m971"}},20:function(e,t,n){e.exports={quiz_image:"quiz_quiz_image__TzGbd",quiz_button:"quiz_quiz_button__OCmrZ",search:"quiz_search__2Mt2f",start:"quiz_start__2HigX"}},29:function(e,t,n){e.exports={form:"login_form__1Mav_",login:"login_login__2GNNA"}},40:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),o=n(21),s=n.n(o),i=(n(40),n(12)),l=n(13),u=n.n(l),d=n(16),j=n(2),h="increase",b="set_flags",m="set_const_flags",f="set_option",_="set_search",g="set_abbrev",O="get_number",p=function(e){return{type:b,val:e}},v=function(e){return{type:m,val:e}},x=n(9),N=n.n(x),w=function(e){var t=e.color_mode,n=e.color_mode_handler;return Object(a.jsx)("header",{children:Object(a.jsxs)("div",{className:"".concat(N.a.header," container"),children:[Object(a.jsx)(y,{}),Object(a.jsxs)("div",{className:N.a.right_header,children:[Object(a.jsx)("div",{className:N.a.mobile_menu,children:"\u2630"}),Object(a.jsx)("p",{className:N.a.color_mode,onClick:n,children:t.replaceAll("_"," ")})]})]})})},k=n(11),y=function(){return Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{className:N.a.nav,children:[Object(a.jsx)("li",{className:N.a.nav_item,children:Object(a.jsx)(k.c,{className:N.a.nav_links,to:"/world_countries",exact:!0,children:"Home"})}),Object(a.jsx)("li",{className:N.a.nav_item,children:Object(a.jsx)(k.c,{className:N.a.nav_links,to:"/quiz",children:"Quiz"})}),Object(a.jsx)("li",{className:N.a.nav_item,children:Object(a.jsx)(k.c,{className:N.a.nav_links,to:"/login",children:"Login"})})]})})},z=n(4),C=n(34),S=n(20),M=n.n(S),q=function(){var e=Object(j.d)((function(e){return e.const_flags}),j.b),t=Object(j.d)((function(e){return e.counter}),j.b),n=Object(j.d)((function(e){return e.random_number}),j.b),o=Object(j.c)(),s=e[n],l=Object(c.useState)([]),b=Object(i.a)(l,2),m=b[0],f=b[1],_=Object(c.useState)(""),g=Object(i.a)(_,2),p=g[0],x=g[1],N=Object(c.useState)(""),w=Object(i.a)(N,2),k=w[0],y=w[1],z=Object(c.useState)(!0),S=Object(i.a)(z,2),q=S[0],F=S[1],P=Object(c.useState)([e[Math.round(Math.random()*e.length)].name,e[Math.round(Math.random()*e.length)].name,e[Math.round(Math.random()*e.length)].name,e[Math.round(Math.random()*e.length)].name,"test5"]),T=Object(i.a)(P,2),A=T[0],B=(T[1],function(){var e=Object(C.a)(A),t=[];f([]),A.forEach((function(n){var a=A.length-t.length,c=Math.floor(10*Math.random()%a);t.push(e[c]),e.splice(c,1)})),f(t)});r.a.useEffect((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/all");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,o(v(n));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var E=function(e){return x(e.target.value)};return Object(a.jsx)(L,{header:"It's game time",children:Object(a.jsx)("section",{className:M.a.quiz,children:q?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:"Start Game"}),Object(a.jsx)("button",{className:M.a.start,onClick:function(){B(),F(!1)},children:"Start"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Pick the name of this Country"}),Object(a.jsx)("h2",{children:void 0===s?"":s.name}),Object(a.jsx)("h2",{children:k}),Object(a.jsx)("img",{className:M.a.quiz_image,src:void 0===s?"":s.flag,alt:"The flag of "+(void 0===s?"":s.name)}),Object(a.jsxs)("form",{id:"country_name",children:[m.map((function(e,t){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("label",{htmlFor:"test5"===e?s.name:e,children:[Object(a.jsx)("input",{type:"radio",name:"name",id:"test5"===e?s.name:e,onChange:E,value:"test5"===e?s.name:e},"test"+t)," "+("test5"===e?s.name:e)]})})})),Object(a.jsx)("button",{className:M.a.quiz_button,onClick:function(n){n.preventDefault();var a,c=p===s.name?"Correct":"Wrong",r=(t+1)%10,i=0===r;y(c),F(i),o((a=Math.round(Math.random()*e.length),{type:O,val:a})),o(function(e){return{type:h,val:e}}(r)),B(),document.querySelectorAll('input[name="name"]').forEach((function(e){e.checked=!1}))},children:"Submit"})]})]})})})},L=function(e){var t=e.header,n=e.children;return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{className:"header_main",children:t}),n]})},F=n(29),P=n.n(F),T=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],o=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector("#username").value,n=document.querySelector("#password").value,e.prev=2,e.next=5,fetch("https://world-countries-aad9f-default-rtdb.firebaseio.com/login.json",{method:"POST",body:JSON.stringify({login:t,password:n})});case 5:return a=e.sent,e.next=8,a.json();case 8:c=e.sent,r(c.name),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),r("Your login did not go through");case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(L,{header:"Login",children:Object(a.jsx)("section",{className:"login",children:Object(a.jsxs)("form",{className:P.a.form,action:"/profile",method:"post",children:[""===n?"":Object(a.jsx)("h2",{children:n}),Object(a.jsx)("label",{htmlFor:"username",children:"Username"}),Object(a.jsx)("input",{type:"text",name:"username",id:"username"}),Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{type:"password",name:"password",id:"password"}),Object(a.jsx)("button",{className:P.a.login,type:"button",onClick:o,children:"Login"})]})})})},A=(n(47),function(e){var t=e.const_flags;return Object(a.jsx)("main",{children:Object(a.jsxs)(z.c,{children:[Object(a.jsx)(z.a,{path:"/quiz",component:q}),Object(a.jsx)(z.a,{path:"/login",component:T}),t.map((function(e,t){return Object(a.jsx)(z.a,{path:"/world_countries/"+e.alpha3Code,component:E},"route_"+t)})),Object(a.jsx)(z.a,{path:"/world_countries",component:B,exact:!0}),Object(a.jsx)(z.a,{component:V})]})})}),B=function(){var e=Object(j.d)((function(e){return e.flags}),j.b),t=Object(j.d)((function(e){return e.search}),j.b),n=Object(j.d)((function(e){return e.const_flags}),j.b),c=Object(j.d)((function(e){return e.option}),j.b),r=Object(j.c)(),o=function(e){return r({type:f,val:e})},s=function(e){return r(p(e))},i=function(e){return r({type:_,val:e})},l=function(e,t){return""!==(e="Filter by Region"===e?"":e)&&void 0!==e||""!==t&&void 0!==t?n.filter((function(n){return n.name.toLowerCase().includes(t)&&n.region.includes(e)})):n};return Object(a.jsxs)(L,{header:"Learn about different countries",children:[Object(a.jsxs)("section",{className:"filter_section",children:[Object(a.jsx)("div",{className:"search_container filter_container",children:Object(a.jsx)("input",{type:"search",name:"search",id:"search",className:"search",placeholder:"Search for a country...",onChange:function(e){return t=e.target.value.toLowerCase(),i(t),void s(l(c,t));var t}})}),Object(a.jsxs)("div",{className:"continents_container filter_container",children:[Object(a.jsx)("select",{name:"continents",id:"continents",className:"continents",onChange:function(e){return n=e.target.value,o(n),void s(l(n,t));var n},children:["Filter by Region","Americas","Africa","Asia","Europe","Oceania","Polar"].map((function(e,t){return Object(a.jsx)("option",{value:e,className:"continent",children:e},t)}))}),Object(a.jsx)("div",{className:"select_arrow"})]})]}),Object(a.jsx)("section",{className:"flag_container",children:e.map((function(e,t){return Object(a.jsxs)(k.b,{to:"/world_countries/"+e.alpha3Code,className:"flag_item",children:[Object(a.jsx)("img",{src:e.flag,className:"flag_image",alt:"The flag of "+e.name}),Object(a.jsxs)("div",{className:"flag_content",children:[Object(a.jsx)("p",{className:"country",children:e.name}),Object(a.jsxs)("div",{className:"flag_detail_container",children:[Object(a.jsxs)("p",{className:"flag_detail population",children:["Population: ",(new Intl.NumberFormat).format(parseInt(e.population))]}),Object(a.jsxs)("p",{className:"flag_detail region",children:["Region: ",e.region]}),Object(a.jsxs)("p",{className:"flag_detail capital",children:["Capital: ",e.capital]})]})]})]},"flag_"+t)}))})]})},E=function(e){var t=e.location,n=e.history,c=Object(j.d)((function(e){return e.flags}),j.b),r=Object(j.d)((function(e){return e.abbrev_list}),j.b),o=t.pathname,s=o.substring(o.length-3,o.length),i=c.filter((function(e){return e.alpha3Code===s}))[0],l=i.topLevelDomain.length,u=i.currencies.length,d=i.languages.length;return Object(a.jsx)(L,{header:i.name,children:Object(a.jsxs)("section",{className:"detail_page",children:[Object(a.jsx)(I,{backer:n.goBack}),Object(a.jsxs)("div",{className:"detail_page_content",children:[Object(a.jsx)("div",{className:"detail_page_container detail_image_container",children:Object(a.jsx)("img",{src:i.flag,className:"flag_detail_image",alt:"The flag of "+i.name})}),Object(a.jsxs)("div",{className:"detail_page_container detail_info_container",children:[Object(a.jsx)("p",{className:"country",children:i.name}),Object(a.jsxs)("div",{className:"detail_info_content detail_info_top",children:[Object(a.jsxs)("p",{className:"flag_detail population",children:["Population: ",(new Intl.NumberFormat).format(parseInt(i.population))]}),Object(a.jsxs)("p",{className:"flag_detail region",children:["Region: ",i.region]}),Object(a.jsxs)("p",{className:"flag_detail subregion",children:["Sub Region: ",i.subregion]}),Object(a.jsxs)("p",{className:"flag_detail capital",children:["Capital: ",i.capital]})]}),Object(a.jsxs)("div",{className:"detail_info_content detail_info_bottom",children:[Object(a.jsxs)("p",{className:"flag_detail domain",children:["Top Level Domain: ",i.topLevelDomain.map((function(e,t){return e+(l===t+1?"":", ")}))]}),Object(a.jsxs)("p",{className:"flag_detail currencies",children:["Currencies: ",i.currencies.map((function(e,t){return e.name+(u===t+1?"":", ")}))]}),Object(a.jsxs)("p",{className:"flag_detail languages",children:["Languages: ",i.languages.map((function(e,t){return e.name+(d===t+1?"":", ")}))]})]}),Object(a.jsxs)("p",{className:"flag_detail border_header",children:["Bordering Countries: ",0===i.borders.length?"None":""]}),r.map((function(e,t){return i.borders.includes(e.abbrev)?Object(a.jsx)(k.b,{className:"border block_text",to:"/world_countries/"+e.abbrev,children:e.name},"border_"+t):""}))]})]})]})})},I=function(e){var t=e.backer,n=Object(j.d)((function(e){return e.const_flags}),j.b),c=Object(j.c)();return Object(a.jsx)("button",{className:"back_link block_text",onClick:function(){c(p(n)),t()},children:"< Back"})},V=function(e){var t=e.history;return Object(a.jsx)(L,{header:"Page Not Found",children:Object(a.jsx)(I,{backer:t.goBack})})},W=n(32),D=n.n(W),H=n(14),R=n.n(H),J=function(){return Object(a.jsx)("footer",{children:Object(a.jsxs)("div",{className:"".concat(R.a.footer," container"),children:[Object(a.jsxs)("p",{className:R.a.copyright,children:["\xa9 ",D()().year()," DeMarc Johnson"]}),Object(a.jsxs)("div",{className:R.a.social_links_container,children:[Object(a.jsx)("a",{className:R.a.social_links,href:"https://github.com/demarcj",children:Object(a.jsx)("svg",{className:R.a.social_links_image,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(a.jsx)("path",{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"})})}),Object(a.jsx)("a",{className:R.a.social_links,href:"https://www.linkedin.com/in/demarc-johnson/",children:Object(a.jsx)("svg",{className:R.a.social_links_image,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(a.jsx)("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"})})})]})]})})},U=(n(48),function(){var e=Object(j.d)((function(e){return e.const_flags}),j.b),t=Object(j.c)(),n=function(e){return t(v(e))},o=function(e){return t({type:g,val:e})};r.a.useEffect((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var a,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/all");case 2:return a=e.sent,e.next=5,a.json();case 5:c=e.sent,r=[],c.forEach((function(e){var t={name:"",abbrev:""};t.name=e.name,t.abbrev=e.alpha3Code,r.push(t)})),t(p(c)),n(c),o(r);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var s=Object(c.useState)(localStorage.getItem("color_mode")),l=Object(i.a)(s,2),h=l[0],b=l[1];return Object(a.jsxs)("div",{id:"color_mode",className:"".concat("light_mode"===h?"light_mode":"dark_mode"," root"),children:[Object(a.jsx)(w,{color_mode:"light_mode"===h?"Dark Mode":"Light Mode",color_mode_handler:function(){var e=null===h||"dark_mode"===h?"light_mode":"dark_mode";localStorage.setItem("color_mode",e),b(e)}}),Object(a.jsx)(A,{const_flags:e}),Object(a.jsx)(J,{})]})}),G=n(19),Q=n(5),X={counter:0,flags:[],search:"",option:"",const_flags:[],abbrev_list:[{}],random_number:0},Z=n(33),K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ee=Object(G.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0,n=function(e){return t.type===e};return n(h)?Object(Q.a)(Object(Q.a)({},e),{},{counter:t.val}):n(b)?Object(Q.a)(Object(Q.a)({},e),{},{flags:t.val}):n(_)?Object(Q.a)(Object(Q.a)({},e),{},{search:t.val}):n(f)?Object(Q.a)(Object(Q.a)({},e),{},{option:t.val}):n(O)?Object(Q.a)(Object(Q.a)({},e),{},{random_number:t.val}):n(m)?Object(Q.a)(Object(Q.a)({},e),{},{const_flags:t.val}):n(g)?Object(Q.a)(Object(Q.a)({},e),{},{abbrev_list:t.val}):e}),Object(G.a)(Z.a));s.a.render(Object(a.jsx)(j.a,{store:ee,children:Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(k.a,{children:Object(a.jsx)(U,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/world_countries",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/world_countries","/service-worker.js");Y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):$(t,e)}))}}(),K()},9:function(e,t,n){e.exports={header:"header_header__28Kuv",mobile_menu:"header_mobile_menu__3Nqsi",color_mode:"header_color_mode__1ozL2",right_header:"header_right_header__2jZ9L",nav_item:"header_nav_item__xTyQ8",nav_links:"header_nav_links__3Jo5O",nav:"header_nav__2nDMX"}}},[[49,1,2]]]);
//# sourceMappingURL=main.4916a574.chunk.js.map