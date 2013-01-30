App.Router.map(function() {
	this.resource('posts', function() {
		this.route('new');
		this.route('post', { path : '/1'});

	});
	this.route('about');
});
