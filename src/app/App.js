'use strict';
import {bootstrap} from 'angular2/angular2';
import {TuberApp} from 'app/components/tuber-app/tuber-app';

export function activate() {
  return bootstrap(TuberApp);
}
