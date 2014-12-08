class User < ActiveRecord::Base
  has_many :albums

  validates :email, uniqueness: true, presence: true
  validates :password, presence: true

  def self.authenticate(email,password)
    user = User.where(email: email).first

    if user.password == password
      user
    else
      nil
    end
  end
end
