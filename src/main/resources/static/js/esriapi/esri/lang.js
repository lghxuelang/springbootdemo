// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.20/esri/copyright.txt for details.
//>>built
define("esri/lang","dojo/_base/array dojo/_base/json dojo/_base/kernel dojo/_base/lang dojo/date dojo/has dojo/number dojo/date/locale ./kernel".split(" "),function(k,v,w,f,x,y,z,A,n){function r(b,c,a){return[f.isString(b)?b.split(""):b,c||w.global,f.isString(a)?new Function("item","index","array",a):a]}function l(b){return void 0!==b&&null!==b}function p(b){return l(b)?b:""}function m(b,c,a){var d=a.match(/([^\(]+)(\([^\)]+\))?/i),e=f.trim(d[1]);a=c[b];var d=v.fromJson((d[2]?f.trim(d[2]):"()").replace(/^\(/,
"({").replace(/\)$/,"})")),g=d.utcOffset;if(-1===k.indexOf(B,e))e=f.getObject(e),f.isFunction(e)&&(a=e(a,b,c,d));else if("number"===typeof a||"string"===typeof a&&a&&!isNaN(Number(a)))switch(a=Number(a),e){case "NumberFormat":return z.format(a,d);case "DateString":b=new Date(a);if(d.local||d.systemLocale)return d.systemLocale?b.toLocaleDateString()+(d.hideTime?"":" "+b.toLocaleTimeString()):b.toDateString()+(d.hideTime?"":" "+b.toTimeString());b=b.toUTCString();d.hideTime&&(b=b.replace(/\s+\d\d\:\d\d\:\d\d\s+(utc|gmt)/i,
""));return b;case "DateFormat":return b=new Date(a),l(g)&&(b=x.add(b,"minute",b.getTimezoneOffset()-g)),A.format(b,d)}return p(a)}function q(b,c){var a;if(c)for(a in b)b.hasOwnProperty(a)&&(void 0===b[a]?delete b[a]:b[a]instanceof Object&&q(b[a],!0));else for(a in b)b.hasOwnProperty(a)&&void 0===b[a]&&delete b[a];return b}var B=["NumberFormat","DateString","DateFormat"],t=/<\/?[^>]+>/g,u={valueOf:function(b,c){for(var a in b)if(b[a]==c)return a;return null},stripTags:function(b){if(b){var c=typeof b;
if("string"===c)b=b.replace(t,"");else if("object"===c)for(var a in b)(c=b[a])&&"string"===typeof c&&(c=c.replace(t,"")),b[a]=c}return b},substitute:function(b,c,a){var d,e,g;l(a)&&(f.isObject(a)?(d=a.first,e=a.dateFormat,g=a.numberFormat):d=a);if(c&&"${*}"!==c)return f.replace(c,f.hitch({obj:b},function(b,a){var c=a.split(":");return 1<c.length?(a=c[0],c.shift(),m(a,this.obj,c.join(":"))):e&&-1!==k.indexOf(e.properties||"",a)?m(a,this.obj,e.formatter||"DateString"):g&&-1!==k.indexOf(g.properties||
"",a)?m(a,this.obj,g.formatter||"NumberFormat"):p(this.obj[a])}),/\$\{([^\}]+)\}/g);c=[];for(var h in b)if(a=b[h],e&&-1!==k.indexOf(e.properties||"",h)?a=m(h,b,e.formatter||"DateString"):g&&-1!==k.indexOf(g.properties||"",h)&&(a=m(h,b,g.formatter||"NumberFormat")),c.push(h+" \x3d "+p(a)+"\x3cbr/\x3e"),d)break;return c.join("")},filter:function(b,c,a){c=r(b,a,c);a={};var d;b=c[0];for(d in b)c[2].call(c[d],b[d],d,b)&&(a[d]=b[d]);return a},startsWith:function(b,c,a){a=a||0;return b.indexOf(c,a)===a},
endsWith:function(b,c,a){if("number"!==typeof a||!isFinite(a)||Math.floor(a)!==a||a>b.length)a=b.length;a-=c.length;b=b.indexOf(c,a);return-1!==b&&b===a},isDefined:l,fixJson:q};y("extend-esri")&&(f.mixin(n,u),n._isDefined=l,n._getParts=r,n._sanitize=q);return u});