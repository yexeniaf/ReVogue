Rails.application.routes.draw do
  resources :users

  resources :items do
    resources :comments
  end
  
   post '/auth/login', to: 'authentications#login'
   get 'auth/verify', to: 'authentications#verify'
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
