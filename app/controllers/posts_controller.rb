class PostsController < ApplicationController
	
	def index
		render :json => Post.all
	end

	def show
		render :json => Post.find(params[:id])
	end

	def create
		post = Post.new(params[:post])

		# 받은 파라미터를 가지고 post 를 슥삭슥삭 지정한다.
		if post.save
			# 세이브가 제대로 되었으면, 해당 post 를 json 으로 리턴한다.
			render json: post#, status: :created
		else
			render json: post.errors
		end
		
	end
end
