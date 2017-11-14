import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../shared/shared.service';
import { ListViewComponent } from './list-view/list-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ListViewComponent
  ],
  declarations: [ListViewComponent]
})

export class CoreModule{}
