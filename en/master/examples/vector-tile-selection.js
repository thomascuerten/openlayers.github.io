(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{383:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r(2),o=r(126),c=r(102),s=r(95),i=r(14),l=r(20),w=r(24),g={},u=new c.a({declutter:!0,source:new s.a({format:new o.a,url:"https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf"}),style:function(e){var t=!!g[e.get("iso_a3")];return new i.c({stroke:new l.a({color:t?"rgba(200,20,20,0.8)":"gray",width:t?2:1}),fill:new w.a({color:t?"rgba(200,20,20,0.2)":"rgba(20,20,20,0.9)"})})}}),p=new n.a({layers:[u],target:"map",view:new a.a({center:[0,0],zoom:2})}),v=document.getElementById("type");p.on("click",function(e){var t=p.getFeaturesAtPixel(e.pixel);if(!t)return g={},void u.setStyle(u.getStyle());var r=t[0],n=r.get("iso_a3");"singleselect"===v.value&&(g={}),g[n]=r,u.setStyle(u.getStyle())})}},[[383,0]]]);
//# sourceMappingURL=vector-tile-selection.js.map