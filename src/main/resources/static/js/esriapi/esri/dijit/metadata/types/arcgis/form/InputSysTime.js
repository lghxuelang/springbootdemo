// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.20/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/form/InputSysTime","dojo/_base/declare dojo/_base/lang dojo/date/locale dojo/has ../../../../../kernel ../../../form/InputText".split(" "),function(a,b,c,d,e,f){a=a([f],{postCreate:function(){this.inherited(arguments)},connectXNode:function(a,b){this.inherited(arguments);b||"/metadata/Esri/CreaTime"===a.gxePath&&this.setInputValue(this.formatTime(a.gxeDocument.datestamp))},formatTime:function(a){return c.format(a,{timePattern:"HH:mm:ss.SS",selector:"time"})},
getXmlValue:function(){return"/metadata/Esri/ModTime"===this.parentXNode.gxePath?this.formatTime(this.parentXNode.gxeDocument.datestamp):this.inherited(arguments)}});d("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.form.InputSysTime",a,e);return a});