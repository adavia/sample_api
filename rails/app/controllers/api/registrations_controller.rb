class API::RegistrationsController < Devise::RegistrationsController
  respond_to :json

  def create
    build_resource(sign_up_params)
 
    if resource.save
      if resource.active_for_authentication?
        render json: {user: resource}, status: :created
      else
        render json: {user: resource}, status: :created
      end
    else
      clean_up_passwords resource
      return render json: ErrorSerializer.serialize(resource.errors),
        status: :unprocessable_entity 
    end
  end
end