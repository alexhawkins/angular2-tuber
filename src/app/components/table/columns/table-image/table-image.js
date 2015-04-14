import {Component, Template} from 'angular2/angular2';

import {TuberStore} from 'app/stores/TuberStore'

@Component({
  selector: 'table-image',
  services: [
    TuberStore
  ]
})
@Template({
  url: 'app/components/table/columns/table-image/table-image.html'
})
export class TableImage {
  tuberService: TuberStore;

  constructor(tuberService: TuberStore) {
    this.tuberService = tuberService;
  }

}