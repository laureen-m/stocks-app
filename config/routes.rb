Rails.application.routes.draw do
  # resources :stock_data
  # get 'stock_infos/index'
  get 'stocks_data/scrape'
  get 'stocks/index'
  get '/show/:id', to: 'stocks#show'
  root 'home#index'
  get '/*path' => 'home#index'
end
