import { Injectable } from '@angular/core';
import { Http , Response, URLSearchParams, RequestOptions, Headers} from '@angular/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, map, timeout} from 'rxjs/operators';
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

  saveFormGetHttp(urlParams: string) {
    const url = this.urlRoot + 'testuser/insertTestWeb/' + urlParams;
    return this.http.get(url);
  }

  saveFormPostHttp(sq: string,
                   num: string,
                   name: string,
                   key: string,
                   value: string,
                   type: string,
                   page: string,
                   base: string,
                   ): Observable<{}> {
    const url = this.urlRoot + 'testuser/insertTestWeb/';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers});
    const params = JSON.parse('{"sq":' + sq + ',"num":' + num + ',' +
      '"webName":' + name + ',"webKey":' + key + ',' +
      '"value":' + value + ',"webType":' + type + ',' +
      '"page":' + page + ',"base":' + base + '}');
    return this.http.post(url, params, options).pipe(
      map(this.handleData),
      timeout(15000),
      catchError((error) => this.hanldeSomeError(error))
    );
  }

  private handleData(res: Response) {
    if (res['_body'] === '' || res['_body'] == null) { return null; }
    const body = res.json();
    return body || {};
  }

  private hanldeSomeError(error: any) {
    console.log(error);
    if (error.error instanceof ErrorEvent) {
      console.log(' error occurred:', error.error.message);
    } else {
      console.log(`${error.status}-${error.statusText}`);
    }
    // return throwError(new Error('Server Error!'));
    return Observable.throw('Error!');
  }
}
