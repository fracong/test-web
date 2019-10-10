import { Injectable } from '@angular/core';
import { Http , Response, URLSearchParams, RequestOptions, Headers} from '@angular/http';
import { Observable} from 'rxjs';
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
    /*const params = new URLSearchParams();
    params.set('sq', sq);
    params.set('webNum', num);
    params.set('webName', name);
    params.set('key', key);
    params.set('value', value);
    params.set('webType', type);
    params.set('page', page);
    params.set('base', base);*/
    const params = JSON.parse('{"sq":' + sq + ',"num":' + num + ',' +
      '"webName":' + name + ',"webKey":' + key + ',' +
      '"value":' + value + ',"webType":' + type + ',' +
      '"page":' + page + ',"base":' + base + '}');
    return this.http.post(url, params, options);
  }

  private extractData(res: Response) {
    if (res['_body'] === '' || res['_body'] == null) { return null; }
    const body = res.json();
    return body || {};
  }
}
