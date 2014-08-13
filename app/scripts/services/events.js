'use strict';

/**
 * @ngdoc service
 * @name jschannelApp.events
 * @description
 * # events
 * Service in the jschannelApp.
 */
angular.module('jschannelApp')
  .service('events', function events() {
  	var events = [{
  		id: 'delhi-2015',
  		group: 'delhi',
  		name: 'JSChannel Delhi 2015',
  		when: '2015/02/07',
  		conference: false,
  		meetup: true,
  		geo: {
  			lat: 28.6100,
  			lng: 77.2300
  		},
      buy: false,
      featured: false
  	}, {
  		id: 'london-2015',
  		group: 'london',
  		name: 'JSChannel London 2014',
  		when: '2014/02/07',
  		conference: true,
  		meetup: false,
  		geo: {
  			lat: 51.5072,
  			lng: 0.1275
  		},
      buy: {
        availability: 120,
        href: 'http://domain.com'
      },
      featured: true
  	}];

  	function where (tuple) {
  		return _.where(events, function (evt) { return evt[tuple[0]] === tuple[1]; });
  	}

  	function get (id) {
  		return (id) ? _.find(events, function (evt) { return evt.id === id }) : events;
  	}

  	function distance () {
    	return _.sortBy(events, function (evt) { return evt.distanceFromUserInMetres; });
  	}

    function upcoming (evt) {
      var evts = evt || events.get(),
          now = new Date(),
          then;
      return _.where(evts, function (evt) {
        then = new Date(evt.when);
        if (now.getTime() > then.getTime()) {
          return true;
        }
      });
    }

    function featured (single) {
      var featured = _.where(events, function (evt) { return evt.featured === true });
      return (!single) ?featured : _.sample(featured);
    }

    return {
    	where: where,
    	get: get,
    	distance: distance,
      upcoming: upcoming,
      featured: featured
    }
  });
