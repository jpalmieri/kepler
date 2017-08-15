class MusicController < ApplicationController
  def index
    event_info = CONTENT
    @musicians = event_info[:music]
  end
end
