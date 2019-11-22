import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure:false
})
export class SortPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value){
      return value.filter( ele => {
        return ele.email.indexOf(args) != (-1)
      })
    }
    return value

  }

}
