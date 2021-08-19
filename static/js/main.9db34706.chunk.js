(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{35:function(t,e,n){"use strict";n.r(e);var a,s,i,r,o,c,d,l,h,p,u,j,g,x,b=n(1),f=n.n(b),m=n(21),v=n.n(m),k=n(12),O=n(8),w=n(9),S=n(11),y=n(10),T=n(3),C=n(4),D=C.c.div(a||(a=Object(T.a)(["\n  display: flex;\n  width: 100%;\n  flex-wrap: wrap;\n  justify-content: center;\n\n  .title {\n    font-size: 5rem;\n    height:auto ;\n    @media(max-width:700px){\n      font-size: 3rem;\n    }\n  }\n"]))),N=n(13),P={fontColor:"#000",mainColor:"lightblue",secondaryColor:"white",btnColor:"#000"},z=n(5),I=C.c.form(s||(s=Object(T.a)(["\n  width: 100%;\n  height: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  background-color: ",";\n  box-shadow: 0 0 10px ",";\n\n  .addTaskText {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    input {\n      text-align: center;\n      background-color: ",";\n      width: 50%;\n      height: 1.3em;\n      font-size: 1.5rem;\n      padding: 0 10px;\n      margin-top: 1vh;\n      @media (max-width: 760px) {\n        width: 90%;\n      }\n    }\n  }\n  .add-btn {\n    display: flex;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n    padding-bottom: 5px;\n  }\n  .addTaskOptions {\n    width: 60%;\n    display: flex;\n    font-size: 1.2rem;\n    @media (max-width: 760px) {\n      flex-direction: column;\n      width: 100%;\n    }\n    div {\n      padding: 5px 0;\n    }\n    justify-content: space-evenly;\n    align-items: center;\n    input {\n      font-family: sans-serif;\n      font-size: 1.2rem;\n      background-color: ",";\n      border: 1px solid;\n      margin-right: 5px;\n      border-radius: 0.3rem;\n    }\n  }\n"])),Object(z.c)(.3,P.mainColor),P.mainColor,P.secondaryColor,P.secondaryColor),L=C.c.button(i||(i=Object(T.a)(["\n    height: ",";\n    width: ",';\n    margin-right: 4px;\n    font-size: 1.3rem;\n    font-family: "Roboto", sans-serif;\n    color: ',";\n    border: 1px solid ",";\n    box-shadow: 0 1px 2px ",";\n    background-color: ",";\n    border-radius: 0.3rem;\n    transition: 0.25s;\n    :hover {\n      background-color: ",";\n    }\n"])),(function(t){return t.height?t.height:"2rem"}),(function(t){return t.width?t.width:"2rem"}),P.btnColor,P.btnColor,P.btnColor,P.secondaryColor,Object(z.a)(.15,P.secondaryColor)),A=n(0),U=function(t){Object(S.a)(n,t);var e=Object(y.a)(n);function n(){var t;Object(O.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={text:"",important:!1,date:(new Date).toISOString().slice(0,10)},t.handleChange=function(e){var n=e.target,a=n.name,s=n.value;t.setState(Object(N.a)({},a,s))},t.handleCheck=function(e){var n=e.target,a=n.name,s=n.checked;t.setState(Object(N.a)({},a,s))},t.handleSubmit=function(e,n,a,s){e.preventDefault(),t.setState({text:"",important:!1,date:(new Date).toISOString().slice(0,10)});var i={text:n,date:a,important:s,active:!0,finishDate:null};t.props.addTask(i)},t}return Object(w.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.text,a=e.important,s=e.date;return Object(A.jsxs)(I,{children:[Object(A.jsx)("div",{className:"addTaskText",children:Object(A.jsx)("input",{type:"text",placeholder:"New task",maxLength:"100",value:n,name:"text",onChange:this.handleChange})}),Object(A.jsxs)("div",{className:"addTaskOptions",children:[Object(A.jsxs)("div",{children:[Object(A.jsx)("input",{className:"checkbox",type:"checkbox",name:"important",checked:a,id:"important",onChange:this.handleCheck}),Object(A.jsx)("label",{htmlFor:"important",children:Object(A.jsx)("strong",{children:"Important"})})]}),Object(A.jsxs)("div",{children:[Object(A.jsx)("input",{type:"date",name:"date",id:"date",value:s,onChange:this.handleChange}),Object(A.jsx)("label",{htmlFor:"date",children:Object(A.jsx)("strong",{children:"Task deadline"})})]})]}),Object(A.jsx)("div",{className:"add-btn",children:Object(A.jsx)(L,{width:"auto",onClick:function(e){return t.handleSubmit(e,n,s,a)},children:"Add task"})})]})}}]),n}(b.Component),E=C.c.div(r||(r=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 5px;\n  user-select: none;\n  }\n  select {\n    background-color: ",";\n    box-shadow: 0 0 1px 1px ",";\n    border:none;\n    padding: 3px;\n    margin: 0 2px;\n  }\n"])),P.secondaryColor,P.mainColor),F=C.c.p(o||(o=Object(T.a)(["\n  margin: 5px 2px;\n  box-shadow: 0 0 1px 1px ",";\n  padding: 1px 4px;\n  background-color: ",";\n  :hover {\n    cursor: pointer;\n  }\n"])),P.mainColor,(function(t){return t.currentPage?Object(z.b)(.05,P.mainColor):null})),M=function(t){for(var e=t.pageIndex,n=t.pageSize,a=t.pageSizes,s=t.itemCount,i=t.switchPage,r=t.switchIndex,o=[],c=function(t){o.push(Object(A.jsx)(F,{currentPage:e===t,onClick:function(){return i(t)},children:t+1},t))},d=0;d<s/n;d++)c(d);return Object(A.jsxs)(E,{children:[function(t){var n,a,s=[];return n=e+t+1,(a=e-t)<0&&(a=0,(n=1+2*t)>o.length&&(n=o.length)),n>o.length&&(a=o.length-2*t,n=o.length,a<0&&(a=0)),a>0&&s.push(Object(A.jsx)(F,{onClick:function(){return i(0)},children:"1"},0),Object(A.jsx)(F,{style:{cursor:"default"},children:"..."},-1)),s.push.apply(s,Object(k.a)(o.slice(a,n))),n<o.length&&s.push(Object(A.jsx)(F,{style:{cursor:"default"},children:"..."},-2),Object(A.jsx)(F,{onClick:function(){return i(o.length-1)},children:o.length},o.length-1)),s}(2),Object(A.jsx)("select",{value:n,onChange:r,children:a.map((function(t){return Object(A.jsx)("option",{value:t,children:t},t)}))})]})},R=n(6),B=n(7),Y=C.c.div(c||(c=Object(T.a)(["\n  position: relative;\n  text-align: center;\n  padding: 10px 0 10px;\n  user-select: none;\n  strong{\n    padding: 0 5px 0 0;\n  }\n  &:hover {\n    cursor: pointer;\n  }\n"]))),J=function(t){var e=t.sort,n=t.listName,a=t.text,s=t.property,i=t.desc,r=t.activeSort;return Object(A.jsxs)(Y,{onClick:function(){return e(n,s)},children:[Object(A.jsx)("strong",{children:a}),r===s&&i?Object(A.jsx)(R.a,{style:{position:"absolute"},icon:B.d}):r!==s||i?""!==r?null:Object(A.jsx)(R.a,{style:{position:"absolute"},icon:B.c}):Object(A.jsx)(R.a,{style:{position:"absolute"},icon:B.e})]})},q=C.c.div(d||(d=Object(T.a)(["\n  grid-column: "," / ",";\n  word-wrap: break-word;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 15px;\n  ","\n"])),(function(t){return t.colStart}),(function(t){return t.colEnd}),(function(t){return t.important?H:null})),H=function(){return Object(C.b)(l||(l=Object(T.a)(["\n  font-weight: bold;\n  background-color: ",";\n  text-decoration: underline;\n  border-bottom: 3px solid ",";\n  border-top: 3px solid ",";\n"])),Object(z.a)(.1,P.mainColor),Object(z.c)(.4,P.mainColor),Object(z.c)(.4,P.mainColor))},G=function(t){var e=t.task,n=e.id,a=e.text,s=e.date,i=e.active,r=e.important,o=e.finishDate,c={wordBreak:"break-all"};if(i)return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(q,{style:c,important:r,colStart:1,colEnd:2,children:a}),Object(A.jsx)(q,{important:r,colStart:2,colEnd:3,children:s}),Object(A.jsxs)(q,{buttons:!0,important:r,colStart:3,colEnd:4,children:[Object(A.jsx)(L,{onClick:function(){return t.change(n)},children:Object(A.jsx)(R.a,{icon:B.a})}),Object(A.jsx)(L,{onClick:function(){return t.delete(n)},children:Object(A.jsx)(R.a,{icon:B.f})})]})]});var d=new Date(o).toLocaleString();return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(q,{style:c,colStart:1,colEnd:2,children:a}),Object(A.jsx)(q,{colStart:2,colEnd:3,children:s}),Object(A.jsx)(q,{colStart:3,colEnd:4,children:d}),Object(A.jsx)(q,{buttons:!0,colStart:4,colEnd:6,children:Object(A.jsx)(L,{onClick:function(){return t.delete(n)},children:Object(A.jsx)(R.a,{icon:B.f})})})]})},K=C.c.div(h||(h=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  align-items: center;\n  h3 {\n    text-align: center;\n  }\n"]))),Q=C.c.div(p||(p=Object(T.a)(["\n  transform: rotate3d(1, 0, 0, 90deg);\n  opacity:0;\n  transition: 1s;\n  backface-visibility: hidden;\n  &.show {\n    transform: rotate3d(0, 0, 0, 90deg);\n    opacity:1;\n    transition: transform 1s;\n  }\n  &.move-up {\n    transform: rotate3d(0, 0, 0, 90deg) translateY(",");\n    opacity:1;\n    transition: 1s;\n    transition-delay: .3s;\n    &.hide {\n      transform: translateY(",") rotate3d(1, 0, 0, 90deg);\n      opacity:0;\n      transition: 1s;\n    }\n  }\n  &.move-down {\n    transform: rotate3d(0, 0, 0, 90deg) translateY(0);\n    transition: 1s;\n  }\n"])),(function(t){return-t.moveUp+"px"}),(function(t){return-t.moveUp+"px"})),V=C.c.div(u||(u=Object(T.a)(["\n  width: 80vw;\n  box-shadow: 0 0 100px 0px "," inset;\n  grid-template-columns: 2fr 1fr auto;\n  border-radius: 1rem;\n  display: grid;\n  grid-auto-rows: auto;\n  min-height: 5vh;\n  overflow: hidden;\n"])),P.mainColor),W=C.c.div(j||(j=Object(T.a)(["\n  width: 80vw;\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr auto;\n  box-shadow: 0 0 100px 0px "," inset;\n  border-radius: 1rem;\n  grid-auto-rows: auto;\n  min-height: 5vh;\n  overflow: hidden;\n"])),P.mainColor),X=C.c.form(g||(g=Object(T.a)(["\n  padding: .8em 0;\n  position: relative;\n  input {\n    font-size: 1.2rem;\n    padding:0 5px;\n    height: 1.2em;\n  }\n  .search-icon{\n    position: absolute;\n    right: .2em;\n    top: 1.1em;\n    opacity: 0.7;\n  }\n\n"]))),Z=function(t){Object(S.a)(n,t);var e=Object(y.a)(n);function n(){var t;Object(O.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={searchString:""},t.handleSearch=function(e,n){e.preventDefault(),t.props.search(n)},t.handleChange=function(e){t.setState({searchString:e.target.value})},t}return Object(w.a)(n,[{key:"render",value:function(){var t=this,e=this.state.searchString;return Object(A.jsxs)(X,{onSubmit:function(n){return t.handleSearch(n,e)},children:[Object(A.jsx)("input",{type:"text",placeholder:"search",value:e,onChange:this.handleChange}),Object(A.jsx)(R.a,{className:"search-icon",icon:B.b})]})}}]),n}(b.Component),$=function(t){Object(S.a)(n,t);var e=Object(y.a)(n);function n(){var t;Object(O.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={activeTasks:[],doneTasks:[],reSort:!1,activeTasksSort:{propertyName:"",desc:!1},doneTasksSort:{propertyName:"",desc:!1},activePageIndex:0,activePageSize:5,donePageIndex:0,donePageSize:5,activeList:{show:!1,showAgain:!1},doneList:{show:!1,hide:!1,moveUp:!1,moveDown:!1,showMoveUp:!1,flag:!1},moveUp:0},t.loadActiveTasks=function(){return t.props.tasks.filter((function(t){return t.active})).map((function(e){return Object(A.jsx)(G,{task:e,delete:t.props.delete,change:t.props.changeStatus},e.id)}))},t.loadDoneTasks=function(){return t.props.tasks.filter((function(t){return!t.active})).map((function(e){return Object(A.jsx)(G,{task:e,delete:t.props.delete,change:t.props.changeStatus},e.id)}))},t.sortTasks=function(e,n){var a,s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=Object(k.a)(t.state[e]),r=t.state[e+"Sort"].desc;s||(r=!r);var o=function(t,e){return t.props.task[n]<e.props.task[n]?-1:t.props.task[n]>e.props.task[n]?1:0};r?i.sort(o).reverse():i.sort(o),t.setState((a={},Object(N.a)(a,e,i),Object(N.a)(a,e+"Sort",{propertyName:n,desc:!r}),a))},t.switchActivePageIndex=function(e){t.setState({activePageIndex:e})},t.switchActivePageSize=function(e){t.setState({activePageSize:1*e.target.value,activePageIndex:0})},t.switchDonePageIndex=function(e,n){t.setState({donePageIndex:e})},t.switchDonePageSize=function(e){t.setState({donePageSize:1*e.target.value,donePageIndex:0})},t.handleSearch=function(e){var n=t.loadActiveTasks().filter((function(t){return t.props.task.text.includes(e)||t.props.task.date.includes(e)})),a=t.loadDoneTasks().filter((function(t){return t.props.task.text.includes(e)||t.props.task.date.includes(e)||new Date(t.props.task.finishDate).toLocaleString().includes(e)}));0===n.length&&n.push(Object(A.jsx)(q,{colStart:1,colEnd:4,children:"No results found."},"0")),0===a.length&&a.push(Object(A.jsx)(q,{colStart:1,colEnd:4,children:"No results found."},"0")),t.setState({activeTasks:n,activePageIndex:0,doneTasks:a,donePageIndex:0})},t.handleAnimations=function(){var e=t.state,n=e.activeTasks,a=e.doneTasks,s=e.search,i=e.activeList,r=e.doneList;if((n.length>0||s)&&!i.show&&t.setState({activeList:{show:!0},doneList:{moveUp:!1}}),(0===n.length||s)&&i.show){var o=document.querySelector("#active-task-list").offsetHeight;t.setState({activeList:{show:!1},moveUp:o})}!(a.length>0||s)||r.show||r.moveUp||r.showMoveUp||t.setState({doneList:{show:!0}}),(0===a.length||s)&&r.show&&t.setState({doneList:{}}),0!==a.length&&!s||!r.moveUp||r.flag||t.setState({doneList:{moveUp:!0,hide:!0,flag:!0}}),(a.length>0||s)&&r.show&&!i.show&&!r.moveUp&&(0!==n.length||1!==a.length||r.flag?t.setState({doneList:{moveUp:!0}}):t.setState({doneList:{show:!0,hide:!1,flag:!0}}))},t}return Object(w.a)(n,[{key:"componentDidUpdate",value:function(){var t=this.state,e=t.activeTasksSort,n=t.doneTasksSort;if(this.props.refresh){var a=!1;a=""!==e.propertyName||""!==n.propertyName,this.setState({activeTasks:this.loadActiveTasks(),doneTasks:this.loadDoneTasks(),reSort:a}),this.props.stopRefresh()}this.state.reSort&&(""!==e.propertyName&&this.sortTasks("activeTasks",e.propertyName,!1),""!==n.propertyName&&this.sortTasks("doneTasks",n.propertyName,!1),this.setState({reSort:!1})),this.handleAnimations()}},{key:"componentDidMount",value:function(){this.setState({activeTasks:this.loadActiveTasks(),doneTasks:this.loadDoneTasks()})}},{key:"render",value:function(){var t=this.state,e=t.activeTasks,n=t.doneTasks,a=t.activeTasksSort,s=t.doneTasksSort,i=t.activePageIndex,r=t.activePageSize,o=t.donePageIndex,c=t.donePageSize,d=(t.search,t.doneList),l=t.activeList;return Object(A.jsxs)(K,{children:[Object(A.jsx)(Z,{search:this.handleSearch}),(e.length,Object(A.jsxs)(Q,{id:"active-task-list",className:[l.show?"show":null],children:[Object(A.jsx)("h3",{children:"Active Tasks"}),Object(A.jsxs)(V,{children:[Object(A.jsx)(J,{sort:this.sortTasks,listName:"activeTasks",property:"text",text:"Task",desc:a.desc,activeSort:a.propertyName}),Object(A.jsx)(J,{sort:this.sortTasks,listName:"activeTasks",property:"date",text:"Deadline",desc:a.desc,activeSort:a.propertyName}),e.slice(0===i?0:i*r,i*r+r)]}),Object(A.jsx)(M,{pageIndex:i,pageSize:r,pageSizes:[5,10,20],itemCount:e.length,switchPage:this.switchActivePageIndex,switchIndex:this.switchActivePageSize})]})),(n.length,Object(A.jsxs)(Q,{moveUp:this.state.moveUp,className:[d.show?"show":null,d.moveUp?"move-up":null,d.hide?"hide":null],children:[Object(A.jsx)("h3",{children:"Done Tasks"}),Object(A.jsxs)(W,{children:[Object(A.jsx)(J,{sort:this.sortTasks,listName:"doneTasks",property:"text",text:"Task",desc:s.desc,activeSort:s.propertyName}),Object(A.jsx)(J,{sort:this.sortTasks,listName:"doneTasks",property:"date",text:"Deadline",desc:s.desc,activeSort:s.propertyName}),Object(A.jsx)(J,{sort:this.sortTasks,listName:"doneTasks",property:"finishDate",text:"Finished",desc:s.desc,activeSort:s.propertyName}),n.slice(0===o?0:o*c,o*c+c)]}),Object(A.jsx)(M,{pageIndex:o,pageSize:c,pageSizes:[5,10,20],itemCount:n.length,switchPage:this.switchDonePageIndex,switchIndex:this.switchDonePageSize})]}))]})}}]),n}(b.Component),_=function(t){Object(S.a)(n,t);var e=Object(y.a)(n);function n(){var t;Object(O.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={refresh:!1,tasks:[{id:0,text:"agra\u0107 w gre",date:"2020-02-11",important:!1,active:!0,finishDate:null},{id:1,text:"zagra\u0107 w gre",date:"2020-02-15",important:!0,active:!0,finishDate:null},{id:2,text:"ra\u0107 w gre",date:"2020-02-13",important:!0,active:!0,finishDate:null},{id:3,text:"gra\u0107 w gre",date:"2020-02-14",important:!0,active:!0,finishDate:null}]},t.deleteTask=function(e){t.setState((function(t){return{tasks:t.tasks.filter((function(t){return t.id!==e})),refresh:!0}}))},t.changeTaskStatus=function(e){var n=t.state.tasks.findIndex((function(t){return t.id===e})),a=Object(k.a)(t.state.tasks);a[n].active=!1,a[n].finishDate=(new Date).getTime(),t.setState({tasks:a,refresh:!0})},t.handleAddTask=function(e){e.id=t.state.tasks.length>0?Math.max.apply(Math,Object(k.a)(t.state.tasks.map((function(t){return t.id}))))+1:0;var n=Object(k.a)(t.state.tasks);n.push(e),t.setState((function(t){return{tasks:n,refresh:!0}}))},t.stopRefresh=function(){t.setState({refresh:!1})},t}return Object(w.a)(n,[{key:"render",value:function(){return Object(A.jsxs)(D,{children:[Object(A.jsx)("div",{className:"title",children:"ToDoList"}),Object(A.jsx)(U,{addTask:this.handleAddTask}),Object(A.jsx)($,{refresh:this.state.refresh,stopRefresh:this.stopRefresh,tasks:this.state.tasks,delete:this.deleteTask,changeStatus:this.changeTaskStatus})]})}}]),n}(b.Component),tt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),a(t),s(t),i(t),r(t)}))},et=Object(C.a)(x||(x=Object(T.a)(["\n\nbody {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: ",";\n}\n\n"])),P.fontColor);v.a.render(Object(A.jsxs)(f.a.StrictMode,{children:[Object(A.jsx)(et,{}),Object(A.jsx)(_,{})]}),document.getElementById("root")),tt()}},[[35,1,2]]]);
//# sourceMappingURL=main.9db34706.chunk.js.map