import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  urlRoot = 'http://localhost:8892/';

  constructor(private http: Http) { }

  queryTestWebListHttp(urlParams: string) {
    const url = this.urlRoot + 'testuser/queryTestWeb/list/' + urlParams;
    return this.http.get(url);
  }
}
