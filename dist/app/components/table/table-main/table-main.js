System.register("app/components/table/table-main/table-main", ["angular2/angular2", "app/components/table/table-header/table-header", "app/components/table/table-row/table-row", "app/stores/TuberStore", "angular2/di"], function($__export) {
  "use strict";
  var __moduleName = "app/components/table/table-main/table-main";
  var Component,
      Template,
      For,
      If,
      TableHeader,
      TableRow,
      TuberStore,
      bind,
      TableMain;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      Template = $__m.Template;
      For = $__m.For;
      If = $__m.If;
    }, function($__m) {
      TableHeader = $__m.TableHeader;
    }, function($__m) {
      TableRow = $__m.TableRow;
    }, function($__m) {
      TuberStore = $__m.TuberStore;
    }, function($__m) {
      bind = $__m.bind;
    }],
    execute: function() {
      TableMain = $__export("TableMain", (function() {
        var TableMain = function TableMain(tuberService, moment) {
          this.tuberService = tuberService;
        };
        return ($traceurRuntime.createClass)(TableMain, {
          getVideos: function() {
            return this.tuberService.videos;
          },
          getViews: function(video) {
            return this.abbrNum(video.snippet.views, 2);
          },
          getDate: function(video) {
            return moment(video.snippet.publishedAt).fromNow();
          },
          getVidLink: function(video) {
            return "https://youtu.be/" + video.id.videoId;
          },
          abbrNum: function(number, decPlaces) {
            decPlaces = Math.pow(10, decPlaces);
            var abbrev = ["k", "m", "b", "t"];
            for (var i = abbrev.length - 1; i >= 0; i--) {
              var size = Math.pow(10, (i + 1) * 3);
              if (size <= number) {
                number = Math.round(number * decPlaces / size) / decPlaces;
                if ((number == 1000) && (i < abbrev.length - 1)) {
                  number = 1;
                  i++;
                }
                number += abbrev[i];
                break;
              }
            }
            return number;
          }
        }, {});
      }()));
      Object.defineProperty(TableMain, "annotations", {get: function() {
          return [new Component({
            selector: 'table-main',
            services: [TuberStore, bind(moment).toValue(moment)]
          }), new Template({
            url: 'app/components/table/table-main/table-main.html',
            directives: [TableHeader, TableRow, For, If]
          })];
        }});
      Object.defineProperty(TableMain, "parameters", {get: function() {
          return [[TuberStore], [moment]];
        }});
    }
  };
});
