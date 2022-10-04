import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
 name : 'trimmer'
})
export class trimmer implements PipeTransform{
    transform(value: string) {
        return value.substring(0,10)+"..."+" more";
    }
}

