import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'microsoft-teams-template';
  navOpen = false;
  submenuOpen: Record<string, boolean> = {};
  toggleSubmenu(key: string) {
    this.submenuOpen[key] = !this.submenuOpen[key];
  }
  toggleNav() {
    this.navOpen = !this.navOpen;
  }
}
