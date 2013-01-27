App.PostsView = App.OneDepthView.extend({

	didInsertElement:function() {
		// 스크롤바 세팅해 줄것.
		this.scrollbar = this.$('.post-list-wrapper');
		this.scrollbar.tinyscrollbar();	

		//스크롤바 유지 보수는 어떻게 하나...
		this.scrollbar.tinyscrollbar_update('relative');
		
		

	}

});
