import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modelName'
})
export class ModelNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value =="M"){
      return "男"
    }else{
      return "女"
    }
  }

}
