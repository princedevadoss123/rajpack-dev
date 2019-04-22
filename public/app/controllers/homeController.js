App.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 0;   
  }])
  .controller('HomeController', [
  '$scope', '$http', '$location', '$anchorScroll', '$cookies',
  function ($scope, $http, $location, $anchorScroll, $cookies) {
    $scope.enableAbout = true;
    $scope.enableMachinery = true;
    $scope.enableCustomer = true;

    if ($cookies.get('content')) {
      $scope.rajpack = JSON.parse($cookies.get('content'));
    }
    else {
      $http ({
        method: 'GET',
        url: '/app/api/aboutus'
      }).then (function(res) {
        console.log(res.data);
        $cookies.put('content', JSON.stringify(res.data[0]));
        $scope.rajpack = res.data[0];
      },
      function (error) {
        console.log(error);
      });
    }

    $scope.showAbout = function() {
      $location.hash('about');
      $anchorScroll();
    };

    $scope.showMachinery = function() {
        $location.hash('machinery');
        $anchorScroll();
    };

    $scope.showCustomer = function() {
        $location.hash('customer');
        $anchorScroll();
    };
  }
]);