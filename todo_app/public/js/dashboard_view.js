// Generated by CoffeeScript 1.8.0
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  $((function(_this) {
    return function() {
      return _this.DashboardView = (function(_super) {
        __extends(DashboardView, _super);

        function DashboardView() {
          _this.render = __bind(_this.render, this);
          return DashboardView.__super__.constructor.apply(this, arguments);
        }

        DashboardView.prototype.template = _.template($('#dashboard_template').html());

        DashboardView.prototype.project_template = _.template($('#dashboard_project_template').html());

        DashboardView.prototype.task_template = _.template($('#dashboard_project_task_template').html());

        DashboardView.prototype.render = function() {
          this.$el.html(this.template());
          $.each(this.collection.models, (function(_this) {
            return function(index, project) {
              var column;
              column = index % 2 === 0 ? _this.$el.find('#left_column') : _this.$el.find('#right_column');
              column.append(_this.project_template(project.attributes));
              $.each(project.tasks, function(index2, task) {
                return column.find('.project_box').last().find('.tasks_container').append(_this.task_template(task.attributes));
              });
              if (project.attributes.image) {
                return column.find('.project_image').last().attr('src', 'data:image/png;base64,' + project.attributes.image);
              }
            };
          })(this));
          return this;
        };

        return DashboardView;

      })(Backbone.View);
    };
  })(this));

}).call(this);
