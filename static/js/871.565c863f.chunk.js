(self.webpackChunkproject_mern=self.webpackChunkproject_mern||[]).push([[871],{5499:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(2982),o=r(885),s=r(2791),l=r(9434),a=r(3504),i=r(9914),c=r(3314),u=r(1124),d=r(1951),m=r(9831),f=r(9085),p=r(1079),x=r(184),h=function(e){var t,r=e.tourBooking;return(0,x.jsxs)("div",{className:"mt-10",children:[(0,x.jsx)("div",{children:(0,x.jsxs)("div",{className:"flex items-center rounded-md bg-white p-6 shadow-[0_0_20px_5px_rgb(0,0,0,0.05)]",children:[(0,x.jsx)("div",{className:"inline-block h-[150px] w-[200px] rounded-md",children:null!==r&&void 0!==r&&null!==(t=r.tour.tourDetail)&&void 0!==t&&t.images[0]?(0,x.jsx)("img",{className:"h-full w-full rounded-md object-cover",alt:"",src:r.tour.tourDetail.images[0]}):(0,x.jsx)("img",{className:"h-full w-full rounded-md object-cover",alt:"",src:"https://images.unsplash.com/photo-1670450734728-c4d6f59134f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"})}),(0,x.jsxs)("div",{className:"ml-5 max-w-[50%]",children:[(0,x.jsx)("div",{className:"text-xl font-semibold text-c3",children:null===r||void 0===r?void 0:r.tour.tourDetail.tourName}),(0,x.jsx)("div",{className:"mt-3 text-base text-c4",children:null===r||void 0===r?void 0:r.tour.tourDetail.tourDes})]}),(null===r||void 0===r?void 0:r.createdAt)&&(0,x.jsxs)("div",{className:"flex-1 text-right text-c4",children:["Booking on"," ",(0,x.jsx)("span",{className:"font-bold text-c2",children:(0,d.default)((0,m.default)(null===r||void 0===r?void 0:r.createdAt),"dd/MM/yyyy HH:mm")})]})]})}),(0,x.jsx)("div",{className:"mt-5 font-Roboto",children:(0,x.jsx)("div",{className:"rounded-md bg-white p-6 shadow-[0_0_20px_5px_rgb(0,0,0,0.05)]",children:(0,x.jsxs)(p.It,{cols:"8",children:[(0,x.jsx)("div",{className:"col-span-1 text-right",children:(0,x.jsxs)(p.Zv,{col:!0,children:[(0,x.jsx)("span",{className:"py-1 font-semibold text-c2",children:"Booking ID"}),(0,x.jsx)("span",{className:"py-1 font-semibold text-c4",children:"Start day"}),(0,x.jsx)("span",{className:"py-1 font-semibold text-c4",children:"End day"}),(0,x.jsx)("span",{className:"py-1 font-semibold text-c2",children:"Passenger"})]})}),(0,x.jsx)("div",{className:"col-span-7 ml-10",children:(0,x.jsxs)(p.Zv,{justify:"between",children:[(0,x.jsxs)(p.Zv,{flex1:!0,col:!0,children:[(0,x.jsx)("span",{className:"py-1 font-semibold text-c2",children:null===r||void 0===r?void 0:r.id}),(0,x.jsx)("span",{className:"py-1 text-c4",children:null===r||void 0===r?void 0:r.tour.tourDetail.startDay}),(0,x.jsx)("span",{className:"py-1 text-c4",children:null===r||void 0===r?void 0:r.tour.tourDetail.endDay}),(0,x.jsx)("span",{className:"py-1 text-c2",children:null===r||void 0===r?void 0:r.passenger})]}),(0,x.jsxs)(p.Zv,{col:!0,className:"text-right",spacing:"3",children:[(null===r||void 0===r?void 0:r.totalPrice)&&(0,x.jsx)("span",{className:"text-2xl font-bold text-primary-red",children:r.totalPrice.toLocaleString("vi-VN",{style:"currency",currency:"VND"})}),(0,x.jsx)("button",{onClick:function(){return f.Am.warning("Feature under development")},className:"font-meidum rounded-md bg-[#F4F5F6] py-2 px-10 text-lg font-bold  text-[#353945]",children:"Cancel tour"}),(0,x.jsx)("button",{onClick:function(){return f.Am.warning("Feature under development")},className:"font-meidum rounded-md bg-[#3B71FE] px-10 py-2 text-lg font-bold   text-white",children:"Book Again"})]})]})})]})})}),(0,x.jsx)("hr",{className:"my-10"})]})},v=function(){var e=(0,u.Z)(),t=(0,l.v9)((function(e){return e.auth})).user,r=(0,s.useState)([]),d=(0,o.Z)(r,2),m=d[0],f=d[1];return console.log("TCL: ManageBookingPage -> tourBooking",m),(0,s.useEffect)((function(){e.get("bookings/user/".concat(t.email)).then((function(e){e.data.map((function(e,t){return e.enable&&f((function(t){return[].concat((0,n.Z)(t),[e])}))}))}))}),[]),(0,x.jsxs)("div",{className:"mx-auto w-full max-w-7xl px-5 lg:px-10",children:[(0,x.jsxs)("div",{className:"mt-5 flex items-center gap-2",children:[(0,x.jsx)("span",{className:"inline-block rotate-180",children:(0,x.jsx)(c.Ec,{})}),(0,x.jsx)(a.rU,{to:"../",className:"text-c3",children:"Home"}),(0,x.jsx)("div",{className:"h-4 w-[1px] bg-slate-400"}),(0,x.jsx)("span",{className:"text-c5",children:"Booking"})]}),(0,x.jsx)(i.Z,{sx:"xl-5",className:"mt-10 text-c2",children:"Bookings"}),!m.length&&(0,x.jsx)("div",{className:"mt-5",children:"You don't have any tours at the moment"}),m.map((function(e,t){return(0,x.jsx)(h,{tourBooking:e},e.id)}))]})}},7470:function(e,t,r){!function(e,t){"use strict";function r(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var n=r(t);function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,o(e,t)}var l=function(e,t){return void 0===e&&(e=[]),void 0===t&&(t=[]),e.length!==t.length||e.some((function(e,r){return!Object.is(e,t[r])}))},a={error:null},i=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state=a,t.resetErrorBoundary=function(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];null==t.props.onReset||(e=t.props).onReset.apply(e,n),t.reset()},t}s(t,e),t.getDerivedStateFromError=function(e){return{error:e}};var r=t.prototype;return r.reset=function(){this.setState(a)},r.componentDidCatch=function(e,t){var r,n;null==(r=(n=this.props).onError)||r.call(n,e,t)},r.componentDidUpdate=function(e,t){var r,n,o=this.state.error,s=this.props.resetKeys;null!==o&&null!==t.error&&l(e.resetKeys,s)&&(null==(r=(n=this.props).onResetKeysChange)||r.call(n,e.resetKeys,s),this.reset())},r.render=function(){var e=this.state.error,t=this.props,r=t.fallbackRender,o=t.FallbackComponent,s=t.fallback;if(null!==e){var l={error:e,resetErrorBoundary:this.resetErrorBoundary};if(n.isValidElement(s))return s;if("function"===typeof r)return r(l);if(o)return n.createElement(o,l);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},t}(n.Component);function c(e,t){var r=function(r){return n.createElement(i,t,n.createElement(e,r))},o=e.displayName||e.name||"Unknown";return r.displayName="withErrorBoundary("+o+")",r}function u(e){var t=n.useState(null),r=t[0],o=t[1];if(null!=e)throw e;if(null!=r)throw r;return o}e.ErrorBoundary=i,e.useErrorHandler=u,e.withErrorBoundary=c,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(2791))},5861:function(e,t,r){"use strict";function n(e,t,r,n,o,s,l){try{var a=e[s](l),i=a.value}catch(c){return void r(c)}a.done?t(i):Promise.resolve(i).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,s){var l=e.apply(t,r);function a(e){n(l,o,s,a,i,"next",e)}function i(e){n(l,o,s,a,i,"throw",e)}a(void 0)}))}}r.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=871.565c863f.chunk.js.map