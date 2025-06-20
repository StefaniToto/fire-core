import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DemoUrl, DisplayContentDirective } from './display-content.directive';
import { SharedCardComponent } from './app-shared-card';
import { TeacherStore } from '../../data-access/teacher.store';
import { CardRowProjectionDirective } from './crad-row-prejection.directive';
import { SharedItemList } from './app-items-list';

@Component({
  selector: 'app-template-context-guard',
  imports: [
    SharedCardComponent,
    SharedCardComponent,
    DisplayContentDirective,
    SharedItemList,
  ],
  providers: [TeacherStore],
  template: `
    <div
      *displayTemplateContext="
        demoString;
        url: demoUrl;
        let version;
        let demo = demo;
        let url = url
      "
    >
      This is some content with Directive {{ version }} - {{ demo }} -
      {{ url.url }}
    </div>
    -------------Another example shared card--------------

    <app-shared-card
      [items]="teacherStore.$teachers()"
      (addNewItem)="teacherStore.addOne()"
      class="bg-light-red"
    >
      <ng-template
        [cardRowProjection]="teacherStore.$teachers()"
        let-teacher
        let-id="id"
      >
        <app-items-list (delete)="teacherStore.deleteOne(teacher.id)"
          >{{ id }}- {{ teacher.firstName }}</app-items-list
        >
      </ng-template>
    </app-shared-card>
  `,
  styleUrl: './template-context-guard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateContextGuard {
  readonly teacherStore = inject(TeacherStore);
  demoString = 'abrupt';
  demoUrl: DemoUrl = {
    url: 'http://',
    video: true,
  };
}
