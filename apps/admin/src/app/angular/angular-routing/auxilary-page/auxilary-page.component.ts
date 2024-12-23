import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
} from '@angular/core';
import { Observable, pluck, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'code-from-root-auxilary-page',
    templateUrl: './auxilary-page.component.html',
    styleUrls: ['./auxilary-page.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class AuxilaryPageComponent implements OnInit {
  @HostBinding('class.mat-elevation-z2') hostCls = true;
  user$!: Observable<any>;
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.user$ = this.activatedRoute.params.pipe(
      tap(console.log),
      pluck('id'),
      switchMap((id) =>
        this.http.get<any>(`https://jsonplaceholder.typicode.com/users/${id}`)
      )
    );
  }
}
