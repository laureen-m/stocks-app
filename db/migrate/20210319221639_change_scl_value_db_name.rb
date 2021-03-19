class ChangeSclValueDbName < ActiveRecord::Migration[6.1]
  def change
    rename_table :scl_values, :sclvalues
  end
end
