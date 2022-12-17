"use strict";(self.webpackChunkproject_mern=self.webpackChunkproject_mern||[]).push([[966],{5966:function(e,r,a){a.r(r),a.d(r,{default:function(){return _}});var l=a(5987),s=a(4695),n=a(1134),t=a(6871),i=a(3504),d=a(9085),o=a(2797),c=a(2364),x=a(4473),m=a(5954),u=a(9210),h=a(1413),p=a(2791),g=a(5159),f=a(1292),v=a(184),j=["control","checked","onClick","name","children","id"],b=function(e){var r=e.control,a=e.checked,s=void 0!==a&&a,t=e.onClick,i=e.name,d=e.children,o=e.id,c=(0,l.Z)(e,j),x=(0,n.bc)({control:r,name:i,defaultValue:!1}).field;return(0,v.jsxs)("div",{className:"flex items-start gap-x-5",children:[(0,v.jsxs)("div",{className:(0,g.Z)("inline-flex h-5 w-5 cursor-pointer items-center justify-center rounded border p-1 text-white",s?"border-primary-blue bg-primary-blue":"border-c4 dark:border-c3"),onClick:t,children:[(0,v.jsx)("input",(0,h.Z)((0,h.Z)({type:"checkbox",className:"hidden",checked:s,id:o},x),c)),(0,v.jsx)(f.NO,{checked:s})]}),d&&(0,v.jsx)("label",{htmlFor:o,className:"cursor-pointer",children:d})]})},Z=a(5561),k=a(3453),y=a(7437),w=a(8231),N=a(9434),S=a(9248),z=a(9776),C=["term"],P=o.Ry({fullName:o.Z_().required("Please enter your full name"),email:o.Z_().required("Please enter your emaill address").matches(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,{message:"Please enter valid email address"}),password:o.Z_().required("Please enter your password").min(8,"Password must be 8 characters")}),_=function(){(0,t.s0)();var e,r,a,o=(0,n.cI)({resolver:(0,s.X)(P),mode:"onSubmit"}),h=o.handleSubmit,g=o.control,f=o.formState,j=f.errors,_=f.isSubmitting;console.log(_);var F=(0,N.I0)();(0,p.useEffect)((function(){var e,r=Object.values(j);r.length>0&&d.Am.error(null===(e=r[0])||void 0===e?void 0:e.message,{autoClose:1e3,pauseOnHover:!1,draggable:!0,delay:50})}),[j]);var O=(0,c.Z)(),q=O.value,I=O.handleToggleValue,T=(0,c.Z)(),U=T.value,V=T.handleToggleValue;return(0,v.jsxs)(x.d,{heading:"Sign up",title:"Sign up",children:[(0,v.jsx)(y.Z,{pagraph:"Already have an account?",span:"Sign in",to:"/sign-in"}),(0,v.jsx)(m.Z,{children:"Sign up with google"}),(0,v.jsx)("p",{className:"text-grayScale-c3 dark:text-grayScale-c4 mb-5 text-center text-xs lg:text-sm",children:"Or sign up with email"}),(0,v.jsxs)("form",{onSubmit:h((function(e){e.term;var r=(0,l.Z)(e,C);F((0,z.me)(r))})),children:[(0,v.jsxs)(Z.Z,{children:[(0,v.jsx)(k.Z,{htmlFor:"fullname",children:"Full Name*"}),(0,v.jsx)(S.Z,{variant:"outlined",control:g,id:"fullname",name:"fullName",type:"text",placeholder:"Jhon Doe",error:null===(e=j.fullName)||void 0===e?void 0:e.message})]}),(0,v.jsxs)(Z.Z,{children:[(0,v.jsx)(k.Z,{htmlFor:"email",children:"Email*"}),(0,v.jsx)(S.Z,{variant:"outlined",control:g,id:"email",name:"email",type:"email",placeholder:"example@gmail.com",error:null===(r=j.email)||void 0===r?void 0:r.message})]}),(0,v.jsxs)(Z.Z,{children:[(0,v.jsx)(k.Z,{htmlFor:"password",children:"Password*"}),(0,v.jsx)(S.Z,{variant:"outlined",control:g,id:"password",name:"password",type:"".concat(q?"text":"password"),placeholder:"Create a password",error:null===(a=j.password)||void 0===a?void 0:a.message,children:(0,v.jsx)(w.Z,{open:q,onClick:I})})]}),(0,v.jsx)("div",{className:"mb-5 flex items-start gap-x-5",children:(0,v.jsx)(b,{id:"term",name:"term",checked:U,onClick:V,control:g,children:(0,v.jsxs)("p",{className:"text-text2 dark:text-text3 flex-1 select-none text-xs leading-relaxed transition-all dark:text-white lg:text-sm",children:["I agree to the",(0,v.jsxs)(i.rU,{to:"/",className:"font-medium text-primary-blue underline",children:[" ","Terms of Use"]})," ","and have read and understand the",(0,v.jsxs)(i.rU,{to:"/",className:"font-medium text-primary-blue underline",children:[" ","Privacy policy."]})]})})}),(0,v.jsx)(u.Z,{disabled:_||!U,isLoading:_,children:"Sign up"})]})]})}}}]);
//# sourceMappingURL=966.b1d4057e.chunk.js.map