'use strict';

/**
 * @ngdoc directive
 * @name jschannelApp.directive:groupsSlider
 * @description
 * # groupsSlider
 */
angular.module('jschannelApp')
  .directive('groupSlider', function () {
    return {
      templateUrl: '/views/partials/group-slider.html',
      restrict: 'E',
      controller: 'GroupSliderCtrl as ctrl'
    };
  });
