(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{309:function(e,r,t){"use strict";t.r(r);var a=t(3),n=t(2),o=t(6),i=t(10),s=new o.a({source:new i.b}),c=new a.a({layers:[s],target:"map",view:new n.a({center:[0,0],zoom:2})});s.on("prerender",function(e){var r=e.context;r.save();var t=e.frameState.pixelRatio,a=c.getSize();r.translate(a[0]/2*t,a[1]/2*t),r.scale(3*t,3*t),r.translate(-75,-80),r.beginPath(),r.moveTo(75,40),r.bezierCurveTo(75,37,70,25,50,25),r.bezierCurveTo(20,25,20,62.5,20,62.5),r.bezierCurveTo(20,80,40,102,75,120),r.bezierCurveTo(110,102,130,80,130,62.5),r.bezierCurveTo(130,62.5,130,25,100,25),r.bezierCurveTo(85,25,75,37,75,40),r.clip(),r.translate(75,80),r.scale(1/3/t,1/3/t),r.translate(-a[0]/2*t,-a[1]/2*t)}),s.on("postrender",function(e){e.context.restore()})}},[[309,0]]]);
//# sourceMappingURL=layer-clipping.js.map