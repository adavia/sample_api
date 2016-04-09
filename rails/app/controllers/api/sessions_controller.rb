class API::SessionsController < Devise::SessionsController
  respond_to :json

  def create
    respond_to do |format|
      format.json do
        self.resource = warden.authenticate!(auth_options)
        data = {
          token: resource.authentication_token,
          email: resource.email
        }
        render json: data, status: :created
      end
    end
  end
end