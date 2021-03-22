class StockData < Kimurai::Base
  @name = "stock_data"
  @engine = :mechanize
  @start_urls = ["https://www.bloomberg.com/markets2/api/intraday/FLGT%3AUS?days=1&interval=1&volumeInterval=1"]
  # Other URLs to add: https://www.bloomberg.com/markets2/api/intraday/SCL%3ACN?days=1&interval=1&volumeInterval=1; https://www.bloomberg.com/markets2/api/intraday/ACB%3AUS?days=1&interval=1&volumeInterval=1; https://www.bloomberg.com/markets2/api/intraday/LSPD%3AUS?days=1&interval=1&volumeInterval=1

  def parse(response, url:, data: {})
    response.xpath("//pre").text.squish
    
    #response.xpath("//title/text()").each do |stock|
    #  item = {}

    #     item[:price] = stock.css('p').text.squish
    #    item[:volume] = stock.css('p').text.squish

    #   Stock.where(item).first
    # end
  end
end