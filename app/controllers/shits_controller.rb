class ShitsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    render json: Shit.all
  end
  def show
    render json: Shit.find(params["id"]) 
  end
  def create
    render json: Shit.create(params["shit"])
  end
  def delete
    render json: Shit.delete(params["id"])
  end
  def update
    render json: Shit.update(params["id"], params["shit"])
  end
end
