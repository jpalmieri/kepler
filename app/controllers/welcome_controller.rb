class WelcomeController < ApplicationController
  def index
    event_info = CONTENT
    @team = event_info[:team]
    @performance = event_info[:performance]
    @music = event_info[:music]
  end
end
