(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__3UDy1",control:"Checkout_control__MDd7R",actions:"Checkout_actions__1Mzfw",submit:"Checkout_submit__38AO4",invalid:"Checkout_invalid__2EM4S"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3mXRf",total:"Cart_total__2snTe",actions:"Cart_actions__28HnU","button--alt":"Cart_button--alt__3vEGp",button:"Cart_button__3riii"}},,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__28gOP",summary:"CartItem_summary__31df4",price:"CartItem_price__2H8nW",amount:"CartItem_amount__3Vi_N",actions:"CartItem_actions__2q-pA"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__1G5eh",icon:"HeaderCartButton_icon__3Jogz",badge:"HeaderCartButton_badge__3Rxt2",bump:"HeaderCartButton_bump__1e6zB"}},,,,function(e,t,n){e.exports={meals:"AvailableMeals_meals__ybCwB","meals-appear":"AvailableMeals_meals-appear__2NMAS",MealsLoading:"AvailableMeals_MealsLoading__VlCZg",MealsError:"AvailableMeals_MealsError__-qLoB"}},function(e,t,n){e.exports={meal:"MealItem_meal__8bDYI",description:"MealItem_description__3ZnL1",price:"MealItem_price__2l0-m"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1mtwe",modal:"Modal_modal__2iK0u","slide-down":"Modal_slide-down__1-ZJI"}},function(e,t,n){e.exports={header:"Header_header__3dTwy","main-image":"Header_main-image__3NkbT"}},,,,function(e,t,n){e.exports={summary:"MealsSummary_summary__3yuLW"}},function(e,t,n){e.exports={card:"Card_card__2Emev"}},function(e,t,n){e.exports={form:"MealItemForm_form__3YPBg"}},function(e,t,n){e.exports={input:"Input_input__13l6P"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(19),a=n.n(c),r=(n(31),n(2)),i=n(1),s=n.n(i),o=n.p+"static/media/meals.2971f633.jpg",l=n(16),u=n.n(l),d=n(9),j=n.n(d),m=n(0),b=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},O=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),x=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useContext)(O).items,o=s.reduce((function(e,t){return e+t.amount}),0),l="".concat(j.a.button," ").concat(c?j.a.bump:"");return Object(i.useEffect)((function(){if(0!==s.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(m.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(m.jsx)("span",{className:j.a.icon,children:Object(m.jsx)(b,{})}),Object(m.jsx)("span",{children:"Your Cart"}),Object(m.jsx)("span",{className:j.a.badge,children:o})]})},h=function(e){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("header",{className:u.a.header,children:[Object(m.jsx)("h1",{children:"Meals"}),Object(m.jsx)(x,{onClick:e.onShowCart})]}),Object(m.jsx)("div",{className:u.a["main-image"],children:Object(m.jsx)("img",{src:o,alt:"A table full of delicious food "})})]})},f=n(20),p=n.n(f),_=function(){return Object(m.jsxs)("section",{className:p.a.summary,children:[Object(m.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(m.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(m.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(6),C=n(12),y=n(13),N=n.n(y),g=n(21),A=n.n(g),M=function(e){return Object(m.jsx)("div",{className:A.a.card,children:e.children})},k=n(14),w=n.n(k),I=n(22),S=n.n(I),E=n(5),R=n(23),F=n.n(R),H=s.a.forwardRef((function(e,t){return Object(m.jsxs)("div",{className:F.a.input,children:[Object(m.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(m.jsx)("input",Object(E.a)({ref:t},e.input))]})})),P=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)();return Object(m.jsxs)("form",{className:S.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=+n;0===n.trim().length||c<1||c>5?a(!1):e.onAddToCart(c)},children:[Object(m.jsx)(H,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",default:"1"}}),Object(m.jsx)("button",{children:"+ Add"}),!c&&Object(m.jsx)("p",{children:"Please enter a valid amount (1-5)"})]})},B=function(e){var t=Object(i.useContext)(O),n="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:w.a.meal,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.name}),Object(m.jsx)("div",{className:w.a.description,children:e.description}),Object(m.jsx)("div",{className:w.a.price,children:n})]}),Object(m.jsx)("div",{children:Object(m.jsx)(P,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})},id:e.id})})]})},D=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),s=Object(r.a)(a,2),o=s[0],l=s[1],u=Object(i.useState)(),d=Object(r.a)(u,2),j=d[0],b=d[1];if(Object(i.useEffect)((function(){l(!0);var e=function(){var e=Object(C.a)(Object(v.a)().mark((function e(){var t,n,a,r;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://meal-menu-9b192-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),l(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){l(!1),b(e.message)}))}),[]),o)return Object(m.jsx)("section",{className:N.a.MealsLoading,children:Object(m.jsx)("p",{children:"Loading..."})});if(j)return Object(m.jsx)("section",{className:N.a.MealsError,children:Object(m.jsx)("p",{children:j})});var O=n.map((function(e){return Object(m.jsx)(B,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(m.jsx)("section",{className:N.a.meals,children:Object(m.jsx)(M,{children:Object(m.jsx)("ul",{children:O})})})},T=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(_,{}),Object(m.jsx)(D,{})]})},L=n(15),z=n.n(L),J=n(10),Y=n.n(J),V=function(e){return Object(m.jsx)("div",{className:z.a.backdrop,onClick:e.onClose})},q=function(e){return Object(m.jsx)("div",{className:z.a.modal,children:Object(m.jsx)("div",{className:z.a.content,children:e.children})})},Z=document.getElementById("overlays"),$=function(e){return Object(m.jsxs)(m.Fragment,{children:[Y.a.createPortal(Object(m.jsx)(V,{onClose:e.onClose}),Z),Y.a.createPortal(Object(m.jsx)(q,{children:e.children}),Z)]})},G=n(7),U=n.n(G),W=function(e){var t="$".concat(e.price.toFixed(2));return Object(m.jsxs)("li",{className:U.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:e.name}),Object(m.jsxs)("div",{className:U.a.summary,children:[Object(m.jsx)("span",{className:U.a.price,children:t}),Object(m.jsxs)("span",{className:U.a.amount,children:["x ",e.amount]})]})]}),Object(m.jsxs)("div",{className:U.a.actions,children:[Object(m.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},K=n(4),X=n.n(K),Q=n(3),ee=n.n(Q),te=function(e){return""===e.trim()},ne=function(e){var t=Object(i.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)(),o=Object(i.useRef)(),l=Object(i.useRef)(),u=Object(i.useRef)(),d="".concat(ee.a.control," ").concat(c.name?"":ee.a.invalid),j="".concat(ee.a.control," ").concat(c.street?"":ee.a.invalid),b="".concat(ee.a.control," ").concat(c.postalCode?"":ee.a.invalid),O="".concat(ee.a.control," ").concat(c.city?"":ee.a.invalid);return Object(m.jsxs)("form",{className:ee.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=o.current.value,r=l.current.value,i=u.current.value,d=!te(n),j=!te(c),m=!te(i),b=5===r.trim().length;a({name:d,street:j,city:m,postalCode:b}),d&&j&&m&&b&&e.onConfirm({name:n,street:c,city:i,postalCode:r})},children:[Object(m.jsxs)("div",{className:d,children:[Object(m.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(m.jsx)("input",{type:"text",id:"name",ref:s}),!c.name&&Object(m.jsx)("p",{children:"Please enter a valid name!"})]}),Object(m.jsxs)("div",{className:j,children:[Object(m.jsx)("label",{htmlFor:"street",children:"Street"}),Object(m.jsx)("input",{type:"text",id:"street",ref:o}),!c.street&&Object(m.jsx)("p",{children:"Please enter a valid street!"})]}),Object(m.jsxs)("div",{className:b,children:[Object(m.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(m.jsx)("input",{type:"text",id:"postal",ref:l}),!c.postalCode&&Object(m.jsx)("p",{children:"Please enter a valid postal code (5 characters long)!"})]}),Object(m.jsxs)("div",{className:O,children:[Object(m.jsx)("label",{htmlFor:"city",children:"City"}),Object(m.jsx)("input",{type:"text",id:"city",ref:u}),!c.city&&Object(m.jsx)("p",{children:"Please enter a valid city!"})]}),Object(m.jsxs)("div",{className:ee.a.actions,children:[Object(m.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(m.jsx)("button",{className:ee.a.submit,children:"Confirm"})]})]})},ce=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],o=Object(i.useState)(!1),l=Object(r.a)(o,2),u=l[0],d=l[1],j=Object(i.useState)(!1),b=Object(r.a)(j,2),x=b[0],h=b[1],f=Object(i.useContext)(O),p="$".concat(f.totalAmount.toFixed(2)),_=f.items.length>0,y=function(e){f.removeItem(e)},N=function(e){f.addItem(e)},g=function(){var e=Object(C.a)(Object(v.a)().mark((function e(t){return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,fetch("https://meal-menu-9b192-default-rtdb.firebaseio.com//orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:f.items})});case 3:d(!1),h(!0),f.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(m.jsx)("ul",{className:X.a["cart-items"],children:f.items.map((function(e){return Object(m.jsx)(W,{name:e.name,amount:e.amount,price:e.price,onRemove:y.bind(null,e.id),onAdd:N.bind(null,e)},e.id)}))}),M=Object(m.jsxs)("div",{className:X.a.actions,children:[Object(m.jsx)("button",{className:X.a["button--alt"],onClick:e.onClose,children:"Close"}),_&&Object(m.jsx)("button",{className:X.a.button,onClick:function(){a(!0)},children:"Order"})]}),k=Object(m.jsxs)(s.a.Fragment,{children:[A,Object(m.jsxs)("div",{className:X.a.total,children:[Object(m.jsx)("span",{children:"Total Amount"}),Object(m.jsx)("span",{children:p})]}),c&&Object(m.jsx)(ne,{onConfirm:g,onCancel:e.onClose}),!c&&M]}),w=Object(m.jsx)("p",{children:"Sending order data..."}),I=Object(m.jsxs)(s.a.Fragment,{children:[Object(m.jsx)("p",{children:"Successfully sent the order!"}),Object(m.jsx)("div",{className:X.a.actions,children:Object(m.jsx)("button",{className:X.a.button,onClick:e.onClose,children:"Close"})})]});return Object(m.jsxs)($,{onClose:e.onClose,children:[!u&&!x&&k,u&&w,!u&&x&&I]})},ae=n(17),re={items:[],totalAmount:0},ie=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[a];if(r){var i=Object(E.a)(Object(E.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ae.a)(e.items))[a]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(E.a)(Object(E.a)({},l),{},{amount:l.amount-1});(s=Object(ae.a)(e.items))[o]=d}return{items:s,totalAmount:u}}return t.type,re},se=function(e){var t=Object(i.useReducer)(ie,re),n=Object(r.a)(t,2),c=n[0],a=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})},clearCart:function(){a({type:"CLEAR"})}};return Object(m.jsx)(O.Provider,{value:s,children:e.children})};var oe=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(m.jsxs)(se,{children:[n&&Object(m.jsx)(ce,{onClose:function(){c(!1)}}),Object(m.jsx)(h,{onShowCart:function(){c(!0)}}),Object(m.jsx)("main",{children:Object(m.jsx)(T,{})})]})};a.a.createRoot(document.getElementById("root")).render(Object(m.jsx)(oe,{}))}],[[33,1,2]]]);
//# sourceMappingURL=main.0d0210c7.chunk.js.map