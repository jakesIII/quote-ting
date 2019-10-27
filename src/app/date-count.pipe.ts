import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): any {
    let today: Date = new Date();
    let dayWithNoTime: any = new Date (today.getFullYear(), today.getMonth(), today.getDate())
    var difference = Math.abs(value - dayWithNoTime)
    const secondDay = 86400;
    var dateDifference = difference*0.001;
    var dateCounter = dateDifference/secondDay;

    if (dateCounter >= 1 && value > dayWithNoTime){
      return dateCounter;
    } else {
      return 0;
    }
  }

}
