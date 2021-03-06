class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :title
      t.string :image
      t.string :reason
      t.string :thoughts
      t.string :tech
      t.string :loadmap
      t.integer :day
      t.string :commitment
      t.text :link
      t.text :github
      t.string :how

      t.timestamps
    end
  end
end
