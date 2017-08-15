class PerformanceController < ApplicationController
  def index
    event_info = CONTENT
    @performers = event_info[:performance]
  end
end
