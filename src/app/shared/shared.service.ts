import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

  declare var require: any;
  

@Injectable()
export class SharedService {

  private searchQuery = new Subject<string>();
  public searchQuery$ = this.searchQuery.asObservable();

  constructor(private http: HttpClient) { }

  loadXml() {
    return this.http.get('./assets/1bbc5495-3872-4058-886e-aeee2a1cd52c.xml', { responseType: 'text' });
  }

  passSearchValue(searchQuery: string) {
    this.searchQuery.next(searchQuery);
  }


}
