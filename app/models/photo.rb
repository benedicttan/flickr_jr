require 'carrierwave/orm/activerecord'
class Photo < ActiveRecord::Base
  mount_uploader :file, Uploader
  belongs_to :album
end
