App.config(function ($routeProvider) {
  $routeProvider
    .when('/', 
      {
        controller: 'HomeController',
        templateUrl: 'app/templates/home.html'
      }
    )
    .when('/admin',
      {
        controller: 'AdminController',
        templateUrl: 'app/templates/admin.html'
      }
    )
    .otherwise( { redirectTo: '/' } );
});