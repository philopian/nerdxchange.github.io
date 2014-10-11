'use strict';

/**
 * @ngdoc function
 * @name nerdXchangeApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the nerdXchangeApp
 */
angular.module('nerdXchangeApp')
  .controller('ContactCtrl', function ($scope) {



    $scope.thePeeps = [
		{"name": "Phil Willis", "email": "pdotwdot@gmail.com", "where":"Portland, OR"}
    ];

    console.log("sdasdasdad");


  });
