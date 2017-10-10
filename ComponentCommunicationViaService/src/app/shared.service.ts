import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SharedService {

  constructor() {
  }


  private data = new Subject<string>();

  data$ = this.data.asObservable();

  publishData(_data: string) {
    this.data.next(_data);
  }

}
