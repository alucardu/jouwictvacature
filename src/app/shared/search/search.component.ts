import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { FilterPipe } from './search.pipe'
import { SharedService } from '../shared.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  queryString: String;

  constructor(
    private _sharedService: SharedService
  ){}

  ngOnInit() {
  }

  passValue(queryString: string) {
    this._sharedService.passSearchValue(queryString);
  }

}
