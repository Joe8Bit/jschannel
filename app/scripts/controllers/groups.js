'use strict';

/**
 * @ngdoc function
 * @name jschannelApp.controller:GroupsCtrl
 * @description
 * # GroupsCtrl
 * Controller of the jschannelApp
 */
angular.module('jschannelApp')
  .controller('GroupsCtrl', function ($scope, $location, groups, geo) {
    $scope.currentPage = 'groups';
    $scope.geo = geo.map;

    $scope.$on('leafletDirectiveMarker.click', function (event, args) {
    	$location.path('/groups/' + groups.get(args.markerName).id);
    });
  });
