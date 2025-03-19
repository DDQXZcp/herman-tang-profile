/*! For license information please see main.5e2c4602.js.LICENSE.txt */
(()=>{var e={75:function(e,t,n){var r,a,i;a=[t,n(5043),n(5173)],r=function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setHasSupportToCaptureOption=p;var r=i(t),a=i(n);function i(e){return e&&e.__esModule?e:{default:e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function l(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f=!1;function p(e){f=e}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){p(!0)}}))}catch(y){}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{capture:!0};return f?e:e.capture}function m(e){if("touches"in e){var t=e.touches[0];return{x:t.pageX,y:t.pageY}}return{x:e.screenX,y:e.screenY}}var g=function(e){function t(){var e;s(this,t);for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];var i=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r)));return i._handleSwipeStart=i._handleSwipeStart.bind(i),i._handleSwipeMove=i._handleSwipeMove.bind(i),i._handleSwipeEnd=i._handleSwipeEnd.bind(i),i._onMouseDown=i._onMouseDown.bind(i),i._onMouseMove=i._onMouseMove.bind(i),i._onMouseUp=i._onMouseUp.bind(i),i._setSwiperRef=i._setSwiperRef.bind(i),i}return d(t,e),u(t,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,h({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,h({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(e){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(e))}},{key:"_onMouseMove",value:function(e){this.mouseDown&&this._handleSwipeMove(e)}},{key:"_onMouseUp",value:function(e){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(e)}},{key:"_handleSwipeStart",value:function(e){var t=m(e),n=t.x,r=t.y;this.moveStart={x:n,y:r},this.props.onSwipeStart(e)}},{key:"_handleSwipeMove",value:function(e){if(this.moveStart){var t=m(e),n=t.x,r=t.y,a=n-this.moveStart.x,i=r-this.moveStart.y;this.moving=!0,this.props.onSwipeMove({x:a,y:i},e)&&e.cancelable&&e.preventDefault(),this.movePosition={deltaX:a,deltaY:i}}}},{key:"_handleSwipeEnd",value:function(e){this.props.onSwipeEnd(e);var t=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-t?this.props.onSwipeLeft(1,e):this.movePosition.deltaX>t&&this.props.onSwipeRight(1,e),this.movePosition.deltaY<-t?this.props.onSwipeUp(1,e):this.movePosition.deltaY>t&&this.props.onSwipeDown(1,e)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(e){this.swiper=e,this.props.innerRef(e)}},{key:"render",value:function(){var e=this.props,t=(e.tagName,e.className),n=e.style,a=e.children,i=(e.allowMouseEvents,e.onSwipeUp,e.onSwipeDown,e.onSwipeLeft,e.onSwipeRight,e.onSwipeStart,e.onSwipeMove,e.onSwipeEnd,e.innerRef,e.tolerance,l(e,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]));return r.default.createElement(this.props.tagName,o({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:t,style:n},i),a)}}]),t}(t.Component);g.displayName="ReactSwipe",g.propTypes={tagName:a.default.string,className:a.default.string,style:a.default.object,children:a.default.node,allowMouseEvents:a.default.bool,onSwipeUp:a.default.func,onSwipeDown:a.default.func,onSwipeLeft:a.default.func,onSwipeRight:a.default.func,onSwipeStart:a.default.func,onSwipeMove:a.default.func,onSwipeEnd:a.default.func,innerRef:a.default.func,tolerance:a.default.number.isRequired},g.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},e.default=g},void 0===(i="function"===typeof r?r.apply(t,a):r)||(e.exports=i)},178:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e,t,n){var r=0===e?e:e+t;return"translate3d"+("("+("horizontal"===n?[r,0,0]:[0,r,0]).join(",")+")")}},219:(e,t,n)=>{"use strict";var r=n(2086),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function s(e){return r.isMemo(e)?o:l[e.$$typeof]||a}l[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[r.Memo]=o;var u=Object.defineProperty,c=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(h){var a=p(n);a&&a!==h&&e(t,a,r)}var o=c(n);d&&(o=o.concat(d(n)));for(var l=s(t),m=s(n),g=0;g<o.length;++g){var y=o[g];if(!i[y]&&(!r||!r[y])&&(!m||!m[y])&&(!l||!l[y])){var v=f(n,y);try{u(t,y,v)}catch(b){}}}}return t}},381:(e,t,n)=>{var r="Expected a function",a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt,u="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,c="object"==typeof self&&self&&self.Object===Object&&self,d=u||c||Function("return this")(),f=Object.prototype.toString,p=Math.max,h=Math.min,m=function(){return d.Date.now()};function g(e,t,n){var a,i,o,l,s,u,c=0,d=!1,f=!1,g=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=a,r=i;return a=i=void 0,c=t,l=e.apply(r,n)}function w(e){var n=e-u;return void 0===u||n>=t||n<0||f&&e-c>=o}function S(){var e=m();if(w(e))return k(e);s=setTimeout(S,function(e){var n=t-(e-u);return f?h(n,o-(e-c)):n}(e))}function k(e){return s=void 0,g&&a?b(e):(a=i=void 0,l)}function x(){var e=m(),n=w(e);if(a=arguments,i=this,u=e,n){if(void 0===s)return function(e){return c=e,s=setTimeout(S,t),d?b(e):l}(u);if(f)return s=setTimeout(S,t),b(u)}return void 0===s&&(s=setTimeout(S,t)),l}return t=v(t)||0,y(n)&&(d=!!n.leading,o=(f="maxWait"in n)?p(v(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),x.cancel=function(){void 0!==s&&clearTimeout(s),c=0,a=u=i=s=void 0},x.flush=function(){return void 0===s?l:k(m())},x}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=o.test(e);return n||l.test(e)?s(e.slice(2),n?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,n){var a=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(a="leading"in n?!!n.leading:a,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:a,maxWait:t,trailing:i})}},564:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setPosition=t.getPosition=t.isKeyboardEvent=t.defaultStatusFormatter=t.noop=void 0;var r,a=n(5043),i=(r=n(178))&&r.__esModule?r:{default:r};t.noop=function(){};t.defaultStatusFormatter=function(e,t){return"".concat(e," of ").concat(t)};t.isKeyboardEvent=function(e){return!!e&&e.hasOwnProperty("key")};t.getPosition=function(e,t){if(t.infiniteLoop&&++e,0===e)return 0;var n=a.Children.count(t.children);if(t.centerMode&&"horizontal"===t.axis){var r=-e*t.centerSlidePercentage,i=n-1;return e&&(e!==i||t.infiniteLoop)?r+=(100-t.centerSlidePercentage)/2:e===i&&(r+=100-t.centerSlidePercentage),r}return 100*-e};t.setPosition=function(e,t){var n={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach((function(r){n[r]=(0,i.default)(e,"%",t)})),n}},579:(e,t,n)=>{"use strict";e.exports=n(2799)},1163:(e,t,n)=>{"use strict";e.exports=n(6479)},1256:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.outerWidth=void 0;t.outerWidth=function(e){var t=e.offsetWidth,n=getComputedStyle(e);return t+=parseInt(n.marginLeft)+parseInt(n.marginRight)}},1497:(e,t,n)=>{"use strict";var r=n(3218);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,i,o){if(o!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return n.PropTypes=n,n}},1577:(e,t,n)=>{"use strict";Object.defineProperty(t,"FN",{enumerable:!0,get:function(){return r.default}});var r=o(n(3481)),a=n(3096),i=o(n(4169));function o(e){return e&&e.__esModule?e:{default:e}}},2086:(e,t,n)=>{"use strict";e.exports=n(5082)},2799:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(e,t,r){var a=null;if(void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),"key"in t)for(var i in r={},t)"key"!==i&&(r[i]=t[i]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:a,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=a,t.jsxs=a},3096:()=>{},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3341:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function a(e){return e&&e.__esModule?e:{default:e}}var i=n(5043),o=a(i),l=a(n(381)),s=a(n(5173)),u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,n){for(var r=!0;r;){var a=e,i=t,o=n;r=!1,null===a&&(a=Function.prototype);var l=Object.getOwnPropertyDescriptor(a,i);if(void 0!==l){if("value"in l)return l.value;var s=l.get;if(void 0===s)return;return s.call(o)}var u=Object.getPrototypeOf(a);if(null===u)return;e=u,t=i,n=o,r=!0,l=u=void 0}}(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.serverSide="undefined"===typeof window,this.listener=(0,l.default)(this.handleScroll.bind(this),50),this.visibility={onScreen:!1,inViewport:!1},this.state={classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"getElementTop",value:function(e){for(var t=0;e&&void 0!==e.offsetTop&&void 0!==e.clientTop;)t+=e.offsetTop+e.clientTop,e=e.offsetParent;return t}},{key:"getScrollPos",value:function(){return void 0!==this.scrollableParent.pageYOffset?this.scrollableParent.pageYOffset:this.scrollableParent.scrollTop}},{key:"getScrollableParentHeight",value:function(){return void 0!==this.scrollableParent.innerHeight?this.scrollableParent.innerHeight:this.scrollableParent.clientHeight}},{key:"getViewportTop",value:function(){return this.getScrollPos()+this.props.offset}},{key:"getViewportBottom",value:function(){return this.getScrollPos()+this.getScrollableParentHeight()-this.props.offset}},{key:"isInViewport",value:function(e){return e>=this.getViewportTop()&&e<=this.getViewportBottom()}},{key:"isAboveViewport",value:function(e){return e<this.getViewportTop()}},{key:"isBelowViewport",value:function(e){return e>this.getViewportBottom()}},{key:"inViewport",value:function(e,t){return this.isInViewport(e)||this.isInViewport(t)||this.isAboveViewport(e)&&this.isBelowViewport(t)}},{key:"onScreen",value:function(e,t){return!this.isAboveScreen(t)&&!this.isBelowScreen(e)}},{key:"isAboveScreen",value:function(e){return e<this.getScrollPos()}},{key:"isBelowScreen",value:function(e){return e>this.getScrollPos()+this.getScrollableParentHeight()}},{key:"getVisibility",value:function(){var e=this.getElementTop(this.node)-this.getElementTop(this.scrollableParent),t=e+this.node.clientHeight;return{inViewport:this.inViewport(e,t),onScreen:this.onScreen(e,t)}}},{key:"componentDidMount",value:function(){if(!this.serverSide){var e=this.props.scrollableParentSelector;this.scrollableParent=e?document.querySelector(e):window,this.scrollableParent&&this.scrollableParent.addEventListener?this.scrollableParent.addEventListener("scroll",this.listener):console.warn("Cannot find element by locator: "+this.props.scrollableParentSelector),this.props.animatePreScroll&&this.handleScroll()}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.delayedAnimationTimeout),clearTimeout(this.callbackTimeout),this.listener.cancel(),window&&window.removeEventListener&&window.removeEventListener("scroll",this.listener)}},{key:"visibilityHasChanged",value:function(e,t){return e.inViewport!==t.inViewport||e.onScreen!==t.onScreen}},{key:"animate",value:function(e,t){var n=this;this.delayedAnimationTimeout=setTimeout((function(){n.animating=!0,n.setState({classes:"animated "+e,style:{animationDuration:n.props.duration+"s"}}),n.callbackTimeout=setTimeout(t,1e3*n.props.duration)}),this.props.delay)}},{key:"animateIn",value:function(e){var t=this;this.animate(this.props.animateIn,(function(){t.props.animateOnce||(t.setState({style:{animationDuration:t.props.duration+"s",opacity:1}}),t.animating=!1);var n=t.getVisibility();e&&e(n)}))}},{key:"animateOut",value:function(e){var t=this;this.animate(this.props.animateOut,(function(){t.setState({classes:"animated",style:{animationDuration:t.props.duration+"s",opacity:0}});var n=t.getVisibility();n.inViewport&&t.props.animateIn?t.animateIn(t.props.afterAnimatedIn):t.animating=!1,e&&e(n)}))}},{key:"handleScroll",value:function(){if(!this.animating){var e=this.getVisibility();this.visibilityHasChanged(this.visibility,e)&&(clearTimeout(this.delayedAnimationTimeout),e.onScreen?e.inViewport&&this.props.animateIn?this.animateIn(this.props.afterAnimatedIn):e.onScreen&&this.visibility.inViewport&&this.props.animateOut&&1===this.state.style.opacity&&this.animateOut(this.props.afterAnimatedOut):this.setState({classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}),this.visibility=e)}}},{key:"render",value:function(){var e=this,t=this.props.className?this.props.className+" "+this.state.classes:this.state.classes;return o.default.createElement("div",{ref:function(t){e.node=t},className:t,style:Object.assign({},this.state.style,this.props.style)},this.props.children)}}]),t}(i.Component);t.default=u,u.defaultProps={offset:150,duration:1,initiallyVisible:!1,delay:0,animateOnce:!1,animatePreScroll:!0},u.propTypes={animateIn:s.default.string,animateOut:s.default.string,offset:s.default.number,duration:s.default.number,delay:s.default.number,initiallyVisible:s.default.bool,animateOnce:s.default.bool,style:s.default.object,scrollableParentSelector:s.default.string,className:s.default.string,animatePreScroll:s.default.bool},e.exports=t.default},3481:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==p(e)&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(5043)),a=d(n(7251)),i=d(n(8656)),o=d(n(4169)),l=d(n(5559)),s=d(n(9386)),u=n(564),c=n(8226);function d(e){return e&&e.__esModule?e:{default:e}}function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function p(e){return p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S(e);if(t){var a=S(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"===typeof t))return t;return w(e)}(this,n)}}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(p,e);var t,n,d,f=b(p);function p(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),k(w(t=f.call(this,e)),"thumbsRef",void 0),k(w(t),"carouselWrapperRef",void 0),k(w(t),"listRef",void 0),k(w(t),"itemsRef",void 0),k(w(t),"timer",void 0),k(w(t),"animationHandler",void 0),k(w(t),"setThumbsRef",(function(e){t.thumbsRef=e})),k(w(t),"setCarouselWrapperRef",(function(e){t.carouselWrapperRef=e})),k(w(t),"setListRef",(function(e){t.listRef=e})),k(w(t),"setItemsRef",(function(e,n){t.itemsRef||(t.itemsRef=[]),t.itemsRef[n]=e})),k(w(t),"autoPlay",(function(){r.Children.count(t.props.children)<=1||(t.clearAutoPlay(),t.props.autoPlay&&(t.timer=setTimeout((function(){t.increment()}),t.props.interval)))})),k(w(t),"clearAutoPlay",(function(){t.timer&&clearTimeout(t.timer)})),k(w(t),"resetAutoPlay",(function(){t.clearAutoPlay(),t.autoPlay()})),k(w(t),"stopOnHover",(function(){t.setState({isMouseEntered:!0},t.clearAutoPlay)})),k(w(t),"startOnLeave",(function(){t.setState({isMouseEntered:!1},t.autoPlay)})),k(w(t),"isFocusWithinTheCarousel",(function(){return!!t.carouselWrapperRef&&!((0,l.default)().activeElement!==t.carouselWrapperRef&&!t.carouselWrapperRef.contains((0,l.default)().activeElement))})),k(w(t),"navigateWithKeyboard",(function(e){if(t.isFocusWithinTheCarousel()){var n="horizontal"===t.props.axis,r=n?37:38;(n?39:40)===e.keyCode?t.increment():r===e.keyCode&&t.decrement()}})),k(w(t),"updateSizes",(function(){if(t.state.initialized&&t.itemsRef&&0!==t.itemsRef.length){var e="horizontal"===t.props.axis,n=t.itemsRef[0];if(n){var r=e?n.clientWidth:n.clientHeight;t.setState({itemSize:r}),t.thumbsRef&&t.thumbsRef.updateSizes()}}})),k(w(t),"setMountState",(function(){t.setState({hasMount:!0}),t.updateSizes()})),k(w(t),"handleClickItem",(function(e,n){0!==r.Children.count(t.props.children)&&(t.state.cancelClick?t.setState({cancelClick:!1}):(t.props.onClickItem(e,n),e!==t.state.selectedItem&&t.setState({selectedItem:e})))})),k(w(t),"handleOnChange",(function(e,n){r.Children.count(t.props.children)<=1||t.props.onChange(e,n)})),k(w(t),"handleClickThumb",(function(e,n){t.props.onClickThumb(e,n),t.moveTo(e)})),k(w(t),"onSwipeStart",(function(e){t.setState({swiping:!0}),t.props.onSwipeStart(e)})),k(w(t),"onSwipeEnd",(function(e){t.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),t.props.onSwipeEnd(e),t.clearAutoPlay(),t.state.autoPlay&&t.autoPlay()})),k(w(t),"onSwipeMove",(function(e,n){t.props.onSwipeMove(n);var r=t.props.swipeAnimationHandler(e,t.props,t.state,t.setState.bind(w(t)));return t.setState(g({},r)),!!Object.keys(r).length})),k(w(t),"decrement",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;t.moveTo(t.state.selectedItem-("number"===typeof e?e:1))})),k(w(t),"increment",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;t.moveTo(t.state.selectedItem+("number"===typeof e?e:1))})),k(w(t),"moveTo",(function(e){if("number"===typeof e){var n=r.Children.count(t.props.children)-1;e<0&&(e=t.props.infiniteLoop?n:0),e>n&&(e=t.props.infiniteLoop?0:n),t.selectItem({selectedItem:e}),t.state.autoPlay&&!1===t.state.isMouseEntered&&t.resetAutoPlay()}})),k(w(t),"onClickNext",(function(){t.increment(1)})),k(w(t),"onClickPrev",(function(){t.decrement(1)})),k(w(t),"onSwipeForward",(function(){t.increment(1),t.props.emulateTouch&&t.setState({cancelClick:!0})})),k(w(t),"onSwipeBackwards",(function(){t.decrement(1),t.props.emulateTouch&&t.setState({cancelClick:!0})})),k(w(t),"changeItem",(function(e){return function(n){(0,u.isKeyboardEvent)(n)&&"Enter"!==n.key||t.moveTo(e)}})),k(w(t),"selectItem",(function(e){t.setState(g({previousItem:t.state.selectedItem},e),(function(){t.setState(t.animationHandler(t.props,t.state))})),t.handleOnChange(e.selectedItem,r.Children.toArray(t.props.children)[e.selectedItem])})),k(w(t),"getInitialImage",(function(){var e=t.props.selectedItem,n=t.itemsRef&&t.itemsRef[e];return(n&&n.getElementsByTagName("img")||[])[0]})),k(w(t),"getVariableItemHeight",(function(e){var n=t.itemsRef&&t.itemsRef[e];if(t.state.hasMount&&n&&n.children.length){var r=n.children[0].getElementsByTagName("img")||[];if(r.length>0){var a=r[0];if(!a.complete){a.addEventListener("load",(function e(){t.forceUpdate(),a.removeEventListener("load",e)}))}}var i=(r[0]||n.children[0]).clientHeight;return i>0?i:null}return null}));var n={initialized:!1,previousItem:e.selectedItem,selectedItem:e.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:e.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return t.animationHandler="function"===typeof e.animationHandler&&e.animationHandler||"fade"===e.animationHandler&&c.fadeAnimationHandler||c.slideAnimationHandler,t.state=g(g({},n),t.animationHandler(e,n)),t}return t=p,(n=[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(e,t){e.children||!this.props.children||this.state.initialized||this.setupCarousel(),!e.autoFocus&&this.props.autoFocus&&this.forceFocus(),t.swiping&&!this.state.swiping&&this.setState(g({},this.props.stopSwipingHandler(this.props,this.state))),e.selectedItem===this.props.selectedItem&&e.centerMode===this.props.centerMode||(this.updateSizes(),this.moveTo(this.props.selectedItem)),e.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var e=this;this.bindEvents(),this.state.autoPlay&&r.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},(function(){var t=e.getInitialImage();t&&!t.complete?t.addEventListener("load",e.setMountState):e.setMountState()}))}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.addEventListener("mouseenter",this.stopOnHover),e.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.removeEventListener("mouseenter",this.stopOnHover),e.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,s.default)().addEventListener("resize",this.updateSizes),(0,s.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,l.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,s.default)().removeEventListener("resize",this.updateSizes),(0,s.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var e=this.getInitialImage();e&&e.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,l.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var e;null===(e=this.carouselWrapperRef)||void 0===e||e.focus()}},{key:"renderItems",value:function(e){var t=this;return this.props.children?r.Children.map(this.props.children,(function(n,a){var o=a===t.state.selectedItem,l=a===t.state.previousItem,s=o&&t.state.selectedStyle||l&&t.state.prevStyle||t.state.slideStyle||{};t.props.centerMode&&"horizontal"===t.props.axis&&(s=g(g({},s),{},{minWidth:t.props.centerSlidePercentage+"%"})),t.state.swiping&&t.state.swipeMovementStarted&&(s=g(g({},s),{},{pointerEvents:"none"}));var u={ref:function(e){return t.setItemsRef(e,a)},key:"itemKey"+a+(e?"clone":""),className:i.default.ITEM(!0,a===t.state.selectedItem,a===t.state.previousItem),onClick:t.handleClickItem.bind(t,a,n),style:s};return r.default.createElement("li",u,t.props.renderItem(n,{isSelected:a===t.state.selectedItem,isPrevious:a===t.state.previousItem}))})):[]}},{key:"renderControls",value:function(){var e=this,t=this.props,n=t.showIndicators,a=t.labels,i=t.renderIndicator,o=t.children;return n?r.default.createElement("ul",{className:"control-dots"},r.Children.map(o,(function(t,n){return i&&i(e.changeItem(n),n===e.state.selectedItem,n,a.item)}))):null}},{key:"renderStatus",value:function(){return this.props.showStatus?r.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,r.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return this.props.showThumbs&&this.props.children&&0!==r.Children.count(this.props.children)?r.default.createElement(o.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children)):null}},{key:"render",value:function(){var e=this;if(!this.props.children||0===r.Children.count(this.props.children))return null;var t=this.props.swipeable&&r.Children.count(this.props.children)>1,n="horizontal"===this.props.axis,o=this.props.showArrows&&r.Children.count(this.props.children)>1,l=o&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,s=o&&(this.state.selectedItem<r.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,u=this.renderItems(!0),c=u.shift(),d=u.pop(),f={className:i.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},p={};if(n){if(f.onSwipeLeft=this.onSwipeForward,f.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var m=this.getVariableItemHeight(this.state.selectedItem);p.height=m||"auto"}}else f.onSwipeUp="natural"===this.props.verticalSwipe?this.onSwipeBackwards:this.onSwipeForward,f.onSwipeDown="natural"===this.props.verticalSwipe?this.onSwipeForward:this.onSwipeBackwards,f.style=g(g({},f.style),{},{height:this.state.itemSize}),p.height=this.state.itemSize;return r.default.createElement("div",{"aria-label":this.props.ariaLabel,className:i.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},r.default.createElement("div",{className:i.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,l,this.props.labels.leftArrow),r.default.createElement("div",{className:i.default.WRAPPER(!0,this.props.axis),style:p},t?r.default.createElement(a.default,h({tagName:"ul",innerRef:this.setListRef},f,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&d,this.renderItems(),this.props.infiniteLoop&&c):r.default.createElement("ul",{className:i.default.SLIDER(!0,this.state.swiping),ref:function(t){return e.setListRef(t)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&d,this.renderItems(),this.props.infiniteLoop&&c)),this.props.renderArrowNext(this.onClickNext,s,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}])&&y(t.prototype,n),d&&y(t,d),p}(r.default.Component);t.default=x,k(x,"displayName","Carousel"),k(x,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:u.noop,onClickThumb:u.noop,onChange:u.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(e,t,n){return r.default.createElement("button",{type:"button","aria-label":n,className:i.default.ARROW_PREV(!t),onClick:e})},renderArrowNext:function(e,t,n){return r.default.createElement("button",{type:"button","aria-label":n,className:i.default.ARROW_NEXT(!t),onClick:e})},renderIndicator:function(e,t,n,a){return r.default.createElement("li",{className:i.default.DOT(t),onClick:e,onKeyDown:e,value:n,key:n,role:"button",tabIndex:0,"aria-label":"".concat(a," ").concat(n+1)})},renderItem:function(e){return e},renderThumbs:function(e){var t=r.Children.map(e,(function(e){var t=e;if("img"!==e.type&&(t=r.Children.toArray(e.props.children).find((function(e){return"img"===e.type}))),t)return t}));return 0===t.filter((function(e){return e})).length?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):t},statusFormatter:u.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:c.slideSwipeAnimationHandler,stopSwipingHandler:c.slideStopSwipingHandler})},4169:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==d(e)&&"function"!==typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(5043)),a=u(n(8656)),i=n(1256),o=u(n(178)),l=u(n(7251)),s=u(n(9386));function u(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function d(e){return d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var a=y(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"===typeof t))return t;return g(e)}(this,n)}}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(d,e);var t,n,u,c=m(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),v(g(t=c.call(this,e)),"itemsWrapperRef",void 0),v(g(t),"itemsListRef",void 0),v(g(t),"thumbsRef",void 0),v(g(t),"setItemsWrapperRef",(function(e){t.itemsWrapperRef=e})),v(g(t),"setItemsListRef",(function(e){t.itemsListRef=e})),v(g(t),"setThumbsRef",(function(e,n){t.thumbsRef||(t.thumbsRef=[]),t.thumbsRef[n]=e})),v(g(t),"updateSizes",(function(){if(t.props.children&&t.itemsWrapperRef&&t.thumbsRef){var e=r.Children.count(t.props.children),n=t.itemsWrapperRef.clientWidth,a=t.props.thumbWidth?t.props.thumbWidth:(0,i.outerWidth)(t.thumbsRef[0]),o=Math.floor(n/a),l=o<e,s=l?e-o:0;t.setState((function(e,n){return{itemSize:a,visibleItems:o,firstItem:l?t.getFirstItem(n.selectedItem):0,lastPosition:s,showArrows:l}}))}})),v(g(t),"handleClickItem",(function(e,n,r){if(!function(e){return e.hasOwnProperty("key")}(r)||"Enter"===r.key){var a=t.props.onSelectItem;"function"===typeof a&&a(e,n)}})),v(g(t),"onSwipeStart",(function(){t.setState({swiping:!0})})),v(g(t),"onSwipeEnd",(function(){t.setState({swiping:!1})})),v(g(t),"onSwipeMove",(function(e){var n=e.x;if(!t.state.itemSize||!t.itemsWrapperRef||!t.state.visibleItems)return!1;var a=r.Children.count(t.props.children),i=-100*t.state.firstItem/t.state.visibleItems;0===i&&n>0&&(n=0),i===100*-Math.max(a-t.state.visibleItems,0)/t.state.visibleItems&&n<0&&(n=0);var l=i+100/(t.itemsWrapperRef.clientWidth/n);return t.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach((function(e){t.itemsListRef.style[e]=(0,o.default)(l,"%",t.props.axis)})),!0})),v(g(t),"slideRight",(function(e){t.moveTo(t.state.firstItem-("number"===typeof e?e:1))})),v(g(t),"slideLeft",(function(e){t.moveTo(t.state.firstItem+("number"===typeof e?e:1))})),v(g(t),"moveTo",(function(e){e=(e=e<0?0:e)>=t.state.lastPosition?t.state.lastPosition:e,t.setState({firstItem:e})})),t.state={selectedItem:e.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},t}return t=d,(n=[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(e){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==e.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,s.default)().addEventListener("resize",this.updateSizes),(0,s.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,s.default)().removeEventListener("resize",this.updateSizes),(0,s.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(e){var t=e;return e>=this.state.lastPosition&&(t=this.state.lastPosition),e<this.state.firstItem+this.state.visibleItems&&(t=this.state.firstItem),e<this.state.firstItem&&(t=e),t}},{key:"renderItems",value:function(){var e=this;return this.props.children.map((function(t,n){var i=a.default.ITEM(!1,n===e.state.selectedItem),o={key:n,ref:function(t){return e.setThumbsRef(t,n)},className:i,onClick:e.handleClickItem.bind(e,n,e.props.children[n]),onKeyDown:e.handleClickItem.bind(e,n,e.props.children[n]),"aria-label":"".concat(e.props.labels.item," ").concat(n+1),style:{width:e.props.thumbWidth}};return r.default.createElement("li",f({},o,{role:"button",tabIndex:0}),t)}))}},{key:"render",value:function(){var e=this;if(!this.props.children)return null;var t,n=r.Children.count(this.props.children)>1,i=this.state.showArrows&&this.state.firstItem>0,s=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,u=-this.state.firstItem*(this.state.itemSize||0),c=(0,o.default)(u,"px",this.props.axis),d=this.props.transitionTime+"ms";return t={WebkitTransform:c,MozTransform:c,MsTransform:c,OTransform:c,transform:c,msTransform:c,WebkitTransitionDuration:d,MozTransitionDuration:d,MsTransitionDuration:d,OTransitionDuration:d,transitionDuration:d,msTransitionDuration:d},r.default.createElement("div",{className:a.default.CAROUSEL(!1)},r.default.createElement("div",{className:a.default.WRAPPER(!1),ref:this.setItemsWrapperRef},r.default.createElement("button",{type:"button",className:a.default.ARROW_PREV(!i),onClick:function(){return e.slideRight()},"aria-label":this.props.labels.leftArrow}),n?r.default.createElement(l.default,{tagName:"ul",className:a.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:t,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):r.default.createElement("ul",{className:a.default.SLIDER(!1,this.state.swiping),ref:function(t){return e.setItemsListRef(t)},style:t},this.renderItems()),r.default.createElement("button",{type:"button",className:a.default.ARROW_NEXT(!s),onClick:function(){return e.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}])&&p(t.prototype,n),u&&p(t,u),d}(r.Component);t.default=b,v(b,"displayName","Thumbs"),v(b,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350})},4288:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function v(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var w=b.prototype=new v;w.constructor=b,m(w,y.prototype),w.isPureReactComponent=!0;var S=Array.isArray,k={H:null,A:null,T:null,S:null},x=Object.prototype.hasOwnProperty;function C(e,t,r,a,i,o){return r=o.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:o}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function _(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(){}function j(e,t,a,i,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s,u,c=!1;if(null===e)c=!0;else switch(l){case"bigint":case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0;break;case f:return j((c=e._init)(e._payload),t,a,i,o)}}if(c)return o=o(e),c=""===i?"."+_(e,0):i,S(o)?(a="",null!=c&&(a=c.replace(P,"$&/")+"/"),j(o,t,a,"",(function(e){return e}))):null!=o&&(E(o)&&(s=o,u=a+(null==o.key||e&&e.key===o.key?"":(""+o.key).replace(P,"$&/")+"/")+c,o=C(s.type,u,void 0,0,0,s.props)),t.push(o)),1;c=0;var d,h=""===i?".":i+":";if(S(e))for(var m=0;m<e.length;m++)c+=j(i=e[m],t,a,l=h+_(i,m),o);else if("function"===typeof(m=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=p&&d[p]||d["@@iterator"])?d:null))for(e=m.call(e),m=0;!(i=e.next()).done;)c+=j(i=i.value,t,a,l=h+_(i,m++),o);else if("object"===l){if("function"===typeof e.then)return j(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(O,O):(e.status="pending",e.then((function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)}),(function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)}))),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,a,i,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return c}function T(e,t,n){if(null==e)return e;var r=[],a=0;return j(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function N(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function R(){}t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=a,t.Profiler=o,t.PureComponent=b,t.StrictMode=i,t.Suspense=c,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,t.act=function(){throw Error("act(...) is not supported in production builds of React.")},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=m({},e.props),a=e.key;if(null!=t)for(i in void 0!==t.ref&&void 0,void 0!==t.key&&(a=""+t.key),t)!x.call(t,i)||"key"===i||"__self"===i||"__source"===i||"ref"===i&&void 0===t.ref||(r[i]=t[i]);var i=arguments.length-2;if(1===i)r.children=n;else if(1<i){for(var o=Array(i),l=0;l<i;l++)o[l]=arguments[l+2];r.children=o}return C(e.type,a,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},t.createElement=function(e,t,n){var r,a={},i=null;if(null!=t)for(r in void 0!==t.key&&(i=""+t.key),t)x.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(a[r]=t[r]);var o=arguments.length-2;if(1===o)a.children=n;else if(1<o){for(var l=Array(o),s=0;s<o;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===a[r]&&(a[r]=o[r]);return C(e,i,void 0,0,0,a)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=k.T,n={};k.T=n;try{var r=e(),a=k.S;null!==a&&a(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(R,A)}catch(i){A(i)}finally{k.T=t}},t.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},t.use=function(e){return k.H.use(e)},t.useActionState=function(e,t,n){return k.H.useActionState(e,t,n)},t.useCallback=function(e,t){return k.H.useCallback(e,t)},t.useContext=function(e){return k.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return k.H.useDeferredValue(e,t)},t.useEffect=function(e,t){return k.H.useEffect(e,t)},t.useId=function(){return k.H.useId()},t.useImperativeHandle=function(e,t,n){return k.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return k.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return k.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return k.H.useMemo(e,t)},t.useOptimistic=function(e,t){return k.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return k.H.useReducer(e,t,n)},t.useRef=function(e){return k.H.useRef(e)},t.useState=function(e){return k.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return k.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return k.H.useTransition()},t.version="19.0.0"},4391:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(7004)},5043:(e,t,n)=>{"use strict";e.exports=n(4288)},5082:(e,t)=>{"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,o=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function S(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case c:case d:case i:case l:case o:case p:return e;default:switch(e=e&&e.$$typeof){case u:case f:case g:case m:case s:return e;default:return t}}case a:return t}}}function k(e){return S(e)===d}t.AsyncMode=c,t.ConcurrentMode=d,t.ContextConsumer=u,t.ContextProvider=s,t.Element=r,t.ForwardRef=f,t.Fragment=i,t.Lazy=g,t.Memo=m,t.Portal=a,t.Profiler=l,t.StrictMode=o,t.Suspense=p,t.isAsyncMode=function(e){return k(e)||S(e)===c},t.isConcurrentMode=k,t.isContextConsumer=function(e){return S(e)===u},t.isContextProvider=function(e){return S(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return S(e)===f},t.isFragment=function(e){return S(e)===i},t.isLazy=function(e){return S(e)===g},t.isMemo=function(e){return S(e)===m},t.isPortal=function(e){return S(e)===a},t.isProfiler=function(e){return S(e)===l},t.isStrictMode=function(e){return S(e)===o},t.isSuspense=function(e){return S(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===d||e===l||e===o||e===p||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===s||e.$$typeof===u||e.$$typeof===f||e.$$typeof===v||e.$$typeof===b||e.$$typeof===w||e.$$typeof===y)},t.typeOf=S},5173:(e,t,n)=>{e.exports=n(1497)()},5559:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){return document}},5896:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<i(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,o=a>>>1;r<o;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>i(s,n))u<a&&0>i(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<a&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,y="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function S(e){if(g=!1,w(e),!m)if(null!==r(u))m=!0,N();else{var t=r(c);null!==t&&A(S,t.startTime-e)}}var k,x=!1,C=-1,E=5,P=-1;function _(){return!(t.unstable_now()-P<E)}function O(){if(x){var e=t.unstable_now();P=e;var n=!0;try{e:{m=!1,g&&(g=!1,v(C),C=-1),h=!0;var i=p;try{t:{for(w(e),f=r(u);null!==f&&!(f.expirationTime>e&&_());){var o=f.callback;if("function"===typeof o){f.callback=null,p=f.priorityLevel;var l=o(f.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof l){f.callback=l,w(e),n=!0;break t}f===r(u)&&a(u),w(e)}else a(u);f=r(u)}if(null!==f)n=!0;else{var s=r(c);null!==s&&A(S,s.startTime-e),n=!1}}break e}finally{f=null,p=i,h=!1}n=void 0}}finally{n?k():x=!1}}}if("function"===typeof b)k=function(){b(O)};else if("undefined"!==typeof MessageChannel){var j=new MessageChannel,T=j.port2;j.port1.onmessage=O,k=function(){T.postMessage(null)}}else k=function(){y(O,0)};function N(){x||(x=!0,k())}function A(e,n){C=y((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,N())},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,i){var o=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?o+i:o:i=o,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>o?(e.sortIndex=i,n(c,e),null===r(u)&&e===r(c)&&(g?(v(C),C=-1):g=!0,A(S,i-o))):(e.sortIndex=l,n(u,e),m||h||(m=!0,N())),e},t.unstable_shouldYield=_,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},6479:(e,t)=>{"use strict";var n,r=Symbol.for("react.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function y(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case i:case l:case o:case f:case p:return e;default:switch(e=e&&e.$$typeof){case c:case u:case d:case m:case h:case s:return e;default:return t}}case a:return t}}}n=Symbol.for("react.module.reference"),t.isFragment=function(e){return y(e)===i}},6672:(e,t,n)=>{"use strict";var r=n(5043);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(a(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");var s=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(a(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=s.T,n=o.p;try{if(s.T=null,o.p=2,e)return e()}finally{s.T=t,o.p=n,o.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,o.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&o.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=u(n,t.crossOrigin),a="string"===typeof t.integrity?t.integrity:void 0,i="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?o.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:i}):"script"===n&&o.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:i,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=u(t.as,t.crossOrigin);o.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&o.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=u(n,t.crossOrigin);o.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=u(t.as,t.crossOrigin);o.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else o.d.m(e)},t.requestFormReset=function(e){o.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},t.useFormStatus=function(){return s.H.useHostTransitionStatus()},t.version="19.0.0"},7004:(e,t,n)=>{"use strict";var r=n(8853),a=n(5043),i=n(7950);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}var s=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),m=Symbol.for("react.consumer"),g=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),b=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),S=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var k=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var x=Symbol.for("react.memo_cache_sentinel"),C=Symbol.iterator;function E(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=C&&e[C]||e["@@iterator"])?e:null}var P=Symbol.for("react.client.reference");function _(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===P?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case d:return"Fragment";case c:return"Portal";case p:return"Profiler";case f:return"StrictMode";case v:return"Suspense";case b:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case g:return(e.displayName||"Context")+".Provider";case m:return(e._context.displayName||"Context")+".Consumer";case y:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case w:return null!==(t=e.displayName||null)?t:_(e.type)||"Memo";case S:t=e._payload,e=e._init;try{return _(e(t))}catch(n){}}return null}var O,j,T=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=Object.assign;function A(e){if(void 0===O)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);O=t&&t[1]||"",j=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+O+e+j}var R=!1;function z(e,t){if(!e||R)return"";R=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(i){r=i}e.call(n.prototype)}}else{try{throw Error()}catch(o){r=o}(n=e())&&"function"===typeof n.catch&&n.catch((function(){}))}}catch(l){if(l&&r&&"string"===typeof l.stack)return[l.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=r.DetermineComponentFrameRoot(),o=i[0],l=i[1];if(o&&l){var s=o.split("\n"),u=l.split("\n");for(a=r=0;r<s.length&&!s[r].includes("DetermineComponentFrameRoot");)r++;for(;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;if(r===s.length||a===u.length)for(r=s.length-1,a=u.length-1;1<=r&&0<=a&&s[r]!==u[a];)a--;for(;1<=r&&0<=a;r--,a--)if(s[r]!==u[a]){if(1!==r||1!==a)do{if(r--,0>--a||s[r]!==u[a]){var c="\n"+s[r].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}}while(1<=r&&0<=a);break}}}finally{R=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?A(n):""}function L(e){switch(e.tag){case 26:case 27:case 5:return A(e.type);case 16:return A("Lazy");case 13:return A("Suspense");case 19:return A("SuspenseList");case 0:case 15:return e=z(e.type,!1);case 11:return e=z(e.type.render,!1);case 1:return e=z(e.type,!0);default:return""}}function I(e){try{var t="";do{t+=L(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function M(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function D(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function F(e){if(M(e)!==e)throw Error(o(188))}function H(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=H(e)))return t;e=e.sibling}return null}var W=Array.isArray,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},$=[],B=-1;function K(e){return{current:e}}function q(e){0>B||(e.current=$[B],$[B]=null,B--)}function X(e,t){B++,$[B]=e.current,e.current=t}var Y=K(null),Q=K(null),G=K(null),J=K(null);function Z(e,t){switch(X(G,t),X(Q,e),X(Y,null),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?Qc(t):0;break;default:if(t=(e=8===e?t.parentNode:t).tagName,e=e.namespaceURI)t=Gc(e=Qc(e),t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}q(Y),X(Y,t)}function ee(){q(Y),q(Q),q(G)}function te(e){null!==e.memoizedState&&X(J,e);var t=Y.current,n=Gc(t,e.type);t!==n&&(X(Q,e),X(Y,n))}function ne(e){Q.current===e&&(q(Y),q(Q)),J.current===e&&(q(J),Id._currentValue=U)}var re=Object.prototype.hasOwnProperty,ae=r.unstable_scheduleCallback,ie=r.unstable_cancelCallback,oe=r.unstable_shouldYield,le=r.unstable_requestPaint,se=r.unstable_now,ue=r.unstable_getCurrentPriorityLevel,ce=r.unstable_ImmediatePriority,de=r.unstable_UserBlockingPriority,fe=r.unstable_NormalPriority,pe=r.unstable_LowPriority,he=r.unstable_IdlePriority,me=r.log,ge=r.unstable_setDisableYieldValue,ye=null,ve=null;function be(e){if("function"===typeof me&&ge(e),ve&&"function"===typeof ve.setStrictMode)try{ve.setStrictMode(ye,e)}catch(t){}}var we=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(Se(e)/ke|0)|0},Se=Math.log,ke=Math.LN2;var xe=128,Ce=4194304;function Ee(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194176&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Pe(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=e.warmLanes;e=0!==e.finishedLanes;var l=134217727&n;return 0!==l?0!==(n=l&~a)?r=Ee(n):0!==(i&=l)?r=Ee(i):e||0!==(o=l&~o)&&(r=Ee(o)):0!==(l=n&~a)?r=Ee(l):0!==i?r=Ee(i):e||0!==(o=n&~o)&&(r=Ee(o)),0===r?0:0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(o=t&-t)||32===a&&0!==(4194176&o))?t:r}function _e(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function Oe(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function je(){var e=xe;return 0===(4194176&(xe<<=1))&&(xe=128),e}function Te(){var e=Ce;return 0===(62914560&(Ce<<=1))&&(Ce=4194304),e}function Ne(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ae(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Re(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-we(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194218&n}function ze(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-we(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}function Le(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Ie(){var e=V.p;return 0!==e?e:void 0===(e=window.event)?32:Gd(e.type)}var Me=Math.random().toString(36).slice(2),De="__reactFiber$"+Me,Fe="__reactProps$"+Me,He="__reactContainer$"+Me,We="__reactEvents$"+Me,Ve="__reactListeners$"+Me,Ue="__reactHandles$"+Me,$e="__reactResources$"+Me,Be="__reactMarker$"+Me;function Ke(e){delete e[De],delete e[Fe],delete e[We],delete e[Ve],delete e[Ue]}function qe(e){var t=e[De];if(t)return t;for(var n=e.parentNode;n;){if(t=n[He]||n[De]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=sd(e);null!==e;){if(n=e[De])return n;e=sd(e)}return t}n=(e=n).parentNode}return null}function Xe(e){if(e=e[De]||e[He]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function Ye(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(o(33))}function Qe(e){var t=e[$e];return t||(t=e[$e]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ge(e){e[Be]=!0}var Je=new Set,Ze={};function et(e,t){tt(e,t),tt(e+"Capture",t)}function tt(e,t){for(Ze[e]=t,e=0;e<t.length;e++)Je.add(t[e])}var nt=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),rt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},it={};function ot(e,t,n){if(a=t,re.call(it,a)||!re.call(at,a)&&(rt.test(a)?it[a]=!0:(at[a]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var a}function lt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function st(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ct(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ct(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ct(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function pt(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var ht=/[\n"\\]/g;function mt(e){return e.replace(ht,(function(e){return"\\"+e.charCodeAt(0).toString(16)+" "}))}function gt(e,t,n,r,a,i,o,l){e.name="",null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o?e.type=o:e.removeAttribute("type"),null!=t?"number"===o?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ut(t)):e.value!==""+ut(t)&&(e.value=""+ut(t)):"submit"!==o&&"reset"!==o||e.removeAttribute("value"),null!=t?vt(e,o,ut(t)):null!=n?vt(e,o,ut(n)):null!=r&&e.removeAttribute("value"),null==a&&null!=i&&(e.defaultChecked=!!i),null!=a&&(e.checked=a&&"function"!==typeof a&&"symbol"!==typeof a),null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.name=""+ut(l):e.removeAttribute("name")}function yt(e,t,n,r,a,i,o,l){if(null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.type=i),null!=t||null!=n){if(!("submit"!==i&&"reset"!==i||void 0!==t&&null!==t))return;n=null!=n?""+ut(n):"",t=null!=t?""+ut(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:a)&&"symbol"!==typeof r&&!!r,e.checked=l?e.checked:!!r,e.defaultChecked=!!r,null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.name=o)}function vt(e,t,n){"number"===t&&pt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function bt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ut(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function wt(e,t,n){null==t||((t=""+ut(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ut(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function St(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(o(92));if(W(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ut(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function kt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var xt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ct(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||xt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Et(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(o(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Ct(e,a,r)}else for(var i in t)t.hasOwnProperty(i)&&Ct(e,i,t[i])}function Pt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _t=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ot=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jt(e){return Ot.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Tt=null;function Nt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var At=null,Rt=null;function zt(e){var t=Xe(e);if(t&&(e=t.stateNode)){var n=e[Fe]||null;e:switch(e=t.stateNode,t.type){case"input":if(gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Fe]||null;if(!a)throw Error(o(90));gt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&ft(r)}break e;case"textarea":wt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&bt(e,!!n.multiple,t,!1)}}}var Lt=!1;function It(e,t,n){if(Lt)return e(t,n);Lt=!0;try{return e(t)}finally{if(Lt=!1,(null!==At||null!==Rt)&&(Du(),At&&(t=At,e=Rt,Rt=At=null,zt(t),e)))for(t=0;t<e.length;t++)zt(e[t])}}function Mt(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Fe]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Dt=!1;if(nt)try{var Ft={};Object.defineProperty(Ft,"passive",{get:function(){Dt=!0}}),window.addEventListener("test",Ft,Ft),window.removeEventListener("test",Ft,Ft)}catch(kf){Dt=!1}var Ht=null,Wt=null,Vt=null;function Ut(){if(Vt)return Vt;var e,t,n=Wt,r=n.length,a="value"in Ht?Ht.value:Ht.textContent,i=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[i-t];t++);return Vt=a.slice(e,1<t?1-t:void 0)}function $t(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Bt(){return!0}function Kt(){return!1}function qt(e){function t(t,n,r,a,i){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?Bt:Kt,this.isPropagationStopped=Kt,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Bt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Bt)},persist:function(){},isPersistent:Bt}),t}var Xt,Yt,Qt,Gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jt=qt(Gt),Zt=N({},Gt,{view:0,detail:0}),en=qt(Zt),tn=N({},Zt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qt&&(Qt&&"mousemove"===e.type?(Xt=e.screenX-Qt.screenX,Yt=e.screenY-Qt.screenY):Yt=Xt=0,Qt=e),Xt)},movementY:function(e){return"movementY"in e?e.movementY:Yt}}),nn=qt(tn),rn=qt(N({},tn,{dataTransfer:0})),an=qt(N({},Zt,{relatedTarget:0})),on=qt(N({},Gt,{animationName:0,elapsedTime:0,pseudoElement:0})),ln=qt(N({},Gt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),sn=qt(N({},Gt,{data:0})),un={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=dn[e])&&!!t[e]}function pn(){return fn}var hn=qt(N({},Zt,{key:function(e){if(e.key){var t=un[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=$t(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?cn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pn,charCode:function(e){return"keypress"===e.type?$t(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?$t(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),mn=qt(N({},tn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),gn=qt(N({},Zt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pn})),yn=qt(N({},Gt,{propertyName:0,elapsedTime:0,pseudoElement:0})),vn=qt(N({},tn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),bn=qt(N({},Gt,{newState:0,oldState:0})),wn=[9,13,27,32],Sn=nt&&"CompositionEvent"in window,kn=null;nt&&"documentMode"in document&&(kn=document.documentMode);var xn=nt&&"TextEvent"in window&&!kn,Cn=nt&&(!Sn||kn&&8<kn&&11>=kn),En=String.fromCharCode(32),Pn=!1;function _n(e,t){switch(e){case"keyup":return-1!==wn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function On(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var jn=!1;var Tn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Tn[e.type]:"textarea"===t}function An(e,t,n,r){At?Rt?Rt.push(r):Rt=[r]:At=r,0<(t=Ic(t,"onChange")).length&&(n=new Jt("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rn=null,zn=null;function Ln(e){Oc(e,0)}function In(e){if(ft(Ye(e)))return e}function Mn(e,t){if("change"===e)return t}var Dn=!1;if(nt){var Fn;if(nt){var Hn="oninput"in document;if(!Hn){var Wn=document.createElement("div");Wn.setAttribute("oninput","return;"),Hn="function"===typeof Wn.oninput}Fn=Hn}else Fn=!1;Dn=Fn&&(!document.documentMode||9<document.documentMode)}function Vn(){Rn&&(Rn.detachEvent("onpropertychange",Un),zn=Rn=null)}function Un(e){if("value"===e.propertyName&&In(zn)){var t=[];An(t,zn,e,Nt(e)),It(Ln,t)}}function $n(e,t,n){"focusin"===e?(Vn(),zn=n,(Rn=t).attachEvent("onpropertychange",Un)):"focusout"===e&&Vn()}function Bn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return In(zn)}function Kn(e,t){if("click"===e)return In(t)}function qn(e,t){if("input"===e||"change"===e)return In(t)}var Xn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Yn(e,t){if(Xn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!re.call(t,a)||!Xn(e[a],t[a]))return!1}return!0}function Qn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gn(e,t){var n,r=Qn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Qn(r)}}function Jn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Jn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Zn(e){for(var t=pt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=pt((e=t.contentWindow).document)}return t}function er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function tr(e,t){var n=Zn(t);t=e.focusedElem;var r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Jn(t.ownerDocument.documentElement,t)){if(null!==r&&er(t))if(e=r.start,void 0===(n=r.end)&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if((n=(e=t.ownerDocument||document)&&e.defaultView||window).getSelection){n=n.getSelection();var a=t.textContent.length,i=Math.min(r.start,a);r=void 0===r.end?i:Math.min(r.end,a),!n.extend&&i>r&&(a=r,r=i,i=a),a=Gn(t,i);var o=Gn(t,r);a&&o&&(1!==n.rangeCount||n.anchorNode!==a.node||n.anchorOffset!==a.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&((e=e.createRange()).setStart(a.node,a.offset),n.removeAllRanges(),i>r?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}for(e=[],n=t;n=n.parentNode;)1===n.nodeType&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for("function"===typeof t.focus&&t.focus(),t=0;t<e.length;t++)(n=e[t]).element.scrollLeft=n.left,n.element.scrollTop=n.top}}var nr=nt&&"documentMode"in document&&11>=document.documentMode,rr=null,ar=null,ir=null,or=!1;function lr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;or||null==rr||rr!==pt(r)||("selectionStart"in(r=rr)&&er(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ir&&Yn(ir,r)||(ir=r,0<(r=Ic(ar,"onSelect")).length&&(t=new Jt("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ur={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},cr={},dr={};function fr(e){if(cr[e])return cr[e];if(!ur[e])return e;var t,n=ur[e];for(t in n)if(n.hasOwnProperty(t)&&t in dr)return cr[e]=n[t];return e}nt&&(dr=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);var pr=fr("animationend"),hr=fr("animationiteration"),mr=fr("animationstart"),gr=fr("transitionrun"),yr=fr("transitionstart"),vr=fr("transitioncancel"),br=fr("transitionend"),wr=new Map,Sr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function kr(e,t){wr.set(e,t),et(t,[e])}var xr=[],Cr=0,Er=0;function Pr(){for(var e=Cr,t=Er=Cr=0;t<e;){var n=xr[t];xr[t++]=null;var r=xr[t];xr[t++]=null;var a=xr[t];xr[t++]=null;var i=xr[t];if(xr[t++]=null,null!==r&&null!==a){var o=r.pending;null===o?a.next=a:(a.next=o.next,o.next=a),r.pending=a}0!==i&&Tr(n,a,i)}}function _r(e,t,n,r){xr[Cr++]=e,xr[Cr++]=t,xr[Cr++]=n,xr[Cr++]=r,Er|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Or(e,t,n,r){return _r(e,t,n,r),Nr(e)}function jr(e,t){return _r(e,null,null,t),Nr(e)}function Tr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var a=!1,i=e.return;null!==i;)i.childLanes|=n,null!==(r=i.alternate)&&(r.childLanes|=n),22===i.tag&&(null===(e=i.stateNode)||1&e._visibility||(a=!0)),e=i,i=i.return;a&&null!==t&&3===e.tag&&(i=e.stateNode,a=31-we(n),null===(e=(i=i.hiddenUpdates)[a])?i[a]=[t]:e.push(t),t.lane=536870912|n)}function Nr(e){if(50<Ou)throw Ou=0,ju=null,Error(o(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Ar={},Rr=new WeakMap;function zr(e,t){if("object"===typeof e&&null!==e){var n=Rr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:I(t)},Rr.set(e,t),t)}return{value:e,source:t,stack:I(t)}}var Lr=[],Ir=0,Mr=null,Dr=0,Fr=[],Hr=0,Wr=null,Vr=1,Ur="";function $r(e,t){Lr[Ir++]=Dr,Lr[Ir++]=Mr,Mr=e,Dr=t}function Br(e,t,n){Fr[Hr++]=Vr,Fr[Hr++]=Ur,Fr[Hr++]=Wr,Wr=e;var r=Vr;e=Ur;var a=32-we(r)-1;r&=~(1<<a),n+=1;var i=32-we(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Vr=1<<32-we(t)+a|n<<a|r,Ur=i+e}else Vr=1<<i|n<<a|r,Ur=e}function Kr(e){null!==e.return&&($r(e,1),Br(e,1,0))}function qr(e){for(;e===Mr;)Mr=Lr[--Ir],Lr[Ir]=null,Dr=Lr[--Ir],Lr[Ir]=null;for(;e===Wr;)Wr=Fr[--Hr],Fr[Hr]=null,Ur=Fr[--Hr],Fr[Hr]=null,Vr=Fr[--Hr],Fr[Hr]=null}var Xr=null,Yr=null,Qr=!1,Gr=null,Jr=!1,Zr=Error(o(519));function ea(e){throw ia(zr(Error(o(418,"")),e)),Zr}function ta(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[De]=e,t[Fe]=r,n){case"dialog":jc("cancel",t),jc("close",t);break;case"iframe":case"object":case"embed":jc("load",t);break;case"video":case"audio":for(n=0;n<Pc.length;n++)jc(Pc[n],t);break;case"source":jc("error",t);break;case"img":case"image":case"link":jc("error",t),jc("load",t);break;case"details":jc("toggle",t);break;case"input":jc("invalid",t),yt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),dt(t);break;case"select":jc("invalid",t);break;case"textarea":jc("invalid",t),St(t,r.value,r.defaultValue,r.children),dt(t)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Vc(t.textContent,n)?(null!=r.popover&&(jc("beforetoggle",t),jc("toggle",t)),null!=r.onScroll&&jc("scroll",t),null!=r.onScrollEnd&&jc("scrollend",t),null!=r.onClick&&(t.onclick=Uc),t=!0):t=!1,t||ea(e)}function na(e){for(Xr=e.return;Xr;)switch(Xr.tag){case 3:case 27:return void(Jr=!0);case 5:case 13:return void(Jr=!1);default:Xr=Xr.return}}function ra(e){if(e!==Xr)return!1;if(!Qr)return na(e),Qr=!0,!1;var t,n=!1;if((t=3!==e.tag&&27!==e.tag)&&((t=5===e.tag)&&(t=!("form"!==(t=e.type)&&"button"!==t)||Jc(e.type,e.memoizedProps)),t=!t),t&&(n=!0),n&&Yr&&ea(e),na(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){Yr=ld(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}Yr=null}}else Yr=Xr?ld(e.stateNode.nextSibling):null;return!0}function aa(){Yr=Xr=null,Qr=!1}function ia(e){null===Gr?Gr=[e]:Gr.push(e)}var oa=Error(o(460)),la=Error(o(474)),sa={then:function(){}};function ua(e){return"fulfilled"===(e=e.status)||"rejected"===e}function ca(){}function da(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(ca,ca),t=n),t.status){case"fulfilled":return t.value;case"rejected":if((e=t.reason)===oa)throw Error(o(483));throw e;default:if("string"===typeof t.status)t.then(ca,ca);else{if(null!==(e=tu)&&100<e.shellSuspendCounter)throw Error(o(482));(e=t).status="pending",e.then((function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}}),(function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}}))}switch(t.status){case"fulfilled":return t.value;case"rejected":if((e=t.reason)===oa)throw Error(o(483));throw e}throw fa=t,oa}}var fa=null;function pa(){if(null===fa)throw Error(o(459));var e=fa;return fa=null,e}var ha=null,ma=0;function ga(e){var t=ma;return ma+=1,null===ha&&(ha=[]),da(ha,e,t)}function ya(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function va(e,t){if(t.$$typeof===s)throw Error(o(525));throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ba(e){return(0,e._init)(e._payload)}function wa(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function a(e,t){return(e=Ms(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=33554434,n):r:(t.flags|=33554434,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=33554434),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Vs(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n,r){var i=n.type;return i===d?h(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===S&&ba(i)===t.type)?(ya(t=a(t,n.props),n),t.return=e,t):(ya(t=Fs(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function p(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Us(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function h(e,t,n,r,i){return null===t||7!==t.tag?((t=Hs(n,e.mode,r,i)).return=e,t):((t=a(t,n)).return=e,t)}function m(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Vs(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case u:return ya(n=Fs(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case c:return(t=Us(t,e.mode,n)).return=e,t;case S:return m(e,t=(0,t._init)(t._payload),n)}if(W(t)||E(t))return(t=Hs(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return m(e,ga(t),n);if(t.$$typeof===g)return m(e,Pl(e,t),n);va(e,t)}return null}function y(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case u:return n.key===a?f(e,t,n,r):null;case c:return n.key===a?p(e,t,n,r):null;case S:return y(e,t,n=(a=n._init)(n._payload),r)}if(W(n)||E(n))return null!==a?null:h(e,t,n,r,null);if("function"===typeof n.then)return y(e,t,ga(n),r);if(n.$$typeof===g)return y(e,t,Pl(e,n),r);va(e,n)}return null}function v(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case u:return f(t,e=e.get(null===r.key?n:r.key)||null,r,a);case c:return p(t,e=e.get(null===r.key?n:r.key)||null,r,a);case S:return v(e,t,n,r=(0,r._init)(r._payload),a)}if(W(r)||E(r))return h(t,e=e.get(n)||null,r,a,null);if("function"===typeof r.then)return v(e,t,n,ga(r),a);if(r.$$typeof===g)return v(e,t,n,Pl(t,r),a);va(t,r)}return null}function b(s,f,p,h){if("object"===typeof p&&null!==p&&p.type===d&&null===p.key&&(p=p.props.children),"object"===typeof p&&null!==p){switch(p.$$typeof){case u:e:{for(var w=p.key;null!==f;){if(f.key===w){if((w=p.type)===d){if(7===f.tag){n(s,f.sibling),(h=a(f,p.props.children)).return=s,s=h;break e}}else if(f.elementType===w||"object"===typeof w&&null!==w&&w.$$typeof===S&&ba(w)===f.type){n(s,f.sibling),ya(h=a(f,p.props),p),h.return=s,s=h;break e}n(s,f);break}t(s,f),f=f.sibling}p.type===d?((h=Hs(p.props.children,s.mode,h,p.key)).return=s,s=h):(ya(h=Fs(p.type,p.key,p.props,null,s.mode,h),p),h.return=s,s=h)}return l(s);case c:e:{for(w=p.key;null!==f;){if(f.key===w){if(4===f.tag&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(s,f.sibling),(h=a(f,p.children||[])).return=s,s=h;break e}n(s,f);break}t(s,f),f=f.sibling}(h=Us(p,s.mode,h)).return=s,s=h}return l(s);case S:return b(s,f,p=(w=p._init)(p._payload),h)}if(W(p))return function(a,o,l,s){for(var u=null,c=null,d=o,f=o=0,p=null;null!==d&&f<l.length;f++){d.index>f?(p=d,d=null):p=d.sibling;var h=y(a,d,l[f],s);if(null===h){null===d&&(d=p);break}e&&d&&null===h.alternate&&t(a,d),o=i(h,o,f),null===c?u=h:c.sibling=h,c=h,d=p}if(f===l.length)return n(a,d),Qr&&$r(a,f),u;if(null===d){for(;f<l.length;f++)null!==(d=m(a,l[f],s))&&(o=i(d,o,f),null===c?u=d:c.sibling=d,c=d);return Qr&&$r(a,f),u}for(d=r(d);f<l.length;f++)null!==(p=v(d,a,f,l[f],s))&&(e&&null!==p.alternate&&d.delete(null===p.key?f:p.key),o=i(p,o,f),null===c?u=p:c.sibling=p,c=p);return e&&d.forEach((function(e){return t(a,e)})),Qr&&$r(a,f),u}(s,f,p,h);if(E(p)){if("function"!==typeof(w=E(p)))throw Error(o(150));return function(a,l,s,u){if(null==s)throw Error(o(151));for(var c=null,d=null,f=l,p=l=0,h=null,g=s.next();null!==f&&!g.done;p++,g=s.next()){f.index>p?(h=f,f=null):h=f.sibling;var b=y(a,f,g.value,u);if(null===b){null===f&&(f=h);break}e&&f&&null===b.alternate&&t(a,f),l=i(b,l,p),null===d?c=b:d.sibling=b,d=b,f=h}if(g.done)return n(a,f),Qr&&$r(a,p),c;if(null===f){for(;!g.done;p++,g=s.next())null!==(g=m(a,g.value,u))&&(l=i(g,l,p),null===d?c=g:d.sibling=g,d=g);return Qr&&$r(a,p),c}for(f=r(f);!g.done;p++,g=s.next())null!==(g=v(f,a,p,g.value,u))&&(e&&null!==g.alternate&&f.delete(null===g.key?p:g.key),l=i(g,l,p),null===d?c=g:d.sibling=g,d=g);return e&&f.forEach((function(e){return t(a,e)})),Qr&&$r(a,p),c}(s,f,p=w.call(p),h)}if("function"===typeof p.then)return b(s,f,ga(p),h);if(p.$$typeof===g)return b(s,f,Pl(s,p),h);va(s,p)}return"string"===typeof p&&""!==p||"number"===typeof p||"bigint"===typeof p?(p=""+p,null!==f&&6===f.tag?(n(s,f.sibling),(h=a(f,p)).return=s,s=h):(n(s,f),(h=Vs(p,s.mode,h)).return=s,s=h),l(s)):n(s,f)}return function(e,t,n,r){try{ma=0;var a=b(e,t,n,r);return ha=null,a}catch(o){if(o===oa)throw o;var i=Ls(29,o,null,e.mode);return i.lanes=r,i.return=e,i}}}var Sa=wa(!0),ka=wa(!1),xa=K(null),Ca=K(0);function Ea(e,t){X(Ca,e=uu),X(xa,t),uu=e|t.baseLanes}function Pa(){X(Ca,uu),X(xa,xa.current)}function _a(){uu=Ca.current,q(xa),q(Ca)}var Oa=K(null),ja=null;function Ta(e){var t=e.alternate;X(za,1&za.current),X(Oa,e),null===ja&&(null===t||null!==xa.current||null!==t.memoizedState)&&(ja=e)}function Na(e){if(22===e.tag){if(X(za,za.current),X(Oa,e),null===ja){var t=e.alternate;null!==t&&null!==t.memoizedState&&(ja=e)}}else Aa()}function Aa(){X(za,za.current),X(Oa,Oa.current)}function Ra(e){q(Oa),ja===e&&(ja=null),q(za)}var za=K(0);function La(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ia="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach((function(e){return e()}))}},Ma=r.unstable_scheduleCallback,Da=r.unstable_NormalPriority,Fa={$$typeof:g,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ha(){return{controller:new Ia,data:new Map,refCount:0}}function Wa(e){e.refCount--,0===e.refCount&&Ma(Da,(function(){e.controller.abort()}))}var Va=null,Ua=0,$a=0,Ba=null;function Ka(){if(0===--Ua&&null!==Va){null!==Ba&&(Ba.status="fulfilled");var e=Va;Va=null,$a=0,Ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var qa=T.S;T.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Va){var n=Va=[];Ua=0,$a=Sc(),Ba={status:"pending",value:void 0,then:function(e){n.push(e)}}}Ua++,t.then(Ka,Ka)}(0,t),null!==qa&&qa(e,t)};var Xa=K(null);function Ya(){var e=Xa.current;return null!==e?e:tu.pooledCache}function Qa(e,t){X(Xa,null===t?Xa.current:t.pool)}function Ga(){var e=Ya();return null===e?null:{parent:Fa._currentValue,pool:e}}var Ja=0,Za=null,ei=null,ti=null,ni=!1,ri=!1,ai=!1,ii=0,oi=0,li=null,si=0;function ui(){throw Error(o(321))}function ci(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xn(e[n],t[n]))return!1;return!0}function di(e,t,n,r,a,i){return Ja=i,Za=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=null===e||null===e.memoizedState?Po:_o,ai=!1,i=n(r,a),ai=!1,ri&&(i=pi(t,n,r,a)),fi(e),i}function fi(e){T.H=Eo;var t=null!==ei&&null!==ei.next;if(Ja=0,ti=ei=Za=null,ni=!1,oi=0,li=null,t)throw Error(o(300));null===e||$o||null!==(e=e.dependencies)&&xl(e)&&($o=!0)}function pi(e,t,n,r){Za=e;var a=0;do{if(ri&&(li=null),oi=0,ri=!1,25<=a)throw Error(o(301));if(a+=1,ti=ei=null,null!=e.updateQueue){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,null!=i.memoCache&&(i.memoCache.index=0)}T.H=Oo,i=t(n,r)}while(ri);return i}function hi(){var e=T.H,t=e.useState()[0];return t="function"===typeof t.then?wi(t):t,e=e.useState()[0],(null!==ei?ei.memoizedState:null)!==e&&(Za.flags|=1024),t}function mi(){var e=0!==ii;return ii=0,e}function gi(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function yi(e){if(ni){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}ni=!1}Ja=0,ti=ei=Za=null,ri=!1,oi=ii=0,li=null}function vi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ti?Za.memoizedState=ti=e:ti=ti.next=e,ti}function bi(){if(null===ei){var e=Za.alternate;e=null!==e?e.memoizedState:null}else e=ei.next;var t=null===ti?Za.memoizedState:ti.next;if(null!==t)ti=t,ei=e;else{if(null===e){if(null===Za.alternate)throw Error(o(467));throw Error(o(310))}e={memoizedState:(ei=e).memoizedState,baseState:ei.baseState,baseQueue:ei.baseQueue,queue:ei.queue,next:null},null===ti?Za.memoizedState=ti=e:ti=ti.next=e}return ti}function wi(e){var t=oi;return oi+=1,null===li&&(li=[]),e=da(li,e,t),t=Za,null===(null===ti?t.memoizedState:ti.next)&&(t=t.alternate,T.H=null===t||null===t.memoizedState?Po:_o),e}function Si(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return wi(e);if(e.$$typeof===g)return El(e)}throw Error(o(438,String(e)))}function ki(e){var t=null,n=Za.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=Za.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map((function(e){return e.slice()})),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},Za.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=x;return t.index++,n}function xi(e,t){return"function"===typeof t?t(e):t}function Ci(e){return Ei(bi(),ei,e)}function Ei(e,t,n){var r=e.queue;if(null===r)throw Error(o(311));r.lastRenderedReducer=n;var a=e.baseQueue,i=r.pending;if(null!==i){if(null!==a){var l=a.next;a.next=i.next,i.next=l}t.baseQueue=a=i,r.pending=null}if(i=e.baseState,null===a)e.memoizedState=i;else{var s=l=null,u=null,c=t=a.next,d=!1;do{var f=-536870913&c.lane;if(f!==c.lane?(ru&f)===f:(Ja&f)===f){var p=c.revertLane;if(0===p)null!==u&&(u=u.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===$a&&(d=!0);else{if((Ja&p)===p){c=c.next,p===$a&&(d=!0);continue}f={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===u?(s=u=f,l=i):u=u.next=f,Za.lanes|=p,du|=p}f=c.action,ai&&n(i,f),i=c.hasEagerState?c.eagerState:n(i,f)}else p={lane:f,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===u?(s=u=p,l=i):u=u.next=p,Za.lanes|=f,du|=f;c=c.next}while(null!==c&&c!==t);if(null===u?l=i:u.next=s,!Xn(i,e.memoizedState)&&($o=!0,d&&null!==(n=Ba)))throw n;e.memoizedState=i,e.baseState=l,e.baseQueue=u,r.lastRenderedState=i}return null===a&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Pi(e){var t=bi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{i=e(i,l.action),l=l.next}while(l!==a);Xn(i,t.memoizedState)||($o=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function _i(e,t,n){var r=Za,a=bi(),i=Qr;if(i){if(void 0===n)throw Error(o(407));n=n()}else n=t();var l=!Xn((ei||a).memoizedState,n);if(l&&(a.memoizedState=n,$o=!0),a=a.queue,Ji(Ti.bind(null,r,a,e),[e]),a.getSnapshot!==t||l||null!==ti&&1&ti.memoizedState.tag){if(r.flags|=2048,qi(9,ji.bind(null,r,a,n,t),{destroy:void 0},null),null===tu)throw Error(o(349));i||0!==(60&Ja)||Oi(r,t,n)}return n}function Oi(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=Za.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},Za.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function ji(e,t,n,r){t.value=n,t.getSnapshot=r,Ni(t)&&Ai(e)}function Ti(e,t,n){return n((function(){Ni(t)&&Ai(e)}))}function Ni(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xn(e,n)}catch(r){return!0}}function Ai(e){var t=jr(e,2);null!==t&&Au(t,e,2)}function Ri(e){var t=vi();if("function"===typeof e){var n=e;if(e=n(),ai){be(!0);try{n()}finally{be(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:e},t}function zi(e,t,n,r){return e.baseState=n,Ei(e,ei,"function"===typeof r?r:xi)}function Li(e,t,n,r,a){if(ko(e))throw Error(o(485));if(null!==(e=t.action)){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){i.listeners.push(e)}};null!==T.T?n(!0):i.isTransition=!1,r(i),null===(n=t.pending)?(i.next=t.pending=i,Ii(t,i)):(i.next=n.next,t.pending=n.next=i)}}function Ii(e,t){var n=t.action,r=t.payload,a=e.state;if(t.isTransition){var i=T.T,o={};T.T=o;try{var l=n(a,r),s=T.S;null!==s&&s(o,l),Mi(e,t,l)}catch(u){Fi(e,t,u)}finally{T.T=i}}else try{Mi(e,t,i=n(a,r))}catch(c){Fi(e,t,c)}}function Mi(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then((function(n){Di(e,t,n)}),(function(n){return Fi(e,t,n)})):Di(e,t,n)}function Di(e,t,n){t.status="fulfilled",t.value=n,Hi(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,Ii(e,n)))}function Fi(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,Hi(t),t=t.next}while(t!==r)}e.action=null}function Hi(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Wi(e,t){return t}function Vi(e,t){if(Qr){var n=tu.formState;if(null!==n){e:{var r=Za;if(Qr){if(Yr){t:{for(var a=Yr,i=Jr;8!==a.nodeType;){if(!i){a=null;break t}if(null===(a=ld(a.nextSibling))){a=null;break t}}a="F!"===(i=a.data)||"F"===i?a:null}if(a){Yr=ld(a.nextSibling),r="F!"===a.data;break e}}ea(r)}r=!1}r&&(t=n[0])}}return(n=vi()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:t},n.queue=r,n=bo.bind(null,Za,r),r.dispatch=n,r=Ri(!1),i=So.bind(null,Za,!1,r.queue),a={state:t,dispatch:null,action:e,pending:null},(r=vi()).queue=a,n=Li.bind(null,Za,a,i,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ui(e){return $i(bi(),ei,e)}function $i(e,t,n){t=Ei(e,t,Wi)[0],e=Ci(xi)[0],t="object"===typeof t&&null!==t&&"function"===typeof t.then?wi(t):t;var r=bi(),a=r.queue,i=a.dispatch;return n!==r.memoizedState&&(Za.flags|=2048,qi(9,Bi.bind(null,a,n),{destroy:void 0},null)),[t,i,e]}function Bi(e,t){e.action=t}function Ki(e){var t=bi(),n=ei;if(null!==n)return $i(t,n,e);bi(),t=t.memoizedState;var r=(n=bi()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function qi(e,t,n,r){return e={tag:e,create:t,inst:n,deps:r,next:null},null===(t=Za.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},Za.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Xi(){return bi().memoizedState}function Yi(e,t,n,r){var a=vi();Za.flags|=e,a.memoizedState=qi(1|t,n,{destroy:void 0},void 0===r?null:r)}function Qi(e,t,n,r){var a=bi();r=void 0===r?null:r;var i=a.memoizedState.inst;null!==ei&&null!==r&&ci(r,ei.memoizedState.deps)?a.memoizedState=qi(t,n,i,r):(Za.flags|=e,a.memoizedState=qi(1|t,n,i,r))}function Gi(e,t){Yi(8390656,8,e,t)}function Ji(e,t){Qi(2048,8,e,t)}function Zi(e,t){return Qi(4,2,e,t)}function eo(e,t){return Qi(4,4,e,t)}function to(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function no(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Qi(4,4,to.bind(null,t,e),n)}function ro(){}function ao(e,t){var n=bi();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&ci(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function io(e,t){var n=bi();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&ci(t,r[1]))return r[0];if(r=e(),ai){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r}function oo(e,t,n){return void 0===n||0!==(1073741824&Ja)?e.memoizedState=t:(e.memoizedState=n,e=Nu(),Za.lanes|=e,du|=e,n)}function lo(e,t,n,r){return Xn(n,t)?n:null!==xa.current?(e=oo(e,n,r),Xn(e,t)||($o=!0),e):0===(42&Ja)?($o=!0,e.memoizedState=n):(e=Nu(),Za.lanes|=e,du|=e,t)}function so(e,t,n,r,a){var i=V.p;V.p=0!==i&&8>i?i:8;var o=T.T,l={};T.T=l,So(e,!1,t,n);try{var s=a(),u=T.S;if(null!==u&&u(l,s),null!==s&&"object"===typeof s&&"function"===typeof s.then)wo(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then((function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)}),(function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)})),r}(s,r),Tu());else wo(e,t,r,Tu())}catch(c){wo(e,t,{then:function(){},status:"rejected",reason:c},Tu())}finally{V.p=i,T.T=o}}function uo(){}function co(e,t,n,r){if(5!==e.tag)throw Error(o(476));var a=fo(e).queue;so(e,a,t,U,null===n?uo:function(){return po(e),n(r)})}function fo(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:U},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function po(e){wo(e,fo(e).next.queue,{},Tu())}function ho(){return El(Id)}function mo(){return bi().memoizedState}function go(){return bi().memoizedState}function yo(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Tu(),r=Al(t,e=Nl(n),n);return null!==r&&(Au(r,t,n),Rl(r,t,n)),t={cache:Ha()},void(e.payload=t)}t=t.return}}function vo(e,t,n){var r=Tu();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},ko(e)?xo(t,n):null!==(n=Or(e,t,n,r))&&(Au(n,e,r),Co(n,t,r))}function bo(e,t,n){wo(e,t,n,Tu())}function wo(e,t,n,r){var a={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(ko(e))xo(t,a);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,Xn(l,o))return _r(e,t,a,0),null===tu&&Pr(),!1}catch(s){}if(null!==(n=Or(e,t,a,r)))return Au(n,e,r),Co(n,t,r),!0}return!1}function So(e,t,n,r){if(r={lane:2,revertLane:Sc(),action:r,hasEagerState:!1,eagerState:null,next:null},ko(e)){if(t)throw Error(o(479))}else null!==(t=Or(e,n,r,2))&&Au(t,e,2)}function ko(e){var t=e.alternate;return e===Za||null!==t&&t===Za}function xo(e,t){ri=ni=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Co(e,t,n){if(0!==(4194176&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,ze(e,n)}}var Eo={readContext:El,use:Si,useCallback:ui,useContext:ui,useEffect:ui,useImperativeHandle:ui,useLayoutEffect:ui,useInsertionEffect:ui,useMemo:ui,useReducer:ui,useRef:ui,useState:ui,useDebugValue:ui,useDeferredValue:ui,useTransition:ui,useSyncExternalStore:ui,useId:ui};Eo.useCacheRefresh=ui,Eo.useMemoCache=ui,Eo.useHostTransitionStatus=ui,Eo.useFormState=ui,Eo.useActionState=ui,Eo.useOptimistic=ui;var Po={readContext:El,use:Si,useCallback:function(e,t){return vi().memoizedState=[e,void 0===t?null:t],e},useContext:El,useEffect:Gi,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,Yi(4194308,4,to.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yi(4194308,4,e,t)},useInsertionEffect:function(e,t){Yi(4,2,e,t)},useMemo:function(e,t){var n=vi();t=void 0===t?null:t;var r=e();if(ai){be(!0);try{e()}finally{be(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=vi();if(void 0!==n){var a=n(t);if(ai){be(!0);try{n(t)}finally{be(!1)}}}else a=t;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=vo.bind(null,Za,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},vi().memoizedState=e},useState:function(e){var t=(e=Ri(e)).queue,n=bo.bind(null,Za,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ro,useDeferredValue:function(e,t){return oo(vi(),e,t)},useTransition:function(){var e=Ri(!1);return e=so.bind(null,Za,e.queue,!0,!1),vi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Za,a=vi();if(Qr){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===tu)throw Error(o(349));0!==(60&ru)||Oi(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Gi(Ti.bind(null,r,i,e),[e]),r.flags|=2048,qi(9,ji.bind(null,r,i,n,t),{destroy:void 0},null),n},useId:function(){var e=vi(),t=tu.identifierPrefix;if(Qr){var n=Ur;t=":"+t+"R"+(n=(Vr&~(1<<32-we(Vr)-1)).toString(32)+n),0<(n=ii++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=si++).toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return vi().memoizedState=yo.bind(null,Za)}};Po.useMemoCache=ki,Po.useHostTransitionStatus=ho,Po.useFormState=Vi,Po.useActionState=Vi,Po.useOptimistic=function(e){var t=vi();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=So.bind(null,Za,!0,n),n.dispatch=t,[e,t]};var _o={readContext:El,use:Si,useCallback:ao,useContext:El,useEffect:Ji,useImperativeHandle:no,useInsertionEffect:Zi,useLayoutEffect:eo,useMemo:io,useReducer:Ci,useRef:Xi,useState:function(){return Ci(xi)},useDebugValue:ro,useDeferredValue:function(e,t){return lo(bi(),ei.memoizedState,e,t)},useTransition:function(){var e=Ci(xi)[0],t=bi().memoizedState;return["boolean"===typeof e?e:wi(e),t]},useSyncExternalStore:_i,useId:mo};_o.useCacheRefresh=go,_o.useMemoCache=ki,_o.useHostTransitionStatus=ho,_o.useFormState=Ui,_o.useActionState=Ui,_o.useOptimistic=function(e,t){return zi(bi(),0,e,t)};var Oo={readContext:El,use:Si,useCallback:ao,useContext:El,useEffect:Ji,useImperativeHandle:no,useInsertionEffect:Zi,useLayoutEffect:eo,useMemo:io,useReducer:Pi,useRef:Xi,useState:function(){return Pi(xi)},useDebugValue:ro,useDeferredValue:function(e,t){var n=bi();return null===ei?oo(n,e,t):lo(n,ei.memoizedState,e,t)},useTransition:function(){var e=Pi(xi)[0],t=bi().memoizedState;return["boolean"===typeof e?e:wi(e),t]},useSyncExternalStore:_i,useId:mo};function jo(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:N({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}Oo.useCacheRefresh=go,Oo.useMemoCache=ki,Oo.useHostTransitionStatus=ho,Oo.useFormState=Ki,Oo.useActionState=Ki,Oo.useOptimistic=function(e,t){var n=bi();return null!==ei?zi(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])};var To={isMounted:function(e){return!!(e=e._reactInternals)&&M(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Tu(),a=Nl(r);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Al(e,a,r))&&(Au(t,e,r),Rl(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Tu(),a=Nl(r);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Al(e,a,r))&&(Au(t,e,r),Rl(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Tu(),r=Nl(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=Al(e,r,n))&&(Au(t,e,n),Rl(t,e,n))}};function No(e,t,n,r,a,i,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!Yn(n,r)||!Yn(a,i))}function Ao(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&To.enqueueReplaceState(t,t.state,null)}function Ro(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var a in n===t&&(n=N({},n)),e)void 0===n[a]&&(n[a]=e[a]);return n}var zo="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function Lo(e){zo(e)}function Io(e){console.error(e)}function Mo(e){zo(e)}function Do(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout((function(){throw n}))}}function Fo(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout((function(){throw r}))}}function Ho(e,t,n){return(n=Nl(n)).tag=3,n.payload={element:null},n.callback=function(){Do(e,t)},n}function Wo(e){return(e=Nl(e)).tag=3,e}function Vo(e,t,n,r){var a=n.type.getDerivedStateFromError;if("function"===typeof a){var i=r.value;e.payload=function(){return a(i)},e.callback=function(){Fo(t,n,r)}}var o=n.stateNode;null!==o&&"function"===typeof o.componentDidCatch&&(e.callback=function(){Fo(t,n,r),"function"!==typeof a&&(null===ku?ku=new Set([this]):ku.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Uo=Error(o(461)),$o=!1;function Bo(e,t,n,r){t.child=null===e?ka(t,null,n,r):Sa(t,e.child,n,r)}function Ko(e,t,n,r,a){n=n.render;var i=t.ref;if("ref"in r){var o={};for(var l in r)"ref"!==l&&(o[l]=r[l])}else o=r;return Cl(t),r=di(e,t,n,o,i,a),l=mi(),null===e||$o?(Qr&&l&&Kr(t),t.flags|=1,Bo(e,t,r,a),t.child):(gi(e,t,a),fl(e,t,a))}function qo(e,t,n,r,a){if(null===e){var i=n.type;return"function"!==typeof i||Is(i)||void 0!==i.defaultProps||null!==n.compare?((e=Fs(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Xo(e,t,i,r,a))}if(i=e.child,!pl(e,a)){var o=i.memoizedProps;if((n=null!==(n=n.compare)?n:Yn)(o,r)&&e.ref===t.ref)return fl(e,t,a)}return t.flags|=1,(e=Ms(i,r)).ref=t.ref,e.return=t,t.child=e}function Xo(e,t,n,r,a){if(null!==e){var i=e.memoizedProps;if(Yn(i,r)&&e.ref===t.ref){if($o=!1,t.pendingProps=r=i,!pl(e,a))return t.lanes=e.lanes,fl(e,t,a);0!==(131072&e.flags)&&($o=!0)}}return Jo(e,t,n,r,a)}function Yo(e,t,n){var r=t.pendingProps,a=r.children,i=0!==(2&t.stateNode._pendingVisibility),o=null!==e?e.memoizedState:null;if(Go(e,t),"hidden"===r.mode||i){if(0!==(128&t.flags)){if(r=null!==o?o.baseLanes|n:n,null!==e){for(a=t.child=e.child,i=0;null!==a;)i=i|a.lanes|a.childLanes,a=a.sibling;t.childLanes=i&~r}else t.childLanes=0,t.child=null;return Qo(e,t,r,n)}if(0===(536870912&n))return t.lanes=t.childLanes=536870912,Qo(e,t,null!==o?o.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Qa(0,null!==o?o.cachePool:null),null!==o?Ea(t,o):Pa(),Na(t)}else null!==o?(Qa(0,o.cachePool),Ea(t,o),Aa(),t.memoizedState=null):(null!==e&&Qa(0,null),Pa(),Aa());return Bo(e,t,a,n),t.child}function Qo(e,t,n,r){var a=Ya();return a=null===a?null:{parent:Fa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},null!==e&&Qa(0,null),Pa(),Na(t),null!==e&&kl(e,t,r,!0),null}function Go(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=2097664);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(o(284));null!==e&&e.ref===n||(t.flags|=2097664)}}function Jo(e,t,n,r,a){return Cl(t),n=di(e,t,n,r,void 0,a),r=mi(),null===e||$o?(Qr&&r&&Kr(t),t.flags|=1,Bo(e,t,n,a),t.child):(gi(e,t,a),fl(e,t,a))}function Zo(e,t,n,r,a,i){return Cl(t),t.updateQueue=null,n=pi(t,r,n,a),fi(e),r=mi(),null===e||$o?(Qr&&r&&Kr(t),t.flags|=1,Bo(e,t,n,i),t.child):(gi(e,t,i),fl(e,t,i))}function el(e,t,n,r,a){if(Cl(t),null===t.stateNode){var i=Ar,o=n.contextType;"object"===typeof o&&null!==o&&(i=El(o)),i=new n(r,i),t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,i.updater=To,t.stateNode=i,i._reactInternals=t,(i=t.stateNode).props=r,i.state=t.memoizedState,i.refs={},jl(t),o=n.contextType,i.context="object"===typeof o&&null!==o?El(o):Ar,i.state=t.memoizedState,"function"===typeof(o=n.getDerivedStateFromProps)&&(jo(t,n,o,r),i.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(o=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),o!==i.state&&To.enqueueReplaceState(i,i.state,null),Ml(t,r,i,a),Il(),i.state=t.memoizedState),"function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){i=t.stateNode;var l=t.memoizedProps,s=Ro(n,l);i.props=s;var u=i.context,c=n.contextType;o=Ar,"object"===typeof c&&null!==c&&(o=El(c));var d=n.getDerivedStateFromProps;c="function"===typeof d||"function"===typeof i.getSnapshotBeforeUpdate,l=t.pendingProps!==l,c||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l||u!==o)&&Ao(t,i,r,o),Ol=!1;var f=t.memoizedState;i.state=f,Ml(t,r,i,a),Il(),u=t.memoizedState,l||f!==u||Ol?("function"===typeof d&&(jo(t,n,d,r),u=t.memoizedState),(s=Ol||No(t,n,s,r,f,u,o))?(c||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=o,r=s):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Tl(e,t),c=Ro(n,o=t.memoizedProps),i.props=c,d=t.pendingProps,f=i.context,u=n.contextType,s=Ar,"object"===typeof u&&null!==u&&(s=El(u)),(u="function"===typeof(l=n.getDerivedStateFromProps)||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(o!==d||f!==s)&&Ao(t,i,r,s),Ol=!1,f=t.memoizedState,i.state=f,Ml(t,r,i,a),Il();var p=t.memoizedState;o!==d||f!==p||Ol||null!==e&&null!==e.dependencies&&xl(e.dependencies)?("function"===typeof l&&(jo(t,n,l,r),p=t.memoizedState),(c=Ol||No(t,n,c,r,f,p,s)||null!==e&&null!==e.dependencies&&xl(e.dependencies))?(u||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,p,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,p,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),i.props=r,i.state=p,i.context=s,r=c):("function"!==typeof i.componentDidUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return i=r,Go(e,t),r=0!==(128&t.flags),i||r?(i=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:i.render(),t.flags|=1,null!==e&&r?(t.child=Sa(t,e.child,null,a),t.child=Sa(t,null,n,a)):Bo(e,t,n,a),t.memoizedState=i.state,e=t.child):e=fl(e,t,a),e}function tl(e,t,n,r){return aa(),t.flags|=256,Bo(e,t,n,r),t.child}var nl={dehydrated:null,treeContext:null,retryLane:0};function rl(e){return{baseLanes:e,cachePool:Ga()}}function al(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=hu),e}function il(e,t,n){var r,a=t.pendingProps,i=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&za.current)),r&&(i=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(Qr){if(i?Ta(t):Aa(),Qr){var s,u=Yr;if(s=u){e:{for(s=u,u=Jr;8!==s.nodeType;){if(!u){u=null;break e}if(null===(s=ld(s.nextSibling))){u=null;break e}}u=s}null!==u?(t.memoizedState={dehydrated:u,treeContext:null!==Wr?{id:Vr,overflow:Ur}:null,retryLane:536870912},(s=Ls(18,null,null,0)).stateNode=u,s.return=t,t.child=s,Xr=t,Yr=null,s=!0):s=!1}s||ea(t)}if(null!==(u=t.memoizedState)&&null!==(u=u.dehydrated))return"$!"===u.data?t.lanes=16:t.lanes=536870912,null;Ra(t)}return u=a.children,a=a.fallback,i?(Aa(),u=ll({mode:"hidden",children:u},i=t.mode),a=Hs(a,i,n,null),u.return=t,a.return=t,u.sibling=a,t.child=u,(i=t.child).memoizedState=rl(n),i.childLanes=al(e,r,n),t.memoizedState=nl,a):(Ta(t),ol(t,u))}if(null!==(s=e.memoizedState)&&null!==(u=s.dehydrated)){if(l)256&t.flags?(Ta(t),t.flags&=-257,t=sl(e,t,n)):null!==t.memoizedState?(Aa(),t.child=e.child,t.flags|=128,t=null):(Aa(),i=a.fallback,u=t.mode,a=ll({mode:"visible",children:a.children},u),(i=Hs(i,u,n,null)).flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,Sa(t,e.child,null,n),(a=t.child).memoizedState=rl(n),a.childLanes=al(e,r,n),t.memoizedState=nl,t=i);else if(Ta(t),"$!"===u.data){if(r=u.nextSibling&&u.nextSibling.dataset)var c=r.dgst;r=c,(a=Error(o(419))).stack="",a.digest=r,ia({value:a,source:null,stack:null}),t=sl(e,t,n)}else if($o||kl(e,t,n,!1),r=0!==(n&e.childLanes),$o||r){if(null!==(r=tu)){if(0!==(42&(a=n&-n)))a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(0!==(a=0!==(a&(r.suspendedLanes|n))?0:a)&&a!==s.retryLane)throw s.retryLane=a,jr(e,a),Au(r,e,a),Uo}"$?"===u.data||$u(),t=sl(e,t,n)}else"$?"===u.data?(t.flags|=128,t.child=e.child,t=lc.bind(null,e),u._reactRetry=t,t=null):(e=s.treeContext,Yr=ld(u.nextSibling),Xr=t,Qr=!0,Gr=null,Jr=!1,null!==e&&(Fr[Hr++]=Vr,Fr[Hr++]=Ur,Fr[Hr++]=Wr,Vr=e.id,Ur=e.overflow,Wr=t),(t=ol(t,a.children)).flags|=4096);return t}return i?(Aa(),i=a.fallback,u=t.mode,c=(s=e.child).sibling,(a=Ms(s,{mode:"hidden",children:a.children})).subtreeFlags=31457280&s.subtreeFlags,null!==c?i=Ms(c,i):(i=Hs(i,u,n,null)).flags|=2,i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,null===(u=e.child.memoizedState)?u=rl(n):(null!==(s=u.cachePool)?(c=Fa._currentValue,s=s.parent!==c?{parent:c,pool:c}:s):s=Ga(),u={baseLanes:u.baseLanes|n,cachePool:s}),i.memoizedState=u,i.childLanes=al(e,r,n),t.memoizedState=nl,a):(Ta(t),e=(n=e.child).sibling,(n=Ms(n,{mode:"visible",children:a.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function ol(e,t){return(t=ll({mode:"visible",children:t},e.mode)).return=e,e.child=t}function ll(e,t){return Ws(e,t,0,null)}function sl(e,t,n){return Sa(t,e.child,null,n),(e=ol(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function ul(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),wl(e.return,t,n)}function cl(e,t,n,r,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function dl(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(Bo(e,t,r.children,n),0!==(2&(r=za.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&ul(e,n,t);else if(19===e.tag)ul(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(X(za,r),a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===La(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),cl(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===La(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}cl(t,!0,n,null,i);break;case"together":cl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),du|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(kl(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Ms(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ms(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function pl(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!xl(e))}function hl(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)$o=!0;else{if(!pl(e,n)&&0===(128&t.flags))return $o=!1,function(e,t,n){switch(t.tag){case 3:Z(t,t.stateNode.containerInfo),vl(t,Fa,e.memoizedState.cache),aa();break;case 27:case 5:te(t);break;case 4:Z(t,t.stateNode.containerInfo);break;case 10:vl(t,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(Ta(t),t.flags|=128,null):0!==(n&t.child.childLanes)?il(e,t,n):(Ta(t),null!==(e=fl(e,t,n))?e.sibling:null);Ta(t);break;case 19:var a=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(kl(e,t,n,!1),r=0!==(n&t.childLanes)),a){if(r)return dl(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),X(za,za.current),r)break;return null;case 22:case 23:return t.lanes=0,Yo(e,t,n);case 24:vl(t,Fa,e.memoizedState.cache)}return fl(e,t,n)}(e,t,n);$o=0!==(131072&e.flags)}else $o=!1,Qr&&0!==(1048576&t.flags)&&Br(t,Dr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,a=r._init;if(r=a(r._payload),t.type=r,"function"!==typeof r){if(void 0!==r&&null!==r){if((a=r.$$typeof)===y){t.tag=11,t=Ko(null,t,r,e,n);break e}if(a===w){t.tag=14,t=qo(null,t,r,e,n);break e}}throw t=_(r)||r,Error(o(306,t,""))}Is(r)?(e=Ro(r,e),t.tag=1,t=el(null,t,r,e,n)):(t.tag=0,t=Jo(null,t,r,e,n))}return t;case 0:return Jo(e,t,t.type,t.pendingProps,n);case 1:return el(e,t,r=t.type,a=Ro(r,t.pendingProps),n);case 3:e:{if(Z(t,t.stateNode.containerInfo),null===e)throw Error(o(387));var i=t.pendingProps;r=(a=t.memoizedState).element,Tl(e,t),Ml(t,i,null,n);var l=t.memoizedState;if(i=l.cache,vl(t,Fa,i),i!==a.cache&&Sl(t,[Fa],n,!0),Il(),i=l.element,a.isDehydrated){if(a={element:i,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=tl(e,t,i,n);break e}if(i!==r){ia(r=zr(Error(o(424)),t)),t=tl(e,t,i,n);break e}for(Yr=ld(t.stateNode.containerInfo.firstChild),Xr=t,Qr=!0,Gr=null,Jr=!0,n=ka(t,null,i,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(aa(),i===r){t=fl(e,t,n);break e}Bo(e,t,i,n)}t=t.child}return t;case 26:return Go(e,t),null===e?(n=gd(t.type,null,t.pendingProps,null))?t.memoizedState=n:Qr||(n=t.type,e=t.pendingProps,(r=Yc(G.current).createElement(n))[De]=t,r[Fe]=e,Kc(r,n,e),Ge(r),t.stateNode=r):t.memoizedState=gd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return te(t),null===e&&Qr&&(r=t.stateNode=ud(t.type,t.pendingProps,G.current),Xr=t,Jr=!0,Yr=ld(r.firstChild)),r=t.pendingProps.children,null!==e||Qr?Bo(e,t,r,n):t.child=Sa(t,null,r,n),Go(e,t),t.child;case 5:return null===e&&Qr&&((a=r=Yr)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Be])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(i=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(null==a.href?null:a.href)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin)||e.getAttribute("title")!==(null==a.title?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((i=e.getAttribute("src"))!==(null==a.src?null:a.src)||e.getAttribute("type")!==(null==a.type?null:a.type)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var i=null==a.name?null:""+a.name;if("hidden"===a.type&&e.getAttribute("name")===i)return e}if(null===(e=ld(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,Jr))?(t.stateNode=r,Xr=t,Yr=ld(r.firstChild),Jr=!1,a=!0):a=!1),a||ea(t)),te(t),a=t.type,i=t.pendingProps,l=null!==e?e.memoizedProps:null,r=i.children,Jc(a,i)?r=null:null!==l&&Jc(a,l)&&(t.flags|=32),null!==t.memoizedState&&(a=di(e,t,hi,null,null,n),Id._currentValue=a),Go(e,t),Bo(e,t,r,n),t.child;case 6:return null===e&&Qr&&((e=n=Yr)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=ld(e.nextSibling)))return null}return e}(n,t.pendingProps,Jr))?(t.stateNode=n,Xr=t,Yr=null,e=!0):e=!1),e||ea(t)),null;case 13:return il(e,t,n);case 4:return Z(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Sa(t,null,r,n):Bo(e,t,r,n),t.child;case 11:return Ko(e,t,t.type,t.pendingProps,n);case 7:return Bo(e,t,t.pendingProps,n),t.child;case 8:case 12:return Bo(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,vl(t,t.type,r.value),Bo(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Cl(t),r=r(a=El(a)),t.flags|=1,Bo(e,t,r,n),t.child;case 14:return qo(e,t,t.type,t.pendingProps,n);case 15:return Xo(e,t,t.type,t.pendingProps,n);case 19:return dl(e,t,n);case 22:return Yo(e,t,n);case 24:return Cl(t),r=El(Fa),null===e?(null===(a=Ya())&&(a=tu,i=Ha(),a.pooledCache=i,i.refCount++,null!==i&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:r,cache:a},jl(t),vl(t,Fa,a)):(0!==(e.lanes&n)&&(Tl(e,t),Ml(t,null,null,n),Il()),a=e.memoizedState,i=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=a),vl(t,Fa,r)):(r=i.cache,vl(t,Fa,r),r!==a.cache&&Sl(t,[Fa],n,!0))),Bo(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}var ml=K(null),gl=null,yl=null;function vl(e,t,n){X(ml,t._currentValue),t._currentValue=n}function bl(e){e._currentValue=ml.current,q(ml)}function wl(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Sl(e,t,n,r){var a=e.child;for(null!==a&&(a.return=e);null!==a;){var i=a.dependencies;if(null!==i){var l=a.child;i=i.firstContext;e:for(;null!==i;){var s=i;i=a;for(var u=0;u<t.length;u++)if(s.context===t[u]){i.lanes|=n,null!==(s=i.alternate)&&(s.lanes|=n),wl(i.return,n,e),r||(l=null);break e}i=s.next}}else if(18===a.tag){if(null===(l=a.return))throw Error(o(341));l.lanes|=n,null!==(i=l.alternate)&&(i.lanes|=n),wl(l,n,e),l=null}else l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===e){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}}function kl(e,t,n,r){e=null;for(var a=t,i=!1;null!==a;){if(!i)if(0!==(524288&a.flags))i=!0;else if(0!==(262144&a.flags))break;if(10===a.tag){var l=a.alternate;if(null===l)throw Error(o(387));if(null!==(l=l.memoizedProps)){var s=a.type;Xn(a.pendingProps.value,l.value)||(null!==e?e.push(s):e=[s])}}else if(a===J.current){if(null===(l=a.alternate))throw Error(o(387));l.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(null!==e?e.push(Id):e=[Id])}a=a.return}null!==e&&Sl(t,e,n,r),t.flags|=262144}function xl(e){for(e=e.firstContext;null!==e;){if(!Xn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Cl(e){gl=e,yl=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function El(e){return _l(gl,e)}function Pl(e,t){return null===gl&&Cl(e),_l(e,t)}function _l(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===yl){if(null===e)throw Error(o(308));yl=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else yl=yl.next=t;return n}var Ol=!1;function jl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Nl(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Al(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&eu)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=Nr(e),Tr(e,null,n),t}return _r(e,r,t,n),Nr(e)}function Rl(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194176&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,ze(e,n)}}function zl(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===i?a=i=o:i=i.next=o,n=n.next}while(null!==n);null===i?a=i=t:i=i.next=t}else a=i=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ll=!1;function Il(){if(Ll){if(null!==Ba)throw Ba}}function Ml(e,t,n,r){Ll=!1;var a=e.updateQueue;Ol=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===o?i=u:o.next=u,o=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==i){var d=a.baseState;for(o=0,c=u=s=null,l=i;;){var f=-536870913&l.lane,p=f!==l.lane;if(p?(ru&f)===f:(r&f)===f){0!==f&&f===$a&&(Ll=!0),null!==c&&(c=c.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var h=e,m=l;f=t;var g=n;switch(m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(g,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(g,d,f):h)||void 0===f)break e;d=N({},d,f);break e;case 2:Ol=!0}}null!==(f=l.callback)&&(e.flags|=64,p&&(e.flags|=8192),null===(p=a.callbacks)?a.callbacks=[f]:p.push(f))}else p={lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,o|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(p=l).next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null===i&&(a.shared.lanes=0),du|=o,e.lanes=o,e.memoizedState=d}}function Dl(e,t){if("function"!==typeof e)throw Error(o(191,e));e.call(t)}function Fl(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)Dl(n[e],t)}function Hl(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var a=r.next;n=a;do{if((n.tag&e)===e){r=void 0;var i=n.create,o=n.inst;r=i(),o.destroy=r}n=n.next}while(n!==a)}}catch(l){rc(t,t.return,l)}}function Wl(e,t,n){try{var r=t.updateQueue,a=null!==r?r.lastEffect:null;if(null!==a){var i=a.next;r=i;do{if((r.tag&e)===e){var o=r.inst,l=o.destroy;if(void 0!==l){o.destroy=void 0,a=t;var s=n;try{l()}catch(u){rc(a,s,u)}}}r=r.next}while(r!==i)}}catch(u){rc(t,t.return,u)}}function Vl(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{Fl(t,n)}catch(r){rc(e,e.return,r)}}}function Ul(e,t,n){n.props=Ro(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){rc(e,t,r)}}function $l(e,t){try{var n=e.ref;if(null!==n){var r=e.stateNode;switch(e.tag){case 26:case 27:case 5:var a=r;break;default:a=r}"function"===typeof n?e.refCleanup=n(a):n.current=a}}catch(i){rc(e,t,i)}}function Bl(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(a){rc(e,t,a)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(i){rc(e,t,i)}else n.current=null}function Kl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){rc(e,e.return,a)}}function ql(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,l=null,s=null,u=null,c=null,d=null;for(h in n){var f=n[h];if(n.hasOwnProperty(h)&&null!=f)switch(h){case"checked":case"value":break;case"defaultValue":u=f;default:r.hasOwnProperty(h)||$c(e,t,h,null,r,f)}}for(var p in r){var h=r[p];if(f=n[p],r.hasOwnProperty(p)&&(null!=h||null!=f))switch(p){case"type":i=h;break;case"name":a=h;break;case"checked":c=h;break;case"defaultChecked":d=h;break;case"value":l=h;break;case"defaultValue":s=h;break;case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(o(137,t));break;default:h!==f&&$c(e,t,p,h,r,f)}}return void gt(e,l,s,u,c,d,i,a);case"select":for(i in h=l=s=p=null,n)if(u=n[i],n.hasOwnProperty(i)&&null!=u)switch(i){case"value":break;case"multiple":h=u;default:r.hasOwnProperty(i)||$c(e,t,i,null,r,u)}for(a in r)if(i=r[a],u=n[a],r.hasOwnProperty(a)&&(null!=i||null!=u))switch(a){case"value":p=i;break;case"defaultValue":s=i;break;case"multiple":l=i;default:i!==u&&$c(e,t,a,i,r,u)}return t=s,n=l,r=h,void(null!=p?bt(e,!!n,p,!1):!!r!==!!n&&(null!=t?bt(e,!!n,t,!0):bt(e,!!n,n?[]:"",!1)));case"textarea":for(s in h=p=null,n)if(a=n[s],n.hasOwnProperty(s)&&null!=a&&!r.hasOwnProperty(s))switch(s){case"value":case"children":break;default:$c(e,t,s,null,r,a)}for(l in r)if(a=r[l],i=n[l],r.hasOwnProperty(l)&&(null!=a||null!=i))switch(l){case"value":p=a;break;case"defaultValue":h=a;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=a)throw Error(o(91));break;default:a!==i&&$c(e,t,l,a,r,i)}return void wt(e,p,h);case"option":for(var m in n)if(p=n[m],n.hasOwnProperty(m)&&null!=p&&!r.hasOwnProperty(m))if("selected"===m)e.selected=!1;else $c(e,t,m,null,r,p);for(u in r)if(p=r[u],h=n[u],r.hasOwnProperty(u)&&p!==h&&(null!=p||null!=h))if("selected"===u)e.selected=p&&"function"!==typeof p&&"symbol"!==typeof p;else $c(e,t,u,p,r,h);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)p=n[g],n.hasOwnProperty(g)&&null!=p&&!r.hasOwnProperty(g)&&$c(e,t,g,null,r,p);for(c in r)if(p=r[c],h=n[c],r.hasOwnProperty(c)&&p!==h&&(null!=p||null!=h))switch(c){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(o(137,t));break;default:$c(e,t,c,p,r,h)}return;default:if(Pt(t)){for(var y in n)p=n[y],n.hasOwnProperty(y)&&void 0!==p&&!r.hasOwnProperty(y)&&Bc(e,t,y,void 0,r,p);for(d in r)p=r[d],h=n[d],!r.hasOwnProperty(d)||p===h||void 0===p&&void 0===h||Bc(e,t,d,p,r,h);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&null!=p&&!r.hasOwnProperty(v)&&$c(e,t,v,null,r,p);for(f in r)p=r[f],h=n[f],!r.hasOwnProperty(f)||p===h||null==p&&null==h||$c(e,t,f,p,r,h)}(r,e.type,n,t),r[Fe]=t}catch(a){rc(e,e.return,a)}}function Xl(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag||4===e.tag}function Yl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||Xl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&27!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function Ql(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Uc));else if(4!==r&&27!==r&&null!==(e=e.child))for(Ql(e,t,n),e=e.sibling;null!==e;)Ql(e,t,n),e=e.sibling}function Gl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&27!==r&&null!==(e=e.child))for(Gl(e,t,n),e=e.sibling;null!==e;)Gl(e,t,n),e=e.sibling}var Jl=!1,Zl=!1,es=!1,ts="function"===typeof WeakSet?WeakSet:Set,ns=null,rs=!1;function as(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:ys(e,n),4&r&&Hl(5,n);break;case 1:if(ys(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(l){rc(n,n.return,l)}else{var a=Ro(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){rc(n,n.return,s)}}64&r&&Vl(n),512&r&&$l(n,n.return);break;case 3:if(ys(e,n),64&r&&null!==(r=n.updateQueue)){if(e=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:e=n.child.stateNode}try{Fl(r,e)}catch(l){rc(n,n.return,l)}}break;case 26:ys(e,n),512&r&&$l(n,n.return);break;case 27:case 5:ys(e,n),null===t&&4&r&&Kl(n),512&r&&$l(n,n.return);break;case 12:default:ys(e,n);break;case 13:ys(e,n),4&r&&cs(e,n);break;case 22:if(!(a=null!==n.memoizedState||Jl)){t=null!==t&&null!==t.memoizedState||Zl;var i=Jl,o=Zl;Jl=a,(Zl=t)&&!o?bs(e,n,0!==(8772&n.subtreeFlags)):ys(e,n),Jl=i,Zl=o}512&r&&("manual"===n.memoizedProps.mode?$l(n,n.return):Bl(n,n.return))}}function is(e){var t=e.alternate;null!==t&&(e.alternate=null,is(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Ke(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var os=null,ls=!1;function ss(e,t,n){for(n=n.child;null!==n;)us(e,t,n),n=n.sibling}function us(e,t,n){if(ve&&"function"===typeof ve.onCommitFiberUnmount)try{ve.onCommitFiberUnmount(ye,n)}catch(o){}switch(n.tag){case 26:Zl||Bl(n,t),ss(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:Zl||Bl(n,t);var r=os,a=ls;for(os=n.stateNode,ss(e,t,n),t=(n=n.stateNode).attributes;t.length;)n.removeAttributeNode(t[0]);Ke(n),os=r,ls=a;break;case 5:Zl||Bl(n,t);case 6:a=os;var i=ls;if(os=null,ss(e,t,n),ls=i,null!==(os=a))if(ls)try{e=os,r=n.stateNode,8===e.nodeType?e.parentNode.removeChild(r):e.removeChild(r)}catch(l){rc(n,t,l)}else try{os.removeChild(n.stateNode)}catch(l){rc(n,t,l)}break;case 18:null!==os&&(ls?(t=os,n=n.stateNode,8===t.nodeType?id(t.parentNode,n):1===t.nodeType&&id(t,n),gf(t)):id(os,n.stateNode));break;case 4:r=os,a=ls,os=n.stateNode.containerInfo,ls=!0,ss(e,t,n),os=r,ls=a;break;case 0:case 11:case 14:case 15:Zl||Wl(2,n,t),Zl||Wl(4,n,t),ss(e,t,n);break;case 1:Zl||(Bl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&Ul(n,t,r)),ss(e,t,n);break;case 21:ss(e,t,n);break;case 22:Zl||Bl(n,t),Zl=(r=Zl)||null!==n.memoizedState,ss(e,t,n),Zl=r;break;default:ss(e,t,n)}}function cs(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{gf(e)}catch(n){rc(t,t.return,n)}}function ds(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new ts),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new ts),t;default:throw Error(o(435,e.tag))}}(e);t.forEach((function(t){var r=sc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}function fs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r],i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 27:case 5:os=s.stateNode,ls=!1;break e;case 3:case 4:os=s.stateNode.containerInfo,ls=!0;break e}s=s.return}if(null===os)throw Error(o(160));us(i,l,a),os=null,ls=!1,null!==(i=a.alternate)&&(i.return=null),a.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)hs(t,e),t=t.sibling}var ps=null;function hs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:fs(t,e),ms(e),4&r&&(Wl(3,e,e.return),Hl(3,e),Wl(5,e,e.return));break;case 1:fs(t,e),ms(e),512&r&&(Zl||null===n||Bl(n,n.return)),64&r&&Jl&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var a=ps;if(fs(t,e),ms(e),512&r&&(Zl||null===n||Bl(n,n.return)),4&r){var i=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(r){case"title":(!(i=a.getElementsByTagName("title")[0])||i[Be]||i[De]||"http://www.w3.org/2000/svg"===i.namespaceURI||i.hasAttribute("itemprop"))&&(i=a.createElement(r),a.head.insertBefore(i,a.querySelector("head > title"))),Kc(i,r,n),i[De]=e,Ge(i),r=i;break e;case"link":var l=_d("link","href",a).get(r+(n.href||""));if(l)for(var s=0;s<l.length;s++)if((i=l[s]).getAttribute("href")===(null==n.href?null:n.href)&&i.getAttribute("rel")===(null==n.rel?null:n.rel)&&i.getAttribute("title")===(null==n.title?null:n.title)&&i.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){l.splice(s,1);break t}Kc(i=a.createElement(r),r,n),a.head.appendChild(i);break;case"meta":if(l=_d("meta","content",a).get(r+(n.content||"")))for(s=0;s<l.length;s++)if((i=l[s]).getAttribute("content")===(null==n.content?null:""+n.content)&&i.getAttribute("name")===(null==n.name?null:n.name)&&i.getAttribute("property")===(null==n.property?null:n.property)&&i.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&i.getAttribute("charset")===(null==n.charSet?null:n.charSet)){l.splice(s,1);break t}Kc(i=a.createElement(r),r,n),a.head.appendChild(i);break;default:throw Error(o(468,r))}i[De]=e,Ge(i),r=i}e.stateNode=r}else Od(a,e.type,e.stateNode);else e.stateNode=kd(a,r,e.memoizedProps);else i!==r?(null===i?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):i.count--,null===r?Od(a,e.type,e.stateNode):kd(a,r,e.memoizedProps)):null===r&&null!==e.stateNode&&ql(e,e.memoizedProps,n.memoizedProps)}break;case 27:if(4&r&&null===e.alternate){a=e.stateNode,i=e.memoizedProps;try{for(var u=a.firstChild;u;){var c=u.nextSibling,d=u.nodeName;u[Be]||"HEAD"===d||"BODY"===d||"SCRIPT"===d||"STYLE"===d||"LINK"===d&&"stylesheet"===u.rel.toLowerCase()||a.removeChild(u),u=c}for(var f=e.type,p=a.attributes;p.length;)a.removeAttributeNode(p[0]);Kc(a,f,i),a[De]=e,a[Fe]=i}catch(m){rc(e,e.return,m)}}case 5:if(fs(t,e),ms(e),512&r&&(Zl||null===n||Bl(n,n.return)),32&e.flags){a=e.stateNode;try{kt(a,"")}catch(m){rc(e,e.return,m)}}4&r&&null!=e.stateNode&&ql(e,a=e.memoizedProps,null!==n?n.memoizedProps:a),1024&r&&(es=!0);break;case 6:if(fs(t,e),ms(e),4&r){if(null===e.stateNode)throw Error(o(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(m){rc(e,e.return,m)}}break;case 3:if(Pd=null,a=ps,ps=fd(t.containerInfo),fs(t,e),ps=a,ms(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{gf(t.containerInfo)}catch(m){rc(e,e.return,m)}es&&(es=!1,gs(e));break;case 4:r=ps,ps=fd(e.stateNode.containerInfo),fs(t,e),ms(e),ps=r;break;case 12:fs(t,e),ms(e);break;case 13:fs(t,e),ms(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(bu=se()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,ds(e,r)));break;case 22:if(512&r&&(Zl||null===n||Bl(n,n.return)),u=null!==e.memoizedState,c=null!==n&&null!==n.memoizedState,Jl=(d=Jl)||u,Zl=(f=Zl)||c,fs(t,e),Zl=f,Jl=d,ms(e),(t=e.stateNode)._current=e,t._visibility&=-3,t._visibility|=2&t._pendingVisibility,8192&r&&(t._visibility=u?-2&t._visibility:1|t._visibility,u&&(t=Jl||Zl,null===n||c||t||vs(e)),null===e.memoizedProps||"manual"!==e.memoizedProps.mode))e:for(n=null,t=e;;){if(5===t.tag||26===t.tag||27===t.tag){if(null===n){c=n=t;try{if(a=c.stateNode,u)"function"===typeof(i=a.style).setProperty?i.setProperty("display","none","important"):i.display="none";else{l=c.stateNode;var h=void 0!==(s=c.memoizedProps.style)&&null!==s&&s.hasOwnProperty("display")?s.display:null;l.style.display=null==h||"boolean"===typeof h?"":(""+h).trim()}}catch(m){rc(c,c.return,m)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(m){rc(c,c.return,m)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,ds(e,n))));break;case 19:fs(t,e),ms(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,ds(e,r)));break;case 21:break;default:fs(t,e),ms(e)}}function ms(e){var t=e.flags;if(2&t){try{if(27!==e.tag){e:{for(var n=e.return;null!==n;){if(Xl(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 27:var a=r.stateNode;Gl(e,Yl(e),a);break;case 5:var i=r.stateNode;32&r.flags&&(kt(i,""),r.flags&=-33),Gl(e,Yl(e),i);break;case 3:case 4:var l=r.stateNode.containerInfo;Ql(e,Yl(e),l);break;default:throw Error(o(161))}}}catch(s){rc(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function gs(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;gs(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function ys(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)as(e,t.alternate,t),t=t.sibling}function vs(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wl(4,t,t.return),vs(t);break;case 1:Bl(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&Ul(t,t.return,n),vs(t);break;case 26:case 27:case 5:Bl(t,t.return),vs(t);break;case 22:Bl(t,t.return),null===t.memoizedState&&vs(t);break;default:vs(t)}e=e.sibling}}function bs(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,a=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:bs(a,i,n),Hl(4,i);break;case 1:if(bs(a,i,n),"function"===typeof(a=(r=i).stateNode).componentDidMount)try{a.componentDidMount()}catch(u){rc(r,r.return,u)}if(null!==(a=(r=i).updateQueue)){var l=r.stateNode;try{var s=a.shared.hiddenCallbacks;if(null!==s)for(a.shared.hiddenCallbacks=null,a=0;a<s.length;a++)Dl(s[a],l)}catch(u){rc(r,r.return,u)}}n&&64&o&&Vl(i),$l(i,i.return);break;case 26:case 27:case 5:bs(a,i,n),n&&null===r&&4&o&&Kl(i),$l(i,i.return);break;case 12:default:bs(a,i,n);break;case 13:bs(a,i,n),n&&4&o&&cs(a,i);break;case 22:null===i.memoizedState&&bs(a,i,n),$l(i,i.return)}t=t.sibling}}function ws(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Wa(n))}function Ss(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Wa(e))}function ks(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)xs(e,t,n,r),t=t.sibling}function xs(e,t,n,r){var a=t.flags;switch(t.tag){case 0:case 11:case 15:ks(e,t,n,r),2048&a&&Hl(9,t);break;case 3:ks(e,t,n,r),2048&a&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Wa(e)));break;case 12:if(2048&a){ks(e,t,n,r),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,l=i.onPostCommit;"function"===typeof l&&l(o,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(s){rc(t,t.return,s)}}else ks(e,t,n,r);break;case 23:break;case 22:i=t.stateNode,null!==t.memoizedState?4&i._visibility?ks(e,t,n,r):Es(e,t):4&i._visibility?ks(e,t,n,r):(i._visibility|=4,Cs(e,t,n,r,0!==(10256&t.subtreeFlags))),2048&a&&ws(t.alternate,t);break;case 24:ks(e,t,n,r),2048&a&&Ss(t.alternate,t);break;default:ks(e,t,n,r)}}function Cs(e,t,n,r,a){for(a=a&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var i=e,o=t,l=n,s=r,u=o.flags;switch(o.tag){case 0:case 11:case 15:Cs(i,o,l,s,a),Hl(8,o);break;case 23:break;case 22:var c=o.stateNode;null!==o.memoizedState?4&c._visibility?Cs(i,o,l,s,a):Es(i,o):(c._visibility|=4,Cs(i,o,l,s,a)),a&&2048&u&&ws(o.alternate,o);break;case 24:Cs(i,o,l,s,a),a&&2048&u&&Ss(o.alternate,o);break;default:Cs(i,o,l,s,a)}t=t.sibling}}function Es(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,a=r.flags;switch(r.tag){case 22:Es(n,r),2048&a&&ws(r.alternate,r);break;case 24:Es(n,r),2048&a&&Ss(r.alternate,r);break;default:Es(n,r)}t=t.sibling}}var Ps=8192;function _s(e){if(e.subtreeFlags&Ps)for(e=e.child;null!==e;)Os(e),e=e.sibling}function Os(e){switch(e.tag){case 26:_s(e),e.flags&Ps&&null!==e.memoizedState&&function(e,t,n){if(null===Td)throw Error(o(475));var r=Td;if("stylesheet"===t.type&&("string"!==typeof n.media||!1!==matchMedia(n.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var a=yd(n.href),i=e.querySelector(vd(a));if(i)return null!==(e=i._p)&&"object"===typeof e&&"function"===typeof e.then&&(r.count++,r=Ad.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=i,void Ge(i);i=e.ownerDocument||e,n=bd(n),(a=cd.get(a))&&Cd(n,a),Ge(i=i.createElement("link"));var l=i;l._p=new Promise((function(e,t){l.onload=e,l.onerror=t})),Kc(i,"link",n),t.instance=i}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(r.count++,t=Ad.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(ps,e.memoizedState,e.memoizedProps);break;case 5:default:_s(e);break;case 3:case 4:var t=ps;ps=fd(e.stateNode.containerInfo),_s(e),ps=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=Ps,Ps=16777216,_s(e),Ps=t):_s(e))}}function js(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Ts(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];ns=r,Rs(r,e)}js(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Ns(e),e=e.sibling}function Ns(e){switch(e.tag){case 0:case 11:case 15:Ts(e),2048&e.flags&&Wl(9,e,e.return);break;case 3:case 12:default:Ts(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&4&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-5,As(e)):Ts(e)}}function As(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];ns=r,Rs(r,e)}js(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:Wl(8,t,t.return),As(t);break;case 22:4&(n=t.stateNode)._visibility&&(n._visibility&=-5,As(t));break;default:As(t)}e=e.sibling}}function Rs(e,t){for(;null!==ns;){var n=ns;switch(n.tag){case 0:case 11:case 15:Wl(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Wa(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,ns=r;else e:for(n=e;null!==ns;){var a=(r=ns).sibling,i=r.return;if(is(r),r===n){ns=null;break e}if(null!==a){a.return=i,ns=a;break e}ns=i}}}function zs(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ls(e,t,n,r){return new zs(e,t,n,r)}function Is(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ms(e,t){var n=e.alternate;return null===n?((n=Ls(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=31457280&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ds(e,t){e.flags&=31457282;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Fs(e,t,n,r,a,i){var l=0;if(r=e,"function"===typeof e)Is(e)&&(l=1);else if("string"===typeof e)l=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,Y.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case d:return Hs(n.children,a,i,t);case f:l=8,a|=24;break;case p:return(e=Ls(12,n,t,2|a)).elementType=p,e.lanes=i,e;case v:return(e=Ls(13,n,t,a)).elementType=v,e.lanes=i,e;case b:return(e=Ls(19,n,t,a)).elementType=b,e.lanes=i,e;case k:return Ws(n,a,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case h:case g:l=10;break e;case m:l=9;break e;case y:l=11;break e;case w:l=14;break e;case S:l=16,r=null;break e}l=29,n=Error(o(130,null===e?"null":typeof e,"")),r=null}return(t=Ls(l,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function Hs(e,t,n,r){return(e=Ls(7,e,r,t)).lanes=n,e}function Ws(e,t,n,r){(e=Ls(22,e,r,t)).elementType=k,e.lanes=n;var a={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var e=a._current;if(null===e)throw Error(o(456));if(0===(2&a._pendingVisibility)){var t=jr(e,2);null!==t&&(a._pendingVisibility|=2,Au(t,e,2))}},attach:function(){var e=a._current;if(null===e)throw Error(o(456));if(0!==(2&a._pendingVisibility)){var t=jr(e,2);null!==t&&(a._pendingVisibility&=-3,Au(t,e,2))}}};return e.stateNode=a,e}function Vs(e,t,n){return(e=Ls(6,e,null,t)).lanes=n,e}function Us(e,t,n){return(t=Ls(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $s(e){e.flags|=4}function Bs(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!jd(t)){if(null!==(t=Oa.current)&&((4194176&ru)===ru?null!==ja:(62914560&ru)!==ru&&0===(536870912&ru)||t!==ja))throw fa=sa,la;e.flags|=8192}}function Ks(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?Te():536870912,e.lanes|=t,mu|=t)}function qs(e,t){if(!Qr)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Xs(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=31457280&a.subtreeFlags,r|=31457280&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ys(e,t,n){var r=t.pendingProps;switch(qr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return Xs(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),bl(Fa),ee(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(ra(t)?$s(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==Gr&&(zu(Gr),Gr=null))),Xs(t),null;case 26:return n=t.memoizedState,null===e?($s(t),null!==n?(Xs(t),Bs(t,n)):(Xs(t),t.flags&=-16777217)):n?n!==e.memoizedState?($s(t),Xs(t),Bs(t,n)):(Xs(t),t.flags&=-16777217):(e.memoizedProps!==r&&$s(t),Xs(t),t.flags&=-16777217),null;case 27:ne(t),n=G.current;var a=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&$s(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Xs(t),null}e=Y.current,ra(t)?ta(t):(e=ud(a,r,n),t.stateNode=e,$s(t))}return Xs(t),null;case 5:if(ne(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&$s(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Xs(t),null}if(e=Y.current,ra(t))ta(t);else{switch(a=Yc(G.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=a.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof r.is?a.createElement("select",{is:r.is}):a.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e="string"===typeof r.is?a.createElement(n,{is:r.is}):a.createElement(n)}}e[De]=t,e[Fe]=r;e:for(a=t.child;null!==a;){if(5===a.tag||6===a.tag)e.appendChild(a.stateNode);else if(4!==a.tag&&27!==a.tag&&null!==a.child){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;null===a.sibling;){if(null===a.return||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;e:switch(Kc(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&$s(t)}}return Xs(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&$s(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(e=G.current,ra(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(a=Xr))switch(a.tag){case 27:case 5:r=a.memoizedProps}e[De]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Vc(e.nodeValue,n)))||ea(t)}else(e=Yc(e).createTextNode(r))[De]=t,t.stateNode=e}return Xs(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(a=ra(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(o(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));a[De]=t}else aa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Xs(t),a=!1}else null!==Gr&&(zu(Gr),Gr=null),a=!0;if(!a)return 256&t.flags?(Ra(t),t):(Ra(t),null)}if(Ra(t),0!==(128&t.flags))return t.lanes=n,t;if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){a=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(a=r.alternate.memoizedState.cachePool.pool);var i=null;null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(i=r.memoizedState.cachePool.pool),i!==a&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Ks(t,t.updateQueue),Xs(t),null;case 4:return ee(),null===e&&Ac(t.stateNode.containerInfo),Xs(t),null;case 10:return bl(t.type),Xs(t),null;case 19:if(q(za),null===(a=t.memoizedState))return Xs(t),null;if(r=0!==(128&t.flags),null===(i=a.rendering))if(r)qs(a,!1);else{if(0!==cu||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(i=La(e))){for(t.flags|=128,qs(a,!1),e=i.updateQueue,t.updateQueue=e,Ks(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Ds(n,e),n=n.sibling;return X(za,1&za.current|2),t.child}e=e.sibling}null!==a.tail&&se()>wu&&(t.flags|=128,r=!0,qs(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=La(i))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Ks(t,e),qs(a,!0),null===a.tail&&"hidden"===a.tailMode&&!i.alternate&&!Qr)return Xs(t),null}else 2*se()-a.renderingStartTime>wu&&536870912!==n&&(t.flags|=128,r=!0,qs(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(null!==(e=a.last)?e.sibling=i:t.child=i,a.last=i)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=se(),t.sibling=null,e=za.current,X(za,r?1&e|2:1&e),t):(Xs(t),null);case 22:case 23:return Ra(t),_a(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(Xs(t),6&t.subtreeFlags&&(t.flags|=8192)):Xs(t),null!==(n=t.updateQueue)&&Ks(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&q(Xa),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),bl(Fa),Xs(t),null;case 25:return null}throw Error(o(156,t.tag))}function Qs(e,t){switch(qr(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return bl(Fa),ee(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return ne(t),null;case 13:if(Ra(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));aa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return q(za),null;case 4:return ee(),null;case 10:return bl(t.type),null;case 22:case 23:return Ra(t),_a(),null!==e&&q(Xa),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return bl(Fa),null;default:return null}}function Gs(e,t){switch(qr(t),t.tag){case 3:bl(Fa),ee();break;case 26:case 27:case 5:ne(t);break;case 4:ee();break;case 13:Ra(t);break;case 19:q(za);break;case 10:bl(t.type);break;case 22:case 23:Ra(t),_a(),null!==e&&q(Xa);break;case 24:bl(Fa)}}var Js={getCacheForType:function(e){var t=El(Fa),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},Zs="function"===typeof WeakMap?WeakMap:Map,eu=0,tu=null,nu=null,ru=0,au=0,iu=null,ou=!1,lu=!1,su=!1,uu=0,cu=0,du=0,fu=0,pu=0,hu=0,mu=0,gu=null,yu=null,vu=!1,bu=0,wu=1/0,Su=null,ku=null,xu=!1,Cu=null,Eu=0,Pu=0,_u=null,Ou=0,ju=null;function Tu(){if(0!==(2&eu)&&0!==ru)return ru&-ru;if(null!==T.T){return 0!==$a?$a:Sc()}return Ie()}function Nu(){0===hu&&(hu=0===(536870912&ru)||Qr?je():536870912);var e=Oa.current;return null!==e&&(e.flags|=32),hu}function Au(e,t,n){(e===tu&&2===au||null!==e.cancelPendingCommit)&&(Hu(e,0),Mu(e,ru,hu,!1)),Ae(e,n),0!==(2&eu)&&e===tu||(e===tu&&(0===(2&eu)&&(fu|=n),4===cu&&Mu(e,ru,hu,!1)),mc(e))}function Ru(e,t,n){if(0!==(6&eu))throw Error(o(327));for(var r=!n&&0===(60&t)&&0===(t&e.expiredLanes)||_e(e,t),a=r?function(e,t){var n=eu;eu|=2;var r=Vu(),a=Uu();tu!==e||ru!==t?(Su=null,wu=se()+500,Hu(e,t)):lu=_e(e,t);e:for(;;)try{if(0!==au&&null!==nu){t=nu;var i=iu;t:switch(au){case 1:au=0,iu=null,Qu(e,t,i,1);break;case 2:if(ua(i)){au=0,iu=null,Yu(t);break}t=function(){2===au&&tu===e&&(au=7),mc(e)},i.then(t,t);break e;case 3:au=7;break e;case 4:au=5;break e;case 7:ua(i)?(au=0,iu=null,Yu(t)):(au=0,iu=null,Qu(e,t,i,7));break;case 5:var l=null;switch(nu.tag){case 26:l=nu.memoizedState;case 5:case 27:var s=nu;if(!l||jd(l)){au=0,iu=null;var u=s.sibling;if(null!==u)nu=u;else{var c=s.return;null!==c?(nu=c,Gu(c)):nu=null}break t}}au=0,iu=null,Qu(e,t,i,5);break;case 6:au=0,iu=null,Qu(e,t,i,6);break;case 8:Fu(),cu=6;break e;default:throw Error(o(462))}}qu();break}catch(d){Wu(e,d)}return yl=gl=null,T.H=r,T.A=a,eu=n,null!==nu?0:(tu=null,ru=0,Pr(),cu)}(e,t):Bu(e,t,!0),i=r;;){if(0===a){lu&&!r&&Mu(e,t,0,!1);break}if(6===a)Mu(e,t,0,!ou);else{if(n=e.current.alternate,i&&!Iu(n)){a=Bu(e,t,!1),i=!1;continue}if(2===a){if(i=t,e.errorRecoveryDisabledLanes&i)var l=0;else l=0!==(l=-536870913&e.pendingLanes)?l:536870912&l?536870912:0;if(0!==l){t=l;e:{var s=e;a=gu;var u=s.current.memoizedState.isDehydrated;if(u&&(Hu(s,l).flags|=256),2!==(l=Bu(s,l,!1))){if(su&&!u){s.errorRecoveryDisabledLanes|=i,fu|=i,a=4;break e}i=yu,yu=a,null!==i&&zu(i)}a=l}if(i=!1,2!==a)continue}}if(1===a){Hu(e,0),Mu(e,t,0,!0);break}e:{switch(r=e,a){case 0:case 1:throw Error(o(345));case 4:if((4194176&t)===t){Mu(r,t,hu,!ou);break e}break;case 2:yu=null;break;case 3:case 5:break;default:throw Error(o(329))}if(r.finishedWork=n,r.finishedLanes=t,(62914560&t)===t&&10<(i=bu+300-se())){if(Mu(r,t,hu,!ou),0!==Pe(r,0))break e;r.timeoutHandle=ed(Lu.bind(null,r,n,yu,Su,vu,t,hu,fu,mu,ou,2,-0,0),i)}else Lu(r,n,yu,Su,vu,t,hu,fu,mu,ou,0,-0,0)}}break}mc(e)}function zu(e){null===yu?yu=e:yu.push.apply(yu,e)}function Lu(e,t,n,r,a,i,l,s,u,c,d,f,p){var h=t.subtreeFlags;if((8192&h||16785408===(16785408&h))&&(Td={stylesheets:null,count:0,unsuspend:Nd},Os(t),null!==(t=function(){if(null===Td)throw Error(o(475));var e=Td;return e.stylesheets&&0===e.count&&zd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout((function(){if(e.stylesheets&&zd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}),6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=t(Zu.bind(null,e,n,r,a,l,s,u,1,f,p)),void Mu(e,i,l,!c);Zu(e,n,r,a,l,s,u,d,f,p)}function Iu(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!Xn(i(),a))return!1}catch(o){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mu(e,t,n,r){t&=~pu,t&=~fu,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var a=t;0<a;){var i=31-we(a),o=1<<i;r[i]=-1,a&=~o}0!==n&&Re(e,n,t)}function Du(){return 0!==(6&eu)||(gc(0,!1),!1)}function Fu(){if(null!==nu){if(0===au)var e=nu.return;else yl=gl=null,yi(e=nu),ha=null,ma=0,e=nu;for(;null!==e;)Gs(e.alternate,e),e=e.return;nu=null}}function Hu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,td(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Fu(),tu=e,nu=n=Ms(e.current,null),ru=t,au=0,iu=null,ou=!1,lu=_e(e,t),su=!1,mu=hu=pu=fu=du=cu=0,yu=gu=null,vu=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var a=31-we(r),i=1<<a;t|=e[a],r&=~i}return uu=t,Pr(),n}function Wu(e,t){Za=null,T.H=Eo,t===oa?(t=pa(),au=3):t===la?(t=pa(),au=4):au=t===Uo?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,iu=t,null===nu&&(cu=1,Do(e,zr(t,e.current)))}function Vu(){var e=T.H;return T.H=Eo,null===e?Eo:e}function Uu(){var e=T.A;return T.A=Js,e}function $u(){cu=4,ou||(4194176&ru)!==ru&&null!==Oa.current||(lu=!0),0===(134217727&du)&&0===(134217727&fu)||null===tu||Mu(tu,ru,hu,!1)}function Bu(e,t,n){var r=eu;eu|=2;var a=Vu(),i=Uu();tu===e&&ru===t||(Su=null,Hu(e,t)),t=!1;var o=cu;e:for(;;)try{if(0!==au&&null!==nu){var l=nu,s=iu;switch(au){case 8:Fu(),o=6;break e;case 3:case 2:case 6:null===Oa.current&&(t=!0);var u=au;if(au=0,iu=null,Qu(e,l,s,u),n&&lu){o=0;break e}break;default:u=au,au=0,iu=null,Qu(e,l,s,u)}}Ku(),o=cu;break}catch(c){Wu(e,c)}return t&&e.shellSuspendCounter++,yl=gl=null,eu=r,T.H=a,T.A=i,null===nu&&(tu=null,ru=0,Pr()),o}function Ku(){for(;null!==nu;)Xu(nu)}function qu(){for(;null!==nu&&!oe();)Xu(nu)}function Xu(e){var t=hl(e.alternate,e,uu);e.memoizedProps=e.pendingProps,null===t?Gu(e):nu=t}function Yu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Zo(n,t,t.pendingProps,t.type,void 0,ru);break;case 11:t=Zo(n,t,t.pendingProps,t.type.render,t.ref,ru);break;case 5:yi(t);default:Gs(n,t),t=hl(n,t=nu=Ds(t,uu),uu)}e.memoizedProps=e.pendingProps,null===t?Gu(e):nu=t}function Qu(e,t,n,r){yl=gl=null,yi(t),ha=null,ma=0;var a=t.return;try{if(function(e,t,n,r,a){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&kl(t,n,a,!0),null!==(n=Oa.current)){switch(n.tag){case 13:return null===ja?$u():null===n.alternate&&0===cu&&(cu=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===sa?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),ac(e,r,a)),!1;case 22:return n.flags|=65536,r===sa?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),ac(e,r,a)),!1}throw Error(o(435,n.tag))}return ac(e,r,a),$u(),!1}if(Qr)return null!==(t=Oa.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Zr&&ia(zr(e=Error(o(422),{cause:r}),n))):(r!==Zr&&ia(zr(t=Error(o(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,a&=-a,e.lanes|=a,r=zr(r,n),zl(e,a=Ho(e.stateNode,r,a)),4!==cu&&(cu=2)),!1;var i=Error(o(520),{cause:r});if(i=zr(i,n),null===gu?gu=[i]:gu.push(i),4!==cu&&(cu=2),null===t)return!0;r=zr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,zl(n,e=Ho(n.stateNode,r,e)),!1;case 1:if(t=n.type,i=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==i&&"function"===typeof i.componentDidCatch&&(null===ku||!ku.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,Vo(a=Wo(a),e,n,r),zl(n,a),!1}n=n.return}while(null!==n);return!1}(e,a,t,n,ru))return cu=1,Do(e,zr(n,e.current)),void(nu=null)}catch(i){if(null!==a)throw nu=a,i;return cu=1,Do(e,zr(n,e.current)),void(nu=null)}32768&t.flags?(Qr||1===r?e=!0:lu||0!==(536870912&ru)?e=!1:(ou=e=!0,(2===r||3===r||6===r)&&(null!==(r=Oa.current)&&13===r.tag&&(r.flags|=16384))),Ju(t,e)):Gu(t)}function Gu(e){var t=e;do{if(0!==(32768&t.flags))return void Ju(t,ou);e=t.return;var n=Ys(t.alternate,t,uu);if(null!==n)return void(nu=n);if(null!==(t=t.sibling))return void(nu=t);nu=t=e}while(null!==t);0===cu&&(cu=5)}function Ju(e,t){do{var n=Qs(e.alternate,e);if(null!==n)return n.flags&=32767,void(nu=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(nu=e);nu=e=n}while(null!==e);cu=6,nu=null}function Zu(e,t,n,r,a,i,l,s,u,c){var d=T.T,f=V.p;try{V.p=2,T.T=null,function(e,t,n,r,a,i,l,s){do{tc()}while(null!==Cu);if(0!==(6&eu))throw Error(o(327));var u=e.finishedWork;if(r=e.finishedLanes,null===u)return null;if(e.finishedWork=null,e.finishedLanes=0,u===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var c=u.lanes|u.childLanes;if(function(e,t,n,r,a,i){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,u=e.hiddenUpdates;for(n=o&~n;0<n;){var c=31-we(n),d=1<<c;l[c]=0,s[c]=-1;var f=u[c];if(null!==f)for(u[c]=null,c=0;c<f.length;c++){var p=f[c];null!==p&&(p.lane&=-536870913)}n&=~d}0!==r&&Re(e,r,0),0!==i&&0===a&&0!==e.tag&&(e.suspendedLanes|=i&~(o&~t))}(e,r,c|=Er,i,l,s),e===tu&&(nu=tu=null,ru=0),0===(10256&u.subtreeFlags)&&0===(10256&u.flags)||xu||(xu=!0,Pu=c,_u=n,function(e,t){ae(e,t)}(fe,(function(){return tc(),null}))),n=0!==(15990&u.flags),0!==(15990&u.subtreeFlags)||n?(n=T.T,T.T=null,i=V.p,V.p=2,l=eu,eu|=4,function(e,t){if(e=e.containerInfo,qc=$d,er(e=Zn(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(g){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==i||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===a&&(s=l),p===i&&++d===r&&(u=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xc={focusedElem:e,selectionRange:n},$d=!1,ns=t;null!==ns;)if(e=(t=ns).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,ns=e;else for(;null!==ns;){switch(i=(t=ns).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==i){e=void 0,n=t,a=i.memoizedProps,i=i.memoizedState,r=n.stateNode;try{var m=Ro(n.type,a,(n.elementType,n.type));e=r.getSnapshotBeforeUpdate(m,i),r.__reactInternalSnapshotBeforeUpdate=e}catch(y){rc(n,n.return,y)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))od(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":od(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(o(163))}if(null!==(e=t.sibling)){e.return=t.return,ns=e;break}ns=t.return}m=rs,rs=!1}(e,u),hs(u,e),tr(Xc,e.containerInfo),$d=!!qc,Xc=qc=null,e.current=u,as(e,u.alternate,u),le(),eu=l,V.p=i,T.T=n):e.current=u,xu?(xu=!1,Cu=e,Eu=r):ec(e,c),c=e.pendingLanes,0===c&&(ku=null),function(e){if(ve&&"function"===typeof ve.onCommitFiberRoot)try{ve.onCommitFiberRoot(ye,e,void 0,128===(128&e.current.flags))}catch(t){}}(u.stateNode),mc(e),null!==t)for(a=e.onRecoverableError,u=0;u<t.length;u++)c=t[u],a(c.value,{componentStack:c.stack});0!==(3&Eu)&&tc(),c=e.pendingLanes,0!==(4194218&r)&&0!==(42&c)?e===ju?Ou++:(Ou=0,ju=e):Ou=0,gc(0,!1)}(e,t,n,r,f,a,i,l)}finally{T.T=d,V.p=f}}function ec(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Wa(t)))}function tc(){if(null!==Cu){var e=Cu,t=Pu;Pu=0;var n=Le(Eu),r=T.T,a=V.p;try{if(V.p=32>n?32:n,T.T=null,null===Cu)var i=!1;else{n=_u,_u=null;var l=Cu,s=Eu;if(Cu=null,Eu=0,0!==(6&eu))throw Error(o(331));var u=eu;if(eu|=4,Ns(l.current),xs(l,l.current,s,n),eu=u,gc(0,!1),ve&&"function"===typeof ve.onPostCommitFiberRoot)try{ve.onPostCommitFiberRoot(ye,l)}catch(c){}i=!0}return i}finally{V.p=a,T.T=r,ec(e,t)}}return!1}function nc(e,t,n){t=zr(n,t),null!==(e=Al(e,t=Ho(e.stateNode,t,2),2))&&(Ae(e,2),mc(e))}function rc(e,t,n){if(3===e.tag)nc(e,e,n);else for(;null!==t;){if(3===t.tag){nc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===ku||!ku.has(r))){e=zr(n,e),null!==(r=Al(t,n=Wo(2),2))&&(Vo(n,r,t,e),Ae(r,2),mc(r));break}}t=t.return}}function ac(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new Zs;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(su=!0,a.add(n),e=ic.bind(null,e,t,n),t.then(e,e))}function ic(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,tu===e&&(ru&n)===n&&(4===cu||3===cu&&(62914560&ru)===ru&&300>se()-bu?0===(2&eu)&&Hu(e,0):pu|=n,mu===ru&&(mu=0)),mc(e)}function oc(e,t){0===t&&(t=Te()),null!==(e=jr(e,t))&&(Ae(e,t),mc(e))}function lc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),oc(e,n)}function sc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(o(314))}null!==r&&r.delete(t),oc(e,n)}var uc=null,cc=null,dc=!1,fc=!1,pc=!1,hc=0;function mc(e){var t;e!==cc&&null===e.next&&(null===cc?uc=cc=e:cc=cc.next=e),fc=!0,dc||(dc=!0,t=yc,rd((function(){0!==(6&eu)?ae(ce,t):t()})))}function gc(e,t){if(!pc&&fc){pc=!0;do{for(var n=!1,r=uc;null!==r;){if(!t)if(0!==e){var a=r.pendingLanes;if(0===a)var i=0;else{var o=r.suspendedLanes,l=r.pingedLanes;i=(1<<31-we(42|e)+1)-1,i=201326677&(i&=a&~(o&~l))?201326677&i|1:i?2|i:0}0!==i&&(n=!0,wc(r,i))}else i=ru,0===(3&(i=Pe(r,r===tu?i:0)))||_e(r,i)||(n=!0,wc(r,i));r=r.next}}while(n);pc=!1}}function yc(){fc=dc=!1;var e=0;0!==hc&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==Zc&&(Zc=e,!0);return Zc=null,!1}()&&(e=hc),hc=0);for(var t=se(),n=null,r=uc;null!==r;){var a=r.next,i=vc(r,t);0===i?(r.next=null,null===n?uc=a:n.next=a,null===a&&(cc=n)):(n=r,(0!==e||0!==(3&i))&&(fc=!0)),r=a}gc(e,!1)}function vc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=-62914561&e.pendingLanes;0<i;){var o=31-we(i),l=1<<o,s=a[o];-1===s?0!==(l&n)&&0===(l&r)||(a[o]=Oe(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}if(n=ru,n=Pe(e,e===(t=tu)?n:0),r=e.callbackNode,0===n||e===t&&2===au||null!==e.cancelPendingCommit)return null!==r&&null!==r&&ie(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||_e(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&ie(r),Le(n)){case 2:case 8:n=de;break;case 32:default:n=fe;break;case 268435456:n=he}return r=bc.bind(null,e),n=ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&ie(r),e.callbackPriority=2,e.callbackNode=null,2}function bc(e,t){var n=e.callbackNode;if(tc()&&e.callbackNode!==n)return null;var r=ru;return 0===(r=Pe(e,e===tu?r:0))?null:(Ru(e,r,t),vc(e,se()),null!=e.callbackNode&&e.callbackNode===n?bc.bind(null,e):null)}function wc(e,t){if(tc())return null;Ru(e,t,!0)}function Sc(){return 0===hc&&(hc=je()),hc}function kc(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:jt(""+e)}function xc(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Cc=0;Cc<Sr.length;Cc++){var Ec=Sr[Cc];kr(Ec.toLowerCase(),"on"+(Ec[0].toUpperCase()+Ec.slice(1)))}kr(pr,"onAnimationEnd"),kr(hr,"onAnimationIteration"),kr(mr,"onAnimationStart"),kr("dblclick","onDoubleClick"),kr("focusin","onFocus"),kr("focusout","onBlur"),kr(gr,"onTransitionRun"),kr(yr,"onTransitionStart"),kr(vr,"onTransitionCancel"),kr(br,"onTransitionEnd"),tt("onMouseEnter",["mouseout","mouseover"]),tt("onMouseLeave",["mouseout","mouseover"]),tt("onPointerEnter",["pointerout","pointerover"]),tt("onPointerLeave",["pointerout","pointerover"]),et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),et("onBeforeInput",["compositionend","keypress","textInput","paste"]),et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_c=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Pc));function Oc(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;i=l,a.currentTarget=u;try{i(a)}catch(c){zo(c)}a.currentTarget=null,i=s}else for(o=0;o<r.length;o++){if(s=(l=r[o]).instance,u=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;i=l,a.currentTarget=u;try{i(a)}catch(c){zo(c)}a.currentTarget=null,i=s}}}}function jc(e,t){var n=t[We];void 0===n&&(n=t[We]=new Set);var r=e+"__bubble";n.has(r)||(Rc(t,e,2,!1),n.add(r))}function Tc(e,t,n){var r=0;t&&(r|=4),Rc(n,e,r,t)}var Nc="_reactListening"+Math.random().toString(36).slice(2);function Ac(e){if(!e[Nc]){e[Nc]=!0,Je.forEach((function(t){"selectionchange"!==t&&(_c.has(t)||Tc(t,!1,e),Tc(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Nc]||(t[Nc]=!0,Tc("selectionchange",!1,t))}}function Rc(e,t,n,r){switch(Gd(t)){case 2:var a=Bd;break;case 8:a=Kd;break;default:a=qd}n=a.bind(null,t,n,e),a=void 0,!Dt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function zc(e,t,n,r,a){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===o)for(o=r.return;null!==o;){var s=o.tag;if((3===s||4===s)&&((s=o.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;o=o.return}for(;null!==l;){if(null===(o=qe(l)))return;if(5===(s=o.tag)||6===s||26===s||27===s){r=i=o;continue e}l=l.parentNode}}r=r.return}It((function(){var r=i,a=Nt(n),o=[];e:{var l=wr.get(e);if(void 0!==l){var s=Jt,u=e;switch(e){case"keypress":if(0===$t(n))break e;case"keydown":case"keyup":s=hn;break;case"focusin":u="focus",s=an;break;case"focusout":u="blur",s=an;break;case"beforeblur":case"afterblur":s=an;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=nn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=rn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=gn;break;case pr:case hr:case mr:s=on;break;case br:s=yn;break;case"scroll":case"scrollend":s=en;break;case"wheel":s=vn;break;case"copy":case"cut":case"paste":s=ln;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=mn;break;case"toggle":case"beforetoggle":s=bn}var c=0!==(4&t),d=!c&&("scroll"===e||"scrollend"===e),f=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=r;null!==h;){var m=h;if(p=m.stateNode,5!==(m=m.tag)&&26!==m&&27!==m||null===p||null===f||null!=(m=Mt(h,f))&&c.push(Lc(h,m,p)),d)break;h=h.return}0<c.length&&(l=new s(l,u,null,n,a),o.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===Tt||!(u=n.relatedTarget||n.fromElement)||!qe(u)&&!u[He])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?qe(u):null)&&(d=M(u),c=u.tag,u!==d||5!==c&&27!==c&&6!==c)&&(u=null)):(s=null,u=r),s!==u)){if(c=nn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=mn,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:Ye(s),p=null==u?l:Ye(u),(l=new c(m,h+"leave",s,n,a)).target=d,l.relatedTarget=p,m=null,qe(a)===r&&((c=new c(f,h+"enter",u,n,a)).target=p,c.relatedTarget=d,m=c),d=m,s&&u)e:{for(f=u,h=0,p=c=s;p;p=Mc(p))h++;for(p=0,m=f;m;m=Mc(m))p++;for(;0<h-p;)c=Mc(c),h--;for(;0<p-h;)f=Mc(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=Mc(c),f=Mc(f)}c=null}else c=null;null!==s&&Dc(o,l,s,c,!1),null!==u&&null!==d&&Dc(o,d,u,c,!0)}if("select"===(s=(l=r?Ye(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=Mn;else if(Nn(l))if(Dn)g=qn;else{g=Bn;var y=$n}else!(s=l.nodeName)||"input"!==s.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?r&&Pt(r.elementType)&&(g=Mn):g=Kn;switch(g&&(g=g(e,r))?An(o,g,n,a):(y&&y(e,l,r),"focusout"===e&&r&&"number"===l.type&&null!=r.memoizedProps.value&&vt(l,"number",l.value)),y=r?Ye(r):window,e){case"focusin":(Nn(y)||"true"===y.contentEditable)&&(rr=y,ar=r,ir=null);break;case"focusout":ir=ar=rr=null;break;case"mousedown":or=!0;break;case"contextmenu":case"mouseup":case"dragend":or=!1,lr(o,n,a);break;case"selectionchange":if(nr)break;case"keydown":case"keyup":lr(o,n,a)}var v;if(Sn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else jn?_n(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Cn&&"ko"!==n.locale&&(jn||"onCompositionStart"!==b?"onCompositionEnd"===b&&jn&&(v=Ut()):(Wt="value"in(Ht=a)?Ht.value:Ht.textContent,jn=!0)),0<(y=Ic(r,b)).length&&(b=new sn(b,e,null,n,a),o.push({event:b,listeners:y}),v?b.data=v:null!==(v=On(n))&&(b.data=v))),(v=xn?function(e,t){switch(e){case"compositionend":return On(t);case"keypress":return 32!==t.which?null:(Pn=!0,En);case"textInput":return(e=t.data)===En&&Pn?null:e;default:return null}}(e,n):function(e,t){if(jn)return"compositionend"===e||!Sn&&_n(e,t)?(e=Ut(),Vt=Wt=Ht=null,jn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(b=Ic(r,"onBeforeInput")).length&&(y=new sn("onBeforeInput","beforeinput",null,n,a),o.push({event:y,listeners:b}),y.data=v)),function(e,t,n,r,a){if("submit"===t&&n&&n.stateNode===a){var i=kc((a[Fe]||null).action),o=r.submitter;o&&null!==(t=(t=o[Fe]||null)?kc(t.formAction):o.getAttribute("formAction"))&&(i=t,o=null);var l=new Jt("action","action",null,r,a);e.push({event:l,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==hc){var e=o?xc(a,o):new FormData(a);co(n,{pending:!0,data:e,method:a.method,action:i},null,e)}}else"function"===typeof i&&(l.preventDefault(),e=o?xc(a,o):new FormData(a),co(n,{pending:!0,data:e,method:a.method,action:i},i,e))},currentTarget:a}]})}}(o,e,r,n,a)}Oc(o,t)}))}function Lc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ic(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,i=a.stateNode;5!==(a=a.tag)&&26!==a&&27!==a||null===i||(null!=(a=Mt(e,n))&&r.unshift(Lc(e,a,i)),null!=(a=Mt(e,t))&&r.push(Lc(e,a,i))),e=e.return}return r}function Mc(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Dc(e,t,n,r,a){for(var i=t._reactName,o=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(l=l.tag,null!==s&&s===r)break;5!==l&&26!==l&&27!==l||null===u||(s=u,a?null!=(u=Mt(n,i))&&o.unshift(Lc(n,u,s)):a||null!=(u=Mt(n,i))&&o.push(Lc(n,u,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Fc=/\r\n?/g,Hc=/\u0000|\uFFFD/g;function Wc(e){return("string"===typeof e?e:""+e).replace(Fc,"\n").replace(Hc,"")}function Vc(e,t){return t=Wc(t),Wc(e)===t}function Uc(){}function $c(e,t,n,r,a,i){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||kt(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&kt(e,""+r);break;case"className":lt(e,"class",r);break;case"tabIndex":lt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":lt(e,n,r);break;case"style":Et(e,r,i);break;case"data":if("object"!==t){lt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=jt(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof i&&("formAction"===n?("input"!==t&&$c(e,t,"name",a.name,a,null),$c(e,t,"formEncType",a.formEncType,a,null),$c(e,t,"formMethod",a.formMethod,a,null),$c(e,t,"formTarget",a.formTarget,a,null)):($c(e,t,"encType",a.encType,a,null),$c(e,t,"method",a.method,a,null),$c(e,t,"target",a.target,a,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=jt(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Uc);break;case"onScroll":null!=r&&jc("scroll",e);break;case"onScrollEnd":null!=r&&jc("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=jt(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":jc("beforetoggle",e),jc("toggle",e),ot(e,"popover",r);break;case"xlinkActuate":st(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":st(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":st(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":st(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":st(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":st(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":st(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":st(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":st(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ot(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&ot(e,n=_t.get(n)||n,r)}}function Bc(e,t,n,r,a,i){switch(n){case"style":Et(e,r,i);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(o(60));e.innerHTML=n}}break;case"children":"string"===typeof r?kt(e,r):("number"===typeof r||"bigint"===typeof r)&&kt(e,""+r);break;case"onScroll":null!=r&&jc("scroll",e);break;case"onScrollEnd":null!=r&&jc("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Uc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Ze.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),"function"===typeof(i=null!=(i=e[Fe]||null)?i[n]:null)&&e.removeEventListener(t,i,a),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):ot(e,n,r):("function"!==typeof i&&null!==i&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a)))}}function Kc(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":jc("error",e),jc("load",e);var r,a=!1,i=!1;for(r in n)if(n.hasOwnProperty(r)){var l=n[r];if(null!=l)switch(r){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:$c(e,t,r,l,n,null)}}return i&&$c(e,t,"srcSet",n.srcSet,n,null),void(a&&$c(e,t,"src",n.src,n,null));case"input":jc("invalid",e);var s=r=l=i=null,u=null,c=null;for(a in n)if(n.hasOwnProperty(a)){var d=n[a];if(null!=d)switch(a){case"name":i=d;break;case"type":l=d;break;case"checked":u=d;break;case"defaultChecked":c=d;break;case"value":r=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(o(137,t));break;default:$c(e,t,a,d,n,null)}}return yt(e,r,s,u,c,l,i,!1),void dt(e);case"select":for(i in jc("invalid",e),a=l=r=null,n)if(n.hasOwnProperty(i)&&null!=(s=n[i]))switch(i){case"value":r=s;break;case"defaultValue":l=s;break;case"multiple":a=s;default:$c(e,t,i,s,n,null)}return t=r,n=l,e.multiple=!!a,void(null!=t?bt(e,!!a,t,!1):null!=n&&bt(e,!!a,n,!0));case"textarea":for(l in jc("invalid",e),r=i=a=null,n)if(n.hasOwnProperty(l)&&null!=(s=n[l]))switch(l){case"value":a=s;break;case"defaultValue":i=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(o(91));break;default:$c(e,t,l,s,n,null)}return St(e,a,i,r),void dt(e);case"option":for(u in n)if(n.hasOwnProperty(u)&&null!=(a=n[u]))if("selected"===u)e.selected=a&&"function"!==typeof a&&"symbol"!==typeof a;else $c(e,t,u,a,n,null);return;case"dialog":jc("cancel",e),jc("close",e);break;case"iframe":case"object":jc("load",e);break;case"video":case"audio":for(a=0;a<Pc.length;a++)jc(Pc[a],e);break;case"image":jc("error",e),jc("load",e);break;case"details":jc("toggle",e);break;case"embed":case"source":case"link":jc("error",e),jc("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&null!=(a=n[c]))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:$c(e,t,c,a,n,null)}return;default:if(Pt(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(a=n[d])&&Bc(e,t,d,a,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(null!=(a=n[s])&&$c(e,t,s,a,n,null))}var qc=null,Xc=null;function Yc(e){return 9===e.nodeType?e:e.ownerDocument}function Qc(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gc(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function Jc(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Zc=null;var ed="function"===typeof setTimeout?setTimeout:void 0,td="function"===typeof clearTimeout?clearTimeout:void 0,nd="function"===typeof Promise?Promise:void 0,rd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof nd?function(e){return nd.resolve(null).then(e).catch(ad)}:ed;function ad(e){setTimeout((function(){throw e}))}function id(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void gf(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);gf(t)}function od(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":od(n),Ke(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function ld(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}function sd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function ud(e,t,n){switch(t=Yc(n),e){case"html":if(!(e=t.documentElement))throw Error(o(452));return e;case"head":if(!(e=t.head))throw Error(o(453));return e;case"body":if(!(e=t.body))throw Error(o(454));return e;default:throw Error(o(451))}}var cd=new Map,dd=new Set;function fd(e){return"function"===typeof e.getRootNode?e.getRootNode():e.ownerDocument}var pd=V.d;V.d={f:function(){var e=pd.f(),t=Du();return e||t},r:function(e){var t=Xe(e);null!==t&&5===t.tag&&"form"===t.type?po(t):pd.r(e)},D:function(e){pd.D(e),md("dns-prefetch",e,null)},C:function(e,t){pd.C(e,t),md("preconnect",e,t)},L:function(e,t,n){pd.L(e,t,n);var r=hd;if(r&&e&&t){var a='link[rel="preload"][as="'+mt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(a+='[imagesrcset="'+mt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(a+='[imagesizes="'+mt(n.imageSizes)+'"]')):a+='[href="'+mt(e)+'"]';var i=a;switch(t){case"style":i=yd(e);break;case"script":i=wd(e)}cd.has(i)||(e=N({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),cd.set(i,e),null!==r.querySelector(a)||"style"===t&&r.querySelector(vd(i))||"script"===t&&r.querySelector(Sd(i))||(Kc(t=r.createElement("link"),"link",e),Ge(t),r.head.appendChild(t)))}},m:function(e,t){pd.m(e,t);var n=hd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",a='link[rel="modulepreload"][as="'+mt(r)+'"][href="'+mt(e)+'"]',i=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=wd(e)}if(!cd.has(i)&&(e=N({rel:"modulepreload",href:e},t),cd.set(i,e),null===n.querySelector(a))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Sd(i)))return}Kc(r=n.createElement("link"),"link",e),Ge(r),n.head.appendChild(r)}}},X:function(e,t){pd.X(e,t);var n=hd;if(n&&e){var r=Qe(n).hoistableScripts,a=wd(e),i=r.get(a);i||((i=n.querySelector(Sd(a)))||(e=N({src:e,async:!0},t),(t=cd.get(a))&&Ed(e,t),Ge(i=n.createElement("script")),Kc(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(a,i))}},S:function(e,t,n){pd.S(e,t,n);var r=hd;if(r&&e){var a=Qe(r).hoistableStyles,i=yd(e);t=t||"default";var o=a.get(i);if(!o){var l={loading:0,preload:null};if(o=r.querySelector(vd(i)))l.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},n),(n=cd.get(i))&&Cd(e,n);var s=o=r.createElement("link");Ge(s),Kc(s,"link",e),s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),s.addEventListener("load",(function(){l.loading|=1})),s.addEventListener("error",(function(){l.loading|=2})),l.loading|=4,xd(o,t,r)}o={type:"stylesheet",instance:o,count:1,state:l},a.set(i,o)}}},M:function(e,t){pd.M(e,t);var n=hd;if(n&&e){var r=Qe(n).hoistableScripts,a=wd(e),i=r.get(a);i||((i=n.querySelector(Sd(a)))||(e=N({src:e,async:!0,type:"module"},t),(t=cd.get(a))&&Ed(e,t),Ge(i=n.createElement("script")),Kc(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(a,i))}}};var hd="undefined"===typeof document?null:document;function md(e,t,n){var r=hd;if(r&&"string"===typeof t&&t){var a=mt(t);a='link[rel="'+e+'"][href="'+a+'"]',"string"===typeof n&&(a+='[crossorigin="'+n+'"]'),dd.has(a)||(dd.add(a),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(a)&&(Kc(t=r.createElement("link"),"link",e),Ge(t),r.head.appendChild(t)))}}function gd(e,t,n,r){var a,i,l,s,u=(u=G.current)?fd(u):null;if(!u)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=yd(n.href),(r=(n=Qe(u).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=yd(n.href);var c=Qe(u).hoistableStyles,d=c.get(e);if(d||(u=u.ownerDocument||u,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,d),(c=u.querySelector(vd(e)))&&!c._p&&(d.instance=c,d.state.loading=5),cd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},cd.set(e,n),c||(a=u,i=e,l=n,s=d.state,a.querySelector('link[rel="preload"][as="style"]['+i+"]")?s.loading=1:(i=a.createElement("link"),s.preload=i,i.addEventListener("load",(function(){return s.loading|=1})),i.addEventListener("error",(function(){return s.loading|=2})),Kc(i,"link",l),Ge(i),a.head.appendChild(i))))),t&&null===r)throw Error(o(528,""));return d}if(t&&null!==r)throw Error(o(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=wd(n),(r=(n=Qe(u).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function yd(e){return'href="'+mt(e)+'"'}function vd(e){return'link[rel="stylesheet"]['+e+"]"}function bd(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function wd(e){return'[src="'+mt(e)+'"]'}function Sd(e){return"script[async]"+e}function kd(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+mt(n.href)+'"]');if(r)return t.instance=r,Ge(r),r;var a=N({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return Ge(r=(e.ownerDocument||e).createElement("style")),Kc(r,"style",a),xd(r,n.precedence,e),t.instance=r;case"stylesheet":a=yd(n.href);var i=e.querySelector(vd(a));if(i)return t.state.loading|=4,t.instance=i,Ge(i),i;r=bd(n),(a=cd.get(a))&&Cd(r,a),Ge(i=(e.ownerDocument||e).createElement("link"));var l=i;return l._p=new Promise((function(e,t){l.onload=e,l.onerror=t})),Kc(i,"link",r),t.state.loading|=4,xd(i,n.precedence,e),t.instance=i;case"script":return i=wd(n.src),(a=e.querySelector(Sd(i)))?(t.instance=a,Ge(a),a):(r=n,(a=cd.get(i))&&Ed(r=N({},n),a),Ge(a=(e=e.ownerDocument||e).createElement("script")),Kc(a,"link",r),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(o(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,xd(r,n.precedence,e));return t.instance}function xd(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,i=a,o=0;o<r.length;o++){var l=r[o];if(l.dataset.precedence===t)i=l;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Cd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Ed(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Pd=null;function _d(e,t,n){if(null===Pd){var r=new Map,a=Pd=new Map;a.set(n,r)}else(r=(a=Pd).get(n))||(r=new Map,a.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var i=n[a];if(!(i[Be]||i[De]||"link"===e&&"stylesheet"===i.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==i.namespaceURI){var o=i.getAttribute(t)||"";o=e+o;var l=r.get(o);l?l.push(i):r.set(o,[i])}}return r}function Od(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function jd(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var Td=null;function Nd(){}function Ad(){if(this.count--,0===this.count)if(this.stylesheets)zd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var Rd=null;function zd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Rd=new Map,t.forEach(Ld,e),Rd=null,Ad.call(e))}function Ld(e,t){if(!(4&t.state.loading)){var n=Rd.get(e);if(n)var r=n.get(null);else{n=new Map,Rd.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var o=a[i];"LINK"!==o.nodeName&&"not all"===o.getAttribute("media")||(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}o=(a=t.instance).getAttribute("data-precedence"),(i=n.get(o)||r)===r&&n.set(null,a),n.set(o,a),this.count++,r=Ad.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),i?i.parentNode.insertBefore(a,i.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}var Id={$$typeof:g,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function Md(e,t,n,r,a,i,o,l){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ne(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ne(0),this.hiddenUpdates=Ne(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Dd(e,t,n,r,a,i,o,l,s,u,c,d){return e=new Md(e,t,n,o,l,s,u,d),t=1,!0===i&&(t|=24),i=Ls(3,null,null,t),e.current=i,i.stateNode=e,(t=Ha()).refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:r,isDehydrated:n,cache:t},jl(i),e}function Fd(e){return e?e=Ar:Ar}function Hd(e,t,n,r,a,i){a=Fd(a),null===r.context?r.context=a:r.pendingContext=a,(r=Nl(t)).payload={element:n},null!==(i=void 0===i?null:i)&&(r.callback=i),null!==(n=Al(e,r,t))&&(Au(n,0,t),Rl(n,e,t))}function Wd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Vd(e,t){Wd(e,t),(e=e.alternate)&&Wd(e,t)}function Ud(e){if(13===e.tag){var t=jr(e,67108864);null!==t&&Au(t,0,67108864),Vd(e,67108864)}}var $d=!0;function Bd(e,t,n,r){var a=T.T;T.T=null;var i=V.p;try{V.p=2,qd(e,t,n,r)}finally{V.p=i,T.T=a}}function Kd(e,t,n,r){var a=T.T;T.T=null;var i=V.p;try{V.p=8,qd(e,t,n,r)}finally{V.p=i,T.T=a}}function qd(e,t,n,r){if($d){var a=Xd(r);if(null===a)zc(e,t,r,Yd,n),lf(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Zd=sf(Zd,e,t,n,r,a),!0;case"dragenter":return ef=sf(ef,e,t,n,r,a),!0;case"mouseover":return tf=sf(tf,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return nf.set(i,sf(nf.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,rf.set(i,sf(rf.get(i)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(lf(e,r),4&t&&-1<of.indexOf(e)){for(;null!==a;){var i=Xe(a);if(null!==i)switch(i.tag){case 3:if((i=i.stateNode).current.memoizedState.isDehydrated){var o=Ee(i.pendingLanes);if(0!==o){var l=i;for(l.pendingLanes|=2,l.entangledLanes|=2;o;){var s=1<<31-we(o);l.entanglements[1]|=s,o&=~s}mc(i),0===(6&eu)&&(wu=se()+500,gc(0,!1))}}break;case 13:null!==(l=jr(i,2))&&Au(l,0,2),Du(),Vd(i,2)}if(null===(i=Xd(r))&&zc(e,t,r,Yd,n),i===a)break;a=i}null!==a&&r.stopPropagation()}else zc(e,t,r,null,n)}}function Xd(e){return Qd(e=Nt(e))}var Yd=null;function Qd(e){if(Yd=null,null!==(e=qe(e))){var t=M(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=D(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Yd=e,null}function Gd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ue()){case ce:return 2;case de:return 8;case fe:case pe:return 32;case he:return 268435456;default:return 32}default:return 32}}var Jd=!1,Zd=null,ef=null,tf=null,nf=new Map,rf=new Map,af=[],of="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lf(e,t){switch(e){case"focusin":case"focusout":Zd=null;break;case"dragenter":case"dragleave":ef=null;break;case"mouseover":case"mouseout":tf=null;break;case"pointerover":case"pointerout":nf.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rf.delete(t.pointerId)}}function sf(e,t,n,r,a,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},null!==t&&(null!==(t=Xe(t))&&Ud(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function uf(e){var t=qe(e.target);if(null!==t){var n=M(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=D(n)))return e.blockedOn=t,void function(e,t){var n=V.p;try{return V.p=e,t()}finally{V.p=n}}(e.priority,(function(){if(13===n.tag){var e=Tu(),t=jr(n,e);null!==t&&Au(t,0,e),Vd(n,e)}}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function cf(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xd(e.nativeEvent);if(null!==n)return null!==(t=Xe(n))&&Ud(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Tt=r,n.target.dispatchEvent(r),Tt=null,t.shift()}return!0}function df(e,t,n){cf(e)&&n.delete(t)}function ff(){Jd=!1,null!==Zd&&cf(Zd)&&(Zd=null),null!==ef&&cf(ef)&&(ef=null),null!==tf&&cf(tf)&&(tf=null),nf.forEach(df),rf.forEach(df)}function pf(e,t){e.blockedOn===t&&(e.blockedOn=null,Jd||(Jd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ff)))}var hf=null;function mf(e){hf!==e&&(hf=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,(function(){hf===e&&(hf=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],a=e[t+2];if("function"!==typeof r){if(null===Qd(r||n))continue;break}var i=Xe(n);null!==i&&(e.splice(t,3),t-=3,co(i,{pending:!0,data:a,method:n.method,action:r},r,a))}})))}function gf(e){function t(t){return pf(t,e)}null!==Zd&&pf(Zd,e),null!==ef&&pf(ef,e),null!==tf&&pf(tf,e),nf.forEach(t),rf.forEach(t);for(var n=0;n<af.length;n++){var r=af[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<af.length&&null===(n=af[0]).blockedOn;)uf(n),null===n.blockedOn&&af.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var a=n[r],i=n[r+1],o=a[Fe]||null;if("function"===typeof i)o||mf(n);else if(o){var l=null;if(i&&i.hasAttribute("formAction")){if(a=i,o=i[Fe]||null)l=o.formAction;else if(null!==Qd(a))continue}else l=o.action;"function"===typeof l?n[r+1]=l:(n.splice(r,3),r-=3),mf(n)}}}function yf(e){this._internalRoot=e}function vf(e){this._internalRoot=e}vf.prototype.render=yf.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Hd(t.current,Tu(),e,t,null,null)},vf.prototype.unmount=yf.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;0===e.tag&&tc(),Hd(e.current,2,null,e,null,null),Du(),t[He]=null}},vf.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ie();e={blockedOn:null,target:e,priority:t};for(var n=0;n<af.length&&0!==t&&t<af[n].priority;n++);af.splice(n,0,e),0===n&&uf(e)}};var bf=a.version;if("19.0.0"!==bf)throw Error(o(527,bf,"19.0.0"));V.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=M(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return F(a),e;if(i===r)return F(a),t;i=i.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?H(e):null)?null:e.stateNode};var wf={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:T,findFiberByHostInstance:qe,reconcilerVersion:"19.0.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Sf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sf.isDisabled&&Sf.supportsFiber)try{ye=Sf.inject(wf),ve=Sf}catch(xf){}}t.createRoot=function(e,t){if(!l(e))throw Error(o(299));var n=!1,r="",a=Lo,i=Io,s=Mo;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(a=t.onUncaughtError),void 0!==t.onCaughtError&&(i=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Dd(e,1,!1,null,0,n,r,a,i,s,0,null),e[He]=t.current,Ac(8===e.nodeType?e.parentNode:e),new yf(t)},t.hydrateRoot=function(e,t,n){if(!l(e))throw Error(o(299));var r=!1,a="",i=Lo,s=Io,u=Mo,c=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onUncaughtError&&(i=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(u=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(c=n.formState)),(t=Dd(e,1,!0,t,0,r,a,i,s,u,0,c)).context=Fd(null),n=t.current,(a=Nl(r=Tu())).callback=null,Al(n,a,r),t.current.lanes=r,Ae(t,r),mc(t),e[He]=t.current,Ac(e),new vf(t)},t.version="19.0.0"},7251:function(e,t,n){var r,a,i;a=[t,n(75)],r=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(t);function r(e){return e&&e.__esModule?e:{default:e}}e.default=n.default},void 0===(i="function"===typeof r?r.apply(t,a):r)||(e.exports=i)},7324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var u=i[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(a=n?n.call(r,c,d,u):void 0)||void 0===a&&c!==d)return!1}return!0}},7950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(6672)},8139:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=o(e,i(n)))}return e}function i(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=o(t,n));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},8226:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fadeAnimationHandler=t.slideStopSwipingHandler=t.slideSwipeAnimationHandler=t.slideAnimationHandler=void 0;var r,a=n(5043),i=(r=n(178))&&r.__esModule?r:{default:r},o=n(564);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.slideAnimationHandler=function(e,t){var n={},r=t.selectedItem,l=r,u=a.Children.count(e.children)-1;if(e.infiniteLoop&&(r<0||r>u))return l<0?e.centerMode&&e.centerSlidePercentage&&"horizontal"===e.axis?n.itemListStyle=(0,o.setPosition)(-(u+2)*e.centerSlidePercentage-(100-e.centerSlidePercentage)/2,e.axis):n.itemListStyle=(0,o.setPosition)(100*-(u+2),e.axis):l>u&&(n.itemListStyle=(0,o.setPosition)(0,e.axis)),n;var c=(0,o.getPosition)(r,e),d=(0,i.default)(c,"%",e.axis),f=e.transitionTime+"ms";return n.itemListStyle={WebkitTransform:d,msTransform:d,OTransform:d,transform:d},t.swiping||(n.itemListStyle=s(s({},n.itemListStyle),{},{WebkitTransitionDuration:f,MozTransitionDuration:f,OTransitionDuration:f,transitionDuration:f,msTransitionDuration:f})),n};t.slideSwipeAnimationHandler=function(e,t,n,r){var i={},l="horizontal"===t.axis,s=a.Children.count(t.children),u=(0,o.getPosition)(n.selectedItem,t),c=t.infiniteLoop?(0,o.getPosition)(s-1,t)-100:(0,o.getPosition)(s-1,t),d=l?e.x:e.y,f=d;0===u&&d>0&&(f=0),u===c&&d<0&&(f=0);var p=u+100/(n.itemSize/f),h=Math.abs(d)>t.swipeScrollTolerance;return t.infiniteLoop&&h&&(0===n.selectedItem&&p>-100?p-=100*s:n.selectedItem===s-1&&p<100*-s&&(p+=100*s)),(!t.preventMovementUntilSwipeScrollTolerance||h||n.swipeMovementStarted)&&(n.swipeMovementStarted||r({swipeMovementStarted:!0}),i.itemListStyle=(0,o.setPosition)(p,t.axis)),h&&!n.cancelClick&&r({cancelClick:!0}),i};t.slideStopSwipingHandler=function(e,t){var n=(0,o.getPosition)(t.selectedItem,e);return{itemListStyle:(0,o.setPosition)(n,e.axis)}};t.fadeAnimationHandler=function(e,t){var n=e.transitionTime+"ms",r="ease-in-out",a={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:r,msTransitionTimingFunction:r,MozTransitionTimingFunction:r,WebkitTransitionTimingFunction:r,OTransitionTimingFunction:r};return t.swiping||(a=s(s({},a),{},{WebkitTransitionDuration:n,MozTransitionDuration:n,OTransitionDuration:n,transitionDuration:n,msTransitionDuration:n})),{slideStyle:a,selectedStyle:s(s({},a),{},{opacity:1,position:"relative"}),prevStyle:s({},a)}}},8656:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(8139))&&r.__esModule?r:{default:r};var i={ROOT:function(e){return(0,a.default)(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({"carousel-root":!0},e||"",!!e))},CAROUSEL:function(e){return(0,a.default)({carousel:!0,"carousel-slider":e})},WRAPPER:function(e,t){return(0,a.default)({"thumbs-wrapper":!e,"slider-wrapper":e,"axis-horizontal":"horizontal"===t,"axis-vertical":"horizontal"!==t})},SLIDER:function(e,t){return(0,a.default)({thumbs:!e,slider:e,animated:!t})},ITEM:function(e,t,n){return(0,a.default)({thumb:!e,slide:e,selected:t,previous:n})},ARROW_PREV:function(e){return(0,a.default)({"control-arrow control-prev":!0,"control-disabled":e})},ARROW_NEXT:function(e){return(0,a.default)({"control-arrow control-next":!0,"control-disabled":e})},DOT:function(e){return(0,a.default)({dot:!0,selected:e})}};t.default=i},8853:(e,t,n)=>{"use strict";e.exports=n(5896)},9386:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){return window}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var o={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,n.d(i,o),i}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",n.nc=void 0,(()=>{"use strict";var e=n(5043),t=n.t(e,2),r=n(4391),a=n(2086),i=n(7324),o=n.n(i);const l=function(e){function t(e,r,s,u,f){for(var p,h,m,g,w,k=0,x=0,C=0,E=0,P=0,A=0,z=m=p=0,I=0,M=0,D=0,F=0,H=s.length,W=H-1,V="",U="",$="",B="";I<H;){if(h=s.charCodeAt(I),I===W&&0!==x+E+C+k&&(0!==x&&(h=47===x?10:47),E=C=k=0,H++,W++),0===x+E+C+k){if(I===W&&(0<M&&(V=V.replace(d,"")),0<V.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:V+=s.charAt(I)}h=59}switch(h){case 123:for(p=(V=V.trim()).charCodeAt(0),m=1,F=++I;I<H;){switch(h=s.charCodeAt(I)){case 123:m++;break;case 125:m--;break;case 47:switch(h=s.charCodeAt(I+1)){case 42:case 47:e:{for(z=I+1;z<W;++z)switch(s.charCodeAt(z)){case 47:if(42===h&&42===s.charCodeAt(z-1)&&I+2!==z){I=z+1;break e}break;case 10:if(47===h){I=z+1;break e}}I=z}}break;case 91:h++;case 40:h++;case 34:case 39:for(;I++<W&&s.charCodeAt(I)!==h;);}if(0===m)break;I++}if(m=s.substring(F,I),0===p&&(p=(V=V.replace(c,"").trim()).charCodeAt(0)),64===p){switch(0<M&&(V=V.replace(d,"")),h=V.charCodeAt(1)){case 100:case 109:case 115:case 45:M=r;break;default:M=N}if(F=(m=t(r,M,m,h,f+1)).length,0<R&&(w=l(3,m,M=n(N,V,D),r,O,_,F,h,f,u),V=M.join(""),void 0!==w&&0===(F=(m=w.trim()).length)&&(h=0,m="")),0<F)switch(h){case 115:V=V.replace(S,o);case 100:case 109:case 45:m=V+"{"+m+"}";break;case 107:m=(V=V.replace(y,"$1 $2"))+"{"+m+"}",m=1===T||2===T&&i("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=V+m,112===u&&(U+=m,m="")}else m=""}else m=t(r,n(r,V,D),m,u,f+1);$+=m,m=D=M=z=p=0,V="",h=s.charCodeAt(++I);break;case 125:case 59:if(1<(F=(V=(0<M?V.replace(d,""):V).trim()).length))switch(0===z&&(p=V.charCodeAt(0),45===p||96<p&&123>p)&&(F=(V=V.replace(" ",":")).length),0<R&&void 0!==(w=l(1,V,r,e,O,_,U.length,u,f,u))&&0===(F=(V=w.trim()).length)&&(V="\0\0"),p=V.charCodeAt(0),h=V.charCodeAt(1),p){case 0:break;case 64:if(105===h||99===h){B+=V+s.charAt(I);break}default:58!==V.charCodeAt(F-1)&&(U+=a(V,p,h,V.charCodeAt(2)))}D=M=z=p=0,V="",h=s.charCodeAt(++I)}}switch(h){case 13:case 10:47===x?x=0:0===1+p&&107!==u&&0<V.length&&(M=1,V+="\0"),0<R*L&&l(0,V,r,e,O,_,U.length,u,f,u),_=1,O++;break;case 59:case 125:if(0===x+E+C+k){_++;break}default:switch(_++,g=s.charAt(I),h){case 9:case 32:if(0===E+k+x)switch(P){case 44:case 58:case 9:case 32:g="";break;default:32!==h&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===E+x+k&&(M=D=1,g="\f"+g);break;case 108:if(0===E+x+k+j&&0<z)switch(I-z){case 2:112===P&&58===s.charCodeAt(I-3)&&(j=P);case 8:111===A&&(j=A)}break;case 58:0===E+x+k&&(z=I);break;case 44:0===x+C+E+k&&(M=1,g+="\r");break;case 34:case 39:0===x&&(E=E===h?0:0===E?h:E);break;case 91:0===E+x+C&&k++;break;case 93:0===E+x+C&&k--;break;case 41:0===E+x+k&&C--;break;case 40:if(0===E+x+k){if(0===p)if(2*P+3*A===533);else p=1;C++}break;case 64:0===x+C+E+k+z+m&&(m=1);break;case 42:case 47:if(!(0<E+k+C))switch(x){case 0:switch(2*h+3*s.charCodeAt(I+1)){case 235:x=47;break;case 220:F=I,x=42}break;case 42:47===h&&42===P&&F+2!==I&&(33===s.charCodeAt(F+2)&&(U+=s.substring(F,I+1)),g="",x=0)}}0===x&&(V+=g)}A=P,P=h,I++}if(0<(F=U.length)){if(M=r,0<R&&(void 0!==(w=l(2,U,M,e,O,_,F,u,f,u))&&0===(U=w).length))return B+U+$;if(U=M.join(",")+"{"+U+"}",0!==T*j){switch(2!==T||i(U,2)||(j=0),j){case 111:U=U.replace(b,":-moz-$1")+U;break;case 112:U=U.replace(v,"::-webkit-input-$1")+U.replace(v,"::-moz-$1")+U.replace(v,":-ms-input-$1")+U}j=0}}return B+U+$}function n(e,t,n){var a=t.trim().split(m);t=a;var i=a.length,o=e.length;switch(o){case 0:case 1:var l=0;for(e=0===o?"":e[0]+" ";l<i;++l)t[l]=r(e,t[l],n).trim();break;default:var s=l=0;for(t=[];l<i;++l)for(var u=0;u<o;++u)t[s++]=r(e[u]+" ",a[l],n).trim()}return t}function r(e,t,n){var r=t.charCodeAt(0);switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*n&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function a(e,t,n,r){var o=e+";",l=2*t+3*n+4*r;if(944===l){e=o.indexOf(":",9)+1;var s=o.substring(e,o.length-1).trim();return s=o.substring(0,e).trim()+s+";",1===T||2===T&&i(s,1)?"-webkit-"+s+s:s}if(0===T||2===T&&!i(o,1))return o;switch(l){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(P,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(s=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+s+o;case 1005:return p.test(o)?o.replace(f,":-webkit-")+o.replace(f,":-moz-")+o:o;case 1e3:switch(t=(s=o.substring(13).trim()).indexOf("-")+1,s.charCodeAt(0)+s.charCodeAt(t)){case 226:s=o.replace(w,"tb");break;case 232:s=o.replace(w,"tb-rl");break;case 220:s=o.replace(w,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+s+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,l=(s=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|s.charCodeAt(7))){case 203:if(111>s.charCodeAt(8))break;case 115:o=o.replace(s,"-webkit-"+s)+";"+o;break;case 207:case 102:o=o.replace(s,"-webkit-"+(102<l?"inline-":"")+"box")+";"+o.replace(s,"-webkit-"+s)+";"+o.replace(s,"-ms-"+s+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return s=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+s+"-ms-flex-"+s+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(x,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(x,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===E.test(e))return 115===(s=e.substring(e.indexOf(":")+1)).charCodeAt(0)?a(e.replace("stretch","fill-available"),t,n,r).replace(":fill-available",":stretch"):o.replace(s,"-webkit-"+s)+o.replace(s,"-moz-"+s.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===n+r&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+o}return o}function i(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10);return n=e.substring(n+1,e.length-1),z(2!==t?r:r.replace(C,"$1"),n,t)}function o(e,t){var n=a(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(k," or ($1)").substring(4):"("+t+")"}function l(e,t,n,r,a,i,o,l,s,c){for(var d,f=0,p=t;f<R;++f)switch(d=A[f].call(u,e,p,n,r,a,i,o,l,s,c)){case void 0:case!1:case!0:case null:break;default:p=d}if(p!==t)return p}function s(e){return void 0!==(e=e.prefix)&&(z=null,e?"function"!==typeof e?T=1:(T=2,z=e):T=0),s}function u(e,n){var r=e;if(33>r.charCodeAt(0)&&(r=r.trim()),r=[r],0<R){var a=l(-1,n,r,r,O,_,0,0,0,0);void 0!==a&&"string"===typeof a&&(n=a)}var i=t(N,r,n,0,0);return 0<R&&(void 0!==(a=l(-2,i,r,r,O,_,i.length,0,0,0))&&(i=a)),j=0,_=O=1,i}var c=/^\0+/g,d=/[\0\r\f]/g,f=/: */g,p=/zoo|gra/,h=/([,: ])(transform)/g,m=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,y=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,b=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,S=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,x=/-self|flex-/g,C=/[^]*?(:[rp][el]a[\w-]+)[^]*/,E=/stretch|:\s*\w+\-(?:conte|avail)/,P=/([^-])(image-set\()/,_=1,O=1,j=0,T=1,N=[],A=[],R=0,z=null,L=0;return u.use=function e(t){switch(t){case void 0:case null:R=A.length=0;break;default:if("function"===typeof t)A[R++]=t;else if("object"===typeof t)for(var n=0,r=t.length;n<r;++n)e(t[n]);else L=0|!!t}return e},u.set=s,void 0!==e&&s(e),u};const s={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function u(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var c=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,d=u((function(e){return c.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),f=n(219),p=n.n(f);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=function(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n},g=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,a.typeOf)(e)},y=Object.freeze([]),v=Object.freeze({});function b(e){return"function"==typeof e}function w(e){return e.displayName||e.name||"Component"}function S(e){return e&&"string"==typeof e.styledComponentId}var k="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",x="undefined"!=typeof window&&"HTMLElement"in window,C=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&(void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY))),E={};function P(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var _=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)(a<<=1)<0&&P(16,""+e);this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=r;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),l=0,s=t.length;l<s;l++)this.tag.insertRule(o,t[l])&&(this.groupSizes[e]++,o++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,i=r;i<a;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),O=new Map,j=new Map,T=1,N=function(e){if(O.has(e))return O.get(e);for(;j.has(T);)T++;var t=T++;return O.set(e,t),j.set(t,e),t},A=function(e){return j.get(e)},R=function(e,t){t>=T&&(T=t+1),O.set(e,t),j.set(t,e)},z="style["+k+'][data-styled-version="5.3.11"]',L=new RegExp("^"+k+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),I=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},M=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],a=0,i=n.length;a<i;a++){var o=n[a].trim();if(o){var l=o.match(L);if(l){var s=0|parseInt(l[1],10),u=l[2];0!==s&&(R(u,s),I(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(o)}}},D=function(){return n.nc},F=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(k))return r}}(n),i=void 0!==a?a.nextSibling:null;r.setAttribute(k,"active"),r.setAttribute("data-styled-version","5.3.11");var o=D();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},H=function(){function e(e){var t=this.element=F(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}P(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),W=function(){function e(e){var t=this.element=F(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),V=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),U=x,$={isServer:!x,useCSSOMInjection:!C},B=function(){function e(e,t,n){void 0===e&&(e=v),void 0===t&&(t={}),this.options=h({},$,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&x&&U&&(U=!1,function(e){for(var t=document.querySelectorAll(z),n=0,r=t.length;n<r;n++){var a=t[n];a&&"active"!==a.getAttribute(k)&&(M(e,a),a.parentNode&&a.parentNode.removeChild(a))}}(this))}e.registerId=function(e){return N(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(h({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,a=t.target,e=n?new V(a):r?new H(a):new W(a),new _(e)));var e,t,n,r,a},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(N(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(N(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(N(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=0;a<n;a++){var i=A(a);if(void 0!==i){var o=e.names.get(i),l=t.getGroup(a);if(o&&l&&o.size){var s=k+".g"+a+'[id="'+i+'"]',u="";void 0!==o&&o.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+l+s+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),K=/(a)(d)/gi,q=function(e){return String.fromCharCode(e+(e>25?39:97))};function X(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=q(t%52)+n;return(q(t%52)+n).replace(K,"$1-$2")}var Y=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Q=function(e){return Y(5381,e)};function G(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!S(n))return!1}return!0}var J=Q("5.3.11"),Z=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&G(e),this.componentId=t,this.baseHash=Y(J,t),this.baseStyle=n,B.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))a.push(this.staticRulesId);else{var i=ye(this.rules,e,t,n).join(""),o=X(Y(this.baseHash,i)>>>0);if(!t.hasNameForId(r,o)){var l=n(i,"."+o,void 0,r);t.insertRules(r,o,l)}a.push(o),this.staticRulesId=o}else{for(var s=this.rules.length,u=Y(this.baseHash,n.hash),c="",d=0;d<s;d++){var f=this.rules[d];if("string"==typeof f)c+=f;else if(f){var p=ye(f,e,t,n),h=Array.isArray(p)?p.join(""):p;u=Y(u,h+d),c+=h}}if(c){var m=X(u>>>0);if(!t.hasNameForId(r,m)){var g=n(c,"."+m,void 0,r);t.insertRules(r,m,g)}a.push(m)}}return a.join(" ")},e}(),ee=/^\s*\/\/.*$/gm,te=[":","[",".","#"];function ne(e){var t,n,r,a,i=void 0===e?v:e,o=i.options,s=void 0===o?v:o,u=i.plugins,c=void 0===u?y:u,d=new l(s),f=[],p=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,a,i,o,l,s,u,c,d){switch(n){case 1:if(0===c&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(a[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){f.push(e)})),h=function(e,r,i){return 0===r&&-1!==te.indexOf(i[n.length])||i.match(a)?e:"."+t};function m(e,i,o,l){void 0===l&&(l="&");var s=e.replace(ee,""),u=i&&o?o+" "+i+" { "+s+" }":s;return t=l,n=i,r=new RegExp("\\"+n+"\\b","g"),a=new RegExp("(\\"+n+"\\b){2,}"),d(o||!i?"":i,u)}return d.use([].concat(c,[function(e,t,a){2===e&&a.length&&a[0].lastIndexOf(n)>0&&(a[0]=a[0].replace(r,h))},p,function(e){if(-2===e){var t=f;return f=[],t}}])),m.hash=c.length?c.reduce((function(e,t){return t.name||P(15),Y(e,t.name)}),5381).toString():"",m}var re=e.createContext(),ae=(re.Consumer,e.createContext()),ie=(ae.Consumer,new B),oe=ne();function le(){return(0,e.useContext)(re)||ie}function se(){return(0,e.useContext)(ae)||oe}function ue(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],a=n[1],i=le(),l=(0,e.useMemo)((function(){var e=i;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target]),s=(0,e.useMemo)((function(){return ne({options:{prefix:!t.disableVendorPrefixes},plugins:r})}),[t.disableVendorPrefixes,r]);return(0,e.useEffect)((function(){o()(r,t.stylisPlugins)||a(t.stylisPlugins)}),[t.stylisPlugins]),e.createElement(re.Provider,{value:l},e.createElement(ae.Provider,{value:s},t.children))}var ce=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=oe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return P(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=oe),this.name+e.hash},e}(),de=/([A-Z])/,fe=/([A-Z])/g,pe=/^ms-/,he=function(e){return"-"+e.toLowerCase()};function me(e){return de.test(e)?e.replace(fe,he).replace(pe,"-ms-"):e}var ge=function(e){return null==e||!1===e||""===e};function ye(e,t,n,r){if(Array.isArray(e)){for(var a,i=[],o=0,l=e.length;o<l;o+=1)""!==(a=ye(e[o],t,n,r))&&(Array.isArray(a)?i.push.apply(i,a):i.push(a));return i}return ge(e)?"":S(e)?"."+e.styledComponentId:b(e)?"function"!=typeof(u=e)||u.prototype&&u.prototype.isReactComponent||!t?e:ye(e(t),t,n,r):e instanceof ce?n?(e.inject(n,r),e.getName(r)):e:g(e)?function e(t,n){var r,a,i=[];for(var o in t)t.hasOwnProperty(o)&&!ge(t[o])&&(Array.isArray(t[o])&&t[o].isCss||b(t[o])?i.push(me(o)+":",t[o],";"):g(t[o])?i.push.apply(i,e(t[o],o)):i.push(me(o)+": "+(r=o,(null==(a=t[o])||"boolean"==typeof a||""===a?"":"number"!=typeof a||0===a||r in s||r.startsWith("--")?String(a).trim():a+"px")+";")));return n?[n+" {"].concat(i,["}"]):i}(e):e.toString();var u}var ve=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function be(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||g(e)?ve(ye(m(y,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:ve(ye(m(e,n)))}new Set;var we=function(e,t,n){return void 0===n&&(n=v),e.theme!==n.theme&&e.theme||t||n.theme},Se=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ke=/(^-|-$)/g;function xe(e){return e.replace(Se,"-").replace(ke,"")}var Ce=function(e){return X(Q(e)>>>0)};function Ee(e){return"string"==typeof e&&!0}var Pe=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},_e=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Oe(e,t,n){var r=e[n];Pe(t)&&Pe(r)?je(r,t):e[n]=t}function je(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var a=0,i=n;a<i.length;a++){var o=i[a];if(Pe(o))for(var l in o)_e(l)&&Oe(e,o[l],l)}return e}var Te=e.createContext();Te.Consumer;var Ne={};function Ae(t,n,r){var a=S(t),i=!Ee(t),o=n.attrs,l=void 0===o?y:o,s=n.componentId,u=void 0===s?function(e,t){var n="string"!=typeof e?"sc":xe(e);Ne[n]=(Ne[n]||0)+1;var r=n+"-"+Ce("5.3.11"+n+Ne[n]);return t?t+"-"+r:r}(n.displayName,n.parentComponentId):s,c=n.displayName,f=void 0===c?function(e){return Ee(e)?"styled."+e:"Styled("+w(e)+")"}(t):c,m=n.displayName&&n.componentId?xe(n.displayName)+"-"+n.componentId:n.componentId||u,g=a&&t.attrs?Array.prototype.concat(t.attrs,l).filter(Boolean):l,k=n.shouldForwardProp;a&&t.shouldForwardProp&&(k=n.shouldForwardProp?function(e,r,a){return t.shouldForwardProp(e,r,a)&&n.shouldForwardProp(e,r,a)}:t.shouldForwardProp);var x,C=new Z(r,m,a?t.componentStyle:void 0),E=C.isStatic&&0===l.length,P=function(t,n){return function(t,n,r,a){var i=t.attrs,o=t.componentStyle,l=t.defaultProps,s=t.foldedComponentIds,u=t.shouldForwardProp,c=t.styledComponentId,f=t.target,p=function(e,t,n){void 0===e&&(e=v);var r=h({},t,{theme:e}),a={};return n.forEach((function(e){var t,n,i,o=e;for(t in b(o)&&(o=o(r)),o)r[t]=a[t]="className"===t?(n=a[t],i=o[t],n&&i?n+" "+i:n||i):o[t]})),[r,a]}(we(n,(0,e.useContext)(Te),l)||v,n,i),m=p[0],g=p[1],y=function(e,t,n){var r=le(),a=se();return t?e.generateAndInjectStyles(v,r,a):e.generateAndInjectStyles(n,r,a)}(o,a,m),w=r,S=g.$as||n.$as||g.as||n.as||f,k=Ee(S),x=g!==n?h({},n,{},g):n,C={};for(var E in x)"$"!==E[0]&&"as"!==E&&("forwardedAs"===E?C.as=x[E]:(u?u(E,d,S):!k||d(E))&&(C[E]=x[E]));return n.style&&g.style!==n.style&&(C.style=h({},n.style,{},g.style)),C.className=Array.prototype.concat(s,c,y!==c?y:null,n.className,g.className).filter(Boolean).join(" "),C.ref=w,(0,e.createElement)(S,C)}(x,t,n,E)};return P.displayName=f,(x=e.forwardRef(P)).attrs=g,x.componentStyle=C,x.displayName=f,x.shouldForwardProp=k,x.foldedComponentIds=a?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):y,x.styledComponentId=m,x.target=a?t.target:t,x.withComponent=function(e){var t=n.componentId,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(n,["componentId"]),i=t&&t+"-"+(Ee(e)?e:xe(w(e)));return Ae(e,h({},a,{attrs:g,componentId:i}),r)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?je({},t.defaultProps,e):e}}),Object.defineProperty(x,"toString",{value:function(){return"."+x.styledComponentId}}),i&&p()(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var Re=function(e){return function e(t,n,r){if(void 0===r&&(r=v),!(0,a.isValidElementType)(n))return P(1,String(n));var i=function(){return t(n,r,be.apply(void 0,arguments))};return i.withConfig=function(a){return e(t,n,h({},r,{},a))},i.attrs=function(a){return e(t,n,h({},r,{attrs:Array.prototype.concat(r.attrs,a).filter(Boolean)}))},i}(Ae,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){Re[e]=Re(e)}));var ze=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=G(e),B.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var a=r(ye(this.rules,t,n,r).join(""),""),i=this.componentId+e;n.insertRules(i,i,a)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&B.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();!function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=D();return"<style "+[n&&'nonce="'+n+'"',k+'="true"','data-styled-version="5.3.11"'].filter(Boolean).join(" ")+">"+e+"</style>"},this.getStyleTags=function(){return t.sealed?P(2):t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)return P(2);var r=((n={})[k]="",n["data-styled-version"]="5.3.11",n.dangerouslySetInnerHTML={__html:t.instance.toString()},n),a=D();return a&&(r.nonce=a),[e.createElement("style",h({},r,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new B({isServer:!0}),this.sealed=!1}var n=t.prototype;n.collectStyles=function(t){return this.sealed?P(2):e.createElement(ue,{sheet:this.instance},t)},n.interleaveWithNodeStream=function(e){return P(3)}}();const Le=Re,Ie=Le.footer`
  background-color: #2b2b2b;
  padding: 3rem 15rem;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    display: flex;
    flex-direction: column;  /* ✅ Stack elements vertically */
    align-items: center;     /* ✅ Center-align */
    text-align: center;      /* ✅ Center text */
    gap: 0.4rem;             /* ✅ Add spacing */
  }

  .acknowledgement-title {
    font-size: 2rem;   /* ✅ Make "Acknowledgement" larger */
    font-weight: bold;
    color: var(--green); /* Change color if needed */
  }

  .acknowledgement-text {
    font-size: 2rem;  /* ✅ Make the other text smaller */
    color: white;
  }

  .acknowledgement-link a {
    font-size: 2rem;
    color: white;  /* ✅ Change link color */
    text-decoration: underline;
  }

  p{
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    img{
      width: 2.6rem;
      animation: spinning 5s infinite linear;
    }
  }
  .social-media{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    img,span{
      font-size: 3rem;
      width: 3rem;
    }
  }


  @keyframes spinning {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }

  @media(max-width: 800px){
    padding: 4rem 10rem;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  @media(max-width: 600px){
    padding: 4rem 1rem;
    p{
      font-size: 1.2rem;
    }
  }
`;const Me=n.p+"static/media/react-icon.a010f287ea79ad0673b610a223faa951.svg";const De=n.p+"static/media/linkedin.4f00d78f67f451cf01173f7418aa186f.svg";const Fe=n.p+"static/media/github.d344c0fc70ddfb6de253ddc40adcb086.svg";var He=n(579);function We(){return(0,He.jsxs)(Ie,{className:"footer",children:[(0,He.jsxs)("a",{className:"logo",children:[(0,He.jsx)("span",{className:"acknowledgement-title",children:"Acknowledgement"}),(0,He.jsx)("span",{className:"acknowledgement-text",children:"This profile page refers to the template"}),(0,He.jsx)("span",{className:"acknowledgement-link",children:(0,He.jsx)("a",{href:"https://github.com/CodeVinayak/Portfolio-v2",target:"_blank",rel:"noopener noreferrer",children:"https://github.com/CodeVinayak/Portfolio-v2"})})]}),(0,He.jsx)("div",{children:(0,He.jsxs)("p",{children:["This Website was made with ",(0,He.jsx)("img",{src:Me,alt:"React"})]})}),(0,He.jsxs)("div",{className:"social-media",children:[(0,He.jsx)("a",{href:"https://www.linkedin.com/in/codevinayak",target:"_blank",rel:"noreferrer",children:(0,He.jsx)("img",{src:De,alt:"Linkedin"})}),(0,He.jsx)("a",{href:"https://github.com/CodeVinayak/",target:"_blank",rel:"noreferrer",children:(0,He.jsx)("img",{src:Fe,alt:"GitHub"})})]})]})}const Ve=Le.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 10rem;
  
  background-color: #21212150;
  
  backdrop-filter: blur(6px);

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;

  nav{
    display: flex;
    align-items: center;
    gap: 1.8rem;
    a{
      color: #FFFF;
      padding: 0.6rem;
      font-family: 'Red Hat Display', sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      transition: filter 0.25s;

      &.button{
        padding: 0.6rem 2rem;
      }

      &:hover{
        filter: brightness(0.6);
      }
    }

  }

  .menu-container{
    cursor: pointer;
    padding: 0.6rem 0;
  }

  .menu{
    width: 2rem;
    height: 0.2rem;
    background: #FFFF;
    position: relative;
    cursor: pointer;
    display: none;

    &:before{
      bottom: 0.5rem;
    }
    &:after{
      top: 0.5rem;
    }


    &.active:before{
      bottom: 0;
      transform: rotate(45deg);
    }

    &.active:after{
      top: 0;
      transform: rotate(135deg);
    }

    &.active{
      background-color: rgba(0, 0, 0, 0);
    }

  }

  .menu:before, .menu:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background: #FFFF;
    cursor: pointer;
    transition: .6s;
  }


  input[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
    outline: none;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 55px;
    height: 30px;
    background: var(--green);
    display: block;
    justify-content: center;
    align-items: center;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    position: relative;
    margin-left: auto;
    right: 10px;
  }

  @media only screen and (max-width: 800px) {
    label {
    position: relative;
   }
  }

  label:after {
    content: '';
    background: #FFF;
    width: 20px;
    height: 20px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: 4px;
   transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
  }

  input:checked + label {
    background: var(--pink);
  }

  input:checked + label:after {
    left: calc(100% - 5px);
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  @media (max-width: 960px){
    padding: 1.8rem 3rem;

    .menu{
      display: block;
    }

    nav {
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: var(--blue);
      top: 0;
      left: 0;
      transition: opacity 0.25s;
      background-color: var(--green);

      a.button{
        background-color: var(--pink);
      }

      &.active{
        opacity: 1;
        visibility: visible;
      }
    }
  }
  
`;var Ue,$e=n(7950),Be=n.t($e,2);function Ke(){return Ke=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ke.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(Ue||(Ue={}));const qe="popstate";function Xe(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function Ye(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function Qe(e,t){return{usr:e.state,key:e.key,idx:t}}function Ge(e,t,n,r){return void 0===n&&(n=null),Ke({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?Ze(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function Je(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function Ze(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function et(e,t,n,r){void 0===r&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,l=Ue.Pop,s=null,u=c();function c(){return(o.state||{idx:null}).idx}function d(){l=Ue.Pop;let e=c(),t=null==e?null:e-u;u=e,s&&s({action:l,location:p.location,delta:t})}function f(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"===typeof e?e:Je(e);return n=n.replace(/ $/,"%20"),Xe(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==u&&(u=0,o.replaceState(Ke({},o.state,{idx:u}),""));let p={get action(){return l},get location(){return e(a,o)},listen(e){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(qe,d),s=e,()=>{a.removeEventListener(qe,d),s=null}},createHref:e=>t(a,e),createURL:f,encodeLocation(e){let t=f(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){l=Ue.Push;let r=Ge(p.location,e,t);n&&n(r,e),u=c()+1;let d=Qe(r,u),f=p.createHref(r);try{o.pushState(d,"",f)}catch(h){if(h instanceof DOMException&&"DataCloneError"===h.name)throw h;a.location.assign(f)}i&&s&&s({action:l,location:p.location,delta:1})},replace:function(e,t){l=Ue.Replace;let r=Ge(p.location,e,t);n&&n(r,e),u=c();let a=Qe(r,u),d=p.createHref(r);o.replaceState(a,"",d),i&&s&&s({action:l,location:p.location,delta:0})},go:e=>o.go(e)};return p}var tt;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(tt||(tt={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function nt(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);Ye("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let i=new RegExp(a,t?void 0:"i");return[i,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=l[n]||"";o=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:i,pathnameBase:o,pattern:e}}function rt(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function at(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function it(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function ot(e,t){let n=it(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function lt(e,t,n,r){let a;void 0===r&&(r=!1),"string"===typeof e?a=Ze(e):(a=Ke({},e),Xe(!a.pathname||!a.pathname.includes("?"),at("?","pathname","search",a)),Xe(!a.pathname||!a.pathname.includes("#"),at("#","pathname","hash",a)),Xe(!a.search||!a.search.includes("#"),at("#","search","hash",a)));let i,o=""===e||""===a.pathname,l=o?"/":a.pathname;if(null==l)i=n;else{let e=t.length-1;if(!r&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}i=e>=0?t[e]:"/"}let s=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"===typeof e?Ze(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:ut(r),hash:ct(a)}}(a,i),u=l&&"/"!==l&&l.endsWith("/"),c=(o||"."===l)&&n.endsWith("/");return s.pathname.endsWith("/")||!u&&!c||(s.pathname+="/"),s}const st=e=>e.join("/").replace(/\/\/+/g,"/"),ut=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",ct=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;const dt=["post","put","patch","delete"],ft=(new Set(dt),["get",...dt]);new Set(ft),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function pt(){return pt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pt.apply(this,arguments)}const ht=e.createContext(null);const mt=e.createContext(null);const gt=e.createContext(null);const yt=e.createContext(null);const vt=e.createContext({outlet:null,matches:[],isDataRoute:!1});function bt(){return null!=e.useContext(yt)}function wt(){return bt()||Xe(!1),e.useContext(yt).location}function St(t){e.useContext(gt).static||e.useLayoutEffect(t)}function kt(){let{isDataRoute:t}=e.useContext(vt);return t?function(){let{router:t}=Pt(Ct.UseNavigateStable),n=_t(Et.UseNavigateStable),r=e.useRef(!1);return St((()=>{r.current=!0})),e.useCallback((function(e,a){void 0===a&&(a={}),r.current&&("number"===typeof e?t.navigate(e):t.navigate(e,pt({fromRouteId:n},a)))}),[t,n])}():function(){bt()||Xe(!1);let t=e.useContext(ht),{basename:n,future:r,navigator:a}=e.useContext(gt),{matches:i}=e.useContext(vt),{pathname:o}=wt(),l=JSON.stringify(ot(i,r.v7_relativeSplatPath)),s=e.useRef(!1);return St((()=>{s.current=!0})),e.useCallback((function(e,r){if(void 0===r&&(r={}),!s.current)return;if("number"===typeof e)return void a.go(e);let i=lt(e,JSON.parse(l),o,"path"===r.relative);null==t&&"/"!==n&&(i.pathname="/"===i.pathname?n:st([n,i.pathname])),(r.replace?a.replace:a.push)(i,r.state,r)}),[n,a,l,o,t])}()}function xt(t,n){let{relative:r}=void 0===n?{}:n,{future:a}=e.useContext(gt),{matches:i}=e.useContext(vt),{pathname:o}=wt(),l=JSON.stringify(ot(i,a.v7_relativeSplatPath));return e.useMemo((()=>lt(t,JSON.parse(l),o,"path"===r)),[t,l,o,r])}e.Component;var Ct=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ct||{}),Et=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Et||{});function Pt(t){let n=e.useContext(ht);return n||Xe(!1),n}function _t(t){let n=function(){let t=e.useContext(vt);return t||Xe(!1),t}(),r=n.matches[n.matches.length-1];return r.route.id||Xe(!1),r.route.id}function Ot(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}t.startTransition;function jt(t){let{basename:n="/",children:r=null,location:a,navigationType:i=Ue.Pop,navigator:o,static:l=!1,future:s}=t;bt()&&Xe(!1);let u=n.replace(/^\/*/,"/"),c=e.useMemo((()=>({basename:u,navigator:o,static:l,future:pt({v7_relativeSplatPath:!1},s)})),[u,s,o,l]);"string"===typeof a&&(a=Ze(a));let{pathname:d="/",search:f="",hash:p="",state:h=null,key:m="default"}=a,g=e.useMemo((()=>{let e=rt(d,u);return null==e?null:{location:{pathname:e,search:f,hash:p,state:h,key:m},navigationType:i}}),[u,d,f,p,h,m,i]);return null==g?null:e.createElement(gt.Provider,{value:c},e.createElement(yt.Provider,{children:r,value:g}))}new Promise((()=>{}));e.Component;function Tt(){return Tt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tt.apply(this,arguments)}function Nt(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const At=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Rt=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"];try{window.__reactRouterVersion="6"}catch(vi){}const zt=e.createContext({isTransitioning:!1});new Map;const Lt=t.startTransition;Be.flushSync,t.useId;function It(t){let{basename:n,children:r,future:a,window:i}=t,o=e.useRef();var l;null==o.current&&(o.current=(void 0===(l={window:i,v5Compat:!0})&&(l={}),et((function(e,t){let{pathname:n,search:r,hash:a}=e.location;return Ge("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:Je(t)}),null,l)));let s=o.current,[u,c]=e.useState({action:s.action,location:s.location}),{v7_startTransition:d}=a||{},f=e.useCallback((e=>{d&&Lt?Lt((()=>c(e))):c(e)}),[c,d]);return e.useLayoutEffect((()=>s.listen(f)),[s,f]),e.useEffect((()=>Ot(a)),[a]),e.createElement(jt,{basename:n,children:r,location:u.location,navigationType:u.action,navigator:s,future:a})}const Mt="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,Dt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ft=e.forwardRef((function(t,n){let r,{onClick:a,relative:i,reloadDocument:o,replace:l,state:s,target:u,to:c,preventScrollReset:d,viewTransition:f}=t,p=Nt(t,At),{basename:h}=e.useContext(gt),m=!1;if("string"===typeof c&&Dt.test(c)&&(r=c,Mt))try{let e=new URL(window.location.href),t=c.startsWith("//")?new URL(e.protocol+c):new URL(c),n=rt(t.pathname,h);t.origin===e.origin&&null!=n?c=n+t.search+t.hash:m=!0}catch(vi){}let g=function(t,n){let{relative:r}=void 0===n?{}:n;bt()||Xe(!1);let{basename:a,navigator:i}=e.useContext(gt),{hash:o,pathname:l,search:s}=xt(t,{relative:r}),u=l;return"/"!==a&&(u="/"===l?a:st([a,l])),i.createHref({pathname:u,search:s,hash:o})}(c,{relative:i}),y=function(t,n){let{target:r,replace:a,state:i,preventScrollReset:o,relative:l,viewTransition:s}=void 0===n?{}:n,u=kt(),c=wt(),d=xt(t,{relative:l});return e.useCallback((e=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(e,r)){e.preventDefault();let n=void 0!==a?a:Je(c)===Je(d);u(t,{replace:n,state:i,preventScrollReset:o,relative:l,viewTransition:s})}}),[c,u,d,a,i,r,t,o,l,s])}(c,{replace:l,state:s,target:u,preventScrollReset:d,relative:i,viewTransition:f});return e.createElement("a",Tt({},p,{href:r||g,onClick:m||o?a:function(e){a&&a(e),e.defaultPrevented||y(e)},ref:n,target:u}))}));const Ht=e.forwardRef((function(t,n){let{"aria-current":r="page",caseSensitive:a=!1,className:i="",end:o=!1,style:l,to:s,viewTransition:u,children:c}=t,d=Nt(t,Rt),f=xt(s,{relative:d.relative}),p=wt(),h=e.useContext(mt),{navigator:m,basename:g}=e.useContext(gt),y=null!=h&&function(t,n){void 0===n&&(n={});let r=e.useContext(zt);null==r&&Xe(!1);let{basename:a}=Ut(Wt.useViewTransitionState),i=xt(t,{relative:n.relative});if(!r.isTransitioning)return!1;let o=rt(r.currentLocation.pathname,a)||r.currentLocation.pathname,l=rt(r.nextLocation.pathname,a)||r.nextLocation.pathname;return null!=nt(i.pathname,l)||null!=nt(i.pathname,o)}(f)&&!0===u,v=m.encodeLocation?m.encodeLocation(f).pathname:f.pathname,b=p.pathname,w=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;a||(b=b.toLowerCase(),w=w?w.toLowerCase():null,v=v.toLowerCase()),w&&g&&(w=rt(w,g)||w);const S="/"!==v&&v.endsWith("/")?v.length-1:v.length;let k,x=b===v||!o&&b.startsWith(v)&&"/"===b.charAt(S),C=null!=w&&(w===v||!o&&w.startsWith(v)&&"/"===w.charAt(v.length)),E={isActive:x,isPending:C,isTransitioning:y},P=x?r:void 0;k="function"===typeof i?i(E):[i,x?"active":null,C?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let _="function"===typeof l?l(E):l;return e.createElement(Ft,Tt({},d,{"aria-current":P,className:k,ref:n,style:_,to:s,viewTransition:u}),"function"===typeof c?c(E):c)}));var Wt,Vt;function Ut(t){let n=e.useContext(ht);return n||Xe(!1),n}(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Wt||(Wt={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(Vt||(Vt={}));var $t=function(){return $t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},$t.apply(this,arguments)};var Bt="",Kt=null,qt=null,Xt=null;function Yt(){Bt="",null!==Kt&&Kt.disconnect(),null!==qt&&(window.clearTimeout(qt),qt=null)}function Qt(e){return["BUTTON","INPUT","SELECT","TEXTAREA"].includes(e.tagName)&&!e.hasAttribute("disabled")||["A","AREA"].includes(e.tagName)&&e.hasAttribute("href")}function Gt(){var e=null;if("#"===Bt)e=document.body;else{var t=Bt.replace("#","");null===(e=document.getElementById(t))&&"#top"===Bt&&(e=document.body)}if(null!==e){Xt(e);var n=e.getAttribute("tabindex");return null!==n||Qt(e)||e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),null!==n||Qt(e)||(e.blur(),e.removeAttribute("tabindex")),Yt(),!0}return!1}function Jt(t){return e.forwardRef((function(n,r){var a="";"string"===typeof n.to&&n.to.includes("#")?a="#"+n.to.split("#").slice(1).join("#"):"object"===typeof n.to&&"string"===typeof n.to.hash&&(a=n.to.hash);var i={};t===Ht&&(i.isActive=function(e,t){return e&&e.isExact&&t.hash===a});var o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(n,["scroll","smooth","timeout","elementId"]);return e.createElement(t,$t({},i,o,{onClick:function(e){var t;Yt(),Bt=n.elementId?"#"+n.elementId:a,n.onClick&&n.onClick(e),""===Bt||e.defaultPrevented||0!==e.button||n.target&&"_self"!==n.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(Xt=n.scroll||function(e){return n.smooth?e.scrollIntoView({behavior:"smooth"}):e.scrollIntoView()},t=n.timeout,window.setTimeout((function(){!1===Gt()&&(null===Kt&&(Kt=new MutationObserver(Gt)),Kt.observe(document,{attributes:!0,childList:!0,subtree:!0}),qt=window.setTimeout((function(){Yt()}),t||1e4))}),0))},ref:r}),n.children)}))}var Zt=Jt(Ft),en=Jt(Ht);const tn=n.p+"static/media/Vinayak_Kumar_Singh_Resume.b4572eebc9a23410e840.pdf";function nn(){const[t,n]=(0,e.useState)(!1);function r(){n(!1)}return(0,He.jsx)(Ve,{className:"header-fixed",children:(0,He.jsxs)(It,{children:[(0,He.jsx)(Zt,{smooth:!0,to:"#home",className:"logo",children:(0,He.jsx)("span",{children:"Herman Tang"})}),(0,He.jsxs)("nav",{className:t?"active":"",children:[(0,He.jsx)(en,{smooth:!0,to:"#home",onClick:r,children:"Home"}),(0,He.jsx)(en,{smooth:!0,to:"#about",onClick:r,children:"About me"}),(0,He.jsx)(en,{smooth:!0,to:"#project",onClick:r,children:"Project"}),(0,He.jsx)(en,{smooth:!0,to:"#contact",onClick:r,children:"Contact"}),(0,He.jsx)("a",{href:tn,download:!0,className:"button",children:"Resume"})]}),(0,He.jsx)("div",{"aria-expanded":t?"true":"false","aria-haspopup":"true","aria-label":t?"Fechar menu":"Abrir menu",className:t?"menu active":"menu",onClick:()=>{n(!t)}})]})})}const rn=n.p+"static/media/CSIRO_Lab.1ab09d084f33c39be731.jpg",an=Le.main`
  position: relative;
  z-index: 0;
  padding: 0 10rem;
  overflow-x: hidden;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;

  /* ✅ Use CSS Variable for Scrollbar Width */
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.95)), 
              url(${rn}) no-repeat left center fixed;
  background-size: calc(100% - var(--scrollbar-width, 0px)) auto; /* ✅ Dynamically adjusts */

  @media (max-width: 740px) {
    padding: 0 4rem;
  }

  @media (max-width: 360px) {
    padding: 0 2rem;
  }
`,on=Le.section`
  padding-top: 15%;
  display: flex;
  justify-content: center;
  gap: 16rem;
  background: rgba(0,0,0,0);
  .hero-text{
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
    }

    h3{
      color:var(--CsiroBlue);
      margin: 1rem 0;
    }

    
    p.small-resume {
      margin-bottom: 5rem;
    }
  }
// New added
  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top:5rem;
    padding-left:1rem;

    img,span{
      font-size: 3rem;
      width: 6rem;
    }
  }


  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .hero-image{
    img{
      max-width: 500px;
    }
  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
  }
  @media(max-width: 480px){
    margin-top: 45%;
  }
`;var ln=n(3341),sn=n.n(ln);const un=n.p+"static/media/Hello.d93720933c608f6178fb.gif",cn=n.p+"static/media/HermanTangCsiroLabCircle.912583ad2e1fee9b7106.png";function dn(){return(0,He.jsxs)(on,{id:"home",children:[(0,He.jsxs)("div",{className:"hero-text",children:[(0,He.jsx)(sn(),{animateIn:"fadeInUp",children:(0,He.jsxs)("p",{children:["Hello ",(0,He.jsx)("img",{src:un,alt:"Hello",width:"20px"}),", I'm"]})}),(0,He.jsx)(sn(),{animateIn:"fadeInUp",delay:200,children:(0,He.jsx)("h1",{children:"Herman Tang"})}),(0,He.jsx)(sn(),{animateIn:"fadeInUp",delay:400,children:(0,He.jsx)("h3",{children:"Software Engineer"})}),(0,He.jsx)(sn(),{animateIn:"fadeInUp",delay:600,children:(0,He.jsx)("p",{className:"small-resume",children:"2 Years of Experience"})}),(0,He.jsx)(sn(),{animateIn:"fadeInUp",delay:800,children:(0,He.jsx)(It,{children:(0,He.jsx)(en,{smooth:!0,to:"#contact",className:"button",children:"Contact"})})}),(0,He.jsx)(sn(),{animateIn:"fadeInUp",delay:1e3,children:(0,He.jsxs)("div",{className:"social-media",children:[(0,He.jsx)("a",{href:"https://www.linkedin.com/in/herman-tang/",target:"_blank",rel:"noreferrer",children:(0,He.jsx)("img",{src:De,alt:"Linkedin"})}),(0,He.jsx)("a",{href:"https://github.com/DDQXZcp",target:"_blank",rel:"noreferrer",children:(0,He.jsx)("img",{src:Fe,alt:"GitHub"})})]})})]}),(0,He.jsx)("div",{className:"hero-image",children:(0,He.jsx)(sn(),{animateIn:"fadeInRight",delay:1e3,children:(0,He.jsx)("img",{src:cn,alt:"Herman Tang"})})})]})}const fn=Le.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* ✅ Add Transparent White Circle */
  .icon-wrapper {
    width: 14rem; /* ✅ Slightly larger than icon */
    height: 14rem; /* ✅ Creates circular effect */
    background: rgba(255, 255, 255, 1); /* ✅ Semi-transparent white */
    border-radius: 50%; /* ✅ Makes it a circle */
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* ✅ Optional: Adds a subtle shadow */
  }

  .icon-wrapper img {
    width: 12rem; /* ✅ Keep icon size unchanged */
    height: auto;
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--CsiroBlue);
  }

  h3 {
    margin-top: 2rem;
    color: var(--CsiroBlue);
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  .about-image {
    text-align: center;

    img {
      margin-top: 2rem;
      width: 75%;
      filter: grayscale(0);
      transition: filter 0.5s;

      &:hover {
        filter: grayscale(0);
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;

      img {
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;

        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .hard-skills {
      justify-content: center;
    }

    .about-image {
      display: flex;
      max-width: 100%;

      img {
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;

        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }
`,pn=n.p+"static/media/HermanTangCsiroLab.cb14c7e0f9a42bf25f57.jpg",hn=n.p+"static/media/AwsCloudPractitioner.bbf7c33bccce66b0b5fd.png",mn=n.p+"static/media/ccna.cc609eef39654d579ce6.png",gn=n.p+"static/media/ros.0a0798700491dee29118.png",yn=n.p+"static/media/nvidia-jetson.447eebcecda8737ce447.png",vn=n.p+"static/media/st-micro-logo.6a68709c42ff006b7be5.png",bn=n.p+"static/media/altium-designer-icon.290220507fc78e9956da.webp",wn=n.p+"static/media/solidworks.7e7b543a2484b5e8b4e5.png";var Sn=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(vi){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)})),this.tags=[],this.ctr=0},e}(),kn=Math.abs,xn=String.fromCharCode,Cn=Object.assign;function En(e){return e.trim()}function Pn(e,t,n){return e.replace(t,n)}function _n(e,t){return e.indexOf(t)}function On(e,t){return 0|e.charCodeAt(t)}function jn(e,t,n){return e.slice(t,n)}function Tn(e){return e.length}function Nn(e){return e.length}function An(e,t){return t.push(e),e}var Rn=1,zn=1,Ln=0,In=0,Mn=0,Dn="";function Fn(e,t,n,r,a,i,o){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:Rn,column:zn,length:o,return:""}}function Hn(e,t){return Cn(Fn("",null,null,"",null,null,0),e,{length:-e.length},t)}function Wn(){return Mn=In>0?On(Dn,--In):0,zn--,10===Mn&&(zn=1,Rn--),Mn}function Vn(){return Mn=In<Ln?On(Dn,In++):0,zn++,10===Mn&&(zn=1,Rn++),Mn}function Un(){return On(Dn,In)}function $n(){return In}function Bn(e,t){return jn(Dn,e,t)}function Kn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qn(e){return Rn=zn=1,Ln=Tn(Dn=e),In=0,[]}function Xn(e){return Dn="",e}function Yn(e){return En(Bn(In-1,Jn(91===e?e+2:40===e?e+1:e)))}function Qn(e){for(;(Mn=Un())&&Mn<33;)Vn();return Kn(e)>2||Kn(Mn)>3?"":" "}function Gn(e,t){for(;--t&&Vn()&&!(Mn<48||Mn>102||Mn>57&&Mn<65||Mn>70&&Mn<97););return Bn(e,$n()+(t<6&&32==Un()&&32==Vn()))}function Jn(e){for(;Vn();)switch(Mn){case e:return In;case 34:case 39:34!==e&&39!==e&&Jn(Mn);break;case 40:41===e&&Jn(e);break;case 92:Vn()}return In}function Zn(e,t){for(;Vn()&&e+Mn!==57&&(e+Mn!==84||47!==Un()););return"/*"+Bn(t,In-1)+"*"+xn(47===e?e:Vn())}function er(e){for(;!Kn(Un());)Vn();return Bn(e,In)}var tr="-ms-",nr="-moz-",rr="-webkit-",ar="comm",ir="rule",or="decl",lr="@keyframes";function sr(e,t){for(var n="",r=Nn(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function ur(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case or:return e.return=e.return||e.value;case ar:return"";case lr:return e.return=e.value+"{"+sr(e.children,r)+"}";case ir:e.value=e.props.join(",")}return Tn(n=sr(e.children,r))?e.return=e.value+"{"+n+"}":""}function cr(e){return Xn(dr("",null,null,null,[""],e=qn(e),0,[0],e))}function dr(e,t,n,r,a,i,o,l,s){for(var u=0,c=0,d=o,f=0,p=0,h=0,m=1,g=1,y=1,v=0,b="",w=a,S=i,k=r,x=b;g;)switch(h=v,v=Vn()){case 40:if(108!=h&&58==On(x,d-1)){-1!=_n(x+=Pn(Yn(v),"&","&\f"),"&\f")&&(y=-1);break}case 34:case 39:case 91:x+=Yn(v);break;case 9:case 10:case 13:case 32:x+=Qn(h);break;case 92:x+=Gn($n()-1,7);continue;case 47:switch(Un()){case 42:case 47:An(pr(Zn(Vn(),$n()),t,n),s);break;default:x+="/"}break;case 123*m:l[u++]=Tn(x)*y;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+c:-1==y&&(x=Pn(x,/\f/g,"")),p>0&&Tn(x)-d&&An(p>32?hr(x+";",r,n,d-1):hr(Pn(x," ","")+";",r,n,d-2),s);break;case 59:x+=";";default:if(An(k=fr(x,t,n,u,c,a,l,b,w=[],S=[],d),i),123===v)if(0===c)dr(x,t,k,k,w,i,d,l,S);else switch(99===f&&110===On(x,3)?100:f){case 100:case 108:case 109:case 115:dr(e,k,k,r&&An(fr(e,k,k,0,0,a,l,b,a,w=[],d),S),a,S,d,l,r?w:S);break;default:dr(x,k,k,k,[""],S,0,l,S)}}u=c=p=0,m=y=1,b=x="",d=o;break;case 58:d=1+Tn(x),p=h;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==Wn())continue;switch(x+=xn(v),v*m){case 38:y=c>0?1:(x+="\f",-1);break;case 44:l[u++]=(Tn(x)-1)*y,y=1;break;case 64:45===Un()&&(x+=Yn(Vn())),f=Un(),c=d=Tn(b=x+=er($n())),v++;break;case 45:45===h&&2==Tn(x)&&(m=0)}}return i}function fr(e,t,n,r,a,i,o,l,s,u,c){for(var d=a-1,f=0===a?i:[""],p=Nn(f),h=0,m=0,g=0;h<r;++h)for(var y=0,v=jn(e,d+1,d=kn(m=o[h])),b=e;y<p;++y)(b=En(m>0?f[y]+" "+v:Pn(v,/&\f/g,f[y])))&&(s[g++]=b);return Fn(e,t,n,0===a?ir:l,s,u,c)}function pr(e,t,n){return Fn(e,t,n,ar,xn(Mn),jn(e,2,-2),0)}function hr(e,t,n,r){return Fn(e,t,n,or,jn(e,0,r),jn(e,r+1,-1),r)}var mr=function(e,t,n){for(var r=0,a=0;r=a,a=Un(),38===r&&12===a&&(t[n]=1),!Kn(a);)Vn();return Bn(e,In)},gr=function(e,t){return Xn(function(e,t){var n=-1,r=44;do{switch(Kn(r)){case 0:38===r&&12===Un()&&(t[n]=1),e[n]+=mr(In-1,t,n);break;case 2:e[n]+=Yn(r);break;case 4:if(44===r){e[++n]=58===Un()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=xn(r)}}while(r=Vn());return e}(qn(e),t))},yr=new WeakMap,vr=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||yr.get(n))&&!r){yr.set(e,!0);for(var a=[],i=gr(t,a),o=n.props,l=0,s=0;l<i.length;l++)for(var u=0;u<o.length;u++,s++)e.props[s]=a[l]?i[l].replace(/&\f/g,o[u]):o[u]+" "+i[l]}}},br=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function wr(e,t){switch(function(e,t){return 45^On(e,0)?(((t<<2^On(e,0))<<2^On(e,1))<<2^On(e,2))<<2^On(e,3):0}(e,t)){case 5103:return rr+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return rr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return rr+e+nr+e+tr+e+e;case 6828:case 4268:return rr+e+tr+e+e;case 6165:return rr+e+tr+"flex-"+e+e;case 5187:return rr+e+Pn(e,/(\w+).+(:[^]+)/,rr+"box-$1$2"+tr+"flex-$1$2")+e;case 5443:return rr+e+tr+"flex-item-"+Pn(e,/flex-|-self/,"")+e;case 4675:return rr+e+tr+"flex-line-pack"+Pn(e,/align-content|flex-|-self/,"")+e;case 5548:return rr+e+tr+Pn(e,"shrink","negative")+e;case 5292:return rr+e+tr+Pn(e,"basis","preferred-size")+e;case 6060:return rr+"box-"+Pn(e,"-grow","")+rr+e+tr+Pn(e,"grow","positive")+e;case 4554:return rr+Pn(e,/([^-])(transform)/g,"$1"+rr+"$2")+e;case 6187:return Pn(Pn(Pn(e,/(zoom-|grab)/,rr+"$1"),/(image-set)/,rr+"$1"),e,"")+e;case 5495:case 3959:return Pn(e,/(image-set\([^]*)/,rr+"$1$`$1");case 4968:return Pn(Pn(e,/(.+:)(flex-)?(.*)/,rr+"box-pack:$3"+tr+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+rr+e+e;case 4095:case 3583:case 4068:case 2532:return Pn(e,/(.+)-inline(.+)/,rr+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Tn(e)-1-t>6)switch(On(e,t+1)){case 109:if(45!==On(e,t+4))break;case 102:return Pn(e,/(.+:)(.+)-([^]+)/,"$1"+rr+"$2-$3$1"+nr+(108==On(e,t+3)?"$3":"$2-$3"))+e;case 115:return~_n(e,"stretch")?wr(Pn(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==On(e,t+1))break;case 6444:switch(On(e,Tn(e)-3-(~_n(e,"!important")&&10))){case 107:return Pn(e,":",":"+rr)+e;case 101:return Pn(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+rr+(45===On(e,14)?"inline-":"")+"box$3$1"+rr+"$2$3$1"+tr+"$2box$3")+e}break;case 5936:switch(On(e,t+11)){case 114:return rr+e+tr+Pn(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return rr+e+tr+Pn(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return rr+e+tr+Pn(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return rr+e+tr+e+e}return e}var Sr=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case or:e.return=wr(e.value,e.length);break;case lr:return sr([Hn(e,{value:Pn(e.value,"@","@"+rr)})],r);case ir:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return sr([Hn(e,{props:[Pn(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return sr([Hn(e,{props:[Pn(t,/:(plac\w+)/,":"+rr+"input-$1")]}),Hn(e,{props:[Pn(t,/:(plac\w+)/,":-moz-$1")]}),Hn(e,{props:[Pn(t,/:(plac\w+)/,tr+"input-$1")]})],r)}return""}))}}],kr=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var r,a,i=e.stylisPlugins||Sr,o={},l=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)o[t[n]]=!0;l.push(e)}));var s,u,c=[ur,(u=function(e){s.insert(e)},function(e){e.root||(e=e.return)&&u(e)})],d=function(e){var t=Nn(e);return function(n,r,a,i){for(var o="",l=0;l<t;l++)o+=e[l](n,r,a,i)||"";return o}}([vr,br].concat(i,c));a=function(e,t,n,r){s=n,sr(cr(e?e+"{"+t.styles+"}":t.styles),d),r&&(f.inserted[t.name]=!0)};var f={key:t,sheet:new Sn({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:a};return f.sheet.hydrate(l),f};function xr(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):n&&(r+=n+" ")})),r}var Cr=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},Er=function(e,t,n){Cr(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+r:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}};var Pr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_r=/[A-Z]|^ms/g,Or=/_EMO_([^_]+?)_([^]*?)_EMO_/g,jr=function(e){return 45===e.charCodeAt(1)},Tr=function(e){return null!=e&&"boolean"!==typeof e},Nr=u((function(e){return jr(e)?e:e.replace(_r,"-$&").toLowerCase()})),Ar=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(Or,(function(e,t,n){return zr={name:t,styles:n,next:zr},t}))}return 1===Pr[e]||jr(e)||"number"!==typeof t||0===t?t:t+"px"};function Rr(e,t,n){if(null==n)return"";var r=n;if(void 0!==r.__emotion_styles)return r;switch(typeof n){case"boolean":return"";case"object":var a=n;if(1===a.anim)return zr={name:a.name,styles:a.styles,next:zr},a.name;var i=n;if(void 0!==i.styles){var o=i.next;if(void 0!==o)for(;void 0!==o;)zr={name:o.name,styles:o.styles,next:zr},o=o.next;return i.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=Rr(e,t,n[a])+";";else for(var i in n){var o=n[i];if("object"!==typeof o){var l=o;null!=t&&void 0!==t[l]?r+=i+"{"+t[l]+"}":Tr(l)&&(r+=Nr(i)+":"+Ar(i,l)+";")}else if(!Array.isArray(o)||"string"!==typeof o[0]||null!=t&&void 0!==t[o[0]]){var s=Rr(e,t,o);switch(i){case"animation":case"animationName":r+=Nr(i)+":"+s+";";break;default:r+=i+"{"+s+"}"}}else for(var u=0;u<o.length;u++)Tr(o[u])&&(r+=Nr(i)+":"+Ar(i,o[u])+";")}return r}(e,t,n);case"function":if(void 0!==e){var l=zr,s=n(e);return zr=l,Rr(e,t,s)}}var u=n;if(null==t)return u;var c=t[u];return void 0!==c?c:u}var zr,Lr=/label:\s*([^\s;{]+)\s*(;|$)/g;function Ir(e,t,n){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,a="";zr=void 0;var i=e[0];null==i||void 0===i.raw?(r=!1,a+=Rr(n,t,i)):a+=i[0];for(var o=1;o<e.length;o++){if(a+=Rr(n,t,e[o]),r)a+=i[o]}Lr.lastIndex=0;for(var l,s="";null!==(l=Lr.exec(a));)s+="-"+l[1];var u=function(e){for(var t,n=0,r=0,a=e.length;a>=4;++r,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(a){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(a)+s;return{name:u,styles:a,next:zr}}var Mr=!!t.useInsertionEffect&&t.useInsertionEffect,Dr=Mr||function(e){return e()},Fr=(Mr||e.useLayoutEffect,e.createContext("undefined"!==typeof HTMLElement?kr({key:"css"}):null)),Hr=(Fr.Provider,function(t){return(0,e.forwardRef)((function(n,r){var a=(0,e.useContext)(Fr);return t(n,a,r)}))}),Wr=e.createContext({});var Vr={}.hasOwnProperty,Ur="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",$r=function(e,t){var n={};for(var r in t)Vr.call(t,r)&&(n[r]=t[r]);return n[Ur]=e,n},Br=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return Cr(t,n,r),Dr((function(){return Er(t,n,r)})),null},Kr=Hr((function(t,n,r){var a=t.css;"string"===typeof a&&void 0!==n.registered[a]&&(a=n.registered[a]);var i=t[Ur],o=[a],l="";"string"===typeof t.className?l=xr(n.registered,o,t.className):null!=t.className&&(l=t.className+" ");var s=Ir(o,void 0,e.useContext(Wr));l+=n.key+"-"+s.name;var u={};for(var c in t)Vr.call(t,c)&&"css"!==c&&c!==Ur&&(u[c]=t[c]);return u.className=l,r&&(u.ref=r),e.createElement(e.Fragment,null,e.createElement(Br,{cache:n,serialized:s,isStringTag:"string"===typeof i}),e.createElement(i,u))})),qr=He.Fragment,Xr=function(e,t,n){return Vr.call(t,"css")?He.jsx(Kr,$r(e,t),n):He.jsx(e,t,n)},Yr=function(t,n){var r=arguments;if(null==n||!Vr.call(n,"css"))return e.createElement.apply(void 0,r);var a=r.length,i=new Array(a);i[0]=Kr,i[1]=$r(t,n);for(var o=2;o<a;o++)i[o]=r[o];return e.createElement.apply(null,i)};!function(e){var t;t||(t=e.JSX||(e.JSX={}))}(Yr||(Yr={}));function Qr(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Ir(t)}function Gr(){var e=Qr.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var Jr=function e(t){for(var n=t.length,r=0,a="";r<n;r++){var i=t[r];if(null!=i){var o=void 0;switch(typeof i){case"boolean":break;case"object":if(Array.isArray(i))o=e(i);else for(var l in o="",i)i[l]&&l&&(o&&(o+=" "),o+=l);break;default:o=i}o&&(a&&(a+=" "),a+=o)}}return a};var Zr=function(e){var t=e.cache,n=e.serializedArr;return Dr((function(){for(var e=0;e<n.length;e++)Er(t,n[e],!1)})),null},ea=Hr((function(t,n){var r=[],a=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var i=Ir(t,n.registered);return r.push(i),Cr(n,i,!1),n.key+"-"+i.name},i={css:a,cx:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e,t,n){var r=[],a=xr(e,r,n);return r.length<2?n:a+t(r)}(n.registered,a,Jr(t))},theme:e.useContext(Wr)},o=t.children(i);return e.createElement(e.Fragment,null,e.createElement(Zr,{cache:n,serializedArr:r}),o)})),ta=Object.defineProperty,na=(e,t,n)=>((e,t,n)=>t in e?ta(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!==typeof t?t+"":t,n),ra=new Map,aa=new WeakMap,ia=0,oa=void 0;function la(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(aa.has(e)||(ia+=1,aa.set(e,ia.toString())),aa.get(e)):"0"}(e.root):e[t]}`)).toString()}function sa(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:oa;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:a,observer:i,elements:o}=function(e){const t=la(e);let n=ra.get(t);if(!n){const r=new Map;let a;const i=new IntersectionObserver((t=>{t.forEach((t=>{var n;const i=t.isIntersecting&&a.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=i),null==(n=r.get(t.target))||n.forEach((e=>{e(i,t)}))}))}),e);a=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},ra.set(t,n)}return n}(n),l=o.get(e)||[];return o.has(e)||o.set(e,l),l.push(t),i.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(o.delete(e),i.unobserve(e)),0===o.size&&(i.disconnect(),ra.delete(a))}}var ua=class extends e.Component{constructor(e){super(e),na(this,"node",null),na(this,"_unobserveCb",null),na(this,"handleNode",(e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()})),na(this,"handleChange",((e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),function(e){return"function"!==typeof e.children}(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)})),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a,fallbackInView:i}=this.props;this._unobserveCb=sa(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if("function"===typeof t){const{inView:e,entry:n}=this.state;return t({inView:e,entry:n,ref:this.handleNode})}const{as:n,triggerOnce:r,threshold:a,root:i,rootMargin:o,onChange:l,skip:s,trackVisibility:u,delay:c,initialInView:d,fallbackInView:f,...p}=this.props;return e.createElement(n||"div",{ref:this.handleNode,...p},t)}};function ca(){let{threshold:t,delay:n,trackVisibility:r,rootMargin:a,root:i,triggerOnce:o,skip:l,initialInView:s,fallbackInView:u,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var d;const[f,p]=e.useState(null),h=e.useRef(c),[m,g]=e.useState({inView:!!s,entry:void 0});h.current=c,e.useEffect((()=>{if(l||!f)return;let e;return e=sa(f,((t,n)=>{g({inView:t,entry:n}),h.current&&h.current(t,n),n.isIntersecting&&o&&e&&(e(),e=void 0)}),{root:i,rootMargin:a,threshold:t,trackVisibility:r,delay:n},u),()=>{e&&e()}}),[Array.isArray(t)?t.toString():t,f,i,a,o,l,r,u,n]);const y=null==(d=m.entry)?void 0:d.target,v=e.useRef(void 0);f||!y||o||l||v.current===y||(v.current=y,g({inView:!!s,entry:void 0}));const b=[p,m.inView,m.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}var da=n(1163);Gr`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,Gr`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,Gr`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,Gr`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,Gr`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,Gr`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Gr`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Gr`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,Gr`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,Gr`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,Gr`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,Gr`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Gr`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const fa=Gr`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,pa=Gr`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ha=Gr`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ma=Gr`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ga=Gr`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ya=Gr`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,va=Gr`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ba=Gr`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,wa=Gr`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Sa=Gr`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ka=Gr`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,xa=Gr`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ca=Gr`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Ea(e,t){return n=>n?e():t()}function Pa(e){return Ea(e,(()=>null))}function _a(e){return Pa((()=>({opacity:0})))(e)}const Oa=t=>{const{cascade:n=!1,damping:r=.5,delay:a=0,duration:i=1e3,fraction:o=0,keyframes:l=ya,triggerOnce:s=!1,className:u,style:c,childClassName:d,childStyle:f,children:p,onVisibilityChange:h}=t,m=(0,e.useMemo)((()=>function(e){let{duration:t=1e3,delay:n=0,timingFunction:r="ease",keyframes:a=ya,iterationCount:i=1}=e;return Qr`
    animation-duration: ${t}ms;
    animation-timing-function: ${r};
    animation-delay: ${n}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${i};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}({keyframes:l,duration:i})),[i,l]);return void 0==p?null:"string"===typeof(g=p)||"number"===typeof g||"boolean"===typeof g?Xr(Ta,{...t,animationStyles:m,children:String(p)}):(0,da.isFragment)(p)?Xr(Na,{...t,animationStyles:m}):Xr(qr,{children:e.Children.map(p,((l,p)=>{if(!(0,e.isValidElement)(l))return null;const g=a+(n?p*i*r:0);switch(l.type){case"ol":case"ul":return Xr(ea,{children:e=>{let{cx:n}=e;return Xr(l.type,{...l.props,className:n(u,l.props.className),style:Object.assign({},c,l.props.style),children:Xr(Oa,{...t,children:l.props.children})})}});case"li":return Xr(ua,{threshold:o,triggerOnce:s,onChange:h,children:e=>{let{inView:t,ref:n}=e;return Xr(ea,{children:e=>{let{cx:r}=e;return Xr(l.type,{...l.props,ref:n,className:r(d,l.props.className),css:Pa((()=>m))(t),style:Object.assign({},f,l.props.style,_a(!t),{animationDelay:g+"ms"})})}})}});default:return Xr(ua,{threshold:o,triggerOnce:s,onChange:h,children:e=>{let{inView:t,ref:n}=e;return Xr("div",{ref:n,className:u,css:Pa((()=>m))(t),style:Object.assign({},c,_a(!t),{animationDelay:g+"ms"}),children:Xr(ea,{children:e=>{let{cx:t}=e;return Xr(l.type,{...l.props,className:t(d,l.props.className),style:Object.assign({},f,l.props.style)})}})})}})}}))});var g},ja={display:"inline-block",whiteSpace:"pre"},Ta=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:a=0,duration:i=1e3,fraction:o=0,triggerOnce:l=!1,className:s,style:u,children:c,onVisibilityChange:d}=e,{ref:f,inView:p}=ca({triggerOnce:l,threshold:o,onChange:d});return Ea((()=>Xr("div",{ref:f,className:s,style:Object.assign({},u,ja),children:c.split("").map(((e,n)=>Xr("span",{css:Pa((()=>t))(p),style:{animationDelay:a+n*i*r+"ms"},children:e},n)))})),(()=>Xr(Na,{...e,children:c})))(n)},Na=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:a,style:i,children:o,onVisibilityChange:l}=e,{ref:s,inView:u}=ca({triggerOnce:r,threshold:n,onChange:l});return Xr("div",{ref:s,className:a,css:Pa((()=>t))(u),style:Object.assign({},i,_a(!u)),children:o})};Gr`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,Gr`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Gr`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Gr`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Gr`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Gr`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,Gr`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,Gr`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,Gr`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,Gr`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const Aa=Gr`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Ra=Gr`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,za=Gr`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,La=Gr`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Ia=Gr`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Ma=Gr`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Da=Gr`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Fa=Gr`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Ha=Gr`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Wa=Gr`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Va=Gr`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Ua=Gr`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,$a=Gr`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;const Ba=t=>{const{big:n=!1,direction:r,reverse:a=!1,...i}=t,o=(0,e.useMemo)((()=>function(e,t,n){switch(n){case"bottom-left":return t?Ra:pa;case"bottom-right":return t?za:ha;case"down":return e?t?Ia:ga:t?La:ma;case"left":return e?t?Da:va:t?Ma:ya;case"right":return e?t?Ha:wa:t?Fa:ba;case"top-left":return t?Wa:Sa;case"top-right":return t?Va:ka;case"up":return e?t?$a:Ca:t?Ua:xa;default:return t?Aa:fa}}(n,a,r)),[n,r,a]);return Xr(Oa,{keyframes:o,...i})};Gr`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,Gr`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,Gr`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,Gr`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,Gr`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;Gr`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,Gr`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,Gr`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Gr`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;Gr`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Gr`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Gr`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Gr`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Gr`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Gr`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,Gr`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,Gr`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Gr`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Gr`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;Gr`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Gr`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Gr`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Gr`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Gr`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,Gr`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,Gr`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,Gr`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;Gr`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,Gr`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Gr`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Gr`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Gr`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Gr`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,Gr`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Gr`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,Gr`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,Gr`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function Ka(){return(0,He.jsxs)(fn,{id:"about",children:[(0,He.jsxs)("div",{className:"about-text",children:[(0,He.jsx)(Ba,{direction:"left",children:(0,He.jsx)("h2",{children:"About me"})}),(0,He.jsx)(Ba,{direction:"left",delay:100,children:(0,He.jsx)("p",{children:"Since 2017, I have been focused on electronics and robotics development. I have three years of experience in robotics competitions and one year of industry experience."})}),(0,He.jsx)(Ba,{direction:"left",delay:150,style:{marginTop:"2rem",marginBottom:"2rem"},children:(0,He.jsxs)("p",{children:["With a diverse skill set, I work across multiple domains, including mechanical design, PCB design, and firmware development. My expertise lies primarily in ",(0,He.jsx)("span",{className:"highlight",children:"ARM-based firmware programming"}),", particularly with the STM32 series, as well as robotics software development using the ",(0,He.jsx)("span",{className:"highlight",children:"Robot Operating System (ROS)"})," on Linux-based platforms like Jetson and Raspberry Pi. I also ",(0,He.jsx)("span",{className:"highlight",children:"design PCBs"})," using Altium Designer and PADS Suite and ",(0,He.jsx)("span",{className:"highlight",children:"create 3D models"})," in SolidWorks."]})}),(0,He.jsx)(Ba,{direction:"left",delay:200,children:(0,He.jsx)("h3",{children:"Here are my main skills:"})}),(0,He.jsx)("div",{className:"hard-skills",children:[vn,yn,gn,bn,wn].map(((e,t)=>{const n={width:e===gn?"60%":e===yn||e===vn?"80%":e===wn?"90%":"100%"};return(0,He.jsx)("div",{className:"hability",children:(0,He.jsx)(Ba,{direction:"up",delay:100+20*t,children:(0,He.jsx)("div",{className:"icon-wrapper",children:(0,He.jsx)("img",{src:e,alt:"Skill Icon",style:n})})})},t)}))}),(0,He.jsx)(Ba,{direction:"left",delay:300,style:{marginTop:"2rem",marginBottom:"2rem"},children:(0,He.jsxs)("p",{children:["After 2022, I moved to Australia and gradually transitioned into software and cloud development while expanding on my past projects. I earned the ",(0,He.jsx)("span",{className:"highlight",children:"Cisco Certified Network Associate (CCNA)"})," and ",(0,He.jsx)("span",{className:"highlight",children:"AWS Certified Cloud Practitioner certifications"})," and am now aiming to achieve the associate-level certification within the next few months."]})}),(0,He.jsx)(Ba,{direction:"left",delay:350,children:(0,He.jsx)("h3",{children:"Here are my certificates:"})}),(0,He.jsx)("div",{className:"hard-skills",children:[mn,hn].map(((e,t)=>(0,He.jsx)("div",{className:"hability",children:(0,He.jsx)(Ba,{direction:"up",delay:100+20*t,children:(0,He.jsxs)("div",{className:"icon-wrapper",children:[" ",(0,He.jsx)("img",{src:e,alt:"Skill Icon"})]})})},t)))})]}),(0,He.jsx)("div",{className:"about-image",children:(0,He.jsx)(Ba,{direction:"right",delay:200,children:(0,He.jsx)("img",{src:pn,alt:"Herman Tang"})})})]})}const qa=Le.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project{
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      &:hover{
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        a > img {
          width: 5.0rem;
        }
      }
      
      h3{
        margin-bottom: 2rem;
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }

      footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }

    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
    }
  }
`;const Xa=n.p+"static/media/external-link.8ce0d189635b118259ec51d8c9b4a1d0.svg";function Ya(){return(0,He.jsxs)(qa,{id:"project",children:[(0,He.jsx)("h2",{children:"My Projects"}),(0,He.jsxs)("div",{className:"projects",children:[(0,He.jsx)(sn(),{animateIn:"flipInX",children:(0,He.jsxs)("div",{className:"project",children:[(0,He.jsxs)("header",{children:[(0,He.jsxs)("svg",{width:"50",xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"#23ce6b",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[" ",(0,He.jsx)("title",{children:"Folder"})," ",(0,He.jsx)("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})," "]}),(0,He.jsxs)("div",{className:"project-links",children:[(0,He.jsx)("a",{href:"https://github.com/CodeVinayak/Serverless-Voting-Application",target:"_blank",rel:"noreferrer",children:(0,He.jsx)("img",{src:Fe,alt:"Visit site"})}),(0,He.jsx)("a",{href:"https://vote.vinayaksingh.com",target:"_blank",rel:"noreferrer",children:(0,He.jsx)("img",{src:Xa,alt:"Visit site"})})," "]})]}),(0,He.jsxs)("div",{className:"body",children:[(0,He.jsx)("h3",{children:"Serverless Voting Application for Programming Languages"}),(0,He.jsx)("p",{children:" Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI, leveraging serverless architecture for scalability and cost-efficiency. "})]}),(0,He.jsxs)("footer",{children:[" ",(0,He.jsxs)("ul",{className:"tech-list",children:[" ",(0,He.jsx)("li",{children:"AWS Lambda"})," ",(0,He.jsx)("li",{children:"API Gateway"})," ",(0,He.jsx)("li",{children:"DynamoDB"})," "]})," "]})]})}),(0,He.jsx)(sn(),{animateIn:"flipInX",children:(0,He.jsxs)("div",{className:"project",children:[(0,He.jsxs)("header",{children:[(0,He.jsxs)("svg",{width:"50",xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"#23ce6b ",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,He.jsx)("title",{children:"Folder"})," ",(0,He.jsx)("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})," "]}),(0,He.jsxs)("div",{className:"project-links",children:[(0,He.jsxs)("a",{href:"https://github.com/CodeVinayak/AI-Chatbot-Assistant",target:"_blank",rel:"noreferrer",children:[(0,He.jsx)("img",{src:Fe,alt:"Visit site"})," "]}),(0,He.jsx)("a",{href:"https://ai-chatbot-t8fn.onrender.com",target:"_blank",rel:"noreferrer",children:(0,He.jsx)("img",{src:Xa,alt:"Visit site"})})]})]}),(0,He.jsxs)("div",{className:"body",children:[(0,He.jsx)("h3",{children:"GeniusBot: AI-Powered Assistance with PDF Insight"}),(0,He.jsx)("p",{children:"Developed an interactive chatbot application using Streamlit, OpenAI's GPT-3.5-turbo language model, and PyPDF2 for PDF text extraction, enabling users to ask context-based questions on uploaded PDFs and general queries."})]}),(0,He.jsx)("footer",{children:(0,He.jsxs)("ul",{className:"tech-list",children:[(0,He.jsx)("li",{children:"Streamlit"}),(0,He.jsx)("li",{children:"PyPDF2"}),(0,He.jsx)("li",{children:"LangChain"})]})})]})}),(0,He.jsx)(sn(),{animateIn:"flipInX",children:(0,He.jsxs)("div",{className:"project",children:[(0,He.jsxs)("header",{children:[(0,He.jsxs)("svg",{width:"50",xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"#23ce6b",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,He.jsx)("title",{children:"Folder"}),(0,He.jsx)("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})]}),(0,He.jsxs)("div",{className:"project-links",children:[(0,He.jsx)("a",{href:"https://github.com/CodeVinayak/Jupyter-Notebook/tree/main/Credit%20Risk%20Analysis",target:"\\_blank",rel:"noreferrer",children:(0,He.jsx)("img",{src:Fe,alt:"Visit site"})}),(0,He.jsx)("a",{href:"https://github.com/CodeVinayak/Jupyter-Notebook/blob/main/Credit%20Risk%20Analysis/Credit_Risk_Analysis.ipynb",target:"\\_blank",rel:"noreferrer",children:(0,He.jsx)("img",{src:Xa,alt:"Visit site"})})]})]}),(0,He.jsxs)("div",{className:"body",children:[(0,He.jsx)("h3",{children:"Credit Risk Analysis Project"}),(0,He.jsx)("p",{children:"Developed a highly accurate credit risk classification model using XGBoost, achieving 100% precision, recall, and F1-scores for predicting loan defaults.Implemented rigorous data preprocessing, feature engineering, and hyperparameter tuning on imbalanced credit risk data, employing ensemble methods, cross-validation, and model interpretation techniques."})]}),(0,He.jsx)("footer",{children:(0,He.jsxs)("ul",{className:"tech-list",children:[(0,He.jsx)("li",{children:"XGBoost"}),(0,He.jsx)("li",{children:"Pandas"}),(0,He.jsx)("li",{children:"Matplotlib"})]})})]})}),(0,He.jsx)(sn(),{animateIn:"flipInX",children:(0,He.jsxs)("div",{className:"project",children:[(0,He.jsxs)("header",{children:[(0,He.jsxs)("svg",{width:"50",xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"#23ce6b ","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",children:[(0,He.jsx)("title",{children:"Folder"}),(0,He.jsx)("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})]}),(0,He.jsxs)("div",{className:"project-links",children:[(0,He.jsx)("a",{href:"https://github.com/CodeVinayak/MediBook-Medical-Appointment-Scheduler-with-Health-History",target:"_blank",rel:"noreferrer",children:(0,He.jsx)("img",{src:Fe,alt:"Visit site"})}),(0,He.jsx)("a",{href:"https://medibook.vinayaksingh.com",target:"_blank",rel:"noreferrer",children:(0,He.jsx)("img",{src:Xa,alt:"Visit site"})})]})]}),(0,He.jsxs)("div",{className:"body",children:[(0,He.jsx)("h3",{children:"MediBook: Medical Appointment Scheduler with Health History"}),(0,He.jsx)("p",{children:"Developed a secure medical appointment management platform with CRUD functionality, utilizing role-based access control, encryption techniques, and a robust MySQL database with normalized schema design and stored procedures for efficient scheduling, data privacy, and reliable retrieval of patient records."})]}),(0,He.jsx)("footer",{children:(0,He.jsxs)("ul",{className:"tech-list",children:[(0,He.jsx)("li",{children:"PHP"}),(0,He.jsx)("li",{children:"HTML"}),(0,He.jsx)("li",{children:"CSS"}),(0,He.jsx)("li",{children:"MySQL"})]})})]})}),(0,He.jsx)(sn(),{animateIn:"flipInX",children:(0,He.jsxs)("div",{className:"project",children:[(0,He.jsxs)("header",{children:[(0,He.jsxs)("svg",{width:"50",xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"#23ce6b",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,He.jsx)("title",{children:"Code"}),(0,He.jsx)("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})]}),(0,He.jsxs)("div",{className:"project-links",children:[(0,He.jsx)("a",{href:"https://github.com/CodeVinayak/Real-Time-Hand-Gesture-Driven-3D-Object-Manipulation",target:"_blank",rel:"noreferrer",children:(0,He.jsx)("img",{src:Fe,alt:"Visit site"})}),(0,He.jsx)("a",{href:"https://youtu.be/NOm-3MynPLE",target:"_blank",rel:"noreferrer",children:(0,He.jsx)("img",{src:Xa,alt:"Visit site"})})]})]}),(0,He.jsxs)("div",{className:"body",children:[(0,He.jsx)("h3",{children:"Real-Time Hand Gesture-Driven 3D Object Manipulation"}),(0,He.jsx)("p",{children:"Developed a real-time hand gesture recognition system for intuitive 3D object manipulation. Leveraged a multimodal approach integrating OpenCV for video processing, MediaPipe for hand detection/landmark extraction, and scikit-learn for machine learning model training. Achieved 95.2% accuracy in hand gesture classification with efficient real-time performance."})]}),(0,He.jsx)("footer",{children:(0,He.jsxs)("ul",{className:"tech-list",children:[(0,He.jsx)("li",{children:"OpenCV"}),(0,He.jsx)("li",{children:"MediaPipe"}),(0,He.jsx)("li",{children:"scikit-learn"})]})})]})}),(0,He.jsx)(sn(),{animateIn:"flipInX",children:(0,He.jsxs)("div",{className:"project",children:[(0,He.jsxs)("header",{children:[(0,He.jsxs)("svg",{width:"50",xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"#23ce6b ","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",children:[(0,He.jsx)("title",{children:"Folder"}),(0,He.jsx)("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})]}),(0,He.jsx)("div",{className:"project-links",children:(0,He.jsx)("a",{href:"https://velocityai.vinayaksingh.com/",target:"_blank",rel:"noreferrer",children:(0,He.jsx)("img",{src:Xa,alt:"Visit site"})})})]}),(0,He.jsxs)("div",{className:"body",children:[(0,He.jsx)("h3",{children:"VeloCityAI"}),(0,He.jsx)("p",{children:"VelocityAI is a website that allows users to get instant answers to any question and generate stunning AI pictures using OpenAI's GPT-3 and DALL-E model.With VelocityAI, users can type in text-based prompts and receive a corresponding response."})]}),(0,He.jsx)("footer",{children:(0,He.jsxs)("ul",{className:"tech-list",children:[(0,He.jsx)("li",{children:"React"}),(0,He.jsx)("li",{children:"Typescript"}),(0,He.jsx)("li",{children:"Html"}),(0,He.jsx)("li",{children:"css"})]})})]})})]})]})}const Qa=Le.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 3.4rem;
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--CsiroBlue);
  }

  h3 {
    margin-top: 2rem;
    color: var(--CsiroBlue);
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  /* ✅ Updated .arcentry section to use an iframe instead of an image */
  .arcentry {
    text-align: center;
    order: -1;

    iframe {
      margin-top: 2rem;
      width: 100%;
      max-width: 1400px;
      height: 600px;
      border: none;
    }
  }

  /* ✅ Mobile-friendly adjustments */
  @media only screen and (max-width: 480px) {
    .arcentry {
      max-width: 100%;
      margin-top: 4rem;

      iframe {
        width: 100%;
        height: auto;
        min-height: 300px;
      }
    }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .hard-skills {
      justify-content: center;
    }

    .arcentry {
      display: flex;
      justify-content: center;
      max-width: 100%;

      iframe {
        width: 100%;
        height: 400px;
      }
    }
  }
`,Ga=n.p+"static/media/aws-icon.03bb364c28b1f3b4fac2.png";function Ja(){return(0,He.jsxs)(Qa,{id:"architecture",children:[(0,He.jsxs)("div",{className:"about-text",children:[(0,He.jsx)(Ba,{direction:"right",children:(0,He.jsx)("h2",{children:"Cloud Development Experience"})}),(0,He.jsx)(Ba,{direction:"right",delay:100,children:(0,He.jsxs)("p",{children:["I have ",(0,He.jsx)("span",{className:"highlight",children:"designed and deployed web pages and web applications"})," for various projects, ranging from application demonstrations to data visualization. I am most familiar with ",(0,He.jsx)("span",{className:"highlight",children:"React + AWS framework"}),", which follows a similar architecture to this profile page."]})}),(0,He.jsx)(Ba,{direction:"right",delay:200,style:{marginTop:"2rem",marginBottom:"2rem"},children:(0,He.jsxs)("p",{children:["I developed this website using ",(0,He.jsx)("span",{className:"highlight",children:"React"})," for the frontend and hosted it on an ",(0,He.jsx)("span",{className:"highlight",children:"AWS S3 Bucket"}),", with ",(0,He.jsx)("span",{className:"highlight",children:"CloudFront"})," providing global caching. I also registered a custom domain using ",(0,He.jsx)("span",{className:"highlight",children:"Amazon Route 53"}),", and the website supports ",(0,He.jsx)("span",{className:"highlight",children:"REST API handling"}),", enabling seamless integration with ",(0,He.jsx)("span",{className:"highlight",children:"serverless computing"})," and ",(0,He.jsx)("span",{className:"highlight",children:"database services"}),"."]})}),(0,He.jsx)(Ba,{direction:"right",delay:300,style:{marginTop:"2rem",marginBottom:"2rem"},children:(0,He.jsxs)("p",{children:["A ",(0,He.jsx)("span",{className:"highlight",children:"DevOps workflow"})," is also in place, where every Git push triggers a ",(0,He.jsx)("span",{className:"highlight",children:"CI/CD pipeline"}),"to perform ",(0,He.jsx)("span",{className:"highlight",children:"build testing"})," and ",(0,He.jsx)("span",{className:"highlight",children:"auto-deployment on AWS"}),"."]})}),(0,He.jsx)(Ba,{direction:"right",delay:400,children:(0,He.jsx)("h3",{children:"Here are my main skills:"})}),(0,He.jsx)("div",{className:"hard-skills",children:[Me,Ga].map(((e,t)=>(0,He.jsx)("div",{className:"hability",children:(0,He.jsx)(Ba,{direction:"up",delay:100+20*t,children:(0,He.jsx)("div",{className:"icon-wrapper",children:(0,He.jsx)("img",{src:e,alt:"Skill Icon",style:{width:"70%"}})})})},t)))})]}),(0,He.jsx)("div",{className:"arcentry",children:(0,He.jsx)("iframe",{src:"https://arcentry.com/app/embed.html?id=8d0d3b82-e25f-4882-8c20-24552133744e"})})]})}const Za=Le.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  justify-content: center;
  align-items: start;

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 3.4rem;
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--CsiroBlue);
  }

  h3 {
    margin-top: 2rem;
    color: var(--CsiroBlue);
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  /* ✅ Ensure PaperCard is properly aligned */
  .paper-card {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* ✅ Google Slides iframe styling */
  .presentation {
    width: 100%;
    text-align: center;

    iframe {
      max-width: 100%;
      height: 400px;
      border: none;
    }
  }

  /* ✅ Reduce the gap between Google Slides and Photo Album */
  .photo-album {
    text-align: center;
    margin-top: -40px; /* ✅ Reduce spacing */
    display: flex;
    justify-content: center;
  }

  /* ✅ Mobile-friendly adjustments */
  @media only screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .hard-skills {
      justify-content: center;
    }

    .paper-card {
      width: 100%;
    }

    .presentation {
      width: 100%;
    }

    .photo-album {
      width: 100%;
      margin-top: 0px;
    }
  }
`,ei=Le.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 700px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  color: white;
  margin: 20px auto;
  text-align: center;

  h3 {
    font-size: 1.6rem;
    margin-bottom: 8px;
    font-weight: bold;
    color: var(--CsiroBlue);
  }

  p {
    font-size: 1.4rem;
    line-height: 1.4;
  }

  .button {
    display: inline-block;
    margin-top: 12px;
    padding: 10px 20px;
    font-size: 1.4rem;
    background: var(--IeeeBlue);
    color: #ffffff;
    border-radius: 5px;
    text-decoration: none;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: var(--CsiroBlue);
    }
  }
`;function ti(){return(0,He.jsxs)(ei,{children:[(0,He.jsx)("h3",{children:"Zhiheng Tang (CSIRO), Chuong Nguyen (CSIRO), Sundaram Muthu (CSIRO)"}),(0,He.jsx)("p",{children:"\u201cDynamic SLAM using video object segmentation: A low-cost setup for mobile robots,\u201d DICTA 2024, Perth, Australia."}),(0,He.jsx)("a",{href:"https://ieeexplore.ieee.org/document/10869536",target:"_blank",rel:"noopener noreferrer",className:"button",children:"IEEE Xplore Link"})]})}var ni=n(1577);const ri=n.p+"static/media/Lab_Robot_Arm.cc59523193897230c0f2.jpg",ai=n.p+"static/media/Sensor_Set.5c7d952cb1e6812eddc3.jpg",ii=Le.div`
  max-width: 600px;
  margin: 40px auto; /* ✅ Centers the album */
  text-align: center;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
    color: var(--CsiroBlue);
  }

  .carousel .slide img {
    border-radius: 1rem;
  }
`;function oi(){return(0,He.jsxs)(ii,{children:[(0,He.jsx)("h3",{children:"Photo Album"}),(0,He.jsxs)(ni.FN,{showArrows:!0,infiniteLoop:!0,autoPlay:!1,interval:3e3,showThumbs:!1,children:[(0,He.jsx)("div",{children:(0,He.jsx)("img",{src:ri,alt:"Robot Arm"})}),(0,He.jsx)("div",{children:(0,He.jsx)("img",{src:ri,alt:"Poster Session"})}),(0,He.jsx)("div",{children:(0,He.jsx)("img",{src:ai,alt:"Sensor Set"})})]})]})}function li(){return(0,He.jsxs)(Za,{id:"CSIRO",children:[(0,He.jsx)("div",{className:"left-column",children:(0,He.jsxs)("div",{className:"about-text",children:[(0,He.jsx)(Ba,{direction:"left",children:(0,He.jsx)("h2",{children:"Robotics SLAM Research at CSIRO"})}),(0,He.jsx)(Ba,{direction:"left",delay:100,children:(0,He.jsxs)("p",{children:["From ",(0,He.jsx)("span",{className:"highlight",children:"July 2023 to November 2024"}),", I worked at ",(0,He.jsx)("span",{className:"highlight",children:"CSIRO"})," as a ",(0,He.jsx)("span",{className:"highlight",children:"software engineer"}),", focusing on improving ",(0,He.jsx)("span",{className:"highlight",children:"dynamic SLAM algorithms"}),"."]})}),(0,He.jsx)(Ba,{direction:"left",delay:150,style:{marginTop:"2rem",marginBottom:"2rem"},children:(0,He.jsxs)("p",{children:["To collect data and validate our appoach, I developed an ",(0,He.jsx)("span",{className:"highlight",children:"indoor scanning robot"})," equipped with an ",(0,He.jsx)("span",{className:"highlight",children:"NVIDIA AGX Xavier"}),", ",(0,He.jsx)("span",{className:"highlight",children:"RealSense D435i depth camera"}),", and ",(0,He.jsx)("span",{className:"highlight",children:"Mid-360 LiDAR"}),". I also programmed the ",(0,He.jsx)("span",{className:"highlight",children:"ROS system"})," for ",(0,He.jsx)("span",{className:"highlight",children:"real-time odometry"})," and ",(0,He.jsx)("span",{className:"highlight",children:"3D reconstruction"}),"."]})}),(0,He.jsx)(Ba,{direction:"left",delay:200,children:(0,He.jsxs)("p",{children:["Our research was ",(0,He.jsx)("span",{className:"highlight",children:"published at the DICTA 2024 Conference"}),"."]})}),(0,He.jsx)(Ba,{direction:"left",delay:250,children:(0,He.jsx)("h3",{children:"Research Abstract:"})}),(0,He.jsx)(Ba,{direction:"left",delay:300,style:{marginTop:"2rem",marginBottom:"2rem"},children:(0,He.jsxs)("p",{children:["Existing ",(0,He.jsx)("span",{className:"highlight",children:"dynamic SLAM"})," solutions often rely on ",(0,He.jsx)("span",{className:"highlight",children:"single-object semantic segmentation"}),", which is effective only when object classes are known and their static or dynamic nature is predefined. To address this limitation, we introduce ",(0,He.jsx)("span",{className:"highlight",children:"video object segmentation (VOS)"}),", which combines ",(0,He.jsx)("span",{className:"highlight",children:"segmentation and tracking"})," for improved dynamic SLAM performance. Additionally, we designed a ",(0,He.jsx)("span",{className:"highlight",children:"low-cost mobile robot system"})," tailored for dynamic SLAM applications and curated a dataset using ",(0,He.jsx)("span",{className:"highlight",children:"affordable RGB-D sensors"}),"."]})}),(0,He.jsx)(Ba,{direction:"up",delay:350,children:(0,He.jsx)("div",{className:"paper-card",children:(0,He.jsx)(ti,{})})})]})}),(0,He.jsxs)("div",{className:"right-column",children:[(0,He.jsx)("div",{className:"presentation",children:(0,He.jsx)("iframe",{src:"https://docs.google.com/presentation/d/e/2PACX-1vRThqybjSzsoWtsu8hzs0PejUhcT_Ml7h6kNqI04-RQ5VaJnyQkV7C8jkJ2h1oT3EgmX0xe-ZNFJZr7/embed?start=false&loop=true&delayms=60000",frameBorder:"0",width:"100%",height:"400px",allowFullScreen:!0})}),(0,He.jsx)("div",{className:"photo-album",children:(0,He.jsx)(oi,{})})]})]})}function si(){return(0,e.useEffect)((()=>{const e=document.querySelector("iframe");if(!e)return;const t=()=>{const e=window.innerWidth-document.documentElement.clientWidth;document.documentElement.style.setProperty("--scrollbar-width",`${e}px`),document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=`${e}px`},n=()=>{document.documentElement.style.setProperty("--scrollbar-width","0px"),document.documentElement.style.overflow="",document.documentElement.style.paddingRight=""};return e.addEventListener("mouseover",t),e.addEventListener("mouseleave",n),()=>{e.removeEventListener("mouseover",t),e.removeEventListener("mouseleave",n)}}),[]),(0,He.jsxs)(an,{children:[(0,He.jsx)(dn,{}),(0,He.jsx)(Ka,{}),(0,He.jsx)(Ja,{}),(0,He.jsx)(li,{}),(0,He.jsx)(Ya,{})]})}const ui=(function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];var i=be.apply(void 0,[t].concat(r)),o="sc-global-"+Ce(JSON.stringify(i)),l=new ze(i,o);function s(t){var n=le(),r=se(),a=(0,e.useContext)(Te),i=(0,e.useRef)(n.allocateGSInstance(o)).current;return n.server&&u(i,t,n,a,r),(0,e.useLayoutEffect)((function(){if(!n.server)return u(i,t,n,a,r),function(){return l.removeStyles(i,n)}}),[i,t,n,a,r]),null}function u(e,t,n,r,a){if(l.isStatic)l.renderStyles(e,E,n,a);else{var i=h({},t,{theme:we(t,r,s.defaultProps)});l.renderStyles(e,i,n,a)}}return e.memo(s)})`
  :root {
    --pink: #E31F71;
    --black: #212121;
    --green: #23ce6b;
    --blue: #016fb9;
    --CsiroBlue #00AEEF;
    --AnuGold #B68D40;
    --IeeeBlue #062D4F;
    scroll-padding-top: 10rem;
  }

  /* ✅ Add Highlight */
  .highlight {
    color: var(--AnuGold);
    font-weight: bold;
  }

    /* ✅ Add Transparent White Circle */
  .icon-wrapper {
    width: 14rem; /* ✅ Slightly larger than icon */
    height: 14rem; /* ✅ Creates circular effect */
    background: rgba(255, 255, 255, 1); /* ✅ Semi-transparent white */
    border-radius: 50%; /* ✅ Makes it a circle */
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* ✅ Optional: Adds a subtle shadow */
  }

  .icon-wrapper img {
    width: 12rem; /* ✅ Keep icon size unchanged */
    height: auto;
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--black); /* ✅ Always dark theme */
    color: #FFFF;
  }

  body, input, textarea, button {
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  button, .button {
    border: none;
    cursor: pointer;
    background-color: var(--CsiroBlue);
    color: #FFFF;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    
    &:hover {
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled {
    filter: brightness(0.8);
    cursor: not-allowed;
  }

  .logo {
    font-size: 3rem;
    color: #FFFF;
  }
`;function ci(){return"undefined"!==typeof window}function di(){try{const e="production";if("development"===e||"test"===e)return"development"}catch(vi){}return"production"}function fi(){return(ci()?window.vam:di())||"production"}function pi(){return"development"===fi()}function hi(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{debug:!0};var t;if(!ci())return;!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto";window.vam="auto"!==e?e:di()}(e.mode),window.va||(window.va=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];(window.vaq=window.vaq||[]).push(t)}),e.beforeSend&&(null==(t=window.va)||t.call(window,"beforeSend",e.beforeSend));const n=function(e){return e.scriptSrc?e.scriptSrc:pi()?"https://va.vercel-scripts.com/v1/script.debug.js":e.basePath?`${e.basePath}/insights/script.js`:"/_vercel/insights/script.js"}(e);if(document.head.querySelector(`script[src*="${n}"]`))return;const r=document.createElement("script");r.src=n,r.defer=!0,r.dataset.sdkn="@vercel/analytics"+(e.framework?`/${e.framework}`:""),r.dataset.sdkv="1.5.0",e.disableAutoTrack&&(r.dataset.disableAutoTrack="1"),e.endpoint?r.dataset.endpoint=e.endpoint:e.basePath&&(r.dataset.endpoint=`${e.basePath}/insights`),e.dsn&&(r.dataset.dsn=e.dsn),r.onerror=()=>{const e=pi()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${e}`)},pi()&&!1===e.debug&&(r.dataset.debug="false"),document.head.appendChild(r)}function mi(){if("undefined"!==typeof process)return{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}function gi(t){return(0,e.useEffect)((()=>{var e;t.beforeSend&&(null==(e=window.va)||e.call(window,"beforeSend",t.beforeSend))}),[t.beforeSend]),(0,e.useEffect)((()=>{hi({framework:t.framework||"react",basePath:t.basePath??mi(),...void 0!==t.route&&{disableAutoTrack:!0},...t})}),[]),(0,e.useEffect)((()=>{t.route&&t.path&&function(e){let{route:t,path:n}=e;var r;null==(r=window.va)||r.call(window,"pageview",{route:t,path:n})}({route:t.route,path:t.path})}),[t.route,t.path]),null}const yi=function(){return(0,He.jsxs)(He.Fragment,{children:[(0,He.jsx)(ui,{}),(0,He.jsx)(nn,{}),(0,He.jsx)(si,{}),(0,He.jsx)(gi,{}),(0,He.jsx)(We,{})]})};r.createRoot(document.getElementById("root")).render((0,He.jsx)(e.StrictMode,{children:(0,He.jsx)(yi,{})}))})()})();
//# sourceMappingURL=main.5e2c4602.js.map