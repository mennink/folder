'use strict';

angular.module('folderApp')
    .factory('FolderRepositoryMock', ['$rootScope',
        function($rootScope) {
            var service = {
                getFolders: function() {
                    var folders = [{
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
                    return folders;
                },
                updateFolder: function(fld) {
                    $rootScope.$broadcast('folder:updated');
                    return fld.put();
                }

            };
            return service;
        }
    ]);
