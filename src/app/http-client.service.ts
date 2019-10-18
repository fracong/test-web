import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {catchError, timeout} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  urlRoot = 'http://localhost:8892/';
  options = {
    headers: new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'}),
  };

  constructor(private http: HttpClient) { }

  queryList() {
    const url = this.urlRoot + 'testuser/queryTestWeb/list/FFFFFFFF/FFFFFFFF/FFFFFFFF/FFFFFFFF/10/1';
    return this.http.get<any>(url, this.options).pipe(
      timeout(15000),
      catchError((error) => this.handleSomeError(error))
    );
  }

  saveFormPostHttp(sq: string,
                   num: string,
                   name: string,
                   key: string,
                   value: string,
                   type: string,
                   page: string,
                   base: string,
                  ) {
    const url = this.urlRoot + 'testuser/insertTestWeb';
    const params = JSON.parse('{"sq":' + sq + ',"num":' + num + ',' +
      '"webName":' + name + ',"webKey":' + key + ',' +
      '"value":' + value + ',"webType":' + type + ',' +
      '"page":' + page + ',"base":' + base + '}');
    return this.http.post<any>(url, params, this.options).pipe(
      timeout(15000),
      catchError((error) => this.handleSomeError(error))
    );
  }

  queryJsonpList() {
    const url = this.urlRoot + 'testuser/jsonp/user/1';
    return this.http.jsonp<any>(url, 'callback').pipe(
      timeout(15000),
      catchError((error) => this.handleSomeError(error))
    );
  }

  private handleSomeError(error: any) {
    if (error.error instanceof ErrorEvent) {
      console.log(' error occurred:', error.error.message);
    } else {
      console.log(`${error.status}-${error.statusText}`);
    }
    return throwError(new Error('Server Error!'));
  }
}
