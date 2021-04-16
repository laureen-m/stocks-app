class StocksValue < ApplicationRecord
  belongs_to :stock

  # @name = "stocks_value"
  # @engine = :mechanize
  # @start_urls = ["http://example.com"]
  # Other URLs to add: https://www.bloomberg.com/markets2/api/intraday/FLGT%3AUS?days=1&interval=1&volumeInterval=1; https://www.bloomberg.com/markets2/api/intraday/SCL%3ACN?days=1&interval=1&volumeInterval=1; https://www.bloomberg.com/markets2/api/intraday/ACB%3AUS?days=1&interval=1&volumeInterval=1; https://www.bloomberg.com/markets2/api/intraday/LSPD%3AUS?days=1&interval=1&volumeInterval=1

  # def parse(response, url:, data: {})
  #   item = {}
  
  #   item[:date] = response.xpath('//h1').text.squish
  #   item[:price] = response.xpath('//p').text.squish
  #   item[:volume] = response.xpath('//h1').text.squish

    # save_to "data.json", item, format: :json
  # end
end
