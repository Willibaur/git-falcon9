!function(n,t){for(var e in t)n[e]=t[e]}(exports,function(n){function t(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};return t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:i})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=6)}([function(n,t){n.exports=require("styled-components")},function(n,t){n.exports=require("react")},function(n,t,e){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}function o(n,t){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.RocketCap=t.RocketSecondStage=t.RocketFairing=t.SpaceXLogo=t.USFlag=t.RocketFirstStage=t.Falcon9Left=t.Falcon9Right=t.Falcon9=t.Rocket=t.launch=t.land=t.wiggle=void 0;var a=o(["\n  0% {\n    left: calc(90% - 47px); }\n  50% {\n    left: calc(90% - 45px); }\n  100% {\n    left: calc(90% - 47px); }\n"],["\n  0% {\n    left: calc(90% - 47px); }\n  50% {\n    left: calc(90% - 45px); }\n  100% {\n    left: calc(90% - 47px); }\n"]),r=o(["\n  0% {\n    top: -260px; }\n  50% {\n      top: calc(100% - 300px); }\n  67% {\n    top: calc(100% - 285px); }\n  100% {\n    top: calc(100% - 285px); }\n"],["\n  0% {\n    top: -260px; }\n  50% {\n      top: calc(100% - 300px); }\n  67% {\n    top: calc(100% - 285px); }\n  100% {\n    top: calc(100% - 285px); }\n"]),p=o(["\n  0% {\n    top: calc(100% - 280px); }\n  33% {\n    top: calc(100% - 280px); }\n  100% {\n    top: calc(0% - 300px); }\n"],["\n  0% {\n    top: calc(100% - 280px); }\n  33% {\n    top: calc(100% - 280px); }\n  100% {\n    top: calc(0% - 300px); }\n"]),l=o(["\n  display: ",";\n  position: absolute;\n  height: 320px;\n  left: calc(90% - 50px);\n  ","\n"],["\n  display: ",";\n  position: absolute;\n  height: 320px;\n  left: calc(90% - 50px);\n  ","\n"]),d=o(["\n  display: block;\n  position: absolute;\n  height: 320px;\n  left: 0px;\n  'top: calc(0%-300px);'\n  ","\n"],["\n  display: block;\n  position: absolute;\n  height: 320px;\n  left: 0px;\n  'top: calc(0%-300px);'\n  ","\n"]),s=o(["\n  display: ",";\n  ","\n"],["\n  display: ",";\n  ","\n"]),u=o(["\n  display: block;\n  position: absolute;\n  top: 100px;\n  width: 22px;\n  height: 155px;\n  background-color: #d1d2d6;\n  border-top: 1px solid #a7a9b1;\n"],["\n  display: block;\n  position: absolute;\n  top: 100px;\n  width: 22px;\n  height: 155px;\n  background-color: #d1d2d6;\n  border-top: 1px solid #a7a9b1;\n"]),f=o(["\n  position: absolute;\n  top: 115px;\n  height: 5px;ß\n  width: 8px;\n  left: 7px;\n"],["\n  position: absolute;\n  top: 115px;\n  height: 5px;ß\n  width: 8px;\n  left: 7px;\n"]),c=o(["\n  position: absolute;\n  top: 130px;\n  height: 85px;\n  width: 22px;\n"],["\n  position: absolute;\n  top: 130px;\n  height: 85px;\n  width: 22px;\n"]),m=o(["\n  display: ",";\n  //display: ",";\n  position: absolute;\n  top: -20px;\n  height: 60px;\n  width: 30px;\n  left: -4px;\n  border-top-left-radius: 200%;\n  border-top-right-radius: 200%;\n  border-bottom-left-radius: 70%;\n  border-bottom-right-radius: 70%;\n  background-color: #d1d2d6;\n  box-sizing: border-box;\n\n  :after{\n    content: '';\n    position: absolute;\n    display: ",";\n    left: 16px;\n    width: 10px;\n    top: 3px;\n    height: 27px;\n    border-top-right-radius: 100%;\n    background: linear-gradient(180deg, #a7a9b1 20%, #d6d8e1); \n  }\n"],["\n  display: ",";\n  //display: ",";\n  position: absolute;\n  top: -20px;\n  height: 60px;\n  width: 30px;\n  left: -4px;\n  border-top-left-radius: 200%;\n  border-top-right-radius: 200%;\n  border-bottom-left-radius: 70%;\n  border-bottom-right-radius: 70%;\n  background-color: #d1d2d6;\n  box-sizing: border-box;\n\n  :after{\n    content: '';\n    position: absolute;\n    display: ",";\n    left: 16px;\n    width: 10px;\n    top: 3px;\n    height: 27px;\n    border-top-right-radius: 100%;\n    background: linear-gradient(180deg, #a7a9b1 20%, #d6d8e1); \n  }\n"]),x=o(["\n  display: ",";\n  position: absolute;\n  top: 40px;\n  height: 60px;\n  width: 20px;\n  left: 1px;\n  background-color: #d1d2d6;\n  border-bottom: 1px solid #a7a9b1;\n  border-top: 1px solid #a7a9b1;\n  box-sizing: initial;\n"],["\n  display: ",";\n  position: absolute;\n  top: 40px;\n  height: 60px;\n  width: 20px;\n  left: 1px;\n  background-color: #d1d2d6;\n  border-bottom: 1px solid #a7a9b1;\n  border-top: 1px solid #a7a9b1;\n  box-sizing: initial;\n"]),h=o(["\n  display: block;\n  position: absolute;\n  top: 80px;\n  height: 65px;\n  width: 22px;\n  border-top-left-radius: 2000%;\n  border-top-right-radius: 2000%;\n  background-color: #d1d2d6;\n"],["\n  display: block;\n  position: absolute;\n  top: 80px;\n  height: 65px;\n  width: 22px;\n  border-top-left-radius: 2000%;\n  border-top-right-radius: 2000%;\n  background-color: #d1d2d6;\n"]),b=e(0),g=i(b),y=e(8),w=e(7),E=e(5),k=e(9),T=e(1),L=i(T),v=t.wiggle=(0,b.keyframes)(a),_=t.land=(0,b.keyframes)(r),O=t.launch=(0,b.keyframes)(p),M=t.Rocket=g.default.div(l,function(n){return n.display?"block":"none"},function(n){return"None"==n.animationType?";":function(n){return"LAUNCH"==n.animationType?"top: calc(100% - 280px);animation-name: "+v+","+O+";animation-duration: 200ms, 3s;animation-delay: 0.5s, 0s;animation-iteration-count: 13, 1;animation-fill-mode: forwards;animation-timing-function: ease-in;":"top: calc(0%-300x);bottom: calc(100%);animation-name: "+v+","+_+";animation-duration: 200ms, 3s;animation-delay: 1s, 0s;animation-iteration-count: 5, 1;animation-fill-mode: forwards;animation-timing-function: ease-out;"}}),N=t.Falcon9=g.default.div(d,function(n){return"None"==n.animationType?";":function(n){return n.animationType,";"}}),R=t.Falcon9Right=N.extend(s,function(n){return n.heavy?"block":"none"},function(n){return"None"==n.animationType?";":function(n){return"LAUNCH"==n.animationType?"left: 24px;":"left: -100px;"}}),j=t.Falcon9Left=N.extend(s,function(n){return n.heavy?"block":"none"},function(n){return"None"==n.animationType?";":function(n){return"LAUNCH"==n.animationType?"left: -24px;":"left: -200px;"}}),S=t.RocketFirstStage=g.default.span(u),A=t.USFlag=g.default.img(f),F=t.SpaceXLogo=g.default.img(c),U=t.RocketFairing=g.default.i(m,function(n){return"LAUNCH"==n.animationType?"block":"none"},function(n){return n.heavy?"block":"none"},function(n){return"LAUNCH"==n.animationType?"block":"none"}),P=t.RocketSecondStage=g.default.i(x,function(n){return"LAUNCH"==n.animationType?"block":"none"}),C=t.RocketCap=g.default.i(h),H=function(n){var t=n.display,e=n.animationType,i=n.heavy,o=n.onAnimationEnd;return L.default.createElement(M,{id:"rocket",display:t,animationType:e,onAnimationEnd:o.bind(void 0)},L.default.createElement(j,{heavy:i,animationType:e},L.default.createElement(C,null),L.default.createElement(S,null),L.default.createElement(w.FinLeft,{animationType:e}),L.default.createElement(w.FinRight,{animationType:e}),L.default.createElement(k.Thrust,{animationType:e}),L.default.createElement(E.Octaweb,null),L.default.createElement(E.MerlinEngineLeft,null),L.default.createElement(E.MerlinEngineRight,null),L.default.createElement(E.MerlinEngineMiddle,null),L.default.createElement(y.LegLeft,{animationType:e}),L.default.createElement(y.LegRight,{animationType:e}),L.default.createElement(y.LegMiddle,{animationType:e}),L.default.createElement(k.Wastes,{animationType:e},L.default.createElement("i",null),L.default.createElement("i",null),L.default.createElement("i",null),L.default.createElement("i",null),L.default.createElement("i",null))),L.default.createElement(R,{heavy:i,animationType:e},L.default.createElement(C,null),L.default.createElement(S,null),L.default.createElement(w.FinLeft,{animationType:e}),L.default.createElement(w.FinRight,{animationType:e}),L.default.createElement(k.Thrust,{animationType:e}),L.default.createElement(E.Octaweb,null),L.default.createElement(E.MerlinEngineLeft,null),L.default.createElement(E.MerlinEngineRight,null),L.default.createElement(E.MerlinEngineMiddle,null),L.default.createElement(y.LegLeft,{animationType:e}),L.default.createElement(y.LegRight,{animationType:e}),L.default.createElement(y.LegMiddle,{animationType:e}),L.default.createElement(k.Wastes,{animationType:e},L.default.createElement("i",null),L.default.createElement("i",null),L.default.createElement("i",null),L.default.createElement("i",null),L.default.createElement("i",null))),L.default.createElement(N,{animationType:e},L.default.createElement(P,{animationType:e}),L.default.createElement(U,{animationType:e,heavy:i}),L.default.createElement(S,null),L.default.createElement(A,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/280px-Flag_of_the_United_States_%28Pantone%29.svg.png"}),L.default.createElement(F,{src:"http://i67.tinypic.com/24q6a0k.png"}),L.default.createElement(w.FinLeft,{animationType:e}),L.default.createElement(w.FinRight,{animationType:e}),L.default.createElement(k.Thrust,{animationType:e}),L.default.createElement(E.Octaweb,null),L.default.createElement(E.MerlinEngineLeft,null),L.default.createElement(E.MerlinEngineRight,null),L.default.createElement(E.MerlinEngineMiddle,null),L.default.createElement(y.LegLeft,{animationType:e}),L.default.createElement(y.LegRight,{animationType:e}),L.default.createElement(y.LegMiddle,{animationType:e}),L.default.createElement(k.Wastes,{animationType:e},L.default.createElement("i",null),L.default.createElement("i",null),L.default.createElement("i",null),L.default.createElement("i",null),L.default.createElement("i",null))))};t.default=H},function(n,t,e){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}function o(n,t){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.LaunchPad=t.exhaust=void 0;var a=o(["\n  0%{\n    box-shadow: 0px -20px 60px -5px rgba(255,255,255,0.7);\n  }\n  60%{\n    box-shadow: 0px -30px 70px 5px white;\n  }\n  100%{\n    box-shadow: 0px -10px 80px -10px rgba(255,255,255,0.5);\n  }\n"],["\n  0%{\n    box-shadow: 0px -20px 60px -5px rgba(255,255,255,0.7);\n  }\n  60%{\n    box-shadow: 0px -30px 70px 5px white;\n  }\n  100%{\n    box-shadow: 0px -10px 80px -10px rgba(255,255,255,0.5);\n  }\n"]),r=o(["\n    position: absolute;\n    display: ",";\n    top: calc(100%);\n    height: 1px;\n    width: 100px;\n    left: calc(90% - 50px);\n    right: 0;\n    background: #444;\n    animation-name: ",";\n    animation-duration: 2s;\n    animation-delay: 0s;\n    animation-iteration-count: 1;\n    will-change: box-shadow;\n"],["\n    position: absolute;\n    display: ",";\n    top: calc(100%);\n    height: 1px;\n    width: 100px;\n    left: calc(90% - 50px);\n    right: 0;\n    background: #444;\n    animation-name: ",";\n    animation-duration: 2s;\n    animation-delay: 0s;\n    animation-iteration-count: 1;\n    will-change: box-shadow;\n"]),p=e(0),l=i(p),d=e(1),s=i(d),u=t.exhaust=(0,p.keyframes)(a),f=t.LaunchPad=l.default.div(r,function(n){return n.display?"block":"none"},u),c=function(n){var t=n.display,e=n.animationType;return s.default.createElement(f,{id:"platform",display:t,animationType:e})};t.default=c},function(n,t){n.exports=require("prop-types")},function(n,t,e){"use strict";function i(n,t){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.MerlinEngineRight=t.MerlinEngineMiddle=t.MerlinEngineLeft=t.MerlinEngine=t.Octaweb=void 0;var o=i(["\n  position: absolute;\n  height: 5px;\n  width: 23px;\n  bottom: 60px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  background-color: #3a3a3b; \n"],["\n  position: absolute;\n  height: 5px;\n  width: 23px;\n  bottom: 60px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  background-color: #3a3a3b; \n"]),a=i(["\n  position: absolute;\n  height: 8px;\n  width: 8px;\n  bottom: 52px;\n  border-top-left-radius: 100%;\n  border-top-right-radius: 100%;\n  background-color: #787879;\n  border-color: #3a3a3b;\n  border-width: 1px;\n  border-top-width: 0px;\n  border-style: solid;\n"],["\n  position: absolute;\n  height: 8px;\n  width: 8px;\n  bottom: 52px;\n  border-top-left-radius: 100%;\n  border-top-right-radius: 100%;\n  background-color: #787879;\n  border-color: #3a3a3b;\n  border-width: 1px;\n  border-top-width: 0px;\n  border-style: solid;\n"]),r=i(["\n  left: 14px;\n"],["\n  left: 14px;\n"]),p=i(["\n  left: 8px;\n"],["\n  left: 8px;\n"]),l=i(["\n  left: 2px;\n"],["\n  left: 2px;\n"]),d=e(0),s=function(n){return n&&n.__esModule?n:{default:n}}(d),u=(t.Octaweb=s.default.i(o),t.MerlinEngine=s.default.i(a));t.MerlinEngineLeft=u.extend(r),t.MerlinEngineMiddle=u.extend(p),t.MerlinEngineRight=u.extend(l)},function(n,t,e){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}function o(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function a(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function r(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}function p(n){var t=["To(.+).git"],e=["error:"];return new RegExp("("+t.join(")|(")+")").test(n)&&!new RegExp("("+e.join(")|(")+")").test(n)}function l(n){var t=["Updating"],e=/CONFLICT/;return new RegExp("("+t.join(")|(")+")").test(n)&&!e.test(n)}function d(n){var t=["Writing(.+),(.+)KiB"];if(new RegExp("("+t.join(")|(")+")").test(n)){var e=n.split(/\n| /);return e[e.indexOf("KiB")-1]}return 0}var s=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}(),u=e(2),f=i(u),c=e(3),m=i(c),x=e(4),h=i(x);t.middleware=function(n){return function(t){return function(e){if("SESSION_ADD_DATA"===e.type){var i=e.data,o=d(i);o&&n.dispatch({type:o}),p(i)?n.dispatch({type:"PUSH_MODE_TOGGLE"}):l(i)&&n.dispatch({type:"PULL_MODE_TOGGLE"}),t(e)}else t(e)}}},t.reduceUI=function(n,t){switch(t.type){case"PUSH_MODE_TOGGLE":return n.set("display",!0).set("rocketState","LAUNCH");case"PULL_MODE_TOGGLE":return n.set("display",!0).set("rocketState","LAND");default:var e=Number.parseFloat(t.type,10);return e&&e>63.8?n.set("bytes",!0):n.set("bytes",!1).set("rocketState","None")}};var b=function(n,t,e){return Object.assign(e,{rocketState:t.rocketState,bytes:t.bytes})};t.mapTermsState=function(n,t){return Object.assign(t,{rocketState:n.ui.rocketState,bytes:n.ui.bytes})},t.getTermGroupProps=b,t.getTermProps=b,t.decorateTerm=function(n,t){var e=t.React,i=function(t){function i(n,t){o(this,i);var e=a(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,n,t));return e.state={animationType:"NONE",heavy:!1,display:!1},e}return r(i,t),s(i,[{key:"onTerminal",value:function(n){this.props.onTerminal&&this.props.onTerminal(n),this._div=n.div_,this._window=n.document_.defaultView}},{key:"componentWillReceiveProps",value:function(n){return"LAND"===n.rocketState?this.setState({animationType:"LAND",display:!0}):"LAUNCH"===n.rocketState&&this.setState({animationType:"LAUNCH",display:!0}),!0===n.bytes&&this.setState({heavy:!0}),n}},{key:"onAnimationEnd",value:function(n){3==n.elapsedTime&&this.setState({animationType:"NONE",heavy:!1,display:!1}),setTimeout(1500)}},{key:"render",value:function(){return e.createElement("div",{style:{width:"100%",height:"100%",position:"relative"}},e.createElement(n,Object.assign({},this.props,{onTerminal:this._onTerminal})),e.createElement(f.default,{display:this.state.display,animationType:this.state.animationType,heavy:this.state.heavy,onAnimationEnd:this.onAnimationEnd.bind(this)}),e.createElement(m.default,{display:this.state.display}))}}]),i}(e.Component);return i.propTypes={onTerminal:h.default.func.isRequired,rocketState:h.default.number.isRequired,bytes:h.default.bool.isRequired,type:h.default.number.isRequired},i}},function(n,t,e){"use strict";function i(n,t){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.FinRight=t.FinLeft=t.GridFin=t.openRightFin=t.openLeftFin=void 0;var o=i(["\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(90deg); }\n"],["\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(90deg); }\n"]),a=i(["\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(-90deg); }\n"],["\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(-90deg); }\n"]),r=i(["\n  display: block;\n  position: absolute;\n  top: 101px;\n  height: 15px;\n  width: 3px;\n  background-color: #3a3a3b;\n  animation-duration: 0.5s;\n  animation-delay: 0s;\n  animation-fill-mode: forwards;\n  transform: rotate(0deg);\n"],["\n  display: block;\n  position: absolute;\n  top: 101px;\n  height: 15px;\n  width: 3px;\n  background-color: #3a3a3b;\n  animation-duration: 0.5s;\n  animation-delay: 0s;\n  animation-fill-mode: forwards;\n  transform: rotate(0deg);\n"]),p=i(["\n  left: -2px;\n  border-=top-left-radius: 50%;\n  transform-origin: right top;\n  ","\n"],["\n  left: -2px;\n  border-=top-left-radius: 50%;\n  transform-origin: right top;\n  ","\n"]),l=i(["\n  right: -23px;\n  border-top-right-radius: 50%;\n  transform-origin: left top;\n  ","\n  "],["\n  right: -23px;\n  border-top-right-radius: 50%;\n  transform-origin: left top;\n  ","\n  "]),d=e(0),s=function(n){return n&&n.__esModule?n:{default:n}}(d),u=t.openLeftFin=(0,d.keyframes)(o),f=t.openRightFin=(0,d.keyframes)(a),c=t.GridFin=s.default.i(r);t.FinLeft=c.extend(p,function(n){return"None"==n.animationType?";":function(n){return"LAUNCH"==n.animationType?";":"animation-name: "+u+";"}}),t.FinRight=c.extend(l,function(n){return"None"==n.animationType?";":function(n){return"LAUNCH"==n.animationType?";":"animation-name: "+f+";"}})},function(n,t,e){"use strict";function i(n,t){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.LegRight=t.LegMiddle=t.LegLeft=t.Leg=t.LegBaseStyling=t.openRightLeg=t.openMiddleLeg=t.openLeftLeg=void 0;var o=i(["\n  from {\n    transform: rotate(90deg) skewX(35deg); }\n  to {\n    transform: rotate(-40deg) skewX(-35deg); } \n"],["\n  from {\n    transform: rotate(90deg) skewX(35deg); }\n  to {\n    transform: rotate(-40deg) skewX(-35deg); } \n"]),a=i(["\n  from {\n    transform: rotateX(0deg); }\n  to {\n    transform: rotateX(-135deg); } \n"],["\n  from {\n    transform: rotateX(0deg); }\n  to {\n    transform: rotateX(-135deg); } \n"]),r=i(["\n  from {\n    transform: rotate(-90deg) skewX(-35deg); }\n  to {\n    transform: rotate(40deg) skewX(35deg); }\n"],["\n  from {\n    transform: rotate(-90deg) skewX(-35deg); }\n  to {\n    transform: rotate(40deg) skewX(35deg); }\n"]),p=i(["\n  animation-duration: 0.5s;\n  animation-delay: 1s;\n  animation-fill-mode: forwards;\n"],["\n  animation-duration: 0.5s;\n  animation-delay: 1s;\n  animation-fill-mode: forwards;\n"]),l=i(["\n  display: block; \n  position: absolute;\n  height: 4px;\n  width: 45px;\n  bottom: 65px;\n  background-color: #3a3a3b;\n"],["\n  display: block; \n  position: absolute;\n  height: 4px;\n  width: 45px;\n  bottom: 65px;\n  background-color: #3a3a3b;\n"]),d=i(["\n  right: 1px;\n  transform-origin: right center;\n  transform: rotate(90deg) skewX(35deg);\n  ","\n"],["\n  right: 1px;\n  transform-origin: right center;\n  transform: rotate(90deg) skewX(35deg);\n  ","\n"]),s=i(["\n  position: absolute;\n  height: 45px;\n  width: 18px; \n  bottom: 65px;\n  left: 2px;\n  border-radius: 200% 200% 0 0;\n  border-top-left-radius: 50% 90%;\n  border-top-right-radius: 50% 90%;\n  border: 8px solid #3a3a3b;\n  border-bottom: none;\n  transform-origin: left bottom;\n  ","\n\n"],["\n  position: absolute;\n  height: 45px;\n  width: 18px; \n  bottom: 65px;\n  left: 2px;\n  border-radius: 200% 200% 0 0;\n  border-top-left-radius: 50% 90%;\n  border-top-right-radius: 50% 90%;\n  border: 8px solid #3a3a3b;\n  border-bottom: none;\n  transform-origin: left bottom;\n  ","\n\n"]),u=i(["\n  left: 23px;\n  transform-origin: left center;\n  transform: rotate(-90deg) skewX(-35deg);\n  ","\n"],["\n  left: 23px;\n  transform-origin: left center;\n  transform: rotate(-90deg) skewX(-35deg);\n  ","\n"]),f=e(0),c=function(n){return n&&n.__esModule?n:{default:n}}(f),m=t.openLeftLeg=(0,f.keyframes)(o),x=t.openMiddleLeg=(0,f.keyframes)(a),h=t.openRightLeg=(0,f.keyframes)(r),b=t.LegBaseStyling=c.default.i(p),g=t.Leg=b.extend(l);t.LegLeft=g.extend(d,function(n){return"None"==n.animationType?";":function(n){return"LAUNCH"==n.animationType?";":"animation-name: "+m+";"}}),t.LegMiddle=b.extend(s,function(n){return"None"==n.animationType?";":function(n){return"LAUNCH"==n.animationType?";":"animation-name: "+x+";"}}),t.LegRight=g.extend(u,function(n){return"None"==n.animationType?";":function(n){return"LAUNCH"==n.animationType?";":"animation-name: "+h+";"}})},function(n,t,e){"use strict";function i(n,t){return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.Wastes=t.Thrust=t.wasting2=t.wasting=t.engineTurnedOff=t.engineTurnedOn=t.flameWiggleLand=t.flameWiggleLaunch=void 0;var o=i(["\n  0% {\n    height: 70px; }\n  50% {\n    height: 75px; }\n  100% {\n    height: 70px; }\n"],["\n  0% {\n    height: 70px; }\n  50% {\n    height: 75px; }\n  100% {\n    height: 70px; }\n"]),a=i(["\n  0% {\n    height: 30px; }\n  50% {\n    height: 35px; }\n  100% {\n    height: 30px; }\n"],["\n  0% {\n    height: 30px; }\n  50% {\n    height: 35px; }\n  100% {\n    height: 30px; }\n"]),r=i(["\n  from {\n    opacity: 1;\n    display: block;    \n    left: 8px;\n    width: 8px;\n  }\n  to {\n    opacity: 1;\n    display: block; \n    left: 8px;\n    width: 8px;\n  }\n}\n"],["\n  from {\n    opacity: 1;\n    display: block;    \n    left: 8px;\n    width: 8px;\n  }\n  to {\n    opacity: 1;\n    display: block; \n    left: 8px;\n    width: 8px;\n  }\n}\n"]),p=i(["\n  0% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  50% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  90% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  99% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  100% {\n    opacity: 0;\n    position: absolute;\n    left: 11px;\n    width: 0px;\n    //height: 0px;\n  }\n}\n"],["\n  0% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  50% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  90% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  99% {\n    opacity: 1;\n    position: absolute;\n    left: 11px;\n    width: 2px;\n  }\n  100% {\n    opacity: 0;\n    position: absolute;\n    left: 11px;\n    width: 0px;\n    //height: 0px;\n  }\n}\n"]),l=i(["\n  0% {\n    transform: translate3d(0px, 0, 0); }\n  100% {\n    transform: translate3d(-10px, 35px, 0); }\n"],["\n  0% {\n    transform: translate3d(0px, 0, 0); }\n  100% {\n    transform: translate3d(-10px, 35px, 0); }\n"]),d=i(["\n  0% {\n    transform: translate3d(0px, 0, 0); }\n  100% {\n    transform: translate3d(10px, 35px, 0); }\n"],["\n  0% {\n    transform: translate3d(0px, 0, 0); }\n  100% {\n    transform: translate3d(10px, 35px, 0); }\n"]),s=i(["\n  display: block;\n  position: absolute;\n  top: 265px;\n  height: 10px;\n  width: 1px;\n  left: 12px;\n  opacity: 0;\n  margin: 0px auto;\n  background: white; \n  border-top-left-radius: 100px;\n  border-bottom-left-radius: 9000%;\n  border-top-right-radius: 100px;\n  border-bottom-right-radius: 9000%;\n  box-shadow: \n      0 0px 0px 3px white,\n      0 20px 1px 4px white, \n      0 25px 2px 3px #ffd9b3, \n      0 30px 5px 4px #ffd9b3,  //top\n      0 0px 150px 15px #ffd9b3, //global\n      0 10px 2px 4px white,\n      0 5px 3px 3px white;\n  ","\n  animation-iteration-count: infinite, 1;\n  animation-fill-mode: forwards;\n  }\n    .shadows{\n    position: absolute;\n    left: 4px;\n    //top: -5%;\n    width: 0px;\n    height: ",";\n    border-radius: 50%;\n    box-shadow: \n      0 5px 20px 15px white, \n      0 0px 150px 30px #ffd9b3\n  }\n"],["\n  display: block;\n  position: absolute;\n  top: 265px;\n  height: 10px;\n  width: 1px;\n  left: 12px;\n  opacity: 0;\n  margin: 0px auto;\n  background: white; \n  border-top-left-radius: 100px;\n  border-bottom-left-radius: 9000%;\n  border-top-right-radius: 100px;\n  border-bottom-right-radius: 9000%;\n  box-shadow: \n      0 0px 0px 3px white,\n      0 20px 1px 4px white, \n      0 25px 2px 3px #ffd9b3, \n      0 30px 5px 4px #ffd9b3,  //top\n      0 0px 150px 15px #ffd9b3, //global\n      0 10px 2px 4px white,\n      0 5px 3px 3px white;\n  ","\n  animation-iteration-count: infinite, 1;\n  animation-fill-mode: forwards;\n  }\n    .shadows{\n    position: absolute;\n    left: 4px;\n    //top: -5%;\n    width: 0px;\n    height: ",";\n    border-radius: 50%;\n    box-shadow: \n      0 5px 20px 15px white, \n      0 0px 150px 30px #ffd9b3\n  }\n"]),u=i(["\n  position: absolute;\n  top: ",";\n  height: 8px;\n  width: 8px;\n  left: 11px;\n  animation-delay: 0s;\n  i {\n    position: absolute;\n    width: 1px;\n    height: 3px;\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n  i:nth-child(1) {\n    top: 2px;\n    animation: "," 400ms "," 100ms;\n  }\n  i:nth-child(2) {\n    top: 4px;\n    animation: "," 400ms "," 200ms;\n  }\n  i:nth-child(3) {\n    top: 6px;\n    animation: "," 400ms "," 300ms;\n  }\n  i:nth-child(4) {\n    top: 8px;\n    animation: "," 400ms "," 400ms;\n  }\n  i:nth-child(5) {\n    top: 10px;\n    animation: "," 400ms "," 100ms;\n  }\n"],["\n  position: absolute;\n  top: ",";\n  height: 8px;\n  width: 8px;\n  left: 11px;\n  animation-delay: 0s;\n  i {\n    position: absolute;\n    width: 1px;\n    height: 3px;\n    background-color: rgba(255, 255, 255, 0.5);\n  }\n  i:nth-child(1) {\n    top: 2px;\n    animation: "," 400ms "," 100ms;\n  }\n  i:nth-child(2) {\n    top: 4px;\n    animation: "," 400ms "," 200ms;\n  }\n  i:nth-child(3) {\n    top: 6px;\n    animation: "," 400ms "," 300ms;\n  }\n  i:nth-child(4) {\n    top: 8px;\n    animation: "," 400ms "," 400ms;\n  }\n  i:nth-child(5) {\n    top: 10px;\n    animation: "," 400ms "," 100ms;\n  }\n"]),f=e(0),c=function(n){return n&&n.__esModule?n:{default:n}}(f),m=t.flameWiggleLaunch=(0,f.keyframes)(o),x=t.flameWiggleLand=(0,f.keyframes)(a),h=t.engineTurnedOn=(0,f.keyframes)(r),b=t.engineTurnedOff=(0,f.keyframes)(p),g=t.wasting=(0,f.keyframes)(l),y=t.wasting2=(0,f.keyframes)(d);t.Thrust=c.default.i(s,function(n){return"None"==n.animationType?";":function(n){return"LAUNCH"==n.animationType?"animation-name: "+m+", "+h+";animation-duration: 100ms, 2.5s;animation-delay: 0.5s, 0.5s;animation-iteration-count: 13, 1;":"animation-name: "+x+", "+b+";animation-duration: 100ms, 2.5s;animation-delay: 1s, 0.0s;animation-iteration-count: 5, 1;"}},function(n){return"LAUNCH"==n.animationType?"120px":"50px"}),t.Wastes=c.default.i(u,function(n){return"LAUNCH"==n.animationType?"320px":"265px"},g,function(n){return"LAUNCH"==n.animationType?"30":"18"},y,function(n){return"LAUNCH"==n.animationType?"30":"18"},g,function(n){return"LAUNCH"==n.animationType?"30":"18"},y,function(n){return"LAUNCH"==n.animationType?"30":"18"},g,function(n){return"LAUNCH"==n.animationType?"30":"18"})}]));
//# sourceMappingURL=index.js.map