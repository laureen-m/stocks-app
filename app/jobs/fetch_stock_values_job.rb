class FetchStockValuesJob < ApplicationJob
  queue_as :default

  def perform(api_value.stock_id)
    value = api_value.find(stock_id)
    value.prices = ApiService.fecth_prices(api_value.stock_id)
    value.volumes = ApiService.fetch_volumes(api_value.stock_id)
    value.save!
  end

end
