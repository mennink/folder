'use strict';

angular.module('folderApp')
    .controller('ApplicationCtrl', function($scope, USER_ROLES, AuthService) {
        $scope.currentUser = {};
        $scope.userRoles = USER_ROLES;
        $scope.isAuthorized = AuthService.isAuthorized;
    });
