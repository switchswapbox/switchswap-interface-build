(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[13],{469:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return rt}));var r=a(444),i=a(420),s=a(427),n=a(18),c=a(449),o=a.n(c),l=a(32),j=a(48),d=a(443),b=a(46),m=a(3),h=a(450),x=a.n(h),g=a(452),p=a.n(g),O=(a(453),a(7)),u=a(65),v=a(39),y=a(458),f=a(356),k=a(150),w=a(401),I=(a(134),a(454)),S=a.n(I);function _(t){return S()(t).format()}var C=a(1),P=Object(O.a)("div")((function(t){var e=t.theme;return{width:24,height:24,display:"flex",borderRadius:"50%",alignItems:"center",justifyContent:"center",color:e.palette.success.main,backgroundColor:Object(u.a)(e.palette.success.main,.16)}})),F=2.6,T=[{data:[20,41,63,33,28,35,50,46,11,26]}];function H(){var t,e=Object(v.a)(),a={colors:[e.palette.primary.main],chart:{sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"68%",borderRadius:2}},labels:["1","2","3","4","5","6","7","8"],tooltip:{x:{show:!1},y:{formatter:function(t){return _(t)},title:{formatter:function(){return""}}},marker:{show:!1}}};return Object(C.jsxs)(y.a,{sx:{display:"flex",alignItems:"center",p:3},children:[Object(C.jsxs)(f.a,{sx:{flexGrow:1},children:[Object(C.jsx)(k.a,{variant:"subtitle2",children:"Total Minted NFTs"}),Object(C.jsxs)(w.a,{direction:"row",alignItems:"center",spacing:1,sx:{mt:2,mb:1},children:[Object(C.jsx)(P,{sx:Object(m.a)({},!1),children:Object(C.jsx)(n.a,{width:16,height:16,icon:p.a})}),Object(C.jsxs)(k.a,{component:"span",variant:"subtitle2",children:["+",(t=F,S()(t/100).format("0.0%"))]})]}),Object(C.jsx)(k.a,{variant:"h3",children:_(18765)})]}),Object(C.jsx)(x.a,{type:"bar",series:T,options:a,width:60,height:36})]})}var N=a(6),W=a(470),D=a(448),G=Object(O.a)(y.a)((function(t){var e=t.theme;return Object(N.a)({boxShadow:"none",textAlign:"center",backgroundColor:e.palette.primary.lighter},e.breakpoints.up("md"),{height:"100%",display:"flex",textAlign:"left",alignItems:"center",justifyContent:"space-between"})}));function M(t){var e=t.displayName;return Object(C.jsxs)(G,{children:[Object(C.jsxs)(W.a,{sx:{p:{md:0},pl:{md:5},color:"grey.800"},children:[Object(C.jsxs)(k.a,{gutterBottom:!0,variant:"h4",children:["Welcome,",Object(C.jsx)("br",{})," ",e||"...","!"]}),Object(C.jsx)(k.a,{variant:"body2",sx:{pb:{xs:3,xl:5},maxWidth:480,mx:"auto"},children:"Everything is decentralized here!"}),Object(C.jsx)(s.a,{variant:"contained",to:"#",component:l.b,children:"Learn More"})]}),Object(C.jsx)(D.b,{sx:{p:3,width:360,margin:{xs:"auto",md:"inherit"}}})]})}var R=a(459),z=a(471),A=a(472),B=a(473),J=a(474),L=a(475),E=a(476),Y=a(477),q=a(416),K=a(28),Q=["color","variant","children"],U=Object(O.a)("span")((function(t){var e=t.theme,a=t.styleProps,r="light"===e.palette.mode,i=a.color,s=a.variant;return Object(m.a)({height:22,minWidth:22,lineHeight:0,borderRadius:8,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",padding:e.spacing(0,1),color:e.palette.grey[800],fontSize:e.typography.pxToRem(12),fontFamily:e.typography.fontFamily,backgroundColor:e.palette.grey[300],fontWeight:e.typography.fontWeightBold},"default"!==i?Object(m.a)(Object(m.a)(Object(m.a)({},"filled"===s&&Object(m.a)({},function(t){return{color:e.palette[t].contrastText,backgroundColor:e.palette[t].main}}(i))),"outlined"===s&&Object(m.a)({},function(t){return{color:e.palette[t].main,backgroundColor:"transparent",border:"1px solid ".concat(e.palette[t].main)}}(i))),"ghost"===s&&Object(m.a)({},function(t){return{color:e.palette[t][r?"dark":"light"],backgroundColor:Object(u.a)(e.palette[t].main,.16)}}(i))):Object(m.a)(Object(m.a)({},"outlined"===s&&{backgroundColor:"transparent",color:e.palette.text.primary,border:"1px solid ".concat(e.palette.grey[50032])}),"ghost"===s&&{color:r?e.palette.text.secondary:e.palette.common.white,backgroundColor:e.palette.grey[50016]}))}));function V(t){var e=t.color,a=void 0===e?"default":e,r=t.variant,i=void 0===r?"ghost":r,s=t.children,n=Object(K.a)(t,Q);return Object(C.jsx)(U,Object(m.a)(Object(m.a)({styleProps:{color:a,variant:i}},n),{},{children:s}))}var X=a(97);function Z(t){var e=t.title,a=t.tasks,r="light"===Object(v.a)().palette.mode;return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(y.a,{children:[Object(C.jsx)(z.a,{title:e,sx:{mb:3}}),Object(C.jsx)(X.a,{children:Object(C.jsx)(A.a,{sx:{minWidth:100},children:Object(C.jsxs)(B.a,{children:[Object(C.jsx)(J.a,{children:Object(C.jsxs)(L.a,{children:[Object(C.jsx)(E.a,{children:"Tasks"}),Object(C.jsx)(E.a,{align:"center",children:"Status"})]})}),Object(C.jsx)(Y.a,{children:a.map((function(t){return Object(C.jsxs)(L.a,{children:[Object(C.jsx)(E.a,{children:Object(C.jsxs)(f.a,{sx:{display:"flex",alignItems:"center"},children:[Object(C.jsx)(q.a,{alt:t.name,src:t.avatar}),Object(C.jsxs)(f.a,{sx:{ml:2},children:[Object(C.jsx)(k.a,{variant:"body2",sx:{color:"text.secondary"},children:t.message}),Object(C.jsxs)(k.a,{variant:"subtitle2",children:[" ",t.category]})]})]})}),Object(C.jsx)(E.a,{children:Object(C.jsx)(V,{variant:r?"ghost":"filled",color:("in_progress"===t.status?"warning":"completed"===t.status&&"success")||"to_do"===t.status&&"info"||"error",children:Object(R.a)(t.status)})})]},t.id)}))})]})})})]})})}function $(t){var e=t.action,a=t.heading,r=t.sx;return Object(C.jsx)(f.a,{sx:Object(m.a)({mb:1,mt:4},r),children:Object(C.jsxs)(f.a,{sx:{display:"flex",alignItems:"center"},children:[Object(C.jsx)(f.a,{sx:{flexGrow:1},children:Object(C.jsx)(k.a,{variant:"h4",gutterBottom:!0,children:a})}),e&&Object(C.jsx)(f.a,{sx:{flexShrink:0},children:e})]})})}var tt=[{id:"1",name:"Icon IPFS Design",avatar:"./static/mock-images/avatars/avatar_3.jpg",message:"Design IPFS hostable interface",status:"in_progress",category:"High Priority"},{id:"2",name:"Icon",avatar:"./static/mock-images/avatars/avatar_1.jpg",message:"Deploy Github Workflow",status:"completed",category:"High Priority"}],et=[{id:"1",name:"NFT Smart Contract",avatar:"./static/mock-images/avatars/avatar_3.jpg",message:"Generate NFT stored on Crust",status:"completed",category:"High Priority"},{id:"2",name:"Swap Icon",avatar:"./static/mock-images/avatars/avatar_1.jpg",message:"Swap NFT",status:"in_progress",category:"High Priority"}],at=[{id:"1",name:"Gallery Design",avatar:"./static/mock-images/avatars/avatar_3.jpg",message:"Create Gallery for NFT",status:"in_progress",category:"High Priority"},{id:"2",name:"Swap Icon",avatar:"./static/mock-images/avatars/avatar_1.jpg",message:"Home page",status:"in_progress",category:"High Priority"},{id:"3",name:"Swap Icon",avatar:"./static/mock-images/avatars/avatar_6.jpg",message:"Proposal",status:"to_do",category:"Medium Priority"},{id:"4",name:"Swap Icon",avatar:"./static/mock-images/avatars/avatar_4.jpg",message:"NFT Minting Page",status:"to_do",category:"High Priority"}];function rt(){var t=Object(j.a)().themeStretch;return Object(C.jsx)(d.a,{title:"General: App",children:Object(C.jsxs)(r.a,{maxWidth:!t&&"xl",children:[Object(C.jsxs)(i.a,{container:!0,spacing:3,children:[Object(C.jsx)(i.a,{item:!0,xs:12,children:Object(C.jsx)(M,{displayName:"NFT Lovers"})}),Object(C.jsx)(i.a,{item:!0,xs:12,md:4,children:Object(C.jsx)(H,{})}),Object(C.jsx)(i.a,{item:!0,xs:12,md:4,children:Object(C.jsx)(H,{})}),Object(C.jsx)(i.a,{item:!0,xs:12,md:4,children:Object(C.jsx)(H,{})})]}),Object(C.jsx)($,{heading:"Development progress",action:Object(C.jsx)(s.a,{variant:"contained",component:l.b,to:b.a.root,startIcon:Object(C.jsx)(n.a,{icon:o.a}),children:"Your Proposal"})}),Object(C.jsxs)(i.a,{container:!0,spacing:3,children:[Object(C.jsx)(i.a,{item:!0,xs:12,md:4,children:Object(C.jsx)(Z,{title:"Decentralization SwitchSwap",tasks:tt})}),Object(C.jsx)(i.a,{item:!0,xs:12,md:4,children:Object(C.jsx)(Z,{title:"Smart Contracts Dev",tasks:et})}),Object(C.jsx)(i.a,{item:!0,xs:12,md:4,children:Object(C.jsx)(Z,{title:"Interface Design",tasks:at})})]})]})})}}}]);
//# sourceMappingURL=13.5c9b7e88.chunk.js.map