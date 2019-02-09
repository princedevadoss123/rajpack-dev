App.controller('AdminController', [
    '$scope', '$http', 
    function ($scope, $http) {
      $scope.login = function(cred) {
          console.log(cred);
      }
    }
  ]);