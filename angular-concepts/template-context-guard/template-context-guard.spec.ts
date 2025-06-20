import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateContextGuard } from './template-context-guard';

describe('TemplateContextGuard', () => {
  let component: TemplateContextGuard;
  let fixture: ComponentFixture<TemplateContextGuard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateContextGuard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateContextGuard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
