import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modelpName'
})
export class ModelpNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value =="A"){
      return "AL102"
    }
    if(value =="B"){ 
      return "BY003"
    }
    if(value =="C"){ 
      return "CM002"
    }
  }

}
