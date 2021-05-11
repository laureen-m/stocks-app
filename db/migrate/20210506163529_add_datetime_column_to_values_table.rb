class AddDatetimeColumnToValuesTable < ActiveRecord::Migration[6.1]
  def change
    add_column :values, :datetime, :datetime
  end
end
