require "test_helper"

class ValuesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get values_index_url
    assert_response :success
  end

  test "should get create" do
    get values_create_url
    assert_response :success
  end

  test "should get show" do
    get values_show_url
    assert_response :success
  end
end
