import { ComponentFixture, TestBed } from '@angular/core/testing';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LazyModuleRoutingModule } from './lazy-module/lazy-module-routing.module';
import { LazyModuleComponent } from './lazy-module/lazy-module.component';
import { MockRender, ngMocks } from 'ng-mocks';
import { DashboardComponent } from './dashboard/dashboard.component';

describe('AppComponent', () => {
  // let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    // let fixture = TestBed.createComponent(AppComponent);
    TestBed.configureTestingModule({
      declarations: [AppComponent, LazyModuleComponent],
      imports: [
        RouterTestingModule.withRoutes(routes),
        LazyModuleRoutingModule,
      ],
    });
  });

  it('should render hero name in a h2 tag', () => {
    expect(true).toBe(true);
  });

  it('renders lazy component', () => {
    const fixture = MockRender(LazyModuleComponent);
    // console.log(
    //   ngMocks.formatText(fixture),
    //   'aaaaa',
    //   fixture.componentInstance.title
    // );
    expect(ngMocks.formatText(fixture)).toEqual('lazy-component');
  });

  it('should contain route for /dashboard', () => {
    const expectedRoute = {
      path: 'dashboard',
      component: DashboardComponent,
    };

    console.log(routes);
    expect(routes).toContain(expectedRoute);
  });
});
