"use strict";

angular.module('App',['ui.router', 'App.Controller','App.Services'])

    .config(function($stateProvider, $urlRouterProvider) {
  
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
            .state('home', {
            url: '/home',
            templateUrl: 'src/views/home.html'
        })
        // HOME STATES AND NESTED VIEWS ========================================
    
        


        
})




