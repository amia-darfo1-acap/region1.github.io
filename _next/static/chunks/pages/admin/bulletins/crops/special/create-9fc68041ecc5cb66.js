(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4169],{13063:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/bulletins/crops/special/create",function(){return n(52358)}])},52358:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var r=n(34051),o=n.n(r),u=n(85893),a=n(67294),i=n(9473),c=n(87682),s=n(30340),l=n(66383),f=n(95243),p=n(30560),d=n(1029),v=n(16327),y=n(61690),b=n(87006),m=n(24530),h=n(901),g=n(76490),_=n(33050),S=n(4463);function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t,n){var r=(0,a.useState)([]),o=r[0],u=r[1];return(0,a.useEffect)((function(){if((null===e||void 0===e?void 0:e.data)&&(null===t||void 0===t?void 0:t.data)&&n.length>0&&0===o.length){var r=e.data.map((function(e){return e.province})).filter((function(e,t,n){return n.indexOf(e)===t})),a=e.data.reduce((function(e,t){return void 0===e[t.province]&&(e[t.province]=[]),e[t.province]=w(e[t.province]).concat(w(t.municipalities)),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){O(e,t,n[t])}))}return e}({},e)}),{}),i=w(n);i.forEach((function(t){t.disabled=!r.includes(t.label),t.municipalities.forEach((function(n){var r=e.data.findIndex((function(e){return e.province===n.province&&e.municipalities.includes(n.label)}));t.disabled?n.disabled=!0:(n.disabled=!a[t.label].includes(n.label),n.signal=r>-1?e.data[r].signal:0)}))})),u(i)}}),[e,t,n,o]),{affectedprovinces:o}}var P=n(68193),L=n(23766),x=n(41375),I=n(94640),R=n(16013),k=n(27392),C=n(47426),N=n(53063),D=n(12671),T=n(87661),j=n(77715);function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function B(e,t,n,r,o,u,a){try{var i=e[u](a),c=i.value}catch(s){return void n(s)}i.done?t(c):Promise.resolve(c).then(r,o)}function G(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var u=e.apply(t,n);function a(e){B(u,r,o,a,i,"next",e)}function i(e){B(u,r,o,a,i,"throw",e)}a(void 0)}))}}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){M(e,t,n[t])}))}return e}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);a=!0);}catch(c){i=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var F=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};var K={sel_province:null,sel_municipality:null,sel_crop:null,sel_stage:null,sel_activity:[],sel_month:null,processed:!1,loading:!1,error:"",success:"",sel_condition:{id:0,from:"weather_condition",label:C.MW.WAY_BELOW_NORMAL.label}},Z={url:"",filename:""};var U=(0,f.Z)((function(e){var t=e.user,n=e.onBtnLogoutClick,r=e.loading,f=(0,a.useState)(K),E=f[0],O=f[1],w=(0,a.useState)([]),Y=w[0],B=w[1],U=(0,a.useState)([]),V=U[0],J=U[1],X=(0,a.useState)(null),$=X[0],q=X[1],z=(0,I.Z)(E.sel_province,E.sel_municipality),Q=z.days,ee=z.loading,te=z.error,ne=z.summary,re=H((0,c.ky)(d.K.GLOBAL_COLLECTIONS,d.K.CYCLONE_ADVISORY),2),oe=re[0],ue=re[1],ae=H((0,c.ky)(p.M.WEATHER_FORECASTS,"".concat("ilocos","/").concat(p.M.SUB_SPECIAL_COMMON,"/").concat(p.M.COMMON_SPECIAL_TYPE.WIND_SPEED)),2),ie=ae[0],ce=ae[1],se=(0,a.useState)([]),le=se[0],fe=se[1],pe=A(ie,oe,le).affectedprovinces,de=(0,L.Z)(E.sel_province,pe),ve=(0,_.Z)(E.sel_province),ye=ve.cropcalendar,be=ve.loading,me=ve.error,he=(0,g.Z)(ye,E.sel_municipality),ge=(0,S.Z)(Y,(0,j.aV)(!1),he),_e=ge.cropslist,Se=ge.uniquecropstages,Ee=ge.error,Oe=(0,P.Z)($,null,R.q.SPECIAL,!0),we=Oe.recommendations,Ae=Oe.farmoperations,Pe=Oe.loading,Le=Oe.error,xe=(0,x.Z)(we),Ie=xe.group,Re=xe.error,ke=(0,i.v9)((function(e){return e.reports})),Ce=ke.status,Ne=ke.report,De=(0,i.v9)((function(e){return e.dashboard.reportType})),Te=(0,i.v9)((function(e){return e.dashboard.isEnglish})),je=(0,a.useState)(!0),Ye=je[0],Be=je[1],Ge=(0,a.useState)(!1),Me=Ge[0],We=Ge[1],He=(0,a.useRef)(!1),Fe=(0,a.useState)(""),Ke=Fe[0],Ze=Fe[1],Ue=(0,a.useState)(Z),Ve=Ue[0],Je=Ue[1],Xe=(0,a.useState)(k.BF),$e=Xe[0],qe=Xe[1],ze=(0,i.I0)();(0,a.useEffect)((function(){He.current=!0;var e=function(){var e=G(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.$m)();case 3:t=e.sent,He&&fe(t.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){He.current=!1}}),[]),(0,a.useEffect)((function(){ze((0,m.Km)([])),ze((0,D.s_)())}),[ze]),(0,a.useEffect)((function(){null!==ne&&O((function(e){return W({},e,{sel_month:{label:(0,j.aV)()}})}))}),[ne]),(0,a.useEffect)((function(){Be(r||be||Pe||ee||ue===h.G.PENDING||ce===h.G.PENDING)}),[r,be,Pe,ee,ue,ce]),(0,a.useEffect)((function(){Je(Z)}),[Te]),(0,a.useEffect)((function(){if(""!==me||""!==Le||""!==te||""!==Ee){var e=me||Le||te||Ee;O((function(t){return W({},t,{error:e})}))}else O((function(e){return W({},e,{error:""})}))}),[Ee,Le,te,me]),(0,a.useEffect)((function(){null===E.sel_municipality||ee||ue===h.G.PENDING||Ze((function(e){var t,n,r,o;return(0,T.smsWriter)({type:T.SMS_TYPE.SPECIAL,replacements:(o={},M(o,T.REPLACE_KEYS.SPECIAL.TYPHOON_NAME,(null===oe||void 0===oe||null===(t=oe.meta)||void 0===t?void 0:t.typhoon_name)||"-"),M(o,T.REPLACE_KEYS.SPECIAL.TYPHOON_SIGNAL,(null===E||void 0===E||null===(n=E.sel_municipality)||void 0===n?void 0:n.signal)||0),M(o,T.REPLACE_KEYS.SPECIAL.MUNICIPALITY,(null===E||void 0===E||null===(r=E.sel_municipality)||void 0===r?void 0:r.label)||"-"),o)})}))}),[Q,ee,oe,ue,E.sel_municipality]),(0,a.useEffect)((function(){Ce===h.G.FULLFILLED&&null!==Ne&&He.current&&qe((function(e){return W({},e,{msg:"Success! Bulletin report created.",loading:!1,savesuccess:!0,docId:Ne.id})}))}),[Ce,Ne]),(0,a.useEffect)((function(){Re||null===Ie||ze((0,m.Km)(Ie))}),[Ie,Re,ze]),(0,a.useEffect)((function(){if(!r)if(Se.length>0){var e=Se.map((function(e){return e.code})).toString(),t=Se.map((function(e){return e.label})).toString();q(e),O((function(e){return W({},e,{sel_crop:_e.map((function(e){return e.label})).toString().split(",").join(", "),sel_stage:t})}))}else ze((0,m.Km)([])),null!==E.sel_municipality&&O((function(e){return W({},e,{error:"No crop stages are available for this date on ".concat(e.sel_municipality,".")})}))}),[Se,_e,r,,ze]);var Qe=function(){var e=G(o().mark((function e(){var t,n,r,u,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===Ve.url){e.next=3;break}return We(!0),e.abrupt("return");case 3:return O((function(e){return W({},e,{loading:!0,error:"",success:""})})),e.prev=4,t={region:"ilocos",province:E.sel_province,municipality:E.sel_municipality,date:(new Date).toDateString(),operation:"preview",language:Te?"en":"tag"},We(!0),O((function(e){return W({},e,{loading:!0,error:""})})),e.next=10,(0,b.U1)(t);case 10:n=e.sent,r=new Blob([n],{type:"application/pdf"}),(u={}).href=URL.createObjectURL(r),u.download="".concat(E.sel_province,"_").concat(E.sel_municipality,".pdf"),Je((function(e){return W({},e,{url:u.href,filename:u.download})})),O((function(e){return W({},e,{loading:!1,success:"Bulletin preview created."})})),e.next=25;break;case 19:e.prev=19,e.t0=e.catch(4),a="",void 0!==e.t0.response&&(a=void 0!==e.t0.response.data&&"[object Blob]"===F(e.t0.response.data)?e.t0.response.data:""),""===a&&(a=e.t0.message),O((function(e){return W({},e,{loading:!1,error:a})}));case 25:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(){return e.apply(this,arguments)}}(),et=function(){var e=G(o().mark((function e(){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:qe(W({},$e,{loading:!0,msg:"Saving report..."}));try{n={region:"ilocos",province:E.sel_province,municipality:E.sel_municipality,date:(new Date).toDateString(),operation:"create",language:Te?"en":"tag"},ze((0,y.tR)(n)).unwrap().then((function(){De!==k.Ry.SPECIAL_WEATHER&&(ze((0,N.uq)(k.Ry.SPECIAL_WEATHER)),ze((0,y.RC)({uid:t.uid,type:k.Ry.SPECIAL_WEATHER})))})).catch((function(e){He.current&&qe((function(t){return W({},t,{msg:e,loading:!1,savesuccess:!1,docId:null})}))}))}catch(o){r="",void 0!==o.response&&(r=void 0!==o.response.data&&"[object Blob]"===F(o.response.data)?o.response.data:""),""===r&&(r=o.message),O((function(e){return W({},e,{loading:!1,error:r})}))}case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.jsx)(l.Z,{loading:r,user:t,onBtnLogoutClick:n,accLevel:C.DW.ADMIN,children:(0,u.jsx)(s.Z,{optsprovinces:pe,optsmunicipalities:de,optscrops:_e,optscropstages:Se,optsactivities:Ae,sel_options:E,loading:Ye,isloadingreport:Ce===h.G.PENDING,isdisabled:!1===(null===oe||void 0===oe?void 0:oe.has_cyclone),open:Me,message:$e,smstext:Ke,pageTitle:"Special Weather Bulletin",pageDescription:"Create <strong>Special Weather</strong> crop recommendations bulletins. Finalized bulletins will be automatically uploaded to the site for public download.",pdfPreview:Ve,onSelectItemChange:function(e,t){var n=t.from,r=t.label;if(Je(Z),V.length>0&&J([]),""!==E.error&&O((function(e){return W({},e,{error:""})})),Object.keys(t).includes("id"))switch(n){case"province":q(null),O((function(e){return W({},e,{sel_province:r,sel_municipality:null,sel_crop:null,sel_stage:null,sel_activity:null})}));break;case"municipality":q(null),O((function(e){return W({},e,{sel_municipality:r,sel_crop:null,sel_stage:null,sel_activity:null})})),B(ye.filter((function(e){return e.municipality===r})))}else if("province"===n){var o=E.sel_month;O(W({},K,{sel_month:o})),q(null)}else"municipality"===n&&(O(W({},E,{sel_municipality:null,sel_crop:null,sel_day:null,sel_stage:null,sel_activity:null})),q(null))},handlePreview:Qe,handleSave:et,toggleViewerOpen:function(){We((function(e){return!e}))},resetSelections:function(){var e=E.sel_month;O(W({},K,{sel_month:e})),q(null),ze((0,m.Km)([]))},togglePrompt:function(){qe((function(e){return W({},k.BF,{isOpen:!e.isOpen})}))}})})}))},87682:function(e,t,n){"use strict";n.d(t,{ky:function(){return p},Kx:function(){return d},m$:function(){return v},tl:function(){return y}});var r=n(34051),o=n.n(r),u=n(67294),a=n(25321),i=n(96772);function c(e,t,n,r,o,u,a){try{var i=e[u](a),c=i.value}catch(s){return void n(s)}i.done?t(c):Promise.resolve(c).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var u=e.apply(t,n);function a(e){c(u,r,o,a,i,"next",e)}function i(e){c(u,r,o,a,i,"throw",e)}a(void 0)}))}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}function p(e,t){var n=(0,u.useState)(null),r=n[0],c=n[1],l=(0,u.useState)(!0),f=l[0],p=l[1],d=(0,u.useState)(""),v=d[0],y=d[1],b=(0,u.useRef)(!0);return(0,u.useEffect)((function(){var n=function(){var n=s(o().mark((function n(){var r,u;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=(0,a.JU)(i.db,e,t),n.next=4,(0,a.QT)(r);case 4:(u=n.sent).exists()&&b.current&&(c(u.data()),p(!1)),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),y(n.t0.message),p(!1);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();return n(),function(){return b.current=!1}}),[e,t]),[r,f,v]}function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=(0,u.useState)([]),c=r[0],l=r[1],p=(0,u.useState)(!0),d=p[0],v=p[1],y=(0,u.useState)(""),b=y[0],m=y[1],h=(0,u.useRef)(!0);return(0,u.useEffect)((function(){var r=function(){var r=s(o().mark((function r(){var u,c,s;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,u=(0,a.hJ)(i.db,e),c=n||(0,a.IO)(u,(0,a.Xo)(t,"asc")),r.next=5,(0,a.PL)(c);case 5:s=r.sent,h.current&&(l(s.docs.map((function(e){return f({},e.data())}))),v(!1)),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(0),m(r.t0.message),v(!1);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(){return r.apply(this,arguments)}}();return r(),function(){return h.current=!1}}),[e,t,n]),{documents:c,loading:d,error:b}}function v(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=(0,u.useState)([]),l=c[0],p=c[1],d=(0,u.useState)(!0),v=d[0],y=d[1],b=(0,u.useState)(""),m=b[0],h=b[1],g=(0,u.useRef)(!0);return(0,u.useEffect)((function(){var u=function(){var u=s(o().mark((function u(){var c,s;return o().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,c=(0,a.IO)((0,a.hJ)(i.db,e,t,n),(0,a.Xo)(r)),o.next=4,(0,a.PL)(c);case 4:s=o.sent,g.current&&(p(s.docs.map((function(e){return f({},e.data())}))),y(!1)),o.next=12;break;case 8:o.prev=8,o.t0=o.catch(0),h(o.t0.message),y(!1);case 12:case"end":return o.stop()}}),u,null,[[0,8]])})));return function(){return u.apply(this,arguments)}}();return u(),function(){return g.current=!1}}),[e,t,n,r]),{documents:l,loading:v,error:m}}function y(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",c=arguments.length>4?arguments[4]:void 0,l=(0,u.useState)([]),p=l[0],d=l[1],v=(0,u.useState)(!0),y=v[0],b=v[1],m=(0,u.useState)(""),h=m[0],g=m[1],_=(0,u.useRef)(!0);return(0,u.useEffect)((function(){var u=function(){var u=s(o().mark((function u(){var s,l;return o().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,s=(0,a.hJ)(i.db,e,t,n),""!==r&&(s=(0,a.IO)(s,(0,a.Xo)(r))),c&&(s=(0,a.IO)(s,(0,a.b9)(c))),o.next=6,(0,a.PL)(s);case 6:l=o.sent,_.current&&(d(l.docs.map((function(e){return f({},e.data())}))),b(!1)),o.next=14;break;case 10:o.prev=10,o.t0=o.catch(0),g(o.t0.message),b(!1);case 14:case"end":return o.stop()}}),u,null,[[0,10]])})));return function(){return u.apply(this,arguments)}}();return u(),function(){return _.current=!1}}),[e,t,n,r,c]),{documents:p,loading:y,error:h}}},1029:function(e,t,n){"use strict";n.d(t,{K:function(){return g},d:function(){return _}});var r=n(34051),o=n.n(r),u=n(94763),a=n(96772),i=n(47426),c=n(27392);function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t,n,r,o,u,a){try{var i=e[u](a),c=i.value}catch(s){return void n(s)}i.done?t(c):Promise.resolve(c).then(r,o)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var u=e.apply(t,n);function a(e){l(u,r,o,a,i,"next",e)}function i(e){l(u,r,o,a,i,"throw",e)}a(void 0)}))}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function y(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?s(e):t}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}var m=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}var g={MEDIA_ASSETS:"n_page_media",ASSETS:"n_page_assets",PAGE_SEARCH:"n_page_search",GLOBAL_COLLECTIONS:"w_services",TYPHOON_ADVISORY:"typhoon_advisory",CYCLONE_ADVISORY:"cyclone_advisory"},_=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(n,e);var t=h(n);function n(){var e;p(this,n);var r=s(e=t.apply(this,arguments));d(s(e),"getPageAssetsDoc",function(){var e=f(o().mark((function e(t,n){var u,a,i=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=i.length>2&&void 0!==i[2]&&i[2],a=[],e.prev=2,e.next=5,r.getDocumentData(g.ASSETS,t);case 5:if(a=e.sent){e.next=8;break}return e.abrupt("return",[]);case 8:if(n){e.next=10;break}return e.abrupt("return",a);case 10:if(!u){e.next=14;break}return e.abrupt("return",a.data.filter((function(e){return e.page===n})));case 14:return e.abrupt("return",a.data.filter((function(e){return e.page===n})).map((function(e){return e.url})));case 15:e.next=21;break;case 17:throw e.prev=17,e.t0=e.catch(2),console.error(e.t0.message),new Error(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(t,n){return e.apply(this,arguments)}}());var u=s(e);d(s(e),"getTyphoonAdvisory",f(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.doc(u.db,g.GLOBAL_COLLECTIONS,g.TYPHOON_ADVISORY),e.next=3,u.getDoc(t);case 3:if(!(n=e.sent).exists()){e.next=6;break}return e.abrupt("return",n.data());case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}}),e)}))));var l=s(e);return d(s(e),"getWeatherForecast",function(){var e=f(o().mark((function e(t,n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.getNestedCollectionData(g.WEATHER_FORECASTS,t,n,"name");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),d(s(e),"getPdfDownloadURL",function(){var e=f(o().mark((function e(t){var n,r,u,s=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=s.length>1&&void 0!==s[1]?s[1]:c.Ry.SEASONAL,r="",e.t0=n,e.next=e.t0===c.Ry.SEASONAL?5:e.t0===c.Ry.TEN_DAY?7:e.t0===c.Ry.SPECIAL_WEATHER?9:11;break;case 5:return r=i.Do.PDF_STORAGE_SEASONAL,e.abrupt("break",12);case 7:return r=i.Do.PDF_STORAGE_TENDAY,e.abrupt("break",12);case 9:return r=i.Do.PDF_STORAGE_SPECIAL,e.abrupt("break",12);case 11:return e.abrupt("break",12);case 12:return e.prev=12,u=(0,a.iH)(a.tO,"".concat(r,"/").concat(t)),e.next=16,(0,a.Jt)(u);case 16:return e.abrupt("return",e.sent);case 19:throw e.prev=19,e.t1=e.catch(12),new Error(e.t1.message);case 22:case"end":return e.stop()}}),e,null,[[12,19]])})));return function(t){return e.apply(this,arguments)}}()),e}return n}(u.Z)}},function(e){e.O(0,[6284,2866,9964,9522,1903,6279,6295,4039,2882,7092,6572,1050,3523,7702,1241,9774,2888,179],(function(){return t=13063,e(e.s=t);var t}));var t=e.O();_N_E=t}]);