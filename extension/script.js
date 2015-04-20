if (!document.getElementById("autoscript")) {
	var script = document.createElement('script');
	script.type= "text/javascript";
	script.src = "http://localhost:3000/script.js";
	script.id = "autoscript"
	document.body.appendChild(script);
}