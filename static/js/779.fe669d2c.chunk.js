"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[779],{7681:function(n,t,e){e.d(t,{Hg:function(){return o},Jh:function(){return v},TP:function(){return f},V0:function(){return s},zv:function(){return p}});var r=e(5861),a=e(4687),u=e.n(a),c=e(2388),i="8962ff034697639f97b613a55ba4ec7e";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},9779:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r,a,u=e(885),c=e(7689),i=e(2791),o=e(7681),s=e(168),f=e(7402),p=f.Z.ul(r||(r=(0,s.Z)(["\n  list-style: none;\n  padding-left: 30px;\n  padding-right: 30px;\n"]))),v=f.Z.li(a||(a=(0,s.Z)(["\n  font-style: none;\n  font-family: Roboto;\n  font-size: 18px;\n"]))),d=e(184),h=function(){var n=(0,i.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,c.UO)().movieId;return(0,i.useEffect)((function(){(0,o.Jh)(a).then((function(n){return r(n.results)}))}),[a]),(0,d.jsx)(p,{children:e.length>0?e.map((function(n){var t=n.author,e=n.content,r=n.id;return(0,d.jsxs)(v,{children:[(0,d.jsx)("h3",{children:t}),(0,d.jsx)("p",{children:e})]},r)})):"Sorry, we don't have any information."})}}}]);
//# sourceMappingURL=779.fe669d2c.chunk.js.map