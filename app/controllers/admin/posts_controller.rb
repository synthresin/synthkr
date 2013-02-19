class Admin::PostsController < AdminController


	def index
		@posts = Post.order('created_at DESC').all
	end

	def new
		@post = Post.new
	end

	def create
		@post = Post.new(params[:post])
		
		if @post.save
			redirect_to admin_post_path(@post)
		else
			render 'new'
		end
		

	end

	def show
		@post = Post.find(params[:id])
	end

	def edit
		@post = Post.find(params[:id])
	end

	def update
		@post = Post.find(params[:id])
		if @post.update_attributes(params[:post])
			redirect_to admin_post_path(@post)
		else
			render 'edit'
		end
	end

	def destroy
		Post.find(params[:id]).destroy
		redirect_to admin_posts_path
	end


end
