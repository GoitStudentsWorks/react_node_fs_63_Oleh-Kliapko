"use strict";(self.webpackChunkGooseTrack_front=self.webpackChunkGooseTrack_front||[]).push([[883],{6323:function(n,t,e){e.d(t,{P:function(){return _}});var i,r,o,a,c,d,s,l,u,h,p,f,m=e(9434),x=e(4261),g=e(1670),b=e(8705),w=e(968),k=e(168),v=e(3081),y=e(1087),j=e(9609),U=v.default.div(i||(i=(0,k.Z)(["\n  width: 100%;\n  border: 1px solid ",";\n  position: relative;\n  min-height: 94px;\n  background-color: ",";\n  border-radius: 8px;\n  @media "," {\n    min-height: 144px;\n  }\n\n  @media "," {\n    min-height: 125px;\n  }\n"])),(function(n){return n.theme.colors.borderTableAndInput}),(function(n){return n.theme.colors.backgroundUserForm}),j.U.tablet,j.U.desktop),Z=v.default.div(r||(r=(0,k.Z)(["\n  position: absolute;\n  top: 8px;\n  right: 4px;\n  background-color: ",";\n  border-radius: 8px;\n  padding: 4px 8px;\n\n  @media "," {\n    top: 18px;\n    right: 22px;\n  }\n\n  @media "," {\n    top: 14px;\n    right: 14px;\n  }\n"])),(function(n){var t=n.picked,e=n.theme;return t?e.colors.accent:"transparent"}),j.U.tablet,j.U.desktop),z=v.default.p(o||(o=(0,k.Z)(["\n  font-family: 'Inter';\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.2;\n  text-transform: uppercase;\n  color: ",";\n\n  @media "," {\n    font-size: ",";\n  }\n\n  @media "," {\n    font-size: ",";\n    line-height: 1.1;\n  }\n"])),(function(n){return n.theme.fontWeight.b}),(function(n){return n.theme.fontSizes.xs}),(function(n){var t=n.picked,e=n.theme;return t?e.colors.white:e.colors.loaderWrapper}),j.U.tablet,(function(n){return n.theme.fontSizes.l}),j.U.desktop,(function(n){return n.theme.fontSizes.m})),S=(0,v.default)(y.rU)(a||(a=(0,k.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),T=v.default.div(c||(c=(0,k.Z)(["\n  width: 100%;\n  height: 72px;\n  position: absolute;\n  top: 48px;\n  overflow: scroll;\n  ::-webkit-scrollbar {\n    width: 0;\n  }\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  @media "," {\n    height: 100px;\n    top: 58px;\n  }\n\n  @media "," {\n    height: 67px;\n  }\n"])),j.U.tablet,j.U.desktop),I=v.default.div(d||(d=(0,k.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n"]))),A=v.default.button(s||(s=(0,k.Z)(["\n  margin: 2px;\n  height: 22px;\n  padding: 4px 4px 4px 8px;\n  display: flex;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.4;\n  text-align: start;\n  border-radius: 8px;\n  background-color: ",";\n  //overflow: hidden;\n  ::-webkit-scrollbar {\n    width: 0;\n  }\n  color: ",";\n  @media "," {\n    margin-left: 4px;\n    margin-right: 4px;\n  }\n\n  @media "," {\n    margin-left: 8px;\n    margin-right: 8px;\n  }\n  transform: scale(1);\n  transition: ease-in-out 0.7s;\n  transition-property: scale;\n  transition-duration: ",";\n  transition-timing-function: ",";\n\n  :hover,\n  &:focus {\n    scale: 1.1;\n  }\n\n  ","\n"])),(function(n){return n.theme.fontWeight.b}),(function(n){return n.theme.fontSizes.micro}),(function(n){var t=n.priority,e=n.theme;switch(t){case"low":default:return e.colors.blueInNotes;case"medium":return e.colors.yellowInNotes;case"high":return e.colors.pinkInNotes}}),(function(n){var t=n.priority,e=n.theme;switch(t){case"low":default:return e.colors.lowTask;case"medium":return e.colors.mediumTask;case"high":return e.colors.highTask}}),j.U.tablet,j.U.desktop,(function(n){return n.theme.animations.duration}),(function(n){return n.theme.animations.cubicBezier}),(function(n){if("done"===n.category)return"text-decoration: line-through; text-decoration-color: black;"})),W=v.default.div(l||(l=(0,k.Z)(["\n  display: flex;\n  overflow: hidden;\n  height: 100%;\n"]))),B=v.default.p(u||(u=(0,k.Z)(["\n  white-space: nowrap;\n"]))),C=v.default.div(h||(h=(0,k.Z)(["\n  display: ",";\n\n  @media "," {\n    display: ",";\n  }\n\n  @media "," {\n    display: ",";\n  }\n"])),(function(n){return n.length<6?"none":"block"}),j.U.tablet,(function(n){return n.length<10?"none":"block"}),j.U.desktop,(function(n){return n.length<18?"none":"block"})),N=e(184),F=function(n){var t=n.date,e=n.picked,i=void 0!==e&&e,r=n.month,o=(0,m.I0)(),a=(0,m.v9)(g.AA),c="".concat(r,"-").concat(t.toString().padStart(2,0)),d=(0,m.v9)(g.py),s=(null===d||void 0===d?void 0:d.filter((function(n){return n.date.slice(0,10)==="".concat(a.slice(0,8)).concat(t.toString().padStart(2,0))}))).filter((function(n){return n.date.slice(0,7)===r}));return(0,N.jsx)(S,{onClick:function(){o((0,w.qh)(c)),o((0,w.z7)("day"))},to:"/calendar/day/".concat(c),children:(0,N.jsxs)(U,{children:[(0,N.jsx)(Z,{picked:i,children:(0,N.jsx)(z,{picked:i,children:t})}),(0,N.jsx)(T,{children:(0,N.jsx)(I,{children:null===s||void 0===s?void 0:s.map((function(n){return(0,N.jsxs)(A,{priority:n.priority,category:n.category,onClick:function(t){return function(n,t){n.stopPropagation(),n.preventDefault(),o((0,w.Hd)(!0)),o((0,w.qJ)(t)),o((0,w.KL)(!0))}(t,n)},children:[(0,N.jsx)(W,{children:(0,N.jsx)(B,{children:n.title})}),(0,N.jsx)(C,{length:n.title.length,children:"..."})]},n._id)}))})})]})})},G=v.default.div(p||(p=(0,k.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: flex-start;\n  @media "," {\n    padding-bottom: 32px;\n  }\n"])),j.U.desktopBefore),P=v.default.div(f||(f=(0,k.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n"]))),_=function(){var n=(0,m.v9)(g.AA),t=(0,b.V1)(n);return(0,N.jsx)(G,{children:t.map((function(t){return(0,N.jsx)(P,{children:t.map((function(t){return(0,N.jsx)(F,{date:t.day,month:t.month,picked:t.day===parseInt(n.slice(8,10),10)&&t.month===n.slice(0,7)},(0,x.Z)())}))},(0,x.Z)())}))})}},3883:function(n,t,e){e.r(t),e.d(t,{ChoosedMonth:function(){return s},default:function(){return l}});var i,r=e(6323),o=e(644),a=e(168),c=e(3081).default.div(i||(i=(0,a.Z)(["\n  width: 100%;\n  /* height: 100%; */\n  /* \n    @media screen and (min-width: ",") {\n        width: 335px;\n        height: 535px;\n    }\n\n    @media screen and (min-width: ",") {\n        width: 704px;\n        height: 785px;\n    }\n\n    @media screen and (min-width: ",") {\n        width: 1084px;\n        height: 686px;\n    } */\n"])),(function(n){return n.theme.breakpoints.s}),(function(n){return n.theme.breakpoints.m}),(function(n){return n.theme.breakpoints.l})),d=e(184),s=function(){return(0,d.jsxs)(c,{children:[(0,d.jsx)(o.Q,{}),(0,d.jsx)(r.P,{})]})},l=s},644:function(n,t,e){e.d(t,{Q:function(){return f}});var i,r,o,a=e(9230),c=e(168),d=e(3081),s=e(9609),l=d.default.ul(i||(i=(0,c.Z)(["\n  width: 100%;\n  border-radius: 8px;\n  border: 1px solid ",";\n  background-color: ",";\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  margin-bottom: 14px;\n  @media "," {\n    margin-bottom: 18px;\n  }\n  @media "," {\n    margin-bottom: 15px;\n  }\n"])),(function(n){return n.theme.colors.borderTableAndInput}),(function(n){return n.theme.colors.backgroundUserForm}),s.U.tablet,s.U.desktop),u=d.default.li(r||(r=(0,c.Z)(["\n  overflow: hidden;\n  text-transform: uppercase;\n\n  @media "," {\n    width: 10px;\n\n    width: ",";\n  }\n"])),s.U.tabletBefore,(function(n){switch(n.day){case"\u041f\u041d":case"\u0421\u0420":case"\u0427\u0422":case"\u0421\u0411":case"\u041d\u0414":return"12px";case"\u0412\u0422":case"Tue":case"Fri":case"Sat":case"Sun":default:return"10px";case"\u041f\u0422":return"13px";case"Mon":return"15px";case"Wed":return"16px";case"Thu":return"11px"}})),h=d.default.button(o||(o=(0,c.Z)(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.1;\n  text-transform: uppercase;\n  padding: 16px 0px;\n  border: none;\n  background-color: transparent;\n  color: ",";\n\n  @media "," {\n    padding: 14px 0px;\n  }\n"])),(function(n){return n.theme.fontWeight.sb}),(function(n){return n.theme.fontSizes.m}),(function(n){var t=n.id,e=n.theme;switch(t){case"Saturday":case"\u0421\u0411":return e.colors.accent;case"Sunday":case"\u041d\u0414":return e.colors.hovered;default:return e.colors.loaderWrapper}}),s.U.tablet),p=e(184),f=function(){var n=(0,(0,a.$G)().t)("calendarNames.days").split(",");return(0,p.jsx)(l,{children:n.map((function(n,t){return(0,p.jsx)(u,{day:n.slice(0,3),children:(0,p.jsx)(h,{id:n,children:n.slice(0,3)})},t)}))})}},9609:function(n,t,e){e.d(t,{U:function(){return a}});var i=375,r=768,o=1440,a={mobileOnly:"(max-width: ".concat(i-.02,"px)"),mobile:"(min-width: ".concat(i,"px)"),mobileTablet:"(min-width: ".concat(i,"px) and (max-width: ").concat(r-.02,"px)"),tabletBefore:"(max-width: ".concat(r-.02,"px)"),tablet:"(min-width: ".concat(r,"px)"),tabletOnly:"(min-width: ".concat(r,"px) and (max-width: ").concat(o-.02,"px)"),desktopBefore:"(max-width: ".concat(o-.02,"px)"),desktop:"(min-width: ".concat(o,"px)"),retina:"(min-device-pixel-ratio: 2),\n  (-webkit-min-device-pixel-ratio: 2),\n  (min-resolution: 192dpi),\n  (min-resolution: 2dppx)"}}}]);
//# sourceMappingURL=883.bfacaae8.chunk.js.map