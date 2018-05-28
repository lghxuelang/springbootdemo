$(function(){
	$("#selectexcel").uploadify({
		'swf': 'uploadify/uploadify.swf',
		'formData' : {'a':'123'},
		'method':'Post',  
		'uploader' : 'excel/put',
		'buttonText' : '选择Excel',
		'fileTypeExts' : '*.xls;*.xlsx',
		'auto': false, 
		'multi': false, 
		'onUploadSuccess' : function(file, data, response) { 
				alert(data);
		},
		'onUploadError' : function(file, errorCode, errorMsg, errorString) {  
	       console.log(errorMsg);
	    }
	});
	$("#upexcel").click(upexcel);
});

function upexcel(){
	$("#selectexcel").uploadify('upload','*');
}