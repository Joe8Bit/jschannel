'use strict';

/**
 * @ngdoc service
 * @name jschannelApp.geo
 * @description
 * # geo
 * Service in the jschannelApp.
 */
angular.module('jschannelApp')
  .service('geo', function geo(groups, leafletEvents, geolocation) {
    var map = {
            defaults: {
                tileLayer: "https://{s}.tiles.mapbox.com/v3/joe8bit.j7ah6nk6/{z}/{x}/{y}@2x.png"
            },
            center: {
                lat: 51.505,
                lng: -0.09,
                zoom: 2
            },
            markers: (function () {
                var latlongs = {};
                groups.get().forEach(function (group) {
                    latlongs[group.id] = group.geo;
                    latlongs[group.id].clickable = true;
                });
                return latlongs;
            })(),
            events: {
                markers: {
                    enable: leafletEvents.getAvailableMarkerEvents(),
                }
            }
        };

    function enhanceWithGeoData (arr, coords) {
        return _.map(arr, function (item) {
            item.distanceFromUserInMetres = geolib.getDistance(coords, {
                latitude: item.geo.lat,
                longitude: item.geo.lng,
            });
            return item;
        });
    }

    return {
        map: map,
        getLocation: geolocation.getLocation(),
        enhanceWithGeoData: enhanceWithGeoData
    }
  });
