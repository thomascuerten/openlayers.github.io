(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{301:function(a,e,n){"use strict";n.r(e);var r=n(3),t=n(2),o=n(6),i=n(4),s=n(41),c=new o.a({source:new s.a({key:"As1HiMj1PvLPlqc_gtM7AqZfBL8ZL3VrjaS3zIb22Uvb9WKhuJObROC-qUpa81U5",imagerySet:"Aerial"})}),h=new r.a({layers:[c],target:"map",view:new t.a({center:Object(i.f)([-120,50]),zoom:6})}),m={none:[0,0,0,0,1,0,0,0,0],sharpen:[0,-1,0,-1,5,-1,0,-1,0],sharpenless:[0,-1,0,-1,10,-1,0,-1,0],blur:[1,1,1,1,1,1,1,1,1],shadow:[1,2,1,0,1,0,-1,-2,-1],emboss:[-2,1,0,-1,1,1,0,1,2],edge:[0,1,0,1,-4,1,0,1,0]};function l(a){var e,n=a.length,r=new Array(n),t=0;for(e=0;e<n;++e)t+=a[e];for(t<=0?(r.normalized=!1,t=1):r.normalized=!0,e=0;e<n;++e)r[e]=a[e]/t;return r}var u=document.getElementById("kernel"),v=l(m[u.value]);u.onchange=function(){v=l(m[u.value]),h.render()},c.on("postrender",function(a){!function(a,e){for(var n=a.canvas,r=n.width,t=n.height,o=Math.sqrt(e.length),i=Math.floor(o/2),s=a.getImageData(0,0,r,t).data,c=a.createImageData(r,t),h=c.data,m=0;m<t;++m)for(var l=m*r,u=0;u<r;++u){for(var v=0,d=0,f=0,w=0,g=0;g<o;++g)for(var p=0;p<o;++p){var b=e[g*o+p],M=Math.min(t-1,Math.max(0,m+g-i)),y=Math.min(r-1,Math.max(0,u+p-i)),z=4*(M*r+y);v+=s[z]*b,d+=s[z+1]*b,f+=s[z+2]*b,w+=s[z+3]*b}var I=4*(l+u);h[I]=v,h[I+1]=d,h[I+2]=f,h[I+3]=e.normalized?w:255}a.putImageData(c,0,0)}(a.context,v)})}},[[301,0]]]);
//# sourceMappingURL=image-filter.js.map