class API::ApplicationController < ApplicationController
  attr_reader :current_user
  respond_to :json
  protect_from_forgery with: :null_session

  private

  def authenticate_user_from_token!
    authenticated = authenticate_with_http_token do |user_token, options|
      user_email = options[:email].presence
      user = user_email && User.find_by_email(user_email)

      if user && Devise.secure_compare(user.authentication_token, user_token)
        @current_user = user
        sign_in user, store: false
      else
        render json: { error: 'Invalid authorization.' }, status: :unauthorized
      end
    end

    unless authenticated
      render json: { error: 'No authorization provided.' }, status: :unauthorized
    end
  end
end