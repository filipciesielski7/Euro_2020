(this["webpackJsonpfootball-api"]=this["webpackJsonpfootball-api"]||[]).push([[0],{34:function(e,a,n){},46:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),r=n(22),o=n.n(r),i=(n(34),n(11)),s=n(3),m=n(1),d=function(){return Object(m.jsx)("div",{className:"navbar",children:Object(m.jsx)("h2",{children:"Navbar"})})},l=n(8),j=n(27),u=[{name:"Group A",teams:[{name:"Turkey",code:"TUR"},{name:"Italy",code:"ITA"},{name:"Wales",code:"WAL"},{name:"Switzerland",code:"SUI"}]},{name:"Group B",teams:[{name:"Denmark",code:"DEN"},{name:"Finland",code:"FIN"},{name:"Belgium",code:"BEL"},{name:"Russia",code:"RUS"}]},{name:"Group C",teams:[{name:"Austria",code:"AUT"},{name:"North Macedonia",code:"MKD"},{name:"Netherlands",code:"NED"},{name:"Ukraine",code:"UKR"}]},{name:"Group D",teams:[{name:"England",code:"ENG"},{name:"Croatia",code:"CRO"},{name:"Scotland",code:"SCO"},{name:"Czech Republic",code:"CZE"}]},{name:"Group E",teams:[{name:"Poland",code:"POL"},{name:"Slovakia",code:"SVK"},{name:"Spain",code:"ESP"},{name:"Sweden",code:"SWE"}]},{name:"Group F",teams:[{name:"Hungary",code:"HUN"},{name:"Portugal",code:"POR"},{name:"France",code:"FRA"},{name:"Germany",code:"GER"}]}],b=[{at:"Austria"},{be:"Belgium"},{ch:"Switzerland"},{cz:"Czech Republic"},{de:"Germany"},{dk:"Denmark"},{es:"Spain"},{fi:"Finland"},{fr:"France"},{gb_eng:"England"},{gb_sct:"Scotland"},{gb_wls:"Wales"},{hr:"Croatia"},{hu:"Hungary"},{pl:"Poland"},{pt:"Portugal"},{ru:"Russia"},{se:"Sweden"},{sk:"Slovakia"},{tr:"Turkey"},{ua:"Ukraine"},{nl:"Netherlands"},{mk:"North Macedonia"},{it:"Italy"}],O=n(21),h=function(e,a){if("LOADING"===a.type)return Object(l.a)(Object(l.a)({},e),{},{loading:!0});if("STOP_LOADING"===a.type)return Object(l.a)(Object(l.a)({},e),{},{loading:!1});if("ADD_FLAG"===a.type)return Object(l.a)(Object(l.a)({},e),{},{flags:[].concat(Object(O.a)(e.flags),[a.payload])});if("ADD_TEAMS"===a.type)return Object(l.a)(Object(l.a)({},e),{},{teams:[].concat(Object(O.a)(e.teams),[a.payload])});throw new Error("no matching action type")},p=c.a.createContext(),f={groups:u,loading:!0,searchTerm:"",flags:[],teams:[]},x=function(e){var a=e.children,n=Object(t.useReducer)(h,f),c=Object(j.a)(n,2),r=c[0],o=c[1];return Object(t.useEffect)((function(){o({type:"LOADING"}),u.map((function(e){return e.teams.map((function(e){var a=b.filter((function(a){return Object.values(a)[0]===e.name}));return o({type:"ADD_FLAG",payload:{name:e.name,symbol:Object.keys(a[0])[0]}})}))})),setTimeout((function(){o({type:"STOP_LOADING"})}),500),o({type:"LOADING"}),u.map((function(e){var a=e.name;return e.teams.map((function(e){var n=e.name,t=e.code;return o({type:"ADD_TEAMS",payload:{group_name:a,name:n,code:t}})}))})),setTimeout((function(){o({type:"STOP_LOADING"})}),500)}),[]),Object(m.jsx)(p.Provider,{value:Object(l.a)({},r),children:a})},g=function(){return Object(t.useContext)(p)},y=function(e){var a,n=e.team,t=g().flags,c=(n.group_name,n.name);n.code;t.forEach((function(e){e.name===c&&(a=e.symbol)}));var r="https://flagcdn.com/h240/".concat(a.replace(/_/g,"-"),".png");return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"team",style:{backgroundImage:"url(".concat(r,")")}})})},N=function(){var e=g().teams;return Object(m.jsx)(m.Fragment,{children:e.map((function(e){return Object(m.jsx)(y,{team:e},e.code)}))})},v=n(23),A=function(){var e=g(),a=e.loading,n=e.teams;return a?Object(m.jsx)("main",{children:Object(m.jsx)("div",{className:"main-container main_container-loading",children:Object(m.jsx)(v.a,{color:"#0084A4",size:"64",sizeUnit:"px",className:"loader"})})}):n.length>1?Object(m.jsx)("main",{children:Object(m.jsx)("div",{className:"main-container main_container-no-results",children:Object(m.jsx)("h2",{children:"No teams matched your search criteria"})})}):Object(m.jsx)("div",{className:"main-container",children:Object(m.jsx)(N,{})})},S=function(){return Object(m.jsx)("main",{children:Object(m.jsxs)("div",{className:"home",children:[Object(m.jsx)(d,{}),Object(m.jsx)(A,{})]})})},E=function(){return Object(m.jsx)("div",{children:"TEAM"})},D=n.p+"static/media/UEFA-EURO-2020.ddf8e590.png",G=function(){return Object(m.jsx)("div",{className:"error",children:Object(m.jsxs)("div",{className:"error-section",children:[Object(m.jsx)("img",{src:D,alt:"Euro 2020 logo",className:"error-logo"}),Object(m.jsx)("h2",{className:"error-info",children:"Oops! Something went wrong"}),Object(m.jsx)(i.b,{to:"/",className:"error-btn",children:"Back Home"})]})})};var k=function(){return Object(m.jsx)(i.a,{basename:"/",children:Object(m.jsxs)(s.c,{children:[Object(m.jsx)(s.a,{exact:!0,path:"/",children:Object(m.jsx)(S,{})}),Object(m.jsx)(s.a,{path:"/team:/id",children:Object(m.jsx)(E,{})}),Object(m.jsx)(s.a,{path:"*",children:Object(m.jsx)(G,{})})]})})};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(x,{children:Object(m.jsx)(k,{})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.ccf74bea.chunk.js.map