App.PostsRoute = Ember.Route.extend({
	model: function() {
		return App.Post.find();
	},

	redirect: function() {
		
	}
});
