define([
	'jquery',
	'backbone'
], function ($, Backbone) {
	'use strict';

	var AppstoreRouter = Backbone.Router.extend({
    	routes: {
    		'': 'home'
    	}
    });

    return AppstoreRouter;
});