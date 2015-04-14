'use strict';
import {Component, Template} from 'angular2/angular2';
import {TableMain} from 'app/components/table/table-main/table-main';
import {TableFilter} from 'app/components/table/table-filter/table-filter';

import {TuberStore} from 'app/stores/TuberStore'

@Component({
  selector: 'table-container',
  services: [
    TuberStore
  ]
})
@Template({
  url: 'app/components/table/table-container/table-container.html',
  directives: [
    TableMain,
    TableFilter
  ]
})
export class TableContainer {
  tuberService: TuberStore;

  constructor(tuberService: TuberStore) {
    this.tuberService = tuberService;
  }
}