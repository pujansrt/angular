import {Component, OnInit} from '@angular/core';
import {SharedService} from "../shared.service";

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html'
})
export class Sibling1Component {
  data;
  msg;

  constructor(public _sharedService: SharedService) {
    const _self = this;
    this._sharedService.data$.subscribe(
      res => {
        console.log('Rxcd from sibling2: ' + res);
        _self.data = res;
      });
  }

}
