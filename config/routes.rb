Rails.application.routes.draw do
  namespace :api do
    get '/superheroes', to:'superheroes#index'
    get '/superheroes', to: 'superheroes#show' 
    post '/superheroes', to: 'superheroes#create' 
    put '/superheroes', to: 'superheroes#update' 
    delete '/superheroes', to: 'superheroes#destroy'
  end
  end




end
