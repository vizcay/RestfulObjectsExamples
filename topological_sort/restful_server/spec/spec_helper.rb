require 'rack/test'
require_relative '../restful_topological_sort.rb'

module Helpers
  include Rack::Test::Methods

  def app
    RestfulObjects::Router::Base
  end
end

RSpec.configure do |config|
  config.include Helpers
end

