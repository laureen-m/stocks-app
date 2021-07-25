class ApiService 
  require 'pry'
  
  def self.fetch_values(ticker)
    data = []
    value_prices = ApiService.client
            .stock(symbol: ticker)
            .timeseries(type: "intraday", outputsize: "full")
            .output["Time Series (1min)"]
            .map { |k, v| {datetime: k, price: v["4. close"]} }
    value_volumes = ApiService.client
            .stock(symbol: ticker)
            .timeseries(type: "intraday", outputsize: "full")
            .output["Time Series (1min)"]
            .map { |k, v| {datetime: k, volume: v["5. volume"]} }
  end

  def self.client
    @client ||= Alphavantage::Client.new(
      key: Rails.application.credentials.alphavantage_client[:api_key]
    )
  end

end


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
=end