'use strict';

describe('Controller: HeaderCtrl', function() {

    // load the controller's module
    beforeEach(module('folderApp'));

    var HeaderCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        HeaderCtrl = $controller('HeaderCtrl', {
            $scope: scope
        });
    }));

    it('should exist', function() {
        expect( !! HeaderCtrl).toBe(true);
    });

    it('should provide a isActive function', function() {
        expect(typeof scope.isActive).toBe('function');
    });
});
