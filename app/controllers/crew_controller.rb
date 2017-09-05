class CrewController < ApplicationController
  def index
    @crew_members = CONTENT[:crew]
  end

  def show
    crew_members = CONTENT[:crew]
    @crew_member = crew_members.select {|m| m[:simple_name] == params[:id]}.first()
    unless @crew_member
      flash[:error] = "crew member not found"
      redirect_to crew_members_url
    end
  end
end
