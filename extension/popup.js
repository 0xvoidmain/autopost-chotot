function click(e) {
	chrome.tabs.executeScript(null, {
		file: 'script.js'
	});
	//window.close();
}

document.addEventListener('DOMContentLoaded', function() {
	var divs = document.querySelectorAll('div');
	for (var i = 0; i < divs.length; i++) {
		divs[i].addEventListener('click', click);
	}
});