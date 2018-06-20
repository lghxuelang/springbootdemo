package com.example.util;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.Charset;
import java.util.Enumeration;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;

public class ZipUtil {
	/**
	 * 在指定文件夹下解压文件,解压后文件夹名称与原来相同
	 * @param zipPath 需解压文件路径
	 * @param descDir 指定路径
	 * @return 返回.shp文件路径
	 */
	@SuppressWarnings("resource")
	public static String unZipFile(String zipPath, String descDir){
		String resPath = "";
		File zipFile = new File(zipPath);
		ZipFile zip;
		try {
			zip = new ZipFile(zipFile, Charset.forName("GBK"));//解决中文乱码		
			String name = zip.getName().substring(zip.getName().lastIndexOf('\\')+1, zip.getName().lastIndexOf('.'));
			File pathFile = new File(descDir+name);
			if (!pathFile.exists()) {
	            pathFile.mkdirs();
	        } 
			for (Enumeration<? extends ZipEntry> entries = zip.entries(); entries.hasMoreElements();) {
	            ZipEntry entry = (ZipEntry) entries.nextElement();
	            String zipEntryName = entry.getName();
	            InputStream in = zip.getInputStream(entry);
	            String outPath = (descDir + name +"/"+ zipEntryName).replaceAll("\\*", "/");
	            // 判断路径是否存在,不存在则创建文件路径
	            File file = new File(outPath.substring(0, outPath.lastIndexOf('/')));
	            if (!file.exists()) {
	                file.mkdirs();
	            }
	            // 判断文件全路径是否为文件夹,如果是上面已经上传,不需要解压
	            if (new File(outPath).isDirectory()) {
	                continue;
	            }
	            // 输出文件路径信息
	            FileOutputStream out = new FileOutputStream(outPath);
	            if(outPath.substring(outPath.length()-3,outPath.length()).equals("shp")){
	                resPath = outPath;
	            }
	            byte[] buffer = new byte[1024];
	            int len;
	            while ((len = in.read(buffer)) > 0) {
	                out.write(buffer, 0, len);
	            }
	            in.close();
	            out.close();
	        }
		} catch (IOException e) {
			e.printStackTrace();
		}
		return resPath;
	}
}
