package com.example.demo;


import java.util.HashMap;
import java.util.Map;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("test")
public class test {
	@RequestMapping("say")
	public Map<String,Object> say(){
		Map<String,Object> obj = new HashMap<String,Object>();
		obj.put("ok", true);
		return obj;
	}
	@RequestMapping("hi")
	public Map<String,Object> hi(){
		Map<String,Object> obj = new HashMap<String,Object>();
		obj.put("ok", false);
		return obj;
	}

}
