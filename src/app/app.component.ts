import { Component, HostBinding } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rest-countries-api-with-color-theme-switcher';
  constructor(public theme: ThemeService) {}
  darkMode = false;

  @HostBinding('class.dark') get Theme(){
    return this.theme.getDarkMode();
  }

}
