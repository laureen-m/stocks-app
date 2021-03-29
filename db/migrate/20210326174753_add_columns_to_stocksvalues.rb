class AddColumnsToStocksvalues < ActiveRecord::Migration[6.1]
  def change
    add_column :stocksvalues, :date, :date
    add_column :stocksvalues, :time, :time
  end
end
