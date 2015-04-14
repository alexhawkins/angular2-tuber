System.register("app/components/table/table-filter/table-filter", ["angular2/angular2", "app/stores/TuberStore"], function($__export) {
  "use strict";
  var __moduleName = "app/components/table/table-filter/table-filter";
  var Component,
      Template,
      TuberStore,
      keymap,
      TableFilter;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      Template = $__m.Template;
    }, function($__m) {
      TuberStore = $__m.TuberStore;
    }],
    execute: function() {
      keymap = {enter: 13};
      TableFilter = $__export("TableFilter", (function() {
        var TableFilter = function TableFilter(tuberService) {
          this.tuberService = tuberService;
        };
        return ($traceurRuntime.createClass)(TableFilter, {
          preventReload: function($event) {
            if ($event.which === keymap.enter) {
              $event.preventDefault();
            }
          },
          changeFilter: function($event) {
            if ($event.which === keymap.enter) {
              $event.preventDefault();
            }
            var query = $event.target.value.trim().toLowerCase();
            this.tuberService.update(query);
          }
        }, {});
      }()));
      Object.defineProperty(TableFilter, "annotations", {get: function() {
          return [new Component({
            selector: 'table-filter',
            services: [TuberStore]
          }), new Template({url: 'app/components/table/table-filter/table-filter.html'})];
        }});
      Object.defineProperty(TableFilter, "parameters", {get: function() {
          return [[TuberStore]];
        }});
    }
  };
});
