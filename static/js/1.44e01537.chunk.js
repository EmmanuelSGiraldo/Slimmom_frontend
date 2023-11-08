"use strict";(self.webpackChunkSlimmom_fronted=self.webpackChunkSlimmom_fronted||[]).push([[1],{6893:function(n,e,t){t.d(e,{o:function(){return c}});var i=t(9439),r=t(2639),o=t(2791),a=t(1642),d=t(3767),l=t(6174),u=t(184),c=function(n){var e=n.hideMobileModal,t=n.children;(0,r.oS)();var c=(0,o.useState)(!1),s=(0,i.Z)(c,2),p=s[0],m=s[1];(0,r.Dj)(e,m);var h=(0,o.useState)(!1),f=(0,i.Z)(h,2),x=f[0],g=f[1],b=(0,o.useCallback)((function(){e(),g(!1)}),[e]);(0,o.useEffect)((function(){return g(!0)}),[]),(0,o.useEffect)((function(){return b}),[b]);var v=p?"":"isHidden";return(0,u.jsx)(d.d,{onClickAway:b,children:(0,u.jsx)("div",{children:x?(0,u.jsx)(l.h,{children:(0,u.jsx)(a.hZ,{className:v,children:(0,u.jsx)(a.dX,{children:t})})}):null})})}},9001:function(n,e,t){t.r(e),t.d(e,{default:function(){return Rn}});var i,r,o,a,d,l,u,c,s,p,m=t(3116),h=t(366),f=t(9439),x=t(2791),g=t(3452),b=t(890),v=t(9823),w=t(541),Z=t(168),y=t(8789),k=t(5473),j=y.ZP.li(i||(i=(0,Z.Z)(["\n  display: flex;\n  &:not(:first-child) {\n    padding-top: ",";\n  }\n"])),(function(n){return(0,n.theme.spacing)(4)})),P=y.ZP.div(r||(r=(0,Z.Z)(["\n  position: relative;\n  border-bottom: 1px solid ",";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  &:not(:first-child) {\n    text-align: right;\n  }\n\n  &:first-child {\n    width: 130px;\n    margin-right: 8px;\n\n    @media (min-width: ",") {\n      width: 240px;\n      margin-right: 22px;\n    }\n  }\n\n  &:nth-child(2) {\n    width: 49px;\n    margin-right: 8px;\n    @media (min-width: ",") {\n      width: 106px;\n      margin-right: 46px;\n    }\n\n    @media (min-width: ",") {\n      width: 106px;\n      margin-right: 48px;\n    }\n  }\n\n  &:nth-child(3) {\n    width: 65px;\n    @media (min-width: ",") {\n      width: 106px;\n      margin-right: 26px;\n    }\n  }\n\n  @media (min-width: ",") {\n    padding-bottom: ",";\n  }\n"])),(function(n){return n.theme.colors.borderColor}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.desktop}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.tablet}),(function(n){return(0,n.theme.spacing)(5)})),M=y.ZP.span(o||(o=(0,Z.Z)(["\n  margin-right: ",";\n"])),(function(n){return(0,n.theme.spacing)(1)})),I=y.ZP.span(a||(a=(0,Z.Z)(["\n  font-size: 10px;\n\n  @media (min-width: ",") {\n    font-size: 14px;\n  }\n"])),(function(n){return n.theme.breakpoints.tablet})),D=y.ZP.div(d||(d=(0,Z.Z)(["\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: ",";\n"])),(function(n){return(0,n.theme.spacing)(1)})),C=(0,y.ZP)(k.ZP)(l||(l=(0,Z.Z)(["\n  & .MuiPaper-root {\n    background-color: ",";\n  }\n\n  & .MuiTypography-root {\n    font-size: 14px;\n  }\n"])),(function(n){return n.theme.colors.$lightGrey})),O=t(2020),S=t(184),_=function(n){var e=n.title,t=n.weight,i=n.kcal,r=n.currentDate,o=n.productId,a=n.disabled,d=n.getNotifyData,l=(0,O.$)().t,u=(0,x.useState)(null),c=(0,f.Z)(u,2),s=c[0],p=c[1],m=g.Am.useDeleteProductFromDateMutation(),h=(0,f.Z)(m,2),Z=h[0],y=h[1].isLoading,k=y||(a||!1),_=Boolean(s),z=_?"simple-popover":void 0;return(0,S.jsxs)(j,{children:[(0,S.jsx)(P,{onClick:function(n){p(n.currentTarget)},children:e}),(0,S.jsx)(C,{id:z,open:_,anchorEl:s,onClose:function(){p(null)},anchorOrigin:{vertical:"center",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"left"},children:(0,S.jsx)(b.Z,{sx:{p:1},children:e})}),(0,S.jsxs)(P,{children:[(0,S.jsx)(M,{children:t}),(0,S.jsx)(I,{children:l("g")})]}),(0,S.jsxs)(P,{children:[(0,S.jsx)(M,{children:i}),(0,S.jsx)(I,{children:l("kcal")})]}),(0,S.jsx)(D,{children:(0,S.jsx)(w.Z,{icon:(0,S.jsx)(v.Z,{}),onClick:function(){d({title:e,deleteProduct:Z,deletingInfo:{currentDate:r,productId:o}})},disabled:k,iconColor:"$grey",hoverIconColor:"$grey"})})]})},z=y.ZP.ul(u||(u=(0,Z.Z)(["\n  //Scrollbar variables\n  --mask-height: 40px;\n  --padding-right: 40px;\n  --mask-image-content: linear-gradient(\n    to bottom,\n    white var(--mask-height),\n    white calc(100% - var(--mask-height)),\n    transparent\n  );\n  --mask-size-content: calc(100% - var(--scrollbar-width));\n  //end variables\n\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  height: 220px;\n  margin-top: ",";\n  margin-right: 5%;\n  font-size: 14px;\n  overflow-y: auto;\n\n  ::-webkit-scrollbar {\n    width: 6px;\n  }\n\n  ::-webkit-scrollbar-track {\n    background: ",";\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: ",";\n  }\n\n  mask-size: var(--mask-size-content);\n  mask-image: var(--mask-image-content);\n  mask-position: bottom 40px;\n  mask-repeat: no-repeat;\n\n  @media (min-width: 768px) {\n    width: 610px;\n    height: 260px;\n    padding-right: 32px;\n    margin-right: 0;\n  }\n\n  @media (min-width: 1280px) {\n    width: 623px;\n    height: 306px;\n  }\n"])),(function(n){return(0,n.theme.spacing)(8)}),(function(n){return n.theme.colors.$lightGrey}),(function(n){return n.theme.colors.$blue})),A=function(n){var e=n.products,t=n.currentDate,i=n.disabled,r=n.getNotifyData,o=n.onOpenModal,a=localStorage.getItem("i18nextLng");return(0,S.jsx)(z,{children:e.map((function(n){var e=n._id,d=n.title,l=n.weight,u=n.kcal;return(0,S.jsx)(_,{title:d[a],weight:l,kcal:u,currentDate:t,productId:e,disabled:i,getNotifyData:r,onOpenModa:o},e)}))})},B=t(7325),E=(y.ZP.div.withConfig({displayName:"DiaryPageContentstyled__DiaryPageContentStyled",componentId:"sc-140d1nn-0"})(["display:flex;flex-direction:column;justify-content:center;width:320px;height:460px;height:100%;padding:40px 20px 60px 20px;margin:0 auto;@media (min-width:","){padding:180px 32px 55px 32px;width:768px;min-height:594px;}@media (min-width:","){align-items:center;justify-content:center;width:763px;min-height:850px;padding:294px 32px 112px 32px;}"],(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.desktop})),y.ZP.div.withConfig({displayName:"DiaryPageContentstyled__DiaryPageStyled",componentId:"sc-140d1nn-1"})(["display:flex;flex-direction:column;"])),F=t(5048),H=t(4690),N=t(7582),$=y.ZP.p(c||(c=(0,Z.Z)(["\n  position: relative;\n  margin-top: 20px;\n  font-weight: 700;\n  font-size: 18px;\n  animation-name: appearence;\n  animation-duration: ",";\n  animation-timing-function: ",";\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 6px;\n    height: 100%;\n    background-color: ",";\n    opacity: 0.5;\n    transform: translateX(-50px) skewX(-45deg);\n    animation-name: blink;\n    animation-duration: 750ms;\n    animation-timing-function: ease-out;\n    animation-delay: 500ms;\n  }\n\n  @keyframes blink {\n    from {\n      transform: translateX(-50px) skewX(-45deg);\n    }\n\n    to {\n      transform: translateX(5000%) skewX(-45deg);\n    }\n  }\n\n  @keyframes appearence {\n    from {\n      font-size: 0px;\n      margin-top: 0px;\n    }\n\n    to {\n      opacity: 1;\n      font-size: 18px;\n      margin-top: 20px;\n    }\n  }\n"])),(function(n){return n.theme.options.time}),(function(n){return n.theme.options.cubic}),(function(n){return n.theme.colors.$white})),T=function(){var n=(0,O.$)().t;return(0,S.jsx)($,{children:n("empty")})},V=t(1413),L=t(3069),q=t(6571),X=t(9350),G=t(3466),R=t(3400),W=["title","titleId"];function K(){return K=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},K.apply(this,arguments)}function Q(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function U(n,e){var t=n.title,i=n.titleId,r=Q(n,W);return x.createElement("svg",K({width:20,height:20,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",ref:e,"aria-labelledby":i},r),t?x.createElement("title",{id:i},t):null,s||(s=x.createElement("path",{fill:"#9B9FAA",d:"M15 9h-2v2h2V9Zm-4 0H9v2h2V9ZM7 9H5v2h2V9Z"})),p||(p=x.createElement("path",{fill:"#9B9FAA",d:"M17 2h-1V0h-2v2H6V0H4v2H3a2 2 0 0 0-1.99 2L1 18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm0 16H3V7h14v11Z"})))}var J,Y,nn,en,tn,rn,on,an,dn,ln,un=x.forwardRef(U),cn=(t.p,t(7391)),sn=t(6934),pn=((0,sn.ZP)(cn.Z)(J||(J=(0,Z.Z)(["\n  && {\n    max-width: 116px;\n    height: 20px;\n    font-family: ",";\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: ",";\n    color: ",";\n\n    border: none;\n\n    @media screen and (min-width: ",") {\n      font-size: 34px;\n      height: 38px;\n      max-width: 220px;\n    }\n  }\n"])),(function(n){return n.theme.fonts.verdanaBold}),(function(n){return n.theme.lineHeight.verdanaHeight}),(function(n){return n.theme.colors.$black}),(function(n){return n.theme.breakpoints.tablet})),(0,sn.ZP)(un)(Y||(Y=(0,Z.Z)([""])))),mn=(0,sn.ZP)("div")(nn||(nn=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  max-width: 160;\n  margin-bottom: 32px;\n\n  @media screen and (min-width: ",") {\n    max-width: 300px;\n    margin-bottom: 60px;\n  }\n\n  .react-datepicker__input-container {\n    width: unset;\n  }\n\n  .react-datepicker-wrapper {\n    width: unset;\n  }\n"])),(function(n){return n.theme.breakpoints.tablet})),hn=t(8558),fn=t(1014),xn=(0,sn.ZP)(cn.Z)(en||(en=(0,Z.Z)(["\n  & .MuiInput-input {\n    max-width: 116px;\n    height: 20px;\n    font-family: ",";\n    font-size: 18px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: ",";\n    color: ",";\n    border: none;\n    @media screen and (min-width: ",") {\n      font-size: 34px;\n      height: 38px;\n      max-width: 220px;\n    }\n  }\n\n  &\n    .css-1ptx2yq-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before {\n    border-bottom: none;\n  }\n\n  & .MuiInputBase-root:before {\n    border-bottom: none;\n  }\n\n  & .MuiInput-underline:before {\n    border-bottom: none;\n  }\n  &:hover .MuiInput-underline:before {\n    border-bottom: none;\n  }\n  &:hover .MuiInput-underline:after {\n    border-bottom: none;\n  }\n  & .MuiInput-underline:after {\n    border-bottom: none;\n  }\n"])),(function(n){return n.theme.fonts.verdanaBold}),(function(n){return n.theme.lineHeight.verdanaHeight}),(function(n){return n.theme.colors.$black}),(function(n){return n.theme.breakpoints.tablet})),gn=function(){var n=(0,F.I0)(),e=(0,F.v9)(N.cc),t=(0,x.useState)(e),i=(0,f.Z)(t,2),r=i[0],o=i[1],a=(0,F.v9)(fn.M7),d=(0,x.useState)(!1),l=(0,f.Z)(d,2),u=l[0],c=l[1],s=(0,x.useCallback)((function(){return c((function(n){return!n}))}),[]);return(0,x.useEffect)((function(){!function(){try{if(!((t=r)&&!isNaN(new Date(t).getTime())))return;var e=(0,hn.Z)(r,{representation:"date"});n((0,N.lc)(e))}catch(i){console.log(i)}var t}()}),[n,r]),(0,x.useEffect)((function(){return function(){a||n((0,N.lc)((0,hn.Z)(new Date,{representation:"date"})))}}),[n,a]),(0,S.jsx)(mn,{children:(0,S.jsx)(q._,{dateAdapter:L.H,children:(0,S.jsx)(X.M,{inputFormat:"dd.MM.yyyy",maxDate:new Date,value:r,onChange:function(n){o(n)},open:u,closeOnSelect:!0,onOpen:s,onClose:s,renderInput:function(n){var e=n.inputRef,t=n.inputProps,i=n.InputProps;return(0,S.jsx)(xn,(0,V.Z)((0,V.Z)({ref:e},t),{},{variant:"standard",InputProps:(0,V.Z)((0,V.Z)({},i),{},{endAdornment:(0,S.jsx)(G.Z,{position:"end",children:(0,S.jsx)(R.Z,{edge:"end",onClick:s,children:(0,S.jsx)(pn,{})})})})}))}})})})},bn=function(){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(gn,{}),(0,S.jsx)("ul",{})]})},vn=(0,x.memo)(bn),wn=t(4165),Zn=t(5861),yn=t(5985),kn=y.ZP.form.withConfig({displayName:"DiaryAddProductFormstyled__DiaryAddProductFormStyled",componentId:"sc-1bekyxu-0"})(["display:flex;flex-direction:column;gap:32px;align-items:center;@media screen and (min-width:","){flex-direction:row;align-items:center;gap:40px;}@media screen and (min-width:","){gap:60px;}"],(function(n){return n.theme.breakpoints.tablet}),(function(n){return n.theme.breakpoints.desktop})),jn=y.ZP.div.withConfig({displayName:"DiaryAddProductFormstyled__FlexWrapper",componentId:"sc-1bekyxu-1"})(["display:flex;flex-direction:column;gap:4px;"]),Pn=t(4294),Mn=t(5763),In=t(3183),Dn=(0,y.ZP)(In.L)(tn||(tn=(0,Z.Z)(["\n  & {\n    margin-bottom: 0;\n    max-width: 106px;\n  }\n"]))),Cn=(0,y.ZP)(In.L)(rn||(rn=(0,Z.Z)(["\n  & {\n    margin-bottom: 0;\n  }\n"]))),On=(0,y.ZP)(Pn.Z)(on||(on=(0,Z.Z)(["\n  && {\n    align-self: center;\n\n    min-width: 48px;\n    height: 48px;\n    padding: 17px;\n\n    font-family: ",";\n    font-size: 14px;\n    font-weight: 700;\n    text-transform: none;\n\n    background: #fc842d;\n    border-radius: 30px;\n    box-shadow: 0 4px 10px rgba(252, 132, 45, 0.5);\n\n    &:hover {\n      background: #e76000;\n      transform: scale(1.1);\n    }\n\n    @media screen and (min-width: 768px) {\n      /* margin: 60px 0 0; */\n    }\n  }\n"])),(function(n){return n.theme.fonts.verdanaBold})),Sn=(0,y.ZP)(Mn.ueT)(an||(an=(0,Z.Z)([""]))),_n=y.ZP.div(dn||(dn=(0,Z.Z)(["\n  margin: 60px auto;\n"]))),zn=t(5904),An=t(3329),Bn=function(n){var e=n.items,t=n.setProductId,i=n.inputValue,r=n.onInputChange,o=(0,F.v9)(N.sk),a=(0,O.$)().t,d="en"===o,l=e.map((function(n){var e=(d?n.title.en:n.title.ua)[0].toUpperCase();return(0,V.Z)({firstLetter:/[0-9]/.test(e)?"0-9":e},n)}));return(0,S.jsx)(zn.Z,{id:"possible_products",getOptionLabel:function(n){var e;return null!==(e=d?n.title.en:n.title.ua)&&void 0!==e?e:""},isOptionEqualToValue:function(n,e){return n._id===e._id},options:null===l||void 0===l?void 0:l.sort((function(n,e){var t;return-(null===(t=e.firstLetter)||void 0===t?void 0:t.localeCompare(n.firstLetter))})),sx:{width:300},noOptionsText:a("noMatch"),renderOption:function(n,e){return(0,x.createElement)(An.Z,(0,V.Z)((0,V.Z)({component:"li"},n),{},{key:e._id}),d?e.title.en:e.title.ua)},renderInput:function(n){return(0,S.jsx)(Cn,(0,V.Z)((0,V.Z)({variant:"standard"},n),{},{label:a("enter")}))},onChange:function(n,e){t(null===e||void 0===e?void 0:e._id)},inputValue:i,onInputChange:r,filterOptions:function(n){return n},groupBy:function(n){return n.firstLetter},clearOnBlur:!1,selectOnFocus:!0,handleHomeEndKeys:!0,autoHighlight:!0})},En=t(8573),Fn=t.n(En),Hn=t(2797),Nn=(0,Hn.Ry)({weight:(0,Hn.Rx)().min(1,"min 1 gram").max(1e4,"max 10,000 grams").positive("expects positive number").integer("expects integer (no dot)").required("Weight required"),id:(0,Hn.Z_)().min(1,"id min 1 char").max(1024,"id max 1024 char").required("Product id (name) required"),date:(0,Hn.hT)().min(new Date(2e3,0,1),"min 2000 year").default((function(){return(0,hn.Z)(new Date,{representation:"date"})}))}),$n=t(2639),Tn=function(n){var e=n.addProduct,t=n.isMobile,i=(0,O.$)().t,r=(0,x.useState)(""),o=(0,f.Z)(r,2),a=o[0],d=o[1],l=(0,x.useState)(""),u=(0,f.Z)(l,2),c=u[0],s=u[1],p=(0,$n.jo)(),m=(0,f.Z)(p,3)[2],h=(0,g.jM)(),b=(0,f.Z)(h,2),v=b[0],w=b[1].data,Z=(void 0===w?{}:w).data,y=void 0===Z?[]:Z,k=(0,F.v9)(N.cc),j=(0,hn.Z)(k,{representation:"date"}),P=function(){var n=(0,Zn.Z)((0,wn.Z)().mark((function n(i){var r,o,a,d;return(0,wn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i.preventDefault(),r=i.target,o=new FormData(r),a=Number(o.get("weight").trim()),j&&c&&a){n.next=6;break}return n.abrupt("return",(0,yn.Am)("Please fill date, productName and weight"));case 6:return d={date:j,id:c,weight:a},n.prev=7,n.next=10,Nn.validate(d);case 10:return n.next=12,e(d);case 12:(0,yn.Am)(d),r.reset(),t&&m(),n.next=21;break;case 17:n.prev=17,n.t0=n.catch(7),(0,yn.Am)("Not added: ".concat(n.t0.message)),console.log(n.t0);case 21:case"end":return n.stop()}}),n,null,[[7,17]])})));return function(e){return n.apply(this,arguments)}}(),M=(0,x.useMemo)((function(){return Fn()(v,500)}),[v]);return(0,x.useEffect)((function(){a.length&&M({title:a,limit:10})}),[M,v,a]),(0,S.jsxs)(kn,{onSubmit:P,children:[(0,S.jsx)(Bn,{items:y,setProductId:s,inputValue:a,onInputChange:function(n,e){return d(e)}}),(0,S.jsx)(jn,{children:(0,S.jsx)(Dn,{variant:"standard",name:"weight",label:i("grams"),type:"text",title:"min 1, max 6 digits",inputProps:{inputMode:"numeric",pattern:"[0-9]{1,6}"},required:!0})}),(0,S.jsx)(On,{color:"primary",variant:"contained",type:"submit",children:t?"Add":(0,S.jsx)(Sn,{})})]})},Vn=t(6893),Ln=y.ZP.div(ln||(ln=(0,Z.Z)([""]))),qn=function(n){var e=n.addProduct,t=n.shouldShowForm,i=n.isMobile,r=(0,$n.jo)(),o=(0,f.Z)(r,3),a=o[0],d=o[2];return(0,S.jsxs)(Ln,{children:[(0,S.jsx)(vn,{}),t&&!i&&(0,S.jsx)(Tn,{addProduct:e,hideMobileModal:d}),t&&i&&a&&(0,S.jsx)(Vn.o,{hideMobileModal:d,children:(0,S.jsx)(Tn,{addProduct:e,hideMobileModal:d,isMobile:i})})]})},Xn=t(8877),Gn=function(){var n=(0,O.$)().t,e=(0,x.useState)(!1),t=(0,f.Z)(e,2),i=t[0],r=t[1],o=function(){var n=(0,F.v9)(N.cc);return(0,x.useMemo)((function(){var e=new Date(n).getTime(),t=(new Date).getTime();return e<=t||(0,H.Z)(e,t)}),[n])}(),a=(0,F.v9)((function(n){return n.calendar.activeDate})),d=(0,x.useState)({}),l=(0,f.Z)(d,2),u=l[0],c=l[1],s=u.title,p=void 0===s?"":s,m=u.deleteProduct,b=void 0===m?function(){}:m,v=u.deletingInfo,w=void 0===v?{}:v,Z=g.Am.useAddProductMutation(),y=(0,f.Z)(Z,1)[0],k=g.Am.useGetProductsByDateQuery(a),j=k.data,P=void 0===j?{}:j,M=k.isLoading,I=P.data,D=(void 0===I?{}:I).consumedProducts,C=void 0===D?[]:D,_=function(){return r(!i)},z=(0,$n.GS)().isMobile,$=(0,$n.jo)(),V=(0,f.Z)($,2)[1];return(0,S.jsxs)(h.qm,{children:[(0,S.jsxs)(E,{children:[(0,S.jsx)(qn,{addProduct:y,shouldShowForm:o,isMobile:z}),M?(0,S.jsx)(B.$,{}):Boolean(C.length)?(0,S.jsx)(A,{products:C,currentDate:a,disabled:!o,getNotifyData:function(n){var e=n.title,t=n.deleteProduct,i=n.deletingInfo;c({title:e,deleteProduct:t,deletingInfo:i}),_()},onOpenModal:r}):(0,S.jsx)(T,{children:n("noFood")}),z&&o&&(0,S.jsx)(_n,{children:(0,S.jsx)(On,{color:"primary",variant:"contained",type:"button",onClick:V,children:(0,S.jsx)(Sn,{})})})]}),(0,S.jsx)(Xn.V,{leftBtnText:n("no"),rightBtnText:n("yes"),open:i,onClick:function(){b(w),r(!i)},setOpen:r,dialogTitle:n("delete"),contentText:p})]})},Rn=function(){return(0,S.jsxs)(h._z,{children:[(0,S.jsx)(Gn,{}),(0,S.jsx)(m.m,{})]})}}}]);
//# sourceMappingURL=1.44e01537.chunk.js.map