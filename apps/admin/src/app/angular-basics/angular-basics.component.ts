import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'code-from-root-angular-basics',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './angular-basics.component.html',
  styleUrls: ['./angular-basics.component.css'],
})
export class AngularBasicsComponent {}
