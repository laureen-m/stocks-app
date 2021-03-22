class ChangeValuesDbName < ActiveRecord::Migration[6.1]
  def change
    rename_table :values, :SCL
  end
end
