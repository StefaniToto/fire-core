import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { Teacher } from '../model/teacher.model';
import { FakeHttpService, randTeacher } from './fake-http.service';

interface State {
  $teachers : WritableSignal<Teacher[]>
}

@Injectable()
export class TeacherStore {
  private readonly _http = inject(FakeHttpService);
  private readonly _state : State = {
    $teachers: signal<Teacher[]>([]),
  };
  readonly $teachers = this._state.$teachers.asReadonly();

  $fetchTeachers = toSignal(
    this._http.fetchTeachers$.pipe(
      tap((t: Teacher[]) => this._state.$teachers.set(t)),
    ),
  );




  addOne() {
    this._state.$teachers.update((t: Teacher[]) => [...t, randTeacher()]);
  }

  deleteOne(id: number) {
    this._state.$teachers.set(
      this.$teachers().filter((t: Teacher) => t.id !== id),
    );
  }
}
