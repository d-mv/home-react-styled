(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(n,e,t){n.exports=t(29)},28:function(n,e,t){},29:function(n,e,t){"use strict";t.r(e);var o=t(1),a=t.n(o),r=t(7),i=t.n(r),c=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(n,e){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}var u=t(4),l=t(2),d=t(3),p="rgb(68, 68, 68)";function m(){var n=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  @media (prefers-color-scheme: dark) {\n    background-color: ",";\n    color: ",";\n  }\n  @media (max-width: 499px) {\n    left: 0;\n  }\n  @media (min-width: 500px) {\n    position: absolute;\n    left: 50px;\n  }\n"]);return m=function(){return n},n}var g=d.a.main(m(),p,"#d3d3d3");function h(){var n=Object(l.a)(['\n  display: grid;\n  /* grid-template-rows: auto auto; */\n  grid-template-areas: "alpha beta";\n  grid-column-gap: 1rem;\n\n  margin: auto;\n  align-content: center;\n  @media (max-width: 350px) {\n    width: 90%;\n    grid-template-columns: 1fr 5fr;\n  }\n  @media (min-width: 351px) and (max-width: 549px) {\n    width: 90%;\n    grid-template-columns: 1fr 4fr;\n  }\n  @media (min-width: 559px) and (max-width: 1000px) {\n    width: 50%;\n    grid-template-columns: 1fr 2fr;\n  }\n  @media (min-width: 1001px) {\n    /* margin-top: 5rem; */\n    grid-template-columns: 1fr 3fr;\n    width: 50%;\n  }\n']);return h=function(){return n},n}function f(){var n=Object(l.a)(['\n  @media (max-width: 350px) {\n    padding: 20px 0;\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    justify-content: space-between;\n    text-align: center;\n    width: 100%;\n    margin: 0;\n  }\n  @media (min-width: 351px) and (max-width: 699px) {\n    padding: 20px 0;\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    justify-content: space-between;\n    text-align: center;\n    width: 100%;\n    margin: 0 auto;\n  }\n  @media (min-width: 700px) {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto auto;\n    grid-template-areas: "alpha beta";\n    grid-column-gap: 3rem;\n    width: 90%;\n    height: 100%;\n    margin: 0 auto;\n    align-content: center;\n  }\n']);return f=function(){return n},n}var b=d.a.div(f()),w=d.a.div(h());function v(){var n=Object(l.a)(["\n  @media (max-width: 699px) {\n    grid-area: alpha;\n    align-self: center;\n    justify-self: end;\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    flex-direction: column;\n    word-wrap: normal;\n  }\n  @media (min-width: 700px) {\n    grid-area: alpha;\n    padding-left: 40px;\n    align-self: center;\n    justify-self: end;\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    flex-direction: column;\n    word-wrap: normal;\n  }\n"]);return v=function(){return n},n}var x=d.a.section(v());function y(){var n=Object(l.a)(["\n  font-weight: 300;\n\n  cursor: pointer;\n  margin: 10px 0;\n  color: #878787;\n  &:hover {\n    color: black;\n  }\n"]);return y=function(){return n},n}function k(){var n=Object(l.a)(["\n  font-size: 1rem;\n  font-weight: 300;\n"]);return k=function(){return n},n}function j(){var n=Object(l.a)(["\n  font-size: 1.5rem;\n  font-weight: 300;\n"]);return j=function(){return n},n}function _(){var n=Object(l.a)(["\n  font-size: 2rem;\n  font-weight: 500;\n"]);return _=function(){return n},n}function E(){var n=Object(l.a)(["\n  font-size: 1rem;\n  font-weight: 300;\n  font-style: italic;\n"]);return E=function(){return n},n}function O(){var n=Object(l.a)(["\n  margin: 0;\n"]);return O=function(){return n},n}function S(){var n=Object(l.a)(["\n/* background:none; */\n"]);return S=function(){return n},n}var C=d.a.div(S()),R=d.a.p(O()),z=Object(d.a)(R)(E()),M=Object(d.a)(R)(_()),L=Object(d.a)(R)(j()),T=Object(d.a)(R)(k()),A=d.a.section(y()),P=function(){return a.a.createElement(C,null,a.a.createElement(z,null,"WELCOME,"),a.a.createElement(M,null,"I'm Dmitry"),a.a.createElement(L,null,"FULL-STACK DEVELOPER"),a.a.createElement(T,null,"React.js, Vue.js, Ruby, Rails & etc. Learning new, reading sci-fi and make photos when free."))},F=function(){var n="From your web-site",e="Hi Dmitry,",t="mailto:".concat("d.dash.mv@gmail.com","?subject=").concat(n,"&body=").concat(e);window.location.href=t},I=function(){return a.a.createElement(A,{onClick:F},"{ send message }")};function B(){var n=Object(l.a)(["\n    0% {\n      transform: scale(0);\n    }\n    100% {\n      transform: scale(1);\n    }\n    "]);return B=function(){return n},n}function H(){var n=Object(l.a)(["\n    0% {\n      transform: translateX(-100%);\n    }\n    100% {\n      transform: translateY(0);\n    }\n  "]);return H=function(){return n},n}function D(){var n=Object(l.a)(["\n    0% {\n      transform: translateY(-100%);\n    }\n    100% {\n      transform: translateX(0);\n    }"]);return D=function(){return n},n}function W(){var n=Object(l.a)(["\n0% {transform:scale(0)} 100%{transform:scale(1)}\n"]);return W=function(){return n},n}var N=Object(d.b)(W()),J=Object(d.b)(D()),Y=(Object(d.b)(H()),Object(d.b)(B()));function G(){var n=Object(l.a)(["\n  img {\n    @media (max-width: 350px) {\n      margin: 20px 0;\n      align-self: center;\n      grid-area: beta;\n      width: 100vw;\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    }\n    @media (min-width: 351px) {\n      align-self: center;\n      grid-area: beta;\n      width: 20rem;\n      border-radius: 3px;\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n      animation: 0.7s ease-out 0s 1 ",";\n    }\n  }\n"]);return G=function(){return n},n}var V=d.a.section(G(),Y),U=function(){return a.a.createElement(g,{"data-test":"view-content-home"},a.a.createElement(b,{"data-test":"style-grid"},a.a.createElement(x,{"data-test":"style-profile"},a.a.createElement(P,{"data-test":"component-message"}),a.a.createElement(I,{"data-test":"component-send-message"})),a.a.createElement(V,{"data-test":"style-image"},a.a.createElement("img",{src:"https://res.cloudinary.com/diciu4xpu/image/upload/v1552251001/home/avatar_photo.jpg",alt:"Dmitry\\'s avatar"}))))};function K(){var n=Object(l.a)(["\n  animation: "," 1s steps(200, start);\n  border-radius: 3px;\n  transition-duration: 0.5s;\n  width: 300px;\n  height: max-content;\n  margin: 10px;\n  @media (prefers-color-scheme: dark) {\n    background-color: ",";\n    color: ",";\n  }\n  background-color: #ececec;\n  box-shadow: ",";\n  transition: ",";\n  &:hover {\n    box-shadow: ",";\n  }\n"]);return K=function(){return n},n}var X=d.a.section(K(),N,"#aaaaaa",p,"0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)","all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)","0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)");function Q(){var n=Object(l.a)(["\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 5px 0;\n  border-bottom: 2px solid grey;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);\n"]);return Q=function(){return n},n}function q(){var n=Object(l.a)(["\n  padding: 5px 10px;\n  font-size: 1rem;\n  font-style: italic;\n"]);return q=function(){return n},n}function $(){var n=Object(l.a)(["\n  padding: 5px 10px;\n  font-size: 1.5rem;\n  font-weight: 300;\n"]);return $=function(){return n},n}function Z(){var n=Object(l.a)(["\n  img {\n    height: 20px;\n    margin: 0 5px;\n  }\n"]);return Z=function(){return n},n}function nn(){var n=Object(l.a)(["\n  grid-area: logos;\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n  padding: 0 5px;\n"]);return nn=function(){return n},n}function en(){var n=Object(l.a)(["\n  grid-area: photo;\n  height: 250px;\n  background: rgba(0, 0, 0, 0) url(",") no-repeat scroll\n    center center / cover;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  object-fit: cover;\n  height: 250px;\n  width: 300px;\n  border-radius: 3px 3px 0 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-content: flex-end;\n"]);return en=function(){return n},n}function tn(){var n=Object(l.a)(["\n  grid-area: details;\n  padding: 10px;\n  font-weight: 300;\n"]);return tn=function(){return n},n}function on(){var n=Object(l.a)(["\n  font-size: 0.8rem;\n  font-style: italic;\n  @media (prefers-color-scheme: dark) {\n    background-color: ",";\n    color: ",";\n    &:hover {\n      color: black;\n    }\n  }\n  color: #878787;\n  &:hover {\n    color: black;\n  }\n  cursor: pointer;\n"]);return on=function(){return n},n}function an(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-content: center;\n  padding: 10px;\n"]);return an=function(){return n},n}var rn=d.a.div(an()),cn=d.a.div(on(),"#aaaaaa",p),sn=d.a.div(tn()),un=d.a.div(en(),function(n){return n.image}),ln=d.a.div(nn()),dn=d.a.div(Z()),pn=d.a.div($()),mn=d.a.div(q()),gn=d.a.div(Q()),hn=function(n){return a.a.createElement(un,{image:n.photo},n.children)},fn=function(n){return a.a.createElement(gn,null,a.a.createElement(pn,null,n.title),a.a.createElement(mn,null,n.description))},bn=function(n){return a.a.createElement(dn,null,a.a.createElement("img",{src:n.icon,alt:""}))},wn=function(n){return a.a.createElement(ln,{"data-test":"component-ticons"},n.technology.map(function(e){return a.a.createElement(bn,{key:e,icon:n.icons[e][0]})}))},vn=function(n){return n.link&&n.id?a.a.createElement(cn,{onClick:function(){return e=n.link,void window.open(e,"_blank");var e},"data-test":"component-card-link"},n.id):null},xn=function(n){return a.a.createElement(rn,null,Object.keys(n.links).map(function(e){return""!==n.links[e]?a.a.createElement(vn,{key:e,link:n.links[e],id:e}):null}))},yn=function(n){return a.a.createElement(X,{"data-test":"component-project",onClick:function(){var e;"deployed"in(e=n.project.links)?window.open(e.deployed,"_blank"):"github"in e&&window.open(e.github,"_blank")}},a.a.createElement(hn,{photo:n.project.photo},a.a.createElement(fn,{title:n.project.title,description:n.project.description,"data-test":"component-pcard-title"})),a.a.createElement(sn,{"data-test":"component-pcard-description"},n.project.details),a.a.createElement(wn,{technology:n.project.technology,icons:n.icons,"data-test":"component-ticons"}),a.a.createElement(xn,{links:n.project.links}))};function kn(){var n=Object(l.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n"]);return kn=function(){return n},n}var jn=d.a.div(kn()),_n=function(n){return n.data&&n.technology?(console.log(n),a.a.createElement(g,{"data-test":"view-content-projects"},a.a.createElement(jn,{"data-test":"style-project-cards"},Object.keys(n.data).map(function(e){var t=n.data[e.toString()];return console.log(t),a.a.createElement(yn,{"data-test":"component-project",key:e,project:t,icons:n.technology})})))):a.a.createElement(g,{"data-test":"view-content-projects-empty"})};function En(){var n=Object(l.a)(["\n  @keyframes slideInFromBottom {\n    0% {\n      transform: translateY(100%);\n    }\n    100% {\n      transform: translateY(0);\n    }\n  }\n  position: absolute;\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: row;\n  justify-content: space-between;\n  align-content: center;\n  animation: 1s ease-out 0s 1 slideInFromBottom;\n  transition: 1s;\n  @media (max-width: 499px) {\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    bottom: 10%;\n    height: 15%;\n  }\n  @media (min-width: 500px) {\n    width: 90%;\n    left: 0;\n    right: 40px;\n    bottom: 20px;\n    height: 110px;\n    margin: 0 auto;\n  }\n"]);return En=function(){return n},n}var On=d.a.section(En());function Sn(){var n=Object(l.a)(["\n  background: rgba(0, 0, 0, 0) url(",") no-repeat scroll\n    center center / cover;\n  background-color: white;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  object-fit: cover;\n  width: 15%;\n  height: 100%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  }\n  @media (max-width: 699px) {\n    border-radius: none;\n  }\n  @media (min-width: 700px) {\n    border-radius: 3px;\n  }\n"]);return Sn=function(){return n},n}var Cn=d.a.section(Sn(),function(n){return n.photo});function Rn(){var n=Object(l.a)(["\n  background: none;\n  border: none;\n  font-size: 2rem;\n  @media (prefers-color-scheme: dark) {\n    color: ",";\n  }\n  color: ",";\n  align-self: center;\n  transition: 0.7s;\n  transform: rotate(","deg);\n  padding: {\n    top: 10px;\n    bottom: 10px;\n    left: 5px;\n    right: 5px;\n  }\n  @media (min-width: 500px) {\n    &:hover {\n      transform: scale(1.2) rotate(","deg);\n      text-shadow: 0 0 4px rgba(0, 0, 0, 0.3);\n    }\n  }\n"]);return Rn=function(){return n},n}var zn=d.a.button(Rn(),"#d3d3d3",p,function(n){return n.degree},function(n){return n.degree}),Mn=function(n){var e=0,t="left";n.right&&(e=180,t="right");var o="component-arrow-".concat(t),r=p;return window.matchMedia("(prefers-color-scheme: dark)").matches&&(r="#d3d3d3"),a.a.createElement(zn,{degree:e,"data-test":o},a.a.createElement("svg",{viewBox:"0 0 15 34",width:"15",height:"25",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"1",onClick:function(){return function(n,e){n(e)}(n.click,t)}},a.a.createElement("path",{d:"M204.613,236.326L84.372,140.796L204.613,45.266",fill:"none",stroke:r,strokeWidth:"31.62",transform:"matrix(.0857 0 0 .15702 -5.23 -5.108)"})))},Ln=function(n){var e=Object(o.useState)(1),t=Object(u.a)(e,2),r=t[0],i=t[1],c=function(e){var t=Object.keys(n.photos).length;switch(e){case"left":r>1&&i(r-1);break;case"right":r<t-4&&i(r+1)}};return a.a.createElement(On,{id:"photos-belt"},a.a.createElement(Mn,{left:!0,click:function(){return c("left")}}),Object.keys(n.photos).map(function(e){return e>=r&&e<=r+4?a.a.createElement(Cn,{id:"photos-belt-card",key:e,photo:n.photos[e].thumb,onClick:function(){return t=n.photos[e],void n.choosePhoto(t);var t}}):null}),a.a.createElement(Mn,{right:!0,click:function(){return c("right")}}))};function Tn(){var n=Object(l.a)(["\n  background: rgba(0, 0, 0, 0) url(",") no-repeat scroll\n    center center / cover;\n  object-fit: cover;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-content: flex-end;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  animation: 1s ease-out 0s 1 growLarge;\n  transition: 1s;\n  @media (max-width: 499px) {\n    top: 80px;\n    left: 0;\n    right: 0;\n    height: 60%;\n  }\n  @media (min-width: 500px) {\n    top: 30px;\n    left: 0;\n    width: 90%;\n    margin: 0 auto;\n    right: 40px;\n    bottom: 150px;\n    border-radius: 3px;\n  }\n"]);return Tn=function(){return n},n}var An=d.a.section(Tn(),function(n){return n.photo});function Pn(){var n=Object(l.a)(["\n  font-size: 1rem;\n  font-style: italic;\n"]);return Pn=function(){return n},n}function Fn(){var n=Object(l.a)(["\n  font-size: 1.5rem;\n  font-weight: 300;\n"]);return Fn=function(){return n},n}function In(){var n=Object(l.a)(["\n  margin: 0;\n  padding: 5px 10px;\n  font-weight: 300;\n"]);return In=function(){return n},n}function Bn(){var n=Object(l.a)(["\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  padding: 5px 0;\n  @media (min-width: 500px) {\n    border-radius: 0 0 3px 3px;\n  }\n"]);return Bn=function(){return n},n}var Hn=d.a.div(Bn()),Dn=d.a.p(In()),Wn=Object(d.a)(Dn)(Fn()),Nn=Object(d.a)(Dn)(Pn()),Jn=function(n){var e=Object(o.useState)(n.data[1]),t=Object(u.a)(e,2),r=t[0],i=t[1];return a.a.createElement(g,{"data-test":"view-content-photos"},a.a.createElement(An,{photo:r.large,"data-test":"style-photo-main"},a.a.createElement(Hn,{"data-test":"style-photo-title"},a.a.createElement(Wn,null,r.title),a.a.createElement(Nn,null,r.location))),a.a.createElement(Ln,{choosePhoto:i,photos:n.data,"data-test":"container-photo-belt"}))},Yn=t(6),Gn=t(14);function Vn(){var n=Object(l.a)(["\n  font-size: 1rem;\n  line-height: 2.5rem;\n  cursor: pointer;\n"]);return Vn=function(){return n},n}function Un(){var n=Object(l.a)(["\n  line-height: 2.5rem;\n  vertical-align: center;\n  font-size: 2rem;\n  cursor: pointer;\n"]);return Un=function(){return n},n}function Kn(){var n=Object(l.a)(["\n  grid-area: beta;\n  font-weight: 300;\n"]);return Kn=function(){return n},n}function Xn(){var n=Object(l.a)(["\n  grid-area: alpha;\n  text-align: right;\n"]);return Xn=function(){return n},n}d.a.div(Xn()),d.a.div(Kn());var Qn=d.a.div(Un()),qn=d.a.div(Vn()),$n=function(n){if(n.contact){var e=function(n){var e="component-contact-".concat(n.toLowerCase());switch(n){case"FaGithubAlt":return a.a.createElement(Yn.a,{"data-test":e});case"FaLinkedinIn":return a.a.createElement(Yn.c,{"data-test":e});case"FaSkype":return a.a.createElement(Yn.d,{"data-test":e});case"FaInstagram":return a.a.createElement(Yn.b,{"data-test":e});case"FaWhatsapp":return a.a.createElement(Yn.e,{"data-test":e});default:return a.a.createElement(Gn.a,{"data-test":e})}}(n.contact.icon);return a.a.createElement(w,{onClick:function(){return function(n,e){if(n.includes("mail")){var t={email:e,subj:"From your web-site",body:"Hi Dmitry,"},o="mailto:".concat(t.email,"?subject=").concat(t.subj,"&body=").concat(t.body);window.location.href=o}else window.open(e,"_blank")}(n.contact.icon,n.contact.link)},"data-test":"component-contact"},a.a.createElement(Qn,null,e),a.a.createElement(qn,{"data-test":"component-contact-description"},n.contact.description))}return null};function Zn(){var n=Object(l.a)(["\n  margin-top: 30vh;\n"]);return Zn=function(){return n},n}var ne=d.a.section(Zn()),ee=function(n){return n.contacts?a.a.createElement(ne,{"data-test":"component-contacts"},n.contacts.map(function(n){return a.a.createElement($n,{key:n.icon,contact:n,"data-test":"component-contact"})})):null},te=function(n){return n.data?a.a.createElement(g,{"data-test":"view-content-contacts"},a.a.createElement(ee,{contacts:n.data,"data-test":"component-contacts"})):a.a.createElement(g,{"data-test":"view-content-contacts-empty"})};function oe(){var n=Object(l.a)(["\n  z-index: 101;\n  padding: 10px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 18px;\n  cursor: pointer;\n  @media (prefers-color-scheme: dark) {\n    background-color: ",";\n    color: ",";\n    border-bottom: 1px solid grey;\n  }\n  border-bottom: 1px solid grey;\n  background-color: white;\n"]);return oe=function(){return n},n}var ae=d.a.div(oe(),p,"#d3d3d3"),re=function(n){return a.a.createElement(ae,{onClick:function(){return n.toggle(!n.show)}},"DM")};function ie(){var n=Object(l.a)(["\n  background: none;\n"]);return ie=function(){return n},n}var ce=d.a.aside(ie());function se(){var n=Object(l.a)(["\n  position: absolute;\n  top: 45px;\n  flex-direction: column;\n  z-index: 100;\n  font-weight: 300;\n  @media (max-width: 499px) {\n    display: ",";\n    left: 0px;\n    background-color: rgba(255, 255, 255, 0.9);\n    animation: 1s ease-out 0s 1 ",";\n    top: 45px;\n  }\n  @media (min-width: 500px) {\n    top: 25px;\n    display: ",";\n    justify-content: space-between;\n    align-content: center;\n    left: -30px;\n    animation: 1s ease-out 0s 1 ",";\n  }\n"]);return se=function(){return n},n}var ue=d.a.nav(se(),function(n){return n.show},J,function(n){return n.show},J);function le(){var n=Object(l.a)(["\n  outline: none;\n  font-family: Rubik;\n  font-weight: 300;\n  border: none;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  background: none;\n  font-size: 20px;\n  transition: 0.7s ease-in-out;\n  display: flex;\n  border-radius: 4px;\n  @media (max-width: 499px) {\n    padding: 10px;\n    margin-bottom: 0;\n  }\n  @media (min-width: 500px) {\n    justify-content: center;\n    align-content: center;\n    padding: 20px 20px;\n    margin-top: 30px;\n    margin-bottom: ",";\n    transform: ",";\n    margin-left: ",";\n    background-color: ",";\n    text-align: center;\n    width: 110px;\n    @media (prefers-color-scheme: dark) {\n      background-color: ",";\n      color: ",";\n    }\n    &:focus {\n      box-shadow: none;\n    }\n  }\n"]);return le=function(){return n},n}var de=d.a.button(le(),function(n){return n.margin},function(n){return 1===n.rotate?"none":"rotate(-90deg)"},function(n){return 1===n.rotate?"40px":0},function(n){return 1===n.rotate?"rgba(255, 255, 255, 0.9)":"none"},function(n){return 1===n.rotate?"rgba(68, 68, 68, 0.8)":"none"},"#d3d3d3"),pe=function(n){var e=a.a.useState(!1),t=Object(u.a)(e,2),o=t[0],r=t[1],i=function(n){r(!!n)};return a.a.createElement(de,{onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},onClick:function(){return e=n.section,n.toggle(e),void n.hide();var e},rotate:o?1:0,margin:n.margin},n.section)},me=t(5),ge=function(n){var e=me.sections,t=Object(o.useState)(!(window.screen.width<500)),r=Object(u.a)(t,2),i=r[0],c=r[1],s=!(window.screen.width<500),l=function(){s||c(!1)},d="none";return i&&(d="flex"),a.a.createElement(ce,null,a.a.createElement(re,{toggle:c,show:i}),a.a.createElement(ue,{show:d},e.map(function(e){return a.a.createElement(pe,{key:e.name,hide:l,toggle:n.toggle,margin:e.margin,section:e.name})})))},he=t(15);function fe(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  font-family: Rubik;\n  -moz-osx-font-smoothing: grayscale;\n  margin: 0;\n  padding: 0;\n  @media (prefers-color-scheme: dark) {\n    background-color: ",";\n    color: ",";\n  }\n"]);return fe=function(){return n},n}t.n(he).a.load({google:{families:["Rubik:300,300i,400:latin-ext"]}});var be=d.a.div(fe(),p,"#d3d3d3"),we=t(5),ve=function(){var n=Object(o.useState)("HOME"),e=Object(u.a)(n,2),t=e[0],r=e[1];return a.a.createElement(be,null,a.a.createElement(ge,{toggle:r}),"HOME"===t?a.a.createElement(U,null):null,"PROJECTS"===t?a.a.createElement(_n,{data:we.projects,technology:we.technology}):null,"PHOTOS"===t?a.a.createElement(Jn,{data:we.photos}):null,"CONTACTS"===t?a.a.createElement(te,{data:we.contacts}):null)};t(28);i.a.render(a.a.createElement(ve,null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");c?(function(n,e){fetch(n).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):s(n,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):s(e,n)})}}()},5:function(n){n.exports={sections:[{name:"HOME",margin:"10px"},{name:"PROJECTS",margin:"20px"},{name:"PHOTOS",margin:"20px"},{name:"CONTACTS",margin:"1rem"}],photos:{1:{title:"Pond with vegetation",location:"Gan Garoo, Israel",large:"https://res.cloudinary.com/diciu4xpu/image/upload/v1551907630/home/photos/gan_garoo_pond.jpg",thumb:"https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/gan_garoo_pond.jpg"},2:{title:"Branch of tree",location:"Beit Shean, Israel",large:"https://res.cloudinary.com/diciu4xpu/image/upload/v1551907617/home/photos/beit_shean_branch.jpg",thumb:"https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/beit_shean_branch.jpg"},3:{title:"Blossoming bush",location:"Yarkon Park, Israel",large:"https://res.cloudinary.com/diciu4xpu/image/upload/v1551907602/home/photos/yarkon_park_flower.jpg",thumb:"https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/yarkon_park_flower.jpg"},4:{title:"Flowers of the tree",location:"Herzliya Park, Israel",large:"https://res.cloudinary.com/diciu4xpu/image/upload/v1551907566/home/photos/tree_red_flowers.jpg",thumb:"https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/tree_red_flowers.jpg"},5:{title:"Cup of espresso",location:"Somewhere at home",large:"https://res.cloudinary.com/diciu4xpu/image/upload/v1552757048/home/photos/home_cup_of_coffee.jpg",thumb:"https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1552757048/home/photos/home_cup_of_coffee.jpg"},6:{title:"Sky through trees",location:"Yarkon Park, Israel",large:"https://res.cloudinary.com/diciu4xpu/image/upload/v1551907623/home/photos/yarkon_park_tree.jpg",thumb:"https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/yarkon_park_tree.jpg"},7:{title:"Mountains",location:"Ujarma, Georgia",large:"https://res.cloudinary.com/diciu4xpu/image/upload/v1551905690/home/photos/ujarma_dark.jpg",thumb:"https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/ujarma_dark.jpg"},8:{title:"Panorama",location:"Napoli, Italy",large:"https://res.cloudinary.com/diciu4xpu/image/upload/v1552062523/home/photos/napoli_panorama.jpg",thumb:"https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/napoli_panorama.jpg"},9:{title:"Autumn field",location:"Russia",large:"https://res.cloudinary.com/diciu4xpu/image/upload/v1552062527/home/photos/russia_autumn_field.jpg",thumb:"https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/russia_autumn_field.jpg"},10:{title:"Autumn park",location:"St.Petersburg, Russia",large:"https://res.cloudinary.com/diciu4xpu/image/upload/v1552062539/home/photos/russia_autumn_park.jpg",thumb:"https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/russia_autumn_park.jpg"},11:{title:"Yellow house",location:"St. Petersburg, Russia",large:"https://res.cloudinary.com/diciu4xpu/image/upload/v1552062521/home/photos/russia_yellow_house.jpg",thumb:"https://res.cloudinary.com/diciu4xpu/image/upload/c_thumb,w_200,g_face/v1551905690/home/photos/russia_yellow_house.jpg"}},projects:{1:{title:"The Newsletter",description:"Newspaper-style RSS reader app",photo:"https://res.cloudinary.com/diciu4xpu/image/upload/v1552308388/home/projects/newsletter_app_1.jpg",details:"With too many bright colours, moving elements and over-use of font weights and sizes, rather hard to focus on the information. This app works with text only, which is parsed and stored in PostgreSQL DB. Currently, as a proof of concept parser is set to work with Medium blogs, which are overloaded with large graphics and distracting elements. The technology used - Ruby, Hanami, SCSS, Bootstrap, Font Awesome and a bit of JS.",technology:["ruby","hanami","scss","bootstrap","fontawe"],links:{github:"https://github.com/d-mv/newsletter",deployed:"",video:"",other:""}},2:{title:"The Newsletter (React)",description:"Newspaper-style app on React",photo:"https://res.cloudinary.com/diciu4xpu/image/upload/v1554549670/home/projects/newsletter_app_2.jpg",details:"A further take on The Newsletter app concept. Done from scratch. Dropped Ruby/Hanami, Bootstrap and Font Awesome. The app is using React with Redux and SCSS for front and Node.js with Express and MongoDB for back. It is a work in progress, however, a fully working one. Some lacking features are being added. React is using Redux with Redux Promise, as well as Web Font Loader for dynamically load Google Fonts. On the back, Node.js is running Express, which is doing routing and business logic with the help of Axios, Fast XML Parser, while utilizing a remote MongoDB database through Mongoose. Developed initially as separate projects, backend and frontend were joined on later stage. Currently hosting on free Heroku.",technology:["react","redux","scss","node","express","mongo","heroku"],links:{github:"https://github.com/d-mv/newsletter-single",deployed:"https://the-newsletter-app.herokuapp.com/"}},3:{title:"Chaserz",description:"Scooter race web game",photo:"https://res.cloudinary.com/diciu4xpu/image/upload/v1552310260/home/projects/chaserz_app_1.jpg",details:"The app was developed as a part of Le Wagon Bootcamp (batch #209) with my colleague Roni Talvi. It is a browser based race game for scooter owners which combines online and real-life experience. This project has been done as proof of concept. Main trick was to collect geodata from the racers at the server and broadcast it to them back, so each can see the position of others on the map. The initial design done in Figma, then mockup in HTML/CSS. Some graphics done in Affinity Designer/Photo. The technology used - Ruby, Rails, ActionCable, SCSS, MapBox API, GPS geopositioning and JS.",technology:["ruby","rails","scss","mapbox","heroku"],links:{github:"https://github.com/d-mv/chaserz",deployed:"https://chaserz-dev.herokuapp.com/",video:"https://drive.google.com/open?id=1M2lTK6MzgQAMx-YspqgrFs9foKKw-lyC",other:""}},4:{title:"Homepage SPA",description:"Homepage app",photo:"https://res.cloudinary.com/diciu4xpu/image/upload/v1557655293/home/projects/homepage_app_1.jpg",details:"At certain point faced the need to make a homepage, which will act as a business card and a showcase. It had to reflect... basically me. From the beginning the decision was made not to use templates and work out something different. The result - you are looking at it. The initial mockup was done in Sketch, the working mockup in HTML/CSS. As main tool I used Vue.js (+ Vuex) with SCSS. To simplify dev process, the project is using JSON file with all the data and links to images on Cloudinary. Favicon designed  in Affinity Designer, while the pack with manifest.json done with Image2icon app. Later if has been reworked from ground in React. Styled Components instead of SCSS and React Icons instead of Font Awesome. Auto Dark Mode on macOS.",technology:["vue","scss","fontawe","divider","react","ts","styled","ricons"],links:{github:"https://github.com/d-mv/home",react:"https://github.com/d-mv/home-react-styled",deployed:"https://melnikov.dev"}},5:{title:"GulfHeritage.me",description:"Collection of historical places.",photo:"https://res.cloudinary.com/diciu4xpu/image/upload/v1557655591/home/projects/gulfheritage.jpg",details:"The idea was to create a web-site with collection of historical place in the Gulf region - mainly UAE, with later addtion of other countries. The information included photos, articles, locations. The project was based purely on HTML/CSS, with few JS libraries for showing photos.",technology:["html","css"],links:{}}},technology:{vue:["https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/200px-Vue.js_Logo_2.svg.png","Evan You, https://github.com/yyx990803 [CC BY 4.0 (https://creativecommons.org/licenses/by/4.0)]"],react:["https://res.cloudinary.com/diciu4xpu/image/upload/v1554551367/home/projects/logo_react.png","Facebook [Public domain]"],scss:["https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/200px-Sass_Logo_Color.svg.png","http://sass-lang.com/ [Public domain]"],ruby:["https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/200px-Ruby_logo.svg.png","Yukihiro Matsumoto, Ruby Visual Identity Team [CC BY-SA 2.5 (https://creativecommons.org/licenses/by-sa/2.5)]"],rails:["https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/200px-Ruby_On_Rails_Logo.svg.png","Jamie Dihiansan http://weblog.rubyonrails.org/2016/1/19/new-rails-identity/2 [CC0]"],hanami:["https://avatars3.githubusercontent.com/u/3210273?s=200&v=4"],heroku:["https://res.cloudinary.com/diciu4xpu/image/upload/v1554551902/home/projects/logo_heroku.png","Heroku"],bootstrap:["https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Boostrap_logo.svg/200px-Boostrap_logo.svg.png","Bootstrap [Public domain]"],fontawe:["https://res.cloudinary.com/diciu4xpu/image/upload/v1554551901/home/projects/logo_fontawesome.jpg","Font Awesome"],mapbox:["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Mapbox_Logo.svg/200px-Mapbox_Logo.svg.png","Will Dove / Mapbox [Public domain]"],js:["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png","Ramaksoud2000 via Chris Williams [Public domain]"],cloudinary:["https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Cloudinary_-_Official_logo.svg/320px-Cloudinary_-_Official_logo.svg.png","cloudinary.com"],mongo:["https://res.cloudinary.com/diciu4xpu/image/upload/v1554551501/home/projects/logo_mongo.png","MongoDB"],node:["https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png","NodeJS"],express:["https://res.cloudinary.com/diciu4xpu/image/upload/v1554551501/home/projects/logo_express.png","Express"],redux:["https://res.cloudinary.com/diciu4xpu/image/upload/v1554551214/home/projects/logo_redux.png","Redux"],ricons:["https://react-icons.netlify.com/static/media/react-icons.966a74a6.svg","React Icons"],styled:["https://raw.githubusercontent.com/styled-components/brand/master/styled-components.png","Styled Components"],divider:["https://res.cloudinary.com/diciu4xpu/image/upload/v1555408126/home/projects/divider.png","DM"],ts:["https://www.typescriptlang.org/assets/images/icons/android-chrome-192x192.png","Microsoft"],html:["https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/240px-HTML5_logo_and_wordmark.svg.png","W3C"],css:["https://res.cloudinary.com/diciu4xpu/image/upload/v1557653599/home/projects/logo_css.png","DM"]},contacts:[{icon:"FaGithubAlt",description:"GitHub repositories for projects",link:"https://github.com/d-mv"},{icon:"FaLinkedinIn",description:"LinkedIn page",link:"https://www.linkedin.com/in/dmitry-melnikov-pm/"},{icon:"FaSkype",description:"Skype",link:"skype:dmitry.melnikov?chat"},{icon:"FaInstagram",description:"Instagram",link:"https://www.instagram.com/melnikov_dm/"},{icon:"MdEmail",description:"Mail",link:"d.dash.mv@gmail.com"}]}}},[[17,1,2]]]);