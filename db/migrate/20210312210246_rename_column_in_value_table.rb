class RenameColumnInValueTable < ActiveRecord::Migration[6.1]
  def change
    rename_column :values, :value, :price
  end
end
