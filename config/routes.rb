Rails.application.routes.draw do
  # user routes
  get '/users', to: 'users#index'
  get '/users/:id', to: 'users#show'
  post '/users', to: 'users#create'
  delete '/users/:id', to: 'users#delete'
  put '/users/:id', to: 'users#update'
  # shit routes
  get '/shits', to: 'shits#index'
  get '/shits/:id', to: 'shits#show'
  post '/shits', to: 'shits#create'
  delete '/shits/:id', to: 'shits#delete'
  put '/shits/:id', to: 'shits#update'
end
