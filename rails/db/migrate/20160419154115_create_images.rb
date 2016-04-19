class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :file
      t.boolean :default, default: false
      t.references :imageable, polymorphic: true, index: true

      t.timestamps null: false
    end
  end
end
