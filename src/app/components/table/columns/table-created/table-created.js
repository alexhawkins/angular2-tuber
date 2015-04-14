import {Component, Template, If} from 'angular2/angular2';

import {TuberStore} from 'app/stores/TuberStore'

@Component({
  selector: 'table-created',
  services: [
    TuberStore
  ],
  bind: {
    'created': 'created'
  }
})
@Template({
  url: 'app/components/table/columns/table-created/table-created.html',
  directives: [If]
})
export class TableCreated {
    tuberService: TuberStore;

    constructor(tuberService: TuberStore) {
        this.tuberService = tuberService;
    }
    orderBy() {
        this.tuberService.sortBy('publishedAt');
    }

}
