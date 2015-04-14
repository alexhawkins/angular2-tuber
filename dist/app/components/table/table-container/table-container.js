System.register("app/components/table/table-container/table-container", ["angular2/angular2", "app/components/table/table-main/table-main", "app/components/table/table-filter/table-filter", "app/stores/TuberStore"], function($__export) {
  "use strict";
  var __moduleName = "app/components/table/table-container/table-container";
  var Component,
      Template,
      TableMain,
      TableFilter,
      TuberStore,
      TableContainer;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      Template = $__m.Template;
    }, function($__m) {
      TableMain = $__m.TableMain;
    }, function($__m) {
      TableFilter = $__m.TableFilter;
    }, function($__m) {
      TuberStore = $__m.TuberStore;
    }],
    execute: function() {
      'use strict';
      TableContainer = $__export("TableContainer", (function() {
        var TableContainer = function TableContainer(tuberService) {
          this.tuberService = tuberService;
        };
        return ($traceurRuntime.createClass)(TableContainer, {}, {});
      }()));
      Object.defineProperty(TableContainer, "annotations", {get: function() {
          return [new Component({
            selector: 'table-container',
            services: [TuberStore]
          }), new Template({
            url: 'app/components/table/table-container/table-container.html',
            directives: [TableMain, TableFilter]
          })];
        }});
      Object.defineProperty(TableContainer, "parameters", {get: function() {
          return [[TuberStore]];
        }});
    }
  };
});
