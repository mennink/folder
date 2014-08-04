'use strict';

angular.module('folderApp')
    .controller('FolderlistCtrl', ['$scope', '$timeout', 'FolderRepository',
        function($scope, $timeout, FolderRepository) {
            $scope.folders = [];
            // Initieren van folders
            FolderRepository.getFolders().then(function(d) {
                $scope.folders = d;
            });

            $scope.allowNullValue = function(expected, actual) {
                if (actual === null) {
                    return true;
                } else {
                    // angular's default (non-strict) internal comparator
                    var text = ('' + actual).toLowerCase();
                    return ('' + expected).toLowerCase().indexOf(text) > -1;
                }
            };


            // Dit stuk is om te updaten ig je een wijziging doet
            /*var updateFolders = function() {
                if (updateFoldersTimeout) {
                  $timeout.cancel(updateFolderTimeout);
                }

                updateFolderTimeout = $timeout(function() {

                    $scope.$apply(function() {
                        FolderRepository.getFolders().then(function(d) {
                            $scope.folders = d;
                        });
                    });
                }, 500);
            };

            $scope.$on('folders:added', updateFolders);
            $scope.$on('folders:removed', updateFolders);
            $scope.$on('folders:updated', updateFolders);*/

            $scope.orderProp = 'id';
            $scope.showStatus = function(status) {
                if (status === 'Ingediend') {
                    return 'label label-success';
                }
                if (status === 'Definitief') {
                    return 'label label-default';
                }
                if (status === 'Open') {
                    return 'label label-primary';
                }
                if (status === 'Fout') {
                    return 'label label-danger';
                }

                return false;

            };
        }
    ]);
