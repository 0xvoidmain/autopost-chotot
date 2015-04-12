var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.categSelected = false;
	$scope.regionSelected = false;
	$scope.provinceSelected = false;
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
			return elm.id === $scope.regionSelected;
		}).municipality;
		$scope.provinces = _.map($scope.provinces, function(elm) {
			return elm;
		});
	}
});