(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{235:function(e,n,t){var r=t(249);e.exports=function(e,n){Array.isArray(n)||(n=[]),e.length>0&&n.push(r([0,0],e[0]));for(var t=0;t<e.length-1;t++){var o=e[t],a=e[t+1],s=o[0],u=o[1],i=a[0],c=a[1],p=[.75*s+.25*i,.75*u+.25*c],w=[.25*s+.75*i,.25*u+.75*c];n.push(p),n.push(w)}return e.length>1&&n.push(r([0,0],e[e.length-1])),n}},248:function(e,n,t){"use strict";t.r(n);var r=t(3),o=t(2),a=t(6),s=t(21),u=t(13),i=t(10),c=t(66),p=t(235),w=t.n(p);var h=new u.a({}),d=new r.a({layers:[new a.a({source:new i.b,opacity:.5}),new s.a({source:h})],target:"map",view:new o.a({center:[1078373.595,6871994.591],zoom:5})}),f=document.getElementById("shall-smoothen"),g=document.getElementById("iterations"),l=new c.c({source:h,type:"LineString"});d.addInteraction(l),l.on("drawend",function(e){if(f.checked){var n=e.feature.getGeometry(),t=function(e,n){for(n=Math.min(Math.max(n,1),10);n>0;)e=w()(e),n--;return e}(n.getCoordinates(),parseInt(g.value,10)||5);n.setCoordinates(t)}})},249:function(e,n){e.exports=function(e,n){return e[0]=n[0],e[1]=n[1],e}}},[[248,0]]]);
//# sourceMappingURL=chaikin.js.map