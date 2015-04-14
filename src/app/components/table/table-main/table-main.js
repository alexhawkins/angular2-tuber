import {Component, Template, For, If } from 'angular2/angular2';
import {TableHeader} from 'app/components/table/table-header/table-header';
import {TableRow} from 'app/components/table/table-row/table-row';

import {TuberStore} from 'app/stores/TuberStore';
import {bind} from 'angular2/di';

@Component({
  selector: 'table-main',
  services: [
    TuberStore,
    bind(moment).toValue(moment)
  ]
})
@Template({
  url: 'app/components/table/table-main/table-main.html',

  directives: [
    TableHeader,
    TableRow,
    For,
    If
  ]
})
export class TableMain {
    tuberService: TuberStore;
    constructor(tuberService: TuberStore, moment:moment) {
        this.tuberService = tuberService;
    }
    getVideos() {
        return this.tuberService.videos;
    }

    getViews(video) {
        return this.abbrNum(video.snippet.views, 2);
    }

    getDate(video) {
        return moment(video.snippet.publishedAt).fromNow();
    }

    getVidLink(video){
        return "https://youtu.be/" + video.id.videoId;
    }

    abbrNum(number, decPlaces) {
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

}
