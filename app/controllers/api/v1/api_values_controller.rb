class Api::V1::ApiValuesController < ApplicationController
  def index
  end

  def create
    # for each ApiService.fetch_values(ApiValue.stock.name)
    # ApiValue.save!
    
  end

  private

    def value_params
      params.require(:value).permit(:stock_id, :date, :time, :price, :volume, :datetime)
    end

end