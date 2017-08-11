class CreateEntries < ActiveRecord::Migration[5.1]
  def change
    create_table :entries do |t|
      t.string :name
      t.string :user_name
      t.string :tz
      t.string :image
      t.string :email
      t.string :search
      t.string :location

      t.timestamps
    end
  end
end
