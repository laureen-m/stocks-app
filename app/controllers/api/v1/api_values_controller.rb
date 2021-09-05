class Api::V1::ApiValuesController < ApplicationController
  require 'pry' 
  
  def index
  end

  def create
    api_value = AlphaVantageApi.save_values(stock)
    if api_value
      render json: api_value
    else
      render json: api_value.errors
    end
  end

  private

    def stock
      Stock.find(params[:stock_id])
    end

end