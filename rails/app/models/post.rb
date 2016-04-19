class Post < ActiveRecord::Base
  belongs_to :user
  has_many :images, as: :imageable
  
  validates :content, presence: true

  default_scope -> { order(created_at: :desc) }
end
