//>>built
define("dojox/sql/_crypto",["dojo","dijit","dojox"],function(m,B,r){m.provide("dojox.sql._crypto");m.mixin(r.sql._crypto,{_POOL_SIZE:100,encrypt:function(e,h,k){this._initWorkerPool();e={plaintext:e,password:h};e=m.toJson(e);e="encr:"+String(e);this._assignWork(e,k)},decrypt:function(e,h,k){this._initWorkerPool();e={ciphertext:e,password:h};e=m.toJson(e);e="decr:"+String(e);this._assignWork(e,k)},_initWorkerPool:function(){if(!this._manager)try{this._manager=google.gears.factory.create("beta.workerpool",
"1.0");this._unemployed=[];this._employed={};this._handleMessage=[];var e=this;this._manager.onmessage=function(k,h){var n=e._employed["_"+h];e._employed["_"+h]=void 0;e._unemployed.push("_"+h);if(e._handleMessage.length){var p=e._handleMessage.shift();e._assignWork(p.msg,p.callback)}n(k)};for(var h="function _workerInit(){gearsWorkerPool.onmessage \x3d "+String(this._workerHandler)+";} _workerInit();",k=0;k<this._POOL_SIZE;k++)this._unemployed.push("_"+this._manager.createWorker(h))}catch(n){throw n.message||
n;}},_assignWork:function(e,h){if(!this._handleMessage.length&&this._unemployed.length){var k=this._unemployed.shift().substring(1);this._employed["_"+k]=h;this._manager.sendMessage(e,parseInt(k,10))}else this._handleMessage={msg:e,callback:h}},_workerHandler:function(e,h){function k(b,g){for(var a=g.length/4-1,d=[[],[],[],[]],c=0;16>c;c++)d[c%4][Math.floor(c/4)]=b[c];d=t(d,g,0,4);for(c=1;c<a;c++){for(var d=n(d,4),d=m(d,4),f=0;4>f;f++){for(var e=Array(4),k=Array(4),h=0;4>h;h++)e[h]=d[h][f],k[h]=d[h][f]&
128?d[h][f]<<1^283:d[h][f]<<1;d[0][f]=k[0]^e[1]^k[1]^e[2]^e[3];d[1][f]=e[0]^k[1]^e[2]^k[2]^e[3];d[2][f]=e[0]^e[1]^k[2]^e[3]^k[3];d[3][f]=e[0]^k[0]^e[1]^e[2]^k[3]}d=t(d,g,c,4)}d=n(d,4);d=m(d,4);d=t(d,g,a,4);a=Array(16);for(c=0;16>c;c++)a[c]=d[c%4][Math.floor(c/4)];return a}function n(b,g){for(var a=0;4>a;a++)for(var d=0;d<g;d++)b[a][d]=u[b[a][d]];return b}function m(b,g){for(var a=Array(4),d=1;4>d;d++){for(var c=0;4>c;c++)a[c]=b[d][(c+d)%g];for(c=0;4>c;c++)b[d][c]=a[c]}return b}function t(b,g,a,d){for(var c=
0;4>c;c++)for(var f=0;f<d;f++)b[c][f]^=g[4*a+f][c];return b}function p(b){for(var g=b.length/4,a=g+6,d=Array(4*(a+1)),c=Array(4),f=0;f<g;f++)d[f]=[b[4*f],b[4*f+1],b[4*f+2],b[4*f+3]];for(f=g;f<4*(a+1);f++){d[f]=Array(4);for(b=0;4>b;b++)c[b]=d[f-1][b];if(0==f%g){c[4]=c[0];for(b=0;4>b;b++)c[b]=c[b+1];c=v(c);for(b=0;4>b;b++)c[b]^=y[f/g][b]}else 6<g&&4==f%g&&(c=v(c));for(b=0;4>b;b++)d[f][b]=d[f-g][b]^c[b]}return d}function v(b){for(var g=0;4>g;g++)b[g]=u[b[g]];return b}function r(b,g,a){if(128!=a&&192!=
a&&256!=a)return"";var d=a/8,c=Array(d);for(a=0;a<d;a++)c[a]=g.charCodeAt(a)&255;c=k(c,p(c));c=c.concat(c.slice(0,d-16));g=Array(16);d=(new Date).getTime();for(a=0;4>a;a++)g[a]=d>>>8*a&255;for(a=0;4>a;a++)g[a+4]=d/4294967296>>>8*a&255;for(var c=p(c),f=Math.ceil(b.length/16),d=Array(f),e=0;e<f;e++){for(a=0;4>a;a++)g[15-a]=e>>>8*a&255;for(a=0;4>a;a++)g[15-a-4]=e/4294967296>>>8*a;var h=k(g,c),l=e<f-1?16:(b.length-1)%16+1,m="";for(a=0;a<l;a++)var n=b.charCodeAt(16*e+a)^h[a],m=m+String.fromCharCode(n);
d[e]=w(m)}b="";for(a=0;8>a;a++)b+=String.fromCharCode(g[a]);b=w(b);return b+"-"+d.join("-")}function z(b,e,a){if(128!=a&&192!=a&&256!=a)return"";var d=a/8,c=Array(d);for(a=0;a<d;a++)c[a]=e.charCodeAt(a)&255;a=p(c);a=k(c,a);a=a.concat(a.slice(0,d-16));d=p(a);b=b.split("-");e=Array(16);c=x(b[0]);for(a=0;8>a;a++)e[a]=c.charCodeAt(a);for(var c=Array(b.length-1),f=1;f<b.length;f++){for(a=0;4>a;a++)e[15-a]=f-1>>>8*a&255;for(a=0;4>a;a++)e[15-a-4]=f/4294967296-1>>>8*a&255;var g=k(e,d);b[f]=x(b[f]);var h=
"";for(a=0;a<b[f].length;a++)var l=b[f].charCodeAt(a)^g[a],h=h+String.fromCharCode(l);c[f-1]=h}return c.join("")}function w(b){return b.replace(/[\0\t\n\v\f\r\xa0!-]/g,function(b){return"!"+b.charCodeAt(0)+"!"})}function x(b){return b.replace(/!\d\d?\d?!/g,function(b){return String.fromCharCode(b.slice(1,-1))})}var u=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,
199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,
186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],y=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],q=e.substr(0,4),l=e.substr(5);if("encr"==q)l=eval("("+l+")"),q=l.password,l=r(l.plaintext,q,256),gearsWorkerPool.sendMessage(String(l),h);else if("decr"==
q){var l=eval("("+l+")"),A=l.ciphertext,q=l.password,l=z(A,q,256);gearsWorkerPool.sendMessage(String(l),h)}}})});