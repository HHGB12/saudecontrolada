class RenameTableExamesResultadosToExamsResults < ActiveRecord::Migration[5.1]
  def change
    rename_table :exames_resultados, :exams_results
  end
end
