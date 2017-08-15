class PerformersController < ApplicationController
  def index
    @performers = CONTENT[:performance]
  end

  def show
    performers = CONTENT[:performance]
    performer = performers.select do |x|
      x[:simple_name] == params[:id]
    end
    if performer
      @performer = performer.first
    else
      flash[:error] = "team member not found"
      redirect to performers_index
    end
  end
end
