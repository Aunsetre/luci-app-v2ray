"use strict";return L.Class.extend({extractGFWList:function(t){for(var e=t.split(/\r?\n/),r=Object.create(null),n=0,a=e;n<a.length;n++){var i=a[n];if(i&&!/^[![@]/.test(i)&&!/^(\d+\.){3}\d+/.test(i)){var s=i.match(/\w[\w-_]+\.\w[\w.-_]+/),v=void 0;s&&(v=s[0])&&(r[v]=!0)}}return Object.keys(r).join("\n")+"\n"},extractCHNRoute:function(t,e){void 0===e&&(e=!1);for(var r=[],n=e?/CN\|ipv6\|([0-9a-zA-Z:]+)\|(\d+)/:/CN\|ipv4\|([\d.]+)\|(\d+)/,a=0,i=t.split(/\r?\n/);a<i.length;a++){var s=i[a];if(s&&0!==s.indexOf("#")){var v=s.match(n);if(v&&v.length>=3){var l=v[1],o=v[2];if(e)r.push(l+"/"+o);else{var c=32-Math.log(+o)/Math.log(2);r.push(l+"/"+c)}}}}return r.join("\n")+"\n"}});