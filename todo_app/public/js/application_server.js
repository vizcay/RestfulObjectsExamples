// Generated by CoffeeScript 1.11.1
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  $((function(_this) {
    return function() {
      return _this.ApplicationServer = (function(superClass) {
        extend(ApplicationServer, superClass);

        function ApplicationServer() {
          _this.fixtures_created = bind(_this.fixtures_created, this);
          _this.create_fixtures = bind(_this.create_fixtures, this);
          _this.try_to_connect = bind(_this.try_to_connect, this);
          return ApplicationServer.__super__.constructor.apply(this, arguments);
        }

        ApplicationServer.prototype.initialize = function() {
          if (localStorage.getItem("currentServer") != null) {
            return this.set("currentServer", localStorage.getItem("currentServer"));
          } else {
            return this.set("currentServer", location.protocol + "//" + location.hostname + (location.port ? ':' + location.port : '') + "/restful_objects");
          }
        };

        ApplicationServer.prototype.defaults = {
          connected: false
        };

        ApplicationServer.prototype.try_to_connect = function(server, options) {
          return $.ajax(server + "/services/Application", {
            success: (function(_this) {
              return function() {
                _this.set('currentServer', server);
                _this.set('connected', true);
                localStorage.setItem("currentServer", server);
                return options != null ? typeof options.success === "function" ? options.success() : void 0 : void 0;
              };
            })(this),
            error: (function(_this) {
              return function() {
                return options != null ? typeof options.error === "function" ? options.error() : void 0 : void 0;
              };
            })(this)
          });
        };

        ApplicationServer.prototype.create_fixtures = function() {
          return $.ajax({
            url: (this.get('currentServer')) + "/services/Application/actions/create_fixtures/invoke",
            success: function() {
              return app.navigate('dashboard', {
                trigger: true
              });
            }
          });
        };

        ApplicationServer.prototype.fixtures_created = function() {
          var result;
          result = false;
          $.ajax((this.get('currentServer')) + "/services/Application/actions/fixtures_created/invoke", {
            async: false,
            success: (function(_this) {
              return function(data) {
                return result = JSON.parse(data).result.value === 'true';
              };
            })(this)
          });
          return result;
        };

        return ApplicationServer;

      })(Backbone.Model);
    };
  })(this));

}).call(this);
