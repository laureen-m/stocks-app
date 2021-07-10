class CreateApiValues < ActiveRecord::Migration[6.1]
  def change
    create_table :api_values do |t|
      t.integer "stock_id", null: false
      t.float "price", null: false
      t.integer "volume", null: false
      t.datetime "datetime"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end
  end
end
