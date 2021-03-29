class ChangeStocksvaluesTableName < ActiveRecord::Migration[6.1]
  def change
    rename_table :sclvalues, :stocksvalues
  end
end
