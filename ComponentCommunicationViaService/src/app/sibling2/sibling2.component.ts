import {Component, OnInit} from '@angular/core';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html'
})
export class Sibling2Component {
  data;
  msg;

  constructor(public _sharedService: SharedService) {
    const _self = this;

    this._sharedService.data$.subscribe(res => {
      console.log('Rxcd from sibling1: ' + res);
      _self.data = res;
    });
  }

}
