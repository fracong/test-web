import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

import {ModeTwoComponent} from '../modal/mode-two/mode-two.component';
import {AppService} from '../app.service';
declare let $: any;

@Component({
  selector: 'app-menu-right',
  templateUrl: './menu-right.component.html',
  styleUrls: ['./menu-right.component.scss']
})
export class MenuRightComponent implements OnInit {

  windowHeightRight: number = $(window).height();
  // @ts-ignore
  @ViewChild('modeTwo')
  modeTwo: ModeTwoComponent

  constructor(
    private router: Router,
    private service: AppService
  ) { }

  ngOnInit() {
  }

  initWindowsHeight() {
    this.windowHeightRight = $(window).height();
  }

  ShowP() {
    this.modeTwo.addMsg2P('hahaha');
  }
}
