System.register("app/components/table/table-row/table-row", ["angular2/angular2", "app/stores/TuberStore"], function($__export) {
  "use strict";
  var __moduleName = "app/components/table/table-row/table-row";
  var Component,
      Template,
      If,
      TuberStore,
      TableRow;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      Template = $__m.Template;
      If = $__m.If;
    }, function($__m) {
      TuberStore = $__m.TuberStore;
    }],
    execute: function() {
      TableRow = $__export("TableRow", (function() {
        var TableRow = function TableRow(tuberService, moment) {
          this.tuberService = tuberService;
        };
        return ($traceurRuntime.createClass)(TableRow, {}, {});
      }()));
      Object.defineProperty(TableRow, "annotations", {get: function() {
          return [new Component({
            selector: 'table-row',
            services: [TuberStore],
            bind: {
              'video': 'video',
              'views': 'views',
              'created': 'created',
              'link': 'link'
            }
          }), new Template({
            url: 'app/components/table/table-row/table-row.html',
            directives: [If]
          })];
        }});
      Object.defineProperty(TableRow, "parameters", {get: function() {
          return [[TuberStore], [moment]];
        }});
    }
  };
});
