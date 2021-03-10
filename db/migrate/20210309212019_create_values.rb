class CreateValues < ActiveRecord::Migration[6.1]
  def change
    create_table :values do |t|
      t.integer :value
      t.integer :volume
      t.date :date
      t.time :time
    end
  end
end
