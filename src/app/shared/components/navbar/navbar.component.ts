import { Component } from '@angular/core';
import { ThemeService } from '../../../theme.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private themeService: ThemeService) {}

  get darkMode(): boolean {
    return this.themeService.getDarkMode();
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }

}
