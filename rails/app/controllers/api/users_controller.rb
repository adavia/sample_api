class API::UsersController < API::ApplicationController
  before_action :authenticate_user_from_token!
  
  def me
    render json: current_user
  end
end