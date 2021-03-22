class ChangeSclDataDbName < ActiveRecord::Migration[6.1]
  def change
    rename_table :SCL_data, :scl_values
  end
end
