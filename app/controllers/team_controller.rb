class TeamController < ApplicationController
  def index
    @team_members = CONTENT[:team]
  end

  def show
    team_members = CONTENT[:team]
    @team_member = team_members.select {|m| m[:simple_name] == params[:id]}.first()
    unless @team_member
      flash[:error] = "team member not found"
      redirect to team_members_index
    end
  end
end
