(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{311:function(e,n,i){"use strict";i.r(n);var a=i(3),o=i(2),s=i(6),t=i(223),c=i(4),r=i(10),l=i(54);function p(e,n){var i=$(e+" input.visible");i.on("change",function(){n.setVisible(this.checked)}),i.prop("checked",n.getVisible());var a=$(e+" input.opacity");a.on("input change",function(){n.setOpacity(parseFloat(this.value))}),a.val(String(n.getOpacity()))}new a.a({layers:[new s.a({source:new r.b}),new t.a({layers:[new s.a({source:new l.a({url:"https://api.tiles.mapbox.com/v3/mapbox.20110804-hoa-foodinsecurity-3month.json?secure",crossOrigin:"anonymous"})}),new s.a({source:new l.a({url:"https://api.tiles.mapbox.com/v3/mapbox.world-borders-light.json?secure",crossOrigin:"anonymous"})})]})],target:"map",view:new o.a({center:Object(c.f)([37.4057,8.81566]),zoom:4})}).getLayers().forEach(function(e,n){p("#layer"+n,e),e instanceof t.a&&e.getLayers().forEach(function(e,i){p("#layer"+n+i,e)})}),$("#layertree li > span").click(function(){$(this).siblings("fieldset").toggle()}).siblings("fieldset").hide()}},[[311,0]]]);
//# sourceMappingURL=layer-group.js.map