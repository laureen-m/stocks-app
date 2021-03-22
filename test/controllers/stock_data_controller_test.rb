require "test_helper"

class StockDataControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get stock_data_index_url
    assert_response :success
  end
end
