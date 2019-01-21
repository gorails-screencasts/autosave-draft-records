class AddDraftsToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :draft_id, :integer
    add_column :posts, :published_at, :timestamp
    add_column :posts, :trashed_at, :timestamp
  end
end
