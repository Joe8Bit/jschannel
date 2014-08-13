'use strict';

/**
 * @ngdoc directive
 * @name jschannelApp.directive:partners
 * @description
 * # partners
 */
angular.module('jschannelApp')
  .directive('partners', function () {
    return {
      templateUrl: '/views/partials/partners.html',
      restrict: 'E',
      scope: true,
      link: function postLink(scope, element, attrs) {
        scope.bannerText = attrs.banner;
      }
    };
  });
