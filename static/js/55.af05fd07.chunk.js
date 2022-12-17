"use strict";(self.webpackChunkproject_mern=self.webpackChunkproject_mern||[]).push([[55],{5629:function(e,n,t){var r=t(7470),s=t(9048),a=t(5159),c=t(1079),o=t(184);n.Z=(0,r.withErrorBoundary)((function(e){var n=e.radius,t=e.background,r=e.children,c=e.className,i=e.disable,l=e.onClick,u=e.icon,d=s.E0.find((function(e){return e.radius===n})),x=s.QN.find((function(e){return e.backgroundColor===t}));return(0,o.jsxs)("button",{onClick:l,type:"submit",className:(0,a.Z)("outline-none",n&&d.radiusCss,c,t&&x.backgroundCss,i&&"pointer-events-none select-none bg-opacity-50",u&&"flex items-center"),children:[u&&(0,o.jsx)("span",{children:u}),r]})}),{FallbackComponent:c.SV})},6460:function(e,n,t){t(2791);var r=t(184);n.Z=function(e){var n=e.children;return(0,r.jsx)("div",{className:"px-5 py-[30px] dark:bg-c2 lg:mx-auto lg:max-w-7xl lg:px-10 lg:py-5",children:n})}},3453:function(e,n,t){t(2791);var r=t(5159),s=t(7470),a=t(111),c=t(184);n.Z=(0,s.withErrorBoundary)((function(e){var n=e.htmlFor,t=e.className,s=void 0===t?"":t,a=e.children;return(0,c.jsx)("div",{className:"inline-block",children:(0,c.jsx)("label",{htmlFor:n,className:(0,r.Z)("inline-block cursor-pointer text-sm font-medium text-c3 dark:text-c4",s),children:a})})}),{FallbackComponent:a.Z})},1124:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(4165),s=t(5861),a=t(2791),c=t(9434),o=t(8062),i=t(1413),l=t(9776),u=t(6737);function d(){function e(){return(e=(0,s.Z)((0,r.Z)().mark((function e(){var n,t,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=(0,u.LP)(),t=n.refresh_token){e.next=3;break}return e.abrupt("return",null);case 3:return e.next=5,o.Z.post("token/".concat(t),{"Content-Type":"Application/json",refreshToken:t});case 5:if((s=e.sent).data){e.next=8;break}return e.abrupt("return",null);case 8:return(0,u.Fr)(s.data.accessToken,s.data.refreshToken),(0,l.Ct)((function(e){return(0,i.Z)((0,i.Z)({},e),{},{accessToken:s.data.accessToken})})),e.abrupt("return",s.data.accessToken||"");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){return e.apply(this,arguments)}}function x(){var e=d(),n=(0,c.v9)((function(e){return e})).auth;return(0,a.useEffect)((function(){var t=o.j.interceptors.request.use(function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.headers.Authorization||(t.headers.Authorization="Bearer ".concat(n.accessToken)),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)})),a=o.j.interceptors.response.use((function(e){return e}),function(){var n=(0,s.Z)((0,r.Z)().mark((function n(t){var s,a,c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=null===t||void 0===t?void 0:t.config,403!==(null===t||void 0===t||null===(s=t.response)||void 0===s?void 0:s.status)||null!==a&&void 0!==a&&a.sent){n.next=8;break}return a.sent=!0,n.next=5,e();case 5:return c=n.sent,a.headers.Authorization="Bearer ".concat(c),n.abrupt("return",(0,o.j)(a));case 8:return n.abrupt("return",Promise.reject(t));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());return function(){o.j.interceptors.request.eject(t),o.j.interceptors.response.eject(a)}}),[n.accessToken,e]),o.j}},8402:function(e,n,t){t.d(n,{G:function(){return i}});var r=t(4165),s=t(5861),a=t(885),c=t(2791),o=t(8062);function i(e){var n=(0,c.useState)([]),t=(0,a.Z)(n,2),i=t[0],l=t[1],u=(0,c.useState)(!0),d=(0,a.Z)(u,2),x=d[0],f=d[1];return(0,c.useEffect)((function(){var n=setTimeout((0,s.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("tour/".concat(e)).then((function(e){l(e.data.tourDetail)}));case 2:f(!1);case 3:case"end":return n.stop()}}),n)}))),500);return function(){return clearTimeout(n)}}),[]),{tourDetail:i,loading:x}}},1261:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var r=t(1413),s=t(885),a=t(2791),c=t(1134),o=t(9085),i=t(2797),l=t(5629),u=t(1079),d=t(6460),x=t(9914),f=t(1292),m=t(5987),p=t(5159),h=t(184),b=["name","control","className","bg"],j=function(e){var n=e.name,t=e.control,s=e.className,a=e.bg,o=(0,m.Z)(e,b),i=(0,c.bc)({name:n,control:t,defaultValue:""}).field;return(0,h.jsx)("div",{className:"w-full",children:(0,h.jsx)("input",(0,r.Z)((0,r.Z)((0,r.Z)({},i),o),{},{className:(0,p.Z)("h-full w-full",s,a||"bg-transparent")}))})},v=t(3453),g=function(e){var n=e.text,t=e.children;return(0,h.jsxs)("span",{className:"text-[13px] text-c3",children:[n," ",(0,h.jsx)("b",{className:"ml-1 text-dark-blue",children:t})]})},N=function(e){var n=e.children;return(0,h.jsxs)("div",{className:"flex items-center gap-2",children:[(0,h.jsx)("img",{src:"/check.svg",alt:"icon-check"}),(0,h.jsx)("span",{children:n})]})},Z=t(9434),y=t(6871),k=t(8402),w=t(9371),_=t(1124),P=(i.Ry({fullName:i.Z_().required("Please enter your full name."),email:i.Z_().required("Please enter your email.").matches(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,{message:"Please enter valid email address"}),phoneNumber:i.Z_().required("Please enter your phone number.").matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/,{message:"Please enter valid phone number"}),address:i.Z_().required("Please enter your address")}),function(){var e,n,t,i=(0,w.Z)("id"),m=(0,Z.v9)((function(e){return e.auth})).user,p=(0,k.G)(i),b=p.tourDetail,P=p.loading,C=(0,y.s0)(),T=(0,_.Z)(),E=(0,c.cI)({mode:"onSubmit"}),O=E.handleSubmit,S=E.control,z=E.register,D=E.setValue,R=E.formState.errors,A=(0,a.useState)(1),F=(0,s.Z)(A,2),B=F[0],I=F[1];(0,a.useEffect)((function(){var e,n=Object.values(R);n.length>0&&o.Am.error(null===(e=n[0])||void 0===e?void 0:e.message,{autoClose:1e3,pauseOnHover:!1,draggable:!0,delay:50})}),[R]),(0,a.useEffect)((function(){(null===b||void 0===b?void 0:b.price)&&D("totalPrice",b.price*B)}),[B,D,b.price]);return(0,h.jsxs)(d.Z,{children:[(0,h.jsxs)("div",{className:"mb-5 grid grid-cols-3 rounded-md",children:[(0,h.jsx)("div",{className:"col-span-1 rounded-tl-md rounded-bl-md",children:null!==b&&void 0!==b&&b.images&&!P?(0,h.jsx)("img",{className:"h-full rounded-tl-md rounded-bl-md object-cover",alt:"img-tour",src:b.images[0]}):(0,h.jsx)("div",{className:"skeleton h-[270px] w-full rounded-tl-md rounded-bl-md"})}),P?(0,h.jsxs)("div",{className:"col-span-2 bg-[#f8f8f8] p-8",children:[(0,h.jsx)("div",{className:"skeleton mb-5 h-[96px] w-full"}),(0,h.jsx)("div",{className:"flex flex-col gap-1 font-Roboto",children:Array(4).fill(0).map((function(e,n){return(0,h.jsx)("div",{className:"skeleton h-5 w-full"},n)}))})]}):(0,h.jsxs)("div",{className:"col-span-2 bg-[#f8f8f8] p-8",children:[(0,h.jsx)(x.Z,{className:"mb-5 text-dark-blue",sx:"xl-2",children:b.tourName}),(0,h.jsxs)("div",{className:"flex flex-col gap-1 font-Roboto",children:[(0,h.jsx)(g,{text:"Start day",children:b.startDay}),(0,h.jsx)(g,{text:"End day",children:b.endDay}),(0,h.jsx)(g,{text:"Beginning location",children:null===b||void 0===b||null===(e=b.beginningLocation)||void 0===e?void 0:e.locationName}),(0,h.jsx)(g,{text:"Destination location",children:null===b||void 0===b||null===(n=b.destinationLocation)||void 0===n?void 0:n.locationName})]})]})]}),(0,h.jsxs)("form",{onSubmit:O((function(e){if(m&&m.email){var n=(0,r.Z)((0,r.Z)({tour:{id:i},user:{email:m.email}},e),{},{passenger:B});console.log("TCL: onSubmit -> request",n),T.post("/booking/create",n).then((function(e){console.log(e)})),o.Am.success("Please check your email to active booking!",{autoClose:2e3}),C("../")}else o.Am.warning("Please login before booking!",{autoClose:1e3}),C("/sign-in")})),className:"flex flex-row",children:[(0,h.jsxs)("div",{className:"flex-1",children:[(0,h.jsx)(x.Z,{className:"mb-8 text-dark-blue",sx:"xl-2",children:"Tour Info"}),(0,h.jsx)(x.Z,{className:"mb-2 text-dark-blue",sx:"lg",children:"Communications"}),(0,h.jsx)("div",{className:"mr-10 bg-[#f6f6f6] p-6",children:(0,h.jsxs)(u.It,{cols:"2",rows:"2",className:"gap-x-8 gap-y-5",children:[(0,h.jsxs)(u.Zv,{col:!0,spacing:"2",children:[(0,h.jsxs)(v.Z,{htmlFor:"fullName",children:["Full Name ",(0,h.jsx)("strong",{className:"text-red-500",children:"*"})]}),(0,h.jsx)(j,{control:S,className:"rounded-sm py-2 px-4",name:"fullName",id:"fullName",bg:"bg-white"})]}),(0,h.jsxs)(u.Zv,{col:!0,spacing:"2",children:[(0,h.jsxs)(v.Z,{htmlFor:"Email",children:["Email ",(0,h.jsx)("strong",{className:"text-red-500",children:"*"})]}),(0,h.jsx)(j,{control:S,className:"rounded-sm py-2 px-4",name:"email",id:"email",bg:"bg-white"})]}),(0,h.jsxs)(u.Zv,{col:!0,spacing:"2",children:[(0,h.jsxs)(v.Z,{htmlFor:"phoneNumber",children:["Phone Number ",(0,h.jsx)("strong",{className:"text-red-500",children:"*"})]}),(0,h.jsx)(j,{control:S,className:"rounded-sm py-2 px-4",name:"phoneNumber",id:"fullName",bg:"bg-white"})]}),(0,h.jsxs)(u.Zv,{col:!0,spacing:"2",children:[(0,h.jsxs)(v.Z,{htmlFor:"fullName",children:["Address ",(0,h.jsx)("strong",{className:"text-red-500",children:"*"})]}),(0,h.jsx)(j,{control:S,className:"rounded-sm py-2 px-4",name:"address",id:"fullName",bg:"bg-white"})]})]})})]}),(0,h.jsx)("div",{className:"inline-block",children:(0,h.jsx)("div",{children:(0,h.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,h.jsxs)("div",{className:"w-[350px] bg-white px-4 py-5 shadow-[0_0_20px_5px_rgb(0,0,0,0.05)]",children:[(0,h.jsx)("h2",{className:"text-xl font-bold text-dark-blue",children:"L\u1ecbch kh\u1edfi h\xe0nh & gi\xe1"}),(0,h.jsxs)(u.It,{rows:"2",cols:"1",children:[(0,h.jsxs)("div",{className:"mt-3 flex items-center justify-between rounded-md border border-c6 p-4 text-sm",children:[(0,h.jsx)("p",{children:"Departure date:"}),(0,h.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,h.jsx)(f.jt,{}),(0,h.jsx)("span",{children:b.startDay})]})]}),(0,h.jsxs)("div",{className:"relative mt-2 rounded-md border border-c6 p-4 text-sm",children:[(0,h.jsx)("span",{className:"absolute top-2/4 left-4 -translate-y-2/4",children:"Passenger"}),(0,h.jsxs)("span",{className:"absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-[60%] text-base text-[#ffbd00]",children:["x"," ",null===b||void 0===b||null===(t=b.price)||void 0===t?void 0:t.toLocaleString("vi-VN",{style:"currency",currency:"VND"})]}),(0,h.jsx)("div",{className:"absolute  right-4 top-2/4 inline-block -translate-y-2/4 items-center gap-4",children:(0,h.jsxs)(u.Zv,{items:"center",justify:"center",spacing:"4",children:[(0,h.jsx)("span",{className:"cursor-pointer",onClick:function(){1!==B&&I((function(e){return e-1}))},children:(0,h.jsx)(f.Ur,{})}),(0,h.jsx)("span",{className:"w-5 select-none text-center text-base",children:B}),(0,h.jsx)("span",{className:"cursor-pointer",onClick:function(){I((function(e){return e+1}))},children:(0,h.jsx)(f.SC,{})})]})})]}),(0,h.jsxs)(u.Zv,{items:"center",justify:"between",className:"mt-5",children:[(0,h.jsx)("p",{children:"Total"}),(0,h.jsx)("input",(0,r.Z)({className:"hidden text-xl font-bold text-[#ffbd00]"},z("totalPrice"))),(0,h.jsx)("span",{className:"text-xl font-bold text-[#ffbd00]",children:(b.price*B).toLocaleString("vi-VN",{style:"currency",currency:"VND"})})]}),(0,h.jsxs)(u.Zv,{className:"mt-4 text-sm text-[#26bed6]",items:"center",spacing:"2",children:[(0,h.jsx)("img",{src:"/info.svg",alt:""}),(0,h.jsx)("p",{children:"Contact us to make a reservation"})]}),(0,h.jsxs)(u.It,{spacing:"4",cols:"2",className:"mt-5",children:[(0,h.jsx)(l.Z,{radius:"4",className:"border-2 border-[#f79321] bg-transparent px-4 py-2 font-semibold text-[#f79321] transition-all hover:border-transparent hover:bg-[#f9ab52] hover:text-white",children:"Contact"}),(0,h.jsx)(l.Z,{className:"bg-[#f79321] px-4 py-2 font-semibold text-white transition-all hover:bg-[#f9ab52]",radius:"4",children:"Booking"})]})]})]}),(0,h.jsx)("div",{className:"w-full max-w-[350px] bg-white px-4 py-5 shadow-[0_0_20px_5px_rgb(0,0,0,0.05)]",children:(0,h.jsxs)(u.It,{cols:"2",rows:"4",className:"gap-y-3",children:[(0,h.jsx)(N,{children:"Insurance"}),(0,h.jsx)(N,{children:"Meal"}),(0,h.jsx)(N,{children:"Tour guide"}),(0,h.jsx)(N,{children:"Hotel 3-4*"}),(0,h.jsx)(N,{children:"Plane ticket"}),(0,h.jsx)(N,{children:"Entrance ticket"}),(0,h.jsx)(N,{children:"Shuttle bus"})]})})]})})})]})]})})},9371:function(e,n){n.Z=function(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(window.location.search)||[,""])[1].replaceAll("-"," "))||null}},7326:function(e,n,t){function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return r}})},9388:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(1120),s=t(8814),a=t(2963);function c(e){var n=(0,s.Z)();return function(){var t,s=(0,r.Z)(e);if(n){var c=(0,r.Z)(this).constructor;t=Reflect.construct(s,arguments,c)}else t=s.apply(this,arguments);return(0,a.Z)(this,t)}}},1120:function(e,n,t){function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}t.d(n,{Z:function(){return r}})},136:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(9611);function s(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&(0,r.Z)(e,n)}},8814:function(e,n,t){function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}t.d(n,{Z:function(){return r}})},2963:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(1002),s=t(7326);function a(e,n){if(n&&("object"===(0,r.Z)(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,s.Z)(e)}},9611:function(e,n,t){function r(e,n){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},r(e,n)}t.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=55.af05fd07.chunk.js.map