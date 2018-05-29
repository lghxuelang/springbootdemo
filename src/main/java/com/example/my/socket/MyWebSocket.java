package com.example.my.socket;

import java.io.IOException;

import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

import org.springframework.stereotype.Component;

@ServerEndpoint(value = "/websocket")
@Component
public class MyWebSocket {
	 private static int onlineCount = 0;//记录在线数
	 private static Session session;
	
	 	@OnOpen
	    public void onOpen(Session session) {
	        this.session = session;	        
	        addOnlineCount();           //在线数加1
	        System.out.println("有新连接加入！当前在线人数为" + getOnlineCount());
	        try {
	            sendMessage("后端wesocket发来的消息:"+onlineCount);
	        } catch (IOException e) {
	            System.out.println("IO异常");
	        }
	    }
	    
	    @OnClose
	    public void onClose() {
	    	subOnlineCount();
	        System.out.println("有一连接关闭！当前在线人数为" + getOnlineCount());
	    }
	    @OnMessage
	    public void onMessage(String message, Session session) {
	        System.out.println("来自客户端的消息:" + message);
	        
	    }
	    @OnError
	    public void onError(Session session, Throwable error) {
	        System.out.println("发生错误");
	        error.printStackTrace();
	    }
	    public void sendMessage(String message) throws IOException {
	        this.session.getBasicRemote().sendText(message);
	    }
	    public static synchronized int getOnlineCount() {
	    	return onlineCount;
	    }
	    
	    public static synchronized int addOnlineCount() {
	    	return onlineCount++;
	    }
	    public static synchronized void subOnlineCount() {
	        MyWebSocket.onlineCount--;
	    }
}
