import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResolversRoutingComponent } from './resolvers-routing.component';

describe('ResolversRoutingComponent', () => {
  let component: ResolversRoutingComponent;
  let fixture: ComponentFixture<ResolversRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResolversRoutingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResolversRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
