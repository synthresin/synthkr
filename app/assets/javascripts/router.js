App.Router.map(function(match) {
	this.resource('posts', function() {
		this.route('post', { path : '/1'});
	});
	this.route('about');
});
