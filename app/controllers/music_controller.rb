class MusicController < ApplicationController
  def index
    @musicians = CONTENT[:music]
  end

  def show
    musicians = CONTENT[:music]
    musician = musicians.select do |x|
      x[:simple_name] == params[:id]
    end
    if musician
      @musician = musician.first
    else
      flash[:error] = "team member not found"
      redirect to musicians_index
    end
  end
end
