System.register("app/App", ["angular2/angular2", "app/components/tuber-app/tuber-app"], function($__export) {
  "use strict";
  var __moduleName = "app/App";
  var bootstrap,
      TuberApp;
  function activate() {
    return bootstrap(TuberApp);
  }
  $__export("activate", activate);
  return {
    setters: [function($__m) {
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      TuberApp = $__m.TuberApp;
    }],
    execute: function() {
      'use strict';
    }
  };
});
