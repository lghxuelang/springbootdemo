package com.example.util;

import java.io.File;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;

import org.geotools.data.shapefile.ShapefileDataStore;
import org.geotools.data.simple.SimpleFeatureCollection;
import org.geotools.data.simple.SimpleFeatureIterator;
import org.geotools.data.simple.SimpleFeatureSource;
import org.geotools.geojson.feature.FeatureJSON;
import org.opengis.feature.simple.SimpleFeature;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
public class ShpFormatUtil {
	@SuppressWarnings({ "deprecation", "unused", "unchecked", "rawtypes" })
	public static String shp2Json(String shpPath){
		List geoList = new ArrayList<Object>();
        FeatureJSON fjson = new FeatureJSON();
        try{
            File file = new File(shpPath);
            ShapefileDataStore shpDataStore = null;

            shpDataStore = new ShapefileDataStore(file.toURL());
            //设置编码
            Charset charset = Charset.forName("UTF-8");
            shpDataStore.setCharset(charset);
            String typeName = shpDataStore.getTypeNames()[0];
            SimpleFeatureSource featureSource = null;
            featureSource =  shpDataStore.getFeatureSource (typeName);
            SimpleFeatureCollection result = featureSource.getFeatures();
            SimpleFeatureIterator itertor = result.features();
            JSONArray array = new JSONArray();
            while (itertor.hasNext())
            {
                SimpleFeature feature = itertor.next();
                List test = feature.getAttributes();
                JSONObject geoMap = new JSONObject();
                geoMap.put("geometry",feature.getAttribute("the_geom").toString());
                geoMap.put("OBJECTID",feature.getAttribute("OBJECTID").toString());
                geoMap.put("name",feature.getAttribute("NAME").toString());
                geoMap.put("direction",feature.getAttribute("DIRECTION").toString());
                geoList.add(geoMap);
            }
            itertor.close();          
        }
        catch(Exception e){
            e.printStackTrace();

        }
        return geoList.toString();	
	}
}
