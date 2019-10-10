import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

import {ModeTwoComponent} from '../modal/mode-two/mode-two.component';
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
    private router: Router
  ) { }

  ngOnInit() {
  }

  backIndex() {
    this.router.navigate(['/']);
  }

  initWindowsHeight() {
    this.windowHeightRight = $(window).height();
  }

  ShowP() {
    this.modeTwo.addMsg2P('hahaha');
  }
}
