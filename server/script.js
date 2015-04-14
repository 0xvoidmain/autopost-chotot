function getImage(id, name) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://localhost:3300/image/' + name);
	xhr.responseType = 'blob';
	xhr.onload = function() {
		var blob = xhr.response;
		var img = $('#' + id)[0];
		var file = new File([blob], name, {
			lastModified: new Date(0),
			type: "image/png"
		});
		img.files[0] = file;
		delete img.files;
		img.files = [file];
		$('#' + id).trigger('change');
	};
	xhr.send();
};

function convertToScriptObject(post) {
	var obj = [{
		id: 'name',
		value: post.name,
	}, {
		id: 'email',
		value: post.email,
	}, {
		id: 'phone',
		value: post.phone
	}, {
		id: 'seller_addr',
		value: post.seller_addr
	}, {
		id: 'category_group',
		value: post.category_group
	}, {
		id: 'region',
		value: post.region
	}, {
		id: 'area',
		value: post.area
	}, {
		id: 'subject',
		value: post.subject
	}, {
		id: 'body',
		value: post.body
	}, {
		id: 'price',
		value: post.price
	}, {
		id: post.seller_type,
		value: true
	}, {
		id: post.type,
		value: true
	}, {
		id: post.condition,
		value: true
	}];

	return obj;
};

function getPostImages(post) {

	var obj = [{
		id: 'image_0',
		value: post.image_0
	}, {
		id: 'image_1',
		value: post.image_1
	}, {
		id: 'image_2',
		value: post.image_2
	}, {
		id: 'image_3',
		value: post.image_3
	}, {
		id: 'image_4',
		value: post.image_4
	}, {
		id: 'image_5',
		value: post.image_5
	}];

	return obj;
};

function put(postScript, indexKey) {
	if (indexKey < postScript.length) {
		var key = postScript[indexKey];
		if (typeof key.value === 'boolean') {
			$('#' + key.id).click();
			put(postScript, indexKey + 1);
		} else if (typeof key.value === 'number' || typeof key.value === 'string') {
			$('#' + key.id).val(key.value);
			put(postScript, indexKey + 1);
		}
	}
};

function putImage(images) {
	images.forEach(function(elm) {
		if (elm.value) {
			getImage(elm.id, elm.value);
		}
	});
};

function getPost(callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://localhost:3300/api/post/next');
	xhr.onload = function() {
		callback && callback(xhr.response);
	};
	xhr.send();
};

function checkDone(images, callback) {
	try {
		for (var i = 0; i < images.length; i++) {
			var img = images[i];
			if (img.value) {
				var divimg = $('#dummy_' + img.id + ' .uploaded-images');
				if (divimg.length < 0) {
					callback(false);
					return;
				}
			}
		}
		callback(true);
	}
	catch (ex) {
		callback(false);
	}
};

getPost(function(post) {
	if (!post) {
		return
	}
	post = JSON.parse(post);
	var postScript = convertToScriptObject(post);
	var images = getPostImages(post);
	put(postScript, 0);
	setTimeout(function() {
		put(postScript, 0);
	}, 500);

	var id = setInterval(function() {
		checkDone(images, function(result) {
			if (result) {
				$('input[name=validate]').click();
				clearInterval(id);
			}
		})
	}, 1000);
	putImage(images);
});