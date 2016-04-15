class API::UsersController < API::ApplicationController
  before_action :authenticate_user_from_token!
  
  def profile
    render json: current_user
  end
end