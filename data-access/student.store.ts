import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { Student } from '../model/student.model';
import { FakeHttpService, randStudent } from './fake-http.service';

interface Store {
  $students: WritableSignal<Student[]>;
}

@Injectable()
export class StudentStore {
  private readonly _http = inject(FakeHttpService);
  private readonly _state: Store = {
    $students: signal<Student[]>([]),
  };
  readonly $students = this._state.$students.asReadonly();
  $fetchStudents = toSignal(
    this._http.fetchStudents$.pipe(
      tap((t: Student[]) => this._state.$students.set(t)),
    ),
  );

  addOne() {
    this._state.$students.update((t: Student[]) => [...t, randStudent()]);
  }

  deleteOne(id: number) {
    this._state.$students.set(
      this.$students().filter((t: Student) => t.id !== id),
    );
  }
}
