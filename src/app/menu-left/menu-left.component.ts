import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
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
  thList: Array<string> = ['Sq', 'Num', 'Type', 'Name', 'Value', 'Key', 'Page', 'Base'];
  tdNum: Array<number> = [];
  tdArray: Array<Array<string>> = [
    ['1', '92', '3', '52', '187', '26', '41', '20'],
    ['2', '24', '11', '32', '14', '42', '21', '62'],
    ['3', '11', '41', '21', '11', '28', '51', '312'],
    ['4', '29', '61', '112', '41', '222', '31', '92'],
    ['5', '21', '17', '23', '15', '72', '12', '52'],
    ['6', '74', '81', '29', '16', '52', '1', '27'],
    ['7', '9', '41', '12', '17', '42', '31', '23'],
    ['8', '22', '5', '88', '31', '56', '1', '22'],
    ['9', '24', '56', '44', '32', '98', '2', '55'],
    ['10', '62', '76', '58', '21', '89', '3', '23']
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.initConstructor();
  }

  initConstructor() {
    const winHeght = $(window).height();
    this.leftHeight = winHeght - this.topHeight + 'px';
    this.topHeightStr = this.topHeight + 'px';

    for (let i = 0; i < this.thList.length; i++) {
      this.tdNum.push(i);
    }
  }

  backIndex(){
    this.router.navigate(['/']);
  }

}
