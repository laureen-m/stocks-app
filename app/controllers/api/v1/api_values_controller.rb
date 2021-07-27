class Api::V1::ApiValuesController < ApplicationController
  def index
  end

  def create
    AlphaVantageApi.save_values(ticker)
    if api_value
      render json: api_value
    else
      render json: api_value.errors
    end
  end

  private

    def api_value_params
      params.require(:api_value).permit(:stock_id, :price, :volume, :datetime)
    end

end