class WelcomeController < ApplicationController
  def index
  end

  def about
  end

  def program
    @djs = CONTENT[:music]
    @performers = CONTENT[:performance]
  end

  def splash
    @show_splash = true
    render 'index'
  end
end
