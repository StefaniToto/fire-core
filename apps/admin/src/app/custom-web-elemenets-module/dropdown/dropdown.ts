import {
  Component,
  Output,
  TemplateRef,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { DropdownPanel } from './dropdown-panel';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.html',
  standalone: true,
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements DropdownPanel {
  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;
  @Output() closed = new EventEmitter<void>();
}
