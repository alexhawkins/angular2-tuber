'use strict';
import {Component, Template} from 'angular2/angular2';
import {TableContainer} from 'app/components/table/table-container/table-container';
import {SearchBar} from 'app/components/search/search-bar/search-bar';
import {TuberStore} from 'app/stores/TuberStore';

@Component({
  selector: 'tuber-app',
  services: [ TuberStore ]
})
@Template({
  url: 'app/components/tuber-app/tuber-app.html',
  directives: [
    TableContainer,
    SearchBar
  ]
})
export class TuberApp {
 constructor(tuberStore: TuberStore) {
    this.tuberStore = tuberStore;
    this.initialize();
  }

  initialize(){
    this.tuberStore.searchYouTube('skydiving');
  }
}
