import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Cookies from 'js-cookie'
@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(
    private router: Router,
  ) { }

  public dateFormat(data: Date): string {
    let day = data.getDate() < 10 ? "0" + data.getDate() : data.getDate();
    let mounth = data.getMonth() + 1 < 10 ? "0" + (data.getMonth() + 1) : (data.getMonth() + 1);

    return `${data.getFullYear()}-${mounth}-${day}`;
  }
  public hourFormat(hour: Date): string {
    let t1 = hour.getHours() < 10 ? "0" + hour.getHours() : hour.getHours();
    let t2 = hour.getMinutes() < 10 ? "0" + hour.getMinutes() : hour.getMinutes();
    return `${t1}:${t2}`;
  }

  public redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }
  public myNavigate(uri: string) {
      this.router.navigate([uri]);
  }
  public DateInFormatUTC(date: Date) {
    return this.dateFormat(date) + "T" + this.hourFormat(date);
  }
  public DateHourFormatUTC(date, hour) {
    date = new Date(date);
    return this.dateFormat(date) + "T" + hour;
  }

  


}
