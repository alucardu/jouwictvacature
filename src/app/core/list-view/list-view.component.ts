import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

declare var require: any;

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListViewComponent implements OnInit {

  parseString = require('xml2js').parseString;
  data: string;

  constructor(
    private _sharedService: SharedService
  ) {}

  ngOnInit() {
    this.convertXmlToJson();
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
    this.parseString(res, function (err, result) {
      data = result.rss.channel[0]
    })
    this.data = data;
  }
  
}
