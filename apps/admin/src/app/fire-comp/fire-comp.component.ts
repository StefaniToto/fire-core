import {  Component,  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'code-from-root-fire-comp',
  standalone: true,
  imports: [CommonModule],
  providers:  [],
  styleUrls: ['./fire-comp.component.css'],
  template: `
    <div class="schedule">


    </div>
  `
})
export class FireCompComponent {}
