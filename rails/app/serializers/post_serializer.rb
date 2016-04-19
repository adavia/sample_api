class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :user, :created_at

  def user
    object.user_id
  end
end
