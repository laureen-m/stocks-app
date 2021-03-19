class StocksDataController < ApplicationController
  def index
  end

  def scrape
    StockData.crawl! #(:parse, url: "https://www.example.com/")
  end

end



