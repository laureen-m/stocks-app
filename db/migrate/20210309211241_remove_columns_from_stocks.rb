class RemoveColumnsFromStocks < ActiveRecord::Migration[6.1]
  def change
    remove_column :stocks, :date, :date
    remove_column :stocks, :time, :time
    remove_column :stocks, :value, :integer
    remove_column :stocks, :volume, :integer
  end
end
