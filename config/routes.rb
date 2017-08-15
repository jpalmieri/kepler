Rails.application.routes.draw do
  root to: 'welcome#index'
  get 'welcome/index'
  get 'team/index'
  get 'performance/index'
  get 'music/index'
end
