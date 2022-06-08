Rails.application.routes.draw do
  namespace :api do
    get '/superheroes', to:'superheroes#index'
    get '/superheroes/:id', to: 'superheroes#show' 
    post '/superheroes', to: 'superheroes#create' 
    put '/superheroes/:id', to: 'superheroes#update' 
    delete '/superheroes/:id', to: 'superheroes#destroy'
  
    get '/movies', to:'movies#index'
    get '/movies/:id', to: 'movies#show' 
    post '/movies', to: 'movies#create' 
    put '/movies/:id', to: 'movies#update' 
    delete '/movies/:id', to: 'movies#destroy'
  end

  







  
end
