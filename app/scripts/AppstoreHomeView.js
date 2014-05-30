define([
	'jquery',
	'backbone',
	'underscore',
	'moment',
	// 'text!../templates/projects.tpl'
], function ($, Backbone, _, moment, ProjectCollection, ProjectcatCollection) {
	'use strict';

	var ProjectListView = Backbone.View.extend({

		el: '.project-list',
		render: function () {
			var self = this;

			
		},

		events: {
			// Bind a click event on to the project title with a handler function - showProjectDetails
			'click .project-title' : 'showProjectDetails'
		},

		// When clicking on the project title, show the project details beaneath
		showProjectDetails: function (evt) {
			
		}
	});

	return ProjectListView;
});