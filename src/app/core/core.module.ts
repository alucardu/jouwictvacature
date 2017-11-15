import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../shared/shared.service';
import { ListViewComponent } from './list-view/list-view.component';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { FilterPipe } from '../shared/search/search.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule
  ],
  exports: [
    ListViewComponent
  ],
  declarations: [
    ListViewComponent,
    FilterPipe
  ]
})

export class CoreModule{}
