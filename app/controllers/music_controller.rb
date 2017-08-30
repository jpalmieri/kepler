class MusicController < ApplicationController
  def index
    @musicians = CONTENT[:music]
  end

  def show
    musicians = CONTENT[:music]
    @musician = musicians.select {|m| m[:simple_name] == params[:id]}.first()
    unless @musician
      flash[:error] = "musician not found"
      redirect_to musicians_url
    end
  end
end
