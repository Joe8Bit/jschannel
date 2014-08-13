'use strict';

/**
 * @ngdoc directive
 * @name jschannelApp.directive:featuredEvent
 * @description
 * # featuredEvent
 */
angular.module('jschannelApp')
  .directive('featuredEvent', function (events) {
    return {
      templateUrl: '/views/partials/featuredevent.html',
      restrict: 'E',
      scope: false,
      link: function postLink(scope, element, attrs) {
        scope.evt = events.featured(true);
        scope.evt.when = new Date(scope.evt.when);
      }
    };
  });
