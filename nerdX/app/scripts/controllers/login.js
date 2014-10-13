'use strict';
/**
 * @ngdoc function
 * @name nergXApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Manages authentication to any active providers.
 */
angular.module('nergXApp')
  .controller('LoginCtrl', function ($scope, simpleLogin, $location) {
    $scope.oauthlogin = function(provider) {
      login(provider, {
        rememberMe: true
      });
    };

    function login(provider, opts) {
      $scope.err = null;
      simpleLogin.login(provider, opts).then(
        function() {
          $location.path('/account');
        },
        function(err) {
          $scope.err = err;
        }
      );
    }

  });