'use strict';

describe('Controller: LoginCtrl', function() {

    // load the controller's module
    beforeEach(module('folderApp'));

    var LoginCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        LoginCtrl = $controller('LoginCtrl', {
            $scope: scope
        });
    }));

    it('should exist', function() {
        expect( !! LoginCtrl).toBe(true);
    });

    it('should provide a credentials property', function() {
        expect(scope.credentials instanceof Object).toBe(true);
    });

    it('should provide a login function', function() {
        expect(typeof scope.login).toBe('function');
    });
});
