App.PostsNewController = Em.ObjectController.extend({
	save: function() {
		this.get('content').get('transaction').commit();
		this.transitionToRoute('posts');
	}
});