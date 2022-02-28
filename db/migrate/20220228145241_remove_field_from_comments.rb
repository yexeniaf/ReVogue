class RemoveFieldFromComments < ActiveRecord::Migration[7.0]
  def change
    remove_column :comments, :potential_buyer
  end
end
