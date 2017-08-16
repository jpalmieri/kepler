Rails.application.routes.draw do
  root to: 'welcome#index'
  get 'welcome/index'
  get 'about', to: 'welcome#about'

  resources :team_members, only: [:index, :show]
  resources :performers, only: [:index, :show]
  resources :musicians, only: [:index, :show]
end
