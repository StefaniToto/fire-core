import { Component } from '@angular/core';
import { DropdownTriggerForDirective } from './dropdown-trigger-directive';
import { DropdownComponent } from './dropdown';
@Component({
  standalone: true,
  selector: 'code-from-root-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  imports: [DropdownComponent, DropdownTriggerForDirective],
})
export class DropdownComponentPage {
  test(): void {
    console.log('test');
  }
}
