import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(
    private router: Router,
    ) { }

  dateFormat(data: Date): string {
    let day = data.getDate() < 10 ? "0" + data.getDate() : data.getDate();
    let mounth = data.getMonth() + 1 < 10 ? "0" + (data.getMonth() + 1) : (data.getMonth() + 1);

    return `${data.getFullYear()}-${mounth}-${day}`;
  }
  hourFormat(hour: Date): string {
    let t1 = hour.getHours() < 10 ? "0" + hour.getHours() : hour.getHours();
    let t2 = hour.getMinutes() < 10 ? "0" + hour.getMinutes() : hour.getMinutes();
    return `${t1}:${t2}`;
  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }
  DateInFormatUTC(date: Date)
  {
 return this.dateFormat(date) + "T" + this.hourFormat(date);
  }

}
