'use strict';

angular.module('folderApp')
    .controller('LoginCtrl', ['$scope', '$rootScope',  'AUTH_EVENTS', 'AuthService',
        function($scope, $rootScope, AUTH_EVENTS, AuthService) {
            $scope.credentials = {
                username: '',
                password: ''
            };
            $scope.login = function(credentials) {

                AuthService.login(credentials).then(function() {
                  $scope.currentUser.name = credentials.username;
                  //console.log("cureenft" + $scope.currentUser.name)
                    $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                }, function() {
                    $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                });
            };
        }
    ]);
