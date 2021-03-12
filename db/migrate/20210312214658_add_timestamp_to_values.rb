class AddTimestampToValues < ActiveRecord::Migration[6.1]
  def change
    add_column :values, :updated_at, :date 
  end
end
