import{r,R as e,F as m,J as l}from"./vendor.c9054506.js";import{H as i}from"./index.4d76aa52.js";import{g as p}from"./index.48383d50.js";import{h as d}from"./home.a231cd76.js";/* empty css              */import"./index.42c3a145.js";import"./axios.8c34e798.js";const j=()=>{const[s,n]=r.exports.useState([]);async function c(){const{data:{data:{membersData:a}}}=await d.all();n(a)}return r.exports.useEffect(()=>{c()},[]),e.createElement("div",{className:"members-wrap"},e.createElement(i,{title:"\u94C2\u91D1\u4F1A\u5458"}),e.createElement(m,{className:"header-mt",defaultActiveKey:"0"},s.map(a=>e.createElement(m.Tab,{title:a.title,key:a.id},a.data.map((t,o)=>e.createElement("div",{className:"members-wrap-contain"},e.createElement(l,{src:p(t.img),width:150,height:150,fit:"fill",className:a.id===0?"members-wrap-image":""}),a.id!==0&&e.createElement("div",null,e.createElement("p",{className:"members-wrap-description"},t.description),e.createElement("div",{className:"members-wrap-price"},e.createElement("p",null,e.createElement("span",null,"\xA5",t.price),e.createElement("span",null,"\xA5",t.prePrice)),e.createElement("span",null,t.comments,"\u8BC4\u8BBA")))))))))};export{j as default};