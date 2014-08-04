'use strict';
/*global _:false */

angular.module('folderApp')
    .controller('FolderdetailCtrl', ['$scope', '$routeParams', '$timeout', 'FolderRegelRepository', 'Restangular', '$filter', '$q', 'ngTableParams',
        function($scope, $routeParams, $timeout, FolderRegelRepository, Restangular, $filter, $q, NgTableParams) {



            $scope.folderId = $routeParams.folderId;
            $scope.orderProp = 'omschrijving';


            $scope.$watch('reload', function() {
                $scope.tableParams.reload();
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

            $scope.getTotal = function(tag) {
                var totaal = 0;
                _.each($scope.artikelen, function(artikel) {
                    if (artikel.tag === tag || typeof tag === 'undefined') {
                        totaal = totaal + artikel.aantal * artikel.ZBPR;

                    }
                });

                return totaal;
            };

            $scope.getHistory = function(artikel) {
                var history = '<table><tr><th>Jaar</th><th>Int.</th><th>Verkocht</th><th>Omzet</th></tr>';
                _.each(artikel.historisch, function(h) {
                    history = history + '<tr><td>' + h.jaar + '</td><td>' + h.intekening + '</td><td>' + h.verkocht + '</td><td>' + h.omzet + '</td></tr>';
                });
                return history;

            };


            $scope.tableParams = new NgTableParams({
                page: 1, // show first page
                count: 100 // count per page
            }, {
                groupBy: 'tag',
                total: function() {
                    return $scope.artikelen.length;
                }, // length of data,
                getData: function($defer, params) {
                    FolderRegelRepository.getFolderRegels().then(function(result) {
                        $scope.artikelen = result;
                        //console.log(result);
                        var filteredData = params.filter() ?
                            $filter('filter')($scope.artikelen, params.filter()) : $scope.artikelen;
                        var orderedData = params.sorting() ?
                            $filter('orderBy')(filteredData, params.orderBy()) :
                            filteredData;
                        params.total(orderedData.length); // set total for recalc pagination
                        $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));

                    });
                },
                $scope: {
                    $data: {}
                }
            });




        }
    ]);
