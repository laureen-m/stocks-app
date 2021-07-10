class ApiService 
  require 'pry'
  
  def self.fetch_prices(ticker)
    stocks_found = client.search(keywords: ticker)
  end

  def self.client
    @client ||= Alphavantage::Client.new(key: "Y79VPJNXJXFRQEI3")
  end

end