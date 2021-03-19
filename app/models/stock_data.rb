class StockData < Kimurai::Base
  @name = "stock_data"
  @engine = :mechanize
  # @start_urls = ["https://www.marketwatch.com/investing/stock/scl?countrycode=ca&mod=over_search"]
  @start_urls = ["https://www.bloomberg.com/markets2/api/intraday/FLGT%3AUS?days=1&interval=1&volumeInterval=1"]


  # def self.process(url)
  #  @start_urls = [url]
  #  self.crawl!
  # end

  def parse(response, url:, data: {})
    # blogs = []
    # info = response.xpath("//h1[@class='company__name']").text.squish
    response.xpath("//pre").text.squish
    
    #response.xpath("//title/text()").each do |stock|
    #  item = {}

    #     item[:price] = stock.css('p').text.squish
    #    item[:volume] = stock.css('p').text.squish

    #   Stock.where(item).first
    # end
  end



end