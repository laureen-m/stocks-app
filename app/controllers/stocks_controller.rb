require 'pry'

class StocksController < ApplicationController
  def index
    stocks = Stock.all.order(name: :asc)
    render json: stocks
    # ^ Just renaming for clarity.
  end

  def create
  end

  def new
  end

  def show
    # binding.pry
    # Using your original code, if you put a binding.pry here, you can see that the endpoint isn't being hit yet when visiting the http://localhost:3000/stock/1 page.
    render json: stock
  end
  
  private

    def stock
      @stock = Stock.find(params[:id])
    end
end
