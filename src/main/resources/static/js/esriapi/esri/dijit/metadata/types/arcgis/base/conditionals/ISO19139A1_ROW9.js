// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.20/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/base/conditionals/ISO19139A1_ROW9","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/topic dojo/has ../../../../../../kernel dojo/i18n!../../../../nls/i18nArcGIS ../../../../base/Conditional".split(" "),function(d,g,h,f,k,l,m,n){d=d(n,{key:"ISO19139A1_ROW9",postCreate:function(){this.inherited(arguments);var c=this;this.own(f.subscribe("gxe/interaction-occurred",function(a){try{if(c.parentXNode&&a&&a.inputWidget&&a.inputWidget.parentXNode){var b=a.inputWidget.parentXNode.gxePath;
"/metadata/dqInfo/dqScope/scpLvl/ScopeCd/@value"===b?c.emitInteractionOccurred():null!==b&&0===b.indexOf("/metadata/dqInfo/dqScope/scpLvlDesc/")&&c.emitInteractionOccurred()}}catch(e){console.error(e)}}));this.own(f.subscribe("gxe/optional-content-toggled",function(a){try{c.parentXNode&&a&&a.src&&a.src.target&&"scpLvlDesc"===a.src.target&&c.emitInteractionOccurred()}catch(b){console.error(b)}}));this.own(f.subscribe("gxe/after-xnode-destroyed",function(a){try{c.parentXNode&&a&&a.xnode&&"scpLvlDesc"===
a.xnode.target&&c.emitInteractionOccurred()}catch(b){console.error(b)}}))},hasLevelDescription:function(c,a){var b=!1,e=this;this.forActiveXNodes(c,a,function(a){return h.some(a.getChildren(),function(a){return a._isGxeNode&&!e.isXNodeInputEmpty(a)?b=!0:h.some(a.getChildren(),function(a){if(a._isGxeNode&&!e.isXNodeInputEmpty(a))return b=!0})})});return b},validateConditionals:function(c){var a=this.newStatus({message:m.conditionals[this.key]}),b=!0,e=this.parentXNode.parentElement.domNode;if(!this.isXNodeOff(this.parentXNode)){var d=
this.findInputValue("/metadata/dqInfo/dqScope/scpLvl/ScopeCd/@value",e);null!==d&&0<g.trim(d).length&&"005"!==d&&"006"!==d&&(b=this.hasLevelDescription("/metadata/dqInfo/dqScope/scpLvlDesc",e))}a.isValid=b;this.track(a,c);return a}});k("extend-esri")&&g.setObject("dijit.metadata.types.arcgis.base.conditionals.ISO19139A1_ROW9",d,l);return d});