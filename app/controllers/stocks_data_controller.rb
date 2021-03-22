require 'pry'

class StocksDataController < ApplicationController
  def index
  end

  def scrape
    # binding.pry
    # Putting a binding.pry here helps you to see in the terminal what the response of this method is.
    # scrape returns:
    # => {:spider_name=>"stock_data",
    #   :status=>:completed,
    #   :error=>nil,
    #   :environment=>"development",
    #   :start_time=>2021-03-20 17:10:19 -0400,
    #   :stop_time=>2021-03-20 17:10:21 -0400,
    #   :running_time=>1.633,
    #   :visits=>{:requests=>1, :responses=>1},
    #   :items=>{:sent=>0, :processed=>0},
    #   :events=>{:requests_errors=>{}, :drop_items_errors=>{}, :custom=>{}}}

    scraped_data = StockData.crawl!
    render json:scraped_data
    # ^ The addition of this line was needed.
    # The beginning of this article has a little more on this change to serving JSON to the client: https://dev.to/norrischebl/using-rails-api-with-react-4cg0
  end
end
