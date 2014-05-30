define([
	'jquery',
	'backbone'
], function ($, Backbone) {
	'use strict';

	var Apps = Backbone.Collection.extend({
		url: '/apps'
	});

	return Apps;
});