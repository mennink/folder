'use strict';

angular.module('folderApp')
    .factory('FolderRegelRepository', ['$rootScope', 'Restangular',
        function($rootScope, Restangular) {
            var folderRegelService = Restangular.all('folderregels');
            var service = {
                getFolderRegels: function() {
                    return folderRegelService.getList();
                },
                updateFolder: function(fld) {
                    $rootScope.$broadcast('folder:updated');
                    return fld.put();
                }

            };
            return service;
        }
    ]);
