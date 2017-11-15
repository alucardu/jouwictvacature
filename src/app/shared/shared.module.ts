import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// import { FilterPipe } from '../shared/search/search.pipe';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    // FilterPipe
  ]
})
export class SharedModule { }
