import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapPipe',
})
export class MapPipePipe implements PipeTransform {
  transform(value: string[] , param:string): any {
    return value.map((x) =>
                       x.
                       replace(param, param.substring(0,4)));
  }
}
