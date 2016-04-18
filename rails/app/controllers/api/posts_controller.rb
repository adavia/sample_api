class API::PostsController < API::ApplicationController
  before_action :authenticate_user_from_token!
  
  def index
    @posts = current_user.posts
    render json: @posts
  end

  def create
    @post = current_user.posts.build(post_params)
    if @post.save
      render json: @post, status: :created
    else
      render json: ErrorSerializer.serialize(@post.errors), 
        status: :unprocessable_entity 
    end
  end

  private

  def post_params
    params.require(:post).permit(:content)
  end
end
