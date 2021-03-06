// Generated by CoffeeScript 1.11.1
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  $((function(_this) {
    return function() {
      return _this.ResourceRowView = (function(superClass) {
        extend(ResourceRowView, superClass);

        function ResourceRowView() {
          _this.on_cost_change = bind(_this.on_cost_change, this);
          _this.on_description_change = bind(_this.on_description_change, this);
          _this.on_remove = bind(_this.on_remove, this);
          _this.render = bind(_this.render, this);
          return ResourceRowView.__super__.constructor.apply(this, arguments);
        }

        ResourceRowView.prototype.events = {
          'click #remove': 'on_remove',
          'change #resource_description': 'on_description_change',
          'change #resource_cost': 'on_cost_change'
        };

        ResourceRowView.prototype.tagName = 'tr';

        ResourceRowView.prototype.template = _.template($('#resource_row_template').html());

        ResourceRowView.prototype.render = function() {
          this.$el.html(this.template(this.model.attributes));
          return this;
        };

        ResourceRowView.prototype.on_remove = function() {
          if (!this.model.isNew()) {
            this.model.collection.toDestroy.push(this.model);
          }
          return this.model.collection.remove(this.model);
        };

        ResourceRowView.prototype.on_description_change = function(event) {
          return this.model.set({
            'description': $(event.target).val()
          });
        };

        ResourceRowView.prototype.on_cost_change = function(event) {
          return this.model.set({
            'cost': $(event.target).val()
          });
        };

        return ResourceRowView;

      })(Backbone.View);
    };
  })(this));

}).call(this);
