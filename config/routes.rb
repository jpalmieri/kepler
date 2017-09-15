Rails.application.routes.draw do
  root to: 'welcome#splash'
  get 'welcome/splash'
  get 'index', to: 'welcome#index'
  get 'about', to: 'welcome#about'
  get 'program', to: 'welcome#program'

  resources :crew, as: 'crew_members', only: [:index, :show]
  resources :performance, as: 'performers', only: [:index, :show]
  resources :music, as: 'musicians', only: [:index, :show]
  resources :designers, only: [:index, :show]
end
