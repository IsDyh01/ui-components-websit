import{d as u,a as c,o as _,b as m,e as n,f as o,p,h as l,_ as r}from"./index-9a4b852a.js";const t=e=>(p("data-v-10c65c83"),e=e(),l(),e),x={class:"container"},h=t(()=>n("span",null,"普通菜单",-1)),v=t(()=>n("span",null,"无限层级菜单",-1)),f=u({__name:"menu",setup(e){const a=[{name:"导航1",icon:"document",index:"1"},{name:"导航2",icon:"document",index:"2"},{name:"导航3",icon:"document",index:"3",children:[{name:"导航3-1",icon:"document",index:"3-1"}]}],i=[{name:"导航1",icon:"Document",index:"1"},{name:"导航2",icon:"Document",index:"2"},{name:"导航3",icon:"Document",index:"3",children:[{name:"导航3-1",icon:"Document",index:"3-1",children:[{name:"导航3-1-1",icon:"Document",index:"3-1-1",children:[{name:"导航3-1-1-1",icon:"Document",index:"3-1-1-1"}]}]}]}];return(D,I)=>{const d=c("ui-menu"),s=c("ui-recursionMenu");return _(),m("div",x,[n("div",null,[h,o(d,{data:a,defaultActive:"2"})]),n("div",null,[v,o(s,{data:i,defaultActive:"3-1-1-1"})])])}}});const S=r(f,[["__scopeId","data-v-10c65c83"]]);export{S as default};
