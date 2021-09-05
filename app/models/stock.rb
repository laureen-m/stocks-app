class Stock < ApplicationRecord
  has_many :values
  has_many :api_values

end
