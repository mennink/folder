'use strict';

angular.module('folderApp')
    .factory('AuthService', function($http, Session) {
        return {
            login: function(credentials) {
                return $http
                    .get('/data/login.json', credentials)
                    .then(function(res) {
                        Session.create(res.data.id, res.data.userid, res.data.role);

                    });


            },
            isAuthenticated: function() {
                return !!Session.userId;
            },
            isAuthorized: function(authorizedRoles) {
                if (!angular.isArray(authorizedRoles)) {
                    authorizedRoles = [authorizedRoles];
                }
                return (this.isAuthenticated() &&
                    authorizedRoles.indexOf(Session.userRole) !== -1);
            },
            currentUser: function() {
                console.log('Session test :' + Session.userid);

                return {
                    name: Session.userid
                };
            },
            logout: function() {
                Session.destroy();
            }

        };
    });
