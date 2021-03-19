class StocksController < ApplicationController
  def index
    stock = Stock.all.order(name: :asc)
    render json: stock
  end

  def create
  end

  def show
      render json: stock
  end
  
  private

    def stock
      @stock = Stock.find(params[:id])
    end

end