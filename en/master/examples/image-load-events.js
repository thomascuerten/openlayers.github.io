(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{302:function(t,e,i){"use strict";i.r(e);var o=i(3),d=i(2),a=i(67),n=i(107);function s(t){this.el=t,this.loading=0,this.loaded=0}s.prototype.addLoading=function(){0===this.loading&&this.show(),++this.loading,this.update()},s.prototype.addLoaded=function(){var t=this;setTimeout(function(){++t.loaded,t.update()},100)},s.prototype.update=function(){var t=(this.loaded/this.loading*100).toFixed(1)+"%";if(this.el.style.width=t,this.loading===this.loaded){this.loading=0,this.loaded=0;var e=this;setTimeout(function(){e.hide()},500)}},s.prototype.show=function(){this.el.style.visibility="visible"},s.prototype.hide=function(){this.loading===this.loaded&&(this.el.style.visibility="hidden",this.el.style.width=0)};var h=new s(document.getElementById("progress")),l=new n.a({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states"},serverType:"geoserver"});l.on("imageloadstart",function(){h.addLoading()}),l.on("imageloadend",function(){h.addLoaded()}),l.on("imageloaderror",function(){h.addLoaded()});new o.a({layers:[new a.a({source:l})],target:"map",view:new d.a({center:[-10997148,4569099],zoom:4})})}},[[302,0]]]);
//# sourceMappingURL=image-load-events.js.map