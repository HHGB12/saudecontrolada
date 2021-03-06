class CreateContatos < ActiveRecord::Migration[5.1]
  def change
    create_table :contatos do |t|
      t.string :nome
      t.string :email,    :null => false
      t.string :telefones
      t.text   :mensagem, :null => false
      t.string :ip

      t.timestamps null: false
    end
  end
end
