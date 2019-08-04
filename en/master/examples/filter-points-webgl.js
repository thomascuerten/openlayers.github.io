(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{280:function(e,t,a){"use strict";a.r(t);var r=a(3),o=a(2),n=a(6),i=a(23),c=a(26),u=a(21),s=a(13),l=a(4),d=a(170),p=a(15),m=a(64),v=new s.a({attributions:"NASA"}),f=[180,140,140],y=[255,80,80],g=.001*Date.now(),_=document.getElementById("min-year"),w=document.getElementById("max-year");function x(){var e=document.getElementById("status");e.querySelector("span.min-year").textContent=_.value,e.querySelector("span.max-year").textContent=w.value}_.addEventListener("input",x),_.addEventListener("change",x),w.addEventListener("input",x),w.addEventListener("change",x),x();var b,C=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.createRenderer=function(){return new d.a(this,{colorCallback:function(e,t){var a=Object(p.a)((e.get("year")-1800)/213,0,1);return t[0]=Object(p.c)(f[0],y[0],a)/255,t[1]=Object(p.c)(f[1],y[1],a)/255,t[2]=Object(p.c)(f[2],y[2],a)/255,t[3]=1,t},sizeCallback:function(e){return 18*Object(p.a)(e.get("mass")/2e5,0,1)+8},fragmentShader:["precision mediump float;","uniform float u_time;","uniform float u_minYear;","uniform float u_maxYear;","varying vec2 v_texCoord;","varying float v_opacity;","varying vec4 v_color;","void main(void) {","  float impactYear = v_opacity;","  if (impactYear < u_minYear || v_opacity > u_maxYear) {","    discard;","  }","  vec2 texCoord = v_texCoord * 2.0 - vec2(1.0, 1.0);","  float sqRadius = texCoord.x * texCoord.x + texCoord.y * texCoord.y;","  float value = 2.0 * (1.0 - sqRadius);","  float alpha = smoothstep(0.0, 1.0, value);","  vec3 color = v_color.rgb;","  float period = 8.0;","  color.g *= 2.0 * (1.0 - sqrt(mod(u_time + impactYear * 0.025, period) / period));","  gl_FragColor = vec4(color, v_color.a);","  gl_FragColor.a *= alpha;","  gl_FragColor.rgb *= gl_FragColor.a;","}"].join(" "),opacityCallback:function(e){return e.get("year")},uniforms:{u_time:function(){return.001*Date.now()-g},u_minYear:function(){return parseInt(_.value)},u_maxYear:function(){return parseInt(w.value)}}})},t}(u.a);(b=new XMLHttpRequest).open("GET","data/csv/meteorite_landings.csv"),b.onload=function(){for(var e,t=b.responseText,a=[],r=t.indexOf("\n")+1;-1!=(e=t.indexOf("\n",r));){var o=t.substr(r,e-r).split(",");r=e+1;var n=Object(l.f)([parseFloat(o[4]),parseFloat(o[3])]);isNaN(n[0])||isNaN(n[1])||a.push(new i.a({mass:parseFloat(o[1])||0,year:parseInt(o[2])||0,geometry:new c.a(n)}))}v.addFeatures(a)},b.send();var h=new r.a({layers:[new n.a({source:new m.a({layer:"toner"})}),new C({source:v})],target:document.getElementById("map"),view:new o.a({center:[0,0],zoom:2})});!function e(){h.render(),window.requestAnimationFrame(e)}()}},[[280,0]]]);
//# sourceMappingURL=filter-points-webgl.js.map