import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-mode-two',
  templateUrl: './mode-two.component.html',
  styleUrls: ['./mode-two.component.scss']
})
export class ModeTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addMsg2P(msg: string) {
    $('.show-p').html(msg);
  }
}
