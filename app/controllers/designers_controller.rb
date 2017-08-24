class DesignersController < ApplicationController
  def index
    @designers = CONTENT[:designers]
  end

  def show
    designers = CONTENT[:designers]
    @designer = designers.select {|m| m[:simple_name] == params[:id]}.first()
    unless @designer
      flash[:error] = "designer not found"
      redirect to designers_index
    end
  end
end
