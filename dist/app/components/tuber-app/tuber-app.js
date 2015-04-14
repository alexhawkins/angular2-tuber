System.register("app/components/tuber-app/tuber-app", ["angular2/angular2", "app/components/table/table-container/table-container", "app/components/search/search-bar/search-bar", "app/stores/TuberStore"], function($__export) {
  "use strict";
  var __moduleName = "app/components/tuber-app/tuber-app";
  var Component,
      Template,
      TableContainer,
      SearchBar,
      TuberStore,
      TuberApp;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      Template = $__m.Template;
    }, function($__m) {
      TableContainer = $__m.TableContainer;
    }, function($__m) {
      SearchBar = $__m.SearchBar;
    }, function($__m) {
      TuberStore = $__m.TuberStore;
    }],
    execute: function() {
      'use strict';
      TuberApp = $__export("TuberApp", (function() {
        var TuberApp = function TuberApp(tuberStore) {
          this.tuberStore = tuberStore;
          this.initialize();
        };
        return ($traceurRuntime.createClass)(TuberApp, {initialize: function() {
            this.tuberStore.searchYouTube('skydiving');
          }}, {});
      }()));
      Object.defineProperty(TuberApp, "annotations", {get: function() {
          return [new Component({
            selector: 'tuber-app',
            services: [TuberStore]
          }), new Template({
            url: 'app/components/tuber-app/tuber-app.html',
            directives: [TableContainer, SearchBar]
          })];
        }});
      Object.defineProperty(TuberApp, "parameters", {get: function() {
          return [[TuberStore]];
        }});
    }
  };
});
