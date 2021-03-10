class AddStockIdToValues < ActiveRecord::Migration[6.1]
  def change
    add_column :values, :stock_id, :int 
  end
end
