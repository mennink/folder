'use strict';

describe('Controller: FolderlistCtrl', function() {
    var scope, ctrl, FolderRepository, FolderRepositoryMock, q, rootScope;

    var returnObject = [{
        "id": 1,
        "code": "Z",
        "jaar": 2015,
        "nummer": 1,
        "thema": "CDW CARNAVAL 2015  ",
        "status": "Open",
        "begin": "30-5-2014",
        "eind": "30-5-2014"
    }, {
        "id": 1,
        "code": "Z",
        "jaar": 2014,
        "nummer": 12,
        "thema": "E2 E3 HANDIJS",
        "status": "Ingediend",
        "begin": "23-4-2014",
        "eind": "23-4-2014"
    }, {
        "id": 1,
        "code": "Z",
        "jaar": 2014,
        "nummer": 34,
        "thema": "BBQ VERPLICHT",
        "status": "Ingediend",
        "begin": "21-3-2014",
        "eind": "21-3-2014"
    }];

    // Initialize the controller and scope
    beforeEach(function() {
        // Load the controller's module
        module('folderApp');

        FolderRepositoryMock = jasmine.createSpyObj('FolderRepository', ['getFolders', 'updateFolder']);

        // Provide any mocks needed
        module(function($provide) {
            $provide.value('FolderRepository', FolderRepositoryMock);
        });

        // Inject in angular constructs otherwise,
        //  you would need to inject these into each test
        inject(function($controller, _FolderRepository_, $q, _$rootScope_) {
            q = $q;
            scope = {};
            var deferred = q.defer();
            rootScope = _$rootScope_;


            FolderRepositoryMock.getFolders.andReturn(deferred.promise);
            deferred.resolve(returnObject);
            FolderRepository = _FolderRepository_;
            ctrl = $controller('FolderlistCtrl', {
                $scope: scope
            });


            //scope.tableParams.settings().$scope = scope;
        });

    });


    it('should exist', function() {    	
        expect( !! ctrl).toBe(true);
    });


    it('should attach a lists of folders to the scope', function() {
        expect(scope.folders.length).toBe(0);
        rootScope.$apply();
        expect(scope.folders.length).toBe(3);
    });
});
