(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{327:function(e,n,t){"use strict";t.r(n);var o=t(3),a=t(2),i=t(6),r=t(10),w=document.getElementById("map");function c(){var e=w.clientWidth;return Math.ceil(Math.LOG2E*Math.log(e/256))}var s=c(),m=new a.a({center:[0,0],minZoom:s,zoom:s});new o.a({layers:[new i.a({source:new r.b})],target:"map",view:m});window.addEventListener("resize",function(){var e=c();e!==m.getMinZoom()&&m.setMinZoom(e)})}},[[327,0]]]);
//# sourceMappingURL=min-zoom.js.map