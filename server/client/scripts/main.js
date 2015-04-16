var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
	$scope.post = {
		name: "Hoang Thanh Tung",
		email: "hoangtung.utc@gmail.com",
		phone: "01656100062",
		pass: "123456",
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
		image_0: false,
		image_1: false,
		image_2: false,
		image_3: false,
		image_4: false,
		image_5: false,
		payment_delivery: "",

		//custom fields
		seller_type: "p_ad", //p_ad: Ca nhan, c_ad: Cong ty
		type: "rs", //rs: Can ban/tim nguoi/cung cap, rk: Can mua/tim viec/can tim, ru: Cho thue, rh: Can thue
		condition: "condition_ad_used", //condition_ad_used: Da su dung, condition_ad_new: Moi
		post_time: ""
	};
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
	$scope.regionSelect = function() {
		$scope.provinces = _.find($scope.regions, function(elm) {
			return elm.id == $scope.post.region;
		}).municipality;
		$scope.provinces = _.map($scope.provinces, function(elm) {
			elm.id = parseInt(elm.id);
			return elm;
		});
	};

	$scope.done = function() {
		$http.post("https://localhost:3300/api/post/update", {
			data: $scope.post
		}).success(function(result) {
			if (!$scope.post._id) {
				$scope.post_list.push(result);
			}
		});
	};

	$scope.reset = function() {
		$scope.post = {
			name: "Hoang Thanh Tung",
			email: "hoangtung.utc@gmail.com",
			phone: "01656100062",
			pass: "123456",
			seller_addr: "Ha Noi",
			category_group: "",
			region: "",
			area: "",
			regdate: "", //nam dang ky
			mileage: "", //So km da di
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
			type: "rs", //rs: Can ban/tim nguoi/cung cap, rk: Can mua/tim viec/can tim, ru: Cho thue, rh: Can thue
			condition: "condition_ad_used", //condition_ad_used: Da su dung, condition_ad_new: Moi
			post_time: ""
		}
	};

	$scope.selectPost = function(post) {
		$scope.post = post;
	};

	$scope.delete = function(id) {
		$http.get("/api/post/delete/" + id)
			.success(function() {
				$scope.post_list = _.reject($scope.post_list, function(elm) {
					return elm._id === id;
				});
			});
	};

	$scope.clone = function(post) {
		$scope.post = JSON.parse(JSON.stringify(post));
		delete $scope.post._id;
		$scope.done();
	};

	$http.post("/api/post/get")
		.success(function(post_list) {
			$scope.post_list = post_list;
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
	}
});