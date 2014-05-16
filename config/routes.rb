NewAuthDemo::Application.routes.draw do
  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]

  get "/about", to: "pages#about"
  get "/home", to: "pages#home"
  get "/contact", to: "pages#contact"
  get "/history", to: "pages#history"

  root :to => "users#show"
end
