"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[765],{7681:function(n,t,e){e.d(t,{Hg:function(){return o},Jh:function(){return l},TP:function(){return f},V0:function(){return s},zv:function(){return p}});var r=e(5861),a=e(4687),u=e.n(a),c=e(2388),i="8962ff034697639f97b613a55ba4ec7e";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},9765:function(n,t,e){e.r(t),e.d(t,{Home:function(){return f}});var r=e(885),a=e(2791),u=e(7689),c=e(8746),i=e(7681),o=e(8737),s=e(184),f=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],f=t[1],p=(0,u.TH)(),l=(0,a.useState)(!1),d=(0,r.Z)(l,2),g=d[0],v=d[1];return(0,a.useEffect)((function(){v(!0),(0,i.Hg)().then((function(n){f(n.results),v(!1)}))}),[]),(0,s.jsxs)("main",{children:[(0,s.jsx)(c.Dx,{children:"Trending Today"}),(0,s.jsxs)(c.eW,{children:[e.map((function(n){return(0,s.jsx)("li",{children:(0,s.jsx)(c.up,{to:"/movies/".concat(n.id),state:{from:p},children:n.original_title||n.name})},n.id)})),g&&(0,s.jsx)(o.a,{})]})]})};t.default=f},8746:function(n,t,e){e.d(t,{Dx:function(){return s},eW:function(){return p},up:function(){return f}});var r,a,u,c=e(168),i=e(7402),o=e(6731),s=i.Z.h2(r||(r=(0,c.Z)(["\n  margin-top: 40px;\n  margin-bottom: 0;\n"]))),f=(0,i.Z)(o.rU)(a||(a=(0,c.Z)(["\n  text-decoration: none;\n  font-size: 18px;\n  font-weight: 500;\n  color: black\n  &:hover,\n  &:focus {\n    color: lightgreen\n    }\n  &:not(:last-child) {\n    margin-right: 10px;\n  }\n  margin-left: 20px;\n"]))),p=i.Z.ul(u||(u=(0,c.Z)(["\n  padding: 20px 0 20px;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n"])))}}]);
//# sourceMappingURL=765.600b9bab.chunk.js.map