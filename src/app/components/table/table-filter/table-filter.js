import {Component, Template} from 'angular2/angular2';

import {TuberStore} from 'app/stores/TuberStore'

var keymap = {
  enter: 13
};

@Component({
  selector: 'table-filter',
  services: [
    TuberStore
  ]
})
@Template({
  url: 'app/components/table/table-filter/table-filter.html'
})
export class TableFilter {
  tuberService: TuberStore;

  constructor(tuberService: TuberStore) {
    this.tuberService = tuberService;
  }

  preventReload($event){
    if ($event.which === keymap.enter) {
        $event.preventDefault();
    }
  }

  changeFilter($event){
    if ($event.which === keymap.enter) {
        $event.preventDefault();
    }
    var query = $event.target.value.trim().toLowerCase();
    this.tuberService.update(query);
  }

}