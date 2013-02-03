App.PostsNewRoute = Ember.Route.extend({
	enter: function(manager) {
		console.log('들어감');
	},

	exit :function() {
		console.log('나감');
	}
});
