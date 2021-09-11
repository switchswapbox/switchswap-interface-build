(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[10],{528:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"c",(function(){return c})),a.d(e,"b",(function(){return s}));a(24);var r=a(533),n=a.n(r);function i(t){return n()(t).format(Number.isInteger(t)?"$0,0":"$0,0.00")}function c(t){return n()(t/100).format("0.0%")}function s(t){return n()(t).format()}},529:function(t,e,a){"use strict";a.d(e,"a",(function(){return j}));var r=a(32),n=a(3),i=a(7),c=a(77),s=a(1),o=["color","variant","children"],l=Object(i.a)("span")((function(t){var e=t.theme,a=t.styleProps,r="light"===e.palette.mode,i=a.color,s=a.variant;return Object(n.a)({height:22,minWidth:22,lineHeight:0,borderRadius:8,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",padding:e.spacing(0,1),color:e.palette.grey[800],fontSize:e.typography.pxToRem(12),fontFamily:e.typography.fontFamily,backgroundColor:e.palette.grey[300],fontWeight:e.typography.fontWeightBold},"default"!==i?Object(n.a)(Object(n.a)(Object(n.a)({},"filled"===s&&Object(n.a)({},function(t){return{color:e.palette[t].contrastText,backgroundColor:e.palette[t].main}}(i))),"outlined"===s&&Object(n.a)({},function(t){return{color:e.palette[t].main,backgroundColor:"transparent",border:"1px solid ".concat(e.palette[t].main)}}(i))),"ghost"===s&&Object(n.a)({},function(t){return{color:e.palette[t][r?"dark":"light"],backgroundColor:Object(c.a)(e.palette[t].main,.16)}}(i))):Object(n.a)(Object(n.a)({},"outlined"===s&&{backgroundColor:"transparent",color:e.palette.text.primary,border:"1px solid ".concat(e.palette.grey[50032])}),"ghost"===s&&{color:r?e.palette.text.secondary:e.palette.common.white,backgroundColor:e.palette.grey[50016]}))}));function j(t){var e=t.color,a=void 0===e?"default":e,i=t.variant,c=void 0===i?"ghost":i,j=t.children,d=Object(r.a)(t,o);return Object(s.jsx)(l,Object(n.a)(Object(n.a)({styleProps:{color:a,variant:c}},d),{},{children:j}))}},569:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return et}));var r=a(527),n=a(501),i=a(22),c=a(545),s=a.n(c),o=a(58),l=a(525),j=a(3),d=a(546),b=a.n(d),p=a(548),h=a.n(p),m=(a(549),a(7)),x=a(77),u=a(47),g=a(556),O=a(437),v=a(169),f=a(482),y=a(528),k=a(90),w=a(1),I=Object(m.a)("div")((function(t){var e=t.theme;return{width:24,height:24,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",color:e.palette.success.main,backgroundColor:Object(x.a)(e.palette.success.main,.16)}})),S=2.6,C=[{data:[20,41,63,33,28,35,50,46,11,26]}];function _(){var t=Object(u.a)(),e=Object(k.a)().translate,a={colors:[t.palette.primary.main],chart:{sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"68%",borderRadius:2}},labels:["1","2","3","4","5","6","7","8"],tooltip:{x:{show:!1},y:{formatter:function(t){return Object(y.b)(t)},title:{formatter:function(){return""}}},marker:{show:!1}}};return Object(w.jsxs)(g.a,{sx:{display:"flex",alignItems:"center",p:3},children:[Object(w.jsxs)(O.a,{sx:{flexGrow:1},children:[Object(w.jsx)(v.a,{variant:"subtitle2",children:e("other.Total Minted NFTs")}),Object(w.jsxs)(f.a,{direction:"row",alignItems:"center",spacing:1,sx:{mt:2,mb:1},children:[Object(w.jsx)(I,{sx:Object(j.a)({},!1),children:Object(w.jsx)(i.a,{width:16,height:16,icon:h.a})}),Object(w.jsxs)(v.a,{component:"span",variant:"subtitle2",children:["+",Object(y.c)(S)]})]}),Object(w.jsx)(v.a,{variant:"h3",children:Object(y.b)(18765)})]}),Object(w.jsx)(b.a,{type:"bar",series:C,options:a,width:60,height:36})]})}var P=a(6),F=a(36),T=a(576),A=a(509),D=a(544),H=Object(m.a)(g.a)((function(t){var e=t.theme;return Object(P.a)({boxShadow:"none",textAlign:"center",backgroundColor:e.palette.primary.lighter},e.breakpoints.up("md"),{height:"100%",display:"flex",textAlign:"left",alignItems:"center",justifyContent:"space-between"})}));function N(t){var e=t.displayName,a=Object(k.a)().translate;return Object(w.jsxs)(H,{children:[Object(w.jsxs)(T.a,{sx:{p:{md:0},pl:{md:5},color:"grey.800"},children:[Object(w.jsxs)(v.a,{gutterBottom:!0,variant:"h4",children:[a("generalApp.welcome"),",",Object(w.jsx)("br",{})," ",e||"...","!"]}),Object(w.jsx)(v.a,{variant:"body2",sx:{pb:{xs:3,xl:5},maxWidth:480,mx:"auto"},children:a("generalApp.slogan")}),Object(w.jsx)(A.a,{variant:"contained",to:"#",component:F.b,children:a("general.learnMore")})]}),Object(w.jsx)(D.b,{sx:{p:3,width:360,margin:{xs:"auto",md:"inherit"}}})]})}var W=a(577),G=a(578),z=a(579),M=a(580),R=a(581),B=a(582),J=a(583),$=a(498),E=a(529),U=a(105);function Y(t){var e=t.title,a=t.tasks,r="light"===Object(u.a)().palette.mode,n=Object(k.a)().translate;return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(g.a,{children:[Object(w.jsx)(W.a,{title:e,sx:{mb:3}}),Object(w.jsx)(U.a,{children:Object(w.jsx)(G.a,{sx:{minWidth:100},children:Object(w.jsxs)(z.a,{children:[Object(w.jsx)(M.a,{children:Object(w.jsxs)(R.a,{children:[Object(w.jsx)(B.a,{children:n("other.Tasks")}),Object(w.jsx)(B.a,{align:"center",children:n("other.Status")})]})}),Object(w.jsx)(J.a,{children:a.map((function(t){return Object(w.jsxs)(R.a,{children:[Object(w.jsx)(B.a,{children:Object(w.jsxs)(O.a,{sx:{display:"flex",alignItems:"center"},children:[Object(w.jsx)($.a,{alt:t.name,src:t.avatar}),Object(w.jsxs)(O.a,{sx:{ml:2},children:[Object(w.jsx)(v.a,{variant:"body2",sx:{color:"text.secondary"},children:n("homework.task.".concat(t.message))}),Object(w.jsxs)(v.a,{variant:"subtitle2",children:[" ",n("homework.priority.".concat(t.priority))]})]})]})}),Object(w.jsx)(B.a,{children:Object(w.jsx)(E.a,{variant:r?"ghost":"filled",color:("in_progress"===t.status?"warning":"completed"===t.status&&"success")||"to_do"===t.status&&"info"||"error",children:n("homework.status.".concat(t.status))})})]},t.id)}))})]})})})]})})}function q(t){var e=t.action,a=t.heading;return Object(w.jsx)(O.a,{sx:{mb:2,mt:4},children:Object(w.jsxs)(O.a,{sx:{display:"flex",alignItems:"center"},children:[Object(w.jsx)(O.a,{sx:{flexGrow:1},children:Object(w.jsx)(v.a,{variant:"h4",children:a})}),e&&Object(w.jsx)(O.a,{sx:{flexShrink:0},children:e})]})})}var K=a(15),L=a(0),Q=a(510);function V(t){var e=t.button,a=t.popover,r=t.icon,n=Object(L.useState)(null),i=Object(K.a)(n,2),c=i[0],s=i[1];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(A.a,{onClick:function(t){s(t.currentTarget)},variant:"contained",startIcon:r,children:e}),Object(w.jsx)(Q.a,{open:Boolean(c),anchorEl:c,onClose:function(){s(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(w.jsx)(O.a,{sx:{p:2,maxWidth:280},children:Object(w.jsx)(v.a,{variant:"body2",sx:{color:"text.secondary"},children:a})})})]})}var X=[{id:"1",name:"Icon IPFS Design",avatar:"./static/mock-images/avatars/avatar_3.jpg",message:"Design IPFS hostable interface",status:"in_progress",priority:"High Priority"},{id:"2",name:"Icon",avatar:"./static/mock-images/avatars/avatar_1.jpg",message:"Deploy Github Workflow",status:"completed",priority:"High Priority"}],Z=[{id:"1",name:"NFT Smart Contract",avatar:"./static/mock-images/avatars/avatar_3.jpg",message:"Generate NFT stored on Crust",status:"completed",priority:"High Priority"},{id:"2",name:"Swap Icon",avatar:"./static/mock-images/avatars/avatar_1.jpg",message:"Swap NFT",status:"in_progress",priority:"High Priority"}],tt=[{id:"1",name:"Gallery Design",avatar:"./static/mock-images/avatars/avatar_3.jpg",message:"Create Gallery for NFT",status:"in_progress",priority:"High Priority"},{id:"2",name:"Swap Icon",avatar:"./static/mock-images/avatars/avatar_1.jpg",message:"Home page",status:"in_progress",priority:"High Priority"},{id:"3",name:"Swap Icon",avatar:"./static/mock-images/avatars/avatar_6.jpg",message:"Proposal",status:"to_do",priority:"Medium Priority"},{id:"4",name:"Swap Icon",avatar:"./static/mock-images/avatars/avatar_4.jpg",message:"NFT Minting Page",status:"to_do",priority:"High Priority"}];function et(){var t=Object(o.a)().themeStretch,e=Object(k.a)().translate;return Object(w.jsx)(l.a,{title:"General: App",children:Object(w.jsxs)(r.a,{maxWidth:!t&&"xl",children:[Object(w.jsxs)(n.a,{container:!0,spacing:3,children:[Object(w.jsx)(n.a,{item:!0,xs:12,children:Object(w.jsx)(N,{displayName:e("generalApp.hello")})}),Object(w.jsx)(n.a,{item:!0,xs:12,md:4,children:Object(w.jsx)(_,{})}),Object(w.jsx)(n.a,{item:!0,xs:12,md:4,children:Object(w.jsx)(_,{})}),Object(w.jsx)(n.a,{item:!0,xs:12,md:4,children:Object(w.jsx)(_,{})})]}),Object(w.jsx)(q,{heading:e("other.Development progress"),action:Object(w.jsx)(V,{button:e("other.Your Proposal"),popover:e("other.Under Development"),icon:Object(w.jsx)(i.a,{icon:s.a})})}),Object(w.jsxs)(n.a,{container:!0,spacing:3,children:[Object(w.jsx)(n.a,{item:!0,xs:12,md:4,children:Object(w.jsx)(Y,{title:e("generalApp.Decentralization SwitchSwap"),tasks:X})}),Object(w.jsx)(n.a,{item:!0,xs:12,md:4,children:Object(w.jsx)(Y,{title:e("generalApp.Smart Contracts Dev"),tasks:Z})}),Object(w.jsx)(n.a,{item:!0,xs:12,md:4,children:Object(w.jsx)(Y,{title:e("generalApp.Interface Design"),tasks:tt})})]})]})})}}}]);
//# sourceMappingURL=10.86f19aac.chunk.js.map