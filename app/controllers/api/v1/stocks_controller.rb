require 'pry'

class Api::V1::StocksController < ApplicationController
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
  
  private

    def stock
      @stock = Stock.find(params[:id])
    end

end