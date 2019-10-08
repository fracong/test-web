import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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
  constructor() { }

  ngOnInit() {
    if (this.windowHeightRight === 0) {
      this.windowHeightRight = $(window).height();
    }
    this.oneHeight = this.windowHeightRight * 0.5 + 'px';
  }

  resetForm() {
    $('.sq-form-value').val('');
    $('.num-form-value').val('');
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
}
