var app = angular.module("myportfolio", ['ui.router'])

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home')

  $stateProvider
    .state('home', {
        url: '/home',
        controller: 'homeController as home',
        templateUrl: 'js/partials/home.html'
    })
    .state('about', {
        url: '/about',
        controller: 'aboutController as about',
        templateUrl: 'js/partials/about.html'
    })
    .state('projects', {
        url: '/projects',
        controller: 'projectsController as projects',
        templateUrl: 'js/partials/projects.html'
    })
    .state('people', {
        url: '/people',
        controller: 'peopleController as people',
        templateUrl: 'js/partials/people.html'
    })
    .state('contact', {
        url: '/contact',
        controller: 'contactController as contact',
        templateUrl: 'js/partials/contact.html'
    })
  })
