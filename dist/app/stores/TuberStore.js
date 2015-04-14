System.register("app/stores/TuberStore", [], function($__export) {
  "use strict";
  var __moduleName = "app/stores/TuberStore";
  var state,
      TuberStore;
  function setState(newState) {
    console.log('SET State');
    Object.assign(state, newState);
    console.log('STATE', state);
  }
  return {
    setters: [],
    execute: function() {
      state = {
        videos: [],
        videoClone: [],
        filterBarText: '',
        views: false,
        title: true,
        publishedAt: false
      };
      TuberStore = $__export("TuberStore", (function() {
        var TuberStore = function TuberStore() {
          this.state = state;
        };
        return ($traceurRuntime.createClass)(TuberStore, {
          get videos() {
            return this.state.videos.slice(0);
          },
          setData: function(videos) {
            videos.forEach((function(video) {
              var viewCount = (Math.floor(Math.random() * 5000000) + 10000);
              video.snippet.views = viewCount;
              video.snippet.title = video.snippet.title.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
            }));
            this.setVideos(videos);
          },
          setVideos: function(videos) {
            setState({
              videos: videos,
              videoClone: videos
            });
          },
          set videos(query) {
            query = query || "san francisco";
            var search = this.searchYouTube(query);
            setState({
              videos: search,
              videoClone: search
            });
          },
          searchYouTube: function(query) {
            var $__0 = this;
            var baseURL = "https://www.googleapis.com/youtube/v3/search?";
            var specs = "safeSearch=moderate&part=snippet&q=";
            var maxResults = "&maxResults=20&key=";
            var apiKey = "AIzaSyC4W2PcBHccKu03OiW8l5Ff8LfsgdS5C44";
            var URL = baseURL + specs + query + maxResults + apiKey;
            return axios.get(URL).then((function(response) {
              $__0.setData(response.data.items);
            }));
          },
          sortBy: function(type) {
            var $__2;
            var videos = this.state.videos;
            if (this.state[type]) {
              videos.sort((function(x, y) {
                y = y.snippet;
                x = x.snippet;
                if (x[type] > y[type])
                  return 1;
                if (x[type] < y[type])
                  return -1;
                else
                  return 0;
              }));
            } else {
              videos.reverse();
            }
            setState(($__2 = {}, Object.defineProperty($__2, "videos", {
              value: videos,
              configurable: true,
              enumerable: true,
              writable: true
            }), Object.defineProperty($__2, type, {
              value: !this.state[type],
              configurable: true,
              enumerable: true,
              writable: true
            }), $__2));
          },
          update: function(query) {
            if (query !== '' && query !== undefined) {
              var videos = this.state.videoClone;
              var newVideos = [];
              for (var i = 0; i < videos.length; i++) {
                var title = videos[i].snippet.title.toLowerCase();
                if (title.indexOf(query) >= 0) {
                  newVideos.push(videos[i]);
                }
              }
              setState({videos: newVideos});
            } else {
              setState({videos: this.state.videoClone});
            }
          }
        }, {});
      }()));
    }
  };
});
