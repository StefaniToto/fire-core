import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'code-from-root-angular-routing',
  templateUrl: './angular-routing.component.html',
  styleUrls: ['./angular-routing.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularRoutingComponent implements OnInit {
  users$!: Observable<any[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.users$ = this.http.get<any[]>(
      `https://jsonplaceholder.typicode.com/users`
    );
  }
}
