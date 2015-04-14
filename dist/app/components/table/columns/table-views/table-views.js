System.register("app/components/table/columns/table-views/table-views", ["angular2/angular2", "app/stores/TuberStore"], function($__export) {
  "use strict";
  var __moduleName = "app/components/table/columns/table-views/table-views";
  var Component,
      Template,
      If,
      TuberStore,
      TableViews;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      Template = $__m.Template;
      If = $__m.If;
    }, function($__m) {
      TuberStore = $__m.TuberStore;
    }],
    execute: function() {
      TableViews = $__export("TableViews", (function() {
        var TableViews = function TableViews(tuberService) {
          this.tuberService = tuberService;
        };
        return ($traceurRuntime.createClass)(TableViews, {orderBy: function() {
            this.tuberService.sortBy('views');
          }}, {});
      }()));
      Object.defineProperty(TableViews, "annotations", {get: function() {
          return [new Component({
            selector: 'table-views',
            services: [TuberStore],
            bind: {'views': 'views'}
          }), new Template({
            url: 'app/components/table/columns/table-views/table-views.html',
            directives: [If]
          })];
        }});
      Object.defineProperty(TableViews, "parameters", {get: function() {
          return [[TuberStore]];
        }});
    }
  };
});
