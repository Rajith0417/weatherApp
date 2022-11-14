import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsius'
})
export class CelsiusPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return Math.round(value - 273.15);
    // return null;
  }

}
