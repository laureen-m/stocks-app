Rails.application.routes.draw do
  # get 'values/index'
  # post 'values/create'
  # get 'values/show'
  # post 'values/scrape'
  # post 'values/save'
  # get 'stocks/index'
  # get '/show/:id', to: 'stocks#show'

  namespace :api do
    namespace :v1 do
      get 'stocks/index'
      get '/show/:id', to: 'stocks#show'
      get 'values/index'
      post 'values/create'
      get 'values/show'
    end
  end
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
