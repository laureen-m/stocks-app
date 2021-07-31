class AddIndexToApiValues < ActiveRecord::Migration[6.1]
  def change
    add_index :api_values, [:datetime, :stock_id]
  end
end
