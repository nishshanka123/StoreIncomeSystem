System.register(["./index-legacy-CeGWA2zW.js"],(function(t,e){"use strict";var n,i;return{setters:[function(t){n=t.d,i=t.p}],execute:function(){t("startTapClick",(function(t){if(void 0!==n){var u,f,d,v=0,l=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),p=new WeakMap,m=function(){d&&clearTimeout(d),d=void 0,u&&(g(!1),u=void 0)},L=function(t,e){if(!t||t!==u){d&&clearTimeout(d),d=void 0;var n=i(e),a=n.x,c=n.y;if(u){if(p.has(u))throw new Error("internal error");u.classList.contains(r)||h(u,a,c),g(!0)}if(t){var f=p.get(t);f&&(clearTimeout(f),p.delete(t)),t.classList.remove(r);var v=function(){h(t,a,c),d=void 0};o(t)?v():d=setTimeout(v,s)}u=t}},h=function(t,e,n){if(v=Date.now(),t.classList.add(r),l){var i=a(t);null!==i&&(w(),f=i.addRipple(e,n))}},w=function(){void 0!==f&&(f.then((function(t){return t()})),f=void 0)},g=function(t){w();var e=u;if(e){var n=c-Date.now()+v;if(t&&n>0&&!o(e)){var i=setTimeout((function(){e.classList.remove(r),p.delete(e)}),c);p.set(e,i)}else e.classList.remove(r)}};n.addEventListener("ionGestureCaptured",m),n.addEventListener("pointerdown",(function(t){u||2===t.button||L(e(t),t)}),!0),n.addEventListener("pointerup",(function(t){L(void 0,t)}),!0),n.addEventListener("pointercancel",m,!0)}}));
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
var e=function(t){if(void 0===t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(!(i instanceof ShadowRoot)&&i.classList.contains("ion-activatable"))return i}},o=function(t){return t.classList.contains("ion-activatable-instant")},a=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},r="ion-activated",s=100,c=150}}}));
