let state = {
    videos: [],
    videoClone: [],
    filterBarText: '',
    views: false,
    title: true,
    publishedAt: false
};

function setState(newState) {
    console.log('SET State');
    Object.assign(state, newState);
    console.log('STATE', state);
    // Emit change
}

export class TuberStore {
    constructor() {
        this.state = state;
    }
    get videos() {
        // Immutable
        return this.state.videos.slice(0);
    }

    setData(videos) {
        videos.forEach((video) => {
            var viewCount = (Math.floor(Math.random() * 5000000) + 10000);
            video.snippet.views = viewCount;
            video.snippet.title = video.snippet.title.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
        });
        this.setVideos(videos);
    }

    setVideos(videos) {
        setState({
            videos: videos,
            videoClone: videos
        });
    }

    set videos(query) {
        query = query || "san francisco";
        let search = this.searchYouTube(query);
        setState({
            videos: search,
            videoClone: search
        });
    }

    searchYouTube(query) {
        var baseURL = "https://www.googleapis.com/youtube/v3/search?";
        var specs = "safeSearch=moderate&part=snippet&q=";
        var maxResults = "&maxResults=20&key=";
        var apiKey = "AIzaSyC4W2PcBHccKu03OiW8l5Ff8LfsgdS5C44";
        var URL = baseURL + specs + query + maxResults + apiKey;
        return axios.get(URL).then(response => {
            this.setData(response.data.items);
        });
    }

    sortBy(type) {

        var videos = this.state.videos;

        if (this.state[type]) {
            videos.sort((x, y) => {
                y = y.snippet;
                x = x.snippet;
                if (x[type] > y[type])
                    return 1;
                if (x[type] < y[type])
                    return -1;
                else
                    return 0;
            });
        } else {
            videos.reverse();
        }
        setState({
            videos: videos,
            [type]: !this.state[type]
        });
    }

    update(query) {

        if (query !== '' && query !== undefined) {
            var videos = this.state.videoClone;
            var newVideos = [];
            for (var i = 0; i < videos.length; i++) {
                var title = videos[i].snippet.title.toLowerCase();
                if (title.indexOf(query) >= 0) {
                    newVideos.push(videos[i]);
                }
            }
            setState({
                videos: newVideos
            });
        } else {
            setState({
                videos: this.state.videoClone
            });
        }

    }

}
