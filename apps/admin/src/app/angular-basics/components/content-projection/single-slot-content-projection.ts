import { Component } from '@angular/core';

@Component({
  selector: 'app-single-slot-content',
  template: ` <ng-content></ng-content>`,
  standalone: true,
})
export class MultiSlotContentProjectionComponent {}
