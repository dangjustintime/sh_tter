class User
  DB = PG.connect(host: "localhost", port: 5432, dbname: "sh_tter_development");
  def self.all
    results = DB.exec("SELECT * FROM users")
    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "username" => result["username"],
        "password" => result["password"],
        "bio" => result["bio"],
        "profilepic" => result["profilepic"]
      }
    end
  end
  def self.find(id)
    results = DB.exec("SELECT * FROM users WHERE users.id=#{id}")
    return {
        "id" => results.first["id"].to_i,
        "username" => results.first["username"],
        "password" => results.first["password"],
        "bio" => results.first["bio"],
        "profilepic" => results.first["profilepic"]
    }
  end
  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO users (
          username,
          password,
          bio,
          profilepic)
        VALUES (
          '#{opts["username"]}',
          '#{opts["password"]}',
          '#{opts["bio"]}',
          '#{opts["profilepic"]}')
        RETURNING id, username, password, bio, profilepic
      SQL
    )
    return {
        "id" => results.first["id"].to_i,
        "username" => results.first["username"],
        "password" => results.first["password"],
        "bio" => results.first["bio"],
        "profilepic" => results.first["profilepic"]
    }
  end
  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE users 
        SET
          username='#{opts["username"]}',
          password='#{opts["password"]}',
          bio='#{opts["bio"]}',
          profilepic='#{opts["profilepic"]}'
        WHERE id=#{id}
        RETURNING id, username, password, bio, profilepic
      SQL
    )
    return {
        "id" => results.first["id"].to_i,
        "username" => results.first["username"],
        "password" => results.first["password"],
        "bio" => results.first["bio"],
        "profilepic" => results.first["profilepic"]
    }
  end
  def self.delete(id)
    results = DB.exec("DELETE FROM users WHERE id=#{id}")
    return { "deleted" => true }
  end
end
