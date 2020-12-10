(this.webpackJsonpworld_countries=this.webpackJsonpworld_countries||[]).push([[0],{33:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(14),i=n.n(r),o=(n(33),n(27)),l=n(18),j=n.n(l),d=n(23),b=n(2),u="increase",h="set_flags",m="set_const_flags",O="set_option",f="set_search",g="set_abbrev",x=function(e){return{type:h,val:e}},_=(n(39),function(e){var t=e.color_mode,n=e.color_mode_handler;return Object(c.jsx)("header",{children:Object(c.jsxs)("div",{className:"header container",children:[Object(c.jsx)(v,{}),Object(c.jsxs)("div",{className:"right_header",children:[Object(c.jsx)("div",{className:"mobile_menu",children:"\u2630"}),Object(c.jsx)("p",{className:"color_mode",onClick:n,children:t.replaceAll("_"," ")})]})]})})}),p=n(10),v=function(){return Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{className:"nav",children:[Object(c.jsx)("li",{className:"nav_item",children:Object(c.jsx)(p.c,{className:"nav_links",to:"/",exact:!0,children:"Home"})}),Object(c.jsx)("li",{className:"nav_item",children:Object(c.jsx)(p.c,{className:"nav_links",to:"/quiz",children:"Quiz"})}),Object(c.jsx)("li",{className:"nav_item",children:Object(c.jsx)(p.c,{className:"nav_links",to:"/login",children:"Login"})})]})})},N=n(4),w=(n(41),function(){var e=Object(b.d)((function(e){return e.flags}),b.b);return Object(c.jsx)("main",{children:Object(c.jsxs)(N.d,{children:[Object(c.jsx)(N.b,{path:"/quiz",component:S}),Object(c.jsx)(N.b,{path:"/login",component:F}),e.map((function(e,t){return Object(c.jsx)(N.b,{path:"/world_countries/"+e.alpha3Code,component:C},"route_"+t)})),Object(c.jsx)(N.b,{path:"/world_countries",children:Object(c.jsx)(N.a,{from:"/world_countries",to:"/"})}),Object(c.jsx)(N.b,{path:"/",component:k,exact:!0}),Object(c.jsx)(N.b,{component:L})]})})}),k=function(){var e=Object(b.d)((function(e){return e.flags}),b.b),t=Object(b.d)((function(e){return e.search}),b.b),n=Object(b.d)((function(e){return e.const_flags}),b.b),a=Object(b.d)((function(e){return e.option}),b.b),s=Object(b.c)(),r=function(e){return s({type:O,val:e})},i=function(e){return s(x(e))},o=function(e){return s({type:f,val:e})},l=function(e,t){return""!==(e="Filter by Region"===e?"":e)&&void 0!==e||""!==t&&void 0!==t?n.filter((function(n){return n.name.toLowerCase().includes(t)&&n.region.includes(e)})):n};return Object(c.jsxs)(y,{header:"Learn about different countries",children:[Object(c.jsxs)("section",{className:"filter_section",children:[Object(c.jsx)("div",{className:"search_container filter_container",children:Object(c.jsx)("input",{type:"search",name:"search",id:"search",className:"search",placeholder:"Search for a country...",onChange:function(e){return t=e.target.value.toLowerCase(),o(t),void i(l(a,t));var t}})}),Object(c.jsxs)("div",{className:"continents_container filter_container",children:[Object(c.jsx)("select",{name:"continents",id:"continents",className:"continents",onChange:function(e){return n=e.target.value,r(n),void i(l(n,t));var n},children:["Filter by Region","Americas","Africa","Asia","Europe","Oceania","Polar"].map((function(e,t){return Object(c.jsx)("option",{value:e,className:"continent",children:e},t)}))}),Object(c.jsx)("div",{className:"select_arrow"})]})]}),Object(c.jsx)("section",{className:"flag_container",children:e.map((function(e,t){return Object(c.jsxs)(p.b,{to:"/world_countries/"+e.alpha3Code,className:"flag_item",children:[Object(c.jsx)("img",{src:e.flag,className:"flag_image",alt:"The flag of "+e.name}),Object(c.jsxs)("div",{className:"flag_content",children:[Object(c.jsx)("p",{className:"country",children:e.name}),Object(c.jsxs)("div",{className:"flag_detail_container",children:[Object(c.jsxs)("p",{className:"flag_detail population",children:["Population: ",(new Intl.NumberFormat).format(parseInt(e.population))]}),Object(c.jsxs)("p",{className:"flag_detail region",children:["Region: ",e.region]}),Object(c.jsxs)("p",{className:"flag_detail capital",children:["Capital: ",e.capital]})]})]})]},"flag_"+t)}))})]})},C=function(e){var t=Object(b.d)((function(e){return e.flags}),b.b),n=Object(b.d)((function(e){return e.abbrev_list}),b.b),a=e.location.pathname,s=a.substring(a.length-3,a.length),r=t.filter((function(e){return e.alpha3Code===s}))[0],i=r.topLevelDomain.length,o=r.currencies.length,l=r.languages.length;return Object(c.jsx)(y,{header:r.name,children:Object(c.jsxs)("section",{className:"detail_page",children:[Object(c.jsx)(z,{backer:e.history.goBack}),Object(c.jsxs)("div",{className:"detail_page_content",children:[Object(c.jsx)("div",{className:"detail_page_container detail_image_container",children:Object(c.jsx)("img",{src:r.flag,className:"flag_detail_image",alt:"The flag of "+r.name})}),Object(c.jsxs)("div",{className:"detail_page_container detail_info_container",children:[Object(c.jsx)("p",{className:"country",children:r.name}),Object(c.jsxs)("div",{className:"detail_info_content detail_info_top",children:[Object(c.jsxs)("p",{className:"flag_detail population",children:["Population: ",(new Intl.NumberFormat).format(parseInt(r.population))]}),Object(c.jsxs)("p",{className:"flag_detail region",children:["Region: ",r.region]}),Object(c.jsxs)("p",{className:"flag_detail subregion",children:["Sub Region: ",r.subregion]}),Object(c.jsxs)("p",{className:"flag_detail capital",children:["Capital: ",r.capital]})]}),Object(c.jsxs)("div",{className:"detail_info_content detail_info_bottom",children:[Object(c.jsxs)("p",{className:"flag_detail domain",children:["Top Level Domain: ",r.topLevelDomain.map((function(e,t){return e+(i===t+1?"":", ")}))]}),Object(c.jsxs)("p",{className:"flag_detail currencies",children:["Currencies: ",r.currencies.map((function(e,t){return e.name+(o===t+1?"":", ")}))]}),Object(c.jsxs)("p",{className:"flag_detail languages",children:["Languages: ",r.languages.map((function(e,t){return e.name+(l===t+1?"":", ")}))]})]}),Object(c.jsxs)("p",{className:"flag_detail border_header",children:["Bordering Countries: ",0===r.borders.length?"None":""]}),n.map((function(e,t){return r.borders.includes(e.abbrev)?Object(c.jsx)(p.b,{className:"border block_text",to:"/world_countries/"+e.abbrev,children:e.name},"border_"+t):""}))]})]})]})})},y=function(e){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{className:"header_main",children:e.header}),e.children]})},z=function(e){var t=Object(b.d)((function(e){return e.const_flags}),b.b),n=Object(b.c)();return Object(c.jsx)("button",{className:"back_link block_text",onClick:function(){n(x(t)),e.backer()},children:"< Back"})},L=function(e){return Object(c.jsx)(y,{header:"Page Not Found",children:Object(c.jsx)(z,{backer:e.history.goBack})})},S=function(){var e=Object(b.d)((function(e){return e.counter}),b.b),t=Object(b.c)();return Object(c.jsx)(y,{header:"It's game time",children:Object(c.jsxs)("section",{className:"quiz",children:[Object(c.jsx)("h2",{className:"placeholder",children:"Coming Soon... Under Construction"}),"localhost"===window.location.hostname?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("h3",{children:["Quiz Num ",e]}),Object(c.jsx)("button",{onClick:function(){return t({type:u})},children:"Click Here"})]}):""]})})},F=function(){return Object(c.jsx)(y,{header:"Login",children:Object(c.jsx)("section",{className:"login",children:Object(c.jsx)("h2",{className:"placeholder",children:"Coming Soon... Under Construction"})})})},I=n(25),B=n.n(I),M=(n(42),function(){return Object(c.jsx)("footer",{children:Object(c.jsxs)("div",{className:"footer container",children:[Object(c.jsxs)("p",{className:"copyright",children:["\xa9 ",B()().year()," DeMarc Johnson"]}),Object(c.jsxs)("div",{className:"social_links_container",children:[Object(c.jsx)("a",{href:"https://github.com/demarcj",children:Object(c.jsx)("svg",{className:"social_links",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(c.jsx)("path",{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"})})}),Object(c.jsx)("a",{href:"https://www.linkedin.com/in/demarc-johnson/",children:Object(c.jsx)("svg",{className:"social_links",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(c.jsx)("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"})})})]})]})})}),V=(n(43),function(){var e=Object(b.c)(),t=function(t){return e({type:m,val:t})},n=function(t){return e({type:g,val:t})};s.a.useEffect((function(){(function(){var c=Object(d.a)(j.a.mark((function c(){var a,s,r;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,fetch("https://restcountries.eu/rest/v2/all");case 2:return a=c.sent,c.next=5,a.json();case 5:s=c.sent,r=[],s.forEach((function(e){var t={name:"",abbrev:""};t.name=e.name,t.abbrev=e.alpha3Code,r.push(t)})),e(x(s)),t(s),n(r);case 11:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}})()()}),[]);var r=Object(a.useState)(localStorage.getItem("color_mode")),i=Object(o.a)(r,2),l=i[0],u=i[1];return Object(c.jsxs)("div",{id:"color_mode",className:"light_mode"===l?"light_mode":"dark_mode",children:[Object(c.jsx)(_,{color_mode:"light_mode"===l?"Dark Mode":"Light Mode",color_mode_handler:function(){var e=null===l||"dark_mode"===l?"light_mode":"dark_mode";localStorage.setItem("color_mode",e),u(e)}}),Object(c.jsx)(w,{}),Object(c.jsx)(M,{})]})}),D=n(13),H=n(8),P={counter:0,flags:[],search:"",option:"",const_flags:[],abbrev_list:[{}]},R=n(26),T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))},A=Object(D.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,n=function(e){return t.type===e};return n(u)?Object(H.a)(Object(H.a)({},e),{},{counter:e.counter+1}):n(h)?Object(H.a)(Object(H.a)({},e),{},{flags:t.val}):n(f)?Object(H.a)(Object(H.a)({},e),{},{search:t.val}):n(O)?Object(H.a)(Object(H.a)({},e),{},{option:t.val}):n(m)?Object(H.a)(Object(H.a)({},e),{},{const_flags:t.val}):n(g)?Object(H.a)(Object(H.a)({},e),{},{abbrev_list:t.val}):e}),Object(D.a)(R.a));i.a.render(Object(c.jsx)(b.a,{store:A,children:Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(p.a,{children:Object(c.jsx)(V,{})})})}),document.getElementById("root")),T()}},[[44,1,2]]]);
//# sourceMappingURL=main.c235f507.chunk.js.map