import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <p>
      footer works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
