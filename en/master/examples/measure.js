(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{325:function(e,n,t){"use strict";t.r(n);var o,a,i,r,c,l=t(3),s=t(108),d=t(82),u=t(146),w=t(2),f=t(35),g=t(32),m=t(66),p=t(6),v=t(21),h=t(10),b=t(13),y=t(14),k=t(24),C=t(20),L=t(49),M=new p.a({source:new h.b}),O=new b.a,N=new v.a({source:O,style:new y.c({fill:new k.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new C.a({color:"#ffcc33",width:2}),image:new L.a({radius:7,fill:new k.a({color:"#ffcc33"})})})}),E=new l.a({layers:[M,N],target:"map",view:new w.a({center:[-11e6,46e5],zoom:15})});E.on("pointermove",function(e){if(!e.dragging){var n="Click to start drawing";if(o){var t=o.getGeometry();t instanceof f.b?n="Click to continue drawing the polygon":t instanceof g.a&&(n="Click to continue drawing the line")}a.innerHTML=n,i.setPosition(e.coordinate),a.classList.remove("hidden")}}),E.getViewport().addEventListener("mouseout",function(){a.classList.add("hidden")});var I,P=document.getElementById("type"),j=function(e){var n=Object(u.c)(e);return n>100?Math.round(n/1e3*100)/100+" km":Math.round(100*n)/100+" m"},G=function(e){var n=Object(u.a)(e);return n>1e4?Math.round(n/1e6*100)/100+" km<sup>2</sup>":Math.round(100*n)/100+" m<sup>2</sup>"};function H(){var e,n="area"==P.value?"Polygon":"LineString";I=new m.c({source:O,type:n,style:new y.c({fill:new k.a({color:"rgba(255, 255, 255, 0.2)"}),stroke:new C.a({color:"rgba(0, 0, 0, 0.5)",lineDash:[10,10],width:2}),image:new L.a({radius:5,stroke:new C.a({color:"rgba(0, 0, 0, 0.7)"}),fill:new k.a({color:"rgba(255, 255, 255, 0.2)"})})})}),E.addInteraction(I),J(),function(){a&&a.parentNode.removeChild(a);(a=document.createElement("div")).className="ol-tooltip hidden",i=new d.a({element:a,offset:[15,0],positioning:"center-left"}),E.addOverlay(i)}(),I.on("drawstart",function(n){o=n.feature;var t=n.coordinate;e=o.getGeometry().on("change",function(e){var n,o=e.target;o instanceof f.b?(n=G(o),t=o.getInteriorPoint().getCoordinates()):o instanceof g.a&&(n=j(o),t=o.getLastCoordinate()),r.innerHTML=n,c.setPosition(t)})}),I.on("drawend",function(){r.className="ol-tooltip ol-tooltip-static",c.setOffset([0,-7]),o=null,r=null,J(),Object(s.b)(e)})}function J(){r&&r.parentNode.removeChild(r),(r=document.createElement("div")).className="ol-tooltip ol-tooltip-measure",c=new d.a({element:r,offset:[0,-15],positioning:"bottom-center"}),E.addOverlay(c)}P.onchange=function(){E.removeInteraction(I),H()},H()}},[[325,0]]]);
//# sourceMappingURL=measure.js.map