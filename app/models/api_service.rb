class ApiService 
  require 'pry'
  
  def self.fetch_prices(ticker)
    stocks_found = client.search(keywords: ticker)
    pry
    1+1
  end

  def self.client
    @client ||= Alphavantage::Client.new(key: ENV['ALPHA_VANTAGE_API_KEY'])
  end

end