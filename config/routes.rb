Rails.application.routes.draw do
  # user routes
  get 'user/index', to: 'user#index'
  get 'user/:id', to: 'user#show'
  post 'user', to: 'user#create'
  delete 'user/:id', to: 'user#delete'
  put 'user/:id', to: 'user#update'
end
