// Generated by CoffeeScript 1.11.1
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  $((function(_this) {
    return function() {
      return _this.ResourcesTableView = (function(superClass) {
        extend(ResourcesTableView, superClass);

        function ResourcesTableView() {
          _this.on_append = bind(_this.on_append, this);
          _this.render = bind(_this.render, this);
          _this.initialize = bind(_this.initialize, this);
          return ResourcesTableView.__super__.constructor.apply(this, arguments);
        }

        ResourcesTableView.prototype.initialize = function() {
          ResourcesTableView.__super__.initialize.apply(this, arguments);
          this.collection.on('sync', (function(_this) {
            return function() {
              return _this.render();
            };
          })(this));
          this.collection.on('add', (function(_this) {
            return function() {
              return _this.render();
            };
          })(this));
          return this.collection.on('remove', (function(_this) {
            return function() {
              return _this.render();
            };
          })(this));
        };

        ResourcesTableView.prototype.events = {
          'click #append': 'on_append'
        };

        ResourcesTableView.prototype.template = _.template($('#resources_table_template').html());

        ResourcesTableView.prototype.render = function() {
          this.$el.html(this.template());
          $.each(this.collection.models, (function(_this) {
            return function(index, resource) {
              var view;
              view = new ResourceRowView({
                model: resource
              });
              return _this.$el.find('tbody').append(view.render().el);
            };
          })(this));
          return this;
        };

        ResourcesTableView.prototype.on_append = function() {
          return this.collection.add(new Resource);
        };

        return ResourcesTableView;

      })(Backbone.View);
    };
  })(this));

}).call(this);
