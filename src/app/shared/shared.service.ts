import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

  declare var require: any;
  

@Injectable()
export class SharedService {

  constructor(private http: HttpClient) { }

  loadXml() {
    return this.http.get('../../assets/1bbc5495-3872-4058-886e-aeee2a1cd52c.xml', { responseType: 'text' });
  }


}
