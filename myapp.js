var myapp = angular.module('myapp', ['ui.sortable']);

myapp.controller('MyController', function ($scope) {
	$scope.greetMe = 'World';

	$scope.mylist = [{text: "one"}, {text: "two"}];
});

angular.element(document).ready(function() {
	angular.bootstrap(document, ['myapp']);
});
