(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[742],{7627:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forgot-password",function(){return r(1495)}])},4427:function(e,n,r){"use strict";var s=r(5893);n.Z=function(){return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"45.77",height:"35.001",viewBox:"0 0 45.77 35.001",children:(0,s.jsx)("path",{id:"noun_cloth_2129414",d:"M437.579,459a1.344,1.344,0,0,1-1.3-.867l-3.26-8.556H418.69a2.69,2.69,0,0,1-2.69-2.692V426.692A2.691,2.691,0,0,1,418.7,424h18.843a1.346,1.346,0,0,1,1.218.773l4.07,8.65h16.252a2.69,2.69,0,0,1,2.69,2.692v20.192a2.691,2.691,0,0,1-2.7,2.692Zm-.895-32.308H418.7s0,6.731,0,20.192h27.494Zm7.41,9.423,5.432,11.542a1.346,1.346,0,0,1-.332,1.586l-8.073,7.064h17.952s0-6.731,0-20.192Zm-5.986,19.251,6.617-5.79H435.9Z",transform:"translate(-416 -424)"})})}},7778:function(e,n,r){"use strict";var s=r(5893),t=r(7294),a=r(5617),c=r(5815),i=r(4427),o=r(1664),l=r.n(o),u=r(1163);n.Z=function(e){var n=e.isErrorPage,r=(0,u.useRouter)(),o=(0,a.v9)((function(e){return e.cart})).cartItems,d=["/"],h=(0,t.useState)(!(!d.includes(r.pathname)||n)),m=h[0],f=h[1],p=(0,t.useState)(!1),x=p[0],j=p[1],v=(0,t.useState)(!1),N=v[0],w=v[1],_=(0,t.useRef)(null),b=(0,t.useRef)(null),g=function(){0===window.pageYOffset?f(!0):f(!1)};(0,t.useEffect)((function(){d.includes(r.pathname)&&!n&&(g(),window.onscroll=function(){g()})}),[]);return(0,c.Z)(_,(function(){j(!1)})),(0,c.Z)(b,(function(){w(!1)})),(0,s.jsx)("header",{className:"site-header ".concat(m?"":"site-header--fixed"),children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)(l(),{href:"/",children:(0,s.jsx)("a",{children:(0,s.jsxs)("h1",{className:"site-logo",children:[(0,s.jsx)(i.Z,{}),"E-Shop"]})})}),(0,s.jsxs)("nav",{ref:_,className:"site-nav ".concat(x?"site-nav--open":""),children:[(0,s.jsx)(l(),{href:"/products",children:(0,s.jsx)("a",{children:"Products"})}),(0,s.jsx)("a",{href:"#",children:"Inspiration"}),(0,s.jsx)("a",{href:"#",children:"Rooms"}),(0,s.jsx)("button",{className:"site-nav__btn",children:(0,s.jsx)("p",{children:"Account"})})]}),(0,s.jsxs)("div",{className:"site-header__actions",children:[(0,s.jsxs)("button",{ref:b,className:"search-form-wrapper ".concat(N?"search-form--active":""),children:[(0,s.jsxs)("form",{className:"search-form",children:[(0,s.jsx)("i",{className:"icon-cancel",onClick:function(){return w(!N)}}),(0,s.jsx)("input",{type:"text",name:"search",placeholder:"Enter the product you are looking for"})]}),(0,s.jsx)("i",{onClick:function(){return w(!N)},className:"icon-search"})]}),(0,s.jsx)(l(),{href:"/cart",children:(0,s.jsxs)("button",{className:"btn-cart",children:[(0,s.jsx)("i",{className:"icon-cart"}),o.length>0&&(0,s.jsx)("span",{className:"btn-cart__count",children:o.length})]})}),(0,s.jsx)(l(),{href:"/login",children:(0,s.jsx)("button",{className:"site-header__btn-avatar",children:(0,s.jsx)("i",{className:"icon-avatar"})})}),(0,s.jsx)("button",{onClick:function(){return j(!0)},className:"site-header__btn-menu",children:(0,s.jsx)("i",{className:"btn-hamburger",children:(0,s.jsx)("span",{})})})]})]})})}},1659:function(e,n,r){"use strict";r.d(n,{Z:function(){return o}});var s=r(5893),t=r(9008),a=r.n(t),c=r(7778),i=r(1163);function o(e){var n=e.children,r=e.title,t=void 0===r?"Next.js Ecommerce":r,o=(0,i.useRouter)().pathname;return(0,s.jsxs)("div",{className:"app-main",children:[(0,s.jsx)(a(),{children:(0,s.jsx)("title",{children:t})}),(0,s.jsx)(c.Z,{}),(0,s.jsx)("main",{className:"/"!==o?"main-page":"",children:n})]})}},1495:function(e,n,r){"use strict";r.r(n);var s=r(4051),t=r.n(s),a=r(5893),c=r(1659),i=r(1664),o=r.n(i),l=r(2283),u=r(9708),d=r(1604);function h(e,n,r,s,t,a,c){try{var i=e[a](c),o=i.value}catch(l){return void r(l)}i.done?n(o):Promise.resolve(o).then(s,t)}n.default=function(){var e=(0,l.cI)(),n=e.register,r=e.handleSubmit,s=e.errors,i=function(){var e,n=(e=t().mark((function e(n){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.q)("".concat(u.f,"/api/login"),{email:n.email});case 2:r=e.sent,console.log(r);case 4:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(s,t){var a=e.apply(n,r);function c(e){h(a,s,t,c,i,"next",e)}function i(e){h(a,s,t,c,i,"throw",e)}c(void 0)}))});return function(e){return n.apply(this,arguments)}}();return(0,a.jsx)(c.Z,{children:(0,a.jsx)("section",{className:"form-page",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"back-button-section",children:(0,a.jsx)(o(),{href:"/products",children:(0,a.jsxs)("a",{children:[(0,a.jsx)("i",{className:"icon-left"})," Back to shop"]})})}),(0,a.jsxs)("div",{className:"form-block",children:[(0,a.jsx)("h2",{className:"form-block__title",children:"Forgot your password?"}),(0,a.jsx)("p",{className:"form-block__description",children:"Enter your email or phone number and recover your account"}),(0,a.jsxs)("form",{className:"form",onSubmit:r(i),children:[(0,a.jsxs)("div",{className:"form__input-row",children:[(0,a.jsx)("input",{className:"form__input",placeholder:"email",type:"text",name:"email",ref:n({required:!0,pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}),s.email&&"required"===s.email.type&&(0,a.jsx)("p",{className:"message message--error",children:"This field is required"}),s.email&&"pattern"===s.email.type&&(0,a.jsx)("p",{className:"message message--error",children:"Please write a valid email"})]}),(0,a.jsxs)("div",{className:"form__input-row",children:[(0,a.jsx)("input",{className:"form__input",type:"password",placeholder:"Password",name:"password",ref:n({required:!0})}),s.password&&"required"===s.password.type&&(0,a.jsx)("p",{className:"message message--error",children:"This field is required"})]}),(0,a.jsx)("button",{type:"submit",className:"btn btn--rounded btn--yellow btn-submit",children:"Reset password"})]})]})]})})})}},9708:function(e,n,r){"use strict";r.d(n,{f:function(){return s}});var s="https://next-ecommerce-front.vercel.app"},1604:function(e,n,r){"use strict";r.d(n,{q:function(){return i}});var s=r(4051),t=r.n(s);function a(e,n,r,s,t,a,c){try{var i=e[a](c),o=i.value}catch(l){return void r(l)}i.done?n(o):Promise.resolve(o).then(s,t)}function c(e){return function(){var n=this,r=arguments;return new Promise((function(s,t){var c=e.apply(n,r);function i(e){a(c,s,t,i,o,"next",e)}function o(e){a(c,s,t,i,o,"throw",e)}i(void 0)}))}}function i(){return o.apply(this,arguments)}function o(){return o=c(t().mark((function e(){var n,r,s,a=arguments;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:"",r=a.length>1&&void 0!==a[1]?a[1]:{},e.next=3,fetch(n,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(r)});case 3:return s=e.sent,e.abrupt("return",s.json());case 5:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}}},function(e){e.O(0,[964,283,774,888,179],(function(){return n=7627,e(e.s=n);var n}));var n=e.O();_N_E=n}]);