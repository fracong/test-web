import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-mode-two',
  templateUrl: './mode-two.component.html',
  styleUrls: ['./mode-two.component.scss']
})
export class ModeTwoComponent implements OnInit {
  baseNum = 2;
  indexNum = '10';

  constructor() { }

  ngOnInit() {
  }

  addMsg2P(msg: string) {
    $('.show-p').html(msg);
  }

  showDate(indexNum: string) {
    this.indexNum = indexNum;
  }
}
