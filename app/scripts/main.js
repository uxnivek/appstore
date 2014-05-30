/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        text: '../bower_components/requirejs-text/text',
        moment: '../bower_components/moment/moment'
    }
});

require([
    'backbone',
    'AppstoreRouter',
    'AppstoreHomeView'
], function (Backbone, AppstoreRouter, AppstoreHomeView) {

    var router = new AppstoreRouter();
    router.on('route:home', function () {
    	console.log('we have loaded the home page');
    })

    Backbone.history.start();

	// Create a project list view and show all projects grouped by project categories
    new AppstoreHomeView().render();
});
