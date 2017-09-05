class PerformanceController < ApplicationController
  def index
    @performers = CONTENT[:performance]
  end

  def show
    performers = CONTENT[:performance]
    @performer = performers.select {|m| m[:simple_name] == params[:id]}.first()
    unless @performer
      flash[:error] = "performer not found"
      redirect_to performers_url
    end
  end
end
