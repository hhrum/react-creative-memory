(this["webpackJsonpreact-creative-memory"]=this["webpackJsonpreact-creative-memory"]||[]).push([[0],{32:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(14),a=n(10),i=n(6),o=n(4),u=n(1),l=function(t){var e=t.title,n=t.onClick;return Object(u.jsx)("button",{onClick:n,className:"button",children:e})},j=(n(32),function(t){var e=t.left,n=t.center,c=t.right;return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("div",{className:"header__left",children:e}),Object(u.jsx)("div",{className:"header__center",children:n}),Object(u.jsx)("div",{className:"header__right",children:c})]})}),s=function(t){var e=t.children,n=Object(o.f)();return Object(u.jsx)("div",{onClick:function(t){t.preventDefault(),n.push("/")},children:e||"\u041d\u0430\u0437\u0430\u0434"})},b=(n(35),function(t){var e=t.children,n=Object(o.g)();return Object(u.jsxs)("div",{className:"default-layout",children:[Object(u.jsx)(j,{left:"/"!==n.pathname?Object(u.jsx)(s,{}):null,center:Object(u.jsx)("h2",{style:{textAlign:"center"},children:"Memory"})}),Object(u.jsx)("div",{className:"default-layout__content",children:e})]})}),O=(n(36),function(t){var e=t.title,n=t.onClick;return Object(u.jsx)("button",{onClick:n,className:"button button--secondary",children:e})}),d=function(){var t=Object(o.f)();return Object(u.jsx)(b,{children:Object(u.jsxs)("div",{className:"home",children:[Object(u.jsxs)("h3",{className:"home__title",children:["\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c! ",Object(u.jsx)("br",{})," \u0425\u043e\u0442\u0438\u0442\u0435 \u043d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443?"]}),Object(u.jsxs)("div",{className:"home__btns",children:[Object(u.jsx)(l,{onClick:function(e){e.preventDefault(),t.push("/memory")},title:"\u0418\u0433\u0440\u0430\u0442\u044c"}),Object(u.jsx)(O,{onClick:function(e){e.preventDefault(),t.push("/history")},title:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0438\u0433\u0440"})]})]})})},f=n(17),h=(n(37),"game/START_SESSION"),v="game/END_SESSION",m="game/FOUND_CARD",p="game/SET_ACTIVE_ITEM",x="timer/INIT_TIMER",y="timer/CLOSE_TIMER",_="timer/INCREMENT_TIME",E="timer/DROP_TIME";var N="board/GENERATE_BOARD",T="board/OPEN_ITEM",g="board/CLOSE_ITEM";function I(t){return function(e){setTimeout((function(){t.forEach((function(t){e(function(t){return{type:g,payload:t}}(t))}))}),500)}}var S="alert/SHOW_ALERT",D="alert/HIDE_ALERT";function w(t){return function(e){e({type:S,payload:t}),setTimeout((function(){return e({type:D})}),5e3)}}var A=function(t){var e=Math.floor(t/60),n=t%60;return"".concat(e<10?"0".concat(e):e,":").concat(n<10?"0".concat(n):n)};function C(){return function(t,e){var n=e(),c=n.game,r=n.timer;if(c.gameSessionIsExist||(t({type:h}),t({type:N})),!r.interval){var a=setInterval((function(){return t({type:_})}),1e3);t(function(t){return{type:x,payload:t}}(a))}}}function M(){return function(t,e){var n=e().timer;clearInterval(n.interval),t({type:y})}}function R(){return function(t,e){var n=e().timer;t(M()),t(w({title:"\u041f\u043e\u0431\u0435\u0434\u0430!",content:"\u0412\u044b \u043d\u0430\u0448\u043b\u0438 \u0432\u0441\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u0437\u0430 ".concat(A(n.time))})),t({type:v})}}function L(t){return function(e,n){var c,r=n().game;if(e(function(t){return{type:T,payload:t}}(t)),!r.active)return e(k(t)),null;r.active.card.value===t.card.value?(e((c=t.card,{type:m,payload:c})),e((function(t,e){0===e().game.cardsToFind.length&&t(R())}))):e(I([r.active,t])),e(k(null))}}function k(t){return{type:p,payload:t}}var F=function(t){var e=t.open,n=t.item,c=Object(i.b)();if(!n)return null;return Object(u.jsx)("div",{className:"memory-item",onClick:function(t){t.preventDefault(),n.isOpen||c(L(n))},children:e||n.isOpen?n.card.value:null})},U=(n(38),function(t){var e=t.open,n=t.row;return Object(u.jsx)("div",{className:"board__row",children:n.map((function(t,n){return Object(u.jsx)(F,{open:e,item:t},n)}))})}),X=function(){var t=Object(i.c)((function(t){return t.board.board})),e=Object(c.useState)(!0),n=Object(f.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){setTimeout((function(){return a(!1)}),3e3)})),Object(u.jsx)("div",{className:"board",children:t.map((function(t,e){return Object(u.jsx)(U,{open:r,row:t},e)}))})},B=(n(39),function(){var t=Object(i.c)((function(t){return t.timer.time}));return Object(u.jsx)("div",{children:Object(u.jsxs)("h3",{style:{marginBottom:32},children:["\u0412\u0440\u0435\u043c\u0435\u043d\u0438 \u0443\u0436\u0435 \u043f\u0440\u043e\u0448\u043b\u043e: ",A(t)," "]})})}),V=function(){return Object(u.jsx)(b,{children:Object(u.jsxs)("div",{className:"memory",children:[Object(u.jsx)(B,{}),Object(u.jsx)(X,{})]})})},H=(n(40),function(){var t=Object(i.c)((function(t){return t.alert}));return t.show?Object(u.jsx)("div",{className:"alert-wrapper",children:Object(u.jsxs)("div",{className:"alert",children:[Object(u.jsx)("h3",{className:"alert__title",children:t.title}),Object(u.jsx)("div",{className:"alert__content",children:t.content})]})}):null}),J=(n(41),n(42),function(){return Object(u.jsx)(b,{children:Object(u.jsxs)("div",{className:"history",children:[Object(u.jsx)("h3",{className:"history__title",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u044b\u0433\u0440\u0430\u043d\u043d\u044b\u0445 \u0432\u0430\u043c\u0438 \u0438\u0433\u0440"}),Object(u.jsx)("div",{className:"history__content"})]})})}),P=function(){return Object(i.b)()(Object(o.h)("/memory")?C():M()),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(H,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/history",children:Object(u.jsx)(J,{})}),Object(u.jsx)(o.a,{path:"/memory",children:Object(u.jsx)(V,{})}),Object(u.jsx)(o.a,{path:"/",children:Object(u.jsx)(d,{})})]})]})},G=n(3),W=n(2),q="DEFAULT",z=n(13),K=[];new Array(18).fill("").forEach((function(t,e){K.push({value:e+1})}));var Q,Y,Z,$,tt=K,et={gameSessionIsExist:!1,cardsToFind:Object(z.a)(tt),active:null},nt=(Q={},Object(G.a)(Q,q,(function(t){return t})),Object(G.a)(Q,h,(function(t){return Object(W.a)(Object(W.a)({},t),{},{gameSessionIsExist:!0})})),Object(G.a)(Q,v,(function(t){return Object(W.a)(Object(W.a)({},t),{},{gameSessionIsExist:!1})})),Object(G.a)(Q,m,(function(t,e){return Object(W.a)(Object(W.a)({},t),{},{cardsToFind:t.cardsToFind.filter((function(t){return t.value!==e.value}))})})),Object(G.a)(Q,p,(function(t,e){return Object(W.a)(Object(W.a)({},t),{},{active:e})})),Q),ct={time:0,interval:null},rt=(Y={},Object(G.a)(Y,q,(function(t){return t})),Object(G.a)(Y,x,(function(t,e){return Object(W.a)(Object(W.a)({},t),{},{interval:e})})),Object(G.a)(Y,y,(function(t){return Object(W.a)(Object(W.a)({},t),{},{interval:null})})),Object(G.a)(Y,_,(function(t){return Object(W.a)(Object(W.a)({},t),{},{time:t.time+1})})),Object(G.a)(Y,E,(function(t){return Object(W.a)(Object(W.a)({},t),{},{time:0})})),Y),at=function(){return new Array(6).fill(null).map((function(t){return new Array(6).fill(null)}))},it=function(t,e,n){var c=Math.floor(Math.random()*e.length),r=Object(f.a)(e.splice(c,1)[0],2),a=r[0],i=r[1];t[a][i]=function(t,e,n){return{isOpen:!1,x:t,y:e,card:n}}(a,i,n)},ot=function(t,e){var n=Object(z.a)(t[e.x]);n[e.y]=e;var c=Object(z.a)(t);return c[e.x]=n,c},ut={board:at()},lt=(Z={},Object(G.a)(Z,q,(function(t){return t})),Object(G.a)(Z,N,(function(t){var e=at(),n=[];return e.forEach((function(t,e){t.forEach((function(t,c){n.push([e,c])}))})),tt.forEach((function(t){it(e,n,t),it(e,n,t)})),Object(W.a)(Object(W.a)({},t),{},{board:e})})),Object(G.a)(Z,T,(function(t,e){var n=ot(t.board,Object(W.a)(Object(W.a)({},e),{},{isOpen:!0}));return Object(W.a)(Object(W.a)({},t),{},{board:n})})),Object(G.a)(Z,g,(function(t,e){var n=ot(t.board,Object(W.a)(Object(W.a)({},e),{},{isOpen:!1}));return Object(W.a)(Object(W.a)({},t),{},{board:n})})),Z),jt={show:!1,title:null,content:null},st=($={},Object(G.a)($,q,(function(t){return t})),Object(G.a)($,S,(function(t,e){return Object(W.a)(Object(W.a)(Object(W.a)({},t),e),{},{show:!0})})),Object(G.a)($,D,(function(t){return Object(W.a)(Object(W.a)({},t),{},{show:!1})})),$),bt=Object(a.b)({game:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,e=arguments.length>1?arguments[1]:void 0,n=nt[e.type]||nt.DEFAULT;return n(t,e.payload)},timer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,e=arguments.length>1?arguments[1]:void 0,n=rt[e.type]||rt.DEFAULT;return n(t,e.payload)},board:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,e=arguments.length>1?arguments[1]:void 0,n=lt[e.type]||lt.DEFAULT;return n(t,e.payload)},alert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,e=arguments.length>1?arguments[1]:void 0,n=st[e.type]||st.DEFAULT;return n(t,e.payload)}}),Ot=n(23),dt=n(8),ft=Object(a.d)(bt,Object(a.c)(Object(a.a)(Ot.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),ht=Object(u.jsx)(dt.a,{children:Object(u.jsx)(i.a,{store:ft,children:Object(u.jsx)(c.StrictMode,{children:Object(u.jsx)(P,{})})})}),vt=document.getElementById("root");Object(r.render)(ht,vt)}},[[43,1,2]]]);
//# sourceMappingURL=main.f2260fb6.chunk.js.map