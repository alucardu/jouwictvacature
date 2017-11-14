import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
    <p>
      search works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
