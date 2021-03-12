class RemoveDateTimeColumnsFromValues < ActiveRecord::Migration[6.1]
  def change
    remove_column :values, :updated_at_date, :date
    remove_column :values, :updated_at_time, :time
  end
end
