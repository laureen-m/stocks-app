class ChangePriceDataType < ActiveRecord::Migration[6.1]
  def change
    change_column :values, :price, :float
  end
end
