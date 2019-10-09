import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Http } from '@angular/http';

declare let $: any;
@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.scss']
})
export class MenuLeftComponent implements OnInit {

  leftHeight = '';
  topHeight = 78;
  topHeightStr = '';
  thList: Array<string> = ['Sq', 'Num', 'Type', 'Name', 'Value', 'Key', 'Page', 'Base', 'Btns'];
  tdNum: Array<number> = [];
  testWebListJson = '';
  pageNum = 1;
  pageTotal = 0;
  rowNum = 10;
  constructor(
    private router: Router,
    private http: Http
  ) { }

  ngOnInit() {
    this.initConstructor();
    this.queryTestWebList();
  }

  initConstructor() {
    const winHeght = $(window).height();
    this.leftHeight = winHeght - this.topHeight + 'px';
    this.topHeightStr = this.topHeight + 'px';

    for (let i = 0; i < this.thList.length; i++) {
      this.tdNum.push(i);
    }
  }

  backIndex() {
    this.router.navigate(['/']);
  }

  queryTestWebList() {
    const url = 'http://localhost:8892/testuser/queryTestWeb/list/' + this.rowNum + '/' + this.pageNum;
    this.http.get(url).subscribe(
      dataJson => {
        const bodyJson = this.dataHanlde(dataJson);
        this.testWebListJson = bodyJson.list;
        this.pageTotal = Math.ceil(+bodyJson.total / + this.rowNum);
      },
      error => {

      }
    );
  }

  private dataHanlde(data: any) {
    const body = data['_body'];
    return JSON.parse(body);
  }

  queryTestWebListPre() {
    if (this.pageNum > 1) {
      this.pageNum = this.pageNum - 1;
      this.queryTestWebList();
    }
  }

  queryTestWebListNext() {
    if (this.pageNum < this.pageTotal) {
      this.pageNum = this.pageNum + 1;
      this.queryTestWebList();
    }
  }
}
