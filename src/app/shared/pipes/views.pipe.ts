import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'views'
})
export class ViewsPipe implements PipeTransform {

  transform(num: number, decimal: number = 0): any {

    if (isNaN(num)) return null;
    if (num === null) return null;
    if (num === 0) return null;

    let exp: number;
    const suffixes = ['K', 'M', 'B', 'T', 'Q'];

    if (num < 1000) return num;

    exp = Math.floor(Math.log(num) / Math.log(1000));

    return (num / Math.pow(1000, exp)).toFixed(decimal) + suffixes[exp - 1];
  }

}
