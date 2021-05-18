 # Install squasher gem to clean up my migrations folder and only share relevant information to anybody working on the app.
 # To use it, run: `squasher year[/month][/day]` -- the date specifies until which date the migrations have to be included.

class InitSchema < ActiveRecord::Migration
  def up
    # These are extensions that must be enabled in order to support this database
    enable_extension "plpgsql"
    create_table "stocks" do |t|
      t.string "name"
    end
    create_table "values" do |t|
      t.integer "stock_id", null: false
      t.float "price", null: false
      t.integer "volume", null: false
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
      t.datetime "datetime"
    end
  end

  def down
    raise ActiveRecord::IrreversibleMigration, "The initial migration is not revertable"
  end
end
