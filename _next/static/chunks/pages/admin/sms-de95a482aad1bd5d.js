(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5740],{28359:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/sms",function(){return t(39314)}])},38554:function(e,n){"use strict";n.Z={button:{color:"#FFFFFF",textTransform:"capitalize",fontSize:"14px",fontStyle:"normal",fontWeight:"normal",width:"80px",height:{xs:"40px",sm:"48px"}},container:{padding:"24px",width:"100%",position:"relative",minWidth:"0px",overflowWrap:"break-word",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",borderRadius:"16px",margin:"auto",borderColor:"#E2E8F0"},tabsContainer:{marginTop:function(e){return e.spacing(8)},border:function(e){return"1px solid ".concat(e.palette.bacap.border)},minHeight:"800px",borderRadius:"8px",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px"},customizedButtonLink:{cursor:"pointer",color:"#8BC24A",textDecoration:"underline",fontWeight:600}}},55688:function(e,n,t){"use strict";var r=t(85893),o=t(67294),a=t(45697),i=t.n(a),c=t(14866),s=t(46901);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var u=o.forwardRef((function(e,n){return(0,r.jsx)(s.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){l(e,n,t[n])}))}return e}({elevation:6,ref:n,variant:"filled"},e))}));function d(e){var n=e.openSnackbar,t=e.message,a=e.severity,i=e.closeHandlerCB,s=void 0===i?function(){}:i,l=(0,o.useState)(n),d=l[0],f=l[1];(0,o.useEffect)((function(){f(n)}),[n]);var p=function(){f(!1),s()};return(0,r.jsx)(c.Z,{open:d,autoHideDuration:3e3,onClose:p,children:(0,r.jsx)(u,{onClose:p,severity:a,sx:{width:"100%"},children:t})})}d.propTypes={openSnackbar:i().bool,message:i().string,severity:i().string},n.Z=d},31338:function(e,n,t){"use strict";t.d(n,{x:function(){return c},P:function(){return s}});var r=t(85893),o=t(87357);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=function(e){var n=e.children,t=e.value,c=e.index,s=i(e,["children","value","index"]);return(0,r.jsx)("div",function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}({role:"tabpanel",hidden:t!==c,id:"custom-tabpanel-".concat(c),"aria-labelledby":"custom-tab-".concat(c)},s,{children:t===c&&(0,r.jsx)(o.Z,{sx:{p:3},children:n})}))};var s=function(e){return{id:"custom-tab-".concat(e),"aria-controls":"custom-tabpanel-".concat(e)}}},39314:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return xe}});var r=t(34051),o=t.n(r),a=t(85893),i=t(95243),c=t(67294),s=t(15861),l=t(87357),u=t(88409),d=t(40044),f=t(86886),p=t(31338),h=t(11057),x=t(61903),m=t(78462),b=t(97212),v=t(98619),y=t(59334),g=t(27948),j={phonebookContainer:{border:function(e){return"1px solid ".concat(e.palette.bacap.border)},minHeight:"500px",maxHeight:"500px",borderRadius:"8px",background:"#fafafa",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",overflow:"auto"},searchPhonebookTextField:{width:"170px",margin:1,background:"#FFFFFF",position:"absolute",zIndex:1},contactInformationItem:{display:"flex",alignItems:"baseline"}},C=t(96486),S=t.n(C),O=t(64666),E=t(37645),w=t(6514),Z=t(58951),k=t(31425),R=t(98456),T=/^09[0-9]{9}$/g,_="Cell number is required.";function A(e,n){var t=e.find((function(e){return e.cellnumber===n}));return Boolean(t)}var N=function(e,n,t,r){if(null!==t){if(""===t)return"ERROR_MISSING_CELLNUMBER";if(function(e){return!e.match(T)}(t))return"ERROR_INVALID_FORMAT_CELLNUMBER";if("EDIT"===e){if(r&&t!==r)return A(n,t)?"ERROR_CONTACT_ALREADY_EXIST":""}else{if("ADD"!==e)return"";if(A(n,t))return"ERROR_CONTACT_ALREADY_EXIST"}}},D=function(e){switch(e){case"ERROR_MISSING_CELLNUMBER":case"ERROR_MISSING_CELLNUMBER":return _;case"ERROR_INVALID_FORMAT_CELLNUMBER":return"Invalid cell number format.";case"ERROR_CONTACT_ALREADY_EXIST":return"Cell number already exists in the conact list.";default:return""}};var P=function(e){var n,t,r=e.contacts,o=e.open,i=e.handleClose,s=e.handleAddContact,u=e.loadingButton,d=(0,c.useState)(""),f=d[0],p=d[1],m=(0,c.useState)(null),b=m[0],v=m[1],y=(0,c.useState)(u),g=y[0],C=y[1];return(0,c.useEffect)((function(){C(u)}),[u]),(0,a.jsxs)(O.Z,{fullWidth:!0,maxWidth:"xs",open:o,onClose:i,children:[(0,a.jsx)(E.Z,{children:"Add Contact"}),(0,a.jsxs)(w.Z,{children:[(0,a.jsxs)(l.Z,{sx:j.contactInformationItem,children:[(0,a.jsx)(l.Z,{sx:{mr:9},children:(0,a.jsx)(Z.Z,{children:"Name:"})}),(0,a.jsx)(x.Z,{id:"outlined-basic",variant:"standard",size:"small",onChange:function(e){p(e.target.value)}})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(l.Z,{sx:j.contactInformationItem,children:[(0,a.jsx)(l.Z,{sx:{mr:3},children:(0,a.jsx)(Z.Z,{children:"Cell Number:"})}),(0,a.jsx)(x.Z,{error:(null===(n=N("ADD",r,b,null))||void 0===n?void 0:n.length)>0,helperText:D(N("ADD",r,b)),id:"outlined-basic",variant:"standard",size:"small",onChange:function(e){v(e.target.value)},type:"tel"})]})]}),(0,a.jsxs)(k.Z,{children:[(0,a.jsx)(h.Z,{disabled:g,size:"small",onClick:i,children:"CANCEL"}),(0,a.jsxs)(h.Z,{disabled:(null===(t=N("ADD",r,b))||void 0===t?void 0:t.length)>0||null===b||g,size:"small",variant:"contained",onClick:function(){s({name:f,cellnumber:b}),p(""),v(null),i()},children:[(0,a.jsx)("span",{style:{display:g?"none":"block"},children:"SAVE"}),(0,a.jsx)(R.Z,{size:24,color:"secondary",sx:{display:g?"block":"none"}})]})]})]})};var I=function(e){var n,t,r=e.loadingButton,o=e.open,i=e.contact,s=e.contacts,u=e.handleClose,d=e.handleDeleteContact,f=e.handleEditContact,p=(0,c.useState)(!1),m=p[0],b=p[1],v=(0,c.useState)(i.name),y=v[0],g=v[1],C=(0,c.useState)(i.cellnumber),S=C[0],T=C[1],_=(0,c.useState)(r),A=_[0],P=_[1];return(0,c.useEffect)((function(){g(i.name),T(i.cellnumber)}),[i]),(0,c.useEffect)((function(){P(r)}),[r]),(0,a.jsxs)(O.Z,{fullWidth:!0,maxWidth:"xs",open:o,onClose:u,children:[(0,a.jsx)(E.Z,{children:"Contact Details"}),(0,a.jsxs)(w.Z,{children:[(0,a.jsxs)(l.Z,{sx:j.contactInformationItem,children:[(0,a.jsx)(l.Z,{sx:{mr:9},children:(0,a.jsx)(Z.Z,{children:"Name:"})}),(0,a.jsx)(x.Z,{disabled:!m,id:"outlined-basic",onChange:function(e){g(e.target.value)},value:y,variant:"standard",size:"small"})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(l.Z,{sx:j.contactInformationItem,children:[(0,a.jsx)(l.Z,{sx:{mr:3},children:(0,a.jsx)(Z.Z,{children:"Cell Number:"})}),(0,a.jsx)(x.Z,{error:(null===(n=N("EDIT",s,S,i.cellnumber))||void 0===n?void 0:n.length)>0,helperText:D(N("EDIT",s,S,i.cellnumber)),onChange:function(e){T(e.target.value)},disabled:!m,id:"outlined-basic",value:S,variant:"standard",size:"small",type:"tel"})]})]}),(0,a.jsx)("br",{}),(0,a.jsxs)(k.Z,{children:[m?(0,a.jsxs)(h.Z,{disabled:(null===(t=N("EDIT",s,S,i.cellnumber))||void 0===t?void 0:t.length)>0||A,size:"small",variant:"outlined",onClick:function(){return f({id:i.id,name:y,cellnumber:S})},children:[(0,a.jsx)("span",{style:{display:A?"none":"block"},children:"SAVE"}),(0,a.jsx)(R.Z,{size:24,color:"secondary",sx:{display:A?"block":"none"}})]}):(0,a.jsx)(h.Z,{disabled:A,size:"small",variant:"outlined",onClick:function(){b(!0),T(i.cellnumber)},children:"EDIT"}),m?(0,a.jsx)(h.Z,{disabled:A,size:"small",variant:"outlined",onClick:function(){g(i.name),T(i.cellnumber),b(!1)},children:"CANCEL"}):(0,a.jsxs)(h.Z,{disabled:A,size:"small",color:"error",variant:"outlined",onClick:function(){return d(i)},children:[(0,a.jsx)("span",{style:{display:A?"none":"block"},children:"DELETE"}),(0,a.jsx)(R.Z,{size:24,color:"secondary",sx:{display:A?"block":"none"}})]}),(0,a.jsx)(h.Z,{disabled:A,size:"small",onClick:u,children:"CLOSE"})]})]})},L=t(55688);var F=function(e){var n=e.handleAddContact,t=e.handleDeleteContact,r=e.handleEditContact,o=e.loading,i=e.loadingButton,s=e.open,u=e.originalContacts,d=e.setOpen,f=(0,c.useState)(null),p=f[0],C=f[1],O=(0,c.useState)(u),E=O[0],w=O[1],Z=(0,c.useState)(!1),k=Z[0],R=Z[1],T=(0,c.useState)(""),_=T[0],A=T[1],N=(0,c.useState)(!1),D=N[0],F=N[1],M=(0,c.useState)(!1),B=M[0],z=M[1],W=(0,c.useState)({}),q=W[0],H=W[1];return(0,c.useEffect)((function(){w(u)}),[u]),(0,a.jsxs)("div",{children:[B&&Object.entries(q).length>0&&(0,a.jsx)(L.Z,{openSnackbar:!0,message:q.message,severity:q.severity}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.Z,{variant:"contained",color:"primary",onClick:function(){F(!0)},children:"ADD CONTACT"}),(0,a.jsx)(P,{contacts:u,open:D,handleClose:function(){F(!1)},handleAddContact:n,loadingButton:i})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{children:o?"Updating List...":(0,a.jsxs)(l.Z,{sx:j.phonebookContainer,children:[(0,a.jsx)(l.Z,{sx:j.searchPhonebookTextField,children:(0,a.jsx)(x.Z,{id:"outlined-basic",label:"Search...",onChange:function(e){var n=e.target.value;A(n);var t,r,o=isNaN(n);if(R(o),""===e.target.value)w(u);else{var a=(t=E,r=n,S().filter(t,S().flow(S().identity,S().values,S().join,S().toLower,S().partialRight(S().includes,r))));w(a)}},variant:"outlined",size:"small",style:{width:"100%"}})}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(m.Z,{children:(null===E||void 0===E?void 0:E.length)>0?E.map((function(e){var n="checkbox-list-label-".concat(e.cellnumber);return(0,a.jsx)(b.ZP,{disablePadding:!0,children:(0,a.jsx)(v.Z,{role:void 0,dense:!0,onClick:function(){return function(e){z(!1),H({}),d(!0),C(e)}(e)},children:(0,a.jsx)(y.Z,{id:n,primary:""===e.name?e.cellnumber:e.name,secondary:""!==_&&!k&&""!==e.name&&e.cellnumber})})},e.cellnumber)})):(0,a.jsx)(g.Z,{children:(0,a.jsx)("p",{children:"No Results"})})}),p&&(0,a.jsx)(I,{contact:p,contacts:E,handleClose:function(){d(!1),C(null)},handleDeleteContact:t,handleEditContact:r,loadingButton:i,open:s})]})})]})},M=t(9473),B=t(3539),z=t(94054),W=t(33841),q=t(18972),H=t(18360),U=t(27392);var G=function(e){var n=e.columns,t=e.loadingReports,r=e.rows,o=e.handleReportTypeChange,i=(0,c.useState)(U.Ry.SEASONAL),s=i[0],l=i[1],u=(0,M.v9)((function(e){return e.dashboard.reportType}));return(0,c.useEffect)((function(){l(u)}),[u]),(0,a.jsxs)("div",{children:[n.length>0&&(0,a.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:"10px"},children:(0,a.jsxs)(z.Z,{sx:{m:1,width:{xs:"100%",sm:"100%",md:300}},size:"small",children:[(0,a.jsx)(W.Z,{id:"report-type",children:"Bulletin Type"}),(0,a.jsxs)(H.Z,{labelId:"report-type",id:"report-type",value:s,label:"Bulletin Type",onChange:o,children:[(0,a.jsx)(q.Z,{value:U.Ry.SEASONAL,children:"Seasonal Crop Recommendations"}),(0,a.jsx)(q.Z,{value:U.Ry.TEN_DAY,children:"10-Day Crop Recommendations"}),(0,a.jsx)(q.Z,{value:U.Ry.SPECIAL_WEATHER,children:"Special Weather Recommendations"})]})]})}),(0,a.jsx)("div",{style:{height:400,width:"100%"},children:(0,a.jsx)(B._,{rows:r,columns:n,loading:t,pageSize:5,rowsPerPageOptions:[5]})})]})},Y=t(38554);function K(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){K(e,n,t[n])}))}return e}var X=function(e){var n=e.columns,t=e.contacts,r=e.getContacts,o=e.handleAddContact,i=e.handleDeleteContact,h=e.handleEditContact,x=e.handleOpenAddContact,m=e.handleReportTypeChange,b=e.loading,v=e.loadingButton,y=e.loadingReports,g=e.open,j=e.rows,C=e.setOpen,S=e.toAddContact,O=(0,c.useState)(S?1:0),E=O[0],w=O[1];return(0,a.jsxs)("div",{children:[(0,a.jsx)(s.Z,{variant:"h5",children:"SMS Management"}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"View Text (SMS) versions"})," of generated Crop Recommendations and send them to different individuals via SMS."]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Manage your own phonebook"})," for ease of sending texts to individuals."]}),(0,a.jsxs)(l.Z,{sx:Y.Z.tabsContainer,children:[(0,a.jsxs)(u.Z,{value:E,onChange:function(e,n){w(n)},"aria-label":"basic tabs example",children:[(0,a.jsx)(d.Z,V({label:"SMS"},(0,p.P)(0))),(0,a.jsx)(d.Z,V({label:"PHONEBOOK"},(0,p.P)(1)))]}),(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(p.x,{value:E,index:0,children:(0,a.jsx)(G,{columns:n,handleReportTypeChange:m,loadingReports:y,rows:j})}),(0,a.jsx)(p.x,{value:E,index:1,children:(0,a.jsx)(f.ZP,{container:!0,children:(0,a.jsx)(f.ZP,{item:!0,xs:12,md:4,children:(0,a.jsx)(F,{getContacts:r,handleAddContact:o,handleDeleteContact:i,handleEditContact:h,handleOpenAddContact:x,loading:b,loadingButton:v,open:g,originalContacts:t,setOpen:C})})})})]})]})]})},J=t(66383),$=t(53063),Q=t(47426),ee=t(77715),ne=t(63835),te=t(40558),re=t(11163),oe=t(87006),ae=t(72882),ie=t(55113),ce=t(7906),se=t(53184),le=t(53816),ue=t(53252),de=t(295);function fe(e,n,t,r,o,a,i){try{var c=e[a](i),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,o)}function pe(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){fe(a,r,o,i,c,"next",e)}function c(e){fe(a,r,o,i,c,"throw",e)}i(void 0)}))}}function he(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var xe=(0,i.Z)((function(e){var n=e.loading,t=e.user,r=e.onBtnLogoutClick,i=(0,ne.aC)(),u=(0,re.useRouter)(),d=(0,M.I0)(),f=(0,c.useState)([]),p=f[0],x=f[1],m=(0,c.useState)([]),b=m[0],v=m[1],y=(0,c.useState)([]),g=y[0],j=y[1],C=(0,c.useState)([]),S=C[0],Z=C[1],R=(0,c.useState)(!1),T=R[0],_=R[1],A=(0,c.useState)(!1),N=A[0],D=A[1],P=(0,c.useState)({}),I=P[0],F=P[1],B=(0,c.useState)(!1),z=B[0],W=B[1],q=(0,c.useState)(!1),H=q[0],U=q[1],G=(0,c.useState)([]),Y=G[0],K=G[1],V=(0,c.useState)(!1),fe=V[0],xe=V[1],me=(0,M.v9)((function(e){return e.dashboard.reportType})),be=function(){var e=pe(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,W(!0),e.next=4,(0,te.K2)();case 4:n=e.sent,Z(n),W(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),ve=function(e){var n=e.logs;return(0,a.jsx)(ae.Z,{component:ie.Z,children:(0,a.jsxs)(ce.Z,{sx:{minWidth:650},"arial-label":"simple-table",children:[(0,a.jsx)(se.Z,{children:(0,a.jsxs)(le.Z,{children:[(0,a.jsx)(ue.Z,{children:"Number"}),(0,a.jsxs)(ue.Z,{children:["Date\xa0",(0,a.jsx)("span",{style:{fontSize:"10px"},children:"(MM/DD/YYYY)"})]}),(0,a.jsx)(ue.Z,{children:"Message"}),(0,a.jsx)(ue.Z,{children:"Recipients"})]})}),(0,a.jsx)(de.Z,{children:n.map((function(e,n){var t=JSON.parse(e),r=new Date(t.dateSent).toLocaleString();return(0,a.jsxs)(le.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,a.jsx)(ue.Z,{component:"th",scope:"row",children:n+1}),(0,a.jsx)(ue.Z,{children:r}),(0,a.jsx)(ue.Z,{children:t.sentMessage}),(0,a.jsx)(ue.Z,{children:t.recipientsWithName})]},t.dateSent)}))})]})})},ye=function(e){var n=e.report;return(0,a.jsxs)(O.Z,{fullWidth:!0,maxWidth:"md",open:H,onClose:Ee,children:[(0,a.jsx)(E.Z,{children:"SMS Recommendation Logs"}),(0,a.jsxs)(w.Z,{dividers:!0,children:[(0,a.jsx)(s.Z,{variant:"body2",children:"This is where you can check where you send your texts message."}),(0,a.jsx)("br",{}),(0,a.jsx)(ve,{logs:null===n||void 0===n?void 0:n.logs})]}),(0,a.jsx)(k.Z,{children:(0,a.jsx)(h.Z,{variant:"outlined",onClick:Ee,children:"Close"})})]})};(0,c.useEffect)((function(){if(null!==i.user&&!i.loading){var e=function(){var e=pe(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,oe._8)(i.user.uid);case 3:n=e.sent,j(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e(),be()}}),[i]),(0,c.useEffect)((function(){if(g.length>0){var e=g.filter((function(e){return e.type===me}));ge(e)}}),[g]);var ge=function(e){var n={action:"Action",logs:"Logs",crop:"Crop",text_recommendation:"Text-Form Recommendation",region:"Region",province:"Province",municipality:"Municipality",month:"Month",type:"Type",updated_by:"Updated by",date_created:"Date Created"},t=[];["action","logs","crop","text_recommendation","region","province","municipality","month","type","updated_by","date_created"].forEach((function(e){"action"===e?t.push({field:e,headerName:n[e],width:100,editable:!1,sortable:!1,disableColumnMenu:!0,renderCell:function(e){return(0,a.jsx)(h.Z,{variant:"outlined",size:"small",onClick:function(n){n.stopPropagation(),u.push({pathname:"/admin/sms/viewSMS/",query:{docId:e.row.docId}})},children:"SEND"})}}):"logs"===e?t.push({field:e,headerName:n[e],width:100,editable:!1,sortable:!1,disableColumnMenu:!0,renderCell:function(e){var n;return(null===(n=e.row.logs)||void 0===n?void 0:n.length)>0?(0,a.jsx)(h.Z,{variant:"outlined",size:"small",onClick:function(){U(!0),K(e.row)},children:"VIEW LOGS"}):(0,a.jsx)(l.Z,{sx:{fontWeight:"bold"},children:"UNSENT"})}}):t.push({field:e,headerName:n[e],width:150,editable:!1,sortable:!1,disableColumnMenu:!0})}));var r=e.map((function(e,n){var t;return he(t={id:n,docId:e.id,logs:e.logs,crop:e.crop,text_recommendation:e.smsRecommendations||"No SMS Recommendations available"},"logs",e.logs),he(t,"region",e.region),he(t,"province",e.province),he(t,"municipality",e.municipality),he(t,"month",e.month),he(t,"type",e.type),he(t,"updated_by",e.updated_by),he(t,"date_created","".concat(e.date_created.toDate().toDateString(),"\n          ").concat(e.date_created.toDate().toLocaleTimeString("it-IT",ee.W6))),t}));x(r),v(t)};(0,c.useEffect)((function(){void 0===Object.keys(u.query)[0]&&(_(!1),F({})),"isSent"===Object.keys(u.query)[0]&&(W(!1),_(!0),je({message:"true"===u.query.isSent?"Successfully sent Crop Recommendation via text!":"Unsuccessful in sending Crop Recommendation via text.",severity:"true"===u.query.isSent?"success":"error"}))}),[u]),(0,c.useEffect)((function(){i.loading||i.user||u.push("/admin/login")}),[i.user,i.loading,u]);var je=function(e){F(e)},Ce=function(){var e=pe(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,xe(!0),e.next=4,(0,te.rE)(n);case 4:if(!e.sent){e.next=8;break}return e.next=8,be();case 8:xe(!1),_(!0),F({message:"Successfully added a New Contact!",severity:"success"}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}(),Se=function(){var e=pe(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,xe(!0),e.next=4,(0,te.GK)({docId:n.id});case 4:if(t=e.sent,D(!1),!t){e.next=9;break}return e.next=9,be();case 9:xe(!1),_(!0),F({openSnackbar:!0,message:"Successfully deleted contact: ".concat(""===n.name?n.cellnumber:n.name,"!"),severity:"success"}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}(),Oe=function(){var e=pe(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,xe(!0),e.next=4,(0,te.mP)({docId:n.id,name:n.name,cellnumber:n.cellnumber});case 4:if(t=e.sent,xe(!1),D(!1),!t){e.next=10;break}return e.next=10,be();case 10:_(!0),F({openSnackbar:!0,message:"Successfully edit contact: ".concat(""===n.name?n.cellnumber:n.name,"!"),severity:"success"}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}(),Ee=function(){U(!1)};return(0,a.jsxs)(J.Z,{loading:n,user:t,onBtnLogoutClick:r,accLevel:Q.DW.ADMIN,children:[(0,a.jsx)(ye,{report:Y}),(0,a.jsx)(X,{columns:b,contacts:S,getContacts:be,handleAddContact:Ce,handleDeleteContact:Se,handleEditContact:Oe,handleReportTypeChange:function(e){var n=e.target.value,t=g.filter((function(e){return e.type===n}));K(ge(t)),d((0,$.uq)(n))},loading:z,loadingReports:n,onBtnClick:r,open:N,rows:p,setOpen:D,toAddContact:u.query.toAddContact,user:i.user,loadingButton:fe}),!z&&T&&(0,a.jsx)(L.Z,{openSnackbar:!0,message:I.message,severity:I.severity,closeHandler:function(){_(!1)}})]})}))},40558:function(e,n,t){"use strict";t.d(n,{rE:function(){return C},GK:function(){return S},mP:function(){return O},K2:function(){return E}});var r=t(34051),o=t.n(r),a=t(9669),i=t.n(a),c=t(99431);function s(e,n,t,r,o,a,i){try{var c=e[a](i),s=c.value}catch(l){return void t(l)}c.done?n(s):Promise.resolve(s).then(r,o)}function l(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){s(a,r,o,i,c,"next",e)}function c(e){s(a,r,o,i,c,"throw",e)}i(void 0)}))}}function u(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function d(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){f(e,n,t[n])}))}return e}function x(e,n){return!n||"object"!==b(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function m(e,n){return m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},m(e,n)}var b=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function v(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=p(e);if(n){var o=p(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return x(this,t)}}var y={BASE_API_URL:"https://amia-cis-cktt.onrender.com/api",CREATE_CONTACT:"".concat("https://amia-cis-cktt.onrender.com/api","/contact"),DELETE_CONTACT:"".concat("https://amia-cis-cktt.onrender.com/api","/contact"),EDIT_CONTACT:"".concat("https://amia-cis-cktt.onrender.com/api","/contact"),GET_CONTACTS:"".concat("https://amia-cis-cktt.onrender.com/api","/contacts"),PHONEBOOK:"phonebook"},g=function(e){!function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(c,e);var n,t,r,a=v(c);function c(){return u(this,c),a.apply(this,arguments)}return n=c,(t=[{key:"createContact",value:function(e){var n=this;return l(o().mark((function t(){var r,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createRequestObject({body:e});case 2:return r=t.sent,t.next=5,i()(h({},r,{url:y.CREATE_CONTACT,method:"POST"}));case 5:return a=t.sent,t.abrupt("return",a.data);case 7:case"end":return t.stop()}}),t)})))()}},{key:"deleteContact",value:function(e){var n=this;return l(o().mark((function t(){var r,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createRequestObject({body:e});case 2:return r=t.sent,t.next=5,i()(h({},r,{url:y.DELETE_CONTACT,method:"DELETE"}));case 5:return a=t.sent,t.abrupt("return",a.data);case 7:case"end":return t.stop()}}),t)})))()}},{key:"editContact",value:function(e){var n=this;return l(o().mark((function t(){var r,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createRequestObject({body:e});case 2:return r=t.sent,t.next=5,i()(h({},r,{url:y.EDIT_CONTACT,method:"PATCH"}));case 5:return a=t.sent,t.abrupt("return",a.data);case 7:case"end":return t.stop()}}),t)})))()}},{key:"getContacts",value:function(){var e=this;return l(o().mark((function n(){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.createRequestObject({});case 2:return t=n.sent,n.next=5,i()(h({},t,{url:y.GET_CONTACTS,method:"GET"}));case 5:return r=n.sent,n.abrupt("return",r.data.contacts);case 7:case"end":return n.stop()}}),n)})))()}}])&&d(n.prototype,t),r&&d(n,r),c}(c.Z),j=new g,C=j.createContact.bind(j),S=j.deleteContact.bind(j),O=j.editContact.bind(j),E=j.getContacts.bind(j)}},function(e){e.O(0,[3662,6284,2866,9964,9522,1903,6279,6295,4039,2882,7092,6572,3539,1998,1050,9774,2888,179],(function(){return n=28359,e(e.s=n);var n}));var n=e.O();_N_E=n}]);