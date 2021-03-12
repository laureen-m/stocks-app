class RemoveDateTimeFromValues < ActiveRecord::Migration[6.1]
  def change
    remove_column :values, :date, :date
    remove_column :values, :time, :time
  end
end
