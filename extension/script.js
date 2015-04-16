if (!document.getElementById("autoscript")) {
	var script = document.createElement('script');
	script.type= "text/javascript";
	script.src = "https://localhost:3300/script.js";
	script.id = "autoscript"
	document.body.appendChild(script);
}