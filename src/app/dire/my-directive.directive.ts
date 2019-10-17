import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})

/**
 * 属性型指令
 */
export class MyDirectiveDirective {
  @Input('appMyDirective') myColor: string;

  @Input() myFlag: string;

  constructor(private er: ElementRef) {  }

  @HostListener('mouseenter') onMouseEnter() {
    if ('true' === this.myFlag) {
      this.changeColor('yellow');
    } else {
      this.changeColor(this.myColor || 'red');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(null);
  }

  changeColor(color: string) {
    this.er.nativeElement.style.color = color;
  }
}
