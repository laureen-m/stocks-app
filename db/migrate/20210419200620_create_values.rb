class CreateValues < ActiveRecord::Migration[6.1]
  def change
    create_table :values do |t|
      t.integer :stock_id, null: false
      t.date :date, null: false
      t.time :time, null: false
      t.integer :price, null: false
      t.integer :volume, null: false

      t.timestamps
    end
  end
end
