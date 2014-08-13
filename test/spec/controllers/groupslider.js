'use strict';

describe('Controller: GroupsliderCtrl', function () {

  // load the controller's module
  beforeEach(module('jschannelApp'));

  var GroupsliderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GroupsliderCtrl = $controller('GroupsliderCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
