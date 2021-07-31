class ApiValue < ApplicationRecord
  belongs_to :stock
  validates :datetime, uniqueness: { scope: :stock_id }
end
