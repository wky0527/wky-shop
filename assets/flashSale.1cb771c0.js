import{r as s,R as e,M as c,f as n,O as d,F as f,I as h,K as x}from"./vendor.4221d087.js";import{H as b}from"./index.0520608b.js";import{f as u}from"./index.b28a608e.js";/* empty css              */import"./index.a440ebdd.js";const j=()=>{const i=e.createElement(x,null),[o,m]=s.exports.useState(!0),[r,E]=s.exports.useState([]);async function l(){E(u),console.log(r),m(Object.keys(u).length>0)}return s.exports.useEffect(()=>{l()},[]),e.createElement("div",{className:"flash-sale-wrap"},e.createElement(b,{title:"\u9650\u65F6\u62A2\u8D2D",rightTitle:i}),e.createElement(c,{defaultActiveKey:"1"},r.map(t=>e.createElement(c.Tab,{className:"TabPane",title:t.time,key:t.id,description:t.status},e.createElement(n,null,e.createElement(d,{content:"\u8FD8\u6709\u5546\u54C1\u7684\u54E6\uFF01\u53EF\u4EE5\u7EE7\u7EED\u62A2\u8D2D\u7684\u54E6\uFF01",color:"alert",closeable:!0}),t.data.map((a,p)=>e.createElement(n.Item,{key:p,title:a.title,description:e.createElement("div",{className:"flash-sale-list"},e.createElement("span",{className:"flash-sale-price"},"\xA5",a.price),e.createElement("span",{className:"flash-sale-prePrice"},"\xA5",a.prePrice)),prefix:e.createElement(f,{src:a.img,style:{borderRadius:20},fit:"cover",width:80,height:80}),extra:e.createElement("span",{className:"flash-sale-remain"},"\u4EC5\u5269",a.remainNum,"\u4EF6")})))))),e.createElement(h,{loadMore:l,hasMore:o}))};export{j as default};
