Rails.application.routes.draw do
  get 'stocks/index'
  post 'stocks/create'
  get '/show/:id', to: 'stocks#show'
  root 'home#index'
  get '/*path' => 'home#index'
end
