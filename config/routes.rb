Rails.application.routes.draw do
  namespace :api do
    get '/superheroes', to:'superheroes#index'
    get '/superheroes/:id', to: 'superheroes#show' 
    post '/superheroes', to: 'superheroes#create' 
    put '/superheroes/:id', to: 'superheroes#update' 
    delete '/superheroes/:id', to: 'superheroes#destroy'
  end







  
end
