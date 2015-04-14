System.register("app/components/table/columns/table-created/table-created", ["angular2/angular2", "app/stores/TuberStore"], function($__export) {
  "use strict";
  var __moduleName = "app/components/table/columns/table-created/table-created";
  var Component,
      Template,
      If,
      TuberStore,
      TableCreated;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      Template = $__m.Template;
      If = $__m.If;
    }, function($__m) {
      TuberStore = $__m.TuberStore;
    }],
    execute: function() {
      TableCreated = $__export("TableCreated", (function() {
        var TableCreated = function TableCreated(tuberService) {
          this.tuberService = tuberService;
        };
        return ($traceurRuntime.createClass)(TableCreated, {orderBy: function() {
            this.tuberService.sortBy('publishedAt');
          }}, {});
      }()));
      Object.defineProperty(TableCreated, "annotations", {get: function() {
          return [new Component({
            selector: 'table-created',
            services: [TuberStore],
            bind: {'created': 'created'}
          }), new Template({
            url: 'app/components/table/columns/table-created/table-created.html',
            directives: [If]
          })];
        }});
      Object.defineProperty(TableCreated, "parameters", {get: function() {
          return [[TuberStore]];
        }});
    }
  };
});
