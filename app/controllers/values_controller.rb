require 'pry'

class ValuesController < ApplicationController
  def index
  end

  def create
    # binding.pry
    value = Value.create!(value_params)
    if value
      render json: value
    else
      render json: value.errors
    end
  end

  def show
  end

  private

    def value_params
      params.require(:value).permit(:stock_id, :date, :time, :price, :volume)
    end

  #  def scrape
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
    # scraped_data = StockData.crawl! #(:parse, url: "https://www.bloomberg.com/markets2/api/intraday/FLGT%3AUS?days=1&interval=1&volumeInterval=1")
    # render json: scraped_data
  # end
end
