App.Router.map(function() {
	this.resource('posts', function() {
		this.route('new');
		this.route('post', { path: ':post_id'} );

	});
	this.route('about');
});
