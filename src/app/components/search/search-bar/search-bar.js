'use strict';
import {Component, Template} from 'angular2/angular2';
import {TuberStore} from 'app/stores/TuberStore';


var keymap = {
  enter: 13
};

@Component({
  selector: 'search-bar',
  services: TuberStore
})
@Template({
  url: 'app/components/search/search-bar/search-bar.html'
})
export class SearchBar {
  tuberService : TuberStore;
  constructor(tuberService: TuberStore) {
    this.tuberService = tuberService;
  }

  //responds to enter or tab events
  enterQuery($event) {
    // if tab or enter pressed
    if ($event.which === keymap.enter) {
      if ($event.target.value !== '') {
        this.getQuery($event);
      }
    }
  }
  //responds to click events
  getQuery($event) {
        $event.preventDefault();
        let query = document.getElementById('query').value.trim();
        if (query !== '') {
            this.tuberService.searchYouTube(query);
            document.getElementById('query').value = '';
        }
  }

}