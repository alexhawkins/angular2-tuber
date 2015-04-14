System.register("app/components/table/columns/table-image/table-image", ["angular2/angular2", "app/stores/TuberStore"], function($__export) {
  "use strict";
  var __moduleName = "app/components/table/columns/table-image/table-image";
  var Component,
      Template,
      TuberStore,
      TableImage;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      Template = $__m.Template;
    }, function($__m) {
      TuberStore = $__m.TuberStore;
    }],
    execute: function() {
      TableImage = $__export("TableImage", (function() {
        var TableImage = function TableImage(tuberService) {
          this.tuberService = tuberService;
        };
        return ($traceurRuntime.createClass)(TableImage, {}, {});
      }()));
      Object.defineProperty(TableImage, "annotations", {get: function() {
          return [new Component({
            selector: 'table-image',
            services: [TuberStore]
          }), new Template({url: 'app/components/table/columns/table-image/table-image.html'})];
        }});
      Object.defineProperty(TableImage, "parameters", {get: function() {
          return [[TuberStore]];
        }});
    }
  };
});
