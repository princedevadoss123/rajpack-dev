App.controller('HomeController', [
  '$scope', '$http', 
  function ($scope, $http) {
    $http ({
      method: 'GET',
      url: '/app/api/aboutus'
    }).then (function(res) {
      console.log(res.data);
      $scope.rajpack = res.data[0];
    },
    function (error) {
      console.log(error);
    });
  }
]);