(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{380:function(e,t,n){"use strict";n.r(t);var o=n(3),l=n(2),s=n(36),i=n(21),a=n(6),m=n(13),d=n(10),u=n(74),g=n(24),r=n(20),c=n(14),y=n(49),f=!1,p={points:{text:document.getElementById("points-text"),align:document.getElementById("points-align"),baseline:document.getElementById("points-baseline"),rotation:document.getElementById("points-rotation"),font:document.getElementById("points-font"),weight:document.getElementById("points-weight"),size:document.getElementById("points-size"),height:document.getElementById("points-height"),offsetX:document.getElementById("points-offset-x"),offsetY:document.getElementById("points-offset-y"),color:document.getElementById("points-color"),outline:document.getElementById("points-outline"),outlineWidth:document.getElementById("points-outline-width"),maxreso:document.getElementById("points-maxreso")},lines:{text:document.getElementById("lines-text"),align:document.getElementById("lines-align"),baseline:document.getElementById("lines-baseline"),rotation:document.getElementById("lines-rotation"),font:document.getElementById("lines-font"),weight:document.getElementById("lines-weight"),placement:document.getElementById("lines-placement"),maxangle:document.getElementById("lines-maxangle"),overflow:document.getElementById("lines-overflow"),size:document.getElementById("lines-size"),height:document.getElementById("lines-height"),offsetX:document.getElementById("lines-offset-x"),offsetY:document.getElementById("lines-offset-y"),color:document.getElementById("lines-color"),outline:document.getElementById("lines-outline"),outlineWidth:document.getElementById("lines-outline-width"),maxreso:document.getElementById("lines-maxreso")},polygons:{text:document.getElementById("polygons-text"),align:document.getElementById("polygons-align"),baseline:document.getElementById("polygons-baseline"),rotation:document.getElementById("polygons-rotation"),font:document.getElementById("polygons-font"),weight:document.getElementById("polygons-weight"),placement:document.getElementById("polygons-placement"),maxangle:document.getElementById("polygons-maxangle"),overflow:document.getElementById("polygons-overflow"),size:document.getElementById("polygons-size"),height:document.getElementById("polygons-height"),offsetX:document.getElementById("polygons-offset-x"),offsetY:document.getElementById("polygons-offset-y"),color:document.getElementById("polygons-color"),outline:document.getElementById("polygons-outline"),outlineWidth:document.getElementById("polygons-outline-width"),maxreso:document.getElementById("polygons-maxreso")}},E=function(e,t,n){var o=n.text.value,l=n.maxreso.value,s=e.get("name");return t>l?s="":"hide"==o?s="":"shorten"==o?s=s.trunc(12):"wrap"!=o||n.placement&&"line"==n.placement.value||(s=function e(t,n,o){if(t.length>n){for(var l=n;l>0&&" "!=t[l]&&"-"!=t[l];)l--;if(l>0){var s;s="-"==t.substring(l,l+1)?t.substring(0,l+1):t.substring(0,l);var i=t.substring(l+1);return s+o+e(i,n,o)}}return t}(s,16,"\n")),s},w=function(e,t,n){var o=n.align.value,l=n.baseline.value,s=n.size.value,i=n.height.value,a=parseInt(n.offsetX.value,10),m=parseInt(n.offsetY.value,10),d=n.weight.value,c=n.placement?n.placement.value:void 0,y=n.maxangle?parseFloat(n.maxangle.value):void 0,p=n.overflow?"true"==n.overflow.value:void 0,w=parseFloat(n.rotation.value);if("'Open Sans'"==n.font.value&&!f){var I=document.createElement("link");I.href="https://fonts.googleapis.com/css?family=Open+Sans",I.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(I),f=!0}var B=d+" "+s+"/"+i+" "+n.font.value,h=n.color.value,v=n.outline.value,x=parseInt(n.outlineWidth.value,10);return new u.a({textAlign:""==o?void 0:o,textBaseline:l,font:B,text:E(e,t,n),fill:new g.a({color:h}),stroke:new r.a({color:v,width:x}),offsetX:a,offsetY:m,placement:c,maxAngle:y,overflow:p,rotation:w})};function I(e,t){return new c.c({stroke:new r.a({color:"blue",width:1}),fill:new g.a({color:"rgba(0, 0, 255, 0.1)"}),text:w(e,t,p.polygons)})}var B=new i.a({source:new m.a({url:"data/geojson/polygon-samples.geojson",format:new s.a}),style:I});function h(e,t){return new c.c({stroke:new r.a({color:"green",width:2}),text:w(e,t,p.lines)})}var v=new i.a({source:new m.a({url:"data/geojson/line-samples.geojson",format:new s.a}),style:h});function x(e,t){return new c.c({image:new y.a({radius:10,fill:new g.a({color:"rgba(255, 0, 0, 0.1)"}),stroke:new r.a({color:"red",width:1})}),text:w(e,t,p.points)})}var b=new i.a({source:new m.a({url:"data/geojson/point-samples.geojson",format:new s.a}),style:x});new o.a({layers:[new a.a({source:new d.b}),B,v,b],target:"map",view:new l.a({center:[-8161939,6095025],zoom:8})});document.getElementById("refresh-points").addEventListener("click",function(){b.setStyle(x)}),document.getElementById("refresh-lines").addEventListener("click",function(){v.setStyle(h)}),document.getElementById("refresh-polygons").addEventListener("click",function(){B.setStyle(I)}),String.prototype.trunc=String.prototype.trunc||function(e){return this.length>e?this.substr(0,e-1)+"...":this.substr(0)}}},[[380,0]]]);
//# sourceMappingURL=vector-labels.js.map