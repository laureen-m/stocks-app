class Api::V1::ApiValuesController < ApplicationController
  def index
  end

  def create
    # for each ApiService.fetch_values(ApiValue.stock.name)
    # ApiValue.save!
    value = ApiValue.create!(value_params)
    if value
      render json: value
    else
      render json: value.errors
    end
  end

  private

    def value_params
      params.require(:value).permit(:stock_id, :date, :time, :price, :volume, :datetime)
    end

end