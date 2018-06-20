package com.example.geo;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.alibaba.fastjson.JSONObject;
import com.example.util.ShpFormatUtil;
import com.example.util.ZipUtil;


@Controller
@RequestMapping(value="uploadshp")
public class UploadShp {
	
	Logger log = LoggerFactory.getLogger(UploadShp.class);
	private String rootPath = "d:/shp/";
	@SuppressWarnings("unused")
	@RequestMapping(value="upshp")
	public void upshp(HttpServletRequest request,HttpServletResponse response) throws Exception{
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");	
		response.setContentType("text/plain"); 
		Map<String,Object> map = new HashMap<String,Object>();
		MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request; 
		Map<String, MultipartFile> fileMap = multipartRequest.getFileMap(); 
		String fileName = null;		
		for (Map.Entry<String, MultipartFile> entity : fileMap.entrySet()) { 
			MultipartFile mf = entity.getValue(); 
			fileName = mf.getOriginalFilename();
			File file = new File(rootPath+fileName);
			/*if(!file.exists()) {
				file.getParentFile().mkdirs();
				file.createNewFile();
			}*/
			InputStream in = mf.getInputStream();
			JSONObject result = new JSONObject();
			try {
				if(!file.exists()) {
					file.getParentFile().mkdirs();
					file.createNewFile();
				} 				
				FileCopyUtils.copy(mf.getBytes(), file);
				String shpPath = ZipUtil.unZipFile(file.getPath(), rootPath);
				String shplist = ShpFormatUtil.shp2Json(shpPath);
				log.info(shplist);
				result.put("status", "200");
                result.put("geojson", shplist);
				PrintWriter out = response.getWriter();	
				out.write(result.toString());				
				out.flush();
				out.close();  
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
}
