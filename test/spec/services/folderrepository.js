'use strict';

describe('Service: FolderRepository', function() {
    var httpBackend, Restangular, q, scope, FolderRepository;

    // afterEach(function() {
    //     httpBackend.verifyNoOutstandingExpectation();
    //     httpBackend.verifyNoOutstandingRequest();
    // });



    // Use to provide any mocks needed

    function _provide(callback) {
        // Execute callback with $provide
        module(function($provide) {
            callback($provide);
        });
    }

    // Use to inject the code under test

    function _inject() {
        inject(function(_FolderRepository_, _Restangular_, _$httpBackend_, $q, $rootScope) {
            FolderRepository = _FolderRepository_;
            httpBackend = _$httpBackend_;
            Restangular = _Restangular_;
            q = $q;
            scope = $rootScope.$new();
        });
    }


    // Call this before each test, except where you are testing for errors

    function _setup() {
        // Mock any expected data
        _provide(function(provide) {
            provide.value('folderService', {});
        });

        // Inject the code under test
        _inject();
    }

    beforeEach(function() {
        // Load the service's module
        module('folderApp');
    });

    describe('the service api', function() {
        beforeEach(function() {
            // Inject with expected values
            _setup();
        });

        it('should exist', function() {
            expect( !! FolderRepository).toBe(true);
        });

        it('should provide a getFolders function', function() {
            expect(typeof FolderRepository.getFolders).toBe('function');
        });

        it('should provide a updateFolder function', function() {
            expect(typeof FolderRepository.updateFolder).toBe('function');
        });


    });

    describe('service errors', function() {
        it('should throw an error when required dependency is missing', function() {
            // Use an anonymous function to wrap the code that will fail
            function wrapper() {
                // Inject WITHOUT providing required values
                _inject();
            }
            //expect(wrapper).toThrow('FolderRepository: folderService not provided');

            /*
      Note: you can use Function.bind to avoid an anonymous function wrapper for inject,
      however, you'll need a polyfill for PhantomJS such as: http://goo.gl/XSLOdx
      var svc = function (FolderRepository) {};
      expect(inject.bind(null, svc)).toThrow('FolderRepository: myVal not provided');
      */
        });
    });
});
