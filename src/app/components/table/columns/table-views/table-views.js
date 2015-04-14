import {Component, Template, If} from 'angular2/angular2';

import {TuberStore} from 'app/stores/TuberStore'

@Component({
  selector: 'table-views',
  services: [
    TuberStore
  ],
  bind: {
    'views': 'views'
  }
})
@Template({
  url: 'app/components/table/columns/table-views/table-views.html',
  directives: [If]
})
export class TableViews {
    tuberService: TuberStore;

    constructor(tuberService: TuberStore) {
        this.tuberService = tuberService;
    }
    orderBy() {
        this.tuberService.sortBy('views');
    }

}
