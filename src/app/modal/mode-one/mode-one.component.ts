import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AppService} from '../../app.service';
declare let $: any;

@Component({
  selector: 'app-mode-one',
  templateUrl: './mode-one.component.html',
  styleUrls: ['./mode-one.component.scss']
})
export class ModeOneComponent implements OnInit, OnChanges {

  oneTitle = 'Add One Info';
  oneHeight  = '';
  // tslint:disable-next-line:no-input-rename
  @Input('windowHeightRight') windowHeightRight: number;
  constructor(private service: AppService) { }

  ngOnInit() {
    if (this.windowHeightRight === 0) {
      this.windowHeightRight = $(window).height();
    }
    this.oneHeight = this.windowHeightRight * 0.5 + 'px';
  }

  resetForm() {
    $('.sq-form-value').val('');
    $('.num-form-value').val('');
    $('.name-form-value').val('');
    $('.key-form-value').val('');
    $('.value-form-value').val('');
    $('.type-form-value').val('1');
    $('.page-form-value').val('');
    $('.base-form-value').val('');
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if ('windowHeightRight' === propName) {
        const propValue = changes[propName];
        if ( !propValue.isFirstChange() ) {
          this.oneHeight = this.windowHeightRight * 0.5 + 'px';
        }
      }
    }
  }

  saveForm() {
    const sq = $('.sq-form-value').val();
    const num = $('.num-form-value').val();
    const name = $('.name-form-value').val();
    const key = $('.key-form-value').val();
    const value = $('.value-form-value').val();
    const type = $('.type-form-value').val();
    const page = $('.page-form-value').val();
    const base = $('.base-form-value').val();
    const urlParams = sq + '/' + num + '/' + name + '/' + key + '/' + value + '/' + type + '/' + page + '/' + base;
    /*this.service.saveFormGetHttp(urlParams).subscribe(
      dataJson => {
        const bodyJson = this.dataHanlde(dataJson);
        const flag = bodyJson.flag;
        console.log(flag);
        if ('success' === flag) {
          $('#modalOne').modal('hide');
        }
      },
      error => {

      }
    );*/
    this.service.saveFormPostHttp(sq, num, name, key, value, type, page, base).subscribe(
      data => {
        console.log(data);
      },
      error => {

      }
    );
  }

  private dataHanlde(data: any) {
    const body = data['_body'];
    return JSON.parse(body);
  }
}
