(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{45:function(n,e,t){n.exports=t(57)},57:function(n,e,t){"use strict";t.r(e);var i=t(1),r=t.n(i),a=t(36),o=t.n(a),c=t(20),u=t(6),l=t(5),d=t(18),v=t(19),m=t(7),g=t(44);function s(){var n=Object(l.a)(["\n  background-image: url(",");\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  background-position: center center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  border-radius: 10px;\n  &:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n"]);return s=function(){return n},n}function f(){var n=Object(l.a)(["\n  height: 380px;\n  width: 100%;\n  overflow: visible;\n"]);return f=function(){return n},n}function b(){var n=Object(l.a)(["\n  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {\n    toggleLikeMovie(id: $id, isLiked: $isLiked) @client\n  }\n"]);return b=function(){return n},n}var p=Object(d.b)(b()),h=m.a.div(f()),x=m.a.div(s(),(function(n){return n.bg})),k=function(n){var e=n.id,t=n.bg,i=n.isLiked,a=Object(v.a)(p,{variables:{id:parseInt(e),isLiked:i}}),o=Object(g.a)(a,1)[0];return r.a.createElement(h,null,r.a.createElement(c.b,{to:"/".concat(e)},r.a.createElement(x,{bg:t})),r.a.createElement("button",{onClick:o},i?"Unlike":"Like"))};function j(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 25px;\n  width: 65%;\n  position: relative;\n  top: -50px;\n"]);return j=function(){return n},n}function O(){var n=Object(l.a)(["\n  font-size: 18px;\n  opacity: 0.5;\n  font-weight: 500;\n  margin-top: 10px;\n"]);return O=function(){return n},n}function w(){var n=Object(l.a)(["\n  font-size: 35px;\n"]);return w=function(){return n},n}function E(){var n=Object(l.a)(["\n  font-size: 60px;\n  font-weight: 600;\n  margin-bottom: 20px;\n"]);return E=function(){return n},n}function L(){var n=Object(l.a)(["\n  background-image: linear-gradient(-45deg, #d754ab, #fd723a);\n  height: 45vh;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"]);return L=function(){return n},n}function y(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n"]);return y=function(){return n},n}function _(){var n=Object(l.a)(["\n  {\n    movies {\n      id\n      medium_cover_image\n      isLiked @client\n    }\n  }\n"]);return _=function(){return n},n}var z=Object(d.b)(_()),M=m.a.div(y()),$=m.a.header(L()),I=m.a.h1(E()),q=m.a.h3(w()),B=m.a.div(O()),C=m.a.div(j()),J=function(){var n,e=Object(v.b)(z),t=e.loading,i=e.error,a=e.data;return console.log(t,!!i,a),r.a.createElement(M,null,r.a.createElement($,null,r.a.createElement(I,null,"Movie App 2020"),r.a.createElement(q,null,"I love watching movies..")),t&&r.a.createElement(B,null,"loading..."),r.a.createElement(C,null,null===a||void 0===a||null===(n=a.movies)||void 0===n?void 0:n.map((function(n){return r.a.createElement(k,{key:n.id,id:n.id,bg:n.medium_cover_image,isLiked:n.isLiked})}))))};function A(){var n=Object(l.a)(["\n  background-image: url(",");\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n"]);return A=function(){return n},n}function D(){var n=Object(l.a)(["\n  width: 100%;\n  min-height: 20%;\n  display: flex;\n  justify-content: space-around;\n  & > * {\n    width: 22%;\n  }\n"]);return D=function(){return n},n}function U(){var n=Object(l.a)(["\n  margin: 0 10px;\n  width: 25%;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n"]);return U=function(){return n},n}function X(){var n=Object(l.a)(["\n  position: absolute;\n  top: 5vh;\n  right: 5vw;\n  font-size: 40px;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  &:hover {\n    font-size: 48px;\n  }\n"]);return X=function(){return n},n}function F(){var n=Object(l.a)(["\n  background-image: url(",");\n  width: 100%;\n  height: 100%;\n  margin-bottom: 5px;\n  background-color: transparent;\n  background-size: cover;\n  background-position: center center;\n"]);return F=function(){return n},n}function G(){var n=Object(l.a)(["\n  font-size: 28px;\n"]);return G=function(){return n},n}function H(){var n=Object(l.a)(["\n  font-size: 35px;\n  margin-bottom: 10px;\n"]);return H=function(){return n},n}function K(){var n=Object(l.a)(["\n  font-size: 65px;\n  margin-bottom: 15px;\n"]);return K=function(){return n},n}function N(){var n=Object(l.a)(["\n  margin: 0 10px;\n  width: 50%;\n"]);return N=function(){return n},n}function P(){var n=Object(l.a)(["\n  height: 100vh;\n  background-image: linear-gradient(-45deg, #d754ab, #fd723a);\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  color: white;\n"]);return P=function(){return n},n}function Q(){var n=Object(l.a)(["\n  query getMovie($id: Int!) {\n    movie(id: $id) {\n      id\n      title\n      medium_cover_image\n      language\n      rating\n      description_intro\n      isLiked @client\n    }\n    suggestions(id: $id) {\n      id\n      medium_cover_image\n    }\n  }\n"]);return Q=function(){return n},n}var R=Object(d.b)(Q()),S=m.a.div(P()),T=m.a.div(N()),V=m.a.h1(K()),W=m.a.h4(H()),Y=m.a.p(G()),Z=m.a.div(F(),(function(n){return n.bg})),nn=m.a.div(X()),en=m.a.div(U()),tn=m.a.div(D()),rn=m.a.div(A(),(function(n){return n.bg})),an=function(){var n,e,t,i,a=Object(u.e)().id,o=Object(v.b)(R,{variables:{id:parseInt(a)}}),l=o.loading,d=o.data;return r.a.createElement(S,null,r.a.createElement(T,null,r.a.createElement(V,null,l?"loading":"".concat(d.movie.title," ").concat(d.movie.isLiked?"\u2764":""),l?console.log("loading"):console.log(d.movie)),r.a.createElement(W,null,null===d||void 0===d||null===(n=d.movie)||void 0===n?void 0:n.language," \xb7 ",null===d||void 0===d||null===(e=d.movie)||void 0===e?void 0:e.rating),r.a.createElement(Y,null,null===d||void 0===d||null===(t=d.movie)||void 0===t?void 0:t.description_intro)),r.a.createElement(en,null,r.a.createElement(Z,{bg:(null===d||void 0===d?void 0:d.movie)?d.movie.medium_cover_image:""}),r.a.createElement(tn,null,null===d||void 0===d||null===(i=d.suggestions)||void 0===i?void 0:i.map((function(n){return r.a.createElement(c.b,{to:"/".concat(n.id),key:n.id},r.a.createElement(rn,{bg:n.medium_cover_image}))})))),r.a.createElement(nn,{onClick:function(){return window.location.href="/#/"}},"X"))};var on=function(){return r.a.createElement(c.a,null,r.a.createElement(u.a,{exact:!0,path:"/",component:J}),r.a.createElement(u.a,{path:"/:id",component:an}))},cn=t(12),un=new d.a({uri:"https://movieql2.now.sh/",resolvers:{Movie:{isLiked:function(){return!1}},Mutation:{toggleLikeMovie:function(n,e,t){var i=e.id,r=e.isLiked;t.cache.writeData({id:"Movie:".concat(i),data:{isLiked:!r}})}}}});o.a.render(r.a.createElement(cn.a,{client:un},r.a.createElement(on,null)),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.b9b6e471.chunk.js.map