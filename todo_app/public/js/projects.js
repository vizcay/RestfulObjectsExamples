// Generated by CoffeeScript 1.11.1
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  $((function(_this) {
    return function() {
      return _this.Projects = (function(superClass) {
        extend(Projects, superClass);

        function Projects() {
          _this.delete_all = bind(_this.delete_all, this);
          return Projects.__super__.constructor.apply(this, arguments);
        }

        Projects.prototype.url = function() {
          return (appServer.get('currentServer')) + "/services/Application/actions/get_projects/invoke";
        };

        Projects.prototype.model = Project;

        Projects.prototype.parse = function(response) {
          var projects;
          projects = [];
          $(response.result.value).each(function(index, value) {
            return $.ajax(value.href, {
              async: false,
              success: function(project_response) {
                return projects.push(project_response);
              }
            });
          });
          return projects;
        };

        Projects.prototype.delete_all = function() {
          return $.ajax({
            url: (appServer.get('currentServer')) + "/services/Application/actions/clear_projects/invoke",
            success: function() {
              return app.navigate('project_list', {
                trigger: true
              });
            }
          });
        };

        return Projects;

      })(Backbone.Collection);
    };
  })(this));

}).call(this);
