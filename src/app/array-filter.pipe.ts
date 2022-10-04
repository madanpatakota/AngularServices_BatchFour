import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilter'
})
export class ArrayFilterPipe implements PipeTransform {

  transform(value: string[] , param:any): any {
    console.log(value);
    return value.splice(0,param);
  }

}
