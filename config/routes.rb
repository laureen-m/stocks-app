Rails.application.routes.draw do
  # resources :stock_data
  # get 'stock_infos/index'
  get 'stocks_data/scrape'
  get 'stocks/index'
  get '/show/:id', to: 'stocks#show'
  root 'home#index'
  get '/*path' => 'home#index'
end

# I think you may want to consider namespacing these routes within api (v1). Your controllers would also need to be namespaced accordingly.
# Consider something that would look more like this for stocks:
# Rails.application.routes.draw do
#   namespace :api do
#     resources :stocks, only: %i[index show create destroy update]
#   end
# end

# See for more info:
# https://hibbard.eu/rails-react-crud-app/
# https://pamit.medium.com/todo-list-building-a-react-app-with-rails-api-7a3027907665
