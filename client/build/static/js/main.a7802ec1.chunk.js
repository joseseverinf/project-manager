(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,c){},27:function(e,t,c){},50:function(e,t,c){},83:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(13),r=c.n(s),o=(c(50),c(18),c(14)),i=c(6),l=c(7),j=c(8),d=c(16),b=c(5),u=(c(27),c(3));var m=function(e){var t=e.Register,c=Object(a.useState)({name:"",email:"",password:""}),n=Object(l.a)(c,2),s=n[0],r=n[1];return Object(u.jsx)("div",{children:Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(s)},children:Object(u.jsxs)("div",{className:"form-inner",children:[Object(u.jsx)("h2",{children:"Register"}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"email",children:"Name:"}),Object(u.jsx)("input",{type:"text",name:"name",id:"name",onChange:function(e){return r(Object(b.a)(Object(b.a)({},s),{},{name:e.target.value}))},value:s.name,require:!0})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(u.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return r(Object(b.a)(Object(b.a)({},s),{},{email:e.target.value}))},value:s.email,require:!0})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(u.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return r(Object(b.a)(Object(b.a)({},s),{},{password:e.target.value}))},value:s.password,require:!0})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"password",children:"Confirm Password:"}),Object(u.jsx)("input",{type:"password",name:"password",id:"password"})]}),Object(u.jsx)("input",{type:"submit",value:"Register"})]})})})};var O=function(e){var t=e.Login,c=(e.error,Object(a.useState)({email:"",password:""})),n=Object(l.a)(c,2),s=n[0],r=n[1];return Object(u.jsx)("div",{children:Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(s)},children:Object(u.jsxs)("div",{className:"form-inner",children:[Object(u.jsx)("h2",{children:"Login"}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"email",children:"Name:"}),Object(u.jsx)("input",{type:"text",name:"name",id:"name",onChange:function(e){return r(Object(b.a)(Object(b.a)({},s),{},{name:e.target.value}))},value:s.name})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(u.jsx)("input",{type:"email",name:"email",id:"email",onChange:function(e){return r(Object(b.a)(Object(b.a)({},s),{},{email:e.target.value}))},value:s.email})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(u.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return r(Object(b.a)(Object(b.a)({},s),{},{password:e.target.value}))},value:s.password})]}),Object(u.jsx)("input",{type:"submit",value:"Login"})]})})})},h=function(){var e="",t="",c={name:"",email:"",password:"",confirmPassword:""},n=Object(a.useState)({name:"",email:""}),s=Object(l.a)(n,2),r=(s[0],s[1]),i=Object(a.useState)(c),b=Object(l.a)(i,2),h=(b[0],b[1]),p=Object(a.useState)(""),x=Object(l.a)(p,2),f=x[0],g=x[1];return Object(u.jsxs)(j.g,{className:"estiloso",children:[Object(u.jsxs)(j.l,{children:[Object(u.jsx)("h1",{className:"space",children:"Project Manager"}),Object(u.jsx)(j.f,{md:6,children:Object(u.jsx)(m,{Register:function(e){console.log(e),e.email==c.email&&e.password==c.password?(console.log("Login Successful"),h({name:e.name,email:e.email})):(console.log("Data not matched"),g("Data not matched"))},error:f})}),Object(u.jsx)(j.f,{md:6,children:Object(u.jsx)(O,{Login:function(c){console.log(c),c.email==e&&c.password==t?(console.log("Login Successful"),r({name:c.name,email:c.email})):(console.log("Data not matched"),g("Data not matched"))},error:f})})]}),Object(u.jsx)(j.a,{className:"space",variant:"success",style:{margin:"10px"},children:Object(u.jsxs)(o.b,{to:"/DashboardPanel",style:{color:"#FFF"},children:[Object(u.jsx)(d.b,{})," Go Dashboard Panel"]})}),Object(u.jsx)("hr",{})]})},p=function(){return Object(u.jsx)(h,{})},x=c(12),f=c.n(x),g=c(90),v=c(91),w=c(92),y=c(93),N=c(9),S=c.n(N),C=function(e){var t=Object(a.useState)(""),c=Object(l.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),b=i[0],m=i[1];return Object(u.jsx)(g.a,{className:"space estiloso",children:Object(u.jsxs)(v.a,{children:[Object(u.jsx)(w.a,{md:12,children:Object(u.jsx)("h1",{className:"space",children:"Project Manager"})}),Object(u.jsx)(w.a,{lg:6,children:Object(u.jsx)("h3",{children:"Plan a new Project"})}),Object(u.jsx)(w.a,{lg:6,children:Object(u.jsx)(y.a,{variant:"success",style:{marginLeft:"10px"},children:Object(u.jsx)(o.b,{to:"/DashboardPanel",style:{color:"#FFF"},children:"Back to Dashboard"})})}),Object(u.jsxs)(j.h,{onSubmit:function(e){e.preventDefault(),f.a.post("http://localhost:8000/api/projects/",{title:n,date:b}).then((function(e){e.data.ok?S.a.fire("Favor completar con datos requeridos",e.data.message,"error"):S.a.fire("Registro de Tarea correctamente",e.data.message,"success")})).catch((function(e){console.log(e)}))},children:[Object(u.jsxs)(j.i,{children:[Object(u.jsx)(j.k,{children:"T\xedtulo:"}),Object(u.jsx)(j.j,{type:"text",onChange:function(e){return s(e.target.value)}})]}),Object(u.jsxs)(j.i,{children:[Object(u.jsx)(j.k,{children:"Date:"}),Object(u.jsx)(j.j,{type:"date",onChange:function(e){return m(e.target.value)}})]}),Object(u.jsxs)(y.a,{variant:"primary",type:"submit",children:[Object(u.jsx)(d.c,{})," Create Project"]})]})]})})},P=c(42),F=function(e){var t=Object(a.useState)(""),c=Object(l.a)(t,2),n=c[0],s=(c[1],Object(a.useState)("")),r=Object(l.a)(s,2),o=r[0];r[1];return Object(u.jsx)("div",{className:"DivWithScroll",children:e.project&&e.project.map((function(t,c){return Object(u.jsx)(j.b,{children:Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.e,{children:t.title}),Object(u.jsx)(j.d,{children:t.date}),e.project&&Object(u.jsx)(j.a,{color:"primary",type:"submit",onClick:function(c){return function(t){t.preventDefault(),f.a.post("http://localhost:8000/api/projects/",{title:n,date:o}).then((function(t){S.a.fire({position:"top-end",icon:"success",title:"Proyecto agregado correctamente",showConfirmButton:!1,timer:1500}),e.project.push("/projects/"+t.data.data)})).catch((function(e){console.log(e)}))}(c,t._id)},children:"Start Project"}),Object(u.jsx)(j.a,{color:"danger",type:"button",onClick:function(t){S.a.fire({title:"\xbfEst\xe1s seguro?",text:"No podr\xe1s revertir esto!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed, eliminar!"}).then((function(t){t.value&&f.a.delete("http://localhost:8000/api/projects/"+e.title+e.date).then((function(t){S.a.fire("Eliminado!","Tu proyecto ha sido eliminado.","success"),e.project.push("/projects/")})).catch((function(e){console.log(e)}))}))},children:Object(u.jsx)(d.a,{})})]})},c)}))})},D=function(e){var t=Object(a.useState)(""),c=Object(l.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),i=o[0],d=o[1];return Object(u.jsx)("div",{className:"DivWithScroll",children:e.project&&e.project.map((function(t,c){return Object(u.jsx)(j.b,{children:Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.e,{onChange:function(e){return s(Object(b.a)(Object(b.a)({},t),{},{title:e.target.value}))},value:t.title}),Object(u.jsx)(j.d,{onChange:function(e){return d(Object(b.a)(Object(b.a)({},t),{},{date:e.target.value}))},value:t.date}),e.project&&Object(u.jsx)(j.a,{color:"primary",type:"submit",onClick:function(e){return function(e){e.preventDefault(),f.a.post("http://localhost:8000/api/projects/",{title:n,date:i}).then((function(e){e.data.ok?S.a.fire("Tarea en progreso",e.data.message,"error"):S.a.fire("Tarea en progreso",e.data.message,"success")})).catch((function(e){console.log(e)}))}(e,t._id)},children:"Start Project"}),e.project&&Object(u.jsx)(j.a,{className:"ml2",color:"danger",type:"submit",onClick:function(e){return c=e,t._id,void(c&&S.a.fire({title:"Eliminar el contacto",text:"\xbfEsta seguro que desea eliminar el contacto",icon:"question",showCancelButton:!0,confirmButtonText:"Si, eliminar!!!",cancelButtonText:"No"}).then((function(e){e.isConfirmed&&f.a.delete("/api/projects/".concat(c)).then((function(e){var t=[].concat(t);t.splice(t.findIndex((function(e){return e._id===c})),1)})).catch((function(e){return S.a.fire("Error al eliminar el contacto",null===e||void 0===e?void 0:e.message,"error")}))})));var c},children:"Eliminar"})]})},c)}))})},k=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(l.a)(s,2),i=r[0],j=(r[1],Object(a.useState)("")),b=Object(l.a)(j,2),m=b[0];b[1];return Object(a.useEffect)((function(){f.a.get("http://localhost:8000/api/projects").then((function(e){return n(e.data)})).catch((function(e){return console.log("Error:",e)}))}),[]),Object(u.jsxs)(g.a,{className:"estiloso",children:[Object(u.jsxs)(v.a,{children:[Object(u.jsx)("h1",{className:"space",children:"Project Manager"}),Object(u.jsxs)(w.a,{md:4,children:[Object(u.jsx)("h3",{className:"backlog",children:"Backlog"}),Object(u.jsx)(F,{project:c})]}),Object(u.jsxs)(w.a,{md:4,children:[Object(u.jsx)("h3",{className:"inprogress",children:"In Progress"}),Object(u.jsx)(D,{title:i,date:m})]}),Object(u.jsxs)(w.a,{md:4,children:[Object(u.jsx)("h3",{className:"completed",children:"Completed"}),Object(u.jsx)(D,{title:i,date:m})]})]}),Object(u.jsxs)(v.a,{children:[Object(u.jsx)(w.a,{xs:6,md:6,lg:6,children:Object(u.jsx)(y.a,{className:"space",variant:"primary",style:{margin:"10px"},children:Object(u.jsxs)(o.b,{to:"/NewProject",style:{color:"#FFF"},children:[Object(u.jsx)(P.a,{})," Add New Project"]})})}),Object(u.jsx)(w.a,{xs:6,md:6,lg:6,children:Object(u.jsx)(y.a,{className:"space",variant:"success",style:{margin:"10px"},children:Object(u.jsxs)(o.b,{to:"/",style:{color:"#FFF"},children:[Object(u.jsx)(d.b,{})," Go Home"]})})})]}),Object(u.jsx)("hr",{})]})};var B=function(){return Object(u.jsx)(o.a,{children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{index:!0,element:Object(u.jsx)(p,{})}),Object(u.jsx)(i.a,{path:"/NewProject",element:Object(u.jsx)(C,{})}),Object(u.jsx)(i.a,{path:"/DashboardPanel",element:Object(u.jsx)(k,{})})]})})};c(82);r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(B,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.a7802ec1.chunk.js.map