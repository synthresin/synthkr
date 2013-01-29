class Admin::PostsController < ApplicationController
	def index
		render :text => 'post index'
	end

	def show
		render :text =>'#{params[:id]}'
	end
end
