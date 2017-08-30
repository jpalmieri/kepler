module ApplicationHelper
  def bio_photo(photo_name)
    begin
      image_tag("bio/#{photo_name}")
    rescue Sprockets::Rails::Helper::AssetNotFound
      return nil
    end
  end
end
