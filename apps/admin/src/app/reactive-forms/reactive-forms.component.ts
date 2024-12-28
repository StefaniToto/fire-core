import {
  ChangeDetectorRef,
  Component,
  inject,
  NgZone,
  OnInit,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { JsonPipe, NgForOf } from '@angular/common';

@Component({
  selector: 'code-from-root-reactive-forms',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-forms.component.html',
})
export class ReactiveFormsComponent {
  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    stocks: this.fb.array([
      this.fb.group({ name: 'Kristy', age: 12 }),
      this.fb.group({ name: 'Charlene', age: 13 }),
    ]),
  });

  cdr = inject(ChangeDetectorRef);
  zone = inject(NgZone);

  reset() {
    console.log(this.getAttendeeGroups.controls);
    this.admins.clear();
    this.form.reset();
    this.cdr.markForCheck();
    this.getAttendeeGroups.push(this.fb.group({ name: 'Kristy', age: 12 }));
    this.cdr.markForCheck();
    this.cdr.detectChanges();

    setTimeout(() => {
      this.getAttendeeGroups.push(this.fb.group({ name: 'Kristy', age: 2 }));

      this.getAttendeeGroups.push(this.fb.group({ name: '1111', age: 12 }));
    }, 0);

    this.zone.run(() => {
      this.getAttendeeGroups.push(this.fb.group({ name: '2222222', age: 12 }));
    });
  }

  get admins() {
    return this.form.controls['stocks'] as FormArray;
  }
  clearAllNameFields(): void {
    const stock = this.form.get('stocks') as FormArray;
    stock.controls.forEach((stock) => stock.patchValue({ name: '' }));
  }
  get getAttendeeGroups(): FormArray {
    return (<FormArray>this.form.get('stocks')) as FormArray;
  }
}
