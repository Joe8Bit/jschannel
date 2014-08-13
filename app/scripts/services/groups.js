'use strict';

/**
 * @ngdoc service
 * @name jschannelApp.groups
 * @description
 * # groups
 * Service in the jschannelApp.
 */
angular.module('jschannelApp')
  .service('groups', function groups() {
  	var groups = [{
  		id: 'london',
      name: 'London',
      geo: {
        lat: 51.5072,
        lng: 0.1275
      }
  	}, {
  		id: 'delhi',
      name: 'Delhi',
      geo: {
        lat: 28.6100,
        lng: 77.2300
      }
  	}];

  	function get (id) {
  		return (id) ? _.find(groups, function (group) { return group.id === id }) : groups;
  	}

    return {
    	get: get
    }
  });
