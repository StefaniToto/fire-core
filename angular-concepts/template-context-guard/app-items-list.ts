import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'app-items-list',
  template: ` <div
    class="border-grey-300 flex justify-between border px-2 py-1"
  >
    <ng-content />
    <button (click)="delete.emit()">
      <img
        class="h-5"
        src="/assets/svg/trash.svg"
        alt="trash_icon"
        width="10px"
      />
    </button>
  </div>`,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedItemList {
  delete = output();
}
