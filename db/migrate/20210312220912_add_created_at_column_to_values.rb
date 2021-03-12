class AddCreatedAtColumnToValues < ActiveRecord::Migration[6.1]
  def change
    add_column :values, :created_at, :datetime
  end
end
