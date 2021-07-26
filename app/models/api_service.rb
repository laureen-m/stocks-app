class ApiService 
  require 'pry'
  
  def self.fetch_values(ticker)
    # This could be an AlphaVantageApi class rather than an ApiService as the methods might be quite specific to that API and you may have other APIs at some point.

    # Question 1:
    # You want to call the API as little as possible, as there may be rate limits. 
    # You should be able to call the API just once for the data you need, especially for the same stock. 
    # Once you have the data from the API, you can then do all of the mapping and parsing you may need. I wouldn't do the mapping that distinguishes between price and volume in the same method as the API call itself.
    # I think you just want to return the "raw" data in the API call itself.

    # You may have already seen this, but this YouTube video is a decent resource for importing stock prices from this gem if you have the time: https://www.youtube.com/watch?v=dSux29_wBSE
    values = client
      .stock(symbol: ticker)
      .timeseries(type: "intraday", outputsize: "full")
      .output["Time Series (1min)"]
    # binding.pry

    # So ^ is getting the data at a pretty granular degree - do you need the data to that degree? Seems like it'll be a lot of data to save in the database. Which may be fine, just curious.
    # You could use something like values on line 14 as your base data, and then do the mapping in a new method that then saves the data to the database.
    # You could also break up the additional API config on line 14 into separate methods, like timeseries and output could be broken off into their own methods.


            # .map { |k, v| [{datetime: k, price: v["4. close"]}]
    # value_volumes = ApiService.client
    #         .stock(symbol: ticker)
    #         .timeseries(type: "intraday", outputsize: "full")
    #         .output["Time Series (1min)"]
    #         .map { |k, v| [{datetime: k, volume: v["5. volume"]}] }

    # Question 2:
    # As for saving the data in the database, I believe the values table was created with the intention of tracking this information. This method was also named fetch_values. Should this data
    # live in that table? I think you want to save the data as a ActiveRecord/Ruby object with callable attributes, rather than as arrays or anything like that. I don't think you want an api_values table.
    # Once you have the values from the API, you can have a method that saves this data (ActiveRecord style), including the price and the volume, to the values table.
    # If you wanted to try saving the data as arrays, you could do that - I'm not entirely sure what that would look like or how it would work but maybe that's an alternative you could look into.
  end

  def self.client
    @client ||= Alphavantage::Client.new key: '86TVDOMS4I6A6R42'
    # This is my secret key - ignore!
  end
end

# Question 3:
# You should be able to add a button that, when clicked, calls the API and saves the data for each stock. 
# You may need to think about making sure you don't save the same data twice and creating extra rows you don't need. 
# Like if you click the button and it returns info for the past 10 days, and you click the button again one minute later, you probably don't want to save new DB entries with the same previous 10-day data.


=begin
value_prices.each do |value_price|
  value_volumes.each do |value_volume|
    price = value_price[1]
    volume = volume_price[1]
    datetime = value_price[0]
    if price[0] === volume[0] 
      data << {price, volume, datetime, stock_id
    end 
  end
#end

test_arr.map { |data| { subject: data[1], marks: data[2] } }



value_prices.map do |value_price| 
  if value_price.datetime === value_volumes.datetime
      value_price << value_volumes.volume 
  end
end
puts value_prices


if value_prices.datetime === volume_prices.datetime
  value_prices.map { |a| a << volume_prices.volume }
end




prices_hashed = Hash[prices]
volumes_hashed = Hash[volumes]
prices_and_volumes = prices_hashed.merge!(volumes_hashed) { |k,o,n| [o, n] }

# A tester # and move to api_value model?
prices_volumes_and_stock = prices_and_volumes.map { |k, v| v << stock_id }
all_data = prices_volumes_and_stock.to_a
price = all_data[]
volume = all_data[]
datetime = all_data[]
stock_id = all_data[]



value_volumes = ApiService.client
            .stock(symbol: ticker)
            .timeseries(type: "intraday", outputsize: "full")
            .output["Time Series (1min)"]
            .map { |k, v| [k, v["5. volume"]}] }
=end
