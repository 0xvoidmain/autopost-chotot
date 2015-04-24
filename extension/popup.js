function click(e) {
	// chrome.tabs.executeScript(null, {
	// 	file: 'script.js'
	// });
chrome.tabs.query({},  function(result) {
				var have = false;
				for (var i = 0; i < result.length; i++) {
					tab = result[i];
					if (tab.url.indexOf('.chotot.') >= 0) {
						have = true;
						chrome.tabs.update(tab.id, {url:"http://www.chotot.vn/"});
						break;
					}
				}
				if (!have) {
					chrome.tabs.create({url: "http://www.chotot.vn"});
				}
			});
	// chrome.cookies.getAll({}, function(cookies) {
	// 	var cookiesRemove = [];
	// 	var count = 0;
	// 	cookies.forEach(function(elm) {
	// 		if (elm.domain.indexOf('chotot') >= 0) {
	// 			cookiesRemove.push(elm);
	// 		}
	// 	});
	// 	cookiesRemove.forEach(function(cookie) {
	// 		var url = "http" + (cookie.secure ? "s" : "") + "://" + cookie.domain + cookie.path;
	// 		chrome.cookies.remove({"url": url, "name": cookie.name});
	// 	});
	// 	tabs.create("http://www.chotot.vn");
	// });
}

document.addEventListener('DOMContentLoaded', function() {
	var divs = document.querySelectorAll('div');
	for (var i = 0; i < divs.length; i++) {
		divs[i].addEventListener('click', click);
	}
});