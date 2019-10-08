import {Component, Input, OnInit} from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-table-paging',
  templateUrl: './table-paging.component.html',
  styleUrls: ['./table-paging.component.scss']
})
export class TablePagingComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('pageNum') pageNum: string;
  // tslint:disable-next-line:no-input-rename
  @Input('pageTotal') pageTotal: string;
  constructor() { }

  ngOnInit() {
    $('.table-paging .div-left .paging-num').html(this.pageNum);
    $('.table-paging .div-left .paging-total').html(this.pageTotal);
  }

}
