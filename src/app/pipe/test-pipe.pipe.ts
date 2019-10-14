import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe'
})
export class TestPipePipe implements PipeTransform {

  transform(baseNum: number, indexNum: string): number {
    const exp = parseFloat(indexNum);
    return Math.pow(baseNum, isNaN(exp) ? 1 : exp);
  }

}
