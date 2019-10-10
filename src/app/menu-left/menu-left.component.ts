import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';

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
    private service: AppService
  ) { }

  ngOnInit() {
    this.initConstructor();
    this.queryTestWebList(false);
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

  queryTestWebList(flag: boolean) {
    if (flag) { this.pageNum = 1; }
    const sqValue = $('.query-condition-sq').val().trim() === '' ? 'FFFFFFFF' : $('.query-condition-sq').val().trim();
    const numValue = $('.query-condition-num').val().trim() === '' ? 'FFFFFFFF' : $('.query-condition-num').val().trim();
    const typeValue = $('.query-condition-type').val().trim() === '' ? 'FFFFFFFF' : $('.query-condition-type').val().trim();
    const nameValue = $('.query-condition-name').val().trim() === '' ? 'FFFFFFFF' : $('.query-condition-name').val().trim();
    const urlParams = sqValue + '/' +
      numValue + '/' + typeValue + '/' + nameValue + '/' + this.rowNum + '/' + this.pageNum;
    this.service.queryTestWebListHttp(urlParams).subscribe(
      dataJson => {
        const bodyJson = this.dataHanlde(dataJson);
        if (bodyJson.list != null) {
          if (this.isEmptyObject(bodyJson.list)) {
            this.testWebListJson = bodyJson.list;
            this.pageTotal = Math.ceil(+bodyJson.total / + this.rowNum);
          }
        }
      },
      error => {

      }
    );
  }

  clearQueryCondition() {
    $('.query-condition-sq').val('');
    $('.query-condition-num').val('');
    $('.query-condition-type').val('');
    $('.query-condition-name').val('');
  }

  isEmptyObject(obj: any) {
    // tslint:disable-next-line:forin
    for (const name in obj) {
      return true;
    }
    return false;
  }

  private dataHanlde(data: any) {
    const body = data['_body'];
    return JSON.parse(body);
  }

  queryTestWebListPre() {
    if (this.pageNum > 1) {
      this.pageNum = this.pageNum - 1;
      this.queryTestWebList(false);
    }
  }

  queryTestWebListNext() {
    if (this.pageNum < this.pageTotal) {
      this.pageNum = this.pageNum + 1;
      this.queryTestWebList(false);
    }
  }
}
