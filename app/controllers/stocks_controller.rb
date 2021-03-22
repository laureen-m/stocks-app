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
    render json: stock
  end
  
  private

    def stock
      @stock = Stock.find(params[:id])
    end
end
