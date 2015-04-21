System.register("app/components/search/search-bar/search-bar", ["angular2/angular2", "app/stores/TuberStore"], function($__export) {
  "use strict";
  var __moduleName = "app/components/search/search-bar/search-bar";
  var Component,
      Template,
      TuberStore,
      keymap,
      SearchBar;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      Template = $__m.Template;
    }, function($__m) {
      TuberStore = $__m.TuberStore;
    }],
    execute: function() {
      'use strict';
      keymap = {enter: 13};
      SearchBar = $__export("SearchBar", (function() {
        var SearchBar = function SearchBar(tuberService) {
          this.tuberService = tuberService;
        };
        return ($traceurRuntime.createClass)(SearchBar, {
          enterQuery: function($event) {
            if ($event.which === keymap.enter) {
              if ($event.target.value !== '') {
                this.getQuery($event);
              }
            }
          },
          getQuery: function($event) {
            $event.preventDefault();
            var query = $event.target.value.trim();
            if (query !== '') {
              this.tuberService.searchYouTube(query);
              $event.target.value !== '';
            }
          }
        }, {});
      }()));
      Object.defineProperty(SearchBar, "annotations", {get: function() {
          return [new Component({
            selector: 'search-bar',
            services: TuberStore
          }), new Template({url: 'app/components/search/search-bar/search-bar.html'})];
        }});
      Object.defineProperty(SearchBar, "parameters", {get: function() {
          return [[TuberStore]];
        }});
    }
  };
});
