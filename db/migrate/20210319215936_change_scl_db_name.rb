class ChangeSclDbName < ActiveRecord::Migration[6.1]
  def change
    rename_table :SCL, :SCL_data
  end
end
