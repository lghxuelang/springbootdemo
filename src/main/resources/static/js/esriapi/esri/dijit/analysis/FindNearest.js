// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.20/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/FindNearest.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentTitle" class\x3d"analysisTitle"\x3e\r\n        \x3ctable class\x3d"esriFormTable" \x3e \r\n          \x3ctr\x3e\r\n            \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"findClosestFacilityIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n            \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n              \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.findNearest}\x3c/label\x3e\r\n              \x3cnav class\x3d"breadcrumbs"  data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n                \x3ca href\x3d"#" class\x3d"crumb" style\x3d"font-size:12px;" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n                \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.findNearest}\x3c/a\x3e\r\n              \x3c/nav\x3e               \r\n            \x3c/td\x3e\r\n            \x3ctd\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n                \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                  \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                  \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n                \x3c/div\x3e              \r\n              \x3c/div\x3e                 \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n       \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_aggregateTable"  style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e \r\n         \x3ctbody\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n            \x3ctd  colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_aggregateToolDescription" \x3e${i18n.summarizeDefine}\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.analysisLayerLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"analysisLayer"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e           \r\n          \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n            \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-props\x3d"required:true" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e            \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.findLocationsIn}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"NearbyLocationsLayer"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n              \x3cselect class\x3d"longInput esriLeadingMargin1 esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_layersSelect" data-dojo-props\x3d"required:true" data-dojo-attach-event\x3d"onChange:_handleLayerChange"\x3e\x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n            \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel data-dojo-attach-point\x3d"_labelTwo" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n              \x3clabel data-dojo-attach-point\x3d"_measurelabel" class\x3d"esriAnalysisStepsLabel"\x3e${i18n.measureLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"MeasurementMethod"\x3e\x3c/a\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd style\x3d"padding:0.25em;" colspan\x3d"3"\x3e\r\n              \x3cdiv data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_measureMethodSelect" class\x3d"esriLeadingMargin1 longInput esriLongLabel esriAnalysisDriveMode"\x3e\r\n              \x3c/div\x3e\r\n            \x3c/td\x3e            \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_useTrafficRow"\x3e\r\n            \x3ctd colspan\x3d"3" style\x3d"padding:0;"\x3e\r\n              \x3cdiv style\x3d"width:100%;" class\x3d"esriFloatLeading esriTrailingMargin3" data-dojo-type\x3d"esri/dijit/analysis/TrafficTime" data-dojo-attach-point\x3d"_trafficTimeWidget"\x3e\x3c/div\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e          \r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_addStatsHelpLink" esriHelpTopic\x3d"Cutoffs"\x3e\x3c/a\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"longTextInput esriAnalysisStepsLabel" data-dojo-attach-point\x3d"_forLocationLabel"\x3e${i18n.forEachLocationLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n         \x3ctr\x3e\r\n           \x3ctd colspan\x3d"3" class\x3d"esriLeadingMargin1" style\x3d"padding-bottom:0;"\x3e\r\n            \x3ctable style\x3d"width:100%"\x3e\r\n              \x3ctr\x3e\r\n                \x3ctd style\x3d"width:1%;"\x3e\r\n                  \x3cdiv class\x3d"esriLeadingMargin1" id\x3d"${id}.findNearestCheck" data-dojo-type\x3d"dijit/form/CheckBox"  data-dojo-attach-point\x3d"_findNearestCheck" data-dojo-attach-event\x3d"onChange:_handleFindNearestCheckChange" data-dojo-props\x3d"checked:\'true\'"\x3e\x3c/div\x3e\r\n                \x3c/td\x3e\r\n                \x3ctd class\x3d"longTextInput"\x3e\r\n                  \x3clabel for\x3d"${id}.findNearestCheck" data-dojo-attach-point\x3d"_findNearestLabel"\x3e${i18n.findNearestLabel}\x3c/label\x3e\r\n                \x3c/td\x3e\r\n              \x3c/tr\x3e\r\n            \x3c/table\x3e  \r\n           \x3c/td\x3e\r\n         \x3c/tr\x3e\r\n         \x3ctr\x3e\r\n           \x3ctd colspan\x3d"3" style\x3d"padding-bottom:0.25;padding-top:0.25;"\x3e\r\n             \x3cinput data-dojo-type\x3d"dijit/form/NumberSpinner"  class\x3d "esriMediumlabel esriLeadingMargin2"  data-dojo-attach-point\x3d"_maxCountInput" data-dojo-props\x3d"style: \'width:25%\',smallDelta:1,constraints: { min:1, max:100, places:0 }"/\x3e\r\n           \x3c/td\x3e\r\n         \x3c/tr\x3e\r\n         \x3ctr\x3e\r\n           \x3ctd colspan\x3d"3" style\x3d"padding-bottom:0.25;padding-top:0.25;"\x3e\r\n             \x3ctable style\x3d"width:100%"\x3e\r\n               \x3ctr\x3e\r\n                 \x3ctd style\x3d"width:1%;"\x3e\r\n                   \x3cdiv class\x3d"esriLeadingMargin1" id\x3d"${id}.limitSearchRangeCheck" data-dojo-type\x3d"dijit/form/CheckBox"  data-dojo-attach-point\x3d"_limitSearchRangeCheck" data-dojo-attach-event\x3d"onChange:_handleLimitSearchCheckChange" data-dojo-props\x3d"checked:\'true\'"\x3e\x3c/div\x3e\r\n                 \x3c/td\x3e\r\n                 \x3ctd class\x3d"longTextInput"\x3e\r\n                   \x3clabel for\x3d"${id}.limitSearchRangeCheck" data-dojo-attach-point\x3d"_limitSearchRangeLabel"\x3e${i18n.limitSearchRangeCheck}\x3c/label\x3e\r\n                 \x3c/td\x3e\r\n               \x3c/tr\x3e\r\n             \x3c/table\x3e\r\n           \x3c/td\x3e\r\n         \x3c/tr\x3e\r\n         \x3ctr data-dojo-attach-point\x3d"_distanceLimitRow"\x3e\r\n            \x3ctd style\x3d"padding-right:0;padding-top:0;width:30%;"\x3e\r\n              \x3cinput type\x3d"text" class\x3d"esriLeadingMargin2" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-attach-event\x3d"onChange:_handleDistValueChange" data-dojo-props\x3d"value:100,intermediateChanges:true,required:true,invalidMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_searchCutoffInput" class\x3d"esriLeadingMargin1"  style\x3d"width:60%;"\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-left:0.25em;padding-top:0;width:60%;"\x3e\r\n              \x3cselect class\x3d"mediumInput esriMediumlabel esriAnalysisSelect esriLeadingMargin1" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"onChange:_handleDistUnitsChange" data-dojo-attach-point\x3d"_distanceUnitsSelect" style\x3d"width:65%;table-layout:fixed;"\x3e\r\n              \x3c/select\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr data-dojo-attach-point\x3d"_timeLimitRow" style\x3d"display:none;"\x3e\r\n            \x3ctd style\x3d"padding-top:0;width:24%;"\x3e\r\n              \x3clabel class\x3d"esriLeadingMargin2 esriTrailingMargin025"\x3e\r\n                \x3cinput type\x3d"text" class\x3d"" style\x3d"width:40%" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-attach-event\x3d"onChange:_handleTimeUnitsChange" data-dojo-props\x3d"intermediateChanges:true,value:\'1\',required:true,invalidMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_hoursInput"\x3e\x3c/input\x3e\r\n                ${i18n.hoursSmall}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd style\x3d"padding-top:0;width:24%;"\x3e\r\n              \x3clabel class\x3d"esriLeadingMargin1 esriTrailingMargin025"\x3e\r\n                \x3cinput type\x3d"text" class\x3d"" style\x3d"width:40%" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-attach-event\x3d"onChange:_handleTimeUnitsChange" data-dojo-props\x3d"intermediateChanges:true,value:\'0\',required:true,invalidMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_minutesInput"\x3e\x3c/input\x3e\r\n                ${i18n.minutesSmall}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd style\x3d"padding-top:0;width:24%;"\x3e\r\n              \x3clabel class\x3d"esriTrailingMargin025"\x3e\r\n                \x3cinput type\x3d"text" class\x3d"" style\x3d"width:40%" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-attach-event\x3d"onChange:_handleTimeUnitsChange" data-dojo-props\x3d"intermediateChanges:true,value:\'0\',required:true,invalidMessage:\'${i18n.distanceMsg}\'" data-dojo-attach-point\x3d"_secondsInput"\x3e\x3c/input\x3e\r\n                ${i18n.secondsSmall}\x3c/label\x3e\r\n            \x3c/td\x3e                        \r\n          \x3c/tr\x3e\r\n                  \r\n          \x3c!--\x3ctr data-dojo-attach-point\x3d"_useTrafficLabelRow"\x3e\r\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom: 0"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"longTextInput"\x3e\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom: 0"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"UseTypicalTraffic"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e          \r\n          \x3ctr data-dojo-attach-point\x3d"_useTrafficRow"\x3e\r\n            \x3ctd colspan\x3d"3" style\x3d"padding:0;"\x3e\r\n              \x3cdiv style\x3d"width:100%;" class\x3d"esriFloatLeading esriTrailingMargin3" data-dojo-type\x3d"esri/dijit/analysis/TrafficTime" data-dojo-attach-point\x3d"_trafficTimeWidget"\x3e\x3c/div\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e--\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"2"\x3e\r\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel" data-dojo-attach-point\x3d"_outputNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n              \x3clabel class\x3d"longTextInput esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd class\x3d"shortTextInput"\x3e\r\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"OutputNearestLocationsLayer"\x3e\x3c/a\x3e \r\n            \x3c/td\x3e             \r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"esriLeadingMargin1 esriOutputText"  data-dojo-props\x3d"trim:true,required:true" data-dojo-attach-point\x3d"_outputLayerInput" value\x3d""\x3e\x3c/input\x3e\r\n            \x3c/td\x3e                \r\n          \x3c/tr\x3e \r\n          \x3c!--\x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"esriLeadingMargin1 esriOutputText"  data-dojo-props\x3d"required:true" data-dojo-attach-point\x3d"_outputLayerInput2" value\x3d""\x3e\x3c/input\x3e\r\n            \x3c/td\x3e                \r\n          \x3c/tr\x3e--\x3e           \r\n          \x3ctr data-dojo-attach-point\x3d"_outputTypeRow"\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n              \x3c!--\x3clabel class\x3d"esriLeadingMargin1"\x3e${i18n.outputType}\x3c/label\x3e\r\n              \x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_outputTypeSelect" class\x3d"mediumInput esriMediumLabel"\x3e\r\n                \x3coption selected\x3d"selected" value\x3d"FeatureLayer"\x3e${i18n.featureLayer}\x3c/option\x3e\r\n                \x3coption value\x3d"RouteLayers"\x3e${i18n.routeLayers}\x3c/option\x3e\r\n              \x3c/select\x3e--\x3e\r\n              \x3clabel data-dojo-attach-point\x3d"" class\x3d"esriLeadingMargin1 esriSelectLabel"\x3e\r\n                \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_incldRouteLayersChk" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:false" name\x3d"includeRouteLayers"/\x3e\r\n                ${i18n.includeRouteLayers}\r\n              \x3c/label\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd colspan\x3d"3"\x3e\r\n               \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n                 \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n                 \x3cinput class\x3d"longInput esriFolderSelect" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true"\x3e\x3c/input\x3e\r\n               \x3c/div\x3e              \r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e                                      \r\n        \x3c/tbody\x3e         \r\n       \x3c/table\x3e\r\n     \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n      \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\r\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\r\n           ${i18n.useMapExtent}\r\n       \x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n          ${i18n.runAnalysis}\r\n      \x3c/button\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e    \r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/FindNearest","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/number dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect dijit/form/NumberSpinner dijit/form/NumberTextBox ../../kernel ../../lang ./AnalysisBase ./_AnalysisOptions ./CreditEstimator ./utils ./TrafficTime dojo/i18n!../../nls/jsapi dojo/text!./templates/FindNearest.html".split(" "),
function(n,t,d,g,p,e,u,G,m,h,v,H,k,w,I,x,y,z,A,B,J,K,L,M,N,O,P,Q,R,S,T,C,r,D,E,U,f,V,q,F){n=t([x,y,z,A,B,E,D],{declaredClass:"esri.dijit.analysis.FindNearest",templateString:F,widgetsInTemplate:!0,analysisLayer:null,nearLayers:null,summaryFields:null,outputLayerName:null,nearLayer:null,searchCutoff:100,searchCutoffUnits:"Miles",measurementType:"StraightLine",maxCount:1,returnFeatureCollection:!1,enableTravelModes:!0,i18n:null,toolName:"FindNearest",helpFileName:"FindNearest",resultParameter:["nearestLayer",
"connectingLinesLayer"],_timeObj:null,constructor:function(a){this._pbConnects=[];this._statsRows=[];this._timeObj={hours:1,minutes:0,seconds:0};a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);g.forEach(this._pbConnects,p.disconnect);delete this._pbConnects;this._driveTimeClickHandles&&0<this._driveTimeClickHandles.length&&(g.forEach(this._driveTimeClickHandles,p.disconnect),this._driveTimeClickHandles=null)},postMixInProperties:function(){this.inherited(arguments);
d.mixin(this.i18n,q.bufferTool);d.mixin(this.i18n,q.driveTimes);d.mixin(this.i18n,q.FindNearestTool)},postCreate:function(){this.inherited(arguments);w.add(this._form.domNode,"esriSimpleForm");this._outputLayerInput.set("validator",d.hitch(this,this.validateServiceName));this._hoursInput.set("validator",d.hitch(this,this.validateTime,"hours"));this._minutesInput.set("validator",d.hitch(this,this.validateTime,"minutes"));this._secondsInput.set("validator",d.hitch(this,this.validateTime,"seconds"));
this._buildUI()},startup:function(){},_onClose:function(a){a&&(this._save(),this.emit("save",{save:!0}));this.emit("close",{save:a})},_handleShowCreditsClick:function(a){a.preventDefault();if(this._form.validate()){a={};var c;c=this.nearLayers[this._layersSelect.get("value")];a.nearLayer=e.toJson(this.constructAnalysisInputLyrObj(c));a.measurementType=this.get("measurementType");a.analysisLayer=e.toJson(this.constructAnalysisInputLyrObj(this.analysisLayer));!0===this._searchCutoffInput.get("value")?
(a.searchCutoff=this.get("searchCutoff"),-1!==this.get("measurementType").indexOf("Time")?a.searchCutoffUnits="Minutes":a.searchCutoffUnits=this.get("searchCutoffUnits")):a.searchCutoff=null;a.maxCount=this.get("maxCount");this._trafficTimeWidget.get("checked")&&(a.timeOfDay=this._trafficTimeWidget.get("timeOfDay"),"UTC"===this._trafficTimeWidget.get("timeZoneForTimeOfDay")&&(a.timeZoneForTimeOfDay=this._trafficTimeWidget.get("timeZoneForTimeOfDay")));this.returnFeatureCollection||(a.OutputName=e.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));
this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=e.toJson({extent:this.map.extent._normalize(!0)}));this.getCreditsEstimate(this.toolName,a).then(d.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()}))}},_handleSaveBtnClick:function(){if(this._form.validate()){this._saveBtn.set("disabled",!0);var a={},c={},b,l;b=this.nearLayers[this._layersSelect.get("value")];a.nearLayer=e.toJson(this.constructAnalysisInputLyrObj(b));l=this._measureMethodSelect.getOptions(this._measureMethodSelect.get("value"));
a.measurementType=l.travelMode?e.toJson(l.travelMode):this._measureMethodSelect.get("value");a.analysisLayer=e.toJson(this.constructAnalysisInputLyrObj(this.analysisLayer));this._limitSearchRangeCheck.get("checked")?(a.searchCutoff=this.get("searchCutoff"),-1===this.get("measurementType").indexOf("Time")&&(a.searchCutoffUnits=this.get("searchCutoffUnits"))):a.searchCutoff=null;this._findNearestCheck.get("checked")?a.maxCount=this.get("maxCount"):a.maxCount=null;this._trafficTimeWidget.get("checked")&&
(a.timeOfDay=this._trafficTimeWidget.get("timeOfDay"),"UTC"===this._trafficTimeWidget.get("timeZoneForTimeOfDay")&&(a.timeZoneForTimeOfDay=this._trafficTimeWidget.get("timeZoneForTimeOfDay")));this.returnFeatureCollection||(a.OutputName=e.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=e.toJson({extent:this.map.extent._normalize(!0)}));this.returnFeatureCollection&&(l={outSR:this.map.spatialReference},this.showChooseExtent&&
this._useExtentCheck.get("checked")&&(l.extent=this.map.extent._normalize(!0)),a.context=e.toJson(l));b={description:m.substitute(this.i18n.itemDescription,{sumNearbyLayerName:this.analysisLayer.name,summaryLayerName:b.name}),tags:m.substitute(this.i18n.itemTags,{sumNearbyLayerName:this.analysisLayer.name,summaryLayerName:b.name}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(b.folder=this.get("folderId"));"StraightLine"!==a.measurementType&&this.showOutputType&&(a.includeRouteLayers=this._incldRouteLayersChk.get("checked"));
c.itemParams=b;c.jobParams=a;this.execute(c)}},_handleLayerChange:function(a){"browse"===a?(this._isAnalysisSelect=!1,this._browsedlg.show()):"browselayers"===a?(this.showGeoAnalyticsParams&&(k=this._browseLyrsdlg.browseItems.get("query"),k.types.push('type:"Big Data File Share"'),this._browseLyrsdlg.browseItems.set("query",k)),this._isAnalysisSelect=!1,this._browseLyrsdlg.show()):(a=this.nearLayers[a],r.isDefined(a)&&this.analysisLayer&&(this.outputLayerName=m.substitute(this.i18n.outputLayerName,
{layer:a.name,sumNearbyLayerName:this.analysisLayer.name})),this._outputLayerInput.set("value",this.outputLayerName))},_handleLimitSearchCheckChange:function(a){-1!==this.get("measurementType").indexOf("Time")?(this._hoursInput.set("disabled",!a),this._minutesInput.set("disabled",!a),this._secondsInput.set("disabled",!a)):(this._distanceUnitsSelect.set("disabled",!a),this._searchCutoffInput.set("disabled",!a))},_handleFindNearestCheckChange:function(a){this._maxCountInput.set("disabled",!a)},_handleTimeUnitsChange:function(a){},
_handleDistValueChange:function(a){this.set("outputLayerName")},_handleDistUnitsChange:function(a){this.set("outputLayerName");this.set("searchCutoffUnits",a)},_handleDistanceTypeChange:function(a){var c,b;b=this._measureMethodSelect.getOptions(this._measureMethodSelect.get("value"));r.isDefined(b)?(c="Time"===b.units,b="Time"===b.units&&"driving"===b.modei18nKey):(c=-1!==a.indexOf("Time"),b="DrivingTime"===a);this.set("measurementType",a);h.set(this._useTrafficRow,"display",b?"":"none");h.set(this._distanceLimitRow,
"display",b?"none":"");h.set(this._timeLimitRow,"display",b?"":"none");this._trafficTimeWidget.set("disabled",!b);this._trafficTimeWidget.set("reset",!b);c?(this._distanceUnitsSelect.removeOption(this._distanceUnitsSelect.getOptions()),this._distanceUnitsSelect.addOption([{value:"Seconds",label:this.i18n.seconds},{value:"Minutes",label:this.i18n.minutes,selected:"selected"},{value:"Hours",label:this.i18n.hours}])):(this.get("searchCutoffUnits")&&this.set("searchCutoffUnits",this.get("searchCutoffUnits")),
this._distanceUnitsSelect.removeOption(this._distanceUnitsSelect.getOptions()),this._distanceUnitsSelect.addOption([{value:"Miles",label:this.i18n.miles},{value:"Yards",label:this.i18n.yards},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}]),"StraightLine"===a&&this._distanceUnitsSelect.addOption([{type:"separator"},{value:"NauticalMiles",label:this.i18n.nautMiles}]),this._distanceUnitsSelect.set("value",
this.searchCutoffUnits));this.showOutputType&&("StraightLine"===a&&this._incldRouteLayersChk.set("checked",!1),this._incldRouteLayersChk.set("disabled","StraightLine"===a));this.set("outputLayerName")},_save:function(){},_buildUI:function(){var a;h.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");this.signInPromise.then(d.hitch(this,f.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer}));f.populateTravelModes({selectWidget:this._measureMethodSelect,
addStraightLine:!0,widget:this,enableTravelModes:this.get("enableTravelModes")});f.initHelpLinks(this.domNode,this.showHelp);this.get("showSelectAnalysisLayer")&&(!this.get("analysisLayer")&&this.get("analysisLayers")&&this.set("analysisLayer",this.analysisLayers[0]),f.populateAnalysisLayers(this,"analysisLayer","analysisLayers"));this.outputLayerName&&(this.outputLayerInput.set("value",this.outputLayerName),a=!1);this.analysisLayer&&this._updateAnalysisLayerUI(a);f.addReadyToUseLayerOption(this,
[this._analysisSelect,this._layersSelect]);h.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(d.hitch(this,function(a){this.folderStore=a;f.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}));h.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");this.measurementType&&
-1===this.measurementType.indexOf("Time")?(this.searchCutoffUnits&&this._distanceUnitsSelect.set("value",this.searchCutoffUnits),this.searchCutoff&&this._searchCutoffInput.set("value",this.searchCutoff)):this.measurementType&&-1!==this.measurementType.indexOf("Time")&&this._timeObj!==this.searchCutoff&&(this._hoursInput.set("value",parseInt(this.searchCutoff.hours,10)),this._minutesInput.set("value",parseInt(this.searchCutoff.minutes,10)),this._secondsInput.set("value",parseInt(this.searchCutoff.seconds,
10)),this._timeObj.hours=parseInt(this.searchCutoff.hours,10),this._timeObj.minutes=parseInt(this.searchCutoff.minutes,10),this._timeObj.seconds=parseInt(this.searchCutoff.seconds,10));this._handleDistanceTypeChange(this.measurementType);this.maxCount&&this._maxCountInput.set("value",this.maxCount);f.updateDisplay([this._outputTypeRow],this.get("showOutputType"),"table-row");this._loadConnections()},_updateAnalysisLayerUI:function(a){var c,b;this.analysisLayer&&(v.set(this._aggregateToolDescription,
"innerHTML",m.substitute(this.i18n.summarizeDefine,{sumNearbyLayerName:this.analysisLayer.name})),"esriGeometryPoint"!==this.analysisLayer.geometryType&&(this.set("enableTravelModes",!1),this._updateTravelModes(!1)));this.nearLayers&&(c=g.some(this._layersSelect.getOptions(),function(a){return"browse"===a.value},this),b=g.some(this._layersSelect.getOptions(),function(a){return"browselayers"===a.value},this),this._layersSelect.removeOption(this._layersSelect.getOptions()),g.forEach(this.nearLayers,
function(b,c){b!==this.analysisLayer&&(this._layersSelect.addOption({value:c,label:b.name}),b.analysisReady&&this.analysisLayer.analysisReady&&b.url===this.analysisLayer.url&&this._layersSelect.removeOption({value:c,label:b.name}),!this.outputLayerName||a)&&(this.outputLayerName=m.substitute(this.i18n.outputLayerName,{layer:b.name,sumNearbyLayerName:this.analysisLayer.name}))},this),(this.get("showReadyToUseLayers")||this.get("showBrowseLayers")||c||b)&&this._layersSelect.addOption({type:"separator",
value:""}),this.get("showReadyToUseLayers")&&c&&this._layersSelect.addOption({value:"browse",label:this.i18n.browseAnalysisTitle}),this.get("showBrowseLayers")&&b&&this._layersSelect.addOption({value:"browselayers",label:this.i18n.browseLayers}));this._outputLayerInput.set("value",this.outputLayerName);this.nearLayer&&this._layersSelect.set("value",this.nearLayer)},_handleAnalysisLayerChange:function(a){"browse"===a?(this._isAnalysisSelect=!0,this._browsedlg.show()):"browselayers"===a?(this.showGeoAnalyticsParams&&
(k=this._browseLyrsdlg.browseItems.get("query"),k.types.push('type:"Big Data File Share"'),this._browseLyrsdlg.browseItems.set("query",k)),this._isAnalysisSelect=!0,this._browseLyrsdlg.show()):(this.analysisLayer=this.analysisLayers[a],this._updateAnalysisLayerUI(!0))},_handleBrowseItemsSelect:function(a){a&&a.selection&&f.addAnalysisReadyLayer({item:a.selection,layers:this._isAnalysisSelect?this.analysisLayers:this.nearLayers,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._layersSelect,
browseDialog:a.dialog||this._browsedlg,widget:this}).always(d.hitch(this,function(a){this._isAnalysisSelect&&this._handleAnalysisLayerChange(this._analysisSelect.get("value"))}))},_loadConnections:function(){this.on("start",d.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",d.hitch(this,"_onClose",!1));this._connect(this._measureMethodSelect,"onChange",d.hitch(this,"_handleDistanceTypeChange"));this.watch("enableTravelModes",d.hitch(this,function(a,c,b){this._updateTravelModes(b)}))},
_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setAnalysisLayerAttr:function(a){this.analysisLayer=a},_getAnalysisLayerAttr:function(a){return this.analysisLayer},_setAnalysisLayersAttr:function(a){this.analysisLayers=a},_setNearLayersAttr:function(a){this.nearLayers=a},_setLayersAttr:function(a){this.nearLayers=[]},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},_setSearchCutoffUnitsAttr:function(a){this.searchCutoffUnits=
a},_getSearchCutoffUnitsAttr:function(){return this.searchCutoffUnits},_setMeasurementTypeAttr:function(a){this.measurementType=a},_getMeasurementTypeAttr:function(){return this.measurementType},_getSearchCutoffAttr:function(){this.measurementType&&"DrivingTime"===this.measurementType?this._timeObj&&(this.searchCutoff=60*this._timeObj.hours+this._timeObj.minutes+this._timeObj.seconds/60):this.searchCutoff=this._searchCutoffInput.get("value");return this.searchCutoff},_setSearchCutoffAttr:function(a){a&&
(this.searchCutoff=a)},_getMaxCountAttr:function(){return this.maxCount=this._maxCountInput.get("value")},_setMaxCountAttr:function(a){this.maxCount=a},_setEnableTravelModesAttr:function(a){this._set("enableTravelModes",a)},validateTime:function(a,c){var b=!0,d;d=parseInt(c,10);"hours"===a?this._timeObj.hours=d:"minutes"===a?this._timeObj.minutes=d:"seconds"===a&&(this._timeObj.seconds=d);0===this._timeObj.hours&&0===this._timeObj.minutes&&0===this._timeObj.seconds&&(b=!1);return b},_connect:function(a,
c,b){this._pbConnects.push(p.connect(a,c,b))},_updateTravelModes:function(a){var c=this._measureMethodSelect.getOptions();g.forEach(c,function(b){"StraightLine"!==b.value&&(b.disabled=!a)});this._measureMethodSelect.updateOption(c)},validateServiceName:function(a){return f.validateServiceName(a,{textInput:this._outputLayerInput})}});u("extend-esri")&&d.setObject("dijit.analysis.FindNearest",n,C);return n});