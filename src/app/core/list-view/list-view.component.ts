import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { FilterPipe } from '../../shared/search/search.pipe'

declare var require: any;
var xml2js = require('xml2js');
var builder = new xml2js.Builder();

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListViewComponent implements OnInit {
  
  parser = new xml2js.Parser({explicitArray : false});
  data: string;
  page: number = 1;  
  queryString: String;
  list = [];
  jobs = [];

  constructor(
    private _sharedService: SharedService
  ) {}

  ngOnInit() {
    this.convertXmlToJson();
    this._sharedService.searchQuery$
      .subscribe(
        data => this.queryString = data
      );
  }

  convertXmlToJson() {
    let data;
    this._sharedService.loadXml()
      .subscribe(
        res => {
          this.setData(res)
        }
      )
  }

  setData(res) {
    let data;
    this.parser.parseString(res, function (err, result) {
      data = result.rss.channel
    })
    this.data = data;
    this.jobs = data.item    
  }
  
}
