(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{23:function(e,t,n){e.exports=n.p+"static/media/collections.8bc3ec76.svg"},41:function(e,t,n){e.exports=n.p+"static/media/arrowRight.d53f0580.svg"},42:function(e,t,n){e.exports=n.p+"static/media/arrowLeft.7cf0594b.svg"},43:function(e,t,n){e.exports=n.p+"static/media/add_plus.daf58e2f.svg"},44:function(e,t,n){e.exports=n.p+"static/media/add_minus.3aab6814.svg"},46:function(e,t,n){e.exports=n(74)},5:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),s=n(20),i=n.n(s),o=n(6),u=n(14),l=n(39),d=n(40),f=n(1),m=n.n(f),p=n(3),v=n(13),h=n.n(v),g={getUsers:function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat("/api/users","/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getAll:function(){return h.a.get("/api/users").then((function(e){return e.data}))},signUp:function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/api/users",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(e,t){return function(){var n=Object(p.a)(m.a.mark((function n(r){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r({type:"SET_NOTIFICATION",content:e}),a&&clearTimeout(a),window.scrollTo(0,0),a=setTimeout((function(){r({type:"CLEAR_NOTIFICATION"})}),1e3*t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":return t.content;case"CLEAR_NOTIFICATION":return null;default:return e}},w=function(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.signUp(e);case 3:a=t.sent,n({type:"ON_SIGNUP",newUser:a}),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message),n(b(t.t0.message,5));case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NULL_SIGN_UP_USER":return null;case"ON_SIGNUP":return t.newUser;default:return e}},O=n(19),x=null,C=function(){var e=Object(p.a)(m.a.mark((function e(t,n){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:x}},e.next=3,h.a.put("".concat("/api/stacks","/").concat(t),n,a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),N={getAll:function(){return h.a.get("/api/stacks").then((function(e){return e.data}))},create:function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:x}},e.next=3,h.a.post("/api/stacks",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:C,setToken:function(e){x="bearer ".concat(e)},nullToken:function(){x=null},remove:function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:x}},a=h.a.delete("".concat("/api/stacks","/").concat(t),n),e.abrupt("return",a.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(e,t){return function(){var n=Object(p.a)(m.a.mark((function n(a){var r,c,s;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=e.id,c={stack:e.stack,flashcard:{hint:t.hint,answer:t.answer,plusses:t.plusses,minuses:t.minuses}},n.next=5,N.update(r,c);case 5:s=n.sent,a({type:"UPDATE_STACK",data:s}),a(b("".concat(e.stack," altered"),5)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),a(b(n.t0.message,5));case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_STACKS":return Object(O.a)(t.data);case"CREATE_STACK":return[].concat(Object(O.a)(e),[t.data]);case"REMOVE_STACK":return Object(O.a)(e).filter((function(e){return e.id!==t.data}));case"UPDATE_STACK":return Object(O.a)(e).map((function(e){return e.id===t.data.id?t.data:e}));default:return e}},S=n(15),T={login:function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(){return function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.localStorage.removeItem("loggedUser"),N.nullToken(),t({type:"LOGOUT"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.login(e);case 3:a=t.sent,window.localStorage.setItem("loggedUser",JSON.stringify(a)),N.setToken(a.token),n(b("User ".concat(a.username," signed in successfully"),5)),n({type:"LOGIN",user:a}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),n(b(t.t0.message,5));case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT":return t.loggedUser;case"LOGIN":return Object(S.a)({},t.user);case"LOGOUT":return null;default:return e}},_=Object(u.combineReducers)({user:U,signUpUser:E,stacks:j,notification:k}),H=Object(u.createStore)(_,Object(d.composeWithDevTools)(Object(u.applyMiddleware)(l.a))),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(5);var R=n(45),K=n(4),D=Object(K.g)((function(e){var t=e.history,n=e.to,a=e.onClick,r=e.id,s=e.className,i=e.text,o=e.type;return c.a.createElement("button",{type:o,id:r,className:s,onClick:function(e){a&&a(e),t.push(n)}},i)})),F=function(e){return c.a.createElement("button",{onClick:e.handleClick,id:e.id,className:e.className},e.text)},G=function(){return c.a.createElement("h1",{className:"h1-heading"},"Korts")},M=Object(K.g)((function(e){var t=e.history,n=e.to,a=e.onClick;return c.a.createElement("h1",{className:"h1-heading",onClick:function(e){a&&a(e),t.push(n)}},"Korts")})),W=Object(K.g)((function(e){var t=e.history,n=e.to,a=e.onClick;return c.a.createElement("h2",{className:"h1-heading",onClick:function(e){a&&a(e),t.push(n)}},"Korts")})),J=function(e){var t=Object(o.b)();return c.a.createElement("div",{className:"container-2"},c.a.createElement(W,{to:"/"}),e.user?c.a.createElement(F,{className:"pink-box-button",text:"Log Out",handleClick:function(){t(I())}}):c.a.createElement(D,{className:"pink-box-button",text:"Log In",to:"/"}))},z=n(23),B=n.n(z),V=function(){return c.a.createElement("div",{className:"container-3"},c.a.createElement("article",{className:"container-4"},c.a.createElement("p",null,"Korts is an application for managing flash cards. Users can create stacks by topics and add cards to them. To ensure card is learned, user is encouraged to vote plus every time he gets card's answer immediately right, and in every other case vote minus. This behaviour is enforced by the fact that only way to delete card is to vote plus three times. Users can switch between card view and stack list view by clicking the following navigation icon.",c.a.createElement("img",{src:B.a,alt:"Icon not available"}))))},q=function(){return c.a.createElement("p",{className:"footer"},(new Date).getFullYear()," Korts |",c.a.createElement(D,{className:"text-button",text:"About",to:"/about"}))},Q=function(e){return c.a.createElement("div",{className:"site-wrapper"},c.a.createElement(J,{user:e.user}),c.a.createElement("main",null,c.a.createElement(V,null)),c.a.createElement(q,null))},Y=n(8),$=function(e){var t=e.passwordHint,n=e.usernameHint,a=e.username,r=e.password,s=e.buttonText,i=e.submitHandler,o=e.usernameHandler,u=e.passwordHandler;return c.a.createElement("form",{onSubmit:i},c.a.createElement("div",null,c.a.createElement("input",{placeholder:n,className:"white-input",id:"username",value:a,onChange:o})),c.a.createElement("div",null,c.a.createElement("input",{placeholder:t,className:"white-input",id:"password",type:"password",value:r,onChange:u})),c.a.createElement(D,{id:"login-button",text:s,className:"pink-box-button",type:"submit"}))},X=function(){var e=Object(o.b)(),t=Object(r.useState)(""),n=Object(Y.a)(t,2),a=n[0],s=n[1],i=Object(r.useState)(""),u=Object(Y.a)(i,2),l=u[0],d=u[1],f=function(){var t=Object(p.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),t.prev=1,!(l.length<3||a.length<3)){t.next=4;break}throw new Error("Password's and username's minimum length is 3");case 4:e(w({username:a,password:l})),s(""),d(""),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(b(t.t0.message,5));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return c.a.createElement("div",{className:"form-container"},c.a.createElement(M,{to:"/"}),c.a.createElement($,{username:a,password:l,usernameHandler:function(e){var t=e.target;return s(t.value)},passwordHandler:function(e){var t=e.target;return d(t.value)},submitHandler:f,buttonText:"Sign Up",to:"/",usernameHint:"Username (min. length 3)",passwordHint:"Password (min. length 3)"}))},Z=function(e){var t=e.notification;return t?c.a.createElement("div",{className:"notification"},t):null},ee=function(e){return c.a.createElement("div",{className:"site-wrapper"},c.a.createElement(Z,{notification:e.notification}),c.a.createElement("main",null,c.a.createElement(X,null)),c.a.createElement(q,null))},te=function(){var e=Object(o.b)();return c.a.createElement("p",{className:"text"},"Don't have an account?"," ",c.a.createElement(D,{className:"pink-box-button",onClick:function(){e({type:"NULL_SIGN_UP_USER"})},text:"Sign up",to:"/signup"}))},ne=function(){var e=Object(o.b)(),t=Object(r.useState)(""),n=Object(Y.a)(t,2),a=n[0],s=n[1],i=Object(r.useState)(""),u=Object(Y.a)(i,2),l=u[0],d=u[1],f=function(){var t=Object(p.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),t.prev=1,!(l.length<3||a.length<3)){t.next=4;break}throw new Error("Password's and username's minimum length is 3");case 4:e({type:"NULL_SIGN_UP_USER"}),e(A({username:a,password:l})),s(""),d(""),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e(b(t.t0.message,5));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}();return c.a.createElement("div",{className:"form-container"},c.a.createElement(G,null),c.a.createElement($,{username:a,password:l,usernameHandler:function(e){var t=e.target;return s(t.value)},passwordHandler:function(e){var t=e.target;return d(t.value)},submitHandler:f,buttonText:"Log In",usernameHint:"Username (min. length 3)",passwordHint:"Password (min. length 3)"}),c.a.createElement(te,null))},ae=function(e){return c.a.createElement("div",{className:"site-wrapper"},c.a.createElement(Z,{notification:e.notification}),c.a.createElement("main",null,c.a.createElement(ne,null)),c.a.createElement(q,null))},re=function(){var e=Object(o.b)();return c.a.createElement("div",{className:"container-2"},c.a.createElement(W,{to:"/"}),c.a.createElement(F,{className:"pink-box-button",text:"Log Out",handleClick:function(){e(I())}}))},ce=function(e){return c.a.createElement("div",{id:"CRUD"},c.a.createElement("input",{placeholder:e.getStackName(e.stackIndex),className:"white-rename-input",id:"collection-name",type:"text",value:e.stackName,onChange:function(t){var n=t.target;return e.setStackName(n.value)}}),c.a.createElement("button",{id:"rename-button",onClick:function(){return e.rename(e.stackName)}},"Rename"),c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{onClick:function(){return e.createStack(e.cardHint,e.cardAnswer,e.stackName)}},"Create Stack and Card"),c.a.createElement("button",{onClick:function(){return e.addCardToStack(e.cardHint,e.cardAnswer)}},"Add card to Stack"),c.a.createElement("button",{onClick:e.deleteStack},"Delete Stack")))},se=function(e){var t=function(e){e.stopPropagation()};return c.a.createElement(c.a.Fragment,null,!0===e.showAnswer?c.a.createElement("div",{id:"card",onClick:e.flipCard},c.a.createElement("p",{className:"hint-ans"},"Answer"),c.a.createElement("input",{onClick:t,placeholder:e.getCardInfo(e.cardIndex),className:"white-card-input",id:"card-info",type:"text",value:e.cardAnswer,onChange:function(t){var n=t.target;return e.setCardAnswer(n.value)}})):c.a.createElement("div",{id:"card",onClick:e.flipCard},c.a.createElement("p",{className:"hint-ans"},"Hint"),c.a.createElement("input",{onClick:t,placeholder:e.getCardInfo(e.cardIndex),className:"white-card-input",id:"card-info",type:"text",value:e.cardHint,onChange:function(t){var n=t.target;return e.setCardHint(n.value)}})))},ie=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:B.a,alt:"Click here to view collections",height:"87",width:"100",onClick:e.toggleRenderCollections}))},oe=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("ol",null,e.stacks.map((function(t){return c.a.createElement("li",{onClick:function(){return e.setStack(t.stack)},key:t.stack},t.stack)}))))},ue=n(41),le=n.n(ue),de=n(42),fe=n.n(de),me=n(43),pe=n.n(me),ve=n(44),he=n.n(ve),ge=function(e){return c.a.createElement("div",{id:"vote-navigation"},c.a.createElement("img",{src:fe.a,alt:"Click here for next card",height:"87",width:"100",onClick:e.previousCard}),c.a.createElement("div",{id:"vote"},c.a.createElement("img",{src:pe.a,alt:"Click here to add plus",height:"87",width:"100",onClick:e.votePlus}),c.a.createElement("p",{className:"plusses-minuses"},e.getPlusses()," * +"),c.a.createElement("img",{src:he.a,alt:"Click here to add minus",height:"87",width:"100",onClick:e.voteMinus}),c.a.createElement("p",{className:"plusses-minuses"},e.getMinuses()," * -")),c.a.createElement("img",{src:le.a,alt:"Click here for next card",height:"87",width:"100",onClick:e.nextCard}))},be=function(e){var t=Object(o.b)(),n=Object(r.useState)(0),a=Object(Y.a)(n,2),s=a[0],i=a[1],u=Object(r.useState)(0),l=Object(Y.a)(u,2),d=l[0],f=l[1],v=Object(r.useState)(!1),h=Object(Y.a)(v,2),g=h[0],k=h[1],w=Object(r.useState)(!1),E=Object(Y.a)(w,2),O=E[0],x=E[1],C=Object(r.useState)(""),j=Object(Y.a)(C,2),T=j[0],I=j[1],A=Object(r.useState)(""),U=Object(Y.a)(A,2),_=U[0],H=U[1],P=Object(r.useState)(""),L=Object(Y.a)(P,2),R=L[0],K=L[1],D=function(t){if(e.stacks.length>0){var n=null===t?0:t;try{return e.stacks[n].stack}catch(a){return e.stacks[0].stack}}},F=function(t){return e.stacks.find((function(e){return e.stack===D(t)}))},G=function(){k(!g)};return g?c.a.createElement("div",{className:".container-1"},e.stacks.length>=1?c.a.createElement(oe,{stacks:e.stacks,setStack:function(t){try{i(e.stacks.findIndex((function(e){return e.stack===t}))),k(!1)}catch(n){console.log(n)}}}):c.a.createElement("p",null,"Not available"),c.a.createElement(ie,{toggleRenderCollections:G})):c.a.createElement("div",{className:".container-1"},c.a.createElement(ce,{getStackName:D,stackIndex:s,setStackName:I,rename:function(n){try{if(""===n)throw new Error("Provide stack name");if(e.stacks){for(var a=!1,r=0;r<e.stacks.length;r++)if(e.stacks[r].stack===n){a=!0;break}if(a)throw new Error("Provide unique stack name")}var c=F(s),i=Object(S.a)(Object(S.a)({},c),{},{stack:n});t(function(e,t){return function(){var n=Object(p.a)(m.a.mark((function n(a){var r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,N.update(e.id,e);case 3:r=n.sent,a({type:"UPDATE_STACK",data:r}),a(b("".concat(t," renamed to ").concat(e.stack),5)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),a(b(n.t0.message,5));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(i,c.stack)),I("")}catch(o){t(b(o.message,5))}},createStack:function(e,n,a){try{if(""===e&&""===n)throw new Error("Provide hint and/or answer");if(""===a)throw new Error("Provide stack name");t((r={stack:a,flashcard:{hint:e,answer:n,plusses:0,minuses:0}},function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.create(r);case 3:n=e.sent,t({type:"CREATE_STACK",data:n}),t(b("".concat(n.stack," created"),5)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(b(e.t0.message,5));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),K(""),H(""),I("")}catch(c){t(b(c.message,5))}var r},addCardToStack:function(e,n){try{var a=F(s);if(""===e||""===n)throw new Error("Provide hint and answer");var r=Object(S.a)(Object(S.a)({},a.flashcards[d]),{},{hint:e,answer:n,plusses:0,minuses:0});t(y(a,r)),K(""),H(""),I("")}catch(c){t(b(c.message,5))}},stackName:T,cardHint:_,cardAnswer:R,deleteStack:function(){try{var e=F(s);t(function(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.remove(e.id);case 3:n({type:"REMOVE_STACK",data:e.id}),n(b("".concat(e.stack," removed"),5)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(b(t.t0.message,5));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(e))}catch(n){t(b(n.message,5))}}}),c.a.createElement(se,{showAnswer:O,flipCard:function(){x(!O)},getCardInfo:function(e){var t=F(s);if(t){var n=null===e?0:e;try{return O?t.flashcards[n].answer:t.flashcards[n].hint}catch(a){f(0)}}},cardAnswer:R,setCardAnswer:K,cardHint:_,setCardHint:H,cardIndex:d}),c.a.createElement(ge,{previousCard:function(){O&&x(!1),f(d-1)},nextCard:function(){O&&x(!1),f(d+1)},votePlus:function(){try{var e=F(s);e.flashcards[d].plusses+=1;var n=e.flashcards[d];t(y(e,n))}catch(a){t(b("Cannot vote before card is loaded",5))}},voteMinus:function(){try{var e=F(s);e.flashcards[d].minuses+=1;var n=e.flashcards[d];t(y(e,n))}catch(a){t(b("Cannot vote before card is loaded",5))}},getPlusses:function(){var e=F(s);try{return e.flashcards[d].plusses}catch(t){return"Not available"}},getMinuses:function(){var e=F(s);try{return e.flashcards[d].minuses}catch(t){return"Not available"}}}),c.a.createElement(ie,{toggleRenderCollections:G}))},ke=function(e){return c.a.createElement("div",{className:"site-wrapper"},c.a.createElement(Z,{notification:e.notification}),c.a.createElement(re,null),c.a.createElement("main",null,c.a.createElement(be,{stacks:e.stacks})),c.a.createElement(q,null))},we=function(){var e=Object(o.b)();Object(r.useEffect)((function(){e(function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=JSON.parse(window.localStorage.getItem("loggedUser")))&&(N.setToken(n.token),t({type:"INIT",loggedUser:n}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(o.c)((function(e){return e.user}));Object(r.useEffect)((function(){e(function(e){return function(){var t=Object(p.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.getAll();case 3:a=t.sent,e&&n({type:"INIT_STACKS",data:a.filter((function(t){return t.user.username===e.username}))}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(b(t.t0.message,5));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[e,t]);var n=Object(o.c)((function(e){return e.signUpUser})),a=Object(o.c)((function(e){return e.notification})),s=Object(o.c)((function(e){return e.stacks}));return c.a.createElement(c.a.Fragment,null,c.a.createElement(R.a,null,c.a.createElement(K.d,null,c.a.createElement(K.b,{path:"/signup"},n?c.a.createElement(K.a,{to:"/"}):c.a.createElement(ee,{notification:a})),c.a.createElement(K.b,{path:"/about"},c.a.createElement(Q,{user:t})),c.a.createElement(K.b,{path:"/"},null===t?c.a.createElement(ae,{notification:a}):c.a.createElement(ke,{user:t,notification:a,stacks:s})))))};i.a.render(c.a.createElement(o.a,{store:H},c.a.createElement(we,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");P?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):L(e)}))}}()}},[[46,1,2]]]);
//# sourceMappingURL=main.58d56232.chunk.js.map