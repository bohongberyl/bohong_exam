import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modelpName'
})
export class ModelpNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value =="M"){
      return "男"
    }else{
      return "女"
    }
  }

}
