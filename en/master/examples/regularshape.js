(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{345:function(a,e,n){"use strict";n.r(e);for(var r=n(23),s=n(3),t=n(2),i=n(26),o=n(21),w=n(13),l=n(20),c=n(24),d=n(14),u=n(124),g=new l.a({color:"black",width:2}),p=new c.a({color:"red"}),m={square:new d.c({image:new u.a({fill:p,stroke:g,points:4,radius:10,angle:Math.PI/4})}),triangle:new d.c({image:new u.a({fill:p,stroke:g,points:3,radius:10,rotation:Math.PI/4,angle:0})}),star:new d.c({image:new u.a({fill:p,stroke:g,points:5,radius:10,radius2:4,angle:0})}),cross:new d.c({image:new u.a({fill:p,stroke:g,points:4,radius:10,radius2:0,angle:0})}),x:new d.c({image:new u.a({fill:p,stroke:g,points:4,radius:10,radius2:0,angle:Math.PI/4})})},f=["x","cross","star","triangle","square"],h=new Array(250),k=45e5,M=0;M<250;++M){var v=[9e6*Math.random()-k,9e6*Math.random()-k];h[M]=new r.a(new i.a(v)),h[M].setStyle(m[f[Math.floor(5*Math.random())]])}var b=new w.a({features:h}),y=new o.a({source:b});new s.a({layers:[y],target:"map",view:new t.a({center:[0,0],zoom:2})})}},[[345,0]]]);
//# sourceMappingURL=regularshape.js.map