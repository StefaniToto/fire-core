import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'code-from-root-angular-main',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './angular-main.component.html',
  styleUrls: ['./angular-main.component.css'],
})
export class AngularMainComponent {}
