import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
//   private isDarkMode = new BehaviorSubject<boolean>(false);

//   getDarkMode(): Observable<boolean> {
//     return this.isDarkMode.asObservable();
//   }

//   toggleDarkMode() {
//     this.isDarkMode.next(!this.isDarkMode.value);
//   }
private isDarkMode = false;

  getDarkMode(): boolean {
    return this.isDarkMode;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}