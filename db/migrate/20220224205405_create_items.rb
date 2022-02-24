class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.text :image_url
      t.string :title
      t.float :price
      t.string :condition
      t.text :size
      t.string :description
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
