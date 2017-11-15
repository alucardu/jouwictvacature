import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            return value.filter(function (el: any) {
                return el.title.indexOf(input) > -1 || el.city.toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }
}