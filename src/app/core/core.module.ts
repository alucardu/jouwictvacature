import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../shared/shared.service';
import { ListViewComponent } from './list-view/list-view.component';
import { NgxPaginationModule } from 'ngx-pagination'; 

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule
  ],
  exports: [
    ListViewComponent
  ],
  declarations: [
    ListViewComponent]
})

export class CoreModule{}
