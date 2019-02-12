App.controller("AdminPageController",[
    '$scope', '$http',
    function($scope,$http){
        $http({
            method: 'GET',
            url: '/app/api/aboutus'
          }).then( function(res) {
            console.log(res.data);
            $scope.rajpack = res.data[0];
          },
          function (error) {
            console.log(error);
        });

        $scope.addMachine = function($event){
            console.log($event);
        };

        $scope.addCustomer = function($event){
            console.log($event);
        };

        $scope.saveChanges = function(){

        };

        $scope.discardChanges = function(){

        };
    }
]);