// Generated by CoffeeScript 1.11.1
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  $((function(_this) {
    return function() {
      return _this.Resources = (function(superClass) {
        extend(Resources, superClass);

        function Resources() {
          _this.save = bind(_this.save, this);
          return Resources.__super__.constructor.apply(this, arguments);
        }

        Resources.prototype.model = Resource;

        Resources.prototype.toDestroy = [];

        Resources.prototype.parse = function(response) {
          var resources;
          resources = [];
          $(response.value).each(function(index, value) {
            return $.ajax(value.href, {
              async: false,
              success: function(resource_response) {
                return resources.push(resource_response);
              }
            });
          });
          return resources;
        };

        Resources.prototype.save = function(owner_task) {
          $.each(this.models, function(index, resource) {
            if (resource.hasChanged()) {
              resource.save();
            }
            if (resource.isNew()) {
              return resource.save(resource.attributes, {
                success: (function(_this) {
                  return function() {
                    var payload, url;
                    payload = JSON.stringify({
                      value: {
                        href: resource.urlRoot + "/" + (resource.get('id'))
                      }
                    });
                    url = (appServer.get('currentServer')) + "/objects/Task/" + (owner_task.get('id')) + "/collections/resources";
                    return $.ajax(url, {
                      type: 'POST',
                      async: false,
                      data: payload,
                      processData: false
                    });
                  };
                })(this)
              });
            }
          });
          return $.each(this.toDestroy, function(i, resource) {
            var payload, url;
            payload = JSON.stringify({
              value: {
                href: resource.urlRoot + "/" + (resource.get('id'))
              }
            });
            url = (app.get('currentServer')) + "/objects/Task/" + (owner_task.get('id')) + "/collections/resources";
            return $.ajax(url, {
              type: 'DELETE',
              async: false,
              data: payload,
              processData: false,
              success: function() {
                return resource.destroy();
              }
            });
          });
        };

        return Resources;

      })(Backbone.Collection);
    };
  })(this));

}).call(this);
