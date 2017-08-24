module ApplicationHelper
  def first_third(arr)
    return arr[0..arr.length/3]
  end

  def middle_third(arr)
    return arr[((arr.length/3)+1)..(arr.length/3*2)]
  end

  def last_third(arr)
    return arr[((arr.length/3*2)+1)..-1]
  end

  def bio_photo(photo_name)
    begin
      image_tag("bio/#{photo_name}")
    rescue Sprockets::Rails::Helper::AssetNotFound
      return nil
    end
  end
end
