App.PostsIndexRoute = Ember.Route.extend({
	redirect: function() {
		var post = this.modelFor('posts').get('lastObject');
		this.transitionTo('post', post);
	}
});
	