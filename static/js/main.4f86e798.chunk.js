(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(4),s=a.n(n),r=a(7),i=a(5),o=a(6),c=a(9),l=a(8),d=a(3),u=a(1),m=a.n(u),h=(a(14),a(15),a(0)),b=function(e){var t=e.todos;return Object(h.jsx)("div",{className:"container",children:t.map((function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"row Todo",children:["Todo:",Object(h.jsx)("div",{className:"col Todo__title",children:e.title}),"User:",Object(h.jsx)("div",{className:"col Todo__username",children:e.user&&e.user.name}),"Email:",Object(h.jsx)("div",{className:"col Todo__usermail",children:e.user&&e.user.email})]},e.userId)})}))})},p=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],g=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}].map((function(e){return Object(d.a)(Object(d.a)({},e),{},{user:p.find((function(t){return t.id===e.userId}))})})),j=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={todos:g,newTodo:"",selectedUser:"0",titleError:!1,userError:!1},e.handleChangeSelect=function(t){e.setState({selectedUser:t.target.value})},e.handleChangeInput=function(t){e.setState({newTodo:t.target.value})},e.addTodo=function(t){return t.preventDefault(),""===e.state.newTodo?(e.state.titleError=!0,void e.forceUpdate()):"0"===e.state.selectedUser?(e.state.titleError=!1,e.state.userError=!0,void e.forceUpdate()):void e.setState((function(e){return{titleError:!1,userError:!1,newTodo:"",selectedUser:"0",todos:[].concat(Object(r.a)(e.todos),[{title:e.newTodo,id:e.todos[e.todos.length-1].id+1,user:p.find((function(t){return t.name===e.selectedUser}))}])}}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.todos,a=e.newTodo,n=e.selectedUser,s=e.titleError,r=e.userError;return console.log(t),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Add todo form"}),Object(h.jsxs)("form",{className:"row gx-3 gy-2 align-items-center",onSubmit:this.addTodo,children:[Object(h.jsx)("div",{className:"col-auto",children:Object(h.jsx)("input",{className:"form-control",placeholder:"Enter a title",type:"text",name:"todoInput",value:a,onChange:this.handleChangeInput,pattern:"^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u04510-9\\s]+$"})}),Object(h.jsx)("div",{className:"col-auto",children:Object(h.jsxs)("select",{className:"form-select",value:n,onChange:this.handleChangeSelect,children:[Object(h.jsx)("option",{value:"",children:"Choose a user"}),p.map((function(e){return Object(h.jsx)("option",{value:e.name,children:e.name},e.id)}))]})}),Object(h.jsxs)("div",{className:"Error",children:[s&&Object(h.jsx)("div",{className:"Error__message",children:"Please enter the title"}),r&&Object(h.jsx)("div",{className:"Error__message",children:"Please chose a user"})]}),Object(h.jsx)("div",{className:"col-auto",children:Object(h.jsx)("button",{className:"btn btn-primary btn-lg",type:"submit",children:"Add"})})]}),Object(h.jsx)("div",{className:"Todolist",children:Object(h.jsx)(b,{todos:t})})]})}}]),a}(m.a.Component);s.a.render(Object(h.jsx)(j,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4f86e798.chunk.js.map