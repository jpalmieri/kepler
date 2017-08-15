Rails.application.routes.draw do
  root to: 'welcome#index'
  get 'welcome/index'

  resources :team_members, only: [:index, :show]
  resources :performers, only: [:index, :show]
  resources :musicians, only: [:index, :show]
end
