angular
.module('weather')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('weather', {
    url: '/',
    templateUrl: '/js/views/weather/weather.html'
  });


  $urlRouterProvider.otherwise('/');
}
