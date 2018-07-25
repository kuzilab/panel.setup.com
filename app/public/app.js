var app = angular.module('app', ['ngRoute', 'ngMessages', 'MainPageCtrl', 'LoginCtrl', 'SignUpCtrl', 'IndexCtrl', 'CategoryCtrl', 'TicketCtrl', 'ActivityCtrl', 'CommentCtrl', 'CompanyCtrl', 'UserCardCtrl', 'CompanyCardCtrl', 'MockDataService']);

// Environments -----------------------------------------
app.run(function ($rootScope, $location) {
    $rootScope.$on('$locationChangeStart', function (event, neext, current) {
        var path = $location.path();
        console.log(path);
    });
});

// Routing ----------------------------------------------
app.config(function ($httpProvider, $routeProvider, $locationProvider) {

    $routeProvider
        .when('/', {
            templateUrl: '../views/mainpage.html',
            controller: 'MainPageController',
            controllerAs: 'mainpage'
        })
        .when('/login', {
            templateUrl: '../views/login.html',
            controller: 'LoginController',
            controllerAs: 'login'
        })
        .when('/signup', {
            templateUrl: '../views/signup.html',
            controller: 'SignUpController',
            controllerAs: 'signup'
        })
        .when('/categories', {
            templateUrl: '../views/categories.html',
            controller: 'CategoryController',
            controllerAs: 'category'
        })
        .when('/tickets', {
            templateUrl: '../views/tickets.html',
            controller: 'TicketController',
            controllerAs: 'ticket'
        })
        .when('/activities', {
            templateUrl: '../views/activities.html',
            controller: 'ActivityController',
            controllerAs: 'activity'
        })
        .when('/comments', {
            templateUrl: '../views/comments.html',
            controller: 'CommentControlller',
            controllerAs: 'comment'
        })
        .when('/company', {
            templateUrl: '../views/company.html',
            controller: 'CompanyController',
            controllerAs: 'company'
        })
        .when('/usercard', {
            templateUrl: '../views/usercard.html',
            controller: 'UserCardController',
            controllerAs: 'usercard'
        })
        .when('/companycard', {
            templateUrl: '../views/companycard.html',
            controller: 'CompanyCardController',
            controllerAs: 'companycard'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});