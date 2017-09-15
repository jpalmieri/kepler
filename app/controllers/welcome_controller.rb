class WelcomeController < ApplicationController
  def index
  end

  def about
  end

  def program
  end

  def splash
    @show_splash = true
    render 'index'
  end
end
