App.PostsIndexRoute = Ember.Route.extend({
	model: function() {

	},
	redirect: function() {
		var p = App.Post.find().get('lastObject');
		this.transitionTo('post', p);
	}
});
