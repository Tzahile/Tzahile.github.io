(function(e){function t(t){for(var a,r,l=t[0],s=t[1],c=t[2],p=0,v=[];p<l.length;p++)r=l[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&v.push(i[r][0]),i[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(v.length)v.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"24d4":function(e,t,n){e.exports=n.p+"img/cvFinal.62a75475.jpeg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("appBar"),n("v-main",[n("personalData")],1)],1)},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{on:{mouseover:function(t){e.hover=void 0}}},e._l(e.subjects,(function(t,a){return n("v-row",{key:"subj"+a,staticClass:"pb-4",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"accent--text text-capitalize text-xl-h5 text-h6",attrs:{cols:"12"}},[e._v(" "+e._s(t.title)+" "),n("v-divider")],1),e._l(t.content,(function(t,a){return[n("v-col",{key:t.title,staticClass:"mt-3 text-xl-h6 font-weight-bold",attrs:{cols:"3"},on:{mouseover:function(n){n.stopPropagation(),e.hover=t.title}}},[t.icon?n("v-icon",{staticClass:"mb-1 pr-2",attrs:{color:e.hover===t.title?t.icon.color:"",small:""}},[e._v(" "+e._s(t.icon.shape)+" ")]):e._e(),e._v(" "+e._s(t.title)+" ")],1),n("v-col",{key:"el"+a,staticClass:"mt-3 text-xl-h6",attrs:{cols:"8"},on:{mouseover:function(n){n.stopPropagation(),e.hover=t.title}}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12"}},[e._v(" "+e._s(t.value)+" ")]),t.subvalue?n("v-col",{staticClass:"font-weight-light",domProps:{innerHTML:e._s(t.subvalue)}}):e._e()],1)],1)]}))],2)})),1)},l=[],s=n("fcf4"),c={data:function(){return{hover:void 0,subjects:[{title:"Personal Information",content:[{icon:{shape:"mdi-account",color:"#ffc088"},title:"Full Name",value:"Izhak Lehmann"},{icon:{shape:"mdi-map-marker-radius",color:"green"},title:"Location",value:"Helsinki, Finland"},{icon:{shape:"mdi-cake-variant",color:"orange"},title:"Age",value:"27"},{icon:{shape:"mdi-gmail",color:"#D44638"},title:"E-mail",value:"gotenks33@gmail.com"},{icon:{shape:"mdi-face-profile",color:s["a"].brown.darken2},title:"Profile",value:"An avid learner with strong problem-solving skills, attention to detail and high sense of responsibility"}]},{title:"Experience",content:[{title:"April '18 - Present",value:"Elbit Systems - Land C4I and Cyber",subvalue:"\n              <b>Fullstack software engineer</b>\n              <br />\n              <ul>\n                <li>\n                  Design and implementation of a client-server web application for a generic solution to support development of radio devices<br />\n                  - Frontend: <i>Vue.js</i><br/>\n                  - Backend: <i>C#</i>\n                </li>\n                <li>\n                  Development of a generic raw-data analysis distributed infrastructure solution in a form of a web application, designed for handling Big Data with easily configurable analysis environment<br />\n                  - Frontend: <i>Vue.js</i><br /> \n                  - Main backend server: <i>Node.js</i><br/>\n                  - Analysing micro-service: <i>Python</i><br/>\n                </li>\n                <li>\n                  Participation in Hackathons dedicated to actual problems of society<br/>\n                  - Covid-19, Mobile application for measuring user's heartbeat rate<br/>\n                  - Python-based software for mapping the inner structure of a building from distance\n                </li>\n              </ul>\n              "}]},{title:"Education",content:[{title:"2015 - 2019",value:"Tel-Aviv University, Bachelor degree in Electrical Engineering",subvalue:"Computers, Energy, Signal Processing"},{title:"2005 - 2011",value:"Dror Experimental Educational Campus",subvalue:"Physics, Computers"}]},{title:"Skills",content:[{icon:{shape:"mdi-web",color:s["a"].blue.darken3},title:"Frontend",value:"Vuejs, HTML5, CSS3",subvalue:"Webpack, Sass, Chrome dev-tools"},{icon:{shape:"mdi-server",color:"red"},title:"Backend",value:"Nodejs (js), Python",subvalue:"Deno (ts), C#"},{icon:{shape:"mdi-database",color:s["a"].yellow.darken3},title:"Database",value:"PostgreSQL"},{icon:{shape:"mdi-google-circles-extended",color:s["a"].purple.lighten2},title:"Message Queuing",value:"Kafka"},{icon:{shape:"mdi-docker",color:s["a"].blue.lighten2},title:"DevOps",value:"Docker"},{icon:{shape:"mdi-folder-network",color:s["a"].blueGrey.lighten1},title:"Workflow",value:"Git, Jira"},{icon:{shape:"mdi-microsoft-visual-studio-code",color:"#1f9cf0"},title:"IDEs",value:"VSCode"}]},{title:"Services",content:[{title:"2012 - 2015",value:"IDF Navy"},{title:"2011 - 2012",value:"Magen David Adom",subvalue:"First Aider"}]},{title:"Hobbies",content:[{icon:{shape:"mdi-music",color:"#000"},title:"Music",value:"Playing the piano, singing"},{icon:{shape:"mdi-bike",color:s["a"].purple.darken1},title:"Sports",value:"Running, biking, swimming"},{icon:{shape:"mdi-chess-knight",color:"#D00020"},title:"Board Games",value:"Chess, Catan"}]},{title:"Languages",content:[{title:"Hebrew",value:"Native"},{title:"English",value:"Fluent"}]}]}}},u=c,p=n("2877"),v=n("6544"),d=n.n(v),f=n("62ad"),m=n("a523"),h=n("ce7e"),b=n("132d"),g=n("0fd9"),k=Object(p["a"])(u,r,l,!1,null,null,null),y=k.exports;d()(k,{VCol:f["a"],VContainer:m["a"],VDivider:h["a"],VIcon:b["a"],VRow:g["a"]});var x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{attrs:{flat:"",prominent:"",height:e.$vuetify.breakpoint.xs?160:200,app:"",color:"primary",dark:""}},[a("v-row",{attrs:{"no-gutter":"",align:"end"}},[a("v-col",{staticClass:"pa-0",attrs:{"align-self":"start",cols:"auto"}},[a("v-avatar",{attrs:{tile:"",size:"150"}},[a("v-img",{attrs:{src:n("24d4")}})],1)],1),a("v-col",{staticClass:"py-0",class:{"px-0":e.$vuetify.breakpoint.xs},attrs:{xl:"9",xs:"3",md:"8",sm:"8",align:"start"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-xl-h5 text-lg-h5 text-md-h5 text-sm-h5 text-h6"},[e._v(" Izhak Lehmann ")]),a("v-list-item-subtitle",{staticClass:"text-xl-h6 text-lg-h6 text-md-h6 text-sm-h6 text-subtitle-1"},[e._v(" Fullstack Developer ")])],1)],1),e.$vuetify.breakpoint.xs?a("v-col",{staticClass:"py-0"},[a("profLinks")],1):e._e()],1),e.$vuetify.breakpoint.xs?e._e():a("v-col",{staticClass:"py-0",attrs:{cols:"4",xs:"2"}},[a("profLinks")],1),a("v-spacer"),e.$vuetify.breakpoint.xs?e._e():a("v-col",{staticClass:"py-0",attrs:{md:"5",align:"end"}},[a("v-btn",{attrs:{icon:"",href:"mailto:gotenks33@gmail.com"}},[a("v-icon",[e._v("mdi-gmail")])],1),a("v-btn",{attrs:{icon:"",href:"https://wa.me/972545269666"}},[a("v-icon",[e._v("mdi-whatsapp")])],1)],1)],1)],1)},w=[],_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-btn",{attrs:{small:e.$vuetify.breakpoint.xs,large:!e.$vuetify.breakpoint.xs,icon:"",href:"https://github.com/Tzahile",target:"_blank"}},[n("v-icon",[e._v("mdi-github")])],1),n("v-btn",{attrs:{icon:"",small:e.$vuetify.breakpoint.xs,large:!e.$vuetify.breakpoint.xs,href:"https://stackoverflow.com/users/5762431/tzahi-leh",target:"_blank"}},[n("v-icon",[e._v("mdi-stack-overflow")])],1),n("v-btn",{attrs:{small:e.$vuetify.breakpoint.xs,large:!e.$vuetify.breakpoint.xs,icon:"",href:"https://www.linkedin.com/in/tzahile",target:"_blank"}},[n("v-icon",[e._v("mdi-linkedin")])],1)],1)},C=[],j={data:function(){return{}},name:"profLinks"},V=j,P=n("8336"),S=Object(p["a"])(V,_,C,!1,null,null,null),D=S.exports;d()(S,{VBtn:P["a"],VIcon:b["a"]});var O={components:{profLinks:D}},E=O,L=n("40dc"),$=n("8212"),A=n("adda"),I=n("da13"),F=n("5d23"),M=n("2fa4"),B=Object(p["a"])(E,x,w,!1,null,null,null),N=B.exports;d()(B,{VAppBar:L["a"],VAvatar:$["a"],VBtn:P["a"],VCol:f["a"],VIcon:b["a"],VImg:A["a"],VListItem:I["a"],VListItemContent:F["a"],VListItemSubtitle:F["b"],VListItemTitle:F["c"],VRow:g["a"],VSpacer:M["a"]});var T={name:"App",components:{personalData:y,appBar:N}},z=T,H=n("7496"),G=n("f6c4"),J=Object(p["a"])(z,i,o,!1,null,null,null),R=J.exports;d()(J,{VApp:H["a"],VMain:G["a"]});var Q=n("9483");Object(Q["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var W=n("f309");a["a"].use(W["a"]);var q=new W["a"]({theme:{themes:{light:{primary:"4fafbe",secondary:s["a"].grey.lighten1,accent:"3095a3",error:s["a"].red.darken1,info:s["a"].blue.lighten3,success:s["a"].green.lighten2,warning:s["a"].amber.darken1}}}});n("d5e8"),n("5363");a["a"].config.productionTip=!1,new a["a"]({vuetify:q,render:function(e){return e(R)}}).$mount("#app")}});
//# sourceMappingURL=app.f85e7fc6.js.map