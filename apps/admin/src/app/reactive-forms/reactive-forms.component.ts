import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
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
  imports: [FormsModule, ReactiveFormsModule, NgForOf, JsonPipe],
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

  reset() {
    this.admins.clear();
    this.getAttendeeGroups.push(
      this.fb.group({
        stocks: this.fb.array([
          this.fb.group({ name: 'wwwwww', age: 12 }),
          this.fb.group({ name: 'Charlene', age: 13 }),
          this.fb.group({ name: 'Nick', age: 14 }),
          this.fb.group({ name: 'Joe', age: 15 }),
        ]),
      })
    );
  }

  get admins() {
    return this.form.controls['stocks'] as FormArray;
  }
  clearAllNameFields(): void {
    const stock = this.form.get('stocks') as FormArray;
    stock.controls.forEach((stock) => stock.patchValue({ name: '' }));
  }
  get getAttendeeGroups(): FormArray {
    return <FormArray>this.form.get('stocks');
  }
}
