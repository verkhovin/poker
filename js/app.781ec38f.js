(function(t){function e(e){for(var o,a,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);m&&m(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},s={app:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/poker/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var m=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),s=n.n(o);s.a},5581:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("router-view")],1)])},r=[],a={name:"App",components:{}},i=a,c=(n("034f"),n("2877")),u=Object(c["a"])(i,s,r,!1,null,null,null),m=u.exports,l=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-row",[n("b-col",[n("b-card",[n("b-container",[n("b-row",[n("div",{staticClass:"d-flex col-md"},[n("b-button",{staticClass:"m-auto",attrs:{variant:"outline-success"},on:{click:t.createRoom}},[t._v("Create a new room")])],1),n("div",{staticClass:"col-md-2 d-flex text-muted text-center justify-content-center align-self-center m-2"},[n("p",{staticClass:"m-auto"},[t._v("or")])]),n("div",{staticClass:"col-md d-flex text-muted text-center justify-content-center align-self-center"},[n("b-form",{on:{submit:function(e){return e.preventDefault(),t.enterRoom(t.enterRoomId)}}},[n("b-form-group",[n("b-form-input",{attrs:{required:"",placeholder:"Room id"},model:{value:t.enterRoomId,callback:function(e){t.enterRoomId=e},expression:"enterRoomId"}})],1),n("b-button",{attrs:{type:"submit",variant:"outline-success"}},[t._v("Enter the room")])],1)],1)])],1)],1)],1)],1)],1)},f=[],p=(n("a9e3"),n("ac1f"),n("1276"),n("bc3a")),b=n.n(p),v={baseURL:"https://tshirt-poker.herokuapp.com"},h=b.a.create(v);function g(t,e,n){h.get(t).then((function(t){return e(t.data)})).catch((function(t){return n(t)}))}function y(t,e,n,o){h.post(t,e).then((function(t){return n(t)})).catch((function(t){return o(t)}))}var _={createRoom:function(t,e){y("/api/rooms",null,t,e)},getRoom:function(t,e,n){g("/api/rooms/"+t,e,n)}},k={name:"Index",data:function(){return{enterRoomId:null}},methods:{createRoom:function(){var t=this;_.createRoom((function(e){t.enterRoom(Number(e.headers["location"].split("/")[3]))}),(function(t){return console.log(t)}))},enterRoom:function(t){this.$router.push("/rooms/"+t)}}},w=k,E=Object(c["a"])(w,d,f,!1,null,"31ace36c",null),x=E.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[t.connecting?n("div",[t._v(" Loading.. ")]):t.username?n("div",[n("b-row",{staticClass:"mb-3"},[n("b-col",{staticClass:"col-md-6 offset-md-4"},[n("b-button-toolbar",{attrs:{"key-nav":"","aria-label":"Toolbar with button groups"}},[n("b-button-group",{staticClass:"mx-1 btn-group-md"},[n("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){return t.submitEstimate("XS")}}},[t._v("XS")]),n("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){return t.submitEstimate("S")}}},[t._v("S")]),n("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){return t.submitEstimate("M")}}},[t._v("M")]),n("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){return t.submitEstimate("L")}}},[t._v("L")]),n("b-button",{attrs:{variant:"outline-success"},on:{click:function(e){return t.submitEstimate("XL")}}},[t._v("XL")])],1),n("b-button-group",{staticClass:"mx-1 btn-group-md"},[t.room.estimatesOpened?n("b-button",{attrs:{variant:"outline-success"},on:{click:t.hideEstimates}},[t._v("Hide")]):n("b-button",{attrs:{variant:"outline-success"},on:{click:t.showEstimates}},[t._v("Show")])],1),n("b-button-group",{staticClass:"mx-1 btn-group-md"},[n("b-button",{attrs:{variant:"danger"},on:{click:t.clearEstimates}},[t._v("Clear")])],1)],1)],1)],1),n("b-row",{staticClass:"row-cols-1 row-cols-md-3"},t._l(t.room.estimates,(function(e,o){return n("b-col",{key:o,staticClass:"mb-4"},[n("div",{staticClass:"card h-100"},[n("div",{staticClass:"card-body"},[n("h1",{staticClass:"card-title display-1",class:{diff:t.room.dominatingEstimate&&e.size!==t.room.dominatingEstimate}},[t._v(t._s(e.size))])]),n("div",{staticClass:"card-footer"},[n("small",{staticClass:"text-muted"},[t._v(t._s(e.username))])])])])})),1),t.room.estimatesOpened?n("div",[n("div",[t.room.dominatingEstimate?n("p",[t._v(" Estimated as "+t._s(t.room.dominatingEstimate)+" "),t.room.hasConsensus?n("b-icon-check-all",{staticStyle:{color:"#28a745"}}):n("b-icon-exclamation-triangle",{directives:[{name:"b-popover",rawName:"v-b-popover.hover.top",value:"There are nonmatching estimates",expression:"'There are nonmatching estimates'",modifiers:{hover:!0,top:!0}}],staticStyle:{color:"#ffc107"}})],1):n("p",[t._v("There is no dominating estimate.")])])]):t._e()],1):n("div",{staticClass:"text-left"},[n("b-row",[n("b-col",[n("b-form",{on:{submit:function(e){return e.preventDefault(),t.enterUsername(e)}}},[n("b-form-group",{attrs:{label:"Name"}},[n("b-form-input",{attrs:{required:""},model:{value:t.usernameInput,callback:function(e){t.usernameInput=e},expression:"usernameInput"}})],1),n("b-button",{attrs:{type:"submit",variant:"outline-success"}},[t._v("Enter")])],1)],1)],1)],1),n("p",[t._v("Room id is "),n("b",[t._v(t._s(t.room.roomId))])])])},C=[],O=n("5530"),S=n("2f62"),$={name:"RoomPage",data:function(){return{usernameInput:null,connecting:!1}},computed:Object(O["a"])({},Object(S["b"])("room",["room","username","error"])),watch:{username:function(){this.$connect()}},methods:{submitEstimate:function(t){this.sendMessage({type:"ESTIMATE",payload:t})},showEstimates:function(){this.sendMessage({type:"SHOW"})},hideEstimates:function(){this.sendMessage({type:"HIDE"})},clearEstimates:function(){this.sendMessage({type:"CLEAR"})},enterUsername:function(){this.$cookie.set("tshirt-planning-username",this.usernameInput),this.$store.dispatch("room/submitUsername",{username:this.usernameInput}),this.connecting=!0},sendMessage:function(t){this.$socket.send(JSON.stringify(t))},configureSocket:function(){this.$options.sockets.onopen=function(){},this.$options.sockets.onmessage=function(t){if(this.connecting=!1,"init"===t.data){var e={roomId:this.$route.params.id,username:this.username};this.$socket.send(JSON.stringify(e))}else"OK"!==t.data&&this.$store.dispatch("room/setRoomFrom",{room:JSON.parse(t.data)})}}},created:function(){this.configureSocket(),this.$store.dispatch("room/getRoom",{id:this.$route.params.id});var t=this.$cookie.get("tshirt-planning-username");t&&(this.$store.dispatch("room/submitUsername",{username:t}),this.connecting=!0)},destroyed:function(){delete this.$options.sockets.onmessage,this.$disconnect()}},j=$,I=(n("773a"),Object(c["a"])(j,R,C,!1,null,"55347913",null)),M=I.exports;o["default"].use(l["a"]);var T=new l["a"]({base:"/poker/",mode:"history",routes:[{path:"/",component:x},{path:"/rooms/:id",component:M}]}),P=function(){return{room:null,username:null,error:null}},U={},L={getRoom:function(t,e){var n=t.commit,o=e.id;_.getRoom(o,(function(t){return n("setRoom",t)}),(function(t){return n("setError",t)}))},setRoomFrom:function(t,e){var n=t.commit,o=e.room;n("setRoom",o)},submitUsername:function(t,e){var n=t.commit,o=e.username;n("setUsername",o)}},N={setRoom:function(t,e){t.error=null,t.room=e},setError:function(t,e){t.room=null,t.error=e},setUsername:function(t,e){t.username=e}},J={namespaced:!0,state:P,getters:U,actions:L,mutations:N};o["default"].use(S["a"]),o["default"].config.devtools=!0;var X=new S["a"].Store({modules:{room:J}}),A=n("5f5b"),D=n("b1e0"),H=(n("f9e3"),n("2dd8"),n("b408")),q=n.n(H),z=n("00e7");o["default"].use(z),o["default"].config.productionTip=!1,o["default"].use(A["a"]),o["default"].use(D["a"]),o["default"].use(q.a,"wss://tshirt-poker.herokuapp.com/ws/planning",{connectManually:!0}),new o["default"]({router:T,store:X,render:function(t){return t(m)}}).$mount("#app")},"773a":function(t,e,n){"use strict";var o=n("5581"),s=n.n(o);s.a},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.781ec38f.js.map