var started = true;

function init() {
	chrome.browserAction.onClicked.addListener(function(tab) {
		started = !started;
		chrome.browserAction.setIcon({
			path: started ? "starting.png" : "icon.png"
		});
	});

	// chrome.tabs.onCreated.addListener(function(tab) {
	// 	if (!started) return;
	// 	updateOrCreateTab('create', tab);
	// });

	chrome.tabs.onUpdated.addListener(function(tabid, options, tab) {
		//if (!started) return;
		updateOrCreateTab('update', tab);
	});
}

function updateOrCreateTab(func, tab) {
	if (tab.url.indexOf('chotot.vn/ai/form') >= 0) {
		chrome.tabs.executeScript(null, {
			file: 'script.js'
		});
	}
}

init();