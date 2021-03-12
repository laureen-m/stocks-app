class AddTimeColumnToValue < ActiveRecord::Migration[6.1]
  def change
    rename_column :values, :updated_at, :updated_at_date
    add_column :values, :updated_at_time, :time 
  end
end
