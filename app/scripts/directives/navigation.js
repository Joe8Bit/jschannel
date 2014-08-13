'use strict';

/**
 * @ngdoc directive
 * @name jschannelApp.directive:navigation
 * @description
 * # navigation
 */
angular.module('jschannelApp')
  .directive('navigation', function ($rootScope) {
    return {
      templateUrl: '/views/partials/navigation.html',
      restrict: 'E',
      scope: false,
      link: function postLink(scope, element, attrs) {}
    };
  });
