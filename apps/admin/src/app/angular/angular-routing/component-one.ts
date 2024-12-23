import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'component-one',
    template: `
    <ul>
      <li *ngFor="let user of users$ | async">
        <a
          [routerLink]="[{ outlets: { sidebar: ['user', user.id] } }]"
          class="link primary"
        >
          <h4 class="mat-title">{{ user.name }}</h4>
        </a>
        <p class="mat-caption">{{ user.email }}</p>
      </li>
    </ul>
  `,
    styles: [
        `
      .link {
        display: block;
      }
      .mat-title {
        margin-bottom: 0;
      }
    `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export default class ComponentOneComponent implements OnInit {
  users$!: Observable<any[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.users$ = this.http.get<any[]>(
      `https://jsonplaceholder.typicode.com/users`
    );
  }
}
