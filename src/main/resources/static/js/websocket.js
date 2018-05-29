$(function(){
	
});

var websocket = null;

if('WebSocket' in window){
    websocket = new WebSocket("ws://localhost:8081/websocket");
}else{
    alert('Not support websocket')
}
websocket.onerror = function(){
    setMessageInnerHTML("error");
};
websocket.onopen = function(event){
    setMessageInnerHTML("open");
}
websocket.onmessage = function(event){
    setMessageInnerHTML(event.data);
}
websocket.onclose = function(){
    setMessageInnerHTML("close");
}
window.onbeforeunload = function(){
    websocket.close();
}
function setMessageInnerHTML(innerHTML){
    document.getElementById('message').innerHTML += innerHTML + '<br/>';
}
function closeWebSocket(){
    websocket.close();
}
function send(){
    var message = document.getElementById('text').value;
    websocket.send(message);
}







