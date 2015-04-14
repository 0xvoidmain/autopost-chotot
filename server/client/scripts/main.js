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
	$scope.files = [{}, {}, {}, {}, {}, {}];
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

	$scope.provinces = false;

	$scope.regionSelect = function() {
		$scope.provinces = _.find($scope.regions, function(elm) {
			return elm.id == $scope.post.region;
		}).municipality;
		$scope.provinces = _.map($scope.provinces, function(elm) {
			elm.id = parseInt(elm.id);
			return elm;
		});
	};

	$scope.post_list = [];

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
	}

	$scope.selectPost = function(post) {
		$scope.post = post;
	}

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
				// var reader = new FileReader();
				// reader.onload = function (loadEvent) {
				//     scope.$apply(function () {
				//         scope.file = loadEvent.target.result;
				//     });
				// }
				// reader.readAsDataURL(changeEvent.target.files[0]);
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