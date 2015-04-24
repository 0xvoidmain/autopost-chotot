var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
	$scope.postTemp = {
		name: "",
		email: "",
		phone: "",
		pass: "",
		seller_addr: "Ha Noi",
		category_group: "",
		region: "",
		area: "",
		regdate: "", //nam dang ky
		mileage: "", //So km da di
		gearbox: "", //Hop so
		fuel: "", //Loai nhien lieu
		address: "", //Dia chi
		rooms: "", //So phong
		size: "", //Dien tich
		subject: "",
		body: "",
		price: "",
		image_0: "",
		image_1: "",
		image_2: "",
		image_3: "",
		image_4: "",
		image_5: "",
		payment_delivery: "",
		//custom fields
		seller_type: "p_ad", //p_ad: Ca nhan, c_ad: Cong ty
		type: "", //rs: Can ban/tim nguoi/cung cap, rk: Can mua/tim viec/can tim, ru: Cho thue, rh: Can thue
		condition: "condition_ad_used", //condition_ad_used: Da su dung, condition_ad_new: Moi
		postNow: false,
		post_times: (function() {
			var result = [];
			var current = new Date();
			current.setHours(0);
			current.setMinutes(30);
			current.setSeconds(0);
			result.push({
				t: current.getTime(),
				m: false
			});
			while (current.getHours() < 23) {
				current = new Date(current.getTime() + 1800000);
				result.push({
					t: current.getTime(),
					m: false
				});
			}
			return result;
		})()
	};
	$scope.post = JSON.parse(JSON.stringify($scope.postTemp));
	$scope.categs = (function(categs) {
		var result = [];

		var parents = (function(categs) {
			var result = {};
			for (var key in categs) {
				var categ = categs[key];
				if (categ.level === 0) {
					result[key] = categ;
				}
			}
			return result;
		})(categs);

		for (var key in categs) {
			var categ = categs[key];
			if (categ.level > 0) {
				categ.id = parseInt(key);
				categ.parentName = parents[categ.parent].name;
				result.push(categ);
			}
		}
		return result;
	})(category_list);

	$scope.regions = (function(regions) {
		var result = [];
		for (var key in regions) {
			var region = regions[key];
			region.id = parseInt(key);
			result.push(region);
		}
		return result;
	})(regionArray);
	$scope.regdates = (function(min, max) {
		var result = [];
		result.push({
			value: min,
			label: "trước năm " + min
		});
		for (var i = min + 1; i <= max; i++) {
			result.push({
				value: i,
				label: i + ""
			});
		}
		return result;
	})(1980, 2015);
	$scope.mileages = (function(min, max, delta) {
		var result = [];
		var value = 1;
		for (var i = min; i < max; i += delta) {
			result.push({
				value: value++,
				label: i + " - " + (i + delta)
			});
		}
		result.push({
			value: value,
			label: "nhiều hơn " + max
		});
		result.push({
			value: "desc",
			label: ""
		});
		return result;
	})(0, 500000, 5000);

	$scope.roomses = (function(min, max) {
		var result = [];
		for (var i = min + 1; i <= max; i++) {
			result.push({
				value: i,
				label: i + ""
			});
		}
		result.push({
			value: max + 1,
			label: "nhiều hơn " + max
		});
		return result;
	})(1, 10);

	$scope.gearboxes = [{
		value: 1,
		label: "Tự động"
	}, {
		value: 2,
		label: "Số tay"
	}, {
		value: 3,
		label: "Cả hai"
	}];
	$scope.fuels = [{
		value: 1,
		label: "Xăng"
	}, {
		value: 2,
		label: "Diesel"
	}, {
		value: 3,
		label: "Hybrid xăng và điện"
	}];
	$scope.provinces = false;
	$scope.post_list = [];
	$scope.account_list = [];
	$scope.postTypes = [];
	$scope.account = false;
	$scope.accountSelect = function(acc) {
		$scope.account = acc;
		$scope.postTemp.name = acc.name;
		$scope.postTemp.email = acc.email;
		$scope.postTemp.phone = acc.phone;
		$scope.postTemp.pass = acc.pass;
		$scope.postTemp.seller_addr = acc.seller_addr;
		$scope.post = JSON.parse(JSON.stringify($scope.postTemp));
		$http.post("/api/post/get/" + $scope.account.phone)
			.success(function(post_list) {
				$scope.post_list = post_list;
			});
	};
	$scope.regionSelect = function(noDone) {
		var findRegion = _.find($scope.regions, function(elm) {
			return elm.id == $scope.post.region;
		});
		if (findRegion) {
			$scope.provinces = _.map(findRegion.municipality, function(elm) {
				elm.id = parseInt(elm.id);
				return elm;
			});
		}
		if (!noDone) {
			$scope.done();
		}
	};
	$scope.category_groupSelect = function(noDone) {
		$scope.postTypes = [];
		var postTypes = category_typeList[$scope.post.category_group];
		for (var key in postTypes) {
			$scope.postTypes.push({
				key: key,
				label: postTypes[key]
			});
		}
		if (!noDone) {
			$scope.done();
		}
	};
	$scope.done = function() {
		var post = JSON.parse(JSON.stringify($scope.post));
		post.post_times.forEach(function(elm) {
			delete elm['$$hashKey'];
		});
		$http.post("http://localhost:3000/api/post/update", {
			data: post
		}).success(function(result) {
			if (!$scope.post._id) {
				$scope.post_list.push(result);
				$scope.post = result;
			}
		});
	};
	$scope.updateAccount = function() {
		$http.post("http://localhost:3000/api/account/update", {
			data: $scope.account
		}).success(function(result) {
			if (!$scope.account._id) {
				$scope.account_list.push(result);
				$scope.account = result;
				$scope.accountSelect($scope.account);
			}
		});
	};
	$scope.newAccount = function(acc) {
		$scope.saveAccount = $scope.account;
		$scope.account = acc || {};
	};
	$scope.cancelCreateAccount = function() {
		$scope.account = $scope.saveAccount;
	};
	$scope.reset = function() {
		$scope.post = JSON.parse(JSON.stringify($scope.postTemp));
	};
	$scope.selectPost = function(post) {
		$scope.post = post;
		$scope.regionSelect();
		$scope.category_groupSelect();
	};

	$scope.setPostNow = function() {
		$scope.post.post_times[0].m = !$scope.post.post_times[0].m;
		$scope.done();
	};

	$scope.delete = function(id) {
		$http.get("/api/post/delete/" + id)
			.success(function() {
				$scope.post_list = _.reject($scope.post_list, function(elm) {
					return elm._id === id;
				});
				if (id == $scope.post._id) {
					$scope.reset();
				}
			});
	};

	$scope.deleteAccount = function(id) {
		$http.get("/api/account/delete/" + id)
			.success(function() {
				$scope.account_list = _.reject($scope.account_list, function(elm) {
					return elm._id === id;
				});
				if ($scope.account_list.length > 0) {
					$scope.account = $scope.account_list[0];
					$http.post("/api/post/get/" + $scope.account.phone)
						.success(function(post_list) {
							$scope.post_list = post_list;
						});
				}
			});
	};

	$scope.clone = function(post) {
		var post = JSON.parse(JSON.stringify($scope.post));
		post.post_times.forEach(function(elm) {
			delete elm['$$hashKey'];
			delete elm.p;
		});
		$scope.post = post;
		delete $scope.post._id;
		$scope.done();
	};
	$http.post("/api/account/get")
		.success(function(account_list) {
			$scope.account_list = account_list;
			if ($scope.account_list.length > 0) {
				$scope.account = $scope.account_list[0];
				$scope.accountSelect($scope.account);
			}
		});
}).directive("file", [function() {
	return {
		scope: {
			file: "="
		},
		link: function(scope, element, attributes) {
			element.bind("change", function(changeEvent) {
				scope.file = changeEvent.target.files[0].name;
			});
		}
	}
}]).filter("time", function() {
	return function(time) {
		var date = new Date(time);
		return date.getFullYear() + "/" +
			(date.getMonth() + 1) + "/" +
			date.getDate() + " " +
			date.getHours() + ":" +
			date.getMinutes() + ":" +
			date.getSeconds();
	};
}).filter("stime", function() {
	return function(time) {
		var date = new Date(time);
		var h = date.getHours();
		var m = date.getMinutes();
		return (h < 10 ? ("0" + h) : h) + ":" +
			(m < 10 ? ("0" + m) : m);
	};
}).filter("show", function() {
	return function(key, post) {
		try {
			var setting = category_settings[post.category_group];
			var type = post.type[1];
			if (setting[type].value.indexOf(key) >= 0) {
				return true;
			}
			return false;
		} catch (ex) {
			return false;
		}
	};
}).filter("posttime", function() {
	return function(post_times) {
		var result = "";
		if (Array.isArray(post_times)) {
			post_times.forEach(function(elm) {
				if (result) {
					result += ", ";
				}
				result += elm;
			});
			return result;
		} else {
			return post_times;
		}
	}
});