package com.example.my;

import java.io.IOException;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("excel")
public class ExportEcxel {
	
	
	@RequestMapping("get")
	public void getExcel(HttpServletRequest request,HttpServletResponse response) 
			throws IOException, ClassNotFoundException{
		Logger log = LoggerFactory.getLogger(ExportEcxel.class);
		SimpleDateFormat df = new SimpleDateFormat("yyyy-mm-dd HH:mm:ss" );
		HSSFWorkbook workbook = new HSSFWorkbook();	
		HSSFSheet  sheet = workbook.createSheet("信息表");
		HSSFRow headerRow  = sheet.createRow(0);//标题行
		HSSFCell cell0 = headerRow .createCell(0);
		cell0.setCellValue("姓名");
		HSSFCell cell1 = headerRow .createCell(1);
		cell1.setCellValue("年龄");
		HSSFCell cell2 = headerRow .createCell(2);
		cell2.setCellValue("性别");
		HSSFCell cell3 = headerRow .createCell(3);
		cell3.setCellValue("生日");
		
		HSSFRow row1  = sheet.createRow(1);//标题行
		HSSFCell cell10 = row1 .createCell(0);
		cell10.setCellValue("tom");
		HSSFCell cell11 = row1 .createCell(1);
		cell11.setCellValue(13);
		HSSFCell cell12 = row1 .createCell(2);
		cell12.setCellValue("男");
		HSSFCell cell13 = row1 .createCell(3);
		cell13.setCellValue(df.format(new Date()));
		
		response.setContentType("application/vnd.ms-excel;charset=utf-8");  
		OutputStream os = response.getOutputStream(); 
		workbook.write(os);
		os.flush();os.close();
		
	}

}
