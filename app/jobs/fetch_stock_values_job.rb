class FetchStockValuesJob < ApplicationJob
  queue_as :default

  def perform(stock)
    stock = ApiValue.find(ApiValue.stock_id)
    stock.api_values = ApiService.fetch_values(ApiValue.stock.name)
    stock.save!
  end

end

#values.each | m |
#  company ApiService.fetch_values(stock)
#  Api_value.save!