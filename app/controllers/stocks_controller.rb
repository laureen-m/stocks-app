require 'pry'

class StocksController < ApplicationController
  def index
    stocks = Stock.all.order(name: :asc)
    render json: stocks
  end

  def create
  end

  def new
  end

  def show
    render json: { name: stock.name, values: stock.values }
  end

  # def display
  #  stock_name = Stock.find(params[:id])
  #  render json: stock_name
  # end
  
  private

    def stock
      @stock = Stock.find(params[:id])
    end

end