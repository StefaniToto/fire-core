import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSlotContentProjectionComponent } from './single-slot-content-projection';
import { SingleSlotContentProjectionComponent } from './multi-slot-content-projection';

@Component({
  selector: 'code-from-root-a1-templates',
  standalone: true,
  imports: [
    CommonModule,
    SingleSlotContentProjectionComponent,
    MultiSlotContentProjectionComponent,
  ],
  styles: ['.main-content{ margin: 20px;}'],
  template: `<div class="main-content">
    <h2>1. Content projection. ng-content</h2>
    <p>
      Content projection is a pattern in which you insert, or project, the
      content you want to use inside another component.
    </p>
    <h3><b>Single slot content projection. Main page</b></h3>
    <app-single-slot-content>
      <p>Is content projection cool?</p></app-single-slot-content
    >
    <h3><b>Multi slot content projection. Main page</b></h3>
    <app-multi-slot-content>
      <p question>Example Is multi content projection cool?</p>
      <p>Example Im renderifgn to multiple 1l?</p>
      <p class="p1">Example 2 Im renderifgn to multiple 2?</p>
    </app-multi-slot-content>
    <hr />
    <!-- ------------------------------------------------------------------- -->
    <h2>2. ng-template</h2>
    <p>
      is an Angular directive that allows you to define template content used
      with structural directives (*ngIf, *ngFor, [ngSwitch] and custom
      directives).
    </p>

    <p>2.1 Reusable Content with Template Refs</p>
    <p>2.2 Simplifying Structural Directives</p>
    <div *ngIf="shouldRender; then thenBlock; else elseBlock"></div>
    <ng-template #thenBlock>
      Say something im the then block. Angular replaces the ng-template with
      diagnostic comments
    </ng-template>
    <ng-template #elseBlock>Example Im the else block</ng-template>

    <p>2.3 Dynamic Rendering and Conditional Logic</p>
  </div>`,
})
export class A1TemplatesComponent {
  shouldRender = false;
}
