require(["esri/map","dojo/dom","dojo/dom-construct","esri/geometry/Point","ext/TDTLayer","ext/InfoWindow",
         "esri/symbols/PictureMarkerSymbol","esri/graphic","esri/layers/GraphicsLayer","esri/geometry/Polyline",
         "esri/geometry/Polygon","esri/InfoTemplate","esri/symbols/CartographicLineSymbol",
         "esri/symbols/SimpleLineSymbol","esri/symbols/SimpleFillSymbol","esri/Color","dojo/domReady!"],
		function(Map,dom,domConstruct,Point,TDTLayer,InfoWindow,PictureMarkerSymbol,Graphic,GraphicsLayer,
				Polyline,Polygon,InfoTemplate,CartographicLineSymbol,
				SimpleLineSymbol,SimpleFillSymbol,Color){
	
		var infoWindow = new  InfoWindow({domNode: domConstruct.create("div", null, dom.byId("mapdiv"))});      
		map = new Map("mapdiv",{
        	 logo:false,
        	 sliderPosition:"top-right",
        	 infoWindow : infoWindow
        	});
        var tdtLayer = new TDTLayer(null,{id:"tdtbasemap"});
        var tdtanoLayer = new TDTLayer("ano",{id:"tdtanomap"});
        map.addLayers([tdtLayer,tdtanoLayer]);
        map.centerAndZoom(new Point(116.401003,39.903117),8);
        initSearchDom(); 

        function initSearchDom(){
        	$("#mapdiv").append("<input type='input' class='search-input'/>");
        	$("#mapdiv").append("<div class='search-result'><div class='search-count'></div><div class='search-list'></div></div>");	
        	$(".search-input").bind('keyup',(function(evt){
        		var param = $(".search-input").val();
        		if(event.keyCode == "13")    
                {   
        			$('.search-list').empty();
        			$('.search-count').empty();
                    $.ajax({
                    	url:"http://www.tianditu.com/query.shtml",
                    	data:{
                    		postStr:'{"keyWord":'+param+',"level":"11","mapBound":"116.04577,39.70307,116.77361,40.09583","queryType":"1","count":"10","start":"20"}',
                    		type:"query"
                    		},
                    	dataType:"json",
                    	success:function(_res){
                    		if(_res.pois){
                    			var res = _res.pois;
                    			$('.search-result').css("display",'block');
                    			$('.search-count').html("<span>&nbsp;&nbsp;&nbsp;共查询到<span style='color:red'>"+_res.count+"</span>结果</span>");
                    			for(var i=0;i<res.length;i++){
                    				$('.search-list').append("<div class='poi-item' data-value='"+JSON.stringify(res[i])+"'><span class='poi-red'></span><span>"+res[i].name+"</span></br>地  址: "+res[i].address+"<br/>电 话: "+res[i].phone+"</div>");
                    			}
                    		}else{
                    			$('.search-result').css("display",'block');
                    			$('.search-count').html("<span>未查询到结果</span>");
                    		}
                    		$('.poi-item').click(function(e){
                    			var poidata = JSON.parse($(e.target).attr("data-value"));
                    			poiposition(poidata);
                    		});
                    	}
                    });
                }else{
                	$('.search-result').css("display",'none');
                	$('.search-count').empty();
                	$('.search-list').empty();
                	$.ajax({
                    	url:"http://www.tianditu.com/query.shtml",
                    	data:{
                    		postStr:'{"keyWord":'+param+',"level":"11","mapBound":"116.04577,39.70307,116.77361,40.09583","queryType":"1","count":"10","start":"0"}',
                    		type:"query"
                    		},
                    	dataType:"json",
                    	success:function(_res){
                    		if(_res.pois){
                    			var res = _res.pois;
                    			$('.search-result').css("display",'block');
                    			for(var i=0;i<res.length;i++){
                    				$('.search-list').append("<div class='poi-item' data-value='"+JSON.stringify(res[i])+"'>"+res[i].name+"</div>");
                    			}
                    		}else{
                    			$('.search-result').css("display",'none');
                    		}
                    		$('.poi-item').click(function(e){
                    			var poidata = JSON.parse($(e.target).attr("data-value"));
                    			var suggestmsg = poidata.name;
                    			$(".search-input").val(" "+suggestmsg);
                    			poiposition(poidata);
                    		});
                    		
                    	}
                    });
                }
        		
        	}));
        }
        
        function poiposition(poidata){
        	map.graphics.clear();
        	var lon = parseFloat(poidata.lonlat.split(" ")[0]);
        	var lat = parseFloat(poidata.lonlat.split(" ")[1]);
        	var poiPoint = new Point(lon,lat,map.spatialReference);
        	var poiSymbol = new PictureMarkerSymbol("themes/images/qd_loced.png",14,17);
        	var infoTemplate = new InfoTemplate("${name}", "${*}");
        	map.graphics.add(new Graphic(poiPoint,poiSymbol,poidata,infoTemplate));
        	map.centerAndZoom(poiPoint,12);
        }
        
        $("#selectshp").uploadify({
        	'formData': {},
            'successTimeout' : 600,
            'sizeLimit': 1024*1024*100,//限制大小100M
            'removeCompleted':true,
            'buttonText': '选择shp文件',
            'swf': 'uploadify/uploadify.swf',
            'uploader': 'uploadshp/upshp',
            'fileTypeExts': '*.zip',
            "onUploadSuccess": function (file, data, response) {
                var res = JSON.parse(data);
                //addGeoPoint(JSON.parse(data.geojson));
                //addGeoLine(JSON.parse(res.geojson));
                addGeoPolygon(JSON.parse(res.geojson));
            },
            "onUploadError": function (file, errorCode, errorMsg,
                                       errorString) {
                console.log(errorCode);
                console.log(errorMsg);
                console.log(errorString);
            }
        });
        
        function addGeoPoint(geojson){
        	var shpLayer = null;
        	if(!map.getLayer("shpLayer")){
        		shpLayer = new GraphicsLayer({id:"shpLayer"});
        	}
        	var poiSymbol = new PictureMarkerSymbol("themes/images/qd_loc.png",14,17);
        	for(var i=0;i<geojson.length;i++){
        		var geoxy = geojson[i].geometry.split(" ");
        		var x = geoxy[1].substring(1);
        		var y = geoxy[2].substring(0,geoxy[2].length-1);
        		var graphic  = new Graphic(new Point(parseFloat(x),parseFloat(y)),poiSymbol,geojson[i],null);
        		shpLayer.add(graphic);
        	}
        	map.addLayer(shpLayer);
        	
        }
        function addGeoLine(geojson){
        	debugger
        	var shpLayer = null;
        	if(!map.getLayer("shpLayer")){
        		shpLayer = new GraphicsLayer({id:"shpLayer"});
        	}
        	var linesymbol = new CartographicLineSymbol(
        	          CartographicLineSymbol.STYLE_SOLID,
        	          new Color([255,0,0]), 5, 
        	          CartographicLineSymbol.CAP_ROUND,
        	          CartographicLineSymbol.JOIN_MITER, 5
        	        );
        	for(var i=0;i<geojson.length;i++){        		
        		var line = geojson[i].geometry;
        		var larr = line.substring(line.indexOf("(")+2,line.lastIndexOf(")")-1).split(",");
        		var paths = [];        		
        		for(var j=0;j<larr.length;j++){
        			paths[j] = [parseFloat(larr[j].trim().split(" ")[0]),parseFloat(larr[j].trim().split(" ")[1])]; 
        		}
        		var polyline = new Polyline(paths);
        		var graline = new Graphic(polyline,linesymbol,null,null);
        		shpLayer.add(graline);
        		
        	}
        	map.addLayer(shpLayer);
        	
        }
        
        function addGeoPolygon(geojson){
        	debugger
        	var shpLayer = null;
        	if(!map.getLayer("shpLayer")){
        		shpLayer = new GraphicsLayer({id:"shpLayer"});
        	}
        	var polygonsymbol = new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID,
        						new SimpleLineSymbol(SimpleLineSymbol.STYLE_DASHDOT,
        						new Color([255,0,0]), 2),new Color([255,255,0,0.25])
        		    	  	   );
        	for(var i=0;i<geojson.length;i++){        		
        		var line = geojson[i].geometry;
        		var larr = line.substring(line.indexOf("(")+3,line.lastIndexOf(")")-2).split(",");
        		var paths = [];        		
        		for(var j=0;j<larr.length;j++){
        			paths[j] = [parseFloat(larr[j].trim().split(" ")[0]),parseFloat(larr[j].trim().split(" ")[1])]; 
        		}
        		var polygon = new Polyline(paths);
        		var gragon = new Graphic(polygon,polygonsymbol,null,null);
        		shpLayer.add(gragon);
        		
        	}
        	map.addLayer(shpLayer);
        }
        
        
});



