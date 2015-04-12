var started = false;

function init() {
	// if (!chrome.cookies) {
	// 	chrome.cookies = chrome.experimental.cookies;
	// }

	chrome.browserAction.onClicked.addListener(function(tab) {
		started = !started;
		chrome.browserAction.setIcon({
			path: started ? "starting.png" : "icon.png"
		});
	});

	chrome.tabs.onCreated.addListener(function(tab) {
		if (!started) return;
		updateOrCreateTab('create', tab);
	});

	chrome.tabs.onUpdated.addListener(function(tabid, options, tab) {
		if (!started) return;
		updateOrCreateTab('update', tab);
	});
}

function updateOrCreateTab(func, tab) {
	chrome.tabs.executeScript(null, {
		code: 'alert("' + func + ': ' + tab.url + '");'
	});
	if (tab.url.indexOf('chotot') >= 0) {
		//chrome.tabs.remove(tab.id);
		clearCookiesChotot();
	}
}

function clearCookiesChotot() {
	chrome.cookies.getAll({}, function(cookies) {
		cookies.forEach(function(cookie) {
			if (cookie.domain.indexOf('chotot') >= 0) {
				var url = "http" + (cookie.secure ? "s" : "") + "://" + cookie.domain +
					cookie.path;
				chrome.cookies.remove({
					"url": url,
					"name": cookie.name
				});
			}
		});
	})
}

init();