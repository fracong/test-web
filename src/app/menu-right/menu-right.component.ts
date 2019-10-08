import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
declare let $: any;

@Component({
  selector: 'app-menu-right',
  templateUrl: './menu-right.component.html',
  styleUrls: ['./menu-right.component.scss']
})
export class MenuRightComponent implements OnInit {

  windowHeightRight: number = $(window).height();

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
}
