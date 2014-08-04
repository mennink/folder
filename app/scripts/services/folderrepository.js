'use strict';

angular.module('folderApp')
    .factory('FolderRepository', ['$rootScope', 'Restangular',
        function($rootScope, Restangular) {
            var folderService = Restangular.all('folders');
            var service = {
                getFolders: function() {
                    return folderService.getList();
                },
                updateFolder: function(fld) {
                    $rootScope.$broadcast('folder:updated');
                    return fld.put();
                }

            };
            return service;
        }
    ]);
