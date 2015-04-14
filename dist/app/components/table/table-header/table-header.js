System.register("app/components/table/table-header/table-header", ["angular2/angular2", "app/components/table/columns/table-created/table-created", "app/components/table/columns/table-title/table-title", "app/components/table/columns/table-image/table-image", "app/components/table/columns/table-views/table-views", "app/stores/TuberStore"], function($__export) {
  "use strict";
  var __moduleName = "app/components/table/table-header/table-header";
  var Component,
      Template,
      TableCreated,
      TableTitle,
      TableImage,
      TableViews,
      TuberStore,
      TableHeader;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      Template = $__m.Template;
    }, function($__m) {
      TableCreated = $__m.TableCreated;
    }, function($__m) {
      TableTitle = $__m.TableTitle;
    }, function($__m) {
      TableImage = $__m.TableImage;
    }, function($__m) {
      TableViews = $__m.TableViews;
    }, function($__m) {
      TuberStore = $__m.TuberStore;
    }],
    execute: function() {
      TableHeader = $__export("TableHeader", (function() {
        var TableHeader = function TableHeader(tuberService) {
          this.tuberService = tuberService;
        };
        return ($traceurRuntime.createClass)(TableHeader, {getOrderBy: function(type) {
            return this.tuberService.state[type];
          }}, {});
      }()));
      Object.defineProperty(TableHeader, "annotations", {get: function() {
          return [new Component({
            selector: 'table table-header',
            services: [TuberStore]
          }), new Template({
            url: 'app/components/table/table-header/table-header.html',
            directives: [TableCreated, TableTitle, TableImage, TableViews]
          })];
        }});
      Object.defineProperty(TableHeader, "parameters", {get: function() {
          return [[TuberStore]];
        }});
    }
  };
});
