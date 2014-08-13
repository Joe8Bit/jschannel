'use strict';

describe('Service: geo', function () {

  // load the service's module
  beforeEach(module('jschannelApp'));

  // instantiate service
  var geo;
  beforeEach(inject(function (_geo_) {
    geo = _geo_;
  }));

  it('should do something', function () {
    expect(!!geo).toBe(true);
  });

});
