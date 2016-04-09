class API::PostsController < API::ApplicationController
  before_action :authenticate_user_from_token!
  
  def index
    @posts = Post.all
    render json: @posts
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end
end
