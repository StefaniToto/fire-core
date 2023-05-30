import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  ViewContainerRef,
  HostListener,
  inject,
} from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { DropdownPanel } from './dropdown-panel';
import { Observable, Subscription, merge } from 'rxjs';
import { TemplatePortal } from '@angular/cdk/portal';
@Directive({
  selector: '[app-dropdownTriggerFor]',
  // host: {
  //   '(click)': 'toggleDropdown()',
  // },
  standalone: true,
})
export class DropdownTriggerDirective implements OnDestroy {
  @HostListener('click') toggleDropdown() {
    this.isDropdownOpen ? this.destroyDropdown() : this.openDropdown();
  }
  private isDropdownOpen = false;
  private overlayRef: OverlayRef;
  private dropdownClosingActionsSub = Subscription.EMPTY;
  @Input('app-dropdownTriggerFor') public dropdownPanel: DropdownPanel;

  private readonly overlay = inject(Overlay);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  openDropdown(): void {
    this.isDropdownOpen = true;
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.close(),
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.elementRef)
        .withPositions([
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
            offsetY: 8,
          },
        ]),
    });

    const templatePortal = new TemplatePortal(
      this.dropdownPanel.templateRef,
      this.viewContainerRef
    );

    this.overlayRef.attach(templatePortal);
    this.dropdownClosingActionsSub = this.dropdownClosingActions().subscribe(
      () => this.destroyDropdown()
    );
  }

  private dropdownClosingActions(): Observable<MouseEvent | void> {
    const backdropClick$ = this.overlayRef.backdropClick();
    const detachment$ = this.overlayRef.detachments();
    const dropdownClosed = this.dropdownPanel.closed;

    return merge(backdropClick$, detachment$, dropdownClosed);
  }

  private destroyDropdown(): void {
    if (!this.overlayRef || !this.isDropdownOpen) {
      return;
    }

    this.dropdownClosingActionsSub.unsubscribe();
    this.isDropdownOpen = false;
    this.overlayRef.detach();
  }

  ngOnDestroy(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
  }
}
