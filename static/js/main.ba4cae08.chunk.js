(this.webpackJsonpmovierating=this.webpackJsonpmovierating||[]).push([[0],{36:function(e,t,n){},59:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),i=n(28),r=n.n(i),c=(n(36),n(1));function o(e){return console.log(e),Object(c.jsx)("div",{children:"hello"})}var u=n(17),l=n.n(u),j=n(29),m=n(11),d=n(12),v=n(14),b=n(13),h=n(30),p=n.n(h),O=n(5),x=n.n(O),g=n(9);n(59);function y(e){var t=e.id,n=e.year,s=e.title,a=e.summary,i=e.poster,r=e.genres;return Object(c.jsx)(g.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:s,summary:a,poster:i,genres:r}},children:Object(c.jsxs)("div",{className:"movie",children:[Object(c.jsx)("img",{src:i,alt:s,title:s}),Object(c.jsxs)("div",{className:"movie__data",children:[Object(c.jsx)("h3",{className:"movie__title",children:s}),Object(c.jsx)("h5",{className:"movie__year",children:n}),Object(c.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(c.jsxs)("li",{className:"genres_genre",children:[" ",e," "]},t)}))}),Object(c.jsxs)("p",{className:"movie__summary",children:[a.slice(0,180),"..."]})]})]})})}y.prototype={id:x.a.number.isRequired,title:x.a.string.isRequired,year:x.a.number.isRequired,summary:x.a.string.isRequired,poster:x.a.string.isRequired,genres:x.a.arrayOf(x.a.string).isRequired};n(66);var f=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(m.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(j.a)(l.a.mark((function t(){var n,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1}),console.log(s);case 6:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(c.jsx)("section",{className:"container",children:t?Object(c.jsx)("div",{className:"loader",children:Object(c.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(c.jsx)("div",{className:"movies",children:n.map((function(e){return Object(c.jsx)(y,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(a.a.Component);n(67);function _(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(g.b,{to:"/",children:"Home"}),Object(c.jsx)(g.b,{to:"/about",children:"About"})]})}var N=function(e){Object(v.a)(n,e);var t=Object(b.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;console.log(t),void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(c.jsx)("div",{children:e.state.title}):null}}]),n}(s.Component),k=n(2);n(68);var q=function(){return Object(c.jsxs)(g.a,{children:[Object(c.jsx)(_,{}),Object(c.jsx)(k.a,{path:"/",exact:!0,component:f}),Object(c.jsx)(k.a,{path:"/about",component:o}),Object(c.jsx)(k.a,{path:"/movie/",exact:!0,component:N}),Object(c.jsx)(k.a,{path:"/movie/:id",component:N})]})};r.a.render(Object(c.jsx)(q,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.ba4cae08.chunk.js.map