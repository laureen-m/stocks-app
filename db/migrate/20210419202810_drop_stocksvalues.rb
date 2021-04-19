class DropStocksvalues < ActiveRecord::Migration[6.1]
  def change
    drop_table :stocksvalues
  end
end
