"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[98],{7681:function(n,e,t){t.d(e,{Hg:function(){return c},Jh:function(){return f},TP:function(){return p},V0:function(){return s},zv:function(){return l}});var r=t(5861),i=t(4687),a=t.n(i),o=t(2388),u="8962ff034697639f97b613a55ba4ec7e";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(u,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},8746:function(n,e,t){t.d(e,{Dx:function(){return s},eW:function(){return l},up:function(){return p}});var r,i,a,o=t(168),u=t(7402),c=t(6731),s=u.Z.h2(r||(r=(0,o.Z)(["\n  margin-top: 40px;\n  margin-bottom: 0;\n"]))),p=(0,u.Z)(c.rU)(i||(i=(0,o.Z)(["\n  text-decoration: none;\n  font-size: 18px;\n  font-weight: 500;\n  color: black\n  &:hover,\n  &:focus {\n    color: lightgreen\n    }\n  &:not(:last-child) {\n    margin-right: 10px;\n  }\n  margin-left: 20px;\n"]))),l=u.Z.ul(a||(a=(0,o.Z)(["\n  padding: 20px 0 20px;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n"])))},4098:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,i,a,o,u=t(885),c=t(8737),s=t(2791),p=t(8746),l=t(7681),f=t(6731),d=t(7689),x=t(168),h=t(7402),g=h.Z.div(r||(r=(0,x.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: lightblue;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),m=h.Z.form(i||(i=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 30px;\n  max-width: 300px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  margin-top: 8px;\n"]))),v=h.Z.input(a||(a=(0,x.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  ::placeholder {\n    font-size: 16px;\n  }\n"]))),b=h.Z.button(o||(o=(0,x.Z)(["\n  display: inline-block;\n  width: 60px;\n  height: 58px;\n  border: 0;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover {\n    opacity: 1;\n  }\n"]))),Z=t(184),y=function(n){var e=n.onSubmit,t=n.children;return(0,Z.jsx)(m,{onSubmit:e,children:t})},w=function(){return(0,Z.jsx)(v,{type:"text",name:"movieName",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Titanic",required:!0,autoComplete:"off",autoFocus:!0,placeholder:"Search movie..."})},k=t(3728),j=function(n){var e=n.onSubmit;return(0,Z.jsx)(g,{children:(0,Z.jsxs)(y,{onSubmit:e,children:[(0,Z.jsx)(w,{}),(0,Z.jsx)(b,{type:"submit",children:(0,Z.jsx)(k.Vph,{})})]})})},S=function(){return(0,Z.jsxs)("main",{style:{textAlign:"center"},children:[(0,Z.jsx)("b",{style:{fontSize:74},children:"404"}),(0,Z.jsx)("p",{children:"Sorry, we couldn't find that page :("})]})},_=function(){var n,e=(0,d.TH)(),t=(0,f.lr)(),r=(0,u.Z)(t,2),i=r[0],a=r[1],o=null!==(n=i.get("movieName"))&&void 0!==n?n:"",x=(0,s.useState)([]),h=(0,u.Z)(x,2),g=h[0],m=h[1],v=(0,s.useState)(!1),b=(0,u.Z)(v,2),y=b[0],w=b[1],k=(0,s.useState)(!1),_=(0,u.Z)(k,2),z=_[0],N=_[1];(0,s.useEffect)((function(){""!==o&&(m([]),w(!0),(0,l.V0)(o).then((function(n){if(!n.results.length)return w(!1),N(!0),console.log("Not found");N(!1),m(n.results),w(!1)})))}),[o]);return(0,Z.jsxs)("main",{children:[(0,Z.jsx)(j,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget;a({movieName:e.elements.movieName.value}),e.reset()}}),z&&(0,Z.jsx)(S,{children:"Not found"}),(0,Z.jsxs)(p.eW,{children:[g.map((function(n){return(0,Z.jsx)("li",{children:(0,Z.jsx)(p.up,{to:"/movies/".concat(n.id),state:{from:e},children:n.original_title||n.name})},n.id)})),y&&(0,Z.jsx)(c.a,{})]})]})}}}]);
//# sourceMappingURL=98.24861018.chunk.js.map