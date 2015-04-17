function getImage(id, name) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://localhost:3300/image/' + btoa(name));
	xhr.responseType = 'blob';
	xhr.onload = function() {
		var blob = xhr.response;
		var img = $('#' + id)[0];
		var file = new File([blob], btoa(name) + ".png", {
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

function step1(post) {
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
		id: 'subject',
		value: post.subject
	}, {
		id: 'body',
		value: post.body
	}, {
		id: 'price',
		value: post.price
	}, {
		id: 'payment_delivery',
		value: post.payment_delivery
	}, {
		id: 'category_group',
		value: post.category_group
	}, {
		id: 'region',
		value: post.region
	}, {
		id: post.seller_type,
		value: true
	}];

	return obj;
};

function step2(post) {
	var obj = [{
		id: 'area',
		value: post.area
	}, {
		id: post.type,
		value: true
	}, {
		id: post.condition,
		value: true
	}, {
		id: 'regdate',
		value: post.regdate
	}, {
		id: 'mileage',
		value: post.mileage
	}, {
		id: 'gearbox',
		value: post.gearbox
	}, {
		id: 'fuel',
		value: post.fuel
	}, {
		id: 'address',
		value: post.address
	}, {
		id: 'rooms',
		value: post.rooms
	}, {
		id: 'size',
		value: post.size
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

function put(postScript) {
	for (var i = 0; i < postScript.length; i++) {
		var key = postScript[i];
		var elm = $('#formular #' + key.id);
		if (elm.length <= 0) {
			elm = $('#formular input[name=' + key.id + ']');
		}
		if (typeof key.value === 'boolean') {
			elm.click();
		} else if (typeof key.value === 'number' || typeof key.value === 'string') {
			elm.val(key.value);
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
				if (divimg.length <= 0) {
					callback(false);
					return;
				}
			}
		}
		callback(true);
	} catch (ex) {
		callback(false);
	}
};

getPost(function(post) {
	if (!post) {
		alert('Finish!');
		return
	}
	post = JSON.parse(post);
	var url = location.toString();
	if (url.trim() === 'http://www.chotot.vn/') {
		$('#sunny_post_newad_homepage').click();
	}
	else if (url.indexOf('chotot.vn/ai/form') >= 0) {
		var images = getPostImages(post);
		if ($('#category_group').val() != post.category_group) {
			put(step1(post));
			setTimeout(function() {
				$('input[name=validate]').click();
			}, 1000);
		} else {
			putImage(images)
			put(step2(post));
			var id = setInterval(function() {
				checkDone(images, function(result) {
					if (result) {
						setTimeout(function() {
							//$('input[name=validate]').click();
						}, 1000);
						clearInterval(id);
					}
				})
			}, 1000);
		}
	} else if (url.indexOf('chotot.vn/ai/preview') >= 0) {
		$('#passwd_ver').val(post.pass);
		setTimeout(function() {
			alert('Tạm thời không tự động click đăng vì không xóa được bài. Tới đây gần như là hoàn thành một quy trình tự động đăng bài.');
			// var xhr = new XMLHttpRequest();
			// xhr.open('GET', 'https://localhost:3300/api/post/done/' + post._id);
			// xhr.onload = function() {
			// 	alert('done');
			// };
			// xhr.send();
		}, 500);
	}
});