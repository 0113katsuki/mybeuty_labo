Rails.application.routes.draw do

  #root 'beauties#show'
  #root 'beauties#show_second'
  root 'beauties#show_third'

  get '/test', to: 'beauties#show_second'


end
