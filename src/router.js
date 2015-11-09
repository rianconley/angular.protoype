"use strict";

var App = angular.module('App',['ui.router']);



routerApp.config(function($stateProvider, $urlRouterProvider) {
  
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
            .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
        // HOME STATES AND NESTED VIEWS ========================================
    
        
})




