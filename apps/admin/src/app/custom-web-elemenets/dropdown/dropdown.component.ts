import {
  Component,
  ElementRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DropdownTriggerForDirective } from './dropdown-trigger-directive';
import { DropdownComponent } from './dropdown';
import {
  CdkConnectedOverlay,
  Overlay,
  OverlayModule,
  OverlayRef,
} from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'code-from-root-dropdown',
  templateUrl: './dropdown.component.html',
  standalone: true,
  styleUrls: ['./dropdown.component.scss'],
  imports: [DropdownTriggerForDirective, DropdownComponent, OverlayModule],
})
export class DropdownComponentPage {
  constructor(
    private _overlay: Overlay,
    private _viewContainerRef: ViewContainerRef
  ) {}
  isOpen = false;

  @ViewChild('btn3') button: ElementRef;
  @ViewChild('templ') content: TemplateRef<any>;
  private _overlayRef: OverlayRef;
  private _portal: TemplatePortal<any>;
  open() {
    if (!this._overlayRef) {
      const positionStrategy = this._overlay
        .position()
        .flexibleConnectedTo(this.button)
        .withPositions([
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
            offsetY: 8,
          },
        ]);

      this._overlayRef = this._overlay.create({
        hasBackdrop: true,
        backdropClass: 'cdk-overlay-transparent-backdrop',
        positionStrategy,
      });

      this._overlayRef
        .backdropClick()
        .subscribe(() => this._overlayRef.detach());
      this._portal = new TemplatePortal(this.content, this._viewContainerRef);
    }

    this._overlayRef.attach(this._portal);
  }

  close() {
    this._overlayRef.detach();
  }
}
