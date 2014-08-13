'use strict';

/**
 * @ngdoc overview
 * @name jschannelApp
 * @description
 * # jschannelApp
 *
 * Main module of the application.
 */
angular
  .module('jschannelApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'leaflet-directive',
    'geolocation'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/groups', {
        templateUrl: 'views/groups.html',
        controller: 'GroupsCtrl'
      })
      .when('/groups/:group', {
        templateUrl: 'views/group.html',
        controller: 'GroupCtrl'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
