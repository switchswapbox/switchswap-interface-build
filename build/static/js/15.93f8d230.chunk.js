(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[15],{525:function(e,t,n){"use strict";var c=n(3),i=n(32),a=n(8),r=n.n(a),l=n(217),s=n(0),o=n(437),j=n(1),d=["children","title"],u=Object(s.forwardRef)((function(e,t){var n=e.children,a=e.title,r=void 0===a?"":a,s=Object(i.a)(e,d);return Object(j.jsxs)(o.a,Object(c.a)(Object(c.a)({ref:t},s),{},{children:[Object(j.jsx)(l.a,{children:Object(j.jsx)("title",{children:r})}),n]}))}));u.propTypes={children:r.a.node.isRequired,title:r.a.string},t.a=u},581:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var c=n(528),i=n(482),a=n(505),r=n(58),l=n(525),s=n(15),o=n(0),j=n(579),d=n(592),u=n(576),b=n(169),h=n(593),x=n(437),O=n(509),p=n(1),f=[{label:"Upload your file on Crust Network",description:"You should have a small amount of $CRU on your wallet and Crust Wallet installed"},{label:"Customize the preface of your file",description:"You will get a beautiful QR card after this step."},{label:"Upload QR Card and Metadata",description:"Upload on Crust Network"},{label:"Generate NFT",description:"Upload to Polygon Smart Contract"}];function m(){var e=Object(o.useState)(0),t=Object(s.a)(e,2),n=t[0],c=t[1],i=function(){c((function(e){return e+1}))},r=function(){c((function(e){return e-1}))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(j.a,{activeStep:n,orientation:"vertical",children:f.map((function(e,t){return Object(p.jsxs)(d.a,{children:[Object(p.jsx)(u.a,{optional:2===t?Object(p.jsx)(b.a,{variant:"caption",children:"Last step"}):null,children:e.label}),Object(p.jsxs)(h.a,{children:[Object(p.jsx)(b.a,{children:e.description}),Object(p.jsxs)(x.a,{sx:{mt:3},children:[Object(p.jsx)(O.a,{variant:"contained",onClick:i,children:t===f.length-1?"Finish":"Continue"}),Object(p.jsx)(O.a,{disabled:0===t,onClick:r,children:"Back"})]})]})]},e.label)}))}),n===f.length&&Object(p.jsxs)(a.a,{sx:{p:3,mt:3,bgcolor:"grey.50012"},children:[Object(p.jsx)(b.a,{paragraph:!0,children:"Trasaction: 0x123456"}),Object(p.jsx)(O.a,{onClick:function(){c(0)},children:"Reset"})]})]})}var g=n(3),v=["Upload your file on Crust Network","Customize the preface of your file","Upload QR Card and Metadata","Generate NFT"];function w(){var e=Object(o.useState)(0),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(o.useState)(new Set),r=Object(s.a)(i,2),l=r[0],h=r[1],f=function(e){return 20===e},m=function(e){return l.has(e)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(j.a,{activeStep:n,children:v.map((function(e,t){var n={},c={};return f(t)&&(c.optional=Object(p.jsx)(b.a,{variant:"caption",children:"Optional"})),m(t)&&(n.completed=!1),Object(p.jsx)(d.a,Object(g.a)(Object(g.a)({},n),{},{children:Object(p.jsx)(u.a,Object(g.a)(Object(g.a)({},c),{},{children:e}))}),e)}))}),n===v.length?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(a.a,{sx:{p:3,my:3,minHeight:120,bgcolor:"grey.50012"},children:Object(p.jsx)(b.a,{sx:{my:1},children:"All steps completed - you're finished"})}),Object(p.jsxs)(x.a,{sx:{display:"flex"},children:[Object(p.jsx)(x.a,{sx:{flexGrow:1}}),Object(p.jsx)(O.a,{onClick:function(){c(0)},children:"Reset"})]})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(a.a,{sx:{p:3,my:3,minHeight:120,bgcolor:"grey.50012"},children:Object(p.jsxs)(b.a,{sx:{my:1},children:[" Step ",n+1]})}),Object(p.jsxs)(x.a,{sx:{display:"flex"},children:[Object(p.jsx)(O.a,{color:"inherit",disabled:0===n,onClick:function(){c((function(e){return e-1}))},sx:{mr:1},children:"Back"}),Object(p.jsx)(x.a,{sx:{flexGrow:1}}),f(n)&&Object(p.jsx)(O.a,{color:"inherit",onClick:function(){if(!f(n))throw new Error("You can't skip a step that isn't optional.");c((function(e){return e+1})),h((function(e){var t=new Set(e.values());return t.add(n),t}))},sx:{mr:1},children:"Skip"}),Object(p.jsx)(O.a,{variant:"contained",onClick:function(){var e=l;m(n)&&(e=new Set(e.values())).delete(n),c((function(e){return e+1})),h(e)},children:n===v.length-1?"Finish":"Next"})]})]})]})}function k(){var e=Object(r.a)().themeStretch;return Object(p.jsx)(l.a,{title:"NFT Minting",children:Object(p.jsx)(c.a,{maxWidth:!e&&"xl",children:Object(p.jsxs)(i.a,{spacing:5,children:[Object(p.jsx)(a.a,{sx:{p:3,width:"100%",boxShadow:function(e){return e.customShadows.z8}},children:Object(p.jsx)(m,{})}),Object(p.jsx)(a.a,{sx:{p:3,width:"100%",boxShadow:function(e){return e.customShadows.z8}},children:Object(p.jsx)(w,{})})]})})})}}}]);
//# sourceMappingURL=15.93f8d230.chunk.js.map