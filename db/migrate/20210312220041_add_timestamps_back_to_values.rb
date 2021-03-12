class AddTimestampsBackToValues < ActiveRecord::Migration[6.1]
  def change
    add_column :values, :updated_at, :datetime
  end
end
