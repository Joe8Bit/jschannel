'use strict';

/**
 * @ngdoc function
 * @name jschannelApp.controller:GroupCtrl
 * @description
 * # GroupCtrl
 * Controller of the jschannelApp
 */
angular.module('jschannelApp')
  .controller('GroupCtrl', function ($scope, $routeParams, groups, events) {
  	$scope.currentPage = 'group';
    $scope.group = groups.get($routeParams.group);
    $scope.getEvents = function (id) {
    	return events.where(['group', id]);
    }
  });
