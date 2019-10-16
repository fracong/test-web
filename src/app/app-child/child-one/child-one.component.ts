import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
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
  oneAllValueList = ['aaaaa', 'bbbbb', 'ccccc', 'ddddd', 'eeeee', 'fffff', 'asdqweq', 'aaaaa_1'];
  oneValueList = [];
  errorOneClass = false;
  constructor(private service: AppService) { }

  ngOnInit() {
    this.inputOneValue(this.oneAllValueList[0]);
  }

  changeOneIfVisible() {
    this.ifOneFocusCLass = true;
    if (this.ifVisible) {
      this.ifVisible = false;
    } else {
      if (this.oneValueList.length > 0) {
        this.ifVisible = true;
      }
    }
    this.initPanelList(false);
    this.changeOneBorderColor();
  }

  changeOneFocusFalse() {
    this.ifOneFocusCLass = false;
    setTimeout(() => {
      this.ifVisible = false;
    }, 200);
    this.changeOneBorderColor();
  }

  changeOneFocusTrue() {
    this.ifOneFocusCLass = true;
    setTimeout(() => {
      if (this.oneValueList.length > 0) {
        this.ifVisible = true;
      }
    }, 200);
    this.errorOneClass = false;
  }

  inputOneValue(value: string) {
    $('.item-shop-floor').val(value);
    this.changeOneBorderColor();
  }

  initPanelList(flag: boolean) {
    const shopFloorId = $('.item-shop-floor').val();
    if (shopFloorId === '') {
      this.oneValueList = this.oneAllValueList;
      if (flag) {
        this.ifVisible = true;
      }
    } else {
      const oneValueListTmp = [];
      for (const oneValue of this.oneAllValueList) {
        if (oneValue.indexOf(shopFloorId) !== -1) {
          oneValueListTmp.push(oneValue);
        }
      }
      if (oneValueListTmp.length > 0) {
        this.oneValueList = oneValueListTmp;
        if (flag) {
          this.ifVisible = true;
        }
      } else {
        this.oneValueList = [];
        if (flag) {
          this.ifVisible = false;
        }
      }
    }
  }

  changeOneBorderColor() {
    setTimeout(() => {
      const shopFloorId = $('.item-shop-floor').val();
      if (!this.ifVisible &&
        (shopFloorId === '' || !this.service.checkIfContainArray(shopFloorId, this.oneAllValueList))) {
        this.errorOneClass = true;
      } else {
        this.errorOneClass = false;
      }
    }, 200);
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
