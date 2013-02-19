App.PostsNewRoute = Ember.Route.extend({
	model: function() {
		// 하나의 트랜젝션을 만들고, 
		var transaction = this.get('store').transaction();

		// 트랜 젝션에서 모델 생성

		var post = transaction.createRecord(App.Post, {
			title: '제목이당',
			body: '내용이당'
		});

		return post;
	},

	deactivate: function() {

		var newModel = this.modelFor("posts.new");
		
		if (!newModel.get('isSaving')) {
			newModel.get("transaction").rollback();
		}
  }

});
