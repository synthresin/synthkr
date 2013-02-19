App.PostsIndexRoute = Ember.Route.extend({
	model: function() {
		return App.Post.find();
		
	},

	redirect: function() {
		var post = this.modelFor('posts.index').get('lastObject');
		this.transitionTo('post', post);
	}
});
	