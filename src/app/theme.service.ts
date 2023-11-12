import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'theme';
  private isDarkMode = false;

  getDarkMode(): boolean {
    const storedTheme  = localStorage.getItem(this.THEME_KEY);
    return this.isDarkMode = storedTheme === 'dark';
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem(this.THEME_KEY, this.isDarkMode ? 'dark' : 'light');
  }
}