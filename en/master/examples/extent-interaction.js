(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{188:function(e,t,n){"use strict";var r=n(23),o=n(37),i=n(28),a=n(44),u=n(1),l=n(8),p=n(26),s=n(35),c=n(56),h=n(21),d=n(13),x=n(14),_={EXTENTCHANGED:"extentchanged"},v=function(e){function t(t){e.call(this,_.EXTENTCHANGED),this.extent=t}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(a.a),y=function(e){function t(t){var n,r=t||{};e.call(this,r),this.extent_=null,this.pointerHandler_=null,this.pixelTolerance_=void 0!==r.pixelTolerance?r.pixelTolerance:10,this.snappedToVertex_=!1,this.extentFeature_=null,this.vertexFeature_=null,t||(t={}),this.extentOverlay_=new h.a({source:new d.a({useSpatialIndex:!1,wrapX:!!t.wrapX}),style:t.boxStyle?t.boxStyle:(n=Object(x.b)(),function(e,t){return n[l.a.POLYGON]}),updateWhileAnimating:!0,updateWhileInteracting:!0}),this.vertexOverlay_=new h.a({source:new d.a({useSpatialIndex:!1,wrapX:!!t.wrapX}),style:t.pointerStyle?t.pointerStyle:f(),updateWhileAnimating:!0,updateWhileInteracting:!0}),t.extent&&this.setExtent(t.extent)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.snapToVertex_=function(e,t){var n=t.getCoordinateFromPixel(e),r=this.getExtent();if(r){var o=function(e){return[[[e[0],e[1]],[e[0],e[3]]],[[e[0],e[3]],[e[2],e[3]]],[[e[2],e[3]],[e[2],e[1]]],[[e[2],e[1]],[e[0],e[1]]]]}(r);o.sort(function(e,t){return Object(i.k)(n,e)-Object(i.k)(n,t)});var a=o[0],u=Object(i.c)(n,a),l=t.getPixelFromCoordinate(u);if(Object(i.f)(e,l)<=this.pixelTolerance_){var p=t.getPixelFromCoordinate(a[0]),s=t.getPixelFromCoordinate(a[1]),c=Object(i.j)(l,p),h=Object(i.j)(l,s),d=Math.sqrt(Math.min(c,h));return this.snappedToVertex_=d<=this.pixelTolerance_,this.snappedToVertex_&&(u=c>h?a[1]:a[0]),u}}return null},t.prototype.handlePointerMove_=function(e){var t=e.pixel,n=e.map,r=this.snapToVertex_(t,n);r||(r=n.getCoordinateFromPixel(t)),this.createOrUpdatePointerFeature_(r)},t.prototype.createOrUpdateExtentFeature_=function(e){var t=this.extentFeature_;return t?e?t.setGeometry(Object(s.d)(e)):t.setGeometry(void 0):(t=e?new r.a(Object(s.d)(e)):new r.a({}),this.extentFeature_=t,this.extentOverlay_.getSource().addFeature(t)),t},t.prototype.createOrUpdatePointerFeature_=function(e){var t=this.vertexFeature_;t?t.getGeometry().setCoordinates(e):(t=new r.a(new p.a(e)),this.vertexFeature_=t,this.vertexOverlay_.getSource().addFeature(t));return t},t.prototype.handleEvent=function(t){return!t.pointerEvent||(t.type!=o.a.POINTERMOVE||this.handlingDownUpSequence||this.handlePointerMove_(t),e.prototype.handleEvent.call(this,t),!1)},t.prototype.handleDownEvent=function(e){var t=e.pixel,n=e.map,r=this.getExtent(),o=this.snapToVertex_(t,n),i=function(e){var t=null,n=null;return e[0]==r[0]?t=r[2]:e[0]==r[2]&&(t=r[0]),e[1]==r[1]?n=r[3]:e[1]==r[3]&&(n=r[1]),null!==t&&null!==n?[t,n]:null};if(o&&r){var a=o[0]==r[0]||o[0]==r[2]?o[0]:null,u=o[1]==r[1]||o[1]==r[3]?o[1]:null;null!==a&&null!==u?this.pointerHandler_=w(i(o)):null!==a?this.pointerHandler_=O(i([a,r[1]]),i([a,r[3]])):null!==u&&(this.pointerHandler_=O(i([r[0],u]),i([r[2],u])))}else o=n.getCoordinateFromPixel(t),this.setExtent([o[0],o[1],o[0],o[1]]),this.pointerHandler_=w(o);return!0},t.prototype.handleDragEvent=function(e){if(this.pointerHandler_){var t=e.coordinate;this.setExtent(this.pointerHandler_(t)),this.createOrUpdatePointerFeature_(t)}return!0},t.prototype.handleUpEvent=function(e){this.pointerHandler_=null;var t=this.getExtent();return t&&0!==Object(u.u)(t)||this.setExtent(null),!1},t.prototype.setMap=function(t){this.extentOverlay_.setMap(t),this.vertexOverlay_.setMap(t),e.prototype.setMap.call(this,t)},t.prototype.getExtent=function(){return this.extent_},t.prototype.setExtent=function(e){this.extent_=e||null,this.createOrUpdateExtentFeature_(e),this.dispatchEvent(new v(this.extent_))},t}(c.b);function f(){var e=Object(x.b)();return function(t,n){return e[l.a.POINT]}}function w(e){return function(t){return Object(u.b)([e,t])}}function O(e,t){return e[0]==t[0]?function(n){return Object(u.b)([e,[n[0],t[1]]])}:e[1]==t[1]?function(n){return Object(u.b)([e,[t[0],n[1]]])}:null}t.a=y},278:function(e,t,n){"use strict";n.r(t);var r=n(3),o=n(2),i=n(36),a=n(188),u=n(6),l=n(21),p=n(13),s=n(10),c=new p.a({url:"data/geojson/countries.geojson",format:new i.a}),h=new r.a({layers:[new u.a({source:new s.b}),new l.a({source:c})],target:"map",view:new o.a({center:[0,0],zoom:2})}),d=new a.a;h.addInteraction(d),d.setActive(!1),window.addEventListener("keydown",function(e){16==e.keyCode&&d.setActive(!0)}),window.addEventListener("keyup",function(e){16==e.keyCode&&d.setActive(!1)})}},[[278,0]]]);
//# sourceMappingURL=extent-interaction.js.map