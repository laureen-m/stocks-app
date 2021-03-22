require 'pry'
# This require is - ahem- required to use binding.pry. You'd have to add it to the top of every file that you want to use pry in.

class StocksDataController < ApplicationController
  def index
  end

  def scrape
    # binding.pry
    # Putting a binding.pry here helps you to see in the terminal what the response of this method is.
    # If you're not already using byebug (which I'm not familiar with really), then I'd suggest using pry as a method of debugging the Ruby stuff.
    # https://learn.co/lessons/debugging-with-pry
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

    scraped_data = StockData.crawl! #(:parse, url: "https://www.example.com/")
    render json:scraped_data
    # ^ The addition of this line was needed.
    # The beginning of this article has a little more on this change to serving JSON to the client: https://dev.to/norrischebl/using-rails-api-with-react-4cg0
  end
end
