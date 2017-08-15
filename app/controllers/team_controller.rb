class TeamController < ApplicationController
  def index
    event_info = CONTENT
    @team_members = event_info[:team]
  end
end
