import{m as $,c as L,w as R,u as mt,a as gt,b as _t,H as Et,_ as bt,d as vt,e as Bt,f as yt,g as Ct,h as wt,i as Ft,j as Dt,k as At,l as Xt,n as Tt,o as St,p as xt,q as jt,F as kt}from"./index.1dfa4fb2.js";import{R as u,r as y}from"./vendor.84e4e883.js";import{d as V}from"./dev-log.2ddb44cd.js";import{s as It}from"./index.9490663d.js";import{b as J}from"./bound.0dcbd343.js";function Pt(i,t,e){return Math.max(t,Math.min(i,e))}const _={toVector(i,t){return i===void 0&&(i=t),Array.isArray(i)?i:[i,i]},add(i,t){return[i[0]+t[0],i[1]+t[1]]},sub(i,t){return[i[0]-t[0],i[1]-t[1]]},addTo(i,t){i[0]+=t[0],i[1]+=t[1]},subTo(i,t){i[0]-=t[0],i[1]-=t[1]}};function Z(i,t,e){return t===0||Math.abs(t)===1/0?Math.pow(i,e*5):i*t*e/(t+e*i)}function Q(i,t,e,s=.15){return s===0?Pt(i,t,e):i<t?-Z(t-i,e-t,s)+t:i>e?+Z(i-e,e-t,s)+e:i}function Ot(i,[t,e],[s,r]){const[[n,a],[o,c]]=i;return[Q(t,n,a,s),Q(e,o,c,r)]}function b(i,t,e){return t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}function tt(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(i);t&&(s=s.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),e.push.apply(e,s)}return e}function h(i){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?tt(Object(e),!0).forEach(function(s){b(i,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):tt(Object(e)).forEach(function(s){Object.defineProperty(i,s,Object.getOwnPropertyDescriptor(e,s))})}return i}const et={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function it(i){return i?i[0].toUpperCase()+i.slice(1):""}function Mt(i,t="",e=!1){const s=et[i],r=s&&s[t]||t;return"on"+it(i)+it(r)+(e?"Capture":"")}function Nt(i,t=""){const e=et[i],s=e&&e[t]||t;return i+s}function q(i){return"touches"in i}function Lt(i){return Array.from(i.touches).filter(t=>{var e,s;return t.target===i.currentTarget||((e=i.currentTarget)===null||e===void 0||(s=e.contains)===null||s===void 0?void 0:s.call(e,t.target))})}function Rt(i){return i.type==="touchend"?i.changedTouches:i.targetTouches}function st(i){return q(i)?Rt(i)[0]:i}function Vt(i){return Lt(i).map(t=>t.identifier)}function K(i){const t=st(i);return q(i)?t.identifier:t.pointerId}function rt(i){const t=st(i);return[t.clientX,t.clientY]}function qt(i){const t={};if("buttons"in i&&(t.buttons=i.buttons),"shiftKey"in i){const{shiftKey:e,altKey:s,metaKey:r,ctrlKey:n}=i;Object.assign(t,{shiftKey:e,altKey:s,metaKey:r,ctrlKey:n})}return t}function P(i,...t){return typeof i=="function"?i(...t):i}function Kt(){}function zt(...i){return i.length===0?Kt:i.length===1?i[0]:function(){let t;for(const e of i)t=e.apply(this,arguments)||t;return t}}function ut(i,t){return Object.assign({},t,i||{})}const Ut=32;class Yt{constructor(t,e,s){this.ctrl=t,this.args=e,this.key=s,this.state||(this.state={values:[0,0],initial:[0,0]},this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(t){this.ctrl.state[this.key]=t}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:t,shared:e,config:s,ingKey:r,args:n}=this,{transform:a,threshold:o=[0,0]}=s;e[r]=t._active=t.active=t._blocked=t._force=!1,t._step=[!1,!1],t.intentional=!1,t._movement=[0,0],t._distance=[0,0],t._delta=[0,0],t._threshold=_.sub(a(o),a([0,0])).map(Math.abs),t._bounds=[[-1/0,1/0],[-1/0,1/0]],t.args=n,t.axis=void 0,t.memo=void 0,t.elapsedTime=0,t.direction=[0,0],t.distance=[0,0],t.velocity=[0,0],t.movement=[0,0],t.delta=[0,0],t.timeStamp=0}start(t){const e=this.state,s=this.config;e._active||(this.reset(),e._active=!0,e.target=t.target,e.currentTarget=t.currentTarget,e.initial=e.values,e.lastOffset=s.from?P(s.from,e):e.offset,e.offset=e.lastOffset),e.startTime=e.timeStamp=t.timeStamp}compute(t){const{state:e,config:s,shared:r}=this;e.args=this.args;let n=0;if(t&&(e.event=t,s.preventDefault&&t.cancelable&&e.event.preventDefault(),e.type=t.type,r.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,r.locked=!!document.pointerLockElement,Object.assign(r,qt(t)),r.down=r.pressed=r.buttons%2==1||r.touches>0,n=t.timeStamp-e.timeStamp,e.timeStamp=t.timeStamp,e.elapsedTime=e.timeStamp-e.startTime),e._active){const C=e._delta.map(Math.abs);_.addTo(e._distance,C)}const[a,o]=s.transform(e._movement),[c,f]=e._threshold;let[l,m]=e._step;if(l===!1&&(l=Math.abs(a)>=c&&Math.sign(a)*c),m===!1&&(m=Math.abs(o)>=f&&Math.sign(o)*f),e.intentional=l!==!1||m!==!1,!e.intentional)return;e._step=[l,m];const g=[0,0];if(g[0]=l!==!1?a-l:0,g[1]=m!==!1?o-m:0,this.intent&&this.intent(g),(e._active&&!e._blocked||e.active)&&(e.first=e._active&&!e.active,e.last=!e._active&&e.active,e.active=r[this.ingKey]=e._active,t)){e.first&&("bounds"in s&&(e._bounds=P(s.bounds,e)),this.setup&&this.setup()),e.movement=g;const C=e.offset;if(this.computeOffset(),!e.last||n>Ut){e.delta=_.sub(e.offset,C);const w=e.delta.map(Math.abs);_.addTo(e.distance,w),e.direction=e.delta.map(Math.sign),!e.first&&n>0&&(e.velocity=[w[0]/n,w[1]/n])}}const A=e._active?s.rubberband||[0,0]:[0,0];e.offset=Ot(e._bounds,e.offset,A),this.computeMovement()}emit(){const t=this.state,e=this.shared,s=this.config;if(t._active||this.clean(),(t._blocked||!t.intentional)&&!t._force&&!s.triggerAllEvents)return;const r=this.handler(h(h(h({},e),t),{},{[this.aliasKey]:t.values}));r!==void 0&&(t.memo=r)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}function Gt([i,t]){const e=Math.abs(i)-Math.abs(t);if(e>0)return"x";if(e<0)return"y"}function Ht(i,t){switch(t){case"x":i[1]=0;break;case"y":i[0]=0;break}}class Wt extends Yt{constructor(...t){super(...t);b(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=_.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=_.sub(this.state.offset,this.state.lastOffset)}intent(t){this.state.axis=this.state.axis||Gt(t),this.state._blocked=(this.config.lockDirection||!!this.config.axis)&&!this.state.axis||!!this.config.axis&&this.config.axis!==this.state.axis,!this.state._blocked&&(this.config.axis||this.config.lockDirection)&&Ht(t,this.state.axis)}}const nt=.15,ot={enabled(i=!0){return i},preventDefault(i=!1){return i},triggerAllEvents(i=!1){return i},rubberband(i=0){switch(i){case!0:return[nt,nt];case!1:return[0,0];default:return _.toVector(i)}},from(i){if(typeof i=="function")return i;if(i!=null)return _.toVector(i)},transform(i,t,e){return i||e.shared.transform}},T=h(h({},ot),{},{axis(i,t,{axis:e}){if(this.lockDirection=e==="lock",!this.lockDirection)return e},bounds(i={}){if(typeof i=="function")return n=>T.bounds(i(n));if("current"in i)return()=>i.current;if(typeof HTMLElement=="function"&&i instanceof HTMLElement)return i;const{left:t=-1/0,right:e=1/0,top:s=-1/0,bottom:r=1/0}=i;return[[t,e],[s,r]]}}),O=10,at={ArrowRight:(i=1)=>[O*i,0],ArrowLeft:(i=1)=>[-O*i,0],ArrowUp:(i=1)=>[0,-O*i],ArrowDown:(i=1)=>[0,O*i]};class $t extends Wt{constructor(...t){super(...t);b(this,"ingKey","dragging")}reset(){super.reset();const t=this.state;t._pointerId=void 0,t._pointerActive=!1,t._keyboardActive=!1,t._preventScroll=!1,t._delayed=!1,t.swipe=[0,0],t.tap=!1,t.canceled=!1,t.cancel=this.cancel.bind(this)}setup(){const t=this.state;if(t._bounds instanceof HTMLElement){const e=t._bounds.getBoundingClientRect(),s=t.currentTarget.getBoundingClientRect(),r={left:e.left-s.left+t.offset[0],right:e.right-s.right+t.offset[0],top:e.top-s.top+t.offset[1],bottom:e.bottom-s.bottom+t.offset[1]};t._bounds=T.bounds(r)}}cancel(){const t=this.state;t.canceled||(t.canceled=!0,t._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(t){const e=this.config,s=this.state;t.buttons!=null&&t.buttons!==e.pointerButtons||(this.ctrl.setEventIds(t),e.pointerCapture&&t.target.setPointerCapture(t.pointerId),!s._pointerActive&&(this.start(t),this.setupPointer(t),s._pointerId=K(t),s._pointerActive=!0,s.values=rt(t),s.initial=s.values,e.preventScroll?this.setupScrollPrevention(t):e.delay>0?this.setupDelayTrigger(t):this.startPointerDrag(t)))}startPointerDrag(t){const e=this.state;e._active=!0,e._preventScroll=!0,e._delayed=!1,this.compute(t),this.emit()}pointerMove(t){const e=this.state,s=this.config;if(!e._pointerActive||e.type===t.type&&t.timeStamp===e.timeStamp)return;const r=K(t);if(e._pointerId&&r!==e._pointerId)return;const n=rt(t);if(document.pointerLockElement===t.target?e._delta=[t.movementX,t.movementY]:(e._delta=_.sub(n,e.values),e.values=n),_.addTo(e._movement,e._delta),this.compute(t),e._delayed){this.timeoutStore.remove("dragDelay"),e.active=!1,this.startPointerDrag(t);return}if(s.preventScroll&&!e._preventScroll)if(e.axis)if(e.axis===s.preventScrollAxis||s.preventScrollAxis==="xy"){e._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(t);return}else return;this.emit()}pointerUp(t){this.ctrl.setEventIds(t);try{this.config.pointerCapture&&t.target.hasPointerCapture(t.pointerId)&&t.target.releasePointerCapture(t.pointerId)}catch(o){}const e=this.state,s=this.config;if(!e._pointerActive)return;const r=K(t);if(e._pointerId&&r!==e._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(t);const[n,a]=e._distance;if(e.tap=n<=3&&a<=3,e.tap&&s.filterTaps)e._force=!0;else{const[o,c]=e.direction,[f,l]=e.velocity,[m,g]=e.movement,[A,C]=s.swipe.velocity,[w,j]=s.swipe.distance,D=s.swipe.duration;e.elapsedTime<D&&(Math.abs(f)>A&&Math.abs(m)>w&&(e.swipe[0]=o),Math.abs(l)>C&&Math.abs(g)>j&&(e.swipe[1]=c))}this.emit()}pointerClick(t){this.state.tap||(t.preventDefault(),t.stopPropagation())}setupPointer(t){const e=this.config;let s=e.device;e.pointerLock&&t.currentTarget.requestPointerLock(),e.pointerCapture||(this.eventStore.add(this.sharedConfig.window,s,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,s,"end",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(t){this.state._preventScroll&&t.cancelable&&t.preventDefault()}setupScrollPrevention(t){Jt(t),this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1}),this.eventStore.add(this.sharedConfig.window,"touch","end",this.clean.bind(this),{passive:!1}),this.eventStore.add(this.sharedConfig.window,"touch","cancel",this.clean.bind(this),{passive:!1}),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScroll,t)}setupDelayTrigger(t){this.state._delayed=!0,this.timeoutStore.add("dragDelay",this.startPointerDrag.bind(this),this.config.delay,t)}keyDown(t){const e=at[t.key],s=this.state;if(e){const r=t.shiftKey?10:t.altKey?.1:1;s._delta=e(r),this.start(t),s._keyboardActive=!0,_.addTo(s._movement,s._delta),this.compute(t),this.emit()}}keyUp(t){t.key in at&&(this.state._keyboardActive=!1,this.setActive(),this.compute(t),this.emit())}bind(t){const e=this.config.device;t(e,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(t(e,"change",this.pointerMove.bind(this)),t(e,"end",this.pointerUp.bind(this)),t(e,"cancel",this.pointerUp.bind(this))),t("key","down",this.keyDown.bind(this)),t("key","up",this.keyUp.bind(this)),this.config.filterTaps&&t("click","",this.pointerClick.bind(this),{capture:!0})}}function Jt(i){"persist"in i&&typeof i.persist=="function"&&i.persist()}const S=typeof window!="undefined"&&window.document&&window.document.createElement;function ct(){return S&&"ontouchstart"in window}function Zt(){return ct()||S&&window.navigator.maxTouchPoints>1}function Qt(){return S&&"onpointerdown"in window}function te(){return S&&"exitPointerLock"in window.document}function ee(){try{return"constructor"in GestureEvent}catch(i){return!1}}const v={isBrowser:S,gesture:ee(),touch:ct(),touchscreen:Zt(),pointer:Qt(),pointerLock:te()},ie=250,se=180,re=.5,ue=50,ne=250,oe=h(h({},T),{},{pointerLock(i,t,{pointer:{lock:e=!1,touch:s=!1}={}}){return this.useTouch=v.touch&&s,v.pointerLock&&e},device(i,t){return this.useTouch?"touch":this.pointerLock?"mouse":v.pointer?"pointer":v.touch?"touch":"mouse"},preventScroll(i=!1,t,{preventScrollAxis:e="y"}){return e&&(this.preventScrollAxis=e),v.touchscreen?typeof i=="number"?i:i?ie:!1:!1},pointerCapture(i,t,{pointer:{capture:e=!0,buttons:s=1}={}}){return this.pointerButtons=s,!this.pointerLock&&this.device==="pointer"&&e},threshold(i,t,{filterTaps:e=!1,axis:s=void 0}){const r=_.toVector(i,e?3:s?1:0);return this.filterTaps=e,r},swipe({velocity:i=re,distance:t=ue,duration:e=ne}={}){return{velocity:this.transform(_.toVector(i)),distance:this.transform(_.toVector(t)),duration:e}},delay(i=0){switch(i){case!0:return se;case!1:return 0;default:return i}}});h(h({},ot),{},{useTouch(i,t,{pointer:{touch:e=!1}={}}){return v.touch&&e},device(i,t,e){if(e.shared.target&&!v.touch&&v.gesture)return"gesture";if(this.useTouch)return"touch";if(v.touchscreen){if(v.pointer)return"pointer";if(v.touch)return"touch"}},bounds(i,t,{scaleBounds:e={},angleBounds:s={}}){const r=a=>{const o=ut(P(e,a),{min:-1/0,max:1/0});return[o.min,o.max]},n=a=>{const o=ut(P(s,a),{min:-1/0,max:1/0});return[o.min,o.max]};return typeof e!="function"&&typeof s!="function"?[r(),n()]:a=>[r(a),n(a)]},threshold(i,t,e){return this.lockDirection=e.axis==="lock",_.toVector(i,this.lockDirection?[.1,3]:0)}});h(h({},T),{},{mouseOnly:(i=!0)=>i});h(h({},T),{},{mouseOnly:(i=!0)=>i});const lt=new Map,z=new Map;function ae(i){lt.set(i.key,i.engine),z.set(i.key,i.resolver)}const ce={key:"drag",engine:$t,resolver:oe};function le(i,t){if(i==null)return{};var e={},s=Object.keys(i),r,n;for(n=0;n<s.length;n++)r=s[n],!(t.indexOf(r)>=0)&&(e[r]=i[r]);return e}function de(i,t){if(i==null)return{};var e=le(i,t),s,r;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);for(r=0;r<n.length;r++)s=n[r],!(t.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,s)||(e[s]=i[s]))}return e}const fe=i=>i,pe={target(i){if(i)return()=>"current"in i?i.current:i},enabled(i=!0){return i},window(i=v.isBrowser?window:void 0){return i},eventOptions({passive:i=!0,capture:t=!1}={}){return{passive:i,capture:t}},transform(i=fe){return i}},he=["target","eventOptions","window","enabled","transform"];function M(i={},t){const e={};for(const[s,r]of Object.entries(t))switch(typeof r){case"function":e[s]=r.call(e,i[s],s,i);break;case"object":e[s]=M(i[s],r);break;case"boolean":r&&(e[s]=i[s]);break}return e}function me(i,t){const e=i,{target:s,eventOptions:r,window:n,enabled:a,transform:o}=e,c=de(e,he),f={shared:M({target:s,eventOptions:r,window:n,enabled:a,transform:o},pe)};if(t){const l=z.get(t);f[t]=M(h({shared:f.shared},c),l)}else for(const l in c){const m=z.get(l);m&&(f[l]=M(h({shared:f.shared},c[l]),m))}return f}class dt{constructor(t){b(this,"_listeners",[]),this._ctrl=t}add(t,e,s,r,n){const a=Nt(e,s),o=h(h({},this._ctrl.config.shared.eventOptions),n);t.addEventListener(a,r,o),this._listeners.push(()=>t.removeEventListener(a,r,o))}clean(){this._listeners.forEach(t=>t()),this._listeners=[]}}class ge{constructor(){b(this,"_timeouts",new Map)}add(t,e,s=140,...r){this.remove(t),this._timeouts.set(t,window.setTimeout(e,s,...r))}remove(t){const e=this._timeouts.get(t);e&&window.clearTimeout(e)}clean(){this._timeouts.forEach(t=>void window.clearTimeout(t)),this._timeouts.clear()}}class _e{constructor(t){b(this,"gestures",new Set),b(this,"_targetEventStore",new dt(this)),b(this,"gestureEventStores",{}),b(this,"gestureTimeoutStores",{}),b(this,"handlers",{}),b(this,"config",{}),b(this,"pointerIds",new Set),b(this,"touchIds",new Set),b(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),Ee(this,t)}setEventIds(t){q(t)?this.touchIds=new Set(Vt(t)):"pointerId"in t&&(t.type==="pointerup"?this.pointerIds.delete(t.pointerId):this.pointerIds.add(t.pointerId))}applyHandlers(t,e){this.handlers=t,this.nativeHandlers=e}applyConfig(t,e){this.config=me(t,e)}clean(){this._targetEventStore.clean();for(const t of this.gestures)this.gestureEventStores[t].clean(),this.gestureTimeoutStores[t].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...t){const e=this.config.shared,s=e.eventOptions,r={};let n;if(e.target&&(n=e.target(),!n))return;const a=be(r,s,!!n);if(e.enabled){for(const o of this.gestures)if(this.config[o].enabled){const c=lt.get(o);new c(this,t,o).bind(a)}for(const o in this.nativeHandlers)a(o,"",c=>this.nativeHandlers[o](h(h({},this.state.shared),{},{event:c,args:t})),void 0,!0)}for(const o in r)r[o]=zt(...r[o]);if(!n)return r;for(const o in r){let c=o.substr(2).toLowerCase();const f=!!~c.indexOf("capture"),l=!!~c.indexOf("passive");(f||l)&&(c=c.replace(/capture|passive/g,"")),this._targetEventStore.add(n,c,"",r[o],{capture:f,passive:l})}}}function X(i,t){i.gestures.add(t),i.gestureEventStores[t]=new dt(i),i.gestureTimeoutStores[t]=new ge}function Ee(i,t){t.drag&&X(i,"drag"),t.wheel&&X(i,"wheel"),t.scroll&&X(i,"scroll"),t.move&&X(i,"move"),t.pinch&&X(i,"pinch"),t.hover&&X(i,"hover")}const be=(i,t,e)=>(s,r,n,a={},o=!1)=>{var c,f;const l=(c=a.capture)!==null&&c!==void 0?c:t.capture,m=(f=a.passive)!==null&&f!==void 0?f:t.passive;let g=o?s:Mt(s,r,l);e&&m&&(g+="Passive"),i[g]=i[g]||[],i[g].push(n)};function ve(i,t={},e,s){const r=u.useMemo(()=>new _e(i),[]);if(r.applyHandlers(i,s),r.applyConfig(t,e),u.useEffect(r.effect.bind(r)),u.useEffect(()=>r.clean.bind(r),[]),t.target===void 0)return r.bind.bind(r)}function Be(i,t={}){return ae(ce),ve({drag:i},t,"drag")}var N="adm-page-indicator",ye={color:"primary"},Ce=y.exports.memo(function(i){for(var t=$(ye,i),e=[],s=0;s<t.total;s++){var r;e.push(u.createElement("div",{key:s,className:L(N+"-dot",(r={},r[N+"-dot-active"]=t.current===s,r))}))}return R(t,u.createElement("div",{className:L(N,N+"-color-"+t.color)},e))}),we=Ce;var ft=function(t){return R(t,u.createElement("div",{className:"adm-swiper-item",onClick:t.onClick},t.children))};function Fe(i){var t=y.exports.useState(i),e=t[0],s=t[1],r=y.exports.useRef(e);return y.exports.useLayoutEffect(function(){r.current=e},[e]),[e,s,r]}var De={defaultIndex:0,allowTouchMove:!0,autoplay:!1,autoplayInterval:3e3,loop:!0},Ae=y.exports.forwardRef(It(function(i,t){var e=$(De,i),s=y.exports.useMemo(function(){var a=0,o=u.Children.map(e.children,function(c){return u.isValidElement(c)?c.type!==ft?(V("Swiper","The children of `Swiper` must be `Swiper.Item` components."),null):(a++,c):null});return{validChildren:o,count:a}},[e.children]),r=s.validChildren,n=s.count;return n===0?(V("Swiper","`Swiper` needs at least one child."),null):function(){var a=e.loop;n===1&&a&&(V("Swiper","`Swiper` needs at least two children to enable loop."),a=!1);var o=y.exports.useRef(null);function c(){var p=o.current;return p?p.offsetWidth:0}var f=y.exports.useState(e.defaultIndex),l=f[0],m=f[1],g=Fe(!1),A=g[0],C=g[1],w=g[2],j=mt(function(){return{x:J(l,0,n-1)*100,config:{tension:200,friction:30},onRest:function(){if(!w.current){var d=D.get(),B=100*n,E=U(d,B);E!==d&&k.start({x:E,immediate:!0})}}}},[n]),D=j[0].x,k=j[1],pt=Be(function(p){var d=c();if(!!d){var B=p.offset,E=B[0];if(C(!0),!p.last)k.start({x:E*100/d,immediate:!0});else{var F=Math.round((E+Math.min(p.velocity[0]*2e3,d)*p.direction[0])/d);I(F),window.setTimeout(function(){C(!1)})}}},{transform:function(d){var B=d[0],E=d[1];return[-B,E]},from:function(){var d=c();return[D.get()/100*d,0]},bounds:function(){if(a)return{};var d=c();return{left:0,right:(n-1)*d}},rubberband:!0,axis:"x",preventScroll:!0,pointer:{touch:!0}});function I(p){var d,B;if(a){var E=U(p,n);m(E),(d=e.onIndexChange)===null||d===void 0||d.call(e,E),k.start({x:p*100})}else{var F=J(p,0,n-1);m(F),(B=e.onIndexChange)===null||B===void 0||B.call(e,F),k.start({x:F*100})}}function Y(){I(Math.round(D.get()/100)+1)}function ht(){I(Math.round(D.get()/100)-1)}y.exports.useImperativeHandle(t,function(){return{swipeTo:I,swipeNext:Y,swipePrev:ht}});var G=e.autoplay,H=e.autoplayInterval;return y.exports.useEffect(function(){if(!(!G||A)){var p=window.setInterval(function(){Y()},H);return function(){window.clearInterval(p)}}},[G,H,A]),R(e,u.createElement("div",{className:"adm-swiper"},u.createElement("div",Object.assign({className:L("adm-swiper-track",{"adm-swiper-track-allow-touch-move":e.allowTouchMove}),onClickCapture:function(d){w.current&&d.stopPropagation()}},e.allowTouchMove?pt():{}),u.createElement("div",{className:"adm-swiper-track-inner",ref:o},u.Children.map(r,function(p,d){return u.createElement(gt.div,{className:"adm-swiper-slide",style:{x:D.to(function(B){var E=-B+d*100;if(a){var F=n*100,W=F/2-10;E=U(E+W,F)-W}return E+"%"}),left:"-"+d*100+"%"}},p)}))),e.indicator===void 0?u.createElement("div",{className:"adm-swiper-indicator"},u.createElement(we,Object.assign({},e.indicatorProps,{total:n,current:l}))):e.indicator(n,l)))}}));function U(i,t){var e=i%t;return e<0?e+t:e}var x=_t(Ae,{Item:ft});const Xe=[{bigTitle:"\u6709\u597D\u8D27",titleIntroduce:"\u4E0E\u54C1\u8D28\u751F\u6D3B\u4E0D\u671F\u800C\u9047",titleImg:"https://img.alicdn.com/tfs/TB1tqpnegMPMeJjy1XcXXXpppXa-148-48.png",list:[{smallTitle:"\u53EF\u6298\u53E0\u52A0\u539A\u53CC\u9762\u4F7F\u7528\u69BB\u69BB\u7C73\u5E8A\u57AB",introduce:"\u53EF\u4EE5\u6298\u53E0\u7684\u69BB\u69BB\u7C73\u5E8A\u57AB\uFF0C\u6536\u7EB3\u4E0D\u5360\u7A7A\u95F4\uFF0C\u6B63\u53CD\u4E24\u9762\u90FD\u53EF\u4EE5\u4F7F\u7528\uFF0C\u540C\u65F6\u7EAF\u68C9\u6750\u8D28\u8212\u9002\u4EB2\u80A4\uFF0C\u900F\u6C14\u6027\u597D\uFF0C\u4FDD\u6301\u8D34\u8EAB\u6362\u5C06\u5E72\u723D \u4E0D\u7C98\u817B\u3002",img:"https://img.alicdn.com/imgextra/i3/1914575403/TB2Y1CoqQ9WBuNjSspeXXaz5VXa_!!1914575403-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp"},{smallTitle:"Puma Defy \u8D5B\u7433\u5A1C\u9650\u5B9A",introduce:"\u8BBE\u8BA1\u4E0A\u7EE7\u7EED\u4E3B\u6253\u9AD8\u8857\u98CE\u683C\u7684\u79D1\u5E7B\u5143\u7D20\u3002",img:"https://img.alicdn.com/imgextra/i4/1022433859/O1CN01qkuVDn1eNSuEj5e6u_!!1022433859-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp"},{smallTitle:"Sofina18\u5E74\u6625\u5B63\u9650\u5B9A\u6A31\u82B1\u7C89\u997C",introduce:"\u5916\u58F3\u7C89\u5AE9\u6E10\u53D8\uFF0C\u6D6E\u96D5\u6A31\u82B1\u5F70\u663E\u53EF\u7231\u6C14\u8D28\u3002",img:"https://img.alicdn.com/imgextra/i1/3158956210/TB2wZ4IepuWBuNjSszbXXcS7FXa_!!3158956210-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp"},{smallTitle:"\u5927\u8C46\u5BB6  \u65B9\u5934\u5976\u5976\u978B",introduce:"\u4E00\u811A\u8E6C\u8BBE\u8BA1\uFF0C\u65B9\u4FBF\u65E5\u5E38\u7684\u7A7F\u8131\u3002",img:"https://img.alicdn.com/tfscom/i1/1581756766/TB2TF0ch0zJ8KJjSspkXXbF7VXa_!!1581756766.jpg_180x180xzq90.jpg_.webp"},{smallTitle:"\u5C0F\u4ED9\u5973\u7684\u82B1\u73AF\uFF0C\u7518\u90A3\u8BB8\u86CB\u7CD5\u6A21\u5177",introduce:"\u9009\u7528\u6DB2\u6001\u7845\u80F6\u5236\u4F5C\u800C\u6210\uFF0C\u5B89\u5168\u536B\u751F\u3002",img:"https://img.alicdn.com/imgextra/i1/2895773580/O1CN01cfU4V01cJgOdPPJlS_!!2895773580-2-beehive-scenes.png_180x180xzq90.jpg_.webp"},{smallTitle:"\u529E\u516C\u5BA4\u5348\u7761\u795E\u5668",introduce:"\u4E13\u4E3A\u5348\u7761\u8BBE\u8BA1\uFF0C\u4F7F\u7528\u8D77\u6765\u65B9\u4FBF\u8212\u9002\u3002",img:"https://img.alicdn.com/imgextra/i1/810373898/O1CN01alx0rm1efKNHkAk07_!!810373898-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp"}]},{bigTitle:"\u7231\u901B\u8857",titleIntroduce:"\u732E\u7ED9\u806A\u660E\u53EF\u7231\u7684\u4F60",titleImg:"https://img.alicdn.com/tfs/TB1UNX2bSFRMKJjy0FhXXX.xpXa-112-46.png",list:[{smallTitle:"",introduce:"2017\u65B0\u6B3E\u6F6E\u5973\u58EB\u53CC\u80A9\u5305\u97E9\u7248\u65F6\u5C1A\u4F11\u95F2\u767E\u642Dpu\u8F6F\u76AE\u80CC\u5305\u4E2A\u6027\u7B80\u7EA6\u5305\u5305",img:"https://img.alicdn.com/bao/uploaded/TB28TQ1nrBmpuFjSZFAXXaQ0pXa_!!2996832334.png_180x180xzq90.jpg_.webp"},{smallTitle:"",introduce:"\u7F8E\u56FD\u827E\u8482\u5B9D\u8DB4\u8DB4\u6795\u5348\u7761\u6795\u8DB4\u7761\u6795\u5B66\u751F\u5C0F\u5348\u7761\u795E\u5668\u529E\u516C\u5BA4\u62B1\u6795\u5348\u4F11\u6795\u5934",img:"https://img.alicdn.com/bao/uploaded/TB2jH_uoFXXXXXfXpXXXXXXXXXX_!!0-dgshop.jpg_180x180xzq90.jpg_.webp"},{smallTitle:"",introduce:"\u9999\u6E2F\u8FDB\u53E3\u7279\u4EA7\u7F8E\u5FC3\u539F\u5473\u9E21\u86CB\u537732\u5927\u6761\u793C\u76D2\u88C5\u513F\u7AE5\u4F11\u95F2\u96F6\u98DF\u7CD5\u70B9\u997C\u5E72",img:"https://img.alicdn.com/bao/uploaded/TB2i9iuoFXXXXbPXpXXXXXXXXXX_!!0-juitemmedia.jpg_180x180xzq90.jpg_.webp"},{smallTitle:"",introduce:"\u79CB\u51AC\u5B63\u68C9\u62D6\u978B\u5305\u8DDF\u539A\u5E95\u60C5\u4FA3\u5BB6\u5C45\u9632\u6ED1\u4FDD\u6696\u5C45\u5BB6\u7537\u5973\u6708\u5B50\u62D6\u978B\u51AC\u5929\u52A0\u539A",img:"https://img.alicdn.com/bao/uploaded/i0/TB1s.15NFXXXXbMaXXXXXXXXXXX_!!0-item_pic.jpg_180x180xzq90.jpg_.webp"},{smallTitle:"",introduce:"\u539F\u521B\u54C1\u724C\u65E5\u7CFB\u5B66\u751F\u5355\u80A9\u5973\u5305\u767E\u642D\u4F11\u95F2\u6587\u827A\u5C0F\u6E05\u65B0\u7B80\u7EA6\u5E06\u5E03\u5305\u5E03\u888B\u5927\u5305",img:"https://img.alicdn.com/bao/uploaded/TB2BnymXX95V1Bjy0FdXXc5BVXa_!!664782798-0-goldwindow.jpg_180x180xzq90.jpg_.webp"},{smallTitle:"",introduce:"\u683C\u83B1\u8FBE\u5927\u5BB9\u91CF\u4FDD\u6E29\u676F\u7537\u58EB\u4FDD\u6E29\u58F6\u6237\u5916\u4E0D\u9508\u94A2\u8F66\u8F7D\u65C5\u6E38\u4FDD\u6E29\u6C34\u58F62L\u5B9A\u5236",img:"https://img.alicdn.com/bao/uploaded/TB2jQl2ml0kpuFjy1zdXXXuUVXa_!!0-juitemmedia.jpg_180x180xzq90.jpg_.webp"}]}],Te=[{title:"2016\u5E74\u6625Gillivo\u5609\u91CC\u5965\u65B0\u6B3E\u96F6\u94B1\u5305\u6B63\u54C1\u4E13\u67DC",detailImg:"https://img.alicdn.com/bao/uploaded/i3/446693207/TB283ZslFXXXXX4XXXXXXXXXXXX_!!446693207.jpg_200x200q90.jpg_.webp",price:12,salesVolume:1},{title:"\u6625\u4E2D\u5927\u5973\u7AE5\u5B66\u9662\u98CE\u5A03\u5A03\u9886\u7EAF\u68C9\u4E2D\u957F\u6B3E\u98CE\u8863\u5916\u5957",detailImg:"https://img.alicdn.com/bao/uploaded/i4/12524484/O1CN01EfZBZA1iziY14s3yh_!!0-saturn_solar.jpg_200x200q90.jpg_.webp",price:151.1,salesVolume:6},{title:"\u767D\u8272\u7834\u6D1E\u725B\u4ED4\u77ED\u88E4\u5973\u590F\u9AD8\u81702019\u65B0\u6B3E\u97E9\u7248\u5BBD\u677E\u5927\u7801\u663E\u7626\u6BDB\u8FB9\u9614\u817F\u70ED\u88E4",detailImg:"https://img.alicdn.com/bao/uploaded/i1/3201581578/TB1YYNXc1uSBuNjSsziXXbq8pXa_!!0-item_pic.jpg_200x200q90.jpg_.webp",price:79,salesVolume:24},{title:"\u5C3C\u6CCA\u5C14\u8FDB\u53E3\u7F8A\u6BDB\u6BE1\u7EAF\u624B\u5DE5\u840C\u7269\u7CFB\u5217\u5C0F\u5976\u725B\u5355\u80A9\u5305\u5927\u4EBA/\u513F\u7AE5\u659C\u630E\u5305\u5973",detailImg:"https://img.alicdn.com/bao/uploaded/i5/TB1ZjgTJVXXXXb2XXXXYXGcGpXX_M2.SS2_200x200q90.jpg_.webp",price:65,salesVolume:0},{title:"2020\u6625\u590F\u540A\u5E26\u8FDE\u8863\u88D9\u660E\u661F\u540C\u6B3E\u540D\u5A9B\u5BB4\u4F1A\u661F\u7A7A\u4EAE\u7247\u88D9\u5E74\u4F1A\u4E3B\u6301\u665A\u793C\u670D",detailImg:"https://img.alicdn.com/bao/uploaded/i3/2550641536/TB22OaEe2jM8KJjSZFyXXXdzVXa_!!2550641536.jpg_200x200q90.jpg_.webp",price:299,salesVolume:100},{title:"2019\u6625\u79CB\u6B3E \u6A2A\u7AD6\u6761\u62FC\u5706\u9886\u4F11\u95F2\u5BBD\u677E\u536B\u8863\u957F\u8896\u52A0\u539AT\u6064\u5973 \u5361\u95E8T30C106",detailImg:"https://img.alicdn.com/bao/uploaded/i1/62174580/TB2rC4KrbsTMeJjy1zbXXchlVXa_!!62174580.jpg_200x200q90.jpg_.webp",price:135,salesVolume:0},{title:"SUNGDO GIN\u72EC\u7ACB\u8BBE\u8BA1\u5E08\u6625\u590F\u65B0\u54C1\u9ED1\u8272\u51E0\u4F55\u8170\u91D1\u8FB9\u897F\u88C5\u77ED\u88E4",detailImg:"https://img.alicdn.com/bao/uploaded/i1/45738681/TB2tNLyebRkpuFjSspmXXc.9XXa_!!45738681.jpg_200x200q90.jpg_.webp",price:342.3,salesVolume:0},{title:"T119\u97E9\u56FD\u5973\u88C5\u4EE3\u8BBE\u8BA1\u611F\u7B80\u7EA6\u68C9\u8D28\u6625\u79CB\u957F\u8896\u5957\u5934\u5973\u536B\u8863\u6BDB\u5708\u65B0\u54C12019",detailImg:"https://img.alicdn.com/bao/uploaded/i4/75318385/TB2m5FLcbSYBuNjSspiXXXNzpXa_!!75318385.jpg_200x200q90.jpg_.webp",price:158,salesVolume:1}],Se=[{imgSrc:"clothes.jpg",name:"\u8863\u670D"},{imgSrc:"shoes.jpg",name:"\u978B\u5B50"},{imgSrc:"residence.jpg",name:"\u5BB6\u5C45"},{imgSrc:"articlesDaily.jpg",name:"\u751F\u6D3B\u7528\u54C1"}];const Oe=()=>{const i=t=>new URL({"../../assets/images/articlesDaily.jpg":bt,"../../assets/images/bg.jpg":vt,"../../assets/images/cart.jpg":Bt,"../../assets/images/category.jpg":yt,"../../assets/images/clothes.jpg":Ct,"../../assets/images/collectGoods.jpg":wt,"../../assets/images/generationEvaluation.jpg":Ft,"../../assets/images/home.jpg":Dt,"../../assets/images/info.jpg":At,"../../assets/images/my.jpg":Xt,"../../assets/images/refund.jpg":Tt,"../../assets/images/residence.jpg":St,"../../assets/images/shoes.jpg":xt,"../../assets/images/substitutePay.jpg":jt}[`../../assets/images/${t}`],self.location).href;return u.createElement(u.Fragment,null,u.createElement(Et,{title:"\u9996\u9875"}),u.createElement(x,{autoplay:!0},u.createElement(x.Item,null,u.createElement("div",{style:{background:"#ace0ff"},className:"content"},"1")),u.createElement(x.Item,null,u.createElement("div",{style:{background:"#bcffbd"},className:"content"},"2")),u.createElement(x.Item,null,u.createElement("div",{style:{background:"#e4fabd"},className:"content"},"3")),u.createElement(x.Item,null,u.createElement("div",{style:{background:"#ffcfac"},className:"content"},"4"))),u.createElement("div",{className:"home-main"},u.createElement("div",{className:"home-nav"},u.createElement("ul",null,Se.map((t,e)=>u.createElement("li",{key:e},u.createElement("img",{src:i(t.imgSrc),alt:""}),u.createElement("span",null,t.name))))),u.createElement("div",{className:"home-content"},u.createElement("ul",null,Xe.map((t,e)=>u.createElement("li",{key:e},u.createElement("p",{className:"home-all-title"},u.createElement("img",{src:t.titleImg,className:"home-titleImg"}),u.createElement("span",null,t.titleIntroduce)),u.createElement("div",{className:"home-list"},t.list.map((s,r)=>u.createElement("dl",{key:r},u.createElement("dt",null,u.createElement("img",{src:s.img,alt:""})),u.createElement("dd",null,u.createElement("p",{className:"home-title"},s.smallTitle),u.createElement("p",{className:"home-introduce"},s.introduce))))))))),u.createElement("div",{className:"home-recommend"},u.createElement("img",{src:"https://img.alicdn.com/simba/img/TB1pIQFjbr1gK0jSZR0SuvP8XXa.jpg",alt:""})),u.createElement("div",{className:"home-hot-sale"},u.createElement("div",{className:"hot-title"},u.createElement("span",null,"\u70ED\u5356\u5355\u54C1")),u.createElement("div",{className:"hot-content"},Te.map((t,e)=>u.createElement("dl",{key:e},u.createElement("dt",null,u.createElement("img",{src:t.detailImg,alt:""})),u.createElement("dd",null,u.createElement("p",null,t.title),u.createElement("p",null,u.createElement("span",null,"\xA5",t.price),u.createElement("span",null,"\u9500\u91CF\uFF1A",t.salesVolume)))))))),u.createElement(kt,null))};export{Oe as default};