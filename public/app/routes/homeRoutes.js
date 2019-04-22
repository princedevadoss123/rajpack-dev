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
    .when('/adminpage',
      {
        controller: "AdminPageController",
        templateUrl: 'app/templates/adminpage.html'
      }
    )
    .when('/contact',
      {
        controller: "ContactController",
        templateUrl: 'app/templates/contactus.html'
      }
    )
    .otherwise( { redirectTo: '/' } );
});