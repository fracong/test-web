import { Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMyDirectiveTwo]'
})

/**
 * 结构型指令
 */
export class MyDirectiveTwoDirective {

  constructor(private temp: TemplateRef<any>, private view: ViewContainerRef) { }

  @Input() set appMyDirectiveTwo(flag: boolean) {
    if (flag) {
      this.view.createEmbeddedView(this.temp);
    } else {
      this.view.clear();
    }
  }
}
