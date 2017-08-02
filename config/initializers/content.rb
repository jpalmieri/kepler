require 'yaml'

# ERB.new allows us to use ERB tags in the YAML
yaml_data = YAML::load(ERB.new(IO.read(File.join(Rails.root, 'config', 'content.yml'))).result)

# Merge the "default" section with the section for this environment
content = yaml_data["default"]

begin
  content.merge! yaml_data[Rails.env]
rescue TypeError
  # nothing specified for this environment; do nothing
end

# Pass to a HashWithIndifferentAccess so that we can use symbols (CONTENT[:key])
CONTENT = HashWithIndifferentAccess.new(content)
