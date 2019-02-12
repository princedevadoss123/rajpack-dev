App.controller('AdminController', [
    '$scope', '$http', '$cookies', '$location',
    function ($scope, $http, $cookies, $location) {
      $scope.login = function(cred) {
          if (cred && cred.username && cred.password) {
            $http({
                url: '/app/api/admin/login',
                method: "POST",
                data: cred
            })
            .then(function(response) {
                if (response.data.username) {
                    $cookies.put('username', response.data.username);
                    alert('success');
                }
                else {
                    alert('error');
                }
            }, 
            function(response) { // optional
                alert(response);
            });
          }
          else {
              alert('Please fill username and password');
          }
      }
    }
  ]);