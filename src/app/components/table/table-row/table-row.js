import {Component, Template, If} from 'angular2/angular2';
import {TuberStore} from 'app/stores/TuberStore';

@Component({
  selector: 'table-row',
  services: [
    TuberStore
  ],
  bind: {
    'video': 'video',
    'views': 'views',
    'created': 'created',
    'link':'link'
  }
})
@Template({
  url: 'app/components/table/table-row/table-row.html',
  directives: [
    If
  ]
})

export class TableRow {
  tuberService: TuberStore;

  constructor(tuberService: TuberStore, moment:moment) {
    this.tuberService = tuberService;
  }

}