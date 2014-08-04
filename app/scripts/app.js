'use strict';

angular.module('folderApp', ['ngCookies', 'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngTable',
    'ui.utils',
    'restangular',
    'ui.bootstrap'
])
    .config(function($routeProvider, USER_ROLES) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                authorizedRoles: USER_ROLES.all

            }).when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                authorizedRoles: USER_ROLES.all

            })
            .when('/folderlist', {
                templateUrl: 'views/folder-list.html',
                controller: 'FolderlistCtrl',
                authorizedRoles: USER_ROLES.all

            })
            .when('/folders/:folderId', {
                templateUrl: 'views/folder-detail.html',
                controller: 'FolderdetailCtrl',
                authorizedRoles: USER_ROLES.all


            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .constant('AUTH_EVENTS', {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed',
        logoutSuccess: 'auth-logout-success',
        sessionTimeout: 'auth-session-timeout',
        notAuthenticated: 'auth-not-authenticated',
        notAuthorized: 'auth-not-authorized'
    })
    .constant('USER_ROLES', {
        all: '*',
        admin: 'admin',
        editor: 'editor',
        guest: 'guest'
    })
    .run(function($rootScope, $location, AUTH_EVENTS, AuthService) {
        $rootScope.$on('$routeChangeStart', function(event, next) {
            console.log(next.authorizedRoles);
            console.log('Authenticated : ' + AuthService.isAuthenticated());
            console.log('Authorized : ' + AuthService.isAuthorized(next.authorizedRoles));

            // if (!AuthService.isAuthorized(next.authorizedRoles)) {

            //     if (AuthService.isAuthenticated()) {
            //         // user is not allowed
            //         $rootScope.$broadcast(AUTH_EVENTS.notAuthorized, current);
            //     } else {
            //         // user is not logged in
            //         $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated, current);
            //     }
            // }
        });
    })
    .run(function($rootScope, $location, AUTH_EVENTS) {
        $rootScope.$on(AUTH_EVENTS.notAuthenticated, function() {
            $location.path('/login');
        });

    })
    .run(function($rootScope, $location, AUTH_EVENTS) {
        $rootScope.$on(AUTH_EVENTS.loginSuccess, function() {
            $location.path('/');
        });

    })
    .run(function($rootScope, $location, AUTH_EVENTS) {
        $rootScope.$on(AUTH_EVENTS.logoutSuccess, function() {
            $location.path('/logout.hmtl');
        });

    })
    .config(function($httpProvider) {
        $httpProvider.interceptors.push([
            '$injector',
            function($injector) {
                return $injector.get('AuthInterceptor');
            }
        ]);
    })
    .constant('apiKey', 'YOUR_Mongolab_API_KEY')
    .config(function(RestangularProvider, apiKey) {
        RestangularProvider.setBaseUrl('/data');
        RestangularProvider.setRequestSuffix('.json?nocache=' + (new Date()).getTime());
        RestangularProvider.setDefaultRequestParams({
            apiKey: apiKey
        });
    })
    .factory('AuthInterceptor', function($rootScope, $q,
        AUTH_EVENTS) {
        return {
            responseError: function(response) {
                if (response.status === 401) {
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated,
                        response);
                }
                if (response.status === 403) {
                    $rootScope.$broadcast(AUTH_EVENTS.notAuthorized,
                        response);
                }
                if (response.status === 419 || response.status === 440) {
                    $rootScope.$broadcast(AUTH_EVENTS.sessionTimeout,
                        response);
                }
                return $q.reject(response);
            }
        };
    });
