import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, OnDestroy} from '@angular/core';
import {AppService} from '../../app.service';
declare let $: any;

@Component({
  selector: 'app-mode-one',
  templateUrl: './mode-one.component.html',
  styleUrls: ['./mode-one.component.scss']
})
export class ModeOneComponent implements OnInit, OnChanges, OnDestroy {

  oneTitle = 'Add One Info';
  oneHeight  = '';
  timer;
  windowHeightRightPre = $(window).height() * 0.5;
  // tslint:disable-next-line:no-input-rename
  @Input('windowHeightRight') windowHeightRight: number;
  constructor(private service: AppService,
              private ref: ChangeDetectorRef) {
    /**
     * 定时器，每0.1s启动一次，用于监听window的height是否发生变化
     */
    this.timer = setInterval(() => {
      const currentWindowHeight = $(window).height();
      if (currentWindowHeight !== this.windowHeightRightPre) {
        this.oneHeight = currentWindowHeight * 0.5 + 'px';
      }
      this.ref.detectChanges();
    }, 100);
  }

  /**
   * 当组件销毁时，清空定时器
   */
  ngOnDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

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

  /**
   * 监听@Input变量是否发生变化
   * @param changes
   */
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
    this.service.saveFormPostHttp(sq, num, name, key, value, type, page, base).subscribe(
      dataJson => {
        const flag = dataJson['flag'];
        if ('success' === flag) {
          $('#modalOne').modal('hide');
          this.resetForm();
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
