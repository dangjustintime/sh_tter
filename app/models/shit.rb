class Shit
  DB = PG.connect(host: "localhost", port: 5432, dbname: "sh_tter_development");
  def self.all
    results = DB.exec("SELECT * FROM shits")
    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "text" => result["text"],
        "user_id" => result["user_id"].to_i,
        "created_at" => result["created_at"]
      }
    end
  end
  def self.find(id)
    results = DB.exec("SELECT * FROM shits WHERE shits.id=#{id}")
    return {
        "id" => results.first["id"].to_i,
        "text" => results.first["text"],
        "user_id" => results.first["user_id"].to_i,
        "created_at" => results.first["created_at"]
    }
  end
  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO shits (
          text,
          user_id,
          created_at)
        VALUES (
          '#{opts["text"]}',
          #{opts["user_id"]},
          '#{opts["created_at"]}')
        RETURNING id, text, user_id, created_at
      SQL
    )
    return {
        "id" => results.first["id"].to_i,
        "text" => results.first["text"],
        "user_id" => results.first["user_id"].to_i,
        "created_at" => results.first["created_at"]
    }
  end
  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE shits 
        SET
          text='#{opts["text"]}',
          user_id=#{opts["user_id"]},
          created_at='#{opts["created_at"]}'
        WHERE id=#{id}
        RETURNING id, text, user_id, created_at
      SQL
    )
    return {
        "id" => results.first["id"].to_i,
        "text" => results.first["text"],
        "user_id" => results.first["user_id"].to_i,
        "created_at" => results.first["created_at"]
    }
  end
  def self.delete(id)
    results = DB.exec("DELETE FROM shits WHERE id=#{id}")
    return { "deleted" => true }
  end
end
