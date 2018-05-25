package com.example.my;

import java.io.FileNotFoundException;

import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="upload")
public class Upload {
	@RequestMapping(value="path")
	public String  getPath() throws FileNotFoundException{
		return ResourceUtils.getFile("upload").getAbsolutePath();
	}

}
