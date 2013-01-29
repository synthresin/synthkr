class Admin::PostsController < ApplicationController

	layout 'admin'

	def index
		@posts = Post.all
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
		
	end

	def update
	end

	def destroy

	end


end
