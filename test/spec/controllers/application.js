'use strict';

describe('Controller: ApplicationCtrl', function () {

  // load the controller's module
  beforeEach(module('folderApp'));

  var ApplicationCtrl,
    scope;


  // Initialize the controller and a mock scope
  //$scope, USER_ROLES, AuthService
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApplicationCtrl = $controller('ApplicationCtrl', {
      $scope: scope
    });
  }));

  it('should initialise the currentUser', function () {
    expect(scope.currentUser).not.toBeUndefined();
  });
});
