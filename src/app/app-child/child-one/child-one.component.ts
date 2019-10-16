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
  ifTwoLableSmall = false;
  ifTwoFocusCLass = false;
  oneValueList = ['aaaaa', 'bbbbb', 'ccccc', 'ddddd', 'eeeee', 'fffff'];

  constructor() { }

  ngOnInit() {
    this.inputOneValue(this.oneValueList[0]);
  }

  changeOneIfVisible() {
    this.ifOneFocusCLass = true;
    if (this.ifVisible) {
      this.ifVisible = false;
    } else {
      this.ifVisible = true;
    }
  }

  changeOneFocusFalse() {
    this.ifOneFocusCLass = false;
    setTimeout(() => {
      this.ifVisible = false;
    }, 200);
  }

  changeOneFocusTrue() {
    this.ifOneFocusCLass = true;
    setTimeout(() => {
      this.ifVisible = true;
    }, 200);
  }

  inputOneValue(value: string) {
    $('.fc-group input.item-shop-floor').val(value);
  }

  changeTwoFocusTrue() {
    this.ifTwoLableSmall = true;
    this.ifTwoFocusCLass = true;
  }

  changeTwoFocusFalse() {
    this.ifTwoFocusCLass = false;
    if ($('.item-part-number').val() === '') {
      this.ifTwoLableSmall = false;
    }
  }
}
