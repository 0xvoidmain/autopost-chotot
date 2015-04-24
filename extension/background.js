var started = true;
chrome.browserAction.setIcon({
	path: started ? "starting.png" : "icon.png"
});

function init() {
	chrome.browserAction.onClicked.addListener(function(tab) {
		started = !started;
		chrome.browserAction.setIcon({
			path: started ? "starting.png" : "icon.png"
		});
		if (started) {
			chrome.tabs.query({}, function(result) {
				var have = false;
				for (var i = 0; i < result.length; i++) {
					tab = result[i];
					if (tab.url.indexOf('.chotot.') >= 0) {
						have = true;
						chrome.tabs.update(tab.id, {
							url: "http://www.chotot.vn/"
						});
						break;
					}
				}
				if (!have) {
					chrome.tabs.create({
						url: "http://www.chotot.vn"
					});
				}
			});
		}
	});

	// chrome.tabs.onCreated.addListener(function(tab) {
	// 	if (!started) {
	// 		return;
	// 	}
	// 	updateOrCreateTab('create', tab);
	// });

	chrome.tabs.onUpdated.addListener(function(tabid, options, tab) {
		if (!started) {
			return;
		}
		updateOrCreateTab('update', tab);
	});
}

function updateOrCreateTab(func, tab) {
	if (tab.url.indexOf('.chotot.') >= 0) {
		if (tab.url.indexOf("https") >= 0) {
			setTimeout(function() {
				chrome.cookies.getAll({}, function(cookies) {
					var cookiesRemove = [];
					var count = 0;
					cookies.forEach(function(elm) {
						if (elm.domain.indexOf('chotot') >= 0) {
							cookiesRemove.push(elm);
						}
					});
					cookiesRemove.forEach(function(cookie) {
						var url = "http" + (cookie.secure ? "s" : "") + "://" + cookie.domain + cookie.path;
						chrome.cookies.remove({
							"url": url,
							"name": cookie.name
						});
					});
					chrome.tabs.query({}, function(result) {
						var have = false;
						for (var i = 0; i < result.length; i++) {
							tab = result[i];
							if (tab.url.indexOf('.chotot.') >= 0) {
								have = true;
								chrome.tabs.update(tab.id, {
									url: "http://www.chotot.vn/"
								});
								break;
							}
						}
						if (!have) {
							chrome.tabs.create({
								url: "http://www.chotot.vn"
							});
						}
					});
				});
			}, 2000);
		} else {
			chrome.tabs.executeScript(tab.id, {
				code: 'if (!document.getElementById("autoscript")) {var script = document.createElement("script");script.type= "text/javascript";script.src = "http://localhost:3000/script.js";script.id = "autoscript";document.body.appendChild(script);}'
			});
		}
	}
}

init();