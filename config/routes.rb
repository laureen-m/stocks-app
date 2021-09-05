Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'stocks/index'
      get '/show/:id', to: 'stocks#show'
      get 'values/index'
      post 'values/create'
      get 'values/show'
      post 'api_values/create'
      # post 'values/scrape'
    end
  end
  root 'home#index'
  get '/*path' => 'home#index'
end


# Namespacing routes within api:
# A really easy way to keep your API code clean is to namespace it. Give it its own controllers and routes. It is simple, and keeps your APIs independent from the rest of your controllers.
# API controllers in /api/v1/recipes/123 will render JSON, and controllers in /recipes/123 will render HTML. Namespacing them allows to separate them and makes code cleaner.
# Interesting articles on the subject:
# https://medium.com/swlh/a-deeper-dive-into-api-versioning-938b0cb58765 
# https://collectiveidea.com/blog/archives/2013/06/13/building-awesome-rails-apis-part-1
# https://paweljw.github.io/2017/07/rails-5.1-api-app-part-3-api-versioning/ 
# https://hibbard.eu/rails-react-crud-app/
