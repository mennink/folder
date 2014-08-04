'use strict';

angular.module('folderApp')
    .controller('HeaderCtrl', ['$scope', '$location',
        function($scope, $location) {
            $scope.isActive = function(viewLocation) {
                return viewLocation === $location.path();
            };
        }
    ]);
