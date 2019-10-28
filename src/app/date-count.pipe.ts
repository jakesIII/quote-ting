import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date();
    let dayWithNoTime: any = new Date (today.getFullYear(), today.getMonth(), today.getDate())
    var difference = Math.abs(value - dayWithNoTime)
    const secondsperDay = 86400;
    var dateDifference = difference*0.001;
    var dateCounter = Math.floor(dateDifference/secondsperDay);
    const minutesPerDay = 1440;
    var minuteCounter = dateDifference/minutesPerDay;

    if (dateCounter >= 1 && value > dayWithNoTime){
      return 0;
    } else {
      return dateCounter;
    }
  }

}
