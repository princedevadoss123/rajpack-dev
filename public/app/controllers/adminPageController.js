App.controller("AdminPageController",[
    '$scope', '$http', '$cookies', '$location', '$window',
    function($scope, $http, $cookies, $location, $window){
        $scope.init = function() {
            if ($cookies.get('username')) {
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
            }
            else {
                $window.location.href = $location.absUrl().split('!')[0] + '!/admin';
            }
        };

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