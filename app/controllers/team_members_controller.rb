class TeamMembersController < ApplicationController
  def index
    @team_members = CONTENT[:team]
  end

  def show
    team_members = CONTENT[:team]
    team_member = team_members.select do |x|
      x[:simple_name] == params[:id]
    end
    if team_member
      @team_member = team_member.first
    else
      flash[:error] = "team member not found"
      redirect to team_members_index
    end
  end
end
