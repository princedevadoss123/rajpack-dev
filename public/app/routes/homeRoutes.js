App.config(function ($routeProvider) {
  $routeProvider
    .when('/', 
      {
        controller: 'HomeController',
        templateUrl: 'app/templates/home.html'
      }
    )
    .otherwise( { redirectTo: '/' } );
});