class RenameDescriptionToCategory < ActiveRecord::Migration[7.0]
  def change
    rename_column :items, :description, :category
  end
end
