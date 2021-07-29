class AlphaVantageApi 
  require 'pry'
  
  def self.fetch_values(ticker)
    values = AlphaVantageApi.client.stock(symbol: ticker).timeseries(type: "intraday", outputsize: "full").output["Time Series (1min)"]
  end

  def self.save_values(stock)
    data = AlphaVantageApi.fetch_values(stock.name) 
    data.map { |k, v|  ApiValue.create!(stock_id: stock.id, 
                                 price: v["4. close"], 
                                 volume: v["5. volume"], 
                                 datetime: k) }
  end

  def self.client
    @client ||= Alphavantage::Client.new(
      key: Rails.application.credentials.alphavantage_client[:api_key]
    )
  end

end

