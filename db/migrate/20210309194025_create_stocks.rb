class CreateStocks < ActiveRecord::Migration[6.1]
  def change
    create_table :stocks do |t|
      t.string :name
      t.integer :value
      t.integer :volume
      t.date :date
      t.time :time
    end
  end
end
