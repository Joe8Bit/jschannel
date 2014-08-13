'use strict';

describe('Directive: sponsors', function () {

  // load the directive's module
  beforeEach(module('jschannelApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sponsors></sponsors>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the sponsors directive');
  }));
});
