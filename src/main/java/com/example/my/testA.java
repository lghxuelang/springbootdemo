package com.example.my;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value="test1")
public class testA {
	Logger log = LoggerFactory.getLogger(testA.class);
	@RequestMapping(value="free")
	public String  free(HttpServletRequest request, ModelMap map){	
		
		map.addAttribute("key", "你的世界"+request.getQueryString());
		log.info(map.toString());
		return "free";
	}
}
