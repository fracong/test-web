import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit {
  ifVisible = false;
  ifOneFocusCLass = false;
  oneValueList = ['aaaaa', 'bbbbb', 'ccccc', 'ddddd', 'eeeee', 'fffff'];

  constructor() { }

  ngOnInit() {
    this.inputOneValue(this.oneValueList[0]);
  }

  changeIfVisible() {
    this.ifOneFocusCLass = true;
    if (this.ifVisible) {
      this.ifVisible = false;
    } else {
      this.ifVisible = true;
    }
  }

  changeFocusFalse() {
    this.ifOneFocusCLass = false;
    setTimeout(() => {
      this.ifVisible = false;
    }, 200);
  }

  changeFocusTrue() {
    this.ifOneFocusCLass = true;
    setTimeout(() => {
      this.ifVisible = true;
    }, 200);
  }

  inputOneValue(value: string) {
    $('.query-group input.item-shop-floor').val(value);
  }
}
