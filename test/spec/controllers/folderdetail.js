'use strict';

describe('Controller: FolderdetailCtrl', function() {
    var scope, ctrl, FolderRegelRepository;

    // Initialize the controller and scope
    beforeEach(function() {
        // Load the controller's module
        module('folderApp');

        // Provide any mocks needed
        module(function($provide) {
            $provide.value('FolderRegelRepository', new MockMySvc());
        });

        // Inject in angular constructs otherwise,
        //  you would need to inject these into each test
        inject(function($controller, _FolderRegelRepository_) {
            scope = {};
            FolderRegelRepository = _FolderRegelRepository_;
            ctrl = $controller('FolderdetailCtrl', {
                $scope: scope
            });
            scope.tableParams.settings().$scope = scope;
        });

    });




   // it('should attach a list of artikels to the scope', function() {
//
 //       expect(mockedFactory.getFolderRegels).toHaveBeenCalled();
  //  });
});
