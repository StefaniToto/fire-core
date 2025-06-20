import { Directive, input } from '@angular/core';
interface CardRowDirective<T> {
  $implicit: T;
  id: number;
}
@Directive({
  selector: 'ng-template[cardRowProjection]',
  standalone: true,
})
export class CardRowProjectionDirective<T> {
  cardRowProjection = input.required<T[]>();

  static ngTemplateContextGuard<T>(
    dir: CardRowProjectionDirective<T>,
    ctx: any,
  ): ctx is CardRowDirective<T> {
    return true;
  }
}
