'use strict';

/**
 * @ngdoc function
 * @name jschannelApp.controller:GroupSliderCtrl
 * @description
 * # GroupSliderCtrl
 * Controller of the jschannelApp
 */
angular.module('jschannelApp')
  .controller('GroupSliderCtrl', function ($scope, groups, events) {
    $scope.groups = groups.get();
    $scope.getEvents = function (id) {
    	return events.upcoming(events.where(['group', id]));
    }
  });
