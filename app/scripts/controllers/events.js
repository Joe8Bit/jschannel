'use strict';

/**
 * @ngdoc function
 * @name jschannelApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the jschannelApp
 */
angular.module('jschannelApp')
  .controller('EventsCtrl', function ($scope, events, groups, geo) {
    $scope.currentPage = 'events';
    $scope.events = events.get();
    $scope.groups = groups.get();

    geo.getLocation.then(function (data) {
    	$scope.events = geo.enhanceWithGeoData($scope.events, data.coords);
    	$scope.hasGeo = true;
    });

    $scope.filterDistance = function () {
    	$scope.events = events.distance();
    	if (!$scope.alreadyDistanceSorted) {
    		$scope.alreadyDistanceSorted = true;
    	} else {
    		$scope.events = $scope.events.reverse();
    		$scope.alreadyDistanceSorted = false;
    	}
    }

    $scope.filterGroup = function (group) {
    	$scope.events = (group) ? _.where(events.get(), function (evt) { return evt.group === group}) : events.get();
    }

    $scope.filterOnlyUpcoming = function () {
    	$scope.events = events.upcoming();
    	if (!$scope.onlyUpcoming) {
    		$scope.onlyUpcoming = true;
    	} else {
    		$scope.events = events.get();
    		$scope.onlyUpcoming = false;
    	}
    }

    $scope.filterEventType = function (type) {
    	$scope.events = (type) ? _.where(events.get(), function (evt) { return evt[type] === true; }) : events.get();
    }
  });
