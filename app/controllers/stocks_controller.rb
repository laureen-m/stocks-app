class StocksController < ApplicationController
  def index
    stock = Stock.all.order(name: :asc)
    render json: stock
  end

  def create
  end

  def show
    if stock
      render json: stock
    else
      render json: stock.errors
    end
  end
  
  private

    def stock
      @stock ||= Stock.find(params[:id])
    end

end