import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-slot-content',
  template: ` <ng-content select="[question]"></ng-content>
    <ng-content select=".p1"></ng-content>
    <ng-content></ng-content>`,
  standalone: true,
})
export class SingleSlotContentProjectionComponent {}
