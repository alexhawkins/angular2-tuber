System.register("app/components/table/columns/table-title/table-title", ["angular2/angular2", "app/stores/TuberStore"], function($__export) {
  "use strict";
  var __moduleName = "app/components/table/columns/table-title/table-title";
  var Component,
      Template,
      If,
      TuberStore,
      TableTitle;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      Template = $__m.Template;
      If = $__m.If;
    }, function($__m) {
      TuberStore = $__m.TuberStore;
    }],
    execute: function() {
      TableTitle = $__export("TableTitle", (function() {
        var TableTitle = function TableTitle(tuberService) {
          this.tuberService = tuberService;
        };
        return ($traceurRuntime.createClass)(TableTitle, {orderBy: function() {
            this.tuberService.sortBy('title');
          }}, {});
      }()));
      Object.defineProperty(TableTitle, "annotations", {get: function() {
          return [new Component({
            selector: 'table-title',
            services: [TuberStore],
            bind: {'title': 'title'}
          }), new Template({
            url: 'app/components/table/columns/table-title/table-title.html',
            directives: [If]
          })];
        }});
      Object.defineProperty(TableTitle, "parameters", {get: function() {
          return [[TuberStore]];
        }});
    }
  };
});
