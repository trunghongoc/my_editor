$(document).ready(function(){
	$("#runcode").click(function(){
		var code_val = editor.getSession().getValue();
        var data_url = "data:text/html;charset=utf-8;base64," + $.base64.encode(code_val);
        document.getElementById("preview").src = data_url;
	})
})
