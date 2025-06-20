import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  input,
  output,
  TemplateRef,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { CardRowProjectionDirective } from './crad-row-prejection.directive';

@Component({
  selector: 'app-shared-card',
  template: ` <section>
      @for (item of items(); track item.id) {
        <ng-template
          [ngTemplateOutlet]="cardRow()"
          [ngTemplateOutletContext]="{ $implicit: item, id: item.id }"
        ></ng-template>
      }
    </section>
    <button
      class="rounded-sm border border-blue-500 bg-blue-300 p-2"
      (click)="addNewItem.emit()"
    >
      Add a new item
    </button>`,

  imports: [NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedCardComponent<T extends { id: number }> {
  items = input.required<T[]>();
  addNewItem = output();
  cardRow = contentChild.required(CardRowProjectionDirective, {
    read: TemplateRef,
  });
}
