import { Component } from '@angular/core';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterModule, SidenavComponent, HeaderComponent],
})
export class AppComponent {
  title = 'admin';
}
