import {Component, Template} from 'angular2/angular2';
import {TableCreated} from 'app/components/table/columns/table-created/table-created';
import {TableTitle} from 'app/components/table/columns/table-title/table-title';
import {TableImage} from 'app/components/table/columns/table-image/table-image';
import {TableViews} from 'app/components/table/columns/table-views/table-views';

import {TuberStore} from 'app/stores/TuberStore'

@Component({
  selector: 'table table-header',
  services: [
    TuberStore
  ]
})
@Template({
  url: 'app/components/table/table-header/table-header.html',
  directives: [
    TableCreated,
    TableTitle,
    TableImage,
    TableViews
  ]
})
export class TableHeader {
  tuberService: TuberStore;

  constructor(tuberService: TuberStore) {
    this.tuberService = tuberService;
  }

  getOrderBy(type){
    return this.tuberService.state[type];
  }

}