import {Component, Template, If} from 'angular2/angular2';

import {TuberStore} from 'app/stores/TuberStore'

@Component({
  selector: 'table-title',
  services: [
    TuberStore
  ],
  bind: {
    'title': 'title'
  }
})
@Template({
  url: 'app/components/table/columns/table-title/table-title.html',
  directives: [ If ]
})
export class TableTitle {
    tuberService: TuberStore;

    constructor(tuberService: TuberStore) {
        this.tuberService = tuberService;
    }

    orderBy() {
        this.tuberService.sortBy('title');
    }

}
