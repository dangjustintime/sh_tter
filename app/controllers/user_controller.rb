class UsersController < ApplicationController
  # connect Controller to postgreSQL database
  DB = PG.connect(host: "localhost", port: 5432, dbname: "sh_tter_development");
  def index
    results = DB.exec("SELECT * FROM users");
    return results.map do |result|
      {
        "id" => result["id"].to_i,
        "username" => result["username"],
        "password" => result["password"],
        "profilePic" => result["profilePic"],
        "header" => result["header"],
        "bio" => result["bio"]
      }
    end
  def show
  end
  def create
  end
  def delete
  end
  def update
  end
end
