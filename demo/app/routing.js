'use strict';

angular.module('demoApp')
    .config(function ($urlRouterProvider, $stateProvider) {

    $stateProvider
        // ------------------------------------------------------------------------------------------------
        // HOMEPAGE - Init the current value
        // ------------------------------------------------------------------------------------------------
        .state('default', {
            url : '/',
            controller : 'homepageCtrl',
            templateUrl : "pages/_homepage/homepageView.html"
        })

        // ------------------------------------------------------------------------------------------------
        // DEMO EDITOR Component
        // ------------------------------------------------------------------------------------------------
        .state('jsonEditor', {
            url : '/json-editor',
            controller : 'demoEditorCtrl',
            templateUrl : "pages/demoEditor/demoEditorView.html"
        })

        .state('compEditor', {
            url : '/comp-editor',
            controller : 'compEditorCtrl',
            templateUrl : "pages/compEditor/compEditorView.html"
        })

        .state('user', {
            url : '/user-editor',
            controller : 'demoUserCtrl',
            templateUrl : "pages/demoUser/demoUserView.html"
        })

        .state('userCreate', {
            url : '/user-create',
            controller : 'demoUserCreateCtrl',
            templateUrl : "pages/demoUserCreate/demoUserCreateView.html"
        })


    ;




    $urlRouterProvider.otherwise('/');
});
